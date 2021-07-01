import { combineReducers } from "redux";
import mainSchemaReducer from "./main-schema/mainSchema.reducer";

export default combineReducers({
  mainSchema: mainSchemaReducer,
});
