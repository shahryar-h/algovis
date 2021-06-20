import React, { Component } from "react";
import ControlButtons from "./3_ControlButtons";
import Steps from "./3_Steps";

class Diagram extends Component {
  state = {
    counter: 0,
    play: false,
  };
  increment = () => {
    const { counter } = this.state;

    if (counter + 1 <= this.props.main_schema.length - 1) {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      clearInterval(this.interval);
      return;
    }
  };
  decrement = () => {
    const { counter } = this.state;

    if (counter - 1 >= 0) {
      this.setState({ counter: counter - 1 });
    } else {
      clearInterval(this.interval);
      return;
    }
  };

  handle_control_buttons = (e) => {
    const { counter, play } = this.state;
    if (e == "next") {
      if (counter + 1 <= this.props.main_schema.length - 1) {
        this.setState({ counter: counter + 1 });
      }
    }
    if (e == "playPause") {
      if (play) {
        this.setState({ play: !this.state.play });
        clearInterval(this.interval);
      } else {
        this.setState({ play: !this.state.play });
        if (counter <= this.props.main_schema.length - 1) {
          this.interval = setInterval(
            this.decrement,

            1000
          );
        }
      }
    }

    if (e == "prev") {
      if (counter - 1 >= 0) {
        this.setState({ counter: this.state.counter - 1 });
      }
    }
    if (e == "end") {
      this.setState({ counter: this.props.main_schema.length - 1 });
    }
    if (e == "start") {
      this.setState({ counter: 0 });
    }
  };
  render() {
    const {
      main_schema = [],
      stepsSchema = [],
      statusSchema = [],
    } = this.props;

    const { counter } = this.state;
    return (
      <>
        <Steps
          schema={stepsSchema[counter]}
          statusSchema={statusSchema[counter]}
        />
        <div className="sortItems">
          {main_schema[counter]?.map((item, index) => (
            <div
              key={`itemBox-${item.sortPosiotion}-${index}`}
              className={
                item.selected
                  ? `sortItem sortItem${item.sortPosiotion} selected`
                  : `sortItem sortItem${item.sortPosiotion}`
              }
            >
              {item.userInput}
            </div>
          ))}
        </div>
        <ControlButtons
          handle_control_buttons={(e) => this.handle_control_buttons(e)}
        />
      </>
    );
  }
}

export default Diagram;
