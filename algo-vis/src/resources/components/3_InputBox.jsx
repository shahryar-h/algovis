import React, { Component } from "react";
import _ from "lodash";
import "../styles/inputBox.sass";

const initial_user_input_object = [
  {
    userInput: 5,
    sortPosiotion: 5,
    userPosition: 1,
    selected: false,
    sorted: false,
  },
  {
    userInput: 1,
    sortPosiotion: 1,
    userPosition: 2,
    selected: false,
    sorted: false,
  },
  {
    userInput: 4,
    sortPosiotion: 4,
    userPosition: 3,
    selected: false,
    sorted: false,
  },
  {
    userInput: 2,
    sortPosiotion: 2,
    userPosition: 4,
    selected: false,
    sorted: false,
  },
  {
    userInput: 7,
    sortPosiotion: 7,
    userPosition: 5,
    selected: false,
    sorted: false,
  },
  {
    userInput: 6,
    sortPosiotion: 6,
    userPosition: 6,
    selected: false,
    sorted: false,
  },
  {
    userInput: 3,
    sortPosiotion: 3,
    userPosition: 7,
    selected: false,
    sorted: false,
  },
];
class InputBox extends Component {
  state = {
    errorsIndex: [0, 0, 0, 0],
    errors: [
      "the program accepts only number values comma seperated",
      "the program only accepts up to 7 numbers",
      "the program only accepts numbers between 1-100",
      "Please provide a set of numbers or select the default values",
    ],
    inputValue: "5,1,4,2,7,6",
    currentinput: [5, 1, 4, 2, 7, 6, 3],
    userInput_parseToInt: [5, 1, 4, 2, 7, 6, 3],
    isAnimating: false,
  };

  sortInput = (userObj, userInput_parseToInt) => {
    console.log(userObj);
    let master = [];
    let stepsSchema = [];
    let statusSchema = [""];
    let len = userInput_parseToInt.length;
    let swapped;
    let newUserObjectSetSwap = [...userObj];
    stepsSchema.push([1, 1, 1, 1, 1, 1, 1]);
    // console.log(newUserObjectSetSwap);
    master.push(newUserObjectSetSwap);

    do {
      swapped = false;
      // set swapped to false assuming that the numbers are sorted
      // if after next round this stays false it means we have a sorted
      // array so we stop the process
      // newUserObjectSetSwap[newUserObjectSetSwap.length] = [2, 2, 1, 1, 1, 1, 1];
      stepsSchema.push([2, 2, 2, 1, 1, 1, 1]);

      statusSchema.push(` Set the swapped flag to false. 
      Then iterate from index 1 to ${len} inclusive.`);

      master.push(newUserObjectSetSwap);
      for (let i = 0; i < len - 1; i++) {
        stepsSchema.push([2, 1, 1, 2, 1, 1, 1]);

        let statusTxt = () => {
          return swapped
            ? `Checking if ${newUserObjectSetSwap[i].userInput} > ${
                newUserObjectSetSwap[i + 1].userInput
              } and swap them if that is true.
          The current value of swapped = true.`
            : `Checking if ${newUserObjectSetSwap[i].userInput} > ${
                newUserObjectSetSwap[i + 1].userInput
              } and swap them if that is true.
          The current value of swapped = false.`;
        };

        statusSchema.push(statusTxt());
        let num1 = { ...newUserObjectSetSwap[i] };
        let num2 = { ...newUserObjectSetSwap[i + 1] };
        num1.selected = true;
        num2.selected = true;

        let onjr = [...newUserObjectSetSwap];
        onjr[i] = num1;
        onjr[i + 1] = num2;
        master.push(onjr);
        //selected num1 and two / swaps if b is greater than a

        if (
          newUserObjectSetSwap[i].userInput >
          newUserObjectSetSwap[i + 1].userInput
        ) {
          stepsSchema.push([2, 1, 1, 1, 2, 2, 1]);
          statusSchema.push();

          let orj2 = [...onjr];
          orj2[i] = num2;
          orj2[i + 1] = num1;
          master.push(orj2);

          let orj3 = [...orj2];
          let num11 = { ...orj3[i] };
          let num12 = { ...orj3[i + 1] };
          num11.selected = false;
          num12.selected = false;

          orj3[i] = num11;
          orj3[i + 1] = num12;

          // stepsSchema.push([2, 1, 1, 1, 1, 2, 1]);
          statusSchema.push(
            `      Swapping the positions of ${
              newUserObjectSetSwap[i].userInput
            } and ${newUserObjectSetSwap[i + 1].userInput}.
            Set swapped = true.`
          );

          // master.push(orj3);
          newUserObjectSetSwap = [...orj3];

          swapped = true;
        }
      }

      master[master.length - 1][len - 1].sorted = true;
      master.push(master[master.length - 1]);
      // console.log(master[master.length - 1][len - 1].userInput);
      let statusTxt = () => {
        return swapped
          ? `Mark this element as sorted now.
          As at least one swap is done in this pass, we continue.`
          : `No swap is done in this pass.
          We can terminate Bubble Sort now`;
      };
      stepsSchema.push([2, 1, 1, 1, 1, 1, 2]);
      statusSchema.push(statusTxt());
      len = len - 1;
    } while (swapped);
    // console.log();
    master[master.length - 1][len - 1].selected = false;
    master[master.length - 1][len].selected = false;
    master.push(master[master.length - 1]);

    statusSchema.push("List is sorted");
    stepsSchema.push([1, 1, 1, 1, 1, 1, 1]);
    this.props.tesstjamd(master, stepsSchema, statusSchema);
  };

  componentDidMount() {
    this.handlesortt(
      this.state.userInput_parseToInt,
      initial_user_input_object
    );
  }
  // on change
  // validates user input
  // // comma seperated
  // // numbers
  // // between 0 and 100
  // // not empty

  // creates user object (the input for sort algorithm)

  // returns false if there is a user input
  // if no user input
  // // updates the state with current input and error index
  // // sends a hanleUsersInput with blank arguments
  blank_user_input = (userInput) => {
    if (userInput === "") {
      // this.props.handleUsersInput([], [], [], []);
      this.setState({
        currinput: [],
        errorsIndex: [..._.initial(this.state.errorsIndex), 1],
      });
      return true;
    }
    return false;
  };

  handleInputs = (e) => {
    // destructuring
    const { errorsIndex } = this.state;

    // error index indicates the type of validation error to show to the user
    // ex: [0,1,0] means we have an error and it is in index 1 and check our dictionary
    // .. for the error value.

    let updatedErrorsIndex = [...errorsIndex];
    let userInput_parseToInt;

    let userInput = e.target.value;
    this.setState({ inputValue: userInput });

    if (this.blank_user_input(userInput)) return;

    let userInput_comma_seperated = userInput.split(",").filter((num) => {
      return num != "";
    });

    let userInput_joinedSrting = userInput_comma_seperated.join("");
    console.log(userInput_joinedSrting);
    // validations
    let isnum = /^\d+$/.test(userInput_joinedSrting);
    if (isnum) {
      updatedErrorsIndex[0] = 0;
      userInput_parseToInt = userInput_comma_seperated.map((num) => {
        return parseInt(num);
      });
      if (userInput_parseToInt.length > 7) {
        updatedErrorsIndex[1] = 1;
      } else {
        updatedErrorsIndex[1] = 0;

        let result = userInput_parseToInt.every(function (e) {
          return e < 100;
        });

        if (!result) {
          updatedErrorsIndex[2] = 1;
        } else {
          updatedErrorsIndex[2] = 0;
        }
      }
      this.setState({ errorsIndex: updatedErrorsIndex });
    } else {
      let updatedErrorsIndex = [...errorsIndex];
      updatedErrorsIndex[0] = 1;
      this.setState({ errorsIndex: updatedErrorsIndex });
    }
    if (!updatedErrorsIndex.includes(1) && userInput_parseToInt != undefined) {
      let inp = [...userInput_parseToInt];
      let sortedInput = inp.sort((a, b) => {
        return a - b;
      });
      let userObj = userInput_parseToInt.map((s) => {
        return {
          userInput: s,
          sortPosiotion: sortedInput.indexOf(s) + 1,
          userPosition: userInput_parseToInt.indexOf(s) + 1,
          selected: false,
          sorted: false,
        };
      });
      let sortedObj = sortedInput.map((s) => {
        return {
          userInput: s,
          sortPosiotion: sortedInput.indexOf(s) + 1,
          userPosition: userInput_parseToInt.indexOf(s) + 1,
        };
      });

      this.setState({ currinput: userInput, userObj, userInput_parseToInt });

      // this.sortInput(userObj, userInput_parseToInt);

      // console.log("master", master);
      // console.log("master", master);
      // console.log(userObj);
      // this.props.handleUsersInput(
      //   userObj,
      //   sortedObj,
      //   userInput_parseToInt,
      //   sortedInput
      // );
    }
  };

  handlesortt = (current_input = [], user_input_object) => {
    // makes sure the user has valid input(set of numbers) to sort
    if (current_input.length > 0) {
      // console.log(currinput);
      // console.log(userObj);
      // console.log(userInput_parseToInt);

      this.sortInput(user_input_object, current_input);
      this.setState({ isAnimating: true });
    } else {
      //TODO
      console.log("please provide a set of numbers");
    }
  };

  handleAnotherSet = () => {
    this.setState({ isAnimating: false, inputValue: "" });
  };
  render() {
    const {
      errors,
      errorsIndex,
      currinput,
      userObj,
      userInput_parseToInt,
      isAnimating,
      inputValue,
    } = this.state;

    console.log(errorsIndex);
    return (
      <div className="inputSection">
        <input
          type="text"
          autoComplete="off"
          name="name"
          value={inputValue}
          onChange={(e) => this.handleInputs(e)}
        />
        {isAnimating ? (
          <div className="handlesort" onClick={(e) => this.handleAnotherSet(e)}>
            An other set of Numbers
          </div>
        ) : (
          <div
            className="handlesort"
            onClick={(e) =>
              this.handlesortt(currinput, userObj, userInput_parseToInt, e)
            }
          >
            Sort
          </div>
        )}
      </div>
    );
  }
}

export default InputBox;

// snapshots = [
//   {
//     userObj,
//   },
//   {
//     userObj,
//   },
// ];
