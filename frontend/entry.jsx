import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';

// helper methods
import * as APIUsers from './utils/users_api_utils';
import * as APISession from './utils/session_api_utils';
import {login, logout, signup, receiveCurrentUser, receiveErrors } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = APIUsers.signup;
  window.logout = APISession.logout;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  ReactDOM.render(<Root store = { store } />, root);
});
