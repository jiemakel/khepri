module app {
  interface MainScope extends angular.IScope {
    message: string
  }

  export class MainController {
    constructor($scope: MainScope, stateService : StateService) {
      $scope.message = 'message'
    }
  }
}
