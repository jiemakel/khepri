module app {

  interface IGoogleChartViewScope extends angular.IScope {
    openEditor: () => void
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
      SELECT ?year (COUNT(*) AS ?letters) {
        # CONSTRAINTS
        ?id cs:year ?year .
      }
      GROUP BY ?year
      ORDER BY ?year
    `
    private timeout : angular.IPromise<any>
    private chartEditor : google.visualization.ChartEditor
    private chartWrapper : google.visualization.ChartWrapper
    link = (scope: IGoogleChartViewScope, element: JQuery, attr: angular.IAttributes) => {
      this.chartEditor = new google.visualization.ChartEditor();
      this.chartWrapper = new google.visualization.ChartWrapper({
        containerId : 'chartWrapper',
        chartType : 'LineChart'
      })

      google.visualization.events.addListener(this.chartEditor, 'ok', () => {
        this.chartWrapper = this.chartEditor.getChartWrapper();
        this.chartWrapper.draw();
      })
      scope.openEditor=() => {
        this.chartEditor.openDialog(this.chartWrapper);
      }
      scope.$on('updateConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        console.log("ok")
        this.sparqlService.query(this.configService.config.sparqlEndpoint,this.configService.config.prefixes+GoogleChartViewDirective.graphQuery.replace(/# CONSTRAINTS/g,constraintString)).then(
          (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => {
            var dataTable = new google.visualization.DataTable();
            dataTable.addColumn('number','year');
            dataTable.addColumn('number','letters');
            dataTable.addRows(response.data.results.bindings.map(b => [parseInt(b['year'].value),parseInt(b['letters'].value)]));
            this.chartWrapper.setDataTable(dataTable);
            this.chartWrapper.draw()
          }
          ,
          (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
        )


      })

    }
  }
}
