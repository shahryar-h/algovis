const INITIAL_STATE = {
  mainSchema: [],
  isAnimating: true,
  schemaLength: 0,
  statusSchema: [],
  stepSchema: [],
};
const mainSchemaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MAIN_SCHEMA":
      return {
        ...state,
        mainSchema: action.payload.main,
        schemaLength: action.payload.length,
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
