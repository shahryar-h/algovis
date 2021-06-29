import styled from "styled-components";

const baseStyle = "margin: 0;";

export const InputSection = styled.section`
  ${baseStyle}
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
`;
//TODO: make this a universal input in another folder for reuse
export const Input = styled.input`
  ${baseStyle}
  appearance: none;
  border-style: none;
  height: 10%;
  width: 80%;
  color: white;
  padding: 15px;
  letter-spacing: 4px;
  background: #1c7190;
  font-size: 1.2em;
  border-radius: 50px;
  background: #0d7190;
  box-shadow: inset 5px 5px 13px #095168, inset -5px -5px 13px #1191b8;
  &:focus {
    outline: none;
  }
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
