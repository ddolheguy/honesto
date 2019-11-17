import { combineEpics } from 'redux-observable';

const epicRegistry = [] as any;

export default combineEpics(...epicRegistry);
