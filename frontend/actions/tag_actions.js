import { postTag, getTag } from '../util/tag_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const requestTag = tagName => dispatch => {
  return getTag(tagName).then(tag => dispatch(receiveTag(tag)));
};

export const createTag = tag => dispatch => (
  postTag(tag).then(tag => dispatch(receiveTag(tag)))
);
