import styled from "styled-components/macro";

const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ControlsButton = styled.button`
  height: 95%;
  width: 10%;
  border-radius: 7px;
  background: linear-gradient(145deg, #0e799a, #0c6682);
  box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  line-height: 330%;
  text-align: center;
  vertical-align: center;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  border: none;
  &:active {
    background: linear-gradient(145deg, #0e799a, #0c6682);
    box-shadow: inset 5px 5px 13px #095168, inset -5px -5px 13px #1191b8;
  }
`;

export { ControlsWrapper, ControlsButton };
