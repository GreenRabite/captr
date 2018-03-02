import * as APIAlbum from './../utils/album_api_utils';
import * as APIUser from './../utils/users_api_utils';
import { loading } from './ui_actions';

//export constants
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

export const removeAlbum = (album) => ({
  type: REMOVE_ALBUM,
  album
});

export const fetchAlbums = () => (dispatch) => {
  dispatch(loading());
  return APIAlbum.fetchAlbums().then((albums)=>
  (dispatch(receiveAlbums(albums))));
};

export const fetchAlbum = (albumId) => (dispatch) => {
  dispatch(loading());
  return APIAlbum.fetchAlbum(albumId).then((album)=>
  (dispatch(receiveAlbum(album))));
};

export const fetchUserAlbums = (userId) => (dispatch) => {
  dispatch(loading());
  return APIUser.fetchUserAlbums(userId).then((albums)=>
  (dispatch(receiveAlbums(albums))));
};

export const createAlbum = (album) => (dispatch) => (
  APIAlbum.createAlbum(album).then((newAlbum)=> (dispatch(receiveAlbum(newAlbum))))
);

export const updateAlbum = (album) => (dispatch) => (
  APIAlbum.updateAlbum(album).then((updatedAlbum)=> (dispatch(receiveAlbum(updatedAlbum))))
);

export const deleteAlbum = (id) => (dispatch) => (
  APIAlbum.deleteAlbum(id).then((deletedAlbum)=> (dispatch(removeAlbum(deletedAlbum))))
);
