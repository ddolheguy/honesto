import { ActionType, createAsyncAction } from 'typesafe-actions';
import { Employee } from '../../../types/employee';

export const onFetchEmplpyees = createAsyncAction(
  'employee/FETCH_EMPLOYEE',
  'employee/FETCH_EMPLOYEE_SUCCESS',
  'employee/FETCH_EMPLOYEE_FAILURE'
)<void, Employee[], Error>();

export type EmployeeActions = ActionType<typeof onFetchEmplpyees>;
