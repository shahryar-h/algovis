import React from "react";
import { connect } from "react-redux";

const DisplayError = ({ errorList }) => {
  return <div style={{ minHeight: "3em" }}>{errorList}</div>;
};

const mapStateToProps = (state) => ({
  errorList: state.errorList.errorList,
});

export default connect(mapStateToProps)(DisplayError);
