namespace app {
  'use strict'

  export class Query {
    public active: boolean = false
    constructor(public name: string) {}
  }

  interface IMainScope extends angular.IScope {
    queries: Query[]
    state: string
    addQuery: () => void
    renameQuery: (oldQuery: Query, newName: string) => void
    removeQuery: (query: Query) => void
    resize: () => void
  }

  export class MainController {
    constructor(private $scope: IMainScope, private stateService: StateService, private $timeout: angular.ITimeoutService) {
      $scope.queries = []
      $scope.state = 'normal'
      stateService.getQueryState('unnamed 1')
      $scope.queries.push(new Query('unnamed 1'))
      $scope.queries[0].active = true
      let count: number = 2
      $scope.addQuery = () => {
        let name: string = 'unnamed ' + count++
        stateService.getQueryState(name)
        let nq: Query = new Query(name)
        nq.active = true
        $scope.queries.push(nq)
      }
      $scope.renameQuery = (oldQuery: Query, newName: string) => {
        stateService.getQueries()[newName] = stateService.getQueries()[oldQuery.name]
        delete stateService.getQueries[oldQuery.name]
        oldQuery.name = newName
      }
      $scope.removeQuery = (query: Query) => {
        delete stateService.getQueries[query.name]
        $scope.queries.splice($scope.queries.indexOf(query), 1)
      }
      $scope.resize = () => $timeout(() => $scope.$broadcast('resize'))
    }
  }
}
