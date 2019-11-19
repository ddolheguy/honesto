import { ActionType, createAsyncAction } from 'typesafe-actions';
import { Answer, Question, SaveAnswerRequest } from '../../../types/question';

export const onFetchQuestions = createAsyncAction(
  'questions/FETCH_QUESTIONS',
  'questions/FETCH_QUESTIONS_SUCCESS',
  'questions/FETCH_QUESTIONS_FAILURE'
)<string, Question[], Error>();

export const onSaveAnswer = createAsyncAction(
  'questions/SAVE_ANSWER',
  'questions/SAVE_ANSWER_SUCCESS',
  'questions/SAVE_ANSWER_FAILURE'
)<SaveAnswerRequest, Answer[], Error>();

export type QuestionActions = ActionType<typeof onFetchQuestions>;
export type AnswerActions = ActionType<typeof onSaveAnswer>;
