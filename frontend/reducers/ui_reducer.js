import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from './../actions/photo_actions';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from './../actions/comment_actions';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from './../actions/album_actions';
import { LOADING } from './../actions/ui_actions';
import merge from 'lodash/merge';

const _initialLoadState = {
  loading: true
};

const uiReducer = (state = _initialLoadState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, {loading : false});
    case RECEIVE_PHOTO:
      return merge({}, state, {loading : false});
    case RECEIVE_COMMENTS:
      return merge({}, state, {loading : false});
    case RECEIVE_ALBUMS:
      return merge({}, state, {loading : false});
    case RECEIVE_ALBUM:
      return merge({}, state, {loading : false});
    case LOADING:
      return merge({}, state, {loading : true});
    default:
      return state;
  }
};

export default uiReducer;
