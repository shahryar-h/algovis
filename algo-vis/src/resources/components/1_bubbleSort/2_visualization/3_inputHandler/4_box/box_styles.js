import styled from "styled-components/macro";

const baseStyle = "margin: 0;";

//TODO: make this a universal input in another folder for reuse
export const Input = styled.input`
  ${baseStyle}
  appearance: none;
  border-style: none;
  /* height: 10%; */
  width: 90%;
  color: white;
  padding: 7px;
  letter-spacing: 3px;
  background: #1c7190;
  font-size: 0.8em;
  border-radius: 7px;
  background: #0d7190;
  box-shadow: inset 5px 5px 13px #095168, inset -5px -5px 13px #1191b8;
  &:focus {
    outline: none;
  }
`;
