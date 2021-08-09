import styled from "styled-components/macro";

const VisContainer = styled.div`
  height: 100%;
  /* display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 35% 65%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ControlAndStatus = styled.div`
  width: 80%;
  margin: 0px auto;
  /* background: blue; */
  height: 35%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0px 1em;
`;

export { VisContainer, ControlAndStatus };
