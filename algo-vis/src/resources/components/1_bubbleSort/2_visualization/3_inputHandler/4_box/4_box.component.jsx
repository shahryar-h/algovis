import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Input } from "./box_styles";
import { validateUserInput, onSubmit } from "./box.helpers";
import styled from "styled-components/macro";
// TODO: remove errors and everything related to them
// update error messages here

const Error = styled.div`
  min-height: 1em;
  /* width: 3em; */
  color: white;
  font-size: 0.8em;
  padding-top: 0.5em;
`;
const StyledForm = styled.form`
  display: flex;
  /* justify-content: flex-end; */
  align-items: flex-end;
  flex-direction: column;
`;
const Box = ({ isAnimating }) => {
  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validateUserInput}
        render={({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field name="userInput">
              {({ input, meta }) => (
                <>
                  <Input
                    {...input}
                    type="text"
                    autoComplete="off"
                    name="name"
                    disabled={isAnimating}
                    placeholder="Enter numbers here"
                  />
                  <Error>{meta.error && meta.touched && meta.error}</Error>
                </>
              )}
            </Field>
          </StyledForm>
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAnimating: state.mainSchema.isAnimating,
});

export default connect(mapStateToProps)(Box);
