import { ActionType, createAsyncAction } from 'typesafe-actions';
import { Question } from '../../../types/question';

export const onFetchQuestions = createAsyncAction(
  'questions/FETCH_QUESTIONS',
  'questions/FETCH_QUESTIONS_SUCCESS',
  'questions/FETCH_QUESTIONS_FAILURE'
)<void, Question[], Error>();

export type QuestionActions = ActionType<typeof onFetchQuestions>;
