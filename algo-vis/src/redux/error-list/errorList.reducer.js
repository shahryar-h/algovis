const initialState = {
  errorList: "",
};
const errors = [
  "",
  "The program accepts only number values comma separated",
  "The program only accepts up to 7 numbers",
  "The program only accepts numbers between 1-100",
  "Please provide a set of numbers or select the default values",
];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ERROR_LIST": {
      return { ...state, errorList: errors[payload] };
    }

    default:
      return state;
  }
};
