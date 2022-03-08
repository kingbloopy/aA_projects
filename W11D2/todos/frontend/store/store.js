import { createStore } from 'redux';
// come back with rootReducer

export default configureStore = (preloadedState = {}) => {
  return createStore(({}), preloadedState);
}

