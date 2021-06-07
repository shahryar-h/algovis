import React, { Component } from "react";

class InputBox extends Component {
  state = {
    errorsIndex: [0, 0, 0],
    errors: [
      "the program accepts only number values comma seperated",
      "the program only accepts up to 7 numbers",
      "the program only accepts numbers between 1-100",
    ],
    currinput: [],
  };

  sortInput = (userObj, userInput_parseToInt) => {
    let master = [];
    let len = userInput_parseToInt.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        let num1 = { ...userObj[i] };
        let num2 = { ...userObj[i + 1] };
        num1.selected = true;
        num2.selected = true;
        // console.log(num1);

        let onjr = [...userObj];
        onjr[i] = num1;
        onjr[i + 1] = num2;
        // userObj[i + 1].selected = true;
        // console.log("iser", userObj[i]);
        master.push(onjr);

        if (userObj[i].userInput > userObj[i + 1].userInput) {
          // num1.selected = false;
          // num2.selected = false;
          let orj2 = [...onjr];
          orj2[i] = num2;
          orj2[i + 1] = num1;
          master.push([...orj2]);

          let orj3 = [...orj2];
          let num11 = { ...orj3[i] };
          let num12 = { ...orj3[i + 1] };
          num11.selected = false;
          num12.selected = false;

          orj3[i] = num11;
          orj3[i + 1] = num12;
          master.push([...orj3]);
          userObj = [...orj3];

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
    } while (swapped);

    // console.log(master);
    this.props.tesstjamd(master);
  };

  handleInputs = (e) => {
    const { errorsIndex } = this.state;

    let updatedErrorsIndex = [...errorsIndex];
    let userInput_parseToInt;

    let userInput = e.target.value;
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

  handlesortt = (currinput, userObj, userInput_parseToInt) => {
    if (currinput.length > 0) {
      // console.log(currinput);
      // console.log(userObj);
      // console.log(userInput_parseToInt);
      this.sortInput(userObj, userInput_parseToInt);
    }
  };
  render() {
    const { errors, errorsIndex, currinput, userObj, userInput_parseToInt } =
      this.state;
    return (
      <>
        <form>
          <label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              defaultValue="5,1,4,2,7,6,3"
              onChange={(e) => this.handleInputs(e)}
            />
          </label>
        </form>
        <div
          onClick={() =>
            this.handlesortt(currinput, userObj, userInput_parseToInt)
          }
        >
          sort
        </div>
      </>
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
