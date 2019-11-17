import { ActionType, createAsyncAction } from 'typesafe-actions';

export const onAuthenticate = createAsyncAction(
  'authenticate/AUTHENTICATE',
  'authenticate/AUTHENTICATE_SUCCESS',
  'authenticate/AUTHENTICATE_FAILURE'
)<void, void, Error>();

export const onLogout = createAsyncAction(
  'authenticate/LOGOUT',
  'authenticate/LOGOUT_SUCCESS',
  'authenticate/LOGOUT_FAILURE'
)<void, void, Error>();

export type AuthenticateActions = ActionType<
  typeof onAuthenticate | typeof onLogout
>;
