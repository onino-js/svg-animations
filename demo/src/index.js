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
        <div>
          <BottleMachine size={600} />
        </div>
        <div>
          <AppResponsive />
        </div>
        <div>
          <ThreeGears />
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
