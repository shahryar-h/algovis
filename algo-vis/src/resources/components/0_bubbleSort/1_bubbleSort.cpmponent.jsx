import React, { Component } from "react";
import Description from "../1_description/2_Description";
import Visualization from "../1_visualization/1_visualization.component";
import styled from "styled-components";

// .controllerContainer

const Bubblesort = styled.main`
  height: 90vh;
  width: 90%;
  border-radius: 50px;
  background: #0d7190;
  box-shadow: inset 24px 24px 48px #095066, inset -24px -24px 48px #1192ba;
`;
const Sections = styled.section`
  height: 87%;
  padding: 4em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0% 0%;
  grid-template-areas: ". .";
`;

class BubbleSort extends Component {
  render() {
    return (
      <Bubblesort>
        <Sections>
          <Visualization />
          <Description />
        </Sections>
      </Bubblesort>
    );
  }
}

export default BubbleSort;
