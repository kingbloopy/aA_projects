
// import * as sessionUtil from '../utils/session';
import {
  postUser,
  postSession,
  deleteSession
} from '../utils/session';

export const RECEIEVE_CURRENT_USER = 'RECEIEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receieveCurrentUser = (user) => {
  return {
    type: RECEIEVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const createNewUser = (formUser) => (dispatch) => {
  return postUser(formUser)
  .then(user => dispatch(receieveCurrentUser(user)));
} 

export const login = (formUser) => (dispatch) => {
  return postSession(formUser)
  .then(user => dispatch(receieveCurrentUser(user)));
} 

// does not need to take in any user
export const logout = () => (dispatch) => {
  return deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
}