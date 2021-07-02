import { combineReducers } from "redux";
import mainSchemaReducer from "./main-schema/mainSchema.reducer";
import errorListReducer from "./error-list/errorList.reducer";
import inputListReducer from "./input-list/inputList.reducer";
import stepsReducer from "./steps/steps.reducer";
import statusReducer from "./status/status.reducer";
import controlsReducer from "./controls/controls.reducer";
export default combineReducers({
  mainSchema: mainSchemaReducer,
  errorList: errorListReducer,
  inputList: inputListReducer,
  stepSchema: stepsReducer,
  statusSchema: statusReducer,
  step: controlsReducer,
});
