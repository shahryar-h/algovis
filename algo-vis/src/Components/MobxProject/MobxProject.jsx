import React, { createContext } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import Bugs from "./Bugs";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["Bug 1", "Bug 2", "Bug 3"],
    vir: ["vir 1", "vir 2", "vir 3"],
    addVir: (vir) => {
      store.bugs.push(vir);
    },
    addBug: (bug) => {
      store.bugs.push(bug);
    },
    inputArr: [9, 8, 7],

    setInput(newArr) {
      this.inputArr = newArr;
    },

    get bbs() {
      let arr = [...store.inputArr];
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
            min = j;
          }
        }
        if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
        }
      }
      return arr;
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
