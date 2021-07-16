import React, { useState } from "react";
import { connect } from "react-redux";
import { setErrorList } from "../../../../../../redux/error-list/errorList.actions";
import { setInputList } from "../../../../../../redux/input-list/inputList.actions";
import { Form, Field } from "react-final-form";

import { Input } from "./box_styles";

const Box = ({ mainSchema, setErrorList, setInputList, isAnimating }) => {
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

  const check_numeric = (userInput) => {
    // let userInput_joinedString = userInput_comma_separated.join("");
    var userInput_commaRemoved = userInput.replace(/,/g, "");

    let isNumber = /^\d+$/.test(userInput_commaRemoved);
    return isNumber ? true : false;
  };

  const validate_user_input_length = (
    user_input_parsed_to_array_of_Integers
  ) => {
    if (user_input_parsed_to_array_of_Integers.length > 7) {
      return false;
    } else {
      return true;
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
      return false;
    } else {
      return true;
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
  };
  const validateUserInput = (values = { userInput: "2,4,1,22,3" }) => {
    const errors = {};
    const userInput = values.userInput;

    if (!userInput) {
      errors.userInput = "Please provide a set of comma separated numbers";
    } else {
      if (!check_numeric(userInput)) {
        errors.userInput = "Please numbers";
      } else {
        let userInput_comma_separated = userInput.split(",").filter((num) => {
          return num != "";
        });
        const int_userInput = parse_to_array_of_Integers(
          userInput_comma_separated
        );

        if (int_userInput.length > 7) {
          errors.userInput = "sorry 7 only";
        } else {
          if (!validate_user_input_range(int_userInput)) {
            errors.userInput = "sorry only between 1-100";
          } else {
            setInputList(int_userInput);
          }
        }
      }
    }
    return errors;
  };
  const onSubmit = (value) => {
    const a = value.userInput.split(",").filter((num) => {
      return num != "";
    });
    setInputList(parse_to_array_of_Integers(a));
  };
  return (
    <>
      {console.log("asda")}

      <Form
        onSubmit={onSubmit}
        validate={validateUserInput}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="userInput">
              {({ input, meta }) => (
                <div>
                  {/* <input {...input} type="text" placeholder="Username" /> */}
                  <Input
                    {...input}
                    type="text"
                    autoComplete="off"
                    name="name"
                    disabled={isAnimating}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {/* <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  mainSchema: state.mainSchema,
  isAnimating: state.mainSchema.isAnimating,
});

const mapDispatchToProps = (dispatch) => ({
  setErrorList: (errorList) => dispatch(setErrorList(errorList)),
  setInputList: (inputList) => dispatch(setInputList(inputList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
