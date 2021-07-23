import styled from "styled-components";

const ControlsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ControlsButton = styled.div`
  height: 3em;
  width: 3em;
  border-radius: 50px;
  background: linear-gradient(145deg, #0e799a, #0c6682);
  box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  line-height: 330%;
  text-align: center;
  vertical-align: center;
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;

export { ControlsWrapper, ControlsButton };
