import { algoSteps } from "./status.constants";
import { SudoStep } from "./status_style";
import { v4 as uuidv4 } from "uuid";

const renderSudoCodeSteps = (pattern = [1, 1, 1, 1, 1, 1, 1]) => {
  return algoSteps.map((step, i) =>
    pattern[i] == 2 ? (
      <SudoStep selected key={uuidv4()}>
        {step}
      </SudoStep>
    ) : (
      <SudoStep key={uuidv4()}>{step}</SudoStep>
    )
  );
};

export { renderSudoCodeSteps };
