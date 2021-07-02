import styled from "styled-components";

export const baseStyle = "margin: 0;";
export const AlgoSteps = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Mukta:wght@200&display=swap");
  ${baseStyle}
  border-radius: 3px;
  border: none;
  color: white;
  font-family: "Baloo Tammudu 2";
  letter-spacing: 0rm;
`;

export const StatusField = styled.div`
  padding: 15px;
  min-height: 3em;
  ${baseStyle}
`;

export const SudoStep = styled(StatusField)`
  padding: 0px;
  background: ${(props) => (props.selected ? "black" : "")};
  min-height: 0em;
`;
export const SudoStepContainer = styled.div`
  letter-spacing: 0.1em;
  /* line-height: 2em; */
  /* font-size: 1.14em; */
`;
