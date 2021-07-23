import React from "react";
import { connect } from "react-redux";

import { SortButton } from "./submitInput.styles";
import { handleAnotherSet, sort_input } from "./submitInput.helpers";
const SubmitInput = ({
  inputList = [],
  setMainSchema,
  errorList,
  isAnimating,
  toggleAnimate,
  setNextStep,
}) => {
  return (
    <>
      {isAnimating ? (
        <SortButton value="another set" onClick={(e) => handleAnotherSet(e)} />
      ) : (
        <SortButton
          disabled={errorList != ""}
          onClick={() => sort_input(inputList)}
          value="sort"
        />
      )}
    </>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   setMainSchema: (mainSchema) => dispatch(setMainSchema(mainSchema)),
//   toggleAnimate: () => dispatch(toggleAnimate()),
//   setNextStep: (step) => dispatch(setNextStep(step)),
// });

const mapStateToProps = (state) => ({
  errorList: state.errorList.errorList,
  isAnimating: state.mainSchema.isAnimating,
  inputList: state.inputList.inputList,
});
export default connect(mapStateToProps)(SubmitInput);
