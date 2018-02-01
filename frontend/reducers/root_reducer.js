import { combineReducers } from 'redux';

import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import photoReducer from "./photo_reducer";

const rootReducer =  combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  photo: photoReducer
});

export default rootReducer;
