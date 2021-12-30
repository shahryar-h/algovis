import React from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "./MobxProject";

export default function Bugs() {
  const { bugs, addBug, addVir, vir } = React.useContext(StoreContext);

  return useObserver(() => (
    <>
      <form
        onSubmit={(e) => {
          console.log("hello");
          //   addBug(e.target.bug.value);
          //   addVir(e.target.vir.value);
          e.preventDefault();
        }}
      >
        <input name="bug" type="text" />
        <input name="vir" type="text" />
      </form>
      {bugs.map((bug) => (
        <li key={bug}>{bug}</li>
      ))}

      {vir.map((vir) => (
        <li key={vir}>{vir}</li>
      ))}
    </>
  ));
}
