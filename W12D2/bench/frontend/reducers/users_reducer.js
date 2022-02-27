import { RECEIEVE_CURRENT_USER } from "../actions/session_actions";

const _emptyState = {};

const usersReducer = (state = _emptyState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
      // return Object.assign({}, { id: action.user.id });
    default:
      return state;
  }
}

export default usersReducer;