module app {

  class State {
    constraints: { [id: string]: IConstraint } = {}
  }

  export interface IConstraint {
    constraintString : string
    order : number
  }

  export class StateService {

    private state : State;

    constructor(private $rootScope : angular.IRootScopeService,$localStorage) {
      if (!$localStorage.state) $localStorage.state = new State();
      this.state = $localStorage.state;
    }

    private constraintString : string = null;

    setConstraint(id : string, constraint : IConstraint) {
      this.state.constraints[id] = constraint;
      this.updateConstraintString();
    }

    private updateConstraintString() {
      var orderedConstraints = []
      for (var id in this.state.constraints) {
        if (!orderedConstraints[this.state.constraints[id].order]) orderedConstraints[this.state.constraints[id].order]=""
        orderedConstraints[this.state.constraints[id].order]+=this.state.constraints[id].constraintString
      }
      this.constraintString=""
      orderedConstraints.filter(v => v).forEach(v => this.constraintString+=v);
      this.$rootScope.$broadcast('updateConstraint',this.constraintString,this.state.constraints)
    }

    getConstraints() {
      return this.constraintString;
    }

  }

}
