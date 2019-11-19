import { ActionsObservable, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { Employee } from '../../../types/employee';
import { EmployeeAnswers } from '../../../types/question';
import employeeMockData from '../../_mockData/employees.json';
import { ROUTES } from '../../config/routes';
import historyService from '../../services/historyService';
import localStorageService from '../../services/localStorageService';
import {
  EmployeeActions,
  onEmployeeQuestionsComplete,
  onFetchEmplpyees
} from '../actions/employeeActions';

export const onFetchEmployeesEpic: Epic = (
  action$: ActionsObservable<EmployeeActions>
) =>
  action$.pipe(
    filter(isActionOf(onFetchEmplpyees.request)),
    mergeMap(() => {
      try {
        const employees = employeeMockData.map(employee => {
          const response = localStorageService.getItem(
            `employee-${employee.id}`
          );
          const employeeAnswers = response
            ? (JSON.parse(response) as EmployeeAnswers)
            : undefined;
          return {
            ...employee,
            completed: employeeAnswers && employeeAnswers.completed
          };
        }) as Employee[];

        return of(onFetchEmplpyees.success(employees));
      } catch (err) {
        return of(onFetchEmplpyees.failure(err));
      }
    })
  );

export const onEmployeeQuestionsCompleteEpic: Epic = (
  action$: ActionsObservable<EmployeeActions>
) =>
  action$.pipe(
    filter(isActionOf(onEmployeeQuestionsComplete.request)),
    mergeMap(({ payload }) => {
      try {
        const employee = { ...payload, completed: true } as Employee;

        historyService.push(ROUTES.SHARE_FEEDBACK);
        return of(onEmployeeQuestionsComplete.success(employee));
      } catch (err) {
        return of(onEmployeeQuestionsComplete.failure(err));
      }
    })
  );

export default [onFetchEmployeesEpic, onEmployeeQuestionsCompleteEpic];
