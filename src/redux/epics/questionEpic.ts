import { ActionsObservable, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { Question } from '../../../types/question';
import questionsMockData from '../../_mockData/questions.json';
import { onFetchQuestions, QuestionActions } from '../actions/questionActions';

export const onFetchQuestionsEpic: Epic = (
  action$: ActionsObservable<QuestionActions>
) =>
  action$.pipe(
    filter(isActionOf(onFetchQuestions.request)),
    mergeMap(() => {
      try {
        const questions = questionsMockData as Question[];
        return of(onFetchQuestions.success(questions));
      } catch (err) {
        return of(onFetchQuestions.failure(err));
      }
    })
  );

export default [onFetchQuestionsEpic];
