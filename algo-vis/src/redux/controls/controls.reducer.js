const initialState = {
  step: 4,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_STEP":
      return { ...state, step: payload };

    default:
      return state;
  }
};
