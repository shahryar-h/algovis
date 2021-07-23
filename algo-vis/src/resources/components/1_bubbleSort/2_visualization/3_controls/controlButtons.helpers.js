import store from "../../../../../redux/store";
import { setNextStep } from "../../../../../redux/controls/controls.actions";

const handle_control_buttons = (arg) => {
  const state = store.getState();
  const step = state.step.step;
  const schemaLength = state.mainSchema.schemaLength;
  const dispatch = store.dispatch;

  console.log(arg);
  switch (arg) {
    case "start":
      dispatch(setNextStep(0));
      break;
    case "prev":
      dispatch(setNextStep(step - 1));
      break;
    case "playPause":
      // setNextStep(0);
      break;
    case "next":
      dispatch(setNextStep(step + 1));
      break;
    case "end":
      dispatch(setNextStep(schemaLength));
      break;
  }
};

export { handle_control_buttons };
