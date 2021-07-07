import React from "react";
import { connect } from "react-redux";
import { setMainSchema } from "../../../../../../redux/main-schema/mainSchema.actions";
import { toggleAnimate } from "../../../../../../redux/main-schema/mainSchema.actions";
import { setStepsSchema } from "../../../../../../redux/steps/steps.actions";
import { setStatusSchema } from "../../../../../../redux/status/status.actions";

import _ from "lodash";
import styled from "styled-components";

// TODO: make this a button
export const SortButton = styled.input.attrs({
  type: "submit",
})`
  width: 50%;
  border-radius: 50px;
  background: red;
  padding: 0.8em;
  border-radius: 50px;
  background: linear-gradient(145deg, #0e799a, #0c6682);
  box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  text-align: center;
  color: white;
  cursor: pointer;

  &:active {
    border-radius: 50px;
    background: linear-gradient(145deg, #0c6682, #0e799a);
    box-shadow: 5px 5px 13px #095168, -5px -5px 13px #1191b8;
  }
`;

const SubmitInput = ({
  is_animating = false,
  inputList = [],
  setMainSchema,
  setStepsSchema,
  setStatusSchema,
  errorList,
  isAnimating,
  toggleAnimate,
}) => {
  const create_user_object = (inputList) => {
    let sorted_user_input = _.sortBy(inputList);

    let user_object = inputList.map((s) => {
      return {
        userInput: s,
        sortPosiotion: sorted_user_input.indexOf(s) + 1,
        userPosition: inputList.indexOf(s) + 1,
        selected: false,
        sorted: false,
      };
    });

    return user_object;
  };

  const sort_input = (inputList = []) => {
    let master = [];
    let steps_schema = [];
    let status_schema = [""];
    let len = inputList.length;
    let swapped;
    const user_input_object = create_user_object(inputList);
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
    // update redux
    console.log({ master });
    setMainSchema(master);
    setStepsSchema(steps_schema);
    setStatusSchema(status_schema);
    toggleAnimate();
  };
  const handleAnotherSet = () => {
    toggleAnimate();
  };
  console.log({ inputList });
  return (
    <>
      {isAnimating ? (
        <SortButton value="another set" onClick={(e) => handleAnotherSet(e)} />
      ) : (
        <SortButton
          disabled={errorList != ""}
          onClick={() => sort_input(inputList)}
          value="sort"
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setMainSchema: (mainSchema) => dispatch(setMainSchema(mainSchema)),
  setStepsSchema: (stepsSchema) => dispatch(setStepsSchema(stepsSchema)),
  setStatusSchema: (statusSchema) => dispatch(setStatusSchema(statusSchema)),
  toggleAnimate: () => dispatch(toggleAnimate()),
});

const mapStateToProps = (state) => ({
  errorList: state.errorList.errorList,
  isAnimating: state.mainSchema.isAnimating,
  inputList: state.inputList.inputList,
});
export default connect(mapStateToProps, mapDispatchToProps)(SubmitInput);
