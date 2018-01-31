import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUsers from './utils/users_api_utils';
import * as APISession from './utils/session_api_util';
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = APIUsers.signup;
  window.login = APISession.login;
  window.logout = APISession.logout;
  ReactDOM.render(<h1>captr: the journey begins</h1>, root);
});
