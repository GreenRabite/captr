import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './utils/api_utils';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchUsers = APIUtil.fetchUsers;
  window.fetchUser = APIUtil.fetchUser;
  window.createUser = APIUtil.createUser;
  ReactDOM.render(<h1>captr: the journey begins</h1>, root);
});
