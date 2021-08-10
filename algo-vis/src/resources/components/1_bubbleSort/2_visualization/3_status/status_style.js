import styled from "styled-components/macro";

export const baseStyle = "margin: 0;";
export const AlgoSteps = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Mukta:wght@200&display=swap");
  ${baseStyle}
  color: white;
  letter-spacing: 0rm;
  font-size: 13px;
  height: 100%;
  margin-top: 2em;
  /* display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 25% 75%;
  gap: 0px 0em; */
`;

export const StatusField = styled.div`
  /* padding: 15px; */
  min-height: 4em;
  ${baseStyle}
`;

export const SudoStep = styled(StatusField)`
  /* padding: 4px; */
  /* background: ${(props) => (props.selected ? "#0d7190" : "")}; */
  /* padding-left: 2em; */
  margin-bottom: 0.3em;

  min-height: 0em;
  /* margin-bottom: 0.3rem; */
`;
export const SudoStepContainer = styled.div`
  /* letter-spacing: 0.1em; */
  /* line-height: 2em; */
  /* font-size: 1.14em; */
`;
export const StepWrapper = styled.div`
  display: flex;
`;

export const PlaceHolder = styled.div`
  /* display: inline; */
  height: 1em;
  width: 2em;
  background-color: rosybrown;
  margin-right: 2em;
  margin-bottom: 1em;
  ${({ selected }) =>
    !selected &&
    `
  background-color: transparent;
  
  `}

  clip-path: polygon(
    0% 26%,
    60% 41%,
    41% 0%,
    100% 50%,
    43% 97%,
    60% 58%,
    0% 71%
  );
`;
