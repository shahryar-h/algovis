import React from "react";
import { connect } from "react-redux";
import { SortItems, SortItem } from "./visualizer.styles";
import { v4 as uuidv4 } from "uuid";

const Visualizer = ({ mainSchema, step }) => {
  return (
    <SortItems>
      {mainSchema[step]?.map((item) => (
        <SortItem
          key={uuidv4()}
          selected={item.selected}
          sortPosition={item.sortPosiotion - 1}
        >
          {item.userInput}
        </SortItem>
      ))}
    </SortItems>
  );
};
const mapStateToProps = (state) => ({
  mainSchema: state.mainSchema.mainSchema,
  step: state.step.step,
});

export default connect(mapStateToProps)(Visualizer);
