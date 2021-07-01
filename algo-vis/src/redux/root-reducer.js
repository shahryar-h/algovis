import { combineReducers } from "redux";
import mainSchemaReducer from "./main-schema/mainSchema.reducer";
import errorListReducer from "./error-list/errorList.reducer";

export default combineReducers({
  mainSchema: mainSchemaReducer,
  errorList: errorListReducer,
});
