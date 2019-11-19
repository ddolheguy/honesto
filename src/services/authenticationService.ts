import localStorageService from './localStorageService';

export const authStorageKey = 'authToken';

export const setAuthToken = (token: string) => {
  localStorageService.setItem(authStorageKey, token);
};

export const logout = () => {
  localStorageService.clear();
};

export const isAuthenticated = () => {
  // TODO: Implement proper auth services and checking, this is just to satisfy a demo of logging in.
  // NOTE: Yes the below code uses != instead of !==.  This is because it's assessing both null and undefined.
  return localStorageService.getItem(authStorageKey) != null;
};
