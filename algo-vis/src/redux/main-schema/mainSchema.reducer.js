const INITIAL_STATE = {
  mainSchema: [],
  isAnimating: true,
};
const mainSchemaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MAIN_SCHEMA":
      return { ...state, mainSchema: action.payload };
    case "TOGGLE_ANIMATE":
      return { ...state, isAnimating: !state.isAnimating };
    default:
      return state;
  }
};

export default mainSchemaReducer;
