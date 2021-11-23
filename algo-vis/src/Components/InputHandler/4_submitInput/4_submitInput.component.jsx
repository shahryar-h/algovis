import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { setMainSchema } from "../../../redux/main-schema/mainSchema.actions";
import { toggleAnimate } from "../../../redux/main-schema/mainSchema.actions";
import { setNextStep } from "../../../redux/controls/controls.actions";

import { SortButton } from "./submitInput.styles";
import { handleAnotherSet, sort_input } from "./submitInput.helpers";
// component
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
        <SortButton
          // value=""
          onClick={(e) => handleAnotherSet(e)}
        >
          Start another set
        </SortButton>
      ) : (
        <SortButton
          disabled={errorList != ""}
          onClick={() => sort_input(inputList)}
          // value="sort"
        >
          sort
        </SortButton>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setMainSchema: (mainSchema) => dispatch(setMainSchema(mainSchema)),
  toggleAnimate: () => dispatch(toggleAnimate()),
  setNextStep: (step) => dispatch(setNextStep(step)),
});

const mapStateToProps = (state) => ({
  errorList: state.errorList.errorList,
  isAnimating: state.mainSchema.isAnimating,
  inputList: state.inputList.inputList,
});
export default connect(mapStateToProps, mapDispatchToProps)(SubmitInput);
