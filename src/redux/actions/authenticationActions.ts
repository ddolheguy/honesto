import { ActionType, createAsyncAction } from 'typesafe-actions';

export const onAuthenticate = createAsyncAction(
  'authenticate/AUTHENTICATE',
  'authenticate/AUTHENTICATE_SUCCESS',
  'authenticate/AUTHENTICATE_FAILURE'
)<void, void, Error>();

export type AuthenticateActions = ActionType<typeof onAuthenticate>;
