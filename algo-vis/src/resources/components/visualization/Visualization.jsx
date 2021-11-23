import React from "react";
import InputHandler from "../InputHandler/InputHandler";
import Status from "../Status/Status";
import ControlButtons from "../Controls/ControlButtons";
import Visualizer from "../Visualizer/Visualizer";
import { VisContainer, ControlAndStatus } from "./visualization.styles";

export default function Visualization() {
  return (
    <VisContainer>
      <ControlAndStatus>
        <Status />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <InputHandler />
          <ControlButtons />
        </div>
      </ControlAndStatus>
      <Visualizer />
    </VisContainer>
  );
}
