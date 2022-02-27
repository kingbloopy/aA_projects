
import {login, logout, signup} from '../util/session_api_util';

export const RECEIEVE_CURRENT_USER = 'RECEIEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIEVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIEVE_CURRENT_USER
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIEVE_ERRORS
});

export const loginUser = user => dispatch => (
  login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
)

export const logoutUser = () => dispatch => (
  logout()
  .then(() => dispatch(logoutCurrentUser()))
)

export const signupUser = user => dispatch => (
  signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
)