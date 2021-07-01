import React, { Component } from "react";
import BubbleSort from "./components/1_bubbleSort/1_bubbleSort.cpmponent";

import "./main.sass";

class Index extends Component {
  render() {
    return (
      <div className="indexContainer">
        <BubbleSort />
      </div>
    );
  }
}

export default Index;
