import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from './../actions/photo_actions';
import { LOADING } from './../actions/ui_actions';
import merge from 'lodash/merge';

const _initialLoadState = {
  loading: false
};

const uiReducer = (state = _initialLoadState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, {loading : false});
    case RECEIVE_PHOTO:
      return merge({}, state, {loading : false});
    case LOADING:
      return merge({}, state, {loading : true});
    default:
      return state;
  }
};

export default uiReducer;
