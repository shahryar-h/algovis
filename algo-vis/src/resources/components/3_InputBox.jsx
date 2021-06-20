import React, { Component } from "react";
import _ from "lodash";
import Joi from "joi";
import { initial_user_input_object } from "../constants/inputBox.constants";
import "../styles/inputBox.sass";
const validation_schema = Joi.required().string;
const user_input_validation_schema = Joi.array()
  .required()
  .min(1)
  .items(
    Joi.object().keys({
      userInput: Joi.number().required(),
      sortPosiotion: Joi.number().required(),
      userPosition: Joi.number().required(),
      selected: Joi.boolean().required(),
      sorted: Joi.boolean().required(),
    })
  );
class InputBox extends Component {
  state = {
    errorsIndex: [0, 0, 0, 0],
    errors: [
      "The program accepts only number values comma separated",
      "The program only accepts up to 7 numbers",
      "The program only accepts numbers between 1-100",
      "Please provide a set of numbers or select the default values",
    ],
    input_value: "5,1,4,2,7,6",
    userInput_parseToInt: [5, 1, 4, 2, 7, 6, 3],
    is_animating: false,
  };

  sort_input = (user_input_object, userInput_parseToInt) => {
    let master = [];
    let steps_schema = [];
    let status_schema = [""];
    let len = userInput_parseToInt.length;
    let swapped;
    let new_object = [...user_input_object];
    steps_schema.push([1, 1, 1, 1, 1, 1, 1]);
    master.push(new_object);

    do {
      swapped = false;
      // set swapped to false assuming that the numbers are sorted
      // if after next round this stays false it means we have a sorted
      // array so we stop the process
      // new_object[new_object.length] = [2, 2, 1, 1, 1, 1, 1];
      steps_schema.push([2, 2, 2, 1, 1, 1, 1]);

      status_schema.push(` Set the swapped flag to false. 
      Then iterate from index 1 to ${len} inclusive.`);

      master.push(new_object);

      for (let i = 0; i < len - 1; i++) {
        steps_schema.push([2, 1, 1, 2, 1, 1, 1]);

        let statusTxt = () => {
          return swapped
            ? `Checking if ${new_object[i].userInput} > ${
                new_object[i + 1].userInput
              } and swap them if that is true.
          The current value of swapped = true.`
            : `Checking if ${new_object[i].userInput} > ${
                new_object[i + 1].userInput
              } and swap them if that is true.
          The current value of swapped = false.`;
        };

        status_schema.push(statusTxt());
        let num1 = { ...new_object[i] };
        let num2 = { ...new_object[i + 1] };
        num1.selected = true;
        num2.selected = true;

        let mutate_object = [...new_object];
        mutate_object[i] = num1;
        mutate_object[i + 1] = num2;
        master.push(mutate_object);
        //selected num1 and two / swaps if b is greater than a

        if (new_object[i].userInput > new_object[i + 1].userInput) {
          steps_schema.push([2, 1, 1, 1, 2, 2, 1]);
          status_schema.push();

          let mutate_object2 = [...mutate_object];
          mutate_object2[i] = num2;
          mutate_object2[i + 1] = num1;
          master.push(mutate_object2);

          let mutate_object3 = [...mutate_object2];
          let num11 = { ...mutate_object3[i] };
          let num12 = { ...mutate_object3[i + 1] };
          num11.selected = false;
          num12.selected = false;

          mutate_object3[i] = num11;
          mutate_object3[i + 1] = num12;

          status_schema.push(
            `      Swapping the positions of ${new_object[i].userInput} and ${
              new_object[i + 1].userInput
            }.
            Set swapped = true.`
          );
          new_object = [...mutate_object3];

          swapped = true;
        }
      }

      master[master.length - 1][len - 1].sorted = true;
      master.push(master[master.length - 1]);
      let statusTxt = () => {
        return swapped
          ? `Mark this element as sorted now.
          As at least one swap is done in this pass, we continue.`
          : `No swap is done in this pass.
          We can terminate Bubble Sort now`;
      };
      steps_schema.push([2, 1, 1, 1, 1, 1, 2]);
      status_schema.push(statusTxt());
      len = len - 1;
    } while (swapped);
    master[master.length - 1][len - 1].selected = false;
    master[master.length - 1][len].selected = false;
    master.push(master[master.length - 1]);

    status_schema.push("List is sorted");
    steps_schema.push([1, 1, 1, 1, 1, 1, 1]);

    return { master, steps_schema, status_schema };
  };

  componentDidMount() {
    this.handel_sort(
      initial_user_input_object,
      this.state.userInput_parseToInt
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
    if (userInput.trim() === "") {
      this.props.handleUsersInput([], [], [], []);
      this.setState({
        currinput: [],
        errorsIndex: [0, 0, 0, 1],
      });
      return true;
    } else {
      this.setState({
        errorsIndex: [0, 0, 0, 0],
      });
      return false;
    }
  };
  check_numeric = (userInput_comma_seperated) => {
    console.log("hellooo", userInput_comma_seperated);
    let userInput_joinedSrting = userInput_comma_seperated.join("");
    // validations
    let isnum = /^\d+$/.test(userInput_joinedSrting);
    if (isnum === false) {
      this.setState({
        errorsIndex: [1, 0, 0, 0],
      });
      return true;
    }
    this.setState({
      errorsIndex: [0, 0, 0, 0],
    });

    return false;
  };

  pasre_to_array_of_Integers = (userInput_comma_seperated) => {
    return userInput_comma_seperated.map((num) => {
      return parseInt(num);
    });
  };
  validate_user_input_length = (user_input_parsed_to_array_of_Integers) => {
    if (user_input_parsed_to_array_of_Integers.length > 7) {
      this.setState({
        errorsIndex: [0, 1, 0, 0],
      });
      return true;
    } else {
      this.setState({
        errorsIndex: [0, 0, 0, 0],
      });
      return false;
    }
  };

  validate_user_input_range = (user_input_parsed_to_array_of_Integers) => {
    let result = user_input_parsed_to_array_of_Integers.every(function (e) {
      return e < 100;
    });

    if (!result) {
      this.setState({
        errorsIndex: [0, 0, 1, 0],
      });
      return true;
    } else {
      this.setState({
        errorsIndex: [0, 0, 0, 0],
      });
      return false;
    }
  };
  validate_input = (userInput) => {
    // case empty user input

    if (this.blank_user_input(userInput)) {
      return true, [];
    }

    // // removes ,, situations
    let userInput_comma_seperated = userInput.split(",").filter((num) => {
      return num != "";
    });

    if (this.check_numeric(userInput_comma_seperated)) return true, [];
    // // case all user inputs are nums comma seperated:

    let user_input_parsed_to_array_of_Integers =
      this.pasre_to_array_of_Integers(userInput_comma_seperated);
    if (this.validate_user_input_length(user_input_parsed_to_array_of_Integers))
      return true, [];
    if (this.validate_user_input_range(user_input_parsed_to_array_of_Integers))
      return true, [];

    return [
      false,
      user_input_parsed_to_array_of_Integers
        ? user_input_parsed_to_array_of_Integers
        : [],
    ];
  };

  create_user_object = (user_input_parsed_to_array_of_Integers) => {
    let sorted_user_input = _.sortBy(user_input_parsed_to_array_of_Integers);

    let user_object = user_input_parsed_to_array_of_Integers.map((s) => {
      return {
        userInput: s,
        sortPosiotion: sorted_user_input.indexOf(s) + 1,
        userPosition: user_input_parsed_to_array_of_Integers.indexOf(s) + 1,
        selected: false,
        sorted: false,
      };
    });

    return [user_input_parsed_to_array_of_Integers, user_object];
  };

  handleInputs = (e) => {
    // destructuring
    const { errorsIndex } = this.state;
    // error index indicates the type of validation error to show to the user
    // ex: [0,1,0] means we have an error and it is in index 1 and check our dictionary
    // .. for the error value.
    let userInput = e.target.value;
    this.setState({ input_value: userInput });

    // validate function:
    // //  returns true if there is an error with an empty array
    // // return false if the input is ok with an array if user input parsed to integer
    const [validation, user_input_parsed_to_array_of_Integers] =
      this.validate_input(userInput);
    if (validation) return;

    // we get here if the user input is valid
    if (user_input_parsed_to_array_of_Integers != undefined) {
      // creates user object and renames int array :-) !! finally
      const [user_input_int, user_object] = this.create_user_object(
        user_input_parsed_to_array_of_Integers
      );
      this.setState({
        user_object,
        user_input_int,
      });
    }
  };

  handel_sort = (user_input_object, userInput_parseToInt) => {
    // makes sure the user has valid input(set of numbers) to sort

    const { value, error } =
      user_input_validation_schema.validate(user_input_object);

    if (error) {
      console.log(error);
    } else {
      const { master, steps_schema, status_schema } = this.sort_input(
        user_input_object,
        userInput_parseToInt
      );

      this.props.handel_schemas(master, steps_schema, status_schema);

      this.setState({ is_animating: true });
    }
  };

  handleAnotherSet = () => {
    this.setState({ is_animating: false, input_value: "" });
  };
  render() {
    const {
      errors,
      errorsIndex,
      user_object = [],
      user_input_int = [],
      is_animating,
      input_value,
    } = this.state;

    return (
      <div className="inputSection">
        <input
          type="text"
          autoComplete="off"
          name="name"
          value={input_value}
          onChange={(e) => this.handleInputs(e)}
        />
        {is_animating ? (
          <div className="handlesort" onClick={(e) => this.handleAnotherSet(e)}>
            An other set of Numbers
          </div>
        ) : (
          <div
            className="handlesort"
            onClick={(e) => this.handel_sort(user_object, user_input_int)}
          >
            Sort
          </div>
        )}
      </div>
    );
  }
}

export default InputBox;
