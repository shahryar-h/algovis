import styled from "styled-components";
const baseStyle = "margin: 0;";

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
