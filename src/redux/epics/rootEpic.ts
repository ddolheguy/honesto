import { combineEpics } from 'redux-observable';
import authenticationEpic from './authenticationEpic';

const epicRegistry = [...authenticationEpic];

export default combineEpics(...epicRegistry);
