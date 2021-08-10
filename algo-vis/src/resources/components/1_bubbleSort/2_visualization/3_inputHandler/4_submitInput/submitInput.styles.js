import styled from "styled-components/macro";

// TODO: make this a button

const SortButton = styled.input.attrs({
  type: "submit",
})`
  width: 40%;
  padding: 20px;
  border-radius: 7px;
  background: linear-gradient(145deg, #0e799a, #0c6682);
  box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  text-align: center;
  color: white;
  cursor: pointer;
  border: none;
  align-self: flex-end;

  &:active {
    border-radius: 7px;
    background: linear-gradient(145deg, #0c6682, #0e799a);
    box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  }
`;

export { SortButton };
