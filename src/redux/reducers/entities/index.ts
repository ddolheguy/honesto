import { combineReducers } from 'redux';
import employees from './employees';
import questions from './questions';

const entitiesMetaReducer = combineReducers({
  employees,
  questions
});

export default entitiesMetaReducer;
