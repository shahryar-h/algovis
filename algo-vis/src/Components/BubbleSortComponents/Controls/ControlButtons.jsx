import React from "react";
import { v4 as uuidv4 } from "uuid";
import { handle_control_buttons } from "./controlButtons.helpers";
import { Buttons } from "./controls.data";
import { ControlsWrapper, ControlsButton } from "./controls.styles";

const ControlButtons = () => {
  return (
    <ControlsWrapper>
      {Buttons.map((button) => {
        return (
          <ControlsButton
            key={uuidv4()}
            onClick={() => handle_control_buttons(button.func_arg)}
          >
            {button.button_text}
          </ControlsButton>
        );
      })}
    </ControlsWrapper>
  );
};

export default ControlButtons;
