import React, { useState } from "react";
import { connect } from "react-redux";
import { setErrorList } from "../../../../../../redux/error-list/errorList.actions";
import { setInputList } from "../../../../../../redux/input-list/inputList.actions";
import { Input } from "./box_styles";

const Box = ({ mainSchema, setErrorList, setInputList }) => {
  const [userInput, setUserInput] = useState("5,2,7,1,4,6,3");

  const blank_user_input = (userInitialInput) => {
    if (userInitialInput.trim() === "") {
      setErrorList(4);
      return true;
    } else {
      setErrorList(0);
      return false;
    }
  };

  const check_numeric = (userInput_comma_separated) => {
    let userInput_joinedString = userInput_comma_separated.join("");
    let isNumber = /^\d+$/.test(userInput_joinedString);
    if (isNumber === false) {
      setErrorList(1);
      return true;
    } else {
      setErrorList(0);
      return false;
    }
  };

  const validate_user_input_length = (
    user_input_parsed_to_array_of_Integers
  ) => {
    if (user_input_parsed_to_array_of_Integers.length > 7) {
      setErrorList(2);
      return true;
    } else {
      setErrorList(0);
      return false;
    }
  };
  const parse_to_array_of_Integers = (userInput_comma_separated) => {
    return userInput_comma_separated.map((num) => {
      return parseInt(num);
    });
  };

  const validate_user_input_range = (
    user_input_parsed_to_array_of_Integers
  ) => {
    let result = user_input_parsed_to_array_of_Integers.every(function (e) {
      return e < 100;
    });

    if (!result) {
      setErrorList(3);
      return true;
    } else {
      setErrorList(0);
      return false;
    }
  };

  const validateInput = (e) => {
    let userInitialInput = e.target.value;
    setUserInput(userInitialInput);
    if (blank_user_input(userInitialInput)) return;
    // // removes ,, situations
    let userInput_comma_separated = userInitialInput
      .split(",")
      .filter((num) => {
        return num != "";
      });

    if (check_numeric(userInput_comma_separated)) return;
    // // case all user inputs are nums comma separated:

    let user_input_parsed_to_array_of_Integers = parse_to_array_of_Integers(
      userInput_comma_separated
    );
    if (validate_user_input_length(user_input_parsed_to_array_of_Integers))
      return;
    if (validate_user_input_range(user_input_parsed_to_array_of_Integers))
      return;
    setInputList(user_input_parsed_to_array_of_Integers);
  };
  return (
    <Input
      type="text"
      autoComplete="off"
      name="name"
      value={userInput}
      onChange={(e) => validateInput(e)}
      //   disabled={is_animating}
    />
  );
};

const mapStateToProps = (state) => ({
  mainSchema: state.mainSchema.mainSchema,
});

const mapDispatchToProps = (dispatch) => ({
  setErrorList: (errorList) => dispatch(setErrorList(errorList)),
  setInputList: (inputList) => dispatch(setInputList(inputList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
