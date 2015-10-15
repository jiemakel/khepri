module app {

  interface IResultsViewScope extends angular.IScope {
    results : Result[]
    regex : string
    filter : (r : Result) => void
    width : string
    saveQuery : (name:string) => void
  }

  class Snippet {
    constructor(public before : string, public match : string, public after : string) {}
  }

  class Result {
    constructor(public id: string,public label: string, public fulltext : string, public snippet : Snippet, public filtered : boolean) {}
  }

  export class ResultsViewDirective implements angular.IDirective {
    restrict = 'E'
    templateUrl = 'partials/resultsview.html'
    private canceler : angular.IDeferred<{}>
    constructor(private $timeout : angular.ITimeoutService, private $q : angular.IQService, private $sce : angular.ISCEService, private sparqlService : SparqlService, private configService : ConfigService, private stateService : StateService) {
      this.canceler = $q.defer();
    }
    private static resultQuery = `
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      SELECT ?id ?label ?fulltext ?before ?match ?after {
        {
          SELECT DISTINCT ?id {
            # CONSTRAINTS
          }
        }
        ?id skos:prefLabel ?label .
        ?id cs:fulltext ?fulltext .
        OPTIONAL {
          ?id cs:fulltext ?fulltext .
          FILTER REGEX(?fulltext,<REGEX>,"i")
          BIND(REPLACE(?fulltext,CONCAT(".*?(.{0,<WIDTH>})(",<REGEX>,")(.{0,<WIDTH>}).*"),"$1","si") AS ?before)
          BIND(REPLACE(?fulltext,CONCAT(".*?(.{0,<WIDTH>})(",<REGEX>,")(.{0,<WIDTH>}).*"),"$2","si") AS ?match)
          BIND(REPLACE(?fulltext,CONCAT(".*?(.{0,<WIDTH>})(",<REGEX>,")(.{0,<WIDTH>}).*"),"$3","si") AS ?after)
        }
      }
      LIMIT 50
    `
    private timeout : angular.IPromise<any>
    private filtered : {[id:string]:boolean} = {}
    scope = {
      width : "=width"
    }
    $scope : IResultsViewScope
    private query(constraintString : string) {
      this.canceler.resolve();
      this.canceler = this.$q.defer();
      this.sparqlService.query(this.configService.config.sparqlEndpoint,this.configService.config.prefixes+ResultsViewDirective.resultQuery.replace(/# CONSTRAINTS/g,constraintString).replace(/<WIDTH>/g,this.$scope.width).replace(/<REGEX>/g,this.sparqlService.stringToSPARQLString(this.$scope.regex))).then(
        (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) =>
          this.$scope.results = response.data.results.bindings.map(r => {
            var ft = undefined
            if (r['fulltext']) {
              ft = r['fulltext'].value
              let regexp = new RegExp("("+this.$scope.regex+")")
              let parts = ft.split(regexp)
              ft=""
              for (let i=0;i<parts.length;i+=2) {
                ft+=parts[i]
                ft+="<b>"
                if (parts.length>i+1)
                  ft+=parts[i+1]
                ft+="</b>"
              }
              ft = this.$sce.trustAsHtml(ft)
            }
            return new Result(r['id'].value,r['label'].value,ft,r['match'] ? new Snippet(r['before'].value,r['match'].value,r['after'].value) : undefined,this.filtered[r['id'].value]);
          })
        ,
        (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
      )
    }
    link = (scope: IResultsViewScope, element: JQuery, attr: angular.IAttributes) => {
      this.$scope=scope
      scope.filter = (r : Result) => {
        r.filtered = !r.filtered
        this.filtered[r.id]=r.filtered
        var constraintString = "FILTER ("
        for (let id in this.filtered) if (this.filtered[id]) constraintString+=`?id!=<${id}> && `
        constraintString=constraintString.substr(0,constraintString.length-4)+")";
        this.stateService.setFilterConstraint('rv',{constraintString,order:1});
      }
      scope.saveQuery = (name:string) => {
        this.stateService.saveConstraint(name)
      }
      scope.$watch('width',(nv,ov) => { if (nv) {
        this.query(this.stateService.getConstraints())
      }})
      scope.$watch('regex',(nv,ov) => { if (nv) {
        this.$timeout.cancel(this.timeout)
        this.timeout = this.$timeout(() => { this.query(this.stateService.getConstraints())},200)
      }})
      scope.$on('updateConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        scope.regex = "(?:"
        var kwnum = 0
        for (let key in constraints) if (constraints[key].keywords)
          constraints[key].keywords.forEach(keyword => {kwnum++;scope.regex+=keyword.replace(/\W+/g," ").trim()+"|"});
        if (kwnum==1) scope.regex=scope.regex.substring(3,scope.regex.length-1);
        else scope.regex=scope.regex.substring(0,scope.regex.length-1)+")"
        this.query(constraintString);
      })
    }
  }
}
