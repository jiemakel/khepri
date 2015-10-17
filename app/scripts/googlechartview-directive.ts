namespace app {
  'use strict'

  interface IGoogleChartViewScope extends angular.IScope {
    openEditor: () => void
    selectedGrouping: Grouping
    availableGroupings: Grouping[]
    savedQueries: { [id: string]: QueryState }
    graphType: string
    movingSpan: number
    movingType: string
    queryId: string
    viewId: string
  }

  class Grouping {
    constructor(public id: string, public label: string) {}
  }

  export class GoogleChartViewDirective implements angular.IDirective {
    private static graphQueryCount: string = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
      PREFIX pf: <http://jena.hpl.hp.com/ARQ/property#>
      SELECT ?group (SAMPLE(?l) AS ?groupLabel) ?year (MAX(?mletters) AS ?matchingLetters) (MAX(?tletters) as ?totalLetters) (MAX(?mletters) AS ?letters) {
        {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year ((COUNT(?foo)-COUNT(DISTINCT ?id)) AS ?mletters) {
              # CONSTRAINTS
              ?id cs:year ?year .
              ?id cs:fulltext ?fulltext .
              {
                ?foo pf:strSplit (?fulltext '<REGEX>') .
              } UNION {
                BIND(1 AS ?foo)
              }
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?tletters)
        } UNION {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (SUM(STRDT(?wc, xsd:integer)) AS ?tletters) {
              ?id a cs:Letter .
              ?id cs:year ?year .
              ?id cs:wordcount ?wc .
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?mletters)
        }
      }
      GROUP BY ?group ?year
      ORDER BY ?group ?year
    `
    private static graphQueryAPercentage: string = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      SELECT ?group (SAMPLE(?l2) AS ?groupLabel) ?year (MAX(?mauthors) AS ?matchingLetters) (MAX(?tauthors) as ?totalLetters) (100*MAX(?mauthors)/MAX(?tauthors) AS ?letters) {
        {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (COUNT(DISTINCT ?author) AS ?mauthors) {
              # CONSTRAINTS
              ?id crm:P28_custody_surrendered_by ?author .
              ?id cs:year ?year .
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?tauthors)
        } UNION {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (COUNT(DISTINCT ?author) AS ?tauthors) {
              ?id a cs:Letter .
              ?id crm:P28_custody_surrendered_by ?author .
              ?id cs:year ?year .
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?mauthors)
        }
      }
      GROUP BY ?group ?year
      ORDER BY ?group ?year
    `
    private static graphQueryLPercentage: string = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      SELECT ?group (SAMPLE(?l2) AS ?groupLabel) ?year (MAX(?mletters) AS ?matchingLetters) (MAX(?tletters) as ?totalLetters) (100*MAX(?mletters)/MAX(?tletters) AS ?letters) {
        {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (COUNT(*) AS ?mletters) {
              # CONSTRAINTS
              ?id cs:year ?year .
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?tletters)
        } UNION {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (COUNT(*) AS ?tletters) {
              ?id a cs:Letter .
              ?id cs:year ?year .
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?mletters)
        }
      }
      GROUP BY ?group ?year
      ORDER BY ?group ?year
    `
    private static graphQueryWPercentage: string = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
      PREFIX pf: <http://jena.hpl.hp.com/ARQ/property#>
      SELECT ?group (SAMPLE(?l2) AS ?groupLabel) ?year (MAX(?mwords) AS ?matchingLetters) (MAX(?twords) as ?totalLetters) (1000000*MAX(?mwords)/MAX(?twords) AS ?letters) {
        {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year ((COUNT(?foo)-COUNT(DISTINCT ?id)-1) AS ?mwords) {
              # CONSTRAINTS
              ?id cs:year ?year .
              ?id cs:fulltext ?fulltext .
              {
                ?foo pf:strSplit (?fulltext '<REGEX>') .
              } UNION {
                BIND(1 AS ?foo)
              }
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?twords)
        } UNION {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (SUM(STRDT(?wc, xsd:integer)) AS ?twords) {
              ?id a cs:Letter .
              ?id cs:year ?year .
              ?id cs:wordcount ?wc .
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?mwords)
        }
      }
      GROUP BY ?group ?year
      ORDER BY ?group ?year
    `
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
    public restrict: string = 'E'
    public template: string = '<div></div>'
    public scope: {[id: string]: string} = {
      'viewIw': '@',
      'queryId': ' = '
    }
    constructor(private $timeout: angular.ITimeoutService, private $q: angular.IQService, private sparqlService: SparqlService, private configService: ConfigService, private stateService: StateService) {
      this.canceler = $q.defer();
    }
    public link: (...any) => void = ($scope: IGoogleChartViewScope, element: JQuery, attr: angular.IAttributes) => {
      $scope.graphType = 'wpercentage'
      $scope.movingSpan = 20
      $scope.movingType = 'sum'
      let updateGraph: () => void = () => {
        let regex: string = '(?:'
        let constraints: {[id: string]: IConstraint} = this.stateService.getQueryState($scope.queryId).constraints
        for (let viewId in constraints) {
          if (constraints[viewId] instanceof TextSearchConstraint) regex += ( < TextSearchConstraint>constraints[viewId]).sparqlRegex + '|'
        }
        if (regex.charAt(regex.length - 1) === '|') regex = regex.substring(0, regex.length - 1)
        regex += ')'
        if (regex === '(?:)') regex = 'FOOOOOOOOOO'
        let grouping: string = $scope.selectedGrouping ? `?id crm:P28_custody_surrendered_by/ < ${$scope.selectedGrouping.id}> ?group . ?group skos:prefLabel ?l . FILTER (LANG(?l) = 'en' || LANG(?l) = '')` : '';
        let query: string
        switch ($scope.graphType) {
          case 'count': query = GoogleChartViewDirective.graphQueryCount; break
          case 'wpercentage': query = GoogleChartViewDirective.graphQueryWPercentage; break
          case 'lpercentage': query = GoogleChartViewDirective.graphQueryLPercentage; break
          case 'apercentage': query = GoogleChartViewDirective.graphQueryAPercentage; break
          default: throw 'Unknown graphType ' + $scope.graphType
        }
        query = this.configService.config.prefixes + query.replace(/# CONSTRAINTS/g, this.stateService.getConstraintString($scope.queryId)).replace(/# GROUPING/g, grouping).replace(/<REGEX>/g, regex)
        this.sparqlService.query(this.configService.config.sparqlEndpoint, query).then(
          (response: angular.IHttpPromiseCallbackArg <ISparqlBindingResult <{[id: string]: ISparqlBinding}>>) => {
            let dataTable: google.visualization.DataTable = new google.visualization.DataTable()
            let data: {[id: number]: {[id: string]: number}} = {}
            let mdata: {[id: number]: {[id: string]: number}} = {}
            let tdata: {[id: number]: {[id: string]: number}} = {}
            let groups: {[id: string]: boolean} = {}
            let minYear: number = Number.MAX_VALUE
            let maxYear: number = Number.MIN_VALUE
            let totalLetters: {[id: number]: number} = {}
            let totalMatchingLetters: {[id: number]: number} = {}
            response.data.results.bindings.forEach(b => {
              let year: number = parseInt(b['year'].value, 10)
              if (year > maxYear) maxYear = year
              if (year < minYear) minYear = year
              if (!data[year]) {
                data[year] = {}
                mdata[year] = {}
                tdata[year] = {}
              }
              let g: string = b['group'] ? b['groupLabel'].value : 'letters'
              data[year][g] = parseFloat(b['letters'].value)
              tdata[year][g] = parseInt(b['totalLetters'].value, 10)
              if (!totalLetters[g]) {
                totalLetters[g] = 0
                totalMatchingLetters[g] = 0
              }
              totalLetters[g] += tdata[year][g]
              mdata[year][g] = parseInt(b['matchingLetters'].value, 10)
              totalMatchingLetters[g] += mdata[year][g]
              groups[g] = true
            })
            dataTable.addColumn('number', 'year');
            let accumulatingMatches: {[id: string]: number} = {}
            let accumulatingTotal: {[id: string]: number} = {}
            if ($scope.movingType !== 'accumulation') for (let group in groups) dataTable.addColumn('number', group);
            else for (let group in groups) {
              dataTable.addColumn('number', group + ' matching');
              dataTable.addColumn('number', group + ' total');
              accumulatingMatches[group] = 0
              accumulatingTotal[group] = 0
            }
            for (let year: number = minYear; year <= maxYear; year++) {
              let row: number[] = [year]
              for (let group in groups) {
                let mm: number = Math.floor($scope.movingSpan / 2)
                let nums: number[] = [];
                let total: number = 0
                for (let i: number = year - mm; i <= year + mm; i++)
                  if (data[i] && data[i][group] && data[i][group] !== 0) {
                    nums.push(data[i][group])
                    total += data[i][group]
                  }
                if ($scope.movingType === 'median') {
                  nums.sort((a: number, b: number) => a - b)
                  row.push(nums.length !== 0 ? nums[Math.floor(nums.length / 2)] : 0)
                } else if ($scope.movingType === 'average') {
                  row.push(nums.length !== 0 ? total / nums.length : 0)
                } else if ($scope.movingType === 'sum') {
                  row.push(total)
                } else {
                  accumulatingMatches[group] += mdata[year] && mdata[year][group] ? mdata[year][group] : 0
                  accumulatingTotal[group] += tdata[year] && tdata[year][group] ? tdata[year][group] : 0
                  if ($scope.graphType !== 'count') {
                    row.push(100 * accumulatingMatches[group] / totalMatchingLetters[group])
                    row.push(100 * accumulatingTotal[group] / totalLetters[group])
                  } else {
                    row.push(accumulatingMatches[group])
                    row.push(accumulatingTotal[group])
                  }
                }
              }
              dataTable.addRow(row);
            }
            this.chartWrapper.setDataTable(dataTable);
            this.chartWrapper.draw(element[0])
          }
          ,
          (response: angular.IHttpPromiseCallbackArg <string>) => console.log(response)
        )
      }
      this.chartEditor = new google.visualization.ChartEditor();
      this.chartWrapper = new google.visualization.ChartWrapper({
        chartType : 'LineChart',
        options : {
          hAxis: {
            title: 'year',
            format: ''
          }
        }
      })

      google.visualization.events.addListener(this.chartEditor, 'ok', () => {
        this.chartWrapper = this.chartEditor.getChartWrapper()
        this.chartWrapper.draw()
      })
      $scope.openEditor = () => {
        this.chartEditor.openDialog(this.chartWrapper);
      }
      $scope.selectedGrouping = null;
      this.sparqlService.query(this.configService.config.sparqlEndpoint, GoogleChartViewDirective.propertiesQuery).then(
        (response: angular.IHttpPromiseCallbackArg <ISparqlBindingResult<{[id: string]: ISparqlBinding}>>) => $scope.availableGroupings = response.data.results.bindings.map(b => new Grouping(b['property'].value, b['propertyLabel'].value))
        ,
        (response: angular.IHttpPromiseCallbackArg <string>) => console.log(response)
      )
      $scope.$watchCollection('[selectedGrouping, graphType, movingSpan, movingType]', (nv: Grouping, ov: Grouping) => {
        if (nv !== ov)
          updateGraph()
      });
      $scope.$on('updateConstraint', updateGraph)
    }

    private canceler: angular.IDeferred <{}>
    private chartEditor: google.visualization.ChartEditor
    private chartWrapper: google.visualization.ChartWrapper
  }
}
