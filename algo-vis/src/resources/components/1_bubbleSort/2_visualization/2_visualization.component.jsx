import React from "react";
import InputHandler from "./3_inputHandler/3_inputHandler.component";
import Status from "./3_status/3_status.component";
import ControlButtons from "./3_controls/3_ControlButtons";
import Visualizer from "./3_visualizer/3_Visualizer_component";
import { VisContainer } from "./visualization.styles";
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
