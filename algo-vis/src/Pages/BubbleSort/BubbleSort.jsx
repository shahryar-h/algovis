import React, { Component } from "react";
// import Description from "./2_description/2_Description";
import Visualization from "../../Components/BubbleSortComponents/visualization/Visualization";
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
          <Visualization />
        </BubbleSortWrapper>
      </BubbleSortContainer>
    );
  }
}

export default BubbleSort;
