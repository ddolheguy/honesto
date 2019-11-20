import { ActionsObservable, StateObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';
import { onFetchEmplpyees } from '../actions/employeeActions';
import { onFetchEmployeesEpic } from './employeeEpic';

describe('onFetchEmployeesEpic', () => {
  it('should fetch employees (mock data) with no local storage state', done => {
    const action$ = ActionsObservable.of(onFetchEmplpyees.request());

    const state$ = {} as StateObservable<{}>;
    onFetchEmployeesEpic(action$, state$, undefined)
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toHaveLength(1);

        const outputAction1 = outputActions[0];
        expect(outputAction1.type).toBe('employee/FETCH_EMPLOYEE_SUCCESS');

        done();
      });
  });
});
