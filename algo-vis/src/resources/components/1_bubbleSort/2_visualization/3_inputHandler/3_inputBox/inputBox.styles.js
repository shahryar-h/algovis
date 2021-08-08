import styled from "styled-components/macro";

const baseStyle = "margin: 0;";

export const InputSection = styled.section`
  ${baseStyle}
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
`;

// TODO: make this a button
export const SortButton = styled.div`
  ${baseStyle}

  width: 50%;
  border-radius: 50px;
  background: red;
  padding: 0.8em;
  border-radius: 50px;
  background: linear-gradient(145deg, #0e799a, #0c6682);
  box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  text-align: center;
  color: white;
  cursor: pointer;

  &:active {
    border-radius: 50px;
    background: linear-gradient(145deg, #0c6682, #0e799a);
    box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  }
`;

export const FieldError = styled.div`
  min-height: 1em;
  color: #f2ff3a;
`;
