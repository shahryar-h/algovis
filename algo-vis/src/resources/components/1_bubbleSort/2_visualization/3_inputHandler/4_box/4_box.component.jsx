import React, { useState } from "react";
import { connect } from "react-redux";
import { setErrorList } from "../../../../../../redux/error-list/errorList.actions";
import { setInputList } from "../../../../../../redux/input-list/inputList.actions";
import { Form, Field } from "react-final-form";
import { Input } from "./box_styles";
// TODO: remove errors and everything related to them
// update error messages here
const Box = ({ setInputList, isAnimating }) => {
  const check_numeric = (userInput) => {
    var userInput_commaRemoved = userInput.replace(/,/g, "");
    let isNumber = /^\d+$/.test(userInput_commaRemoved);
    return isNumber ? true : false;
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
    return result ? true : false;
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
  const onSubmit = (value) => {};
  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validateUserInput}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="userInput">
              {({ input, meta }) => (
                <div>
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
          </form>
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAnimating: state.mainSchema.isAnimating,
});

const mapDispatchToProps = (dispatch) => ({
  setInputList: (inputList) => dispatch(setInputList(inputList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
