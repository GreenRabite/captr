import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';

// helper methods
import * as APIUsers from './utils/users_api_utils';
import * as APISession from './utils/session_api_utils';
import * as APIPhoto from './utils/photo_api_utils';
import * as APIComment from './utils/comment_api_utils';
import {login, logout, signup, receiveCurrentUser, receiveErrors } from './actions/session_actions';
import {fetchPhotos, fetchPhoto, createPhoto, updatePhoto, deletePhoto } from './actions/photo_actions';
import {fetchPhotoComments, fetchOneComment, createComment, updateComment, deleteComment } from './actions/comment_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  let store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = APIUsers.signup;
  window.logout = APISession.logout;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchPhotoComments = store.dispatch(fetchPhotoComments);
  window.fetchOneComment = store.dispatch(fetchOneComment);
  window.createComment = store.createComment;
  window.updateComment = store.updateComment;
  window.deleteComment = store.deleteComment;

  ReactDOM.render(<Root store = { store } />, root);
});
