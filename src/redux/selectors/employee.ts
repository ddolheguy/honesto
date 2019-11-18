import { createSelector } from 'reselect';
import { RootState } from '../reducers/rootReducer';

const employeeStateSelector = (state: RootState) => state.entities.employees;

export const isLoadingSelector = createSelector(
  employeeStateSelector,
  state => state.state === 'PENDING'
);

export const employeeListSelector = createSelector(
  employeeStateSelector,
  state => {
    if (state.state !== 'SUCCESS') {
      return [];
    }

    return state.data;
  }
);
