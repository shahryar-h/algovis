const INITIAL_STATE = {
  mainSchema: null,
};
const mainSchemaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MAIN_SCHEMA":
      return { ...state, mainSchema: action.payload };
    default:
      return state;
  }
};

export default mainSchemaReducer;