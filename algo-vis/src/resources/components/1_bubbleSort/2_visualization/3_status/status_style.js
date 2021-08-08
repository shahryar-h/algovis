import styled from "styled-components/macro";

export const baseStyle = "margin: 0;";
export const AlgoSteps = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Mukta:wght@200&display=swap");
  ${baseStyle}
  border-radius: 3px;
  border: none;
  color: white;
  font-family: "Baloo Tammudu 2";
  letter-spacing: 0rm;
  font-size: 13px;
`;

export const StatusField = styled.div`
  padding: 15px;
  /* min-height: 3em; */
  ${baseStyle}
`;

export const SudoStep = styled(StatusField)`
  padding: 4px;
  background: ${(props) => (props.selected ? "#0d7190" : "")};

  /* box-shadow: ${(props) =>
    props.selected
      ? "inset 5px 5px 13px #095168,inset -5px -5px 13px #1191b8"
      : ""}; */

  /* min-height: 0em; */
  margin-bottom: 0.3rem;
`;
export const SudoStepContainer = styled.div`
  letter-spacing: 0.1em;
  /* line-height: 2em; */
  /* font-size: 1.14em; */
`;
