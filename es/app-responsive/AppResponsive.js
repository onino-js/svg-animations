function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import SVG from "svg.js";
require("svg.pathmorphing.js");

var Svg = function (_Component) {
  _inherits(Svg, _Component);

  function Svg(props) {
    _classCallCheck(this, Svg);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.initializeRects = function (table) {
      var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

      table.forEach(function (item) {
        SVG.get(item.id).attr({
          "stroke-dasharray": "0," + lng,
          fill: "#ffffff"
        });
      });
    };

    _this.repeat = function (opts) {
      var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var nb = arguments[2];

      _this.repetition1 = window.setTimeout(function () {
        _this.draw(opts[nb].id, opts[nb].time1, opts[nb].l1, opts[nb].l2, opts[nb].strokeWidth, opts[nb].color);
        nb += 1;
        if (nb === opts.length) {
          _this.repetition1 = false;
          return;
        }
        _this.repeat(opts, dur, nb);
      }, dur);
    };

    _this.draw = function (id) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
      var l1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
      var l2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
      var width = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;
      var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#ff6600";

      var el = SVG.get(id);
      return el.animate(time).attr({
        "stroke-dasharray": l1 + ", " + l2,
        strokeWidth: width
      }).animate().attr({
        fill: color,
        strokeWidth: 0
      });
    };

    _this.animation1;
    _this.repetition1 = false;
    _this.inc = 0;
    _this.inc2 = 0;
    _this.rect1;
    _this.nb1 = 0;
    _this.nb2 = 0;
    return _this;
  }

  Svg.prototype.componentDidMount = function componentDidMount() {
    var buildRect = function buildRect(id, size, time, color) {
      return {
        id: id,
        time1: time,
        l1: size,
        l2: size,
        strokeWidth: 20,
        color: color
      };
    };

    var opts2 = [buildRect("Rect1", 111.1 * 4, 100, "#ff6600"), buildRect("Rect5", 111.1 * 4, 100, "#003380"), buildRect("Rect3", 111.1 * 4, 100, "#00d455"), buildRect("Rect6", 111.1 * 4, 100, "#ffcc00"), buildRect("Rect2", 111.1 * 4, 100, "#ff0000"), buildRect("Rect4", 111.1 * 4, 100, "#00aa88")];

    this.initializeRects(opts2, 111.1 * 4);
    var nb = 0;
    this.repeat(opts2, 100, nb);
  };

  Svg.prototype.componentWillUnmount = function componentWillUnmount() {
    window.clearTimeout(this.repetition1);
    this.repetition1 = false;
  };

  Svg.prototype.render = function render() {
    return React.createElement(
      "svg",
      { id: "svg2", width: "600", version: "1.1", viewBox: "0 0 380 290" },
      React.createElement(
        "g",
        { id: "layer1", transform: "translate(0 -762.4)" },
        React.createElement(
          "g",
          { id: "g6521" },
          React.createElement("rect", {
            id: "rect6935",
            ry: "15.9",
            height: "268.8",
            width: "361.8",
            stroke: "#000",
            y: "772.9",
            x: "8.231",
            strokeWidth: "9.875"
          }),
          React.createElement("path", {
            id: "rect3336-0-3",
            fill: "#fff",
            d: "m22.61 778h333c6.2 0 11.2 4.9 11.2 10.9v222.1c0 6-5 11-11.2 11h-333c-6.17 0-11.14-5-11.14-11v-222.1c0-6 4.97-10.9 11.15-10.9"
          }),
          React.createElement("circle", {
            id: "path3353-1-1-9",
            cy: "757.2",
            cx: "390.4",
            r: "2.247",
            fill: "#fff"
          }),
          React.createElement("rect", {
            id: "Rect4",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "902.1",
            x: "133.9",
            strokeWidth: ".3143",
            fill: "#003380"
          }),
          React.createElement("rect", {
            id: "Rect3",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "785.3",
            x: "250.1",
            strokeWidth: ".6285",
            fill: "#00d455"
          }),
          React.createElement("rect", {
            id: "Rect5",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "902.1",
            x: "250.1",
            strokeWidth: ".3143",
            fill: "#f60"
          }),
          React.createElement("rect", {
            id: "Rect6",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "903.1",
            x: "17.5",
            strokeWidth: ".3086",
            fill: "#ff0"
          }),
          React.createElement("rect", {
            id: "Rect2",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "785.3",
            x: "133.9",
            strokeWidth: ".3143",
            fill: "#c83737"
          }),
          React.createElement("rect", {
            id: "Rect1",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "785.3",
            x: "16.5",
            strokeWidth: ".3143",
            fill: "#f00"
          })
        )
      )
    );
  };

  return Svg;
}(Component);

export default Svg;