import React, { Component } from "react";
import SVG from "svg.js";
require("svg.pathmorphing.js");

class Svg extends Component {
  constructor(props) {
    super(props);
    this.animation1;
    this.repetition1 = false;
    this.inc = 0;
    this.inc2 = 0;
    this.rect1;
    this.nb1 = 0;
    this.nb2 = 0;
  }

  componentDidMount() {
    let buildRect = function(id, size, time, color) {
      return {
        id: id,
        time1: time,
        l1: size,
        l2: size,
        strokeWidth: 20,
        color: color,
      };
    };

    const opts2 = [
      buildRect("Rect1", 111.1 * 4, 100, "#ff6600"),
      buildRect("Rect5", 111.1 * 4, 100, "#003380"),
      buildRect("Rect3", 111.1 * 4, 100, "#00d455"),
      buildRect("Rect6", 111.1 * 4, 100, "#ffcc00"),
      buildRect("Rect2", 111.1 * 4, 100, "#ff0000"),
      buildRect("Rect4", 111.1 * 4, 100, "#00aa88"),
    ];

    this.initializeRects(opts2, 111.1 * 4);
    let nb = 0;
    this.repeat(opts2, 100, nb);
  }

  componentWillUnmount() {
    window.clearTimeout(this.repetition1);
    this.repetition1 = false;
  }

  initializeRects = (table, lng = 2000) => {
    table.forEach(item => {
      SVG.get(item.id).attr({
        "stroke-dasharray": `0,${lng}`,
        fill: "#ffffff",
      });
    });
  };

  repeat = (opts, dur = 2000, nb) => {
    this.repetition1 = window.setTimeout(() => {
      this.draw(
        opts[nb].id,
        opts[nb].time1,
        opts[nb].l1,
        opts[nb].l2,
        opts[nb].strokeWidth,
        opts[nb].color,
      );
      nb += 1;
      if (nb === opts.length) {
        this.repetition1 = false;
        return;
      }
      this.repeat(opts, dur, nb);
    }, dur);
  };

  draw = (
    id,
    time = 1500,
    l1 = 2000,
    l2 = 2000,
    width = 20,
    color = "#ff6600",
  ) => {
    let el = SVG.get(id);
    return el
      .animate(time)
      .attr({
        "stroke-dasharray": `${l1}, ${l2}`,
        strokeWidth: width,
      })
      .animate()
      .attr({
        fill: color,
        strokeWidth: 0,
      });
  };

  render() {
    return (
      <svg id="svg2" width="600" version="1.1" viewBox="0 0 380 290">
        <g id="layer1" transform="translate(0 -762.4)">
          <g id="g6521">
            <rect
              id="rect6935"
              ry="15.9"
              height="268.8"
              width="361.8"
              stroke="#000"
              y="772.9"
              x="8.231"
              strokeWidth="9.875"
            />
            <path
              id="rect3336-0-3"
              fill="#fff"
              d="m22.61 778h333c6.2 0 11.2 4.9 11.2 10.9v222.1c0 6-5 11-11.2 11h-333c-6.17 0-11.14-5-11.14-11v-222.1c0-6 4.97-10.9 11.15-10.9"
            />
            <circle
              id="path3353-1-1-9"
              cy="757.2"
              cx="390.4"
              r="2.247"
              fill="#fff"
            />
            <rect
              id="Rect4"
              height="111.1"
              width="111.1"
              stroke="#3d8d46"
              y="902.1"
              x="133.9"
              strokeWidth=".3143"
              fill="#003380"
            />
            <rect
              id="Rect3"
              height="111.1"
              width="111.1"
              stroke="#3d8d46"
              y="785.3"
              x="250.1"
              strokeWidth=".6285"
              fill="#00d455"
            />
            <rect
              id="Rect5"
              height="111.1"
              width="111.1"
              stroke="#3d8d46"
              y="902.1"
              x="250.1"
              strokeWidth=".3143"
              fill="#f60"
            />
            <rect
              id="Rect6"
              height="111.1"
              width="111.1"
              stroke="#3d8d46"
              y="903.1"
              x="17.5"
              strokeWidth=".3086"
              fill="#ff0"
            />
            <rect
              id="Rect2"
              height="111.1"
              width="111.1"
              stroke="#3d8d46"
              y="785.3"
              x="133.9"
              strokeWidth=".3143"
              fill="#c83737"
            />
            <rect
              id="Rect1"
              height="111.1"
              width="111.1"
              stroke="#3d8d46"
              y="785.3"
              x="16.5"
              strokeWidth=".3143"
              fill="#f00"
            />
          </g>
        </g>
      </svg>
    );
  }
}
export default Svg;
