import { createSelector } from 'reselect';
import { RootState } from '../reducers/rootReducer';

const employeeStateSelector = (state: RootState) => state.entities.employees;

const propsSelector = (state: RootState, props: { employeeId: string }) =>
  props;

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

export const employeeSelector = createSelector(
  employeeStateSelector,
  propsSelector,
  (employeeState, { employeeId }) => {
    if (employeeState.state !== 'SUCCESS') {
      return undefined;
    }

    return employeeState.data.find(employee => employee.id === employeeId);
  }
);
