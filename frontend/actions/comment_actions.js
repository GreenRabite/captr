import * as APIComment from './../utils/comment_api_utils';
import { loading } from './ui_actions';

// export constants
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchPhotoComments = (photoId) =>(dispatch) => {
  dispatch(loading());
  return APIComment.fetchComments(photoId).then((serverComments) =>
  dispatch(receiveComments(serverComments)));
};

export const fetchOneComment = (commentId) =>(dispatch) => (
  APIComment.fetchComment(commentId).then((serverComment) => dispatch(receiveComment(serverComment)))
);

export const createComment = (comment,photoId) =>(dispatch) => (
  APIComment.createComment(comment, photoId).then((newComment) => dispatch(receiveComment(newComment)))
);

export const updateComment = (comment) =>(dispatch) => (
  APIComment.updateComment(comment).then((updatedComment) => dispatch(receiveComment(updatedComment)))
);

export const deleteComment = (commentId) => (dispatch) => (
  APIComment.deleteComment(commentId).then((deletedComment) => dispatch(removeComment(deletedComment)))
);
