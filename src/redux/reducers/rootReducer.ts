import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { DeepReadonly } from '../../utils';

const rootReducer = combineReducers({});

export type RootState = DeepReadonly<StateType<typeof rootReducer>>;

export default rootReducer;
