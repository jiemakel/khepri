namespace app {
  'use strict'

  class State {
    private _queries: { [queryId: string]: QueryState } = {}
    public get queries(): { [queryId: string]: QueryState } {
      return this._queries
    }
    public getQueryState(queryId: string): QueryState {
      if (!this._queries[queryId]) this.queries[queryId] = new QueryState()
      return this._queries[queryId]
    }
  }

  export class QueryState {
    public constraints: { [id: string]: IConstraint } = {}
  }

  export interface IConstraint {
    constraintString: string
    order: number
  }

  export class SimpleConstraint implements IConstraint {
    constructor(
      public constraintString: string,
      public order: number
    ) { }
  }

  export class StateService {

    private state: State;

    constructor(private $rootScope: angular.IRootScopeService) {
      this.state = new State();
    }

    public setConstraint(queryId: string, constraintId: string, constraint: IConstraint): void {
      this.state.getQueryState(queryId).constraints[constraintId] = constraint
      this.$rootScope.$broadcast('updateConstraint', queryId, constraintId)
    }

    public getQueries(): { [id: string]: QueryState } {
      return this.state.queries
    }

    public getQueryState(queryId: string): QueryState {
      return this.state.getQueryState(queryId)
    }

    public setQueryState(queryId: string, QueryState: QueryState): void {
      this.state[queryId] = QueryState
      this.$rootScope.$broadcast('updateConstraint', queryId)
    }

    public getConstraintString(queryId: string, constraintIdsToFilter: { [id: string]: boolean } = {}): string {
      let orderedConstraints: string[] = []
      for (let constraintId in this.state.getQueryState(queryId).constraints) if (!constraintIdsToFilter[constraintId]) {
        if (!orderedConstraints[this.state.queries[queryId].constraints[constraintId].order]) orderedConstraints[this.state.queries[queryId].constraints[constraintId].order] = ''
        orderedConstraints[this.state.queries[queryId].constraints[constraintId].order] += this.state.queries[queryId].constraints[constraintId].constraintString
      }
      let constraintString: string = ''
      orderedConstraints.filter(v => v !== '').forEach(v => constraintString += v);
      return constraintString
    }

  }

}
