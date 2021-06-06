import React, { Component } from "react";

class InputBox extends Component {
  state = {
    errorsIndex: [0, 0, 0],
    errors: [
      "the program accepts only number values comma seperated",
      "the program only accepts up to 7 numbers",
      "the program only accepts numbers between 1-100",
    ],
  };
  handleInputs = (e) => {
    const { errorsIndex } = this.state;

    let updatedErrorsIndex = [...errorsIndex];
    let userInput_parseToInt;

    let userInput = e.target.value;
    console.log();
    if (userInput === "") {
      this.props.handleUsersInput([], [], [], []);
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
          };
        });
        let sortedObj = sortedInput.map((s) => {
          return {
            userInput: s,
            sortPosiotion: sortedInput.indexOf(s) + 1,
            userPosition: userInput_parseToInt.indexOf(s) + 1,
          };
        });

        // console.log();
        this.props.handleUsersInput(
          userObj,
          sortedObj,
          userInput_parseToInt,
          sortedInput
        );
      }
    }
  };
  render() {
    const { errors, errorsIndex } = this.state;
    return (
      <>
        <form>
          <label>
            <input
              onChange={(e) => this.handleInputs(e)}
              type="text"
              name="name"
            />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </>
    );
  }
}

export default InputBox;
