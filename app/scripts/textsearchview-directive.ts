module app {

  interface ITextSearchViewScope extends angular.IScope {
    keywords : ITextSearchResult[]
    constraints : string[]
    id : string
    setConstraint : (string,add?) => void
  }

  interface ITextSearchResult {
    keyword : string
    instances : number
  }

  class TextSearchConstraints implements IConstraint {
    order = 1
    constructor(public constraintString : string,public keywords: string[]) { }
  }

  export class TextSearchViewDirective implements angular.IDirective {
    restrict = 'E'
    templateUrl = 'partials/textsearchview.html'
    scope = {
      id : "=id"
    }
    private canceler : angular.IDeferred<{}>
    constructor(private $timeout: angular.ITimeoutService, private $q : angular.IQService, private sparqlService : SparqlService, private configService : ConfigService, private stateService : StateService) {
      this.canceler = $q.defer();
    }
    private static textSearchQuery = `
      PREFIX text: <http://jena.apache.org/text#>
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      SELECT ?keyword (COUNT(*) AS ?instances) {
        ?id text:query <QUERY> .
        ?id a cs:Letter .
        ?id cs:fulltext ?fulltext .
        FILTER(REGEX(?fulltext,"<QUERY2>","i"))
        BIND(LCASE(REPLACE(?fulltext,".*(<QUERY2>\\\\w*).*","$1","si")) AS ?keyword)
      }
      GROUP BY ?keyword
    `
    private timeout : angular.IPromise<any>
    link = (scope: ITextSearchViewScope, element: JQuery, attr: angular.IAttributes) => {
      scope.constraints = []
      scope.setConstraint = (value,add = false) => {
        if (!add) scope.constraints = [value]; else scope.constraints.push(value)
        var constraintString = ""
        scope.constraints.forEach(constraint => {
          constraintString +=`{ ?id text:query ${this.sparqlService.stringToSPARQLString(constraint)} } UNION`
        });
        constraintString = constraintString.substr(0,constraintString.length-6);
        this.stateService.setConstraint(scope.id,new TextSearchConstraints(constraintString,scope.constraints));
      }
      scope.$watch('text',(nv,ov) => { if (nv) {
        this.$timeout.cancel(this.timeout)
        this.timeout = this.$timeout(() => {
          this.canceler.resolve();
          this.canceler = this.$q.defer();
          this.sparqlService.query(this.configService.config.sparqlEndpoint,TextSearchViewDirective.textSearchQuery.replace(/<QUERY>/g,this.sparqlService.stringToSPARQLString(nv+"*")).replace(/<QUERY2>/g,nv),{timeout:this.canceler.promise}).then(
            (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => {
              scope.keywords = response.data.results.bindings.map((r) => {
                return {
                  keyword : r['keyword'].value,
                  instances : parseInt(r['instances'].value)
                }
              })
            },
            (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
          )
        },200)
      }})
    }
  }
}
