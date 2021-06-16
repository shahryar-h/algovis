import React, { Component } from "react";

import styled from "styled-components";

const baseStyle = "margin: 0;";
const AlgoSteps = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Mukta:wght@200&display=swap"); */
  ${baseStyle}
  /* background: palevioletred; */
  border-radius: 3px;
  border: none;
  color: white;
  /* cursor: pointer; */
  /* height: 100%; */
  font-family: "Baloo Tammudu 2";
  letter-spacing: 0rm;
`;

const Status = styled.div`
  padding: 15px;
  ${baseStyle}
`;

const SudoStep = styled(Status)`
  padding: 0px;
  /* background-color: burlywood; */
  background: ${(props) => (props.selected ? "burlywood" : "")};
  /* padding: 3px; */
`;
const SudoStepContainer = styled.div`
  /* padding: 10px; */
`;

/// constant variables

const algoSteps = [
  "do",
  "swapped = false",
  "for i = 1 to indexOfLastUnsortedElement-1",
  "if leftElement > rightElement",
  "swap(leftElement, rightElement)",
  "swapped = true",
  "while swapped",
];

export default function Steps({ schema = [] }) {
  const renderSudoCodeSteps = (pattern) => {
    console.log("pattern", pattern);
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
    <div>
      <AlgoSteps>
        <Status>
          Checking if 3 > 38 and swap them if that is true. The current value of
          swapped = false.
        </Status>
        <SudoStepContainer>{renderSudoCodeSteps(schema)}</SudoStepContainer>
      </AlgoSteps>
    </div>
  );
}
