import { combineEpics } from 'redux-observable';
import authenticationEpic from './authenticationEpic';
import employeeAnswerEpic from './employeeAnswerEpic';
import employeeEpic from './employeeEpic';
import questionEpic from './questionEpic';

const epicRegistry = [
  ...authenticationEpic,
  ...employeeEpic,
  ...employeeAnswerEpic,
  ...questionEpic
];

export default combineEpics(...epicRegistry);
