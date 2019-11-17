export enum LocalStorageKey {
  AUTH_TOKEN = 'authtoken'
}

const clear = () => window.localStorage.clear();

const removeItem = (key: LocalStorageKey) =>
  window.localStorage.removeItem(key);

const getItem = (key: LocalStorageKey) => window.localStorage.getItem(key);

const setItem = (key: LocalStorageKey, value: string) => {
  window.localStorage.setItem(key, value);
};

export default {
  clear,
  removeItem,
  getItem,
  setItem
};
