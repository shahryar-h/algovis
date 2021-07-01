import React from "react";
import Status from "../3_status/3_status.component";
import Visualizer from "../3_visualizer/3_Diagram";
import Controls from "../3_controls/3_ControlButtons";
import Input from "../3_input/4-inputField.component";
export default function Visualization() {
  return (
    <>
      <Status />
      <Visualizer />
      <Controls />
      <Input />
    </>
  );
}
