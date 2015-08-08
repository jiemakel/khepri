module app {

  class TreeView implements angular.IDirective {
    restrict = 'E'
    templateUrl = 'partials/treeview.html'
  }

  interface TreeViewScope extends angular.IScope {
    selectElement : (id : string) => void
  }

  export class ClassTreeViewDirective extends TreeView {
    scope = {
      id : '=id'
    }
    private getClassTreeQuery = `
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      SELECT ?subClass ?superClass ?superClassLabel {
          ?subClass rdfs:subClassOf ?superClass .
          ?subClass2 rdfs:subClassOf ?superClass .
          FILTER (?subClass!=?subClass2)
          FILTER EXISTS {
            ?entity a ?subClass .
            ?entity2 a ?subClass2 .
          }
          FILTER(!ISBLANK(?superClass) && !ISBLANK(?subClass))
          ?superClass rdfs:label|skos:prefLabel ?l
          FILTER (LANG(?l)='en' || LANG(?l)='')
          BIND(COALESCE(?l,REPLACE(REPLACE(REPLACE(STR(?superClass),".*/",""),".*#",""),"([A-Z])|_"," $1")) AS ?superClassLabel)
      }
    `
    private getClassCountsQuery = `
      PREFIX text: <http://jena.apache.org/text#>
      SELECT ?class (SUM(?i) AS ?instances) {
        VALUES ?serviceURL {
          <SERVICES>
        }
        SERVICE ?serviceURL {
          SELECT ?class (COUNT(*) AS ?i) {
            # FILTER
            VALUES ?graph {
              <GRAPHS>
            }
            GRAPH ?graph { ?entity a ?class }
          }
          GROUP BY ?class
        }
        FILTER BOUND(?class)
      }
      GROUP BY ?class
    `
    constructor(private configService : ConfigService, private stateService : StateService, public sparqlService : SparqlService) {
      super()
      console.log(sparqlService)
    }
    selectElement = (id : string) => {
      console.log(id)
    }
    link = (scope: TreeViewScope, element: JQuery, attr: angular.IAttributes) => {
      scope.selectElement = this.selectElement
      this.sparqlService.query(this.configService.config.sparqlEndpoint,this.getClassTreeQuery).then(
        (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => { console.log(response.data.results.bindings.length)},
        (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
      )
    }
  }

}
