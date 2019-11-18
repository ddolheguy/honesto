import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { DeepReadonly } from '../../utils';
import entities from './entities';

const rootReducer = combineReducers({
  entities
});

export type RootState = DeepReadonly<StateType<typeof rootReducer>>;

export default rootReducer;
