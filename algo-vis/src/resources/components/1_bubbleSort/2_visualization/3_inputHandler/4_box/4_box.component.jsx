import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Input } from "./box_styles";
import { validateUserInput, onSubmit } from "./box.helpers";
// TODO: remove errors and everything related to them
// update error messages here
const Box = ({ isAnimating }) => {
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

export default connect(mapStateToProps)(Box);
