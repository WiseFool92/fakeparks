import { combineReducers } from "redux";
import parksReducer from "./parks-reducer";
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  parks : parksReducer
});

export default rootReducer;