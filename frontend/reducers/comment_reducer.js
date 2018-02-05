import merge from 'lodash/merge';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({},action.comments);
    case RECEIVE_COMMENT:
      newState = merge({},state);
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      newState = merge({},state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
