import { RECEIVE_TAG } from '../actions/tag_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const TagReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TAG:
      const tag = action.tag;
      return Object.assign({}, state, { [tag.name]: tag });
    case RECEIVE_PHOTO:
      const tags = action.payload.tags.reduce((acc, tag) => {
        acc[tag.name] = tag;
        return acc;
      }, {});
      return Object.assign({}, state, tags);
    default:
      return state;
  }
};

export default TagReducer;
