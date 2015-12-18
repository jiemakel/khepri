namespace fi.seco.khepri {
  'use strict'

  import s = fi.seco.sparql

  export interface IResultListViewConfiguration {
    resultQuery: string
    constraintString: string
  }

  interface IResultListViewScope extends angular.IScope {
    metadataKeys: string[]
    results: Result[]
    filter: (r: Result, openResult: boolean) => void
    width: number
    showMetadata: boolean
    viewId: string
    queryId: string
    setOrderBy: (orderBy: string) => void
    orderBy: string
    orderByDescending: boolean
  }

  class Snippet {
    constructor(public before: any, public match: string, public after: any) {}
  }

  class Result {
    constructor(public id: string, public label: string, public fulltext: any, public snippet: Snippet, public metadata: string[], public filtered: boolean) {}
  }

  export class ResultListViewDirective implements angular.IDirective {
    public restrict: string = 'E'
    public templateUrl: string = 'partials/resultlistview.html'
    constructor(private $timeout: angular.ITimeoutService, private $q: angular.IQService, private $sce: angular.ISCEService, private sparqlService: s.SparqlService, private configService: ConfigService, private stateService: StateService) {
      this.canceler = $q.defer();
    }
    public scope: {[id: string]: string} = {
      width: '=',
      viewId: '@',
      showMetadata: '=',
      queryId: '='
    }
    public link: (...any) => void = ($scope: IResultListViewScope, element: JQuery, attr: angular.IAttributes) => {
      $scope.orderBy = 'match'
      $scope.orderByDescending = false
      let viewConfiguration: IResultListViewConfiguration = this.configService.config.viewConfiguration[attr.$normalize($scope.viewId)]
      let query: () => void = () => {
        let sparqlRegex: string = '(?:'
        let constraints: {[id: string]: IConstraint} = this.stateService.getQueryState($scope.queryId).constraints
        for (let viewId in constraints) {
          if (constraints[viewId] instanceof TextSearchConstraint) {
            sparqlRegex += (<TextSearchConstraint>constraints[viewId]).sparqlRegex + '|'
          }
        }
        if (sparqlRegex.charAt(sparqlRegex.length - 1) === '|') {
          sparqlRegex = sparqlRegex.substring(0, sparqlRegex.length - 1)
        }
        sparqlRegex += ')'
        let filter: {[id: string]: boolean} = {}
        filter[$scope.viewId] = true
        let constraintString: string = this.stateService.getConstraintString($scope.queryId, filter)
        this.canceler.resolve();
        this.canceler = this.$q.defer();
        this.sparqlService.query(this.configService.config.sparqlEndpoint, this.configService.config.prefixes + viewConfiguration.resultQuery.replace(/# CONSTRAINTS/g, constraintString).replace(/<SPARQL_REGEX>/g, sparqlRegex).replace(/<ORDER_BY>/g, $scope.orderByDescending ? 'DESC(?' + $scope.orderBy + ')' : '?' + $scope.orderBy)).then(
          (response: angular.IHttpPromiseCallbackArg<s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => {
            $scope.metadataKeys = []
            if ($scope.showMetadata) response.data.head.vars.forEach(v => { if (v.substring(0, 8) === 'metadata') $scope.metadataKeys.push(v.substring(8))})
            $scope.results = response.data.results.bindings.map(r => {
              let ft: string = undefined
              let metadata: string[] = []
              $scope.metadataKeys.forEach(key => metadata.push(r['metadata' + key].value))
              let tmp: HTMLDivElement = document.createElement('div')
              tmp.textContent = r['fulltext'].value
              ft = tmp.innerHTML
              let s: Snippet
              if (r['match']) {
                let before: string
                let lastBefore: string
                let after: string
                let regexp: RegExp = new RegExp('(' + r['match'].value + ')')
                let parts: string[] = ft.split(regexp)
                ft = ''
                for (let i: number = 0; i < parts.length; i += 2) {
                  before = lastBefore
                  if (parts[i].length > $scope.width) {
                    after = parts[i].substring(0, $scope.width)
                    lastBefore = parts[i].substring(parts[i].length - $scope.width)
                  } else {
                    after = parts[i]
                    lastBefore = parts[i]
                  }
                  if (parts[i].length > 1000)
                    ft += parts[i].substring(0, 500) + '<span class="red">...</span>' + parts[i].substring(parts[i].length - 500)
                  else ft += parts[i]
                  ft += '<span class="blue">'
                  if (parts.length > i + 1)
                    ft += parts[i + 1]
                  ft += '</span>'
                }
                s = new Snippet(this.$sce.trustAsHtml(before), r['match'].value, this.$sce.trustAsHtml(after))
              }
              ft = this.$sce.trustAsHtml(ft)
              return new Result(r['id'].value, r['label'].value, ft, s, metadata, this.filtered[r['id'].value]);
            })
          },
          (response: angular.IHttpPromiseCallbackArg<string>) => console.log(response)
        )
      }
      $scope.setOrderBy = (orderBy: string) => {
        if ($scope.orderBy === orderBy) $scope.orderByDescending = !$scope.orderByDescending
        else {
          $scope.orderBy = orderBy
          $scope.orderByDescending = false
        }
        query()
      }
      $scope.filter = (r: Result, openResult: boolean) => {
        if (openResult) window.open(r.id, '_blank')
        else {
          r.filtered = !r.filtered
          this.filtered[r.id] = r.filtered
          let constraintString: string = 'FILTER ('
          for (let id in this.filtered) if (this.filtered[id]) constraintString += `?id!=<${id}> && `
          constraintString = constraintString.substr(0, constraintString.length - 4) + ')';
          if (constraintString === 'FILT)') constraintString = ''
          this.stateService.setConstraint($scope.queryId, $scope.viewId, new SimpleConstraint(constraintString, 2));
        }
      }
      $scope.$watch('width', (nv, ov) => { if (nv) query() })
      $scope.$on('updateConstraint', (e: angular.IAngularEvent, queryId: string, viewId: string) => {
        if (queryId === $scope.queryId && viewId !== $scope.viewId) query()
      })
    }
    private canceler: angular.IDeferred<{}>
    private filtered: {[id: string]: boolean} = {}
  }
}
