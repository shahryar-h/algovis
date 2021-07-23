import styled from "styled-components";

// .controllerContainer

const BubbleSortWrapper = styled.main`
  height: 90vh;
  width: 90%;
  border-radius: 50px;
  background: #0d7190;
  box-shadow: inset 24px 24px 48px #095066, inset -24px -24px 48px #1192ba;
`;
const Sections = styled.section`
  height: 87%;
  padding: 4em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0% 0%;
  grid-template-areas: ". .";
`;

export { BubbleSortWrapper, Sections };
