import { createSelector } from 'reselect';
import { Employee } from '../../../types/employee';
import { RootState } from '../reducers/rootReducer';

const employeeStateSelector = (state: RootState) => state.entities.employees;

const propsSelector = (state: RootState, props: { employeeId: string }) =>
  props;

const feedbackTypeSelector = (state: RootState, props: { isTeam: boolean }) =>
  props;

export const isLoadingSelector = createSelector(
  employeeStateSelector,
  state => state.state === 'PENDING'
);

export const employeeListSelector = createSelector(
  employeeStateSelector,
  feedbackTypeSelector,
  (state, { isTeam }) => {
    if (state.state !== 'SUCCESS') {
      return [];
    }

    return (state.data as Employee[])
      .filter(employee => employee.inTeam === isTeam)
      .sort((a, b) =>
        a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
      );
  }
);

export const employeeSelector = createSelector(
  employeeStateSelector,
  propsSelector,
  (employeeState, { employeeId }) => {
    if (employeeState.state !== 'SUCCESS') {
      return undefined;
    }

    const employee = employeeState.data.find(
      employee => employee.id === employeeId
    );
    if (!employee) {
      return undefined;
    }
    return { ...employee } as Employee;
  }
);
