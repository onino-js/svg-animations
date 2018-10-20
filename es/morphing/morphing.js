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

      if (nb === opts.length) {
        nb = 0;
        _this.grow();
        _this.toMobile();
        return;
      }
      _this.repetition1 = window.setTimeout(function () {
        _this.draw(opts[nb].id, opts[nb].time1, opts[nb].l1, opts[nb].l2, opts[nb].strokeWidth, opts[nb].color);
        nb += 1;
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

    _this.grow = function () {
      var rect = SVG.get("Rect1");
      rect.animate(1000, "-", 0).attr({
        width: "343.7",
        height: "225.5"
      });
    };

    _this.toMobile = function () {
      var el = SVG.get("g6521");
      el.animate(1000, "-", 0).transform({ scaleX: 0.2 });
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
    var container = SVG.get("svg2");
    var path = container.path("M150 0 L75 200 L225 200 Z");
    path.attr({ fill: "#FFF333" });
    path.animate().plot("m43.69 56.37c17.81-45.27 53.96-0.49 82.31 29.29-124.1 50.24-125.7-55-82.31-29.29");

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

    var opts2 = [buildRect("Rect1", 111.1 * 4, 500, "#ff6600"), buildRect("Rect5", 111.1 * 4, 500, "#003380"), buildRect("Rect3", 111.1 * 4, 500, "#00d455"), buildRect("Rect6", 111.1 * 4, 500, "#ffcc00"), buildRect("Rect2", 111.1 * 4, 500, "#ff0000"), buildRect("Rect4", 111.1 * 4, 500, "#00aa88")];

    this.initializeRects(opts2, 111.1 * 4);
    var nb = 0;
    this.repeat(opts2, 1000, nb);

    SVG.get("wheel2").animate(2000).rotate(360).loop();
    SVG.get("wheel3").animate(2000).rotate(-360).loop();
    SVG.get("wheel1").animate(4000).rotate(-360).loop();

    SVG.get("app1").attr({
      "fill-opacity": 0
    }).animate().delay(2000).attr({
      "fill-opacity": 1
    });
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
          }),
          React.createElement(
            "g",
            { id: "g6516" },
            React.createElement("path", {
              id: "wheel2",
              fill: "#f95",
              d: "m200.6 935.5h5.4c0.3-1.2 1.3-2.1 2.5-2.5v-5.4c-4.2 0.4-7.5 3.7-7.9 7.9m0 1.6c0.4 4.2 3.7 7.6 7.9 8v-5.5c-1.2-0.3-2.2-1.2-2.5-2.5h-5.4m9.5 8c4.2-0.4 7.6-3.8 8-8h-5.5c-0.3 1.3-1.2 2.2-2.5 2.5v5.5m0-12c1.3 0.3 2.2 1.2 2.5 2.4h5.5c-0.4-4.2-3.8-7.5-8-7.9v5.5m-2.3-7l-0.2-1.3 0.1-0.8 1-2.1h1.3l0.9 2.1 0.1 0.8-0.2 1.3s2.3 0.6 2.3 0.6l0.5-1.2 0.5-0.6 1.9-1.4 1.1 0.6-0.2 2.4-0.4 0.7-0.8 1 1.7 1.7 1.1-0.8 0.7-0.3s2.3-0.3 2.3-0.3l0.7 1.2-1.4 1.9-0.7 0.4-1.2 0.5 0.6 2.3s1.3-0.2 1.3-0.2l0.8 0.1s2.2 1 2.2 1v1.3l-2.2 0.9-0.8 0.1s-1.3-0.2-1.3-0.2l-0.6 2.3 1.2 0.5 0.7 0.5 1.4 1.9-0.7 1.1-2.3-0.2-0.7-0.3-1.1-0.9-1.7 1.7 0.8 1.1 0.4 0.7 0.2 2.3-1.1 0.7-1.9-1.4-0.5-0.6-0.5-1.3s-2.3 0.7-2.3 0.7l0.2 1.3-0.1 0.7-0.9 2.2h-1.3l-1-2.2-0.1-0.7 0.2-1.3s-2.3-0.7-2.3-0.7l-0.5 1.3-0.4 0.6-2 1.4-1.1-0.7 0.3-2.3s0.3-0.7 0.3-0.7l0.8-1.1-1.7-1.7-1 0.9-0.7 0.3-2.4 0.2-0.6-1.1 1.4-1.9 0.6-0.5 1.2-0.5-0.6-2.3s-1.3 0.2-1.3 0.2l-0.8-0.1s-2.1-0.9-2.1-0.9v-1.3l2.1-1 0.8-0.1s1.3 0.2 1.3 0.2l0.6-2.3-1.2-0.5-0.6-0.4-1.4-1.9 0.6-1.2 2.4 0.3 0.7 0.3 1 0.8 1.7-1.7-0.8-1s-0.3-0.7-0.3-0.7l-0.3-2.4 1.1-0.6 2 1.4 0.4 0.6 0.5 1.2s2.3-0.6 2.3-0.6"
            }),
            React.createElement("path", {
              id: "wheel1",
              fill: "#ff8080",
              d: "m176.2 931.2v-0.5l0.2-1.3 0.7-1.9h1.4l0.7 1.9 0.2 1.3v0.5l2 0.3 0.1-0.5 0.6-1.3 1.2-1.5 1.2 0.3 0.3 2-0.1 1.3-0.2 0.5s1.9 0.8 1.9 0.8l0.2-0.5s0.9-1 0.9-1l1.6-1.2 1.1 0.6-0.3 2-0.4 1.3s-0.3 0.4-0.3 0.4l1.6 1.2s0.3-0.4 0.3-0.4l1.1-0.8 1.9-0.7 0.9 0.9-0.8 1.9-0.8 1.1-0.4 0.3 1.3 1.6 0.4-0.3 1.3-0.5s1.9-0.2 1.9-0.2l0.7 1.1-1.2 1.6-1.1 0.9-0.4 0.2 0.8 1.8 0.4-0.1s1.4-0.2 1.4-0.2l2 0.3 0.3 1.3-1.6 1.2-1.2 0.6h-0.5l0.2 2.1 0.5-0.1s1.4 0.2 1.4 0.2 1.8 0.8 1.8 0.8v1.3s-1.8 0.8-1.8 0.8-1.4 0.2-1.4 0.2h-0.5l-0.2 2 0.5 0.1 1.2 0.5 1.6 1.2-0.3 1.3-2 0.3s-1.4-0.2-1.4-0.2l-0.4-0.1-0.8 1.8 0.4 0.3 1.1 0.8 1.2 1.6-0.7 1.1s-1.9-0.2-1.9-0.2l-1.3-0.5-0.4-0.3-1.3 1.6 0.4 0.4 0.8 1.1 0.8 1.8-0.9 0.9-1.9-0.7-1.1-0.8s-0.3-0.4-0.3-0.4l-1.6 1.2s0.3 0.4 0.3 0.4l0.4 1.3 0.3 2-1.1 0.7-1.6-1.3s-0.9-1-0.9-1l-0.2-0.5s-1.9 0.8-1.9 0.8l0.2 0.5 0.1 1.3-0.3 2-1.2 0.4-1.2-1.6-0.6-1.3-0.1-0.5-2 0.3v0.5l-0.2 1.3-0.7 1.9h-1.4l-0.7-1.9-0.2-1.3v-0.5l-2-0.3-0.1 0.5-0.6 1.3-1.2 1.6-1.2-0.4-0.3-2 0.1-1.3 0.2-0.5s-1.9-0.8-1.9-0.8l-0.2 0.5s-0.9 1-0.9 1l-1.6 1.3-1.1-0.7 0.3-2 0.4-1.3s0.3-0.4 0.3-0.4l-1.6-1.2s-0.3 0.4-0.3 0.4l-1.1 0.8-1.9 0.7-0.9-0.9 0.8-1.8 0.8-1.1 0.4-0.4-1.3-1.6-0.4 0.3-1.3 0.5-2 0.2-0.6-1.1 1.2-1.6 1.1-0.8 0.4-0.3-0.8-1.8-0.4 0.1s-1.4 0.2-1.4 0.2l-2-0.3-0.3-1.3 1.6-1.2 1.2-0.5 0.5-0.1-0.2-2h-0.6s-1.3-0.2-1.3-0.2-1.8-0.8-1.8-0.8v-1.3s1.8-0.8 1.8-0.8 1.3-0.2 1.3-0.2l0.6 0.1 0.2-2.1h-0.5l-1.2-0.6-1.6-1.2 0.3-1.3 2-0.3s1.4 0.2 1.4 0.2l0.4 0.1 0.8-1.8-0.4-0.2-1.1-0.9-1.2-1.6 0.6-1.1 2 0.2 1.3 0.5 0.4 0.3 1.3-1.6-0.4-0.3-0.8-1.1-0.8-1.9 0.9-0.9 1.9 0.7 1.1 0.8s0.3 0.4 0.3 0.4l1.6-1.2s-0.3-0.4-0.3-0.4l-0.4-1.3-0.3-2 1.1-0.6 1.6 1.2s0.9 1 0.9 1l0.2 0.5s1.9-0.8 1.9-0.8l-0.2-0.5-0.1-1.3 0.3-2 1.2-0.3 1.2 1.5 0.6 1.3 0.1 0.5 2-0.3m-15.8 20.8c0.2 4 1.8 7.9 4.5 10.9l7.7-7.8c-0.7-0.9-1.1-2-1.2-3.1h-11m0-1.7h11c0.1-1.1 0.5-2.2 1.2-3.1l-7.7-7.8c-2.7 3-4.3 6.9-4.5 10.9m5.7-12l7.7 7.7c0.9-0.7 2-1.1 3.2-1.3v-11c-4.1 0.2-7.9 1.8-10.9 4.6m0 25.8c3 2.7 6.8 4.3 10.9 4.5v-11c-1.2-0.1-2.3-0.6-3.2-1.3l-7.7 7.8m12.5 4.5c4.1-0.2 7.9-1.8 10.9-4.5l-7.7-7.8c-0.9 0.7-2 1.2-3.2 1.3v11m0-23.9c1.2 0.2 2.3 0.6 3.2 1.3l7.7-7.7c-3-2.8-6.8-4.4-10.9-4.6v11m4.4 10.4l7.7 7.8c2.7-3 4.3-6.9 4.5-10.9h-11c-0.1 1.1-0.5 2.2-1.2 3.1m0-7.9c0.7 0.9 1.1 2 1.2 3.1h11c-0.2-4-1.8-7.9-4.5-10.9l-7.7 7.8"
            }),
            React.createElement("path", {
              id: "wheel3",
              fill: "#ac9393",
              d: "m183.9 981.8h5.4c0.3-1.2 1.3-2.2 2.5-2.5v-5.5c-4.2 0.4-7.5 3.8-7.9 8m0 1.6c0.4 4.2 3.7 7.5 7.9 7.9v-5.4c-1.2-0.3-2.2-1.3-2.5-2.5h-5.4m9.5 7.9c4.2-0.4 7.6-3.7 8-7.9h-5.5c-0.3 1.2-1.2 2.2-2.5 2.5v5.4m0-12c1.3 0.3 2.2 1.3 2.5 2.5h5.5c-0.4-4.2-3.8-7.6-8-8v5.5m-2.3-6.9l-0.2-1.3 0.1-0.8 1-2.2h1.3l0.9 2.2 0.1 0.8-0.2 1.3s2.3 0.6 2.3 0.6l0.5-1.2 0.5-0.7 1.9-1.4 1.1 0.7-0.2 2.3s-0.3 0.7-0.3 0.7l-0.9 1.1 1.7 1.7 1.1-0.8 0.7-0.4 2.3-0.2 0.7 1.1-1.4 1.9-0.6 0.5-1.3 0.5 0.6 2.3s1.4-0.2 1.4-0.2l0.7 0.1 2.2 0.9v1.3s-2.2 1-2.2 1l-0.7 0.1s-1.4-0.2-1.4-0.2l-0.6 2.3 1.3 0.5 0.6 0.4s1.4 2 1.4 2l-0.7 1.1s-2.3-0.3-2.3-0.3l-0.7-0.3-1.1-0.8-1.7 1.7s0.9 1 0.9 1 0.3 0.7 0.3 0.7l0.2 2.4-1.1 0.6-1.9-1.4-0.5-0.6-0.5-1.2s-2.3 0.6-2.3 0.6l0.2 1.3-0.1 0.8-0.9 2.1h-1.3l-1-2.1-0.1-0.8 0.2-1.3s-2.3-0.6-2.3-0.6l-0.5 1.2-0.4 0.6-1.9 1.4-1.2-0.6 0.3-2.4s0.3-0.7 0.3-0.7l0.8-1-1.7-1.7-1 0.8-0.7 0.3-2.4 0.3-0.6-1.1s1.4-2 1.4-2l0.6-0.4 1.2-0.5-0.6-2.3s-1.3 0.2-1.3 0.2l-0.8-0.1-2.1-1v-1.3s2.1-0.9 2.1-0.9l0.8-0.1s1.3 0.2 1.3 0.2l0.6-2.3-1.2-0.5-0.6-0.5-1.4-1.9 0.6-1.1 2.4 0.2 0.7 0.4 1 0.8 1.7-1.7-0.8-1.1s-0.3-0.7-0.3-0.7l-0.3-2.3 1.2-0.7 1.9 1.4 0.4 0.7 0.5 1.2s2.3-0.6 2.3-0.6"
            })
          )
        )
      ),
      React.createElement(
        "g",
        { id: "layer3" },
        React.createElement("path", {
          id: "app1",
          transform: "matrix(0,0,0,0,0,0)",
          fill: "#0f0",
          d: "m77.25 52.49h11.56v-1.774h-11.56v1.774m0 6.246h15.12v-1.786h-15.12v1.786m-6.222 8.919c-0.97 0-1.774-0.7807-1.774-1.786v-22.31c0-0.8753 0.7334-1.762 1.751-1.762h30.29c0.9463 0 1.739 0.828 1.739 1.739v22.34c0 0.9818-0.8162 1.774-1.762 1.774h-7.57s-7.559 8.907-7.559 8.907v-8.907h-15.12m-7.074 15.6c-6.506 0-12.3-5.453-12.3-13.79 0-6.47 4.897-13.12 12.08-13.12 0.9936 0 1.952 0.1301 2.863 0.3785v9.416c0.2011 2.389 1.904 4.093 4.412 4.187h4.826c-0.2602 7.795-6.163 12.93-11.88 12.93m-24.8 27.14c0.556-5.974 1.313-14.11 2.756-18.24 0.6388-1.857 1.597-3.206 3.146-4.329 0.9936-0.7452 4.542-2.721 5.205-3.04 1.147-0.5914 2.33-0.9108 3.336 0 6.033 5.347 14.37 5.193 20.5 0.01183 0.6979-0.7216 1.833-0.5323 2.567-0.2366 1.171 0.4377 4.921 2.661 5.63 3.123 2.07 1.36 3.206 3.182 4.034 6.6 1.053 4.601 1.68 10.49 2.389 16.11h-49.56"
        })
      )
    );
  };

  return Svg;
}(Component);

export default Svg;