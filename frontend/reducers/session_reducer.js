import { merge } from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

// maintain its own default state. To do that pass in an object as
// a default argument with currentUser set to null and errors set
// to an empty array.
const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) =>{
  Object.freeze(state);
  let currentUser;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return merge({},{ currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
