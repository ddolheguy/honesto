import { createSelector } from 'reselect';
import { Question } from '../../../types/question';
import { RootState } from '../reducers/rootReducer';

const questionsStateSelector = (state: RootState) => state.entities.questions;

export const isLoadingSelector = createSelector(
  questionsStateSelector,
  state => state.state === 'PENDING'
);

export const questionsListSelector = createSelector(
  questionsStateSelector,
  state => {
    if (state.state !== 'SUCCESS') {
      return undefined;
    }

    return state.data as Question[];
  }
);
