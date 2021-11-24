import styled from "styled-components/macro";

export const VisContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ControlAndStatus = styled.div`
  width: 80%;
  margin: 0px auto;
  height: 35%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0px 1em;
`;

export const InputWrapper = styled.div`
  display: "flex";
  flex-direction: "column";
  justify-content: "space-evenly";
`;
