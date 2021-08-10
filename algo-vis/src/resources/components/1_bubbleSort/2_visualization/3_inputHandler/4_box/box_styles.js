import styled from "styled-components/macro";

const baseStyle = "margin: 0;";

//TODO: make this a universal input in another folder for reuse
export const Input = styled.input`
  ${baseStyle}
  appearance: none;
  border-style: none;
  /* height: 10%; */
  width: 50%;
  color: white;
  padding: 20px;
  letter-spacing: 3px;
  background: #1c7190;
  font-size: 0.8em;
  border-radius: 7px;
  background: rgb(13, 113, 144);
  box-shadow: rgb(9 81 104) 5px 5px 13px inset,
    rgb(17 145 184) -5px -5px 13px inset;
  /* box-shadow: ${(props) =>
    props.disabled
      ? "5px 5px 13px #095168, -5px -5px 13px #1191b8;"
      : "inset 5px 5px 13px #095168, inset -5px -5px 13px #0d7190"}; */
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
    opacity: 0.5;
  }
`;
