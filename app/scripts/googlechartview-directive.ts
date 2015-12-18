namespace fi.seco.khepri {
  'use strict'

  export class ChartDefinition {
    public type: string
    public dataTable: google.visualization.DataTable
    public options: {}
    public select: (selection: google.visualization.VisualizationSelectionArray, chartDefinition: ChartDefinition, chart: google.visualization.ChartWrapper) => void
  }
  interface IGoogleChartViewScope extends angular.IScope {
    chartDefinition: ChartDefinition
  }

  export class GoogleChartViewDirective implements angular.IDirective {
    public restrict: string = 'E'
    public template: string = '<div style="width:100%"></div>'
    public scope: {[id: string]: string} = {
      'chartDefinition': '='
    }
    constructor(private resize: any) {
    }
    public link: (...any) => void = ($scope: IGoogleChartViewScope, element: JQuery, attr: angular.IAttributes) => {
      let chart: google.visualization.ChartWrapper = new google.visualization.ChartWrapper({
        chartType: $scope.chartDefinition.type,
        options: $scope.chartDefinition.options,
        dataTable: $scope.chartDefinition.dataTable
      })
      $scope.$watch('chartDefinition.dataTable', (nv: google.visualization.DataTable, ov: google.visualization.DataTable) => { if (nv !== ov) {
        chart.setChartType($scope.chartDefinition.type)
        chart.setOptions($scope.chartDefinition.options)
        chart.setDataTable($scope.chartDefinition.dataTable)
        chart.draw(<HTMLElement>element[0].children[0])
      }})
      $scope.$on('resize', () => { if ($scope.chartDefinition.dataTable) chart.draw(<HTMLElement>element[0].children[0])})
      google.visualization.events.addListener(chart, 'select', () => $scope.chartDefinition.select(chart.getChart().getSelection(), $scope.chartDefinition, chart))
      if ($scope.chartDefinition.dataTable) chart.draw(<HTMLElement>element[0].children[0])
    }
  }
}
