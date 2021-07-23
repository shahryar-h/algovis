import styled from "styled-components";

const VisContainer = styled.div`
  height: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5fr 3.5fr 1fr 2fr;
  gap: 0px 0px;
  grid-template-areas: "." "." "." ".";
`;

export { VisContainer };
