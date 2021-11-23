import React from "react";
import Box from "./4_box/4_box.component";
import SubmitInput from "./SubmitInput/SubmitInput.component";
// import DisplayError from "./4_displayerror/4_displayError.component";
// import ControlButtons from "../3_controls/3_ControlButtons";

export default function InputHandler() {
  return (
    <>
      <SubmitInput />
      <Box />
      {/* <ControlButtons /> */}
      {/* <DisplayError /> */}
    </>
  );
}
