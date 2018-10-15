import React, { Component } from "react";
import { render } from "react-dom";
import BottleMachine from "../../src/bottle-machine/BottleMachine";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>svg-animations Demo</h1>
        <BottleMachine />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
