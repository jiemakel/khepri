namespace app {
  'use strict'

  interface ITextSearchViewScope extends angular.IScope {
    keywords: ITextSearchResult[]
    constraints: {[keyword: string]: boolean}
    queryId: string
    viewId: string
    setConstraint: (regex: string, add?: boolean) => void
    query: string
  }

  interface ITextSearchResult {
    keyword: string
    matchingInstances: number
    totalInstances: number
  }

  export class TextSearchConstraint implements IConstraint {
    public order: number = 1
    constructor(public constraintString: string, public sparqlRegex: string, public jsRegex: string, public luceneQuery: string) { }
  }

  export class TextSearchViewDirective implements angular.IDirective {
    private static textSearchQuery: string = `
      PREFIX text: <http://jena.apache.org/text#>
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      SELECT ?keyword (COUNT(?tid) AS ?totalInstances) (COUNT(?id) AS ?matchingInstances) {
        {
          ?tid text:query "<LUCENE_REGEX>" .
          ?tid a cs:Letter .
          ?tid cs:fulltext ?fulltext .
          FILTER(REGEX(?fulltext, "<SPARQL_REGEX>", "i"))
          BIND(LCASE(REPLACE(REPLACE(?fulltext, ".*?(<SPARQL_REGEX>).*", "$1", "si"),"\\\\s+"," ")) AS ?keyword)
        } UNION {
          ?id text:query "<LUCENE_REGEX>" .
          ?id a cs:Letter .
          ?id cs:fulltext ?fulltext .
          FILTER(REGEX(?fulltext, "<SPARQL_REGEX>", "i"))
          # CONSTRAINTS
          BIND(LCASE(REPLACE(REPLACE(?fulltext, ".*?(<SPARQL_REGEX>).*", "$1", "si"),"\\\\s+"," ")) AS ?keyword)
        }
      }
      GROUP BY ?keyword
      ORDER BY DESC(?matchingInstances)
    `
    public restrict: string = 'E'
    public templateUrl: string = 'partials/textsearchview.html'
    public scope: {[id: string]: string} = {
      viewId: '@',
      queryId: '='
    }
    constructor(private $q: angular.IQService, private sparqlService: SparqlService, private configService: ConfigService, private stateService: StateService) {
      this.canceler = $q.defer();
    }
    public link: (...any) => void = ($scope: ITextSearchViewScope, element: JQuery, attr: angular.IAttributes) => {
      $scope.constraints = {}
      $scope.keywords = []
      $scope.setConstraint = (value: string, replace: boolean = false) => {
        if (!value) {
          $scope.constraints = {}
          if (Object.keys($scope.constraints).length !== $scope.keywords.length) $scope.keywords.forEach(k => $scope.constraints[k.keyword] = true)
        } else {
          if (replace) {
            $scope.constraints = {}
            $scope.constraints[value] = true
          } else if ($scope.constraints[value]) delete $scope.constraints[value]
          else $scope.constraints[value] = true
        }
        let sparqlRegex: string = ''
        let jsRegex: string = ''
        let luceneQuery: string = ''
        let constraintString: string = ''
        if (Object.keys($scope.constraints).length > 0) {
          for (let constraint in $scope.constraints) {
            luceneQuery += `\\"${constraint}\\" `
            sparqlRegex += `${constraint.replace(/ /g, '\\\\s+')}|`
            jsRegex += `${constraint.replace(/ /g, '\\s+')}|`
          }
          luceneQuery = luceneQuery.substr(0, luceneQuery.length - 1)
          sparqlRegex = '(?:\\\\b' + sparqlRegex.substr(0, sparqlRegex.length - 1) + '\\\\b)'
          jsRegex = '(?:\\b' + jsRegex.substr(0, jsRegex.length - 1) + '\\b)'
          constraintString = `
            ?id text:query "${luceneQuery}" .
            ?id cs:fulltext ?fulltext .
            FILTER(REGEX(?fulltext,"${sparqlRegex}","i"))
          `
        }
        this.stateService.setConstraint($scope.queryId, $scope.viewId, new TextSearchConstraint(constraintString, sparqlRegex, jsRegex, luceneQuery));
      }
      let query: () => void = () => {
        this.canceler.resolve()
        this.canceler = this.$q.defer()
        let luceneQuery: string = '+/' + $scope.query.replace(/ /g, '/ +/').replace(/\*/g, '[^ ]*').replace(/\?/g, '[^ ]?') + '/'
        let sparqlRegex: string = '\\\\b' + $scope.query.replace(/ /g, '\\\\s+').replace(/\*/g, '\\\\w*').replace(/\?/g, '\\\\w?') + '\\\\b'
        let filter: {[id: string]: boolean} = {}
        filter[$scope.viewId] = true
        let constraintString: string = this.stateService.getConstraintString($scope.queryId, filter)
        this.sparqlService.query(this.configService.config.sparqlEndpoint, TextSearchViewDirective.textSearchQuery.replace(/# CONSTRAINTS/g, constraintString).replace(/<LUCENE_REGEX>/g, luceneQuery).replace(/<SPARQL_REGEX>/g, sparqlRegex), {timeout: this.canceler.promise}).then(
          (response: angular.IHttpPromiseCallbackArg<ISparqlBindingResult<{[id: string]: ISparqlBinding}>>) => {
            let oldKeywords: ITextSearchResult[] = $scope.keywords
            let keywords: { [keyword: string]: boolean } = {}
            $scope.keywords = response.data.results.bindings.map(r => {
              let ret: ITextSearchResult = this.sparqlService.bindingsToObject<ITextSearchResult>(r)
              keywords[ret.keyword] = true
              return ret
            })
            oldKeywords.filter(k => !keywords[k.keyword] && $scope.constraints[k.keyword]).forEach(k => $scope.keywords.push(k))
          },
          (response: angular.IHttpPromiseCallbackArg<string>) => console.log(response)
        )
      }
      $scope.$on('updateConstraint', (e: angular.IAngularEvent, queryId: string, viewId: string) => {
        if (queryId === $scope.queryId && viewId !== $scope.viewId) query()
      })
      $scope.$watch('query', (nv: string) => { if (nv) {
        query()
      }})
    }
    private canceler: angular.IDeferred<{}>
  }
}
