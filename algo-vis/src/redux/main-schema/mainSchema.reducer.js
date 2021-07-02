const INITIAL_STATE = {
  mainSchema: [],
  isAnimating: true,
  schemaLength: 0,
};
const mainSchemaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MAIN_SCHEMA":
      return {
        ...state,
        mainSchema: action.payload,
        schemaLength: action.payload.length,
      };
    case "TOGGLE_ANIMATE":
      return { ...state, isAnimating: !state.isAnimating };
    default:
      return state;
  }
};

export default mainSchemaReducer;
