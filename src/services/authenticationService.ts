import localStorageService, { LocalStorageKey } from './localStorageService';

export const isAuthenticated = () => {
  // TODO: Implement proper auth services and checking, this is just to satisfy a demo of logging in.
  return localStorageService.getItem(LocalStorageKey.AUTH_TOKEN) !== undefined;
};
