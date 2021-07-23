import { algoSteps } from "./status.constants";
import { SudoStep } from "./status_style";

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

export { renderSudoCodeSteps };
