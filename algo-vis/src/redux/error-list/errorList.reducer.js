const initialState = {
  errorList: [0, 0, 0, 0],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ERROR_LIST":
      return { ...state, ...payload };

    default:
      return state;
  }
};
