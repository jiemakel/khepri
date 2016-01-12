namespace fi.seco.khepri {
  'use strict'

  import s = fi.seco.sparql

  interface ITreeViewScope extends angular.IScope {
    selectElement: (id: TreeNode, add?) => void
    isSelected: (id: TreeNode) => boolean
    tree: TreeNode[]
    queryId: string
    viewId: string
    constraints: TreeNode[]
    viewConfiguration: ITreeViewConfiguration
  }

  class TreeNode {
    public matchingInstances: number
    constructor(public id: string, public label: string, public instances: number) {
      this.matchingInstances = instances
    }
    public children: TreeNode[] = []
  }

  class TreeViewConstraints implements IConstraint {
    public order: number = 5
    public clone(): TreeViewConstraints {
      return new TreeViewConstraints(this.constraintString, this.values.slice())
    }
    constructor(public constraintString: string, public values: TreeNode[]) { }
  }

  export interface ITreeViewConfiguration {
    getTreeQuery: string
    getCountsQuery: string
    constraintString: string
  }

  export class TreeViewDirective implements angular.IDirective {
    public scope: {[id: string]: string} = {
      viewId: '@',
      queryId: '=',
      viewConfiguration: '='
    }
    public restrict: string = 'E'
    public templateUrl: string = 'partials/treeview.html'
    constructor(private $q: angular.IQService, private configService: ConfigService, private stateService: StateService, public sparqlService: s.SparqlService) {
      this.canceler = $q.defer();
    }
    public link: (...any) => void = ($scope: ITreeViewScope, element: JQuery, attr: angular.IAttributes) => {
      let viewConfiguration: ITreeViewConfiguration = $scope.viewConfiguration ? $scope.viewConfiguration : this.configService.config.viewConfiguration[attr.$normalize($scope.viewId)]
      $scope.constraints = []
      $scope.selectElement = (value, add = false) => {
        if (!add) $scope.constraints = [value]; else $scope.constraints.push(value)
        let constraintString: string = ''
        $scope.constraints.forEach(constraint => {
          constraintString += `{ ${viewConfiguration.constraintString.replace(/<CONSTRAINT_ID>/g, '<' + constraint.id + '>')} } UNION`
        });
        constraintString = constraintString.substr(0, constraintString.length - 6);
        this.stateService.setConstraint($scope.queryId, $scope.viewId, new TreeViewConstraints(constraintString, $scope.constraints));
      }
      $scope.isSelected = (id) => $scope.constraints.indexOf(id) !== -1
      this.sparqlService.query(this.configService.config.sparqlEndpoint, viewConfiguration.getTreeQuery).then(
        (response: angular.IHttpPromiseCallbackArg<s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => {
          let parents: {[id: string]: {[id: string]: boolean}} = {}
          let classes: {[id: string]: TreeNode} = {}
          response.data.results.bindings.forEach(binding => {
            if (binding['subClass']) {
              let subClass: string = binding['subClass'].value
              if (!parents[subClass]) parents[subClass] = {}
              parents[subClass][binding['superClass'].value] = true
            } else {
              classes[binding['class'].value] = new TreeNode(binding['class'].value, binding['classLabel'].value, parseInt(binding['instances'].value, 10))
            }
          })
          $scope.tree = []
          for (let id in classes) {
            if (!parents[id]) $scope.tree.push(classes[id]); else for (let pid in parents[id])
                classes[pid].children.push(classes[id])
          }
        },
        (response: angular.IHttpPromiseCallbackArg<string>) => console.log(response)
      )
      $scope.$on('updateConstraint', (e: angular.IAngularEvent, queryId: string, viewId: string) => {
        this.canceler.resolve();
        let filter: {[id: string]: boolean} = {}
        filter[$scope.viewId] = true
        let constraintString: string = this.stateService.getConstraintString($scope.queryId, filter)
        this.sparqlService.query(this.configService.config.sparqlEndpoint, this.configService.config.prefixes + viewConfiguration.getCountsQuery.replace(/# CONSTRAINTS/g, constraintString)).then(
          (response: angular.IHttpPromiseCallbackArg<s.ISparqlBindingResult<{[id: string]: s.ISparqlBinding}>>) => {
            let counts: {[id: string] : number} = {}
            response.data.results.bindings.forEach(r => counts[r['class'].value] = parseInt(r['instances'].value, 10))
            $scope.tree.forEach(tn => this.updateCounts(tn, counts))
          }
          ,
          (response: angular.IHttpPromiseCallbackArg<string>) => console.log(response)
        )
      })
    }
    private canceler: angular.IDeferred<{}>
    private updateCounts: (node: TreeNode, counts: {[id: string] : number}) => void = (node: TreeNode, counts: {[id: string] : number}) => {
      node.matchingInstances = counts[node.id] ? counts[node.id] : 0
      node.children.forEach(cnode => this.updateCounts(cnode, counts));
    }
  }
}
