import { ActionsObservable, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { Employee } from '../../../types/employee';
import employeeMockData from '../../_mockData/employees.json';
import { EmployeeActions, onFetchEmplpyees } from '../actions/employeeActions';

export const onFetchEmployeesEpic: Epic = (
  action$: ActionsObservable<EmployeeActions>
) =>
  action$.pipe(
    filter(isActionOf(onFetchEmplpyees.request)),
    mergeMap(() => {
      try {
        const employees = employeeMockData as Employee[];
        return of(onFetchEmplpyees.success(employees));
      } catch (err) {
        return of(onFetchEmplpyees.failure(err));
      }
    })
  );

export default [onFetchEmployeesEpic];
