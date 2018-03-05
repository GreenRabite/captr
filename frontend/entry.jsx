import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';

// helper methods
import * as APIUsers from './utils/users_api_utils';
import * as APISession from './utils/session_api_utils';
import * as APIPhoto from './utils/photo_api_utils';
import * as APIComment from './utils/comment_api_utils';
import * as APIAlbum from './utils/album_api_utils';
import {login, logout, signup, receiveCurrentUser, receiveErrors } from './actions/session_actions';
import {fetchPhotos, fetchPhoto, createPhoto, updatePhoto, deletePhoto, createPhotoBrandNewAlbum } from './actions/photo_actions';
import { receiveComments, receiveComment, removeComment, fetchPhotoComments, fetchOneComment, createComment, updateComment, deleteComment } from './actions/comment_actions';
import { fetchAlbums, fetchAlbum, createAlbum, updateAlbum, deleteAlbum, fetchUserAlbums } from './actions/album_actions';

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
  //API Calls
  // window.fetchAlbums = APIAlbum.fetchAlbums;
  // window.fetchAlbum = APIAlbum.fetchAlbum;
  // window.updateAlbum = APIAlbum.updateAlbum;
  // window.createAlbum = APIAlbum.createAlbum;
  // window.deleteAlbum = APIAlbum.deleteAlbum;
  // window.fetchUserAlbums = APIUsers.fetchUserAlbums;
  // window.createPhotoBrandNewAlbum = APIPhoto.createPhotoBrandNewAlbum;
  //Action Creators
  window.fetchAlbums = fetchAlbums;
  window.fetchAlbum = fetchAlbum;
  window.createAlbum = createAlbum;
  window.updateAlbum = updateAlbum;
  window.deleteAlbum = deleteAlbum;
  // window.fetchUserAlbum = fetchUserAlbums;
  // window.createPhotoBrandNewAlbum = createPhotoBrandNewAlbum;

  ReactDOM.render(<Root store = { store } />, root);
});
