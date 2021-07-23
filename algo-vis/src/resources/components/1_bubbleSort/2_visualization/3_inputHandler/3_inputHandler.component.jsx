import React from "react";
import Box from "./4_box/4_box.component";
import SubmitInput from "./4_submitInput/4_submitInput.component";
import DisplayError from "./4_displayerror/4_displayError.component";

export default function InputHandler() {
  return (
    <div>
      <Box />
      <DisplayError />
      <SubmitInput />
    </div>
  );
}
