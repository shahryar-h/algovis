/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import ControlButtons from "./3_ControlButtons";
import Steps from "./3_Steps";

// eslint-disable-next-line react/prefer-stateless-function
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
let sample = [
  {
    userInput: 5,
    sortPosiotion: 5,
    userPosition: 1,
  },
  {
    userInput: 1,
    sortPosiotion: 1,
    userPosition: 2,
  },
  {
    userInput: 4,
    sortPosiotion: 4,
    userPosition: 3,
  },
  {
    userInput: 2,
    sortPosiotion: 2,
    userPosition: 4,
  },
  {
    userInput: 7,
    sortPosiotion: 7,
    userPosition: 5,
  },
  {
    userInput: 6,
    sortPosiotion: 6,
    userPosition: 6,
  },
  {
    userInput: 3,
    sortPosiotion: 3,
    userPosition: 7,
  },
];
class Diagram extends Component {
  state = {
    counter: 0,
    play: false,
    // userInputs: [5, 1, 4, 2, 7, 6, 3],
    // userObj: sample,
    // userInputs: ,
    // userObj: this.props.userObj,
    // sortedInput: this.props.sortedInput,
    // sortedObj: this.props.sortedObj,
  };
  // componentDidMount = () => {
  //   console.log(this.props);
  //   this.setState({
  //     userInputs: this.props.userInputs,
  //     userObj: this.props.userObj,
  //   });
  // };
  handletest = () => {
    // console.log("hello", this.props.userInputs);
    let newInput = [...this.props.userInputs];
    console.log("newInput", newInput);

    let len = newInput.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        if (newInput[i] > newInput[i + 1]) {
          let tmp = newInput[i];
          newInput[i] = newInput[i + 1];
          newInput[i + 1] = tmp;
          this.props.handleinpittt(newInput);
          // this.setState({ userInputs: newInput });
          break;
        }
      }
    } while (swapped);
    // console.log(newInput);

    //  return inputArr;
    // let temp = newInput[3];
    // newInput[3] = newInput[2];
    // newInput[2] = temp;
    // console.log(newInput);
    // let nimm = newInput.map((inp) => {
    //   return sortedSample.filter((sorted) => {
    //     return sorted.userInput == inp;
    //   })[0];
    // });

    // console.log("nimm", nimm);
    // this.setState({ userObj: nimm, userInputs: newInput });
  };

  increment = () => {
    const { counter, play } = this.state;

    // console.log(counter, play);
    if (this.state.counter + 1 <= this.props.schm.length - 1) {
      this.setState({ counter: this.state.counter + 1 });

      console.log("heloooooo");
    } else {
      clearInterval(this.interval);
      return;
    }
  };
  decrement = () => {
    const { counter, play } = this.state;

    console.log(counter, play);
    if (this.state.counter - 1 >= 0) {
      this.setState({ counter: this.state.counter - 1 });

      console.log("heloooooo");
    } else {
      clearInterval(this.interval);
      return;
    }
  };

  handlebuttonss = (e) => {
    const { counter, play } = this.state;
    console.log(counter);
    if (e == "next") {
      if (counter + 1 <= this.props.schm.length - 1) {
        this.setState({ counter: this.state.counter + 1 });
      }
    }
    if (e == "playPause") {
      console.log(play);
      if (play) {
        this.setState({ play: !this.state.play });
        clearInterval(this.interval);
      } else {
        this.setState({ play: !this.state.play });
        if (counter <= this.props.schm.length - 1) {
          this.interval = setInterval(
            this.decrement,
            // () =>
            //   this.setState({
            //     counter:
            //       this.state.counter + 1 <= this.props.schm.length - 1 &&
            //       this.state.counter + 1,
            //   }),
            30
          );
        }
      }
    }
    if (e == "sss") {
      console.log(play);
      if (play) {
        this.setState({ play: !this.state.play });
        clearInterval(this.interval);
      } else {
        this.setState({ play: !this.state.play });
        if (counter <= this.props.schm.length - 1) {
          this.interval = setInterval(
            this.decrement,
            // () =>
            //   this.setState({
            //     counter:
            //       this.state.counter + 1 <= this.props.schm.length - 1 &&
            //       this.state.counter + 1,
            //   }),
            30
          );
        }
      }
    }
    if (e == "prev") {
      if (counter - 1 >= 0) {
        this.setState({ counter: this.state.counter - 1 });
      }
    }
    if (e == "end") {
      this.setState({ counter: this.props.schm.length - 1 });
    }
    if (e == "start") {
      this.setState({ counter: 0 });
    }
  };
  render() {
    // const { sortedObj } = this.state;
    const {
      sorted,
      sortedObj,
      userInputs,
      userObj,
      schm = [],
      stepsSchema = [],
      statusSchema = [],
    } = this.props;

    // const {} = this.state;

    // const userOBJ = userObj?.length < 1 ? sample : userObj;
    // const sortedOBJ = sortedObj.length < 1 ? sortedSample : sortedObj;
    // console.log("userInputs", userInputs);

    // let nimm = userInputs?.map((inp) => {
    //   return sortedSample.filter((sorted) => {
    //     return sorted.userInput == inp;
    //   })[0];
    // });
    return (
      <>
        <Steps
          schema={stepsSchema[this.state.counter]}
          statusSchema={statusSchema[this.state.counter]}
        />
        <div className="sortItems">
          {schm[this.state.counter]?.map((item, index) => (
            <div
              key={`itemBox-${item.sortPosiotion}-${index}`}
              className={
                item.selected
                  ? `sortItem sortItem${item.sortPosiotion} selected`
                  : `sortItem sortItem${item.sortPosiotion}`
              }
            >
              {item.userInput}
              {/* {console.log()} */}
            </div>
          ))}
          {/* {!sorted
            ? userOBJ?.map((item, index) => (
                <div
                  key={`itemBox-${item.sortPosiotion}-${index}`}
                  className={`sortItem sortItem${item.sortPosiotion}`}
                >
                  {item.userInput}
                </div>
              ))
            : sortedObj.map((item, index) => (
                <div
                  key={`itemBox-${item.sortPosiotion}-${index}`}
                  className={`sortItem sortItem${item.sortPosiotion}`}
                >
                  {item.userInput}
                </div>
              ))} */}
          {/* <div onClick={() => this.handletest()}>test</div> */}
        </div>
        <ControlButtons handlebuttonss={(e) => this.handlebuttonss(e)} />
      </>
    );
  }
}

export default Diagram;
