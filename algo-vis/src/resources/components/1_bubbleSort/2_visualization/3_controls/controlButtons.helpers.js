import store from "../../../../../redux/store";
import { setNextStep } from "../../../../../redux/controls/controls.actions";

const handle_control_buttons = (arg) => {
  const state = store.getState();
  const step = state.step.step;
  const schemaLength = state.mainSchema.schemaLength;
  const dispatch = store.dispatch;

  switch (arg) {
    case "start":
      dispatch(setNextStep(1));
      break;
    case "prev":
      step > 1 && dispatch(setNextStep(step - 1));
      break;
    case "playPause":
      // setNextStep(0);
      break;
    case "next":
      step < schemaLength - 1 && dispatch(setNextStep(step + 1));
      break;
    case "end":
      dispatch(setNextStep(schemaLength - 1));
      break;
  }
};

export { handle_control_buttons };
