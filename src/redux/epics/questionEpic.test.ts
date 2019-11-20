import { ActionsObservable, StateObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';
import { onFetchQuestions } from '../actions/questionActions';
import { onFetchQuestionsEpic } from './questionEpic';

describe('onFetchQuestionsEpic', () => {
  it('should fetch questions (mock data)', done => {
    const action$ = ActionsObservable.of(onFetchQuestions.request('1'));

    const state$ = {} as StateObservable<{}>;
    onFetchQuestionsEpic(action$, state$, undefined)
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toHaveLength(1);

        const outputAction1 = outputActions[0];
        expect(outputAction1.type).toBe('questions/FETCH_QUESTIONS_SUCCESS');

        done();
      });
  });
});
