import { combineReducers } from 'redux';
import logReducer from './logReducer';
import actorReducer from './actorReducer';

export default combineReducers({
  log: logReducer,
  actors: actorReducer
})