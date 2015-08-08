module app {

  class State {
    constraints: { [id: string]: IConstraint } = {}
  }

  export interface IConstraint {
    constraintString : string
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
      this.constraintString = ""
      for (var id in this.state.constraints)
        this.constraintString += this.state.constraints[id].constraintString;
      this.$rootScope.$broadcast('updateConstraint',this.constraintString,this.state.constraints)
    }

    getConstraints() {
      return this.constraintString;
    }

  }

}
