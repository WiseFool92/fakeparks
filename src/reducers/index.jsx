import { combineReducers } from "redux";
import parksReducer from "./parks-reducer";
import formVisibleReducer from './form-visible-reducer';
import selectedParkReducer from './selected-park-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  parks : parksReducer,
  selectedPark: selectedParkReducer
});

export default rootReducer;