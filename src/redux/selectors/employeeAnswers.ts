import { createSelector } from 'reselect';
import { Answer } from '../../../types/question';
import { RootState } from '../reducers/rootReducer';

const employeeAnswersStateSelector = (state: RootState) =>
  state.entities.employeeAnswers;

export const answerSelector = createSelector(
  employeeAnswersStateSelector,
  state => {
    if (state.state !== 'SUCCESS') {
      return [];
    }

    return state.data as Answer[];
  }
);
