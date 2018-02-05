import { combineReducers} from 'redux';
import photoReducer from "./photo_reducer";
import commentReducer from "./comment_reducer";
import albumReducer from "./album_reducer";

const entitiesReducer = combineReducers({
  photos: photoReducer,
  comments: commentReducer,
  albums: albumReducer
});

export default entitiesReducer;
