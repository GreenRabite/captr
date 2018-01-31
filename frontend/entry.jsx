import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';

// helper methods
import * as APIUsers from './utils/users_api_utils';
import * as APISession from './utils/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = APIUsers.signup;
  window.login = APISession.login;
  window.logout = APISession.logout;
  ReactDOM.render(<Root store = { store } />, root);
});
