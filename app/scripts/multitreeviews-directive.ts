namespace fi.seco.khepri {
  'use strict'

  import s = fi.seco.sparql
  interface IMultiTreeViewsScope extends angular.IScope {
    views: TreeView[]
  }

  class TreeView {
    public id: string
    public label: string
    public viewConfiguration: ITreeViewConfiguration
  }

  export interface IMultiTreeViewsConfiguration {
  }

  export class MultiTreeViewsDirective implements angular.IDirective {
    public restrict: string = 'E'
    public templateUrl: string = 'partials/multitreeviews.html'
    public scope: {[id: string]: string} = {
      'viewId': '@',
      'queryId': '='
    }
    constructor(private sparqlService: s.SparqlService, private configService: ConfigService, private stateService: StateService) {
    }
    public link: (...any) => void = ($scope: IMultiTreeViewsScope, element: JQuery, attr: angular.IAttributes) => {
      $scope.views = [ {id: 'property-tree-view', label: 'Education', viewConfiguration: this.configService.config.viewConfiguration[attr.$normalize('property-tree-view')] } ]
    }
  }
}
