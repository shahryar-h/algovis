const initialState = {
  stepSchema: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_STEPS_SCHEMA":
      return { ...state, stepSchema: [...payload] };

    default:
      return state;
  }
};
