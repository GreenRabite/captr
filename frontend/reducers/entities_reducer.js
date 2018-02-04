import { combineReducers} from 'redux';
import photoReducer from "./photo_reducer";
import commentReducer from "./comment_reducer";

const entitiesReducer = combineReducers({
  photos: photoReducer,
  comments: commentReducer,
});

export default entitiesReducer;
