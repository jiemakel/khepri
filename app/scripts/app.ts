namespace app {
  'use strict'

  import k = fi.seco.khepri

  let m: angular.IModule = angular.module('app', [ 'http-auth-interceptor', 'ngStorage', 'ui.router', 'ui.bootstrap', 'ngResize', 'fi.seco.sparql' ])
  m.config(($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, configuration: k.Config) => {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('main', {
      url: '/',
      templateUrl: configuration.mainView,
      controller: 'MainController'
      })
    $stateProvider.state('configure', {
      url : '/configure',
      templateUrl: 'partials/configure.html',
      controller : 'ConfigureController'
      })
  })
}
