import { combineEpics } from 'redux-observable';
import authenticationEpic from './authenticationEpic';
import employeeEpic from './employeeEpic';
import questionEpic from './questionEpic';

const epicRegistry = [...authenticationEpic, ...employeeEpic, ...questionEpic];

export default combineEpics(...epicRegistry);
