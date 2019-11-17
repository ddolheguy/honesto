import localStorageService, { LocalStorageKey } from './localStorageService';

export const setAuthToken = (token: string) => {
  localStorageService.setItem(LocalStorageKey.AUTH_TOKEN, token);
};

export const logout = () => {
  localStorageService.clear();
};

export const isAuthenticated = () => {
  // TODO: Implement proper auth services and checking, this is just to satisfy a demo of logging in.
  // NOTE: Yes the below code uses != instead of !==.  This is because it's assessing both null and undefined.
  return localStorageService.getItem(LocalStorageKey.AUTH_TOKEN) != null;
};
