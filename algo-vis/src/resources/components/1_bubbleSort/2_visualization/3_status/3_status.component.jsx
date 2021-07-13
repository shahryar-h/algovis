import React from "react";
import { connect } from "react-redux";

import { algoSteps } from "./status.constants";
import {
  AlgoSteps,
  StatusField,
  SudoStep,
  SudoStepContainer,
} from "./status_style";

const Status = ({ stepSchema = [], statusSchema, step }) => {
  const renderSudoCodeSteps = (pattern = [1, 1, 1, 1, 1, 1, 1]) => {
    return algoSteps.map((step, i) =>
      pattern[i] == 2 ? (
        <SudoStep selected key={`step-${i}`}>
          {step}
        </SudoStep>
      ) : (
        <SudoStep key={`step-${i}`}>{step}</SudoStep>
      )
    );
  };

  return (
    <>
      <div>
        <AlgoSteps>
          <StatusField>{statusSchema[step]}</StatusField>
          <SudoStepContainer>
            {renderSudoCodeSteps(stepSchema[step])}
          </SudoStepContainer>
        </AlgoSteps>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  stepSchema: state.mainSchema.stepSchema,
  statusSchema: state.mainSchema.statusSchema,
  step: state.step.step,
});

export default connect(mapStateToProps)(Status);
