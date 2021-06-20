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

export const Status = styled.div`
  padding: 15px;
  ${baseStyle}
`;

export const SudoStep = styled(Status)`
  padding: 0px;
  background: ${(props) => (props.selected ? "burlywood" : "")};
`;
export const SudoStepContainer = styled.div``;
