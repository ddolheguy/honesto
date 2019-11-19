import { createReducer } from 'typesafe-actions';
import { Answer } from '../../../../types/question';
import { AnswerActions, onSaveAnswer } from '../../actions/questionActions';
import { Entity } from './types';

export const defaultState: Readonly<Entity<Answer[]>> = {
  state: 'NONE'
};

const reducer = createReducer<Entity<Answer[]>, AnswerActions>(defaultState)
  .handleAction(onSaveAnswer.success, (state, action) => ({
    state: 'SUCCESS',
    data: action.payload
  }))
  .handleAction(onSaveAnswer.failure, (state, action) => ({
    state: 'FAILURE',
    error: action.payload
  }));

export default reducer;
