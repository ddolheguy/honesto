import { Action, applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';

import rootEpic from '../redux/epics/rootEpic';
import createReducer from '../redux/reducers/rootReducer';

export const configureStore = () => {
  // TODO type this one
  const epicMiddleware: EpicMiddleware<
    Action<any>,
    Action<any>,
    void,
    any
  > = createEpicMiddleware();
  // TODO type this one
  const middleware: any[] = [epicMiddleware];

  const store = createStore(
    createReducer,
    undefined,
    applyMiddleware(...middleware)
  );

  epicMiddleware.run(rootEpic);
  return store as any;
};
