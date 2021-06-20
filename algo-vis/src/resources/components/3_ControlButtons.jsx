import React, { Component } from "react";
import "../styles/controlButoons.sass";

const Buttons = [
  { class: "sortStart", func_arg: "start", button_text: "S" },
  { class: "prev", func_arg: "prev", button_text: "P" },
  { class: "playPause", func_arg: "playPause", button_text: "Play" },
  { class: "next", func_arg: "next", button_text: "N" },
  { class: "sortEnd", func_arg: "sortEnd", button_text: "E" },
];
export default class ControlButtons extends Component {
  render() {
    const { handle_control_buttons } = this.props;
    return (
      <div className="controls">
        {Buttons.map((button, index) => {
          return (
            <div
              key={`control-key${index}`}
              className={`controllButton ${button.class}`}
              onClick={() => handle_control_buttons(button.func_arg)}
            >
              {button.button_text}
            </div>
          );
        })}
      </div>
    );
  }
}
