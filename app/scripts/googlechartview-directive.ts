module app {

  interface IGoogleChartViewScope extends angular.IScope {
    openEditor: () => void
    selectedGrouping : Grouping
    availableGroupings : Grouping[]
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
    private static graphQuery = `
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      SELECT ?group (SAMPLE(?l) AS ?groupLabel) ?year (COUNT(*) AS ?letters) {
        # CONSTRAINTS
        ?id cs:year ?year .
        # GROUPING
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
    private updateGraph(constraintString : string,filterConstraintString : string,selectedGrouping : Grouping) {
      var grouping = selectedGrouping ? `?id crm:P28_custody_surrendered_by/<${selectedGrouping.id}> ?group . ?group skos:prefLabel ?l . FILTER (LANG(?l)='en' || LANG(?l)='')` : '';
      this.sparqlService.query(this.configService.config.sparqlEndpoint,this.configService.config.prefixes+GoogleChartViewDirective.graphQuery.replace(/# CONSTRAINTS/g,constraintString+filterConstraintString).replace(/# GROUPING/g,grouping)).then(
        (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => {
          var dataTable = new google.visualization.DataTable();
          var data = {}
          var groups = {}
          response.data.results.bindings.forEach(b => {
            var year = b['year'].value;
            if (!data[year]) data[year]={};
            var g = b['group'] ? b['groupLabel'].value : 'letters'
            data[year][g]=parseInt(b['letters'].value);
            groups[g]=true
          })
          dataTable.addColumn('number','year');
          for (let group in groups) dataTable.addColumn('number',group);
          for (let year in data) {
            var row = [parseInt(year)]
            var i = 0;
            for (let group in groups)
              row.push(data[year][group] ? data[year][group] : 0)
            dataTable.addRow(row);
          }
          this.chartWrapper.setDataTable(dataTable);
          this.chartWrapper.draw()
        }
        ,
        (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
      )
    }
    link = (scope: IGoogleChartViewScope, element: JQuery, attr: angular.IAttributes) => {
      this.chartEditor = new google.visualization.ChartEditor();
      this.chartWrapper = new google.visualization.ChartWrapper({
        containerId : 'chartWrapper',
        chartType : 'ScatterChart'
      })

      google.visualization.events.addListener(this.chartEditor, 'ok', () => {
        this.chartWrapper = this.chartEditor.getChartWrapper();
        this.chartWrapper.draw();
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
      scope.$watch('selectedGrouping',(nv:Grouping,ov:Grouping) => {
        if (nv!=ov) this.updateGraph(this.stateService.getConstraints(),this.stateService.getFilterConstraints(),nv);
      });
      scope.$on('updateFilterConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        this.updateGraph(this.stateService.getConstraints(),constraintString,scope.selectedGrouping);
      })
      scope.$on('updateConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        this.updateGraph(constraintString,this.stateService.getFilterConstraints(),scope.selectedGrouping);
      })
    }
  }
}
