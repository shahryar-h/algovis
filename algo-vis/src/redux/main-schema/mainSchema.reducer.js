import { initialMainSchema } from "./initial-schemas/initial-main-schema.js";
import { initialStepSchema } from "./initial-schemas/initial-step-schema";
import { initialStatusSchema } from "./initial-schemas/initial-status-schema";

const INITIAL_STATE = {
  mainSchema: initialMainSchema,
  isAnimating: true,
  schemaLength: initialMainSchema.length,
  statusSchema: initialStatusSchema,
  stepSchema: initialStepSchema,
};
const mainSchemaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MAIN_SCHEMA":
      return {
        ...state,
        mainSchema: action.payload.main,
        schemaLength: action.payload.main.length,
        statusSchema: action.payload.statusSchema,
        stepSchema: action.payload.stepSchema,
      };
    case "TOGGLE_ANIMATE":
      return { ...state, isAnimating: !state.isAnimating };
    default:
      return state;
  }
};

export default mainSchemaReducer;
