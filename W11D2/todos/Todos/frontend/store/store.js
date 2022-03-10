import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/root_reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // makes console look nice

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;
