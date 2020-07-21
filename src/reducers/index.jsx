import { combineReducers } from "redux";
import parksReducer from "./parks-reducer";
import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  parks : parksReducer
});

export default rootReducer;