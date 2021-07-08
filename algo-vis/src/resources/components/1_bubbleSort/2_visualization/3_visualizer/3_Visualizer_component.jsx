import React, { Component } from "react";
import { connect } from "react-redux";
import "./visualizer.sass";
import styled from "styled-components";

const SortItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const Visualizer = ({ mainSchema, step }) => {
  return (
    <SortItems>
      {mainSchema[step]?.map((item, index) => (
        <div
          key={`itemBox-${item.sortPosiotion}-${index}`}
          className={
            item.selected
              ? `sortItem sortItem${item.sortPosiotion} selected`
              : `sortItem sortItem${item.sortPosiotion}`
          }
        >
          {item.userInput}
        </div>
      ))}
    </SortItems>
  );
};
const mapStateToProps = (state) => ({
  mainSchema: state.mainSchema.mainSchema,
  step: state.step.step,
});

export default connect(mapStateToProps)(Visualizer);
