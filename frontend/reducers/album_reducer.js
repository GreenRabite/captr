import merge from 'lodash/merge';
import {RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM} from '../actions/album_actions';
import {RECEIVE_PHOTO, REMOVE_PHOTO} from '../actions/photo_actions';

const albumReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return merge({},action.albums);
    case RECEIVE_ALBUM:
      newState = merge({},state);
      newState[action.album.id] = action.album;
      return newState;
    case REMOVE_ALBUM:
      newState = merge({},state);
      delete newState[action.album];
      return newState;
    default:
      return state;
  }
};

export default albumReducer;
