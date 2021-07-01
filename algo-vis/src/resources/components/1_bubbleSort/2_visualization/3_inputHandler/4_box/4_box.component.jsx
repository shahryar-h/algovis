import React, { useState } from "react";

import { connect } from "react-redux";
import styled from "styled-components";
const baseStyle = "margin: 0;";

//TODO: make this a universal input in another folder for reuse
export const Input = styled.input`
  ${baseStyle}
  appearance: none;
  border-style: none;
  height: 10%;
  width: 80%;
  color: white;
  padding: 15px;
  letter-spacing: 4px;
  background: #1c7190;
  font-size: 1.2em;
  border-radius: 50px;
  background: #0d7190;
  box-shadow: inset 5px 5px 13px #095168, inset -5px -5px 13px #1191b8;
  &:focus {
    outline: none;
  }
`;
const Box = ({ mainSchema }) => {
  const [userInput, setUserInput] = useState("5,2,7,1,4,6,3");
  // to go to redux
  const [errorsIndex, setErrorsIndex] = useState([0, 0, 0, 0]);

  const blank_user_input = (userInitialInput) => {
    if (userInitialInput.trim() === "") {
      setErrorsIndex([0, 0, 0, 1]);
      return true;
    } else {
      setErrorsIndex([0, 0, 0, 0]);
      return false;
    }
  };

  const check_numeric = (userInput_comma_separated) => {
    let userInput_joinedString = userInput_comma_separated.join("");
    // validations
    let isNumber = /^\d+$/.test(userInput_joinedString);
    if (isNumber === false) {
      setErrorsIndex([1, 0, 0, 0]);
      return true;
    } else {
      setErrorsIndex([0, 0, 0, 0]);
      return false;
    }
  };

  const validate_user_input_length = (
    user_input_parsed_to_array_of_Integers
  ) => {
    if (user_input_parsed_to_array_of_Integers.length > 7) {
      setErrorsIndex([0, 1, 0, 0]);
      return true;
    } else {
      setErrorsIndex([0, 0, 0, 0]);
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
      setErrorsIndex([0, 0, 1, 0]);
      return true;
    } else {
      setErrorsIndex([0, 0, 0, 0]);
      return false;
    }
  };

  const validateInput = (e) => {
    let userInitialInput = e.target.value;
    setUserInput(userInitialInput);
    if (blank_user_input(userInitialInput)) {
      return;
    }

    // // removes ,, situations
    let userInput_comma_separated = userInitialInput
      .split(",")
      .filter((num) => {
        return num != "";
      });

    if (check_numeric(userInput_comma_separated)) return;
    // // case all user inputs are nums comma seperated:

    let user_input_parsed_to_array_of_Integers = parse_to_array_of_Integers(
      userInput_comma_separated
    );

    if (validate_user_input_length(user_input_parsed_to_array_of_Integers))
      return;
    if (validate_user_input_range(user_input_parsed_to_array_of_Integers))
      return;

    // return [
    //   user_input_parsed_to_array_of_Integers
    //     ? user_input_parsed_to_array_of_Integers
    //     : [],
    // ];
  };

  // this.setState({ input_value: userInput });
  console.log(errorsIndex);
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

export default connect(mapStateToProps)(Box);
