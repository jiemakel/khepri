module app {

  class State {
    current : QueryState = new QueryState()
    savedQueries : { [id: string]: QueryState } = {}
  }

  export class QueryState {
    clone = () => {
      let ret = new QueryState()
      ret.constraintString=this.constraintString
      ret.filterConstraintString=this.filterConstraintString
      return ret
    }
    constraintString : string = "";
    filterConstraintString : string = "";
    constraints: { [id: string]: IConstraint } = {}
    filterConstraints : { [id: string]: IConstraint } = {}
  }

  export interface IConstraint {
    constraintString : string
    order : number
  }

  export class StateService {

    private state : State;

    constructor(private $rootScope : angular.IRootScopeService,$localStorage) {
      if (!$localStorage.state) $localStorage.state = new State();
      this.state = new State();
    }

    setConstraint(id : string, constraint : IConstraint) {
      this.state.current.constraints[id] = constraint;
      this.updateConstraintString();
    }

    setFilterConstraint(id : string, constraint: IConstraint) {
      this.state.current.filterConstraints[id]=constraint;
      this.updateFilterConstraintString();
    }

    saveConstraint(id : string) {
      this.state.savedQueries[id]=this.state.current.clone()
    }

    getSavedConstraints() {
      return this.state.savedQueries
    }

    private updateFilterConstraintString() {
      var orderedConstraints = []
      for (var id in this.state.current.filterConstraints) {
        if (!orderedConstraints[this.state.current.filterConstraints[id].order]) orderedConstraints[this.state.current.filterConstraints[id].order]=""
        orderedConstraints[this.state.current.filterConstraints[id].order]+=this.state.current.filterConstraints[id].constraintString
      }
      this.state.current.filterConstraintString=""
      orderedConstraints.filter(v => v).forEach(v => this.state.current.filterConstraintString+=v);
      this.$rootScope.$broadcast('updateFilterConstraint',this.state.current.filterConstraintString,this.state.current.filterConstraints)
    }

    private updateConstraintString() {
      var orderedConstraints = []
      for (var id in this.state.current.constraints) {
        if (!orderedConstraints[this.state.current.constraints[id].order]) orderedConstraints[this.state.current.constraints[id].order]=""
        orderedConstraints[this.state.current.constraints[id].order]+=this.state.current.constraints[id].constraintString
      }
      this.state.current.constraintString=""
      orderedConstraints.filter(v => v).forEach(v => this.state.current.constraintString+=v);
      this.$rootScope.$broadcast('updateConstraint',this.state.current.constraintString,this.state.current.constraints)
    }

    getConstraints() {
      return this.state.current.constraintString;
    }

    getFilterConstraints() {
      return this.state.current.filterConstraintString;
    }

  }

}
