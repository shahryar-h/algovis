/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  inputList: [5, 2, 7, 1, 4, 6, 3],
  inputString: "5, 2, 7, 1, 4, 6, 3",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_INPUT_LIST": {
      return {
        ...state,
        inputList: [...payload],
        inputString: payload.join(","),
      };
    }

    default:
      return state;
  }
};
