import { DateTime } from 'luxon';
import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { EmployeeAnswers } from '../../../types/question';
import localStorageService from '../../services/localStorageService';
import {
  AnswerActions,
  onFetchQuestions,
  onSaveAnswer,
  QuestionActions
} from '../actions/questionActions';
import { RootState } from '../reducers/rootReducer';
import { questionsListSelector } from '../selectors/questions';

export const onFetchAnswersEpic: Epic = (
  action$: ActionsObservable<QuestionActions>
) =>
  action$.pipe(
    filter(isActionOf(onFetchQuestions.request)),
    mergeMap(({ payload }) => {
      try {
        const response = localStorageService.getItem(`employee-${payload}`);
        const employeeAnswers = response
          ? (JSON.parse(response) as EmployeeAnswers)
          : undefined;
        return of(
          onSaveAnswer.success(employeeAnswers ? employeeAnswers.answers : [])
        );
      } catch (err) {
        return of(onSaveAnswer.failure(err));
      }
    })
  );

export const onSaveAnswerEpic: Epic = (
  action$: ActionsObservable<AnswerActions>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(isActionOf(onSaveAnswer.request)),
    mergeMap(({ payload }) => {
      try {
        const { employeeId, answer } = payload;
        if (state$.value.entities.employeeAnswers.state !== 'SUCCESS') {
          throw new Error(
            `Employee answers not loaded for Employee ID ${employeeId}`
          );
        }

        const questions = questionsListSelector(state$.value);
        if (!questions) {
          throw new Error('No questions loaded');
        }

        const answers = state$.value.entities.employeeAnswers.data;
        const employeeAnswers = [
          ...answers.filter(a => a.questionId !== answer.questionId),
          payload.answer
        ];

        localStorageService.setItem(
          `employee-${payload.employeeId}`,
          JSON.stringify({
            employeeId: payload.employeeId,
            completed: questions.length === employeeAnswers.length,
            answers: employeeAnswers,
            lastUpdated: DateTime.local().toISO()
          })
        );
        return of(onSaveAnswer.success(employeeAnswers));
      } catch (err) {
        return of(onSaveAnswer.failure(err));
      }
    })
  );

export default [onFetchAnswersEpic, onSaveAnswerEpic];
