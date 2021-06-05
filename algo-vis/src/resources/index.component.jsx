import React, { Component } from "react";
import Controller from "./components/1_Controller";

import "./main.sass";

class Index extends Component {
  render() {
    return (
      <div className="indexContainer">
        <Controller />
      </div>
    );
  }
}

export default Index;
