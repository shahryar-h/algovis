import React, { Component } from "react";
// import Description from "./2_description/2_Description";
import Visualization from "../visualization/Visualization";
import {
  BubbleSortWrapper,
  Sections,
  BubbleSortContainer,
} from "./BubbleSort.styles";

class BubbleSort extends Component {
  render() {
    return (
      <BubbleSortContainer>
        <BubbleSortWrapper>
          {/* <Sections> */}
          <Visualization />
          {/* <Description /> */}
          {/* </Sections> */}
        </BubbleSortWrapper>
      </BubbleSortContainer>
    );
  }
}

export default BubbleSort;
