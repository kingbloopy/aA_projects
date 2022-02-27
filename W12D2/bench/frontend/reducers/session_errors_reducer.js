import { RECEIEVE_ERRORS, RECEIEVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type){
    case RECEIEVE_ERRORS:
      // return Object.assign({}, state, action.errors);
      newState.errors = Object.values(action.errors);
      return newState;
    case RECEIEVE_CURRENT_USER:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
}

export default sessionErrorsReducer;