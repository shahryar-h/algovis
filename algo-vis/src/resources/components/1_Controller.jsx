import React, { Component } from "react";
import Description from "./2_Description";
import Visualizer from "./2_Visualizer";

class Controller extends Component {
  render() {
    return (
      <div className="controllerContainer">
        <section className="controlls">
          <Visualizer />
          <Description />
        </section>
      </div>
    );
  }
}

export default Controller;
