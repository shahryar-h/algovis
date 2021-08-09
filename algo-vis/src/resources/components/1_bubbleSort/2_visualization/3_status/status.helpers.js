import { algoSteps } from "./status.constants";
import { SudoStep, PlaceHolder, StepWrapper } from "./status_style";
import { v4 as uuidv4 } from "uuid";

const renderSudoCodeSteps = (pattern = [1, 2, 2, 1, 1, 1, 1]) => {
  return algoSteps.map((step, i) =>
    pattern[i] == 2 ? (
      <StepWrapper key={uuidv4()}>
        <PlaceHolder selected></PlaceHolder>
        <SudoStep selected key={uuidv4()}>
          {step}
        </SudoStep>
      </StepWrapper>
    ) : (
      <StepWrapper key={uuidv4()}>
        <PlaceHolder></PlaceHolder>
        <SudoStep key={uuidv4()}>{step}</SudoStep>
      </StepWrapper>
    )
  );
};

export { renderSudoCodeSteps };
