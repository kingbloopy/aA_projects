import { RECEIEVE_ERRORS, RECEIEVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type){
    case RECEIEVE_ERRORS:
      return action.errors;
    case RECEIEVE_CURRENT_USER:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
}

export default sessionErrorsReducer;