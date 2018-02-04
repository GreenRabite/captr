import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";
import commentReducer from "./comment_reducer";


const rootReducer =  combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
  ui : uiReducer,
  comments: commentReducer,
});

export default rootReducer;
