const initialState = {
  step: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_NEXT_STEP":
      return { ...state, step: payload };

    default:
      return state;
  }
};
