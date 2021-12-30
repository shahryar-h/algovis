import React, { createContext } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import Bugs from "./Bugs";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["Bug 1", "Bug 2", "Bug 3"],
    vir: ["vir 1", "vir 2", "vir 3"],
    addVir: (vir) => {
      store.vir.push(vir);
    },
    addBug: (bug) => {
      store.bugs.push(bug);
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default function MobxProject() {
  return (
    <StoreProvider>
      <Bugs />
    </StoreProvider>
  );
}
