import { createReducer } from 'typesafe-actions';
import { Question } from '../../../../types/question';
import {
  onFetchQuestions,
  QuestionActions
} from '../../actions/questionActions';
import { Entity } from './types';

export const defaultState: Readonly<Entity<Question[]>> = {
  state: 'NONE'
};

const reducer = createReducer<Entity<Question[]>, QuestionActions>(defaultState)
  .handleAction(onFetchQuestions.request, (state, action) => ({
    state: 'PENDING'
  }))
  .handleAction(onFetchQuestions.success, (state, action) => ({
    state: 'SUCCESS',
    data: action.payload
  }))
  .handleAction(onFetchQuestions.failure, (state, action) => ({
    state: 'FAILURE',
    error: action.payload
  }));

export default reducer;
