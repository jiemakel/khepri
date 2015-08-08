module app {
  var m = angular.module("app", [ 'http-auth-interceptor', 'ngStorage', 'ui.router' ])
  m.config(($stateProvider : angular.ui.IStateProvider,$urlRouterProvider : angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'partials/main.html',
      controller: 'MainController'
      })
    $stateProvider.state('configure',{
      url : '/configure',
      templateUrl: 'partials/configure.html',
      controller : 'ConfigureController'
      })
  })
  }
