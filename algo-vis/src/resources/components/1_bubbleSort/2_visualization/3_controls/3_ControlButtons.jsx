import React from "react";
import { connect } from "react-redux";
import "./controlButoons.sass";
import { setNextStep } from "../../../../../redux/controls/controls.actions";
const Buttons = [
  { class: "sortStart", func_arg: "start", button_text: "S" },
  { class: "prev", func_arg: "prev", button_text: "P" },
  { class: "playPause", func_arg: "playPause", button_text: "Play" },
  { class: "next", func_arg: "next", button_text: "N" },
  { class: "sortEnd", func_arg: "end", button_text: "E" },
];
const ControlButtons = ({ setNextStep }) => {
  const handle_control_buttons = (arg) => {
    switch (arg) {
      case "start":
        setNextStep(0);
        break;
      case "prev":
        setNextStep(0);
        break;
      case "playPause":
        // setNextStep(0);
        break;
      case "next":
        setNextStep(0);
        break;
      case "end":
        setNextStep(0);
        break;
    }
  };

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
};

const mapStateToProps = (state) => ({
  // mainSchema: state.mainSchema.mainSchema,
});

const mapDispatchToProps = (dispatch) => ({
  setNextStep: (step) => dispatch(setNextStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlButtons);
