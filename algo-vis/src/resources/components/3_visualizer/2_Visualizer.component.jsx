import React, { Component } from "react";
import Diagram from "./3_Diagram";
import InputBox from "./3_inputBox/inputBox.component";

class Visualizer extends Component {
  state = {};

  handel_schemas = (main_schema, stepsSchema, statusSchema) => {
    this.setState({ main_schema, stepsSchema, statusSchema });
  };
  render() {
    const { main_schema, stepsSchema, statusSchema } = this.state;
    return (
      <div className="vizContainer">
        <Diagram
          {...{
            main_schema,
            stepsSchema,
            statusSchema,
          }}
        />

        <InputBox
          handel_schemas={(schema, stepsSchema, statusSchema) =>
            this.handel_schemas(schema, stepsSchema, statusSchema)
          }
        />
      </div>
    );
  }
}

export default Visualizer;
