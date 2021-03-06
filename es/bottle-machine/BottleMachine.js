function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import SVG from "svg.js";

var FactorySvg = function (_Component) {
  _inherits(FactorySvg, _Component);

  function FactorySvg(props) {
    _classCallCheck(this, FactorySvg);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  FactorySvg.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var bottles = SVG.get("bottles");
    var mobile = SVG.get("mobile");
    var bouchon = SVG.get("bouchonMob");
    bottles.animate(2000).dmove(-800, 0).loop();
    mobile.animate(1000).delay(1000).dmove(0, 300).loop(null, true);

    var blink1 = function blink1() {
      bouchon.dmove(0, -100);
      bouchon.attr({ opacity: 0 });
    };
    var blink2 = function blink2() {
      bouchon.attr({ opacity: 1 });
      bouchon.animate(100).dmove(0, 100);
    };
    var blinkState = true;

    var repeat = function repeat() {
      return _this2.repeat = window.setTimeout(function () {
        blinkState ? blink2() : blink1();
        blinkState = !blinkState;
        repeat();
      }, 1000);
    };

    repeat();
  };

  FactorySvg.prototype.componentWillUnmount = function componentWillUnmount() {
    window.clearTimeout(this.repeat);
  };

  FactorySvg.prototype.render = function render() {
    var size = this.props.size || 200;
    var width = size + "px";
    return React.createElement(
      "svg",
      {
        id: "svg-container",
        width: width,
        version: "1.1",
        viewBox: "100 0 5000 4960"
      },
      React.createElement(
        "defs",
        { id: "defs4825" },
        React.createElement(
          "mask",
          { id: "mask5845" },
          React.createElement("path", {
            id: "path5847",
            d: "m200.1 952.2-5.657-1574 385.4-182.4 5.303-2683 4215-8.839v2754h200v1695z",
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "10.29",
            fill: "#fff"
          })
        )
      ),
      React.createElement(
        "g",
        { id: "layer1", transform: "translate(0 3908)" },
        React.createElement(
          "g",
          { id: "g4957", mask: "url(#mask5845)" },
          React.createElement(
            "g",
            { id: "static", transform: "matrix(1 0 0 1.094 0 76.8)" },
            React.createElement("path", {
              id: "path5484",
              fill: "#b3b3b3",
              d: "m2513-3121h-531.7c-153.1 0-277.1 124.1-277.1 277.1v2025h808.8v-2302"
            }),
            React.createElement("rect", {
              id: "rect5486",
              transform: "matrix(2.679 0 0 2.679 -3713 -1397)",
              height: "856.7",
              width: "112.1",
              y: "-640.9",
              x: "2212",
              fill: "#ccc"
            })
          ),
          React.createElement(
            "g",
            { id: "g6585", transform: "matrix(9.42 0 0 9.42 5057 -3562)" },
            React.createElement(
              "g",
              { id: "chariot" },
              React.createElement("path", {
                id: "path6439",
                d: "m-179.1 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              React.createElement("path", {
                id: "path6441",
                d: "m-440.9 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              React.createElement("path", {
                id: "path6447",
                d: "m-156.8 329.6c0 11.17-4.462 21.28-11.69 28.61-7.225 7.323-17.2 11.84-28.23 11.84h-262c-10.89 0-20.75-4.408-27.96-11.59-2.753-2.738-5.117-5.881-7.01-9.335-2.446-4.501-4.073-9.521-4.677-14.86-0.174-1.535-0.2661-3.091-0.2661-4.667 0-1.577 0.0921-3.132 0.2661-4.667 0.6038-5.342 2.231-10.36 4.677-14.86 1.832-3.34 4.104-6.4 6.744-9.075 0.0921-0.0933 0.174-0.1763 0.2661-0.2593 7.205-7.177 17.07-11.59 27.96-11.59h262c22.04 0 39.91 18.11 39.91 40.45",
                fill: "#d3674a"
              }),
              React.createElement("path", {
                id: "path6457",
                d: "m-65.91 370.1h-262c-22.04 0-39.91-18.11-39.91-40.45s17.87-40.45 39.91-40.45h262c22.04 0 39.91 18.11 39.91 40.45s-17.87 40.45-39.91 40.45",
                fill: "#ef7954"
              }),
              React.createElement("path", {
                id: "circle6459",
                fill: "#bf5843",
                d: "m-303.6 329.6c0.00001 6.189-2.426 12.12-6.744 16.5-4.318 4.376-10.17 6.835-16.28 6.835-6.107 0-11.96-2.459-16.28-6.835-4.318-4.376-6.744-10.31-6.744-16.5 0-12.89 10.31-23.34 23.03-23.34s23.03 10.45 23.03 23.34"
              }),
              React.createElement("path", {
                id: "circle6461",
                fill: "#bf5843",
                d: "m-213.8 329.6c0 6.189-2.426 12.12-6.744 16.5-4.318 4.376-10.17 6.835-16.28 6.835-6.107 0-11.96-2.459-16.28-6.835-4.318-4.376-6.744-10.31-6.744-16.5 0-6.189 2.426-12.12 6.744-16.5 4.318-4.376 10.17-6.835 16.28-6.835 12.72 0 23.03 10.45 23.03 23.34"
              }),
              React.createElement("path", {
                id: "circle6463",
                fill: "#bf5843",
                d: "m-127.8 329.6c0 6.189-2.426 12.12-6.744 16.5-4.318 4.376-10.17 6.835-16.28 6.835-6.107 0-11.96-2.459-16.28-6.835-4.318-4.376-6.744-10.31-6.744-16.5 0-12.89 10.31-23.34 23.03-23.34s23.03 10.45 23.03 23.34"
              }),
              React.createElement("path", {
                id: "path6465",
                d: "m-41.83 329.6c0 12.89-10.32 23.34-23.03 23.34-4.81 0-9.272-1.494-12.97-4.045-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 3.695-2.552 8.157-4.045 12.97-4.045 12.71 0 23.03 10.44 23.03 23.34",
                fill: "#bf5843"
              }),
              React.createElement("path", {
                id: "path6467",
                d: "m-67.77 329.6c0 8.018-3.981 15.09-10.06 19.29-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 6.079 4.201 10.06 11.27 10.06 19.29",
                fill: "#d3674a"
              }),
              React.createElement("path", {
                id: "path6469",
                d: "m-153.7 329.6c0 8.018-3.981 15.09-10.06 19.29-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 6.079 4.201 10.06 11.27 10.06 19.29",
                fill: "#d3674a"
              }),
              React.createElement("path", {
                id: "path6471",
                d: "m-239.7 329.6c0 8.018-3.981 15.09-10.06 19.29-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 6.079 4.201 10.06 11.27 10.06 19.29",
                fill: "#d3674a"
              }),
              React.createElement("path", {
                id: "path6473",
                d: "m-329.5 329.6c0 3.184-0.6243 6.223-1.77 8.992-1.73 4.201-4.626 7.769-8.29 10.3-3.664-2.531-6.56-6.099-8.29-10.3-1.146-2.769-1.77-5.808-1.77-8.992 0-1.597 0.1535-3.153 0.4605-4.667 1.208-6.057 4.728-11.26 9.6-14.62 4.871 3.361 8.392 8.567 9.6 14.62 0.307 1.513 0.4605 3.069 0.4605 4.667",
                fill: "#d3674a"
              }),
              React.createElement("path", {
                id: "path6537",
                d: "m-318.7 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              React.createElement("path", {
                id: "path6539",
                d: "m-327.1 324.9v13.66h-20.8c-1.146-2.769-1.77-5.808-1.77-8.992 0-1.597 0.1535-3.153 0.4605-4.667h22.11",
                fill: "#b3b3b3"
              }),
              React.createElement("path", {
                id: "path6541",
                d: "m-56.92 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              React.createElement("path", {
                id: "path6543",
                d: "m-65.32 324.9v13.66h-20.8c-1.146-2.769-1.77-5.808-1.77-8.992 0-1.597 0.1535-3.153 0.4605-4.667h22.11",
                fill: "#b3b3b3"
              }),
              React.createElement("rect", {
                id: "rect6545",
                transform: "matrix(1.023 0 0 1.037 -498.6 18.17)",
                height: "15",
                width: "103",
                y: "410.6",
                x: "56.34",
                fill: "#b3b3b3"
              }),
              React.createElement("rect", {
                id: "rect6547",
                transform: "matrix(1.023 0 0 1.037 -498.6 18.17)",
                height: "15",
                width: "103",
                y: "410.6",
                x: "312.1",
                fill: "#b3b3b3"
              })
            )
          ),
          React.createElement(
            "g",
            { id: "mobile", transform: "translate(0,-220)" },
            React.createElement(
              "g",
              { id: "bouchonMob", transform: "translate(-.00006884 -100 )" },
              React.createElement("rect", {
                id: "rect5524-7-1",
                transform: "matrix(2.679 0 0 2.679 -2277 -1521)",
                height: "45.01",
                width: "78.78",
                y: "-258",
                x: "1845",
                fill: "#ef7954"
              }),
              React.createElement("rect", {
                id: "rect5526-5-9",
                transform: "matrix(2.679 0 0 2.679 -2277 -1521)",
                height: "45.01",
                width: "31.51",
                y: "-258",
                x: "1845",
                fill: "#d3674a"
              })
            ),
            React.createElement("rect", {
              id: "rect5558",
              height: "195.9",
              width: "325.6",
              y: "-2419",
              x: "2615",
              fill: "#ccc"
            }),
            React.createElement("path", {
              id: "path5564",
              fill: "#ccc",
              d: "m2822-3125h-294.7v706.1h501v-499.8c0-114-92.38-206.3-206.3-206.3"
            }),
            React.createElement("rect", {
              id: "rect5566",
              height: "706.1",
              width: "399.8",
              y: "-3125",
              x: "2341",
              fill: "#b3b3b3"
            }),
            React.createElement("rect", {
              id: "rect5568",
              height: "196",
              width: "66.85",
              y: "-2419",
              x: "2615",
              fill: "#b3b3b3"
            }),
            React.createElement("rect", {
              id: "rect5572",
              height: "257.8",
              width: "45.23",
              y: "-2901",
              x: "2298",
              fill: "#999"
            }),
            React.createElement("polygon", {
              id: "polygon5574",
              points: "2615 -2233 2615 -2289 2941 -2357 2941 -2301",
              fill: "#b3b3b3"
            }),
            React.createElement("polygon", {
              id: "polygon5576",
              points: "2615 -2368 2860 -2419 2941 -2419 2941 -2380 2615 -2312",
              fill: "#b3b3b3"
            })
          ),
          React.createElement(
            "g",
            { id: "bottles" },
            React.createElement(
              "g",
              { id: "g4336" },
              React.createElement(
                "g",
                { id: "bouchon" },
                React.createElement("rect", {
                  id: "rect5524",
                  transform: "matrix(2.679 0 0 2.679 -3877 -1381)",
                  height: "45.01",
                  width: "78.78",
                  y: "-258",
                  x: "1845",
                  fill: "#ef7954"
                }),
                React.createElement("rect", {
                  id: "rect5526",
                  transform: "matrix(2.679 0 0 2.679 -3877 -1381)",
                  height: "45.01",
                  width: "31.51",
                  y: "-258",
                  x: "1845",
                  fill: "#d3674a"
                })
              ),
              React.createElement(
                "g",
                { id: "bottle" },
                React.createElement("path", {
                  id: "path5518",
                  fill: "#62af68",
                  d: "m1428-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                React.createElement("path", {
                  id: "path5520",
                  fill: "#77c67f",
                  d: "m1428-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                React.createElement("path", {
                  id: "path5522",
                  opacity: "0.49",
                  fill: "#f2f2f2",
                  d: "m1335-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
                })
              )
            ),
            React.createElement(
              "g",
              { id: "g4336-3" },
              React.createElement(
                "g",
                { id: "bouchon-6" },
                React.createElement("rect", {
                  id: "rect5524-7",
                  transform: "matrix(2.679 0 0 2.679 -3077 -1381)",
                  height: "45.01",
                  width: "78.78",
                  y: "-258",
                  x: "1845",
                  fill: "#ef7954"
                }),
                React.createElement("rect", {
                  id: "rect5526-5",
                  transform: "matrix(2.679 0 0 2.679 -3077 -1381)",
                  height: "45.01",
                  width: "31.51",
                  y: "-258",
                  x: "1845",
                  fill: "#d3674a"
                })
              ),
              React.createElement(
                "g",
                { id: "bottle-3" },
                React.createElement("path", {
                  id: "path5518-5",
                  fill: "#62af68",
                  d: "m2228-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                React.createElement("path", {
                  id: "path5520-6",
                  fill: "#77c67f",
                  d: "m2228-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                React.createElement("path", {
                  id: "path5522-2",
                  opacity: "0.49",
                  fill: "#f2f2f2",
                  d: "m2135-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
                })
              )
            ),
            React.createElement(
              "g",
              { id: "bottle-3-4-0" },
              React.createElement("path", {
                id: "path5518-5-7-3",
                fill: "#62af68",
                d: "m3828-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5520-6-8-6",
                fill: "#77c67f",
                d: "m3828-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5522-2-4-1",
                opacity: "0.49",
                fill: "#f2f2f2",
                d: "m3735-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
              })
            ),
            React.createElement(
              "g",
              { id: "bottle-3-4-0-0" },
              React.createElement("path", {
                id: "path5518-5-7-3-6",
                fill: "#62af68",
                d: "m4628-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5520-6-8-6-3",
                fill: "#77c67f",
                d: "m4628-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5522-2-4-1-2",
                opacity: "0.49",
                fill: "#f2f2f2",
                d: "m4535-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
              })
            ),
            React.createElement(
              "g",
              { id: "bottle-3-4-0-0-9" },
              React.createElement("path", {
                id: "path5518-5-7-3-6-3",
                fill: "#62af68",
                d: "m5428-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5520-6-8-6-3-7",
                fill: "#77c67f",
                d: "m5428-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5522-2-4-1-2-4",
                opacity: "0.49",
                fill: "#f2f2f2",
                d: "m5335-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
              })
            ),
            React.createElement(
              "g",
              { id: "g4336-3-2" },
              React.createElement(
                "g",
                { id: "bouchon-6-5" },
                React.createElement("rect", {
                  id: "rect5524-7-4",
                  transform: "matrix(2.679 0 0 2.679 -2277 -1381)",
                  height: "45.01",
                  width: "78.78",
                  y: "-258",
                  x: "1845",
                  fill: "#ef7954"
                }),
                React.createElement("rect", {
                  id: "rect5526-5-7",
                  transform: "matrix(2.679 0 0 2.679 -2277 -1381)",
                  height: "45.01",
                  width: "31.51",
                  y: "-258",
                  x: "1845",
                  fill: "#d3674a"
                })
              ),
              React.createElement(
                "g",
                { id: "bottle-3-4" },
                React.createElement("path", {
                  id: "path5518-5-4",
                  fill: "#62af68",
                  d: "m3028-1489v668.6h-512v-668.6c0-25 7-49 20-69s32-36 55-46c46-20 75-66 75-116v-225h211v225c0 25 8 49 21 69s32 37 55 47c46 20 75 65 75 115"
                }),
                React.createElement("path", {
                  id: "path5520-6-3",
                  fill: "#77c67f",
                  d: "m3028-1489v668.6h-428v-668.6c0-25 7-49 21-69 13-20 32-36 54-46 46-20 76-66 76-116v-225h126v225c0 25 8 49 21 69s32 37 55 47c46 20 75 65 75 115"
                }),
                React.createElement("path", {
                  id: "path5522-2-0",
                  opacity: "0.49",
                  fill: "#f2f2f2",
                  d: "m2935-1489v668.6h-118v-668.6c0-106-33-181-33-231v-225h39v225c0 25 8 49 21 69s91 112 91 162"
                })
              )
            ),
            React.createElement(
              "g",
              { id: "bottle-3-4-0-0-7", transform: "translate(800)" },
              React.createElement("path", {
                id: "path5518-5-7-3-6-8",
                fill: "#62af68",
                d: "m4628-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5520-6-8-6-3-6",
                fill: "#77c67f",
                d: "m4628-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              React.createElement("path", {
                id: "path5522-2-4-1-2-8",
                opacity: "0.49",
                fill: "#f2f2f2",
                d: "m4535-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
              })
            )
          )
        )
      )
    );
  };

  return FactorySvg;
}(Component);

export default FactorySvg;