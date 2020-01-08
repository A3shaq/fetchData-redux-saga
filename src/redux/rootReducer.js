import { combineReducers } from "redux";
import imagesReducers from "./reducers/imageReducer";

export default combineReducers({
grid:imagesReducers
});
