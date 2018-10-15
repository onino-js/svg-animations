import React, { Component } from "react";
import { render } from "react-dom";
import BottleMachine from "../../src/bottle-machine/BottleMachine";
import { AppResponsive } from "../../src";
import ThreeGears from "../../src/three-gears/ThreeGears";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>svg-animations Demo</h1>
        <BottleMachine />
        <AppResponsive />
        <ThreeGears />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
