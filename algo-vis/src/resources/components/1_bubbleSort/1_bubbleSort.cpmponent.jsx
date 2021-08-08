import React, { Component } from "react";
import Description from "./2_description/2_Description";
import Visualization from "./2_visualization/2_visualization.component";
import { BubbleSortWrapper, Sections } from "./BubbleSort.styles";

class BubbleSort extends Component {
  render() {
    return (
      <BubbleSortWrapper>
        <Sections>
          <Visualization />
          {/* <Description /> */}
        </Sections>
      </BubbleSortWrapper>
    );
  }
}

export default BubbleSort;
