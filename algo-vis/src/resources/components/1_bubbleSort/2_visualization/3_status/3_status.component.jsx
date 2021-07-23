import React from "react";
import { connect } from "react-redux";
import { renderSudoCodeSteps } from "./status.helpers";
import { AlgoSteps, StatusField, SudoStepContainer } from "./status_style";

const Status = ({ stepSchema = [], statusSchema, step }) => {
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
