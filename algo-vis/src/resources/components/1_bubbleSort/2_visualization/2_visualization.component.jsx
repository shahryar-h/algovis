import React from "react";
import InputHandler from "./3_inputHandler/3_inputHandler.component";
import Status from "./3_status/3_status.component";
import ControlButtons from "./3_controls/3_ControlButtons";
import Visualizer from "./3_visualizer/3_Visualizer_component";
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
export default function Visualization() {
  return (
    <VisContainer>
      <Status />
      <Visualizer />
      <ControlButtons />
      <InputHandler />
    </VisContainer>
  );
}
