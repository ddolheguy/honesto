import { combineReducers } from 'redux';
import employeeAnswers from './employeeAnswers';
import employees from './employees';
import questions from './questions';

const entitiesMetaReducer = combineReducers({
  employees,
  employeeAnswers,
  questions
});

export default entitiesMetaReducer;
