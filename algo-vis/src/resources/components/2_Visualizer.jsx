import React, { Component } from "react";
import ControlButtons from "./3_ControlButtons";
import Diagram from "./3_Diagram";
import InputBox from "./3_InputBox";
import Steps from "./3_Steps";
let sortedSample = [
  {
    userInput: 1,
    sortPosiotion: 1,
    userPosition: 2,
  },
  {
    userInput: 2,
    sortPosiotion: 2,
    userPosition: 4,
  },
  {
    userInput: 3,
    sortPosiotion: 3,
    userPosition: 7,
  },
  {
    userInput: 4,
    sortPosiotion: 4,
    userPosition: 3,
  },
  {
    userInput: 5,
    sortPosiotion: 5,
    userPosition: 1,
  },
  {
    userInput: 6,
    sortPosiotion: 6,
    userPosition: 6,
  },
  {
    userInput: 7,
    sortPosiotion: 7,
    userPosition: 5,
  },
];
class Visualizer extends Component {
  state = {
    userObj: [],
    sortedObj: [],
    userInputs: [],
    sortedInput: [],
    sorted: false,
  };
  handleUsersInput = (userObj, sortedObj, userInputs, sortedInput) => {
    this.setState({
      userObj,
      sortedObj,
      userInputs,
      sortedInput,
    });
  };

  handleSort = (e) => {
    if (e === "user") {
      this.setState({ user: true });
      this.setState({ sorted: false });
    } else {
      this.setState({ sorted: true });
      this.setState({ user: false });
    }
  };

  handleinpittt = (e) => {
    console.log("he", e);
    let nimm = e.map((inp) => {
      return sortedSample.filter((sorted) => {
        return sorted.userInput == inp;
      })[0];
    });

    this.setState({ userObj: nimm, userInputs: e });
  };
  tesstjamd = (schm) => {
    this.setState({ schm });
  };
  render() {
    const { userObj, sortedObj, userInputs, sortedInput, sorted, schm } =
      this.state;
    return (
      <div className="vizContainer">
        <Steps />
        <Diagram
          userObj={userObj}
          userInputs={userInputs}
          sortedObj={sortedObj}
          sortedInput={sortedInput}
          sorted={sorted}
          handleinpittt={(e) => this.handleinpittt(e)}
          schm={schm}
        />
        {/* <ControlButtons handleSort={(e) => this.handleSort(e)} /> */}
        <InputBox
          handleUsersInput={(userObj, sortedObj, userInputs, sortedInput) =>
            this.handleUsersInput(userObj, sortedObj, userInputs, sortedInput)
          }
          tesstjamd={(schema) => this.tesstjamd(schema)}
        />
      </div>
    );
  }
}

export default Visualizer;
