import merge from 'lodash/merge';
import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { REMOVE_ALBUM } from '../actions/album_actions';


// This function is for the photo reducer


const photoReducer = (state = {}, action) =>{
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({},action.photos);
    case RECEIVE_PHOTO:
      newState = merge({},state);
      newState[action.photo.id] = action.photo;
      return newState;
    case REMOVE_PHOTO:
      newState = merge({},state);
      delete newState[action.photoId];
      return newState;
    case REMOVE_ALBUM:
      newState = merge({},state);
      for (let photoId in newState) {
        if (newState[photoId].album_id === action.album.id) {
          delete newState[photoId];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default photoReducer;
