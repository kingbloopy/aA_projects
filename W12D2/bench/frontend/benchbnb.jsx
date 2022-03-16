import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.login = login;
  window.signup = signup;
  const user = {username: 'test', password: 'test123'}
  window.user = user;
  ReactDOM.render(<Root store={store}/> ,root);
})