module app {

  class TreeView implements angular.IDirective {
    restrict = 'E'
    templateUrl = 'partials/treeview.html'
  }

  interface TreeViewScope extends angular.IScope {
    selectElement : (id : string) => void
    tree : TreeNode[]
  }

  class TreeNode {
    matchingInstances : number
    constructor(public id : string, public label : string, public instances : number) {
      this.matchingInstances=instances
    }
    children : TreeNode[] = []
  }

  export class ClassTreeViewDirective extends TreeView {
    scope = {
      id : '=id'
    }
    private static getClassTreeQuery = `
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      SELECT ?subClass ?superClass ?class ?classLabel ?instances {
        {
          ?subClass rdfs:subClassOf ?superClass .
          FILTER EXISTS {
            ?p cs:education/rdfs:subClassOf* ?subClass .
          }
        } UNION {
          {
            SELECT ?class (COUNT(DISTINCT ?p) AS ?instances) {
              ?p cs:education/rdfs:subClassOf* ?class .
            }
            GROUP BY ?class
          }
          ?class rdfs:label|skos:prefLabel ?classLabel .
        }
      }
    `
    private static getClassCountsQuery = `
      PREFIX text: <http://jena.apache.org/text#>
      PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX cs: <http://ldf.fi/ceec-schema#>
      SELECT ?class (COUNT(DISTINCT ?p) AS ?instances) {
        # CONSTRAINTS
        ?id crm:P28_custody_surrendered_by ?p .
        ?p cs:education/rdfs:subClassOf* ?class .
      }
      GROUP BY ?class
    `
    constructor(private $q : angular.IQService, private configService : ConfigService, private stateService : StateService, public sparqlService : SparqlService) {
      super()
    }
    selectElement = (id : string) => {
      console.log(id)
    }
    link = (scope: TreeViewScope, element: JQuery, attr: angular.IAttributes) => {
      scope.selectElement = this.selectElement
      this.sparqlService.query(this.configService.config.sparqlEndpoint,ClassTreeViewDirective.getClassTreeQuery).then(
        (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => {
          var parents : {[id:string]:{[id:string]:boolean}}= {}
          var classes : {[id:string]:TreeNode}= {}
          response.data.results.bindings.forEach(binding => {
            if (binding['subClass']) {
              let subClass = binding['subClass'].value
              if (!parents[subClass]) parents[subClass]={}
              parents[subClass][binding['superClass'].value]=true
            } else {
              classes[binding['class'].value]=new TreeNode(binding['class'].value,binding['classLabel'].value,parseInt(binding['instances'].value))
            }
          })
          scope.tree = []
          for (let id in classes) {
            if (!parents[id]) scope.tree.push(classes[id]); else for (let pid in parents[id])
                classes[pid].children.push(classes[id])
          }
          console.log(scope.tree)
        },
        (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
      )
    }
  }

}
