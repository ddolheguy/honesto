import { createReducer } from 'typesafe-actions';
import { Employee } from '../../../../types/employee';
import {
  EmployeeActions,
  onEmployeeQuestionsComplete,
  onFetchEmplpyees
} from '../../actions/employeeActions';
import { Entity } from './types';

export const defaultState: Readonly<Entity<Employee[]>> = {
  state: 'NONE'
};

const reducer = createReducer<Entity<Employee[]>, EmployeeActions>(defaultState)
  .handleAction(onFetchEmplpyees.request, (state, action) => ({
    state: 'PENDING'
  }))
  .handleAction(onFetchEmplpyees.success, (state, action) => ({
    state: 'SUCCESS',
    data: action.payload
  }))
  .handleAction(onEmployeeQuestionsComplete.success, (state, { payload }) => {
    if (state.state !== 'SUCCESS') {
      return state;
    }
    return {
      state: 'SUCCESS',
      data: [...state.data.filter(e => e.id !== payload.id), payload]
    };
  })
  .handleAction(onFetchEmplpyees.failure, (state, action) => ({
    state: 'FAILURE',
    error: action.payload
  }));

export default reducer;
