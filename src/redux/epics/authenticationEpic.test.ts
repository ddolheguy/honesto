import { ActionsObservable, StateObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';
import historyService from '../../services/historyService';
import localStorageService, {
  LocalStorageKey
} from '../../services/localStorageService';
import { onAuthenticate, onLogout } from '../actions/authenticationActions';
import { onAuthenticateEpic, onLogoutEpic } from './authenticationEpic';

describe('onAuthenticateEpic', () => {
  it('should authenticate user against third-party and redirect user to main page', done => {
    const action$ = ActionsObservable.of(onAuthenticate.request());
    const expectedHistoryCall = [['/']];
    historyService.push = jest.fn();

    const state$ = {} as StateObservable<{}>;
    onAuthenticateEpic(action$, state$, undefined)
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toHaveLength(1);

        expect((historyService.push as any).mock.calls).toEqual(
          expectedHistoryCall
        );

        const outputAction1 = outputActions[0];
        expect(outputAction1.type).toBe('authenticate/AUTHENTICATE_SUCCESS');

        done();
      });
  });
});

describe('onLogoutEpic', () => {
  it('should clear local storage and redirect user to login page', done => {
    const expectedHistoryCall = [['/login']];
    const action$ = ActionsObservable.of(onLogout.request());
    historyService.push = jest.fn();

    localStorageService.setItem(LocalStorageKey.AUTH_TOKEN, 'testtoken');

    expect(localStorageService.getItem(LocalStorageKey.AUTH_TOKEN)).toBe(
      'testtoken'
    );

    const state$ = {} as StateObservable<{}>;
    onLogoutEpic(action$, state$, undefined)
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toHaveLength(1);

        expect(
          localStorageService.getItem(LocalStorageKey.AUTH_TOKEN)
        ).toBeNull();

        expect((historyService.push as any).mock.calls).toEqual(
          expectedHistoryCall
        );

        const outputAction1 = outputActions[0];
        expect(outputAction1.type).toBe('authenticate/LOGOUT_SUCCESS');

        done();
      });
  });
});
