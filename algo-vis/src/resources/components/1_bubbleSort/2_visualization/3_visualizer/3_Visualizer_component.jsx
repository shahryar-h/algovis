import React, { Component } from "react";
import { connect } from "react-redux";
import "./visualizer.sass";
const Visualizer = ({ mainSchema, step }) => {
  return (
    <div className="sortItems">
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
    </div>
  );
};
const mapStateToProps = (state) => ({
  mainSchema: state.mainSchema.mainSchema,
  step: state.step.step,
});

export default connect(mapStateToProps)(Visualizer);
