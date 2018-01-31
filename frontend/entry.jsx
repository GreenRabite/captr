import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUsers from './utils/users_api_utils';
import * as APISession from './utils/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.createUser = APIUsers.createUser;
  window.createSession = APISession.createSession;
  window.deleteSession = APISession.deleteSession;
  ReactDOM.render(<h1>captr: the journey begins</h1>, root);
});
