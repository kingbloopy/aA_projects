
import {
  RECEIEVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session';

// want to be returned if no current user
const _nullSession = {
  currentUser: null
}

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      // once we get new current user, assign that as a key in new state
      return Object.assign({}, {currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

