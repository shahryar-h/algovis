import React, { Component } from "react";
import "../styles/inputBox.sass";
class InputBox extends Component {
  state = {
    errorsIndex: [0, 0, 0],
    errors: [
      "the program accepts only number values comma seperated",
      "the program only accepts up to 7 numbers",
      "the program only accepts numbers between 1-100",
    ],
    inputValue: "5, 1, 4, 2, 7, 6",
    currinput: [5, 1, 4, 2, 7, 6, 3],
    // userObj: [
    //   { userInput: 5, sortPosiotion: 5, userPosition: 1, selected: false },
    //   { userInput: 1, sortPosiotion: 1, userPosition: 2, selected: false },
    //   { userInput: 4, sortPosiotion: 4, userPosition: 3, selected: false },
    //   { userInput: 2, sortPosiotion: 2, userPosition: 4, selected: false },
    //   { userInput: 7, sortPosiotion: 7, userPosition: 5, selected: false },
    //   { userInput: 6, sortPosiotion: 6, userPosition: 6, selected: false },
    //   { userInput: 3, sortPosiotion: 3, userPosition: 7, selected: false },
    // ],
    userInput_parseToInt: [5, 1, 4, 2, 7, 6, 3],
    isAnimating: false,
  };

  sortInput = (userObj, userInput_parseToInt) => {
    let master = [];
    let stepsSchema = [];
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
      stepsSchema.push([2, 2, 1, 1, 1, 1, 1]);

      // console.log(newUserObjectSetSwap);
      master.push(newUserObjectSetSwap);
      for (let i = 0; i < len - 1; i++) {
        // newUserObjectSetSwap.algoDescription = 22;
        // console.log(newUserObjectSetSwap);
        // newUserObjectSetSwap[newUserObjectSetSwap.length] = [
        //   2, 1, 2, 1, 1, 1, 1,
        // ];
        stepsSchema.push([2, 1, 2, 1, 1, 1, 1]);

        // console.log(newUserObjectSetSwap);
        // master.push([...newUserObjectSetSwap]);
        // master.push([...newUserObjectSetSwap]);
        let num1 = { ...newUserObjectSetSwap[i] };
        let num2 = { ...newUserObjectSetSwap[i + 1] };
        num1.selected = true;
        num2.selected = true;

        // console.log(num1);
        // i == 0 && console.log(userObj);
        // console.log(newUserObjectSetSwap);
        // master.push([...newUserObjectSetSwap]);
        let onjr = [...newUserObjectSetSwap];
        onjr[i] = num1;
        onjr[i + 1] = num2;
        // userObj[i + 1].selected = true;
        // console.log("iser", userObj[i]);
        master.push(onjr);
        //selected num1 and two / swaps if b is greater than a

        if (
          newUserObjectSetSwap[i].userInput >
          newUserObjectSetSwap[i + 1].userInput
        ) {
          // num1.selected = false;
          // num2.selected = false;
          // onjr[onjr.length] = [2, 1, 1, 2, 2, 1, 1];
          stepsSchema.push([2, 1, 1, 2, 2, 1, 1]);

          let orj2 = [...onjr];
          orj2[i] = num2;
          orj2[i + 1] = num1;
          master.push(orj2);
          // console.log(master);

          let orj3 = [...orj2];
          let num11 = { ...orj3[i] };
          let num12 = { ...orj3[i + 1] };
          num11.selected = false;
          num12.selected = false;

          orj3[i] = num11;
          orj3[i + 1] = num12;
          // orj3[orj3.length] = [2, 1, 1, 1, 1, 2, 1];
          stepsSchema.push([2, 1, 1, 1, 1, 2, 1]);

          // console.log(orj3);
          master.push(orj3);
          // console.log(master);
          newUserObjectSetSwap = [...orj3];

          // console.log("temp", userObj);
          // userObj[i].selected = false;
          // userObj[i + 1].selected = false;
          // master.push([...userObj]);
          // console.log("master", master);

          // master.push(userObj);

          // userObj[i].selected = false;
          // userObj[i + 1].selected = false;
          // master.push([...userObj]);
          swapped = true;

          // this.props.handleinpittt(newInput);
          // this.setState({ userInputs: newInput });
        }
      }
      len = len - 1;
    } while (swapped);
    // console.log(stepsSchema);
    this.props.tesstjamd(master, stepsSchema);
  };

  componentDidMount() {
    this.handlesortt(
      [5, 1, 4, 2, 7, 6, 3],
      [
        { userInput: 5, sortPosiotion: 5, userPosition: 1, selected: false },
        { userInput: 1, sortPosiotion: 1, userPosition: 2, selected: false },
        { userInput: 4, sortPosiotion: 4, userPosition: 3, selected: false },
        { userInput: 2, sortPosiotion: 2, userPosition: 4, selected: false },
        { userInput: 7, sortPosiotion: 7, userPosition: 5, selected: false },
        { userInput: 6, sortPosiotion: 6, userPosition: 6, selected: false },
        { userInput: 3, sortPosiotion: 3, userPosition: 7, selected: false },
      ],
      [5, 1, 4, 2, 7, 6, 3]
    );
  }
  handleInputs = (e) => {
    const { errorsIndex } = this.state;

    let updatedErrorsIndex = [...errorsIndex];
    let userInput_parseToInt;

    let userInput = e.target.value;
    this.setState({ inputValue: userInput });
    if (userInput === "") {
      this.props.handleUsersInput([], [], [], []);
      this.setState({ currinput: [] });
    } else {
      let userInput_commaSeperated = userInput.split(",").filter((num) => {
        return num != "";
      });

      let userInput_joinedSrting = userInput_commaSeperated.join("");

      // validations
      let isnum = /^\d+$/.test(userInput_joinedSrting);
      if (isnum) {
        updatedErrorsIndex[0] = 0;
        userInput_parseToInt = userInput_commaSeperated.map((num) => {
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
      if (
        !updatedErrorsIndex.includes(1) &&
        userInput_parseToInt != undefined
      ) {
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
    }
  };

  handlesortt = (currinput, userObj, varr) => {
    if (currinput.length > 0) {
      // console.log(currinput);
      // console.log(userObj);
      // console.log(userInput_parseToInt);

      this.sortInput(userObj, varr);
      this.setState({ isAnimating: true });
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
