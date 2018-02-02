import { combineReducers} from 'redux';
import photoReducer from "./photo_reducer";

const entitiesReducer = combineReducers({
  photos: photoReducer
});

export default entitiesReducer;
