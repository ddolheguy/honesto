import { createSelector } from 'reselect';
import { RootState } from '../reducers/rootReducer';

const employeeStateSelector = (state: RootState) => state.entities.employees;

export const acvSummarySelector = createSelector(
  employeeStateSelector,
  state => {
    return state;
  }
);
