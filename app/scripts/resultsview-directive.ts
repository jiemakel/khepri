module app {

  interface IResultsViewScope extends angular.IScope {
    results : Result[]
    filter : (r : Result) => void
  }

  class Result {
    filtered = false
    constructor(public id: string,public label: string, public fulltext : string, public snippet : string) {}
  }

  export class ResultsViewDirective implements angular.IDirective {
    restrict = 'E'

    templateUrl = 'partials/resultsview.html'
    private canceler : angular.IDeferred<{}>
    constructor(private $q : angular.IQService, private sparqlService : SparqlService, private configService : ConfigService, private stateService : StateService) {
      this.canceler = $q.defer();
    }
    private static resultQuery = `
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      SELECT ?id ?label ?fulltext ?snippet {
        {
          SELECT DISTINCT ?id {
            # CONSTRAINTS
          }
        }
        ?id skos:prefLabel ?label .
        OPTIONAL {
          ?id cs:fulltext ?fulltext .
          VALUES ?keyword {
            <KEYWORDS>
          }
          FILTER REGEX(?fulltext,?keyword,"i")
          BIND(REPLACE(?fulltext,CONCAT(".*?(.{0,20})(",?keyword,")(.{0,20}).*"),"$1$2$3","si") AS ?snippet)
        }
      }
    `
    private timeout : angular.IPromise<any>
    private filtered : {[id:string]:boolean} = {}
    link = (scope: IResultsViewScope, element: JQuery, attr: angular.IAttributes) => {
      scope.filter = (r : Result) => {
        r.filtered = !r.filtered
        this.filtered[r.id]=r.filtered
        var constraintString = "FILTER ("
        for (let id in this.filtered) if (this.filtered[id]) constraintString+=`?id!=<${id}> && `
        constraintString=constraintString.substr(0,constraintString.length-4)+")";
        this.stateService.setFilterConstraint('rv',{constraintString,order:1});
      }
      scope.$on('updateConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        this.canceler.resolve();
        var keywords = ""
        for (let key in constraints) if (constraints[key].keywords) constraints[key].keywords.forEach(keyword => keywords+=this.sparqlService.stringToSPARQLString(keyword));
        this.sparqlService.query(this.configService.config.sparqlEndpoint,this.configService.config.prefixes+ResultsViewDirective.resultQuery.replace(/# CONSTRAINTS/g,constraintString).replace(/<KEYWORDS>/g,keywords)).then(
          (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) =>
            scope.results = response.data.results.bindings.map(r => { return new Result(r['id'].value,r['label'].value,r['fulltext'] ? r['fulltext'].value : undefined,r['snippet'] ? r['snippet'].value : undefined); })
          ,
          (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
        )
      })
    }
  }
}
