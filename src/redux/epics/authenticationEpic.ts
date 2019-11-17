import { ActionsObservable, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { logout, setAuthToken } from '../../services/authenticationService';
import historyService from '../../services/historyService';
import {
  AuthenticateActions,
  onAuthenticate,
  onLogout
} from '../actions/authenticationActions';

export const onAuthenticateEpic: Epic = (
  action$: ActionsObservable<AuthenticateActions>
) =>
  action$.pipe(
    filter(isActionOf(onAuthenticate.request)),
    mergeMap(() => {
      try {
        setAuthToken('SomeBearerTokenGoesHere');
        historyService.push('/');
        return of(onAuthenticate.success());
      } catch (err) {
        return of(onAuthenticate.failure(err));
      }
    })
  );

export const onLogoutEpic: Epic = (
  action$: ActionsObservable<AuthenticateActions>
) =>
  action$.pipe(
    filter(isActionOf(onLogout.request)),
    mergeMap(() => {
      try {
        logout();
        historyService.push('/login');
        return of(onLogout.success());
      } catch (err) {
        return of(onLogout.failure(err));
      }
    })
  );

export default [onAuthenticateEpic, onLogoutEpic];
