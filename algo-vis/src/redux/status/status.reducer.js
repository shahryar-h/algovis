const initialState = {
  statusSchema: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_STATUS_SCHEMA":
      return { ...state, statusSchema: [...payload] };

    default:
      return state;
  }
};
