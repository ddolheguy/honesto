const clear = () => window.localStorage.clear();

const removeItem = (key: string) => window.localStorage.removeItem(key);

const getItem = (key: string) => window.localStorage.getItem(key);

const setItem = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export default {
  clear,
  removeItem,
  getItem,
  setItem
};
