import React from "react";
import { algoSteps } from "../../constants/steps.constants";
import {
  AlgoSteps,
  Status,
  SudoStep,
  SudoStepContainer,
} from "../../styles/steps_style";

export default function Steps({ schema = [], statusSchema }) {
  const renderSudoCodeSteps = (pattern) => {
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
          <Status>{statusSchema}</Status>
          <SudoStepContainer>{renderSudoCodeSteps(schema)}</SudoStepContainer>
        </AlgoSteps>
      </div>
    </>
  );
}
