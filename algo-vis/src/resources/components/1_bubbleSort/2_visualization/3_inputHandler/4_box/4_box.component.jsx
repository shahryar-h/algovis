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

  check_numeric = (userInput_comma_seperated) => {
    console.log("hellooo", userInput_comma_seperated);
    let userInput_joinedSrting = userInput_comma_seperated.join("");
    // validations
    let isnum = /^\d+$/.test(userInput_joinedSrting);
    if (isnum === false) {
      this.setState({
        errorsIndex: [1, 0, 0, 0],
      });
      return true;
    }
    this.setState({
      errorsIndex: [0, 0, 0, 0],
    });

    return false;
  };
  const validateInput = (e) => {
    let userInitialInput = e.target.value;
    setUserInput(userInitialInput);
    if (this.blank_user_input(userInitialInput)) {
      return true, [];
    }

    // // removes ,, situations
    let userInput_comma_seperated = userInitialInput
      .split(",")
      .filter((num) => {
        return num != "";
      });

    if (check_numeric(userInput_comma_seperated)) return true, [];
    // // case all user inputs are nums comma seperated:

    let user_input_parsed_to_array_of_Integers =
      this.pasre_to_array_of_Integers(userInput_comma_seperated);
    if (this.validate_user_input_length(user_input_parsed_to_array_of_Integers))
      return true, [];
    if (this.validate_user_input_range(user_input_parsed_to_array_of_Integers))
      return true, [];

    return [
      false,
      user_input_parsed_to_array_of_Integers
        ? user_input_parsed_to_array_of_Integers
        : [],
    ];
  };

  this.setState({ input_value: userInput });
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
