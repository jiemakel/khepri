module app {

  class TreeView implements angular.IDirective {
    restrict = 'E'
    templateUrl = 'partials/treeview.html'
  }

  interface ITreeViewScope extends angular.IScope {
    selectElement : (id : TreeNode, add?) => void
    isSelected : (id : TreeNode) => boolean
    tree : TreeNode[]
  }

  class TreeNode {
    matchingInstances : number
    constructor(public id : string, public label : string, public instances : number) {
      this.matchingInstances=instances
    }
    children : TreeNode[] = []
  }

  class TreeViewConstraints implements IConstraint {
    order = 5
    constructor(public constraintString : string,public values: TreeNode[]) { }
  }

  interface IClassTreeViewScope extends ITreeViewScope {
    id : string
    constraints : TreeNode[]
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
    private canceler : angular.IDeferred<{}>
    constructor(private $q : angular.IQService, private configService : ConfigService, private stateService : StateService, public sparqlService : SparqlService) {
      super()
      this.canceler = $q.defer();
    }
    private updateCounts = (node : TreeNode, counts : {[id:string] : number}) => {
      node.matchingInstances = counts[node.id] ? counts[node.id] : 0
      node.children.forEach(node => this.updateCounts(node,counts));
    }
    link = (scope: IClassTreeViewScope, element: JQuery, attr: angular.IAttributes) => {
      scope.constraints = []
      scope.selectElement = (value,add = false) => {
        if (!add) scope.constraints = [value]; else scope.constraints.push(value)
        var constraintString = ""
        scope.constraints.forEach(constraint => {
          constraintString +=`{ ?id crm:P28_custody_surrendered_by/cs:education/rdfs:subClassOf* <${constraint.id}> } UNION`
        });
        constraintString = constraintString.substr(0,constraintString.length-6);
        this.stateService.setConstraint(scope.id,new TreeViewConstraints(constraintString,scope.constraints));
      }
      scope.isSelected = (id) => scope.constraints.indexOf(id)!=-1
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
        },
        (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
      )
      scope.$on('updateConstraint',(e:angular.IAngularEvent,constraintString:string,constraints:{}) => {
        this.canceler.resolve();
        var keywords = ""
        for (let key in constraints) if (constraints[key].keywords) constraints[key].keywords.forEach(keyword => keywords+=this.sparqlService.stringToSPARQLString(keyword));
        this.sparqlService.query(this.configService.config.sparqlEndpoint,this.configService.config.prefixes+ClassTreeViewDirective.getClassCountsQuery.replace(/# CONSTRAINTS/g,constraintString)).then(
          (response : angular.IHttpPromiseCallbackArg<ISparqlBindingResult>) => {
            var counts : {[id:string] : number} = {}
            response.data.results.bindings.forEach(r => counts[r['class'].value]=parseInt(r['instances'].value))
            scope.tree.forEach(tn => this.updateCounts(tn,counts))
          }
          ,
          (response : angular.IHttpPromiseCallbackArg<string>) => console.log(response)
        )
      })
    }

  }

}
