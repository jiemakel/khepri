namespace fi.seco.khepri {
  'use strict'

  import s = fi.seco.sparql

  interface IMultiGoogleChartViewsScope extends angular.IScope {
    selectedGrouping: Grouping
    availableGroupings: Grouping[]
    graphType: string
    movingSpan: number
    avgType: string
    queries: Query[]
    charts: IdChart[]
    viewId: string
    hideTotals: boolean
    separateGroups: boolean
    accumulation: boolean
    bootstraps: number
  }

  export interface IMultiGoogleChartViewsConfiguration {
    partitionsQuery: string
    graphQuery: string
    groupingString: string
  }

  class Data {
    public matchesByYearAndQueryAndGroupAndAggregation: {[id: number]: {[id: string]: {[id: string]: {[id: string]: number}}}} = {}
    public totalsByYearAndGroupAndAggregation: {[id: number]: {[id: string]: {[id: string]: number}}} = {}
    public queries: {[id: string]: boolean} = {}
    public groups: {[id: string]: string} = {}
    public groupsByAggregation: {[id: string]: {[id: string]: boolean}} = {}
    public minYear: number = Number.MAX_VALUE
    public maxYear: number = Number.MIN_VALUE
  }

  class IdChart extends ChartDefinition {
    constructor(
      public queryId: string,
      public select: (selection: google.visualization.VisualizationSelectionArray, chartDefinition: IdChart, chart: google.visualization.ChartWrapper) => void
    ) { super() }
  }

  class Grouping {
    constructor(public id: string, public label: string) {}
  }

  export class MultiGoogleChartViewsDirective implements angular.IDirective {
    private static propertiesQuery: string = `
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      SELECT ?property (SAMPLE(?l) AS ?propertyLabel) {
        {
          SELECT DISTINCT ?property {
            ?id crm:P28_custody_surrendered_by ?person .
            ?person ?property ?object .
            FILTER isIRI(?object)
          }
        }
        ?property skos:prefLabel|rdfs:label ?l .
        FILTER (LANG(?l) = 'en' || LANG(?l) = '')
      }
      GROUP BY ?property
    `
    private static graphQuery: string = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
      PREFIX pf: <http://jena.hpl.hp.com/ARQ/property#>
      SELECT ?queryId ?group (SAMPLE(?l2) AS ?groupLabel) ?aggrId ?year (MAX(?mwords) AS ?matching) (MAX(?twords) as ?total) {
        {
          {
            SELECT ?queryId ?group (SAMPLE(?l) AS ?l2) ?aggrId ?year ((COUNT(?foo)-COUNT(DISTINCT ?id)) AS ?mwords) {
              { # CONSTRAINTHOLDER
                # CONSTRAINTS
                BIND(<REGEX> AS ?regex)
                BIND(<QUERY_ID> AS ?queryId)
              } # /CONSTRAINTHOLDER
              ?id cs:year ?year .
              ?id cs:fulltext ?fulltext .
              ?foo pf:strSplit (?fulltext ?regex) .
              # AGGREGATION
              # GROUPING
            }
            GROUP BY ?queryId ?group ?aggrId ?year
          }
        } UNION {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?aggrId ?year (SUM(STRDT(?wc, xsd:integer)) AS ?twords) {
              ?id a cs:Letter .
              ?id cs:year ?year .
              ?id cs:wordcount ?wc .
              # AGGREGATION
              # GROUPING
            }
            GROUP BY ?group ?aggrId ?year
          }
        }
      }
      GROUP BY ?queryId ?group ?year ?aggrId
      ORDER BY ?queryId ?group ?year
    `
    public restrict: string = 'E'
    public templateUrl: string = 'partials/multigooglechartviews.html'
    public scope: {[id: string]: string} = {
      'viewId': '@',
      'queries': '='
    }
    constructor(private sparqlService: s.SparqlService, private configService: ConfigService, private stateService: StateService) {
    }
    public link: (...any) => void = ($scope: IMultiGoogleChartViewsScope, element: JQuery, attr: angular.IAttributes) => {
      $scope.avgType = 'total'
      $scope.movingSpan = 20
      $scope.graphType = 'individual'
      $scope.bootstraps = 1
      $scope.selectedGrouping = null;
      this.sparqlService.query(this.configService.config.sparqlEndpoint, MultiGoogleChartViewsDirective.propertiesQuery).then(
        (response: angular.IHttpPromiseCallbackArg <s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => $scope.availableGroupings = response.data.results.bindings.map(b => new Grouping(b['property'].value, b['propertyLabel'].value))
        ,
        (response: angular.IHttpPromiseCallbackArg <string>) => console.log(response)
      )
      let selectListener: (selection: google.visualization.VisualizationSelectionArray[], chartDefinition: IdChart, chart: google.visualization.ChartWrapper) => void = (selection: google.visualization.VisualizationSelectionArray[], chartDefinition: IdChart, chart: google.visualization.ChartWrapper) => {
        let constraint: string
        if (selection.length !== 0) {
          let year: number = chartDefinition.dataTable.getValue(selection[0].row, 0)
          constraint = `?id cs:year ?year . FILTER (STRDT(?year,xsd:integer)>${year - $scope.movingSpan / 2} && STRDT(?year,xsd:integer)<${year + $scope.movingSpan / 2}) `
          let gtype: string = chartDefinition.dataTable.getColumnId(selection[0].column)
          if (gtype) constraint += `?id crm:P28_custody_surrendered_by/<${$scope.selectedGrouping.id}> <${gtype}> .`
        } else constraint = ''
        this.stateService.setConstraint(chartDefinition.queryId, $scope.viewId, new SimpleConstraint(constraint, 2))
      }
      let updateGraphs: () => void = () => {
        const queryParts: string[] = MultiGoogleChartViewsDirective.graphQuery.split(/[\{\}] # \/?CONSTRAINTHOLDER/)
        let sparqlQuery: string = queryParts[0]
        $scope.queries.forEach(query => {
          let regex: string = '(?:'
          let constraints: {[id: string]: IConstraint} = this.stateService.getQueryState(query.name).constraints
          for (let viewId in constraints) {
            if (constraints[viewId] instanceof TextSearchConstraint) regex += (<TextSearchConstraint>constraints[viewId]).sparqlRegex + '|'
          }
          if (regex.charAt(regex.length - 1) === '|') regex = regex.substring(0, regex.length - 1)
          regex += ')'
          if (regex === '(?:)') regex = '^$'
          let filter: {[id: string]: boolean} = {}
          filter[$scope.viewId] = true
          let constraintString: string = this.stateService.getConstraintString(query.name, filter)
          sparqlQuery += '{' + queryParts[1].replace(/<QUERY_ID>/g, this.sparqlService.stringToSPARQLString(query.name)).replace(/# CONSTRAINTS/g, constraintString).replace(/<REGEX>/g, this.sparqlService.stringToSPARQLString(regex)) + '} UNION'
        })
        sparqlQuery = sparqlQuery.substring(0, sparqlQuery.length - 6) + queryParts[2]
        let grouping: string = $scope.selectedGrouping ? `?id crm:P28_custody_surrendered_by/<${$scope.selectedGrouping.id}> ?group . ?group skos:prefLabel ?l . FILTER (LANG(?l) = 'en' || LANG(?l) = '')` : '';
        let aggregation: string
        switch ($scope.avgType) {
          case 'total': aggregation = ''; break
          case 'text': aggregation = 'BIND(?id AS ?aggrId)'; break
          case 'author': aggregation = '?id crm:P28_custody_surrendered_by ?aggrId .'; break
          default: throw 'Unknown avgType ' + $scope.avgType
        }
        sparqlQuery = this.configService.config.prefixes + sparqlQuery.replace(/# AGGREGATION/g, aggregation).replace(/# GROUPING/g, grouping)
        this.sparqlService.query(this.configService.config.sparqlEndpoint, sparqlQuery).then(
          (response: angular.IHttpPromiseCallbackArg<s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => {
            let d: Data = MultiGoogleChartViewsDirective.processData(response.data.results.bindings)
            let ocharts: {[name: string]: IdChart} = {}
            $scope.charts.forEach(c => ocharts[c.queryId] = c)
            if ($scope.graphType === 'scattercomparison') { if (!ocharts['scatterComparison']) $scope.charts = [ new IdChart('scatterComparison', selectListener) ] }
            else if (!$scope.separateGroups && $scope.graphType !== 'areacomparison') $scope.charts = $scope.queries.map(q => ocharts[q.name] ? ocharts[q.name] : new IdChart(q.name, selectListener))
            else $scope.charts = Object.keys(d.groups).map(g => ocharts[g] ? ocharts[g] : new IdChart(g, selectListener))
            let accumulatingMatchesByChart: {[id: string]: number}[] = []
            let accumulatingTotalByChart: {[id: string]: number}[] = []
            let chartIds: {[id: string]: any}
            let groupIds: {[id: string]: any}
            let chartTitles: string[]
            let groupTitles: string[]
            if ($scope.graphType === 'scattercomparison') {
              chartTitles = [ 'Scatterplot' ]
            } else if ($scope.separateGroups || $scope.graphType === 'areacomparison') {
              chartIds = d.groups
              chartTitles = []
              for (let g in d.groups) chartTitles.push(d.groups[g])
              groupIds = d.queries
              groupTitles = Object.keys(d.queries)
            } else {
              chartIds = d.queries
              chartTitles = Object.keys(d.queries)
              groupIds = d.groups
              groupTitles = []
              for (let g in d.groups) groupTitles.push(d.groups[g])
            }
            $scope.charts.forEach((chart: ChartDefinition, index: number) => {
              chart.dataTable = new google.visualization.DataTable()
              switch ($scope.graphType) {
                case 'areacomparison' : chart.type = 'AreaChart'; break
                case 'individual' : chart.type = 'LineChart'; break
                case 'scattercomparison' : chart.type = 'MotionChart'; break
                default: throw 'Unknown graphType ' + $scope.graphType
              }
              let series: {} = {}
              if ($scope.graphType === 'scattercomparison') chart.dataTable.addColumn('string', 'id')
              chart.dataTable.addColumn('number', 'year')
              let k: number = 0
              if ($scope.graphType !== 'scattercomparison') groupTitles.forEach((title: string, j: number) => {
                chart.dataTable.addColumn({id: groupIds[j], label: title, type: 'number'})
                if (!$scope.accumulation) {
                  chart.dataTable.addColumn({id: groupIds[j], label: title, role: 'interval', type: 'number'})
                  chart.dataTable.addColumn({id: groupIds[j], label: title, role: 'interval', type: 'number'})
                  chart.dataTable.addColumn({id: groupIds[j], label: title, role: 'interval', type: 'number'})
                  chart.dataTable.addColumn({id: groupIds[j], label: title, role: 'interval', type: 'number'})
                  chart.dataTable.addColumn({id: groupIds[j], label: title, role: 'interval', type: 'number'})
                  chart.dataTable.addColumn({id: groupIds[j], label: title, role: 'interval', type: 'number'})
                }
                series[k++] = {targetAxisIndex: 0}
                if ($scope.graphType === 'individual' && ($scope.accumulation || !$scope.hideTotals )) {
                  chart.dataTable.addColumn({id: groupIds[j], label: title + ' total', type: 'number'})
                  series[k++] = {targetAxisIndex: $scope.accumulation ? 0 : 1, lineWidth: 1, lineDashStyle: [5, 5], visibleInLegend: false}
                }
              }); else {
                chart.dataTable.addColumn('number', 'percentage of ' + $scope.queries[1].name)
                chart.dataTable.addColumn('number', 'total number of matches')
                chart.dataTable.addColumn('string', $scope.selectedGrouping ? $scope.selectedGrouping.label : 'matching')
              }
              chart.options = {
                title: chartTitles[index],
                explorer: { keepInBounds: true, maxZoomOut: 1 },
                theme: 'material',
                isStacked: 'percent',
                hAxis: {
                  title: 'year',
                  format: '#'
                },
                intervals: { style: 'line' },
                series: series,
                vAxes: {
                  0: {title: $scope.accumulation ? 'Percent' : 'Matches/million', minValue: 0, maxValue: $scope.graphType === 'areacomparison' ? 1 : 10},
                  1: {title: 'Count', gridlines: {color: 'none'}, minValue: 0, logScale: true}
                }
              }
              accumulatingMatchesByChart[index] = {}
              accumulatingTotalByChart[index] = {}
            })
            const rowsByChart: number[][][] = []
            rowsByChart.length = chartTitles.length
            for (let i: number = 0; i < rowsByChart.length; i++)
              rowsByChart[i] = []
            const mm: number = ($scope.accumulation && $scope.graphType === 'individual') ? 0 : Math.floor($scope.movingSpan / 2)
            for (let year: number = d.minYear; year <= d.maxYear; year++) {
              let chartIndex: number = 0
              if ($scope.graphType === 'scattercomparison') {
                const sumOfMatchesInSpanByAggregationAndQuery: {[id: string]: {[id: string]: number }} = {}
                const aggrIds: {[id: string]: boolean} = {}
                for (let queryId in d.queries)
                  for (let group in d.groups)
                    for (let i: number = year - mm; i <= year + mm; i++)
                      if (d.totalsByYearAndGroupAndAggregation[i]) {
                        if (d.matchesByYearAndQueryAndGroupAndAggregation[i] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group]) for (let aggrId in d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group]) {
                          aggrIds[aggrId] = true
                          if (!sumOfMatchesInSpanByAggregationAndQuery[aggrId]) sumOfMatchesInSpanByAggregationAndQuery[aggrId] = {}
                          if (!sumOfMatchesInSpanByAggregationAndQuery[aggrId][queryId]) sumOfMatchesInSpanByAggregationAndQuery[aggrId][queryId] = d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId]
                          else sumOfMatchesInSpanByAggregationAndQuery[aggrId][queryId] += d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId]
                        }
                      }
                const queryNames: string[] = Object.keys(d.queries)
                for (let id in aggrIds) {
                  let row: any[] = [ id, year, 100 * sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[1]] / (sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[1]] + sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[0]]), sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[0]] + sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[1]] ]
                  for (let g in d.groupsByAggregation[id]) {
                    const nrow: any[] = row.slice()
                    nrow.push(g)
                    rowsByChart[0].push(nrow)
                  }
                }
              } else for (let chartId in chartIds) {
                let row: any[] = []
                row.push(year)
                for (let groupId in groupIds) {
                  let queryId: string
                  let group: string
                  if ($scope.separateGroups || $scope.graphType === 'areacomparison') {
                    queryId = groupId
                    group = chartId
                  } else {
                    queryId = chartId
                    group = groupId
                  }
                  const sumOfMatchesInSpanByAggregation: {[id: string]: number }[] = []
                  const sumOfTotalsInSpanByAggregation: {[id: string]: number }[] = []
                  let sumOfTotalsInSpan: number[] = []
                  for (let k: number = 0; k < $scope.bootstraps; k++) {
                    sumOfTotalsInSpan[k] = 0
                    sumOfTotalsInSpanByAggregation[k] = {}
                    sumOfMatchesInSpanByAggregation[k] = {}
                  }
                  for (let i: number = year - mm; i <= year + mm; i++)
                    if (d.totalsByYearAndGroupAndAggregation[i] && d.totalsByYearAndGroupAndAggregation[i][group]) {
                      for (let k: number = 0; k < $scope.bootstraps; k++) {
                        const allAggrIds: string[] = Object.keys(d.totalsByYearAndGroupAndAggregation[i][group])
                        let aggrIds: string[] = []
                        if ($scope.bootstraps === 1) aggrIds = allAggrIds
                        else for (let l: number = 0; l < allAggrIds.length; l++) aggrIds[l] = allAggrIds[Math.floor(Math.random() * allAggrIds.length)]
                        if (d.matchesByYearAndQueryAndGroupAndAggregation[i] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group]) for (let j: number = 0; j < aggrIds.length; j++) {
                            let aggrId: string = aggrIds[j]
                            if (d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId]) {
                              if (!sumOfMatchesInSpanByAggregation[k][aggrId]) sumOfMatchesInSpanByAggregation[k][aggrId] = d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId]
                              else sumOfMatchesInSpanByAggregation[k][aggrId] += d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId]
                            }
                          }
                        if (d.totalsByYearAndGroupAndAggregation[i][group]) for (let j: number = 0; j < aggrIds.length; j++) {
                          let aggrId: string = aggrIds[j]
                          if (!sumOfTotalsInSpanByAggregation[k][aggrId]) sumOfTotalsInSpanByAggregation[k][aggrId] = d.totalsByYearAndGroupAndAggregation[i][group][aggrId]
                          else sumOfTotalsInSpanByAggregation[k][aggrId] += d.totalsByYearAndGroupAndAggregation[i][group][aggrId]
                          sumOfTotalsInSpan[k] += d.totalsByYearAndGroupAndAggregation[i][group][aggrId]
                        }
                      }
                    }
                  let sumOfAverages: number[] = []
                  for (let k: number = 0; k < $scope.bootstraps; k++) {
                    sumOfAverages[k] = 0
                    for (let aggrId in sumOfTotalsInSpanByAggregation[k]) if (sumOfTotalsInSpanByAggregation[k][aggrId])
                      sumOfAverages[k] += 1000000 * (sumOfMatchesInSpanByAggregation[k][aggrId] ? sumOfMatchesInSpanByAggregation[k][aggrId] : 0) / sumOfTotalsInSpanByAggregation[k][aggrId]
                  }
                  sumOfAverages.sort((a: number, b: number) => a - b)
                  if ($scope.accumulation && $scope.graphType === 'individual') {
                    if (!accumulatingTotalByChart[chartIndex][group]) {
                      accumulatingTotalByChart[chartIndex][group] = 0
                      accumulatingMatchesByChart[chartIndex][group] = 0
                    }
                    let point: number =  Math.floor($scope.bootstraps / 2)
                    accumulatingMatchesByChart[chartIndex][group] += Object.keys(sumOfTotalsInSpanByAggregation[point]).length !== 0 ? sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length : 0
                    accumulatingTotalByChart[chartIndex][group] += sumOfTotalsInSpan[Math.floor($scope.bootstraps / 2)]
                    row.push(accumulatingMatchesByChart[chartIndex][group])
                    row.push(accumulatingTotalByChart[chartIndex][group])
                  } else {
                    if (Object.keys(sumOfTotalsInSpanByAggregation).length !== 0) {
                      let point: number =  Math.floor($scope.bootstraps / 2)
                      row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length)
                      point = Math.floor($scope.bootstraps / 100)
                      row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length)
                      point = Math.floor($scope.bootstraps / 20)
                      row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length)
                      point = Math.floor($scope.bootstraps / 10)
                      row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length)
                      point = $scope.bootstraps - 1 - Math.floor($scope.bootstraps / 10)
                      row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length)
                      point = $scope.bootstraps - 1 - Math.floor($scope.bootstraps / 20)
                      row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length)
                      point = $scope.bootstraps - 1 - Math.floor($scope.bootstraps / 100)
                      row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length)
                    } else {
                      row.push(0)
                      row.push(0)
                      row.push(0)
                      row.push(0)
                      row.push(0)
                      row.push(0)
                      row.push(0)
                    }
                    if (!$scope.hideTotals && $scope.graphType === 'individual') row.push(sumOfTotalsInSpan[Math.floor($scope.bootstraps / 2)])
                  }
                }
                rowsByChart[chartIndex++].push(row)
              }
            }
            if ($scope.accumulation && $scope.graphType === 'individual')
              rowsByChart.forEach((rows: number[][], index: number) =>
                rows.forEach(r => {
                  let i: number = 1
                  Object.keys(d.groups).forEach(g => {
                    r[i] = 100 * r[i++] / accumulatingMatchesByChart[index][g]
                    r[i] = 100 * r[i++] / accumulatingTotalByChart[index][g]
                  })
                })
              )
            rowsByChart.forEach((rows: number[][], index: number) => $scope.charts[index].dataTable.addRows(rows))
          }
          ,
          (response: angular.IHttpPromiseCallbackArg <string>) => console.log(response)
        )
      }
      $scope.$watchCollection('[selectedGrouping, graphType, movingSpan, hideTotals, avgType, separateGroups, accumulation, bootstraps]', (nv: any, ov: any) => {
        if (nv !== ov)
          updateGraphs()
      })
      $scope.$on('updateConstraint', (e: angular.IAngularEvent, queryId: string, viewId: string) => {
        if (viewId !== $scope.viewId) updateGraphs()
      })
      $scope.charts = []
      $scope.$watch(
        () => $scope.queries.map(q => q.name),
        (nv: any, ov: any) => {
          updateGraphs()
        },
        true)
      $scope.$watchCollection('queries', (nv: Query[], ov: Query[]) => { if (nv !== ov) {
        updateGraphs()
      }})
      updateGraphs()
    }
    private static processData(bindings: {[id: string]: s.ISparqlBinding}[]): Data {
      let d: Data = new Data()
      let i: number = 0
      while (!bindings[i]['queryId']) {
        let b: {[id: string]: s.ISparqlBinding} = bindings[i++]
        let year: number = parseInt(b['year'].value, 10)
        if (year > d.maxYear) d.maxYear = year
        if (year < d.minYear) d.minYear = year
        if (!d.totalsByYearAndGroupAndAggregation[year])
          d.totalsByYearAndGroupAndAggregation[year] = {}
        let g: string = b['group'] ? b['group'].value : 'matching'
        if (!d.totalsByYearAndGroupAndAggregation[year][g])
          d.totalsByYearAndGroupAndAggregation[year][g] = {}
        let a: string = b['aggrId'] ? b['aggrId'].value : ''
        if (!d.groupsByAggregation[a]) d.groupsByAggregation[a] = {}
        d.groupsByAggregation[a][g] = true
        d.totalsByYearAndGroupAndAggregation[year][g][a] = parseInt(b['total'].value, 10)
        d.groups[g] = b['groupLabel'] ? b['groupLabel'].value : g
      }
      while (i < bindings.length) {
        let b: {[id: string]: s.ISparqlBinding} = bindings[i++]
        let year: number = parseInt(b['year'].value, 10)
        if (!d.matchesByYearAndQueryAndGroupAndAggregation[year])
          d.matchesByYearAndQueryAndGroupAndAggregation[year] = {}
        let q: string = b['queryId'].value
        if (!d.matchesByYearAndQueryAndGroupAndAggregation[year][q])
          d.matchesByYearAndQueryAndGroupAndAggregation[year][q] = {}
        let g: string = b['group'] ? b['group'].value : 'matching'
        if (!d.matchesByYearAndQueryAndGroupAndAggregation[year][q][g])
          d.matchesByYearAndQueryAndGroupAndAggregation[year][q][g] = {}
        d.queries[q] = true
        let a: string = b['aggrId'] ? b['aggrId'].value : ''
        d.matchesByYearAndQueryAndGroupAndAggregation[year][q][g][a] = parseInt(b['matching'].value, 10)
      }
      return d
    }
  }
}
