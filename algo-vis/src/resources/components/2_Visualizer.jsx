import React, { Component } from "react";
import Diagram from "./3_Diagram";
import InputBox from "./3_InputBox";
import Steps from "./3_Steps";



class Visualizer extends Component {
  state = {
    userObj: [],
    sortedObj: [],
    userInputs: [],
    sortedInput: [],
  };
  handleUsersInput = (userObj, sortedObj, userInputs, sortedInput) => {
    this.setState({
      userObj,
      sortedObj,
      userInputs,
      sortedInput,
    });
  };
  render() {
    const { userObj, sortedObj, userInputs, sortedInput } = this.state;
    return (
      <div className="vizContainer">
        <Steps />
        <Diagram
          userObj={userObj}
          userInputs={userInputs}
          sortedObj={sortedObj}
          sortedInput={sortedInput}
        />
        <InputBox
          handleUsersInput={(userObj, sortedObj, userInputs, sortedInput) =>
            this.handleUsersInput(userObj, sortedObj, userInputs, sortedInput)
          }
        />
      </div>
    );
  }
}

export default Visualizer;
