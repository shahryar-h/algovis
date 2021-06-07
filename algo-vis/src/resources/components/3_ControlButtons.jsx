import React, { Component } from "react";
import "../styles/controlButoons.sass";
export default class ControlButtons extends Component {
  render() {
    const { handlebuttonss } = this.props;
    return (
      <div className="controls">
        <div
          className="controllButton sortStart"
          onClick={() => handlebuttonss("start")}
        >
          S
        </div>
        <div
          className="controllButton prev"
          onClick={() => handlebuttonss("prev")}
        >
          P
        </div>
        <div
          className="controllButton playPause"
          onClick={() => handlebuttonss("playPause")}
        >
          Play
        </div>
        <div
          className="controllButton next"
          onClick={() => handlebuttonss("next")}
        >
          N
        </div>
        <div
          className="controllButton sortEnd"
          onClick={() => handlebuttonss("end")}
        >
          E
        </div>
      </div>
    );
  }
}
