import { combineReducers } from 'redux';
import entitiesReducer from './entities';
// include session reducer
import sessionReducer from './session';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
});
