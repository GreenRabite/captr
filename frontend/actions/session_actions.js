import * as APISession from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) =>(
  APISession.login(user).then((currentUser)=> dispatch(receiveCurrentUser(currentUser))),
  (errors) => dispatch(receiveErrors(errors.responseJSON))
);

export const signup = (user) => (dispatch) =>(
  APISession.signup(user).then((newUser) => (dispatch(receiveCurrentUser(newUser)))),
  (errors) => dispatch(receiveErrors(errors.responseJSON))
);

export const logout = () => (dispatch) =>(
  APISession.logout().then((user) => (dispatch(receiveCurrentUser(null)))),
  (errors) => dispatch(receiveCurrentUser(errors.responseJSON))
);
