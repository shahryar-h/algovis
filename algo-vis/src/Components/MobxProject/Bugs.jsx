import React from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "./MobxProject";

export default function Bugs() {
  const { inputArr, bbs, setInput, bugs, addBug } =
    React.useContext(StoreContext);

  return useObserver(() => (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let tt = e.target.inputArr.value.split(",").map(Number);
          setInput(tt);
        }}
      >
        <input name="inputArr" type="text" />
      </form>
      {inputArr}
      <br />
      <div> {bbs.map((n) => n + "  ")}</div>
      <br />
      {bugs.map((bug) => bug + " ")}
    </>
  ));
}
