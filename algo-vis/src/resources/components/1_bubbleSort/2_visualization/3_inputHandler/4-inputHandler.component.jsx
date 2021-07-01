import React, { useState } from "react";

export default function InputHandler({ is_animating }) {
  const [input_value, setInputValue] = useState("5,1,4,2,7,6");

  const handleChange = (e) => {
    // let userInput = e.target.value;
    // setInputValue(userInput);
    // const [validation, user_input_parsed_to_array_of_Integers] =
    //   validate_input(userInput);
    // if (validation) return;
  };

  // const validate_input = (userInput) => {
  //   // check if empty.
  //   switch (userInput) {
  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  // };

  //  state={
  //   errorsPattern: array
  //
  // }

  return (
    <div>
      {/* <Input
        type="text"
        autoComplete="off"
        name="name"
        value={input_value}
        onChange={(e) => handleChange(e)}
        disabled={is_animating}
      /> */}

      {/* {box} */}
      {/* {error} */}
      {/* {submit} */}
    </div>
  );
}
