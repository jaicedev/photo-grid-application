import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import dimensionReducer from "./dimensionReducer.js";
import grayscaleReducer from "./grayscaleReducer";
import blurReducer from "./blurReducer";

export default combineReducers({
  photos: photoReducer,
  dimension: dimensionReducer,
  grayscale: grayscaleReducer,
  blur: blurReducer,
});
