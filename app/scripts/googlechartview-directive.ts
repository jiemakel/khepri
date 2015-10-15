module app {

  interface IGoogleChartViewScope extends angular.IScope {
    openEditor: () => void
    selectedGrouping : Grouping
    availableGroupings : Grouping[]
    savedQueries : { [id: string]: QueryState }
    graphType : string
    movingSpan : number
    movingType : string
  }

  class Grouping {
    constructor(public id:string,public label:string) {}
  }

  export class GoogleChartViewDirective implements angular.IDirective {
    restrict = 'E'
    templateUrl = 'partials/googlechartview.html'
    scope = {}
    private canceler : angular.IDeferred<{}>
    constructor(private $timeout: angular.ITimeoutService, private $q : angular.IQService, private sparqlService : SparqlService, private configService : ConfigService, private stateService : StateService) {
      this.canceler = $q.defer();
    }
    private static graphQueryCount = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      SELECT ?group (SAMPLE(?l) AS ?groupLabel) ?year (MAX(?mletters) AS ?matchingLetters) (MAX(?tletters) as ?totalLetters) (MAX(?mletters) AS ?letters) {
        {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (MAX(COUNT(?foo)-COUNT(DISTINCT ?id),1) AS ?mletters) {
              # CONSTRAINTS
              ?id cs:year ?year .
              ?id cs:fulltext ?fulltext .
              {
                ?foo pf:strSplit (?fulltext <REGEX>) .
              } UNION {
                BIND(1 AS ?foo)
              }
              # GROUPING
            }
          }
          BIND(0 as ?tletters)
        } UNION {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (SUM(?wc) AS ?tletters) {
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
    private static graphQueryLPercentage = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      SELECT ?group (SAMPLE(?l2) AS ?groupLabel) ?year (MAX(?mwords) AS ?matchingLetters) (MAX(?twords) as ?totalLetters) (100*MAX(?mwords)/MAX(?twords) AS ?letters) {
        {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (SUM(?wc) AS ?mwords) {
              # CONSTRAINTS
              ?id cs:year ?year .
              ?id cs:wordcount ?wc .
              # GROUPING
            }
            GROUP BY ?group ?year
          }
          BIND(0 as ?twords)
        } UNION {
          {
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (SUM(?wc) AS ?twords) {
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
    private static graphQueryWPercentage = `
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
                ?foo pf:strSplit (?fulltext <REGEX>) .
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
            SELECT ?group (SAMPLE(?l) AS ?l2) ?year (SUM(STRDT(?wc,xsd:integer)) AS ?twords) {
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
    private static propertiesQuery = `
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
        FILTER (LANG(?l)='en' || LANG(?l)='')
      }
      GROUP BY ?property
    `
    private timeout : angular.IPromise<any>
    private chartEditor : google.visualization.ChartEditor
    private chartWrapper : google.visualization.ChartWrapper
    private chartWrappers : google.visualization.ChartWrapper[] = []
    link = (scope: IGoogleChartViewScope, element: JQuery, attr: angular.IAttributes) => {
      scope.graphType = 'wpercentage'
      scope.movingSpan = 20
      scope.movingType = 'median'
      scope.savedQueries=this.stateService.getSavedConstraints()
      var updateGraph = (chartWrapper : google.visualization.ChartWrapper, constraintString : string,filterConstraintString : string) => {
        var regex = this.sparqlService.stringToSPARQLString("")
        var grouping = scope.selectedGrouping ? `?id crm:P28_custody_surrendered_by/<${scope.selectedGrouping.id}> ?group . ?group skos:prefLabel ?l . FILTER (LANG(?l)='en' || LANG(?l)='')` : '';
        var query = scope.graphType=='wpercentage' ? GoogleChartViewDirective.graphQueryWPercentage : (scope.graphType=='lpercentage' ? GoogleChartViewDirective.graphQueryLPercentage : GoogleChartViewDirective.graphQueryCount)
        query = this.configService.config.prefixes+query.replace(/# CONSTRAINTS/g,constraintString+filterConstraintString).replace(/# GROUPING/g,grouping).replace(/<REGEX>/g,regex)
        console.log(query)
        this.sparqlService.query(this.configService.config.sparqlEndpoint,query).then(
          (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => {
            var dataTable = new google.visualization.DataTable();
            var data = {}
            var mdata = {}
            var tdata = {}
            var groups = {}
            var minYear = Number.MAX_VALUE
            var maxYear = Number.MIN_VALUE
            var totalLetters = {}
            var totalMatchingLetters = {}
            response.data.results.bindings.forEach(b => {
              var year = parseInt(b['year'].value)
              if (year>maxYear) maxYear=year
              if (year<minYear) minYear=year
              if (!data[year]) {
                data[year]={}
                mdata[year]={}
                tdata[year]={}
              }
              var g = b['group'] ? b['groupLabel'].value : 'letters'
              data[year][g]=parseFloat(b['letters'].value)
              tdata[year][g]=parseInt(b['totalLetters'].value)
              if (!totalLetters[g]) {
                totalLetters[g]=0
                totalMatchingLetters[g]=0
              }
              totalLetters[g]+=tdata[year][g]
              mdata[year][g]=parseInt(b['matchingLetters'].value)
              totalMatchingLetters[g]+=mdata[year][g]
              groups[g]=true
            })
            dataTable.addColumn('number','year');
            var accumulatingMatches = {}
            var accumulatingTotal = {}
            if (scope.movingType!='accumulation') for (let group in groups) dataTable.addColumn('number',group);
            else for (let group in groups) {
              dataTable.addColumn('number',group+" matching");
              dataTable.addColumn('number',group+" total");
              accumulatingMatches[group]=0
              accumulatingTotal[group]=0
            }
            for (let year=minYear;year<=maxYear;year++) {
              var row = [year]
              for (let group in groups) {
                var mm = Math.floor(scope.movingSpan/2)
                var nums = [];
                var total  = 0
                for (let i=year-mm;i<=year+mm;i++)
                  if (data[i] && data[i][group] && data[i][group]!=0) {
                    nums.push(data[i][group])
                    total+=data[i][group]
                  }
                if (scope.movingType=='median') {
                  nums.sort()
                  row.push(nums.length!=0 ? nums[Math.floor(nums.length/2)] : 0)
                } else if (scope.movingType=='average') {
                  row.push(nums.length!=0 ? total/nums.length : 0)
                } else if (scope.movingType=='sum') {
                  row.push(total)
                } else {
                  accumulatingMatches[group]+=mdata[year] && mdata[year][group] ? mdata[year][group] : 0
                  accumulatingTotal[group]+=tdata[year] && tdata[year][group] ? tdata[year][group] : 0
                  if (scope.graphType!='count') {
                    row.push(100*accumulatingMatches[group]/totalMatchingLetters[group])
                    row.push(100*accumulatingTotal[group]/totalLetters[group])
                  } else {
                    row.push(accumulatingMatches[group])
                    row.push(accumulatingTotal[group])
                  }
                }
              }
              dataTable.addRow(row);
            }
            chartWrapper.setDataTable(dataTable);
            chartWrapper.draw()
          }
          ,
          (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
        )
      }
      this.chartEditor = new google.visualization.ChartEditor();
      this.chartWrapper = new google.visualization.ChartWrapper({
        chartType : 'LineChart',
        containerId : 'chartWrapper',
        options : {
          hAxis: {
            title: 'year',
            format:'',
          }
        }
      })

      google.visualization.events.addListener(this.chartEditor, 'ok', () => {
        this.chartWrapper = this.chartEditor.getChartWrapper()
        this.chartWrapper.draw()
      })
      scope.openEditor=() => {
        this.chartEditor.openDialog(this.chartWrapper);
      }
      scope.selectedGrouping = null;
      this.sparqlService.query(this.configService.config.sparqlEndpoint,GoogleChartViewDirective.propertiesQuery).then(
        (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => scope.availableGroupings = response.data.results.bindings.map(b => new Grouping(b['property'].value,b['propertyLabel'].value))
        ,
        (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
      )
      scope.$watchCollection('[selectedGrouping,graphType,movingSpan,movingType]',(nv:Grouping,ov:Grouping) => {
        if (nv!=ov) {
          updateGraph(this.chartWrapper,this.stateService.getConstraints(),this.stateService.getFilterConstraints());
          var i=0
          for (let key in scope.savedQueries) {
            if (!this.chartWrappers[i]) this.chartWrappers[i]=new google.visualization.ChartWrapper({
              chartType : 'LineChart',
              containerId : 'chartWrapper-'+i,
              options : {
                hAxis: {
                  title: 'year',
                  format:'',
                }
              }
            })
            updateGraph(this.chartWrappers[i],scope.savedQueries[key].constraintString,scope.savedQueries[key].filterConstraintString);
            i++
          }
        }
      });
      scope.$on('updateFilterConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        updateGraph(this.chartWrapper,this.stateService.getConstraints(),constraintString);
        var i=0
        for (let key in scope.savedQueries) {
          if (!this.chartWrappers[i]) this.chartWrappers[i]=new google.visualization.ChartWrapper({
            chartType : 'LineChart',
            containerId : 'chartWrapper-'+i,
            options : {
              hAxis: {
                title: 'year',
                format:'',
              }
            }
          })
          updateGraph(this.chartWrappers[i],scope.savedQueries[key].constraintString,scope.savedQueries[key].filterConstraintString);
          i++
        }
      })
      scope.$on('updateConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        updateGraph(this.chartWrapper,constraintString,this.stateService.getFilterConstraints());
        var i=0
        for (let key in scope.savedQueries) {
          if (!this.chartWrappers[i]) this.chartWrappers[i]=new google.visualization.ChartWrapper({
            chartType : 'LineChart',
            containerId : 'chartWrapper-'+i,
            options : {
              hAxis: {
                title: 'year',
                format:'',
              }
            }
          })
          updateGraph(this.chartWrappers[i],scope.savedQueries[key].constraintString,scope.savedQueries[key].filterConstraintString);
          i++
        }
      })
    }
  }
}
