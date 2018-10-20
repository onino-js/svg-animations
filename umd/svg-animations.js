/*!
 * svg-animations v1.0.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("svg.js"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "svg.js"], factory);
	else if(typeof exports === 'object')
		exports["SvgAnimation"] = factory(require("react"), require("svg.js"));
	else
		root["SvgAnimation"] = factory(root["React"], root["SVG"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: external {"root":"SVG","commonjs2":"svg.js","commonjs":"svg.js","amd":"svg.js"}
var external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_ = __webpack_require__(1);
var external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_default = /*#__PURE__*/__webpack_require__.n(external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_);

// CONCATENATED MODULE: ./src/bottle-machine/BottleMachine.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BottleMachine_FactorySvg = function (_Component) {
  _inherits(FactorySvg, _Component);

  function FactorySvg(props) {
    _classCallCheck(this, FactorySvg);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  FactorySvg.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var bottles = external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_default.a.get("bottles");
    var mobile = external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_default.a.get("mobile");
    var bouchon = external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_default.a.get("bouchonMob");
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
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "svg",
      {
        id: "svg-container",
        width: width,
        version: "1.1",
        viewBox: "100 0 5000 4960"
      },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        "defs",
        { id: "defs4825" },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "mask",
          { id: "mask5845" },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
            id: "path5847",
            d: "m200.1 952.2-5.657-1574 385.4-182.4 5.303-2683 4215-8.839v2754h200v1695z",
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "10.29",
            fill: "#fff"
          })
        )
      ),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        "g",
        { id: "layer1", transform: "translate(0 3908)" },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "g",
          { id: "g4957", mask: "url(#mask5845)" },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            "g",
            { id: "static", transform: "matrix(1 0 0 1.094 0 76.8)" },
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
              id: "path5484",
              fill: "#b3b3b3",
              d: "m2513-3121h-531.7c-153.1 0-277.1 124.1-277.1 277.1v2025h808.8v-2302"
            }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
              id: "rect5486",
              transform: "matrix(2.679 0 0 2.679 -3713 -1397)",
              height: "856.7",
              width: "112.1",
              y: "-640.9",
              x: "2212",
              fill: "#ccc"
            })
          ),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            "g",
            { id: "g6585", transform: "matrix(9.42 0 0 9.42 5057 -3562)" },
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "chariot" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6439",
                d: "m-179.1 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6441",
                d: "m-440.9 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6447",
                d: "m-156.8 329.6c0 11.17-4.462 21.28-11.69 28.61-7.225 7.323-17.2 11.84-28.23 11.84h-262c-10.89 0-20.75-4.408-27.96-11.59-2.753-2.738-5.117-5.881-7.01-9.335-2.446-4.501-4.073-9.521-4.677-14.86-0.174-1.535-0.2661-3.091-0.2661-4.667 0-1.577 0.0921-3.132 0.2661-4.667 0.6038-5.342 2.231-10.36 4.677-14.86 1.832-3.34 4.104-6.4 6.744-9.075 0.0921-0.0933 0.174-0.1763 0.2661-0.2593 7.205-7.177 17.07-11.59 27.96-11.59h262c22.04 0 39.91 18.11 39.91 40.45",
                fill: "#d3674a"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6457",
                d: "m-65.91 370.1h-262c-22.04 0-39.91-18.11-39.91-40.45s17.87-40.45 39.91-40.45h262c22.04 0 39.91 18.11 39.91 40.45s-17.87 40.45-39.91 40.45",
                fill: "#ef7954"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "circle6459",
                fill: "#bf5843",
                d: "m-303.6 329.6c0.00001 6.189-2.426 12.12-6.744 16.5-4.318 4.376-10.17 6.835-16.28 6.835-6.107 0-11.96-2.459-16.28-6.835-4.318-4.376-6.744-10.31-6.744-16.5 0-12.89 10.31-23.34 23.03-23.34s23.03 10.45 23.03 23.34"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "circle6461",
                fill: "#bf5843",
                d: "m-213.8 329.6c0 6.189-2.426 12.12-6.744 16.5-4.318 4.376-10.17 6.835-16.28 6.835-6.107 0-11.96-2.459-16.28-6.835-4.318-4.376-6.744-10.31-6.744-16.5 0-6.189 2.426-12.12 6.744-16.5 4.318-4.376 10.17-6.835 16.28-6.835 12.72 0 23.03 10.45 23.03 23.34"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "circle6463",
                fill: "#bf5843",
                d: "m-127.8 329.6c0 6.189-2.426 12.12-6.744 16.5-4.318 4.376-10.17 6.835-16.28 6.835-6.107 0-11.96-2.459-16.28-6.835-4.318-4.376-6.744-10.31-6.744-16.5 0-12.89 10.31-23.34 23.03-23.34s23.03 10.45 23.03 23.34"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6465",
                d: "m-41.83 329.6c0 12.89-10.32 23.34-23.03 23.34-4.81 0-9.272-1.494-12.97-4.045-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 3.695-2.552 8.157-4.045 12.97-4.045 12.71 0 23.03 10.44 23.03 23.34",
                fill: "#bf5843"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6467",
                d: "m-67.77 329.6c0 8.018-3.981 15.09-10.06 19.29-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 6.079 4.201 10.06 11.27 10.06 19.29",
                fill: "#d3674a"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6469",
                d: "m-153.7 329.6c0 8.018-3.981 15.09-10.06 19.29-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 6.079 4.201 10.06 11.27 10.06 19.29",
                fill: "#d3674a"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6471",
                d: "m-239.7 329.6c0 8.018-3.981 15.09-10.06 19.29-6.079-4.201-10.06-11.27-10.06-19.29 0-8.018 3.981-15.09 10.06-19.29 6.079 4.201 10.06 11.27 10.06 19.29",
                fill: "#d3674a"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6473",
                d: "m-329.5 329.6c0 3.184-0.6243 6.223-1.77 8.992-1.73 4.201-4.626 7.769-8.29 10.3-3.664-2.531-6.56-6.099-8.29-10.3-1.146-2.769-1.77-5.808-1.77-8.992 0-1.597 0.1535-3.153 0.4605-4.667 1.208-6.057 4.728-11.26 9.6-14.62 4.871 3.361 8.392 8.567 9.6 14.62 0.307 1.513 0.4605 3.069 0.4605 4.667",
                fill: "#d3674a"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6537",
                d: "m-318.7 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6539",
                d: "m-327.1 324.9v13.66h-20.8c-1.146-2.769-1.77-5.808-1.77-8.992 0-1.597 0.1535-3.153 0.4605-4.667h22.11",
                fill: "#b3b3b3"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6541",
                d: "m-56.92 490.1h-16.81v-156.6c0-4.706 3.764-8.521 8.407-8.521s8.407 3.815 8.407 8.521v156.6",
                fill: "#b3b3b3"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path6543",
                d: "m-65.32 324.9v13.66h-20.8c-1.146-2.769-1.77-5.808-1.77-8.992 0-1.597 0.1535-3.153 0.4605-4.667h22.11",
                fill: "#b3b3b3"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                id: "rect6545",
                transform: "matrix(1.023 0 0 1.037 -498.6 18.17)",
                height: "15",
                width: "103",
                y: "410.6",
                x: "56.34",
                fill: "#b3b3b3"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
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
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            "g",
            { id: "mobile", transform: "translate(0,-220)" },
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "bouchonMob", transform: "translate(-.00006884 -100 )" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                id: "rect5524-7-1",
                transform: "matrix(2.679 0 0 2.679 -2277 -1521)",
                height: "45.01",
                width: "78.78",
                y: "-258",
                x: "1845",
                fill: "#ef7954"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                id: "rect5526-5-9",
                transform: "matrix(2.679 0 0 2.679 -2277 -1521)",
                height: "45.01",
                width: "31.51",
                y: "-258",
                x: "1845",
                fill: "#d3674a"
              })
            ),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
              id: "rect5558",
              height: "195.9",
              width: "325.6",
              y: "-2419",
              x: "2615",
              fill: "#ccc"
            }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
              id: "path5564",
              fill: "#ccc",
              d: "m2822-3125h-294.7v706.1h501v-499.8c0-114-92.38-206.3-206.3-206.3"
            }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
              id: "rect5566",
              height: "706.1",
              width: "399.8",
              y: "-3125",
              x: "2341",
              fill: "#b3b3b3"
            }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
              id: "rect5568",
              height: "196",
              width: "66.85",
              y: "-2419",
              x: "2615",
              fill: "#b3b3b3"
            }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
              id: "rect5572",
              height: "257.8",
              width: "45.23",
              y: "-2901",
              x: "2298",
              fill: "#999"
            }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("polygon", {
              id: "polygon5574",
              points: "2615 -2233 2615 -2289 2941 -2357 2941 -2301",
              fill: "#b3b3b3"
            }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("polygon", {
              id: "polygon5576",
              points: "2615 -2368 2860 -2419 2941 -2419 2941 -2380 2615 -2312",
              fill: "#b3b3b3"
            })
          ),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            "g",
            { id: "bottles" },
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "g4336" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                "g",
                { id: "bouchon" },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                  id: "rect5524",
                  transform: "matrix(2.679 0 0 2.679 -3877 -1381)",
                  height: "45.01",
                  width: "78.78",
                  y: "-258",
                  x: "1845",
                  fill: "#ef7954"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                  id: "rect5526",
                  transform: "matrix(2.679 0 0 2.679 -3877 -1381)",
                  height: "45.01",
                  width: "31.51",
                  y: "-258",
                  x: "1845",
                  fill: "#d3674a"
                })
              ),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                "g",
                { id: "bottle" },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5518",
                  fill: "#62af68",
                  d: "m1428-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5520",
                  fill: "#77c67f",
                  d: "m1428-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5522",
                  opacity: "0.49",
                  fill: "#f2f2f2",
                  d: "m1335-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
                })
              )
            ),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "g4336-3" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                "g",
                { id: "bouchon-6" },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                  id: "rect5524-7",
                  transform: "matrix(2.679 0 0 2.679 -3077 -1381)",
                  height: "45.01",
                  width: "78.78",
                  y: "-258",
                  x: "1845",
                  fill: "#ef7954"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                  id: "rect5526-5",
                  transform: "matrix(2.679 0 0 2.679 -3077 -1381)",
                  height: "45.01",
                  width: "31.51",
                  y: "-258",
                  x: "1845",
                  fill: "#d3674a"
                })
              ),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                "g",
                { id: "bottle-3" },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5518-5",
                  fill: "#62af68",
                  d: "m2228-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5520-6",
                  fill: "#77c67f",
                  d: "m2228-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5522-2",
                  opacity: "0.49",
                  fill: "#f2f2f2",
                  d: "m2135-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
                })
              )
            ),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "bottle-3-4-0" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5518-5-7-3",
                fill: "#62af68",
                d: "m3828-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5520-6-8-6",
                fill: "#77c67f",
                d: "m3828-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5522-2-4-1",
                opacity: "0.49",
                fill: "#f2f2f2",
                d: "m3735-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
              })
            ),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "bottle-3-4-0-0" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5518-5-7-3-6",
                fill: "#62af68",
                d: "m4628-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5520-6-8-6-3",
                fill: "#77c67f",
                d: "m4628-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5522-2-4-1-2",
                opacity: "0.49",
                fill: "#f2f2f2",
                d: "m4535-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
              })
            ),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "bottle-3-4-0-0-9" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5518-5-7-3-6-3",
                fill: "#62af68",
                d: "m5428-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5520-6-8-6-3-7",
                fill: "#77c67f",
                d: "m5428-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5522-2-4-1-2-4",
                opacity: "0.49",
                fill: "#f2f2f2",
                d: "m5335-1489v668.5h-117.6v-668.5c0-106.4-33.17-180.9-33.17-231v-225.1h39.19v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 91.03 112 91.03 162"
              })
            ),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "g4336-3-2" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                "g",
                { id: "bouchon-6-5" },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                  id: "rect5524-7-4",
                  transform: "matrix(2.679 0 0 2.679 -2277 -1381)",
                  height: "45.01",
                  width: "78.78",
                  y: "-258",
                  x: "1845",
                  fill: "#ef7954"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
                  id: "rect5526-5-7",
                  transform: "matrix(2.679 0 0 2.679 -2277 -1381)",
                  height: "45.01",
                  width: "31.51",
                  y: "-258",
                  x: "1845",
                  fill: "#d3674a"
                })
              ),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                "g",
                { id: "bottle-3-4" },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5518-5-4",
                  fill: "#62af68",
                  d: "m3028-1489v668.6h-512v-668.6c0-25 7-49 20-69s32-36 55-46c46-20 75-66 75-116v-225h211v225c0 25 8 49 21 69s32 37 55 47c46 20 75 65 75 115"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5520-6-3",
                  fill: "#77c67f",
                  d: "m3028-1489v668.6h-428v-668.6c0-25 7-49 21-69 13-20 32-36 54-46 46-20 76-66 76-116v-225h126v225c0 25 8 49 21 69s32 37 55 47c46 20 75 65 75 115"
                }),
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                  id: "path5522-2-0",
                  opacity: "0.49",
                  fill: "#f2f2f2",
                  d: "m2935-1489v668.6h-118v-668.6c0-106-33-181-33-231v-225h39v225c0 25 8 49 21 69s91 112 91 162"
                })
              )
            ),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "g",
              { id: "bottle-3-4-0-0-7", transform: "translate(800)" },
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5518-5-7-3-6-8",
                fill: "#62af68",
                d: "m4628-1489v668.5h-512.6v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 31.93-36.54 54.82-46.58 45.86-20.08 75.44-65.4 75.44-115.5v-225.1h211v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
                id: "path5520-6-8-6-3-6",
                fill: "#77c67f",
                d: "m4628-1489v668.5h-428.2v-668.5c0-24.97 7.417-48.85 20.53-68.93 13.12-20.08 32.02-36.54 54.91-46.58 45.77-20.08 75.35-65.4 75.35-115.5v-225.1h126.6v225.1c0 25.06 7.417 48.94 20.53 69.02 13.12 20.08 31.93 36.45 54.82 46.49 45.86 20.17 75.44 65.49 75.44 115.5"
              }),
              external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
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
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

/* harmony default export */ var BottleMachine = (BottleMachine_FactorySvg);
// CONCATENATED MODULE: ./src/app-responsive/AppResponsive.js
function AppResponsive_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppResponsive_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AppResponsive_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AppResponsive_Svg = function (_Component) {
  AppResponsive_inherits(Svg, _Component);

  function Svg(props) {
    AppResponsive_classCallCheck(this, Svg);

    var _this = AppResponsive_possibleConstructorReturn(this, _Component.call(this, props));

    _this.initializeRects = function (table) {
      var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

      table.forEach(function (item) {
        external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_default.a.get(item.id).attr({
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

      var el = external_root_SVG_commonjs2_svg_js_commonjs_svg_js_amd_svg_js_default.a.get(id);
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
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "svg",
      { id: "svg2", width: "600", version: "1.1", viewBox: "0 0 380 290" },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        "g",
        { id: "layer1", transform: "translate(0 -762.4)" },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "g",
          { id: "g6521" },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
            id: "rect6935",
            ry: "15.9",
            height: "268.8",
            width: "361.8",
            stroke: "#000",
            y: "772.9",
            x: "8.231",
            strokeWidth: "9.875"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
            id: "rect3336-0-3",
            fill: "#fff",
            d: "m22.61 778h333c6.2 0 11.2 4.9 11.2 10.9v222.1c0 6-5 11-11.2 11h-333c-6.17 0-11.14-5-11.14-11v-222.1c0-6 4.97-10.9 11.15-10.9"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
            id: "path3353-1-1-9",
            cy: "757.2",
            cx: "390.4",
            r: "2.247",
            fill: "#fff"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
            id: "Rect4",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "902.1",
            x: "133.9",
            strokeWidth: ".3143",
            fill: "#003380"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
            id: "Rect3",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "785.3",
            x: "250.1",
            strokeWidth: ".6285",
            fill: "#00d455"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
            id: "Rect5",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "902.1",
            x: "250.1",
            strokeWidth: ".3143",
            fill: "#f60"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
            id: "Rect6",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "903.1",
            x: "17.5",
            strokeWidth: ".3086",
            fill: "#ff0"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
            id: "Rect2",
            height: "111.1",
            width: "111.1",
            stroke: "#3d8d46",
            y: "785.3",
            x: "133.9",
            strokeWidth: ".3143",
            fill: "#c83737"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("rect", {
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
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

/* harmony default export */ var AppResponsive = (AppResponsive_Svg);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/three-gears/ThreeGears.js
function ThreeGears_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ThreeGears_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ThreeGears_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ThreeGears_ThreeGears = function (_Component) {
  ThreeGears_inherits(ThreeGears, _Component);

  function ThreeGears(props) {
    ThreeGears_classCallCheck(this, ThreeGears);

    var _this = ThreeGears_possibleConstructorReturn(this, _Component.call(this, props));

    _this.rotate = function (svgRef, velocity) {
      var newValue = "rotate(" + svgRef.inc + ", " + svgRef.x + ", " + svgRef.y + ")";
      svgRef.el.setAttribute("transform", newValue);
      svgRef.inc += 1 * velocity;
    };

    _this.buildSvgRef = function (refId) {
      var el = document.getElementById(refId);
      var bbox = el.getBBox();
      return {
        el: el,
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
        inc: 0
      };
    };

    _this.animate = function () {
      _this.rotate(_this.wheel1, 1);
      _this.rotate(_this.wheel2, -2);
      _this.rotate(_this.wheel3, -2);
      _this.animation = window.requestAnimationFrame(_this.animate);
    };

    _this.buildSvg = function () {
      _this.wheel1 = _this.buildSvgRef(_this.props.id + 1);
      _this.wheel2 = _this.buildSvgRef(_this.props.id + 2);
      _this.wheel3 = _this.buildSvgRef(_this.props.id + 3);
    };

    _this.wheel1;
    _this.inc = 0;
    return _this;
  }

  ThreeGears.prototype.componentDidMount = function componentDidMount() {
    this.buildSvg();
    this.animate();
  };

  ThreeGears.prototype.componentWillUnmount = function componentWillUnmount() {
    window.cancelAnimationFrame(this.animation);
  };

  ThreeGears.prototype.render = function render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "svg",
      {
        id: "svg2",
        height: "500",
        width: "500",
        version: "1.1",
        viewBox: "0 0 500 500"
      },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
        id: this.props.id + 1,
        d: "M350.7 241.6C350.7 241.6 353.324 241.3887 353.324 241.3887C353.324 241.3887 360.322 242.5347 360.322 242.5347C360.322 242.5347 370.049 246.6047 370.049 246.6047C370.049 246.6047 370.049 253.4227 370.049 253.4227C370.049 253.4227 360.322 257.4927 360.322 257.4927C360.322 257.4927 353.324 258.6387 353.324 258.6387C353.324 258.6387 350.7 258.4274 350.7 258.4274C350.7 258.4274 349.317 268.9274 349.317 268.9274C349.317 268.9274 351.907 269.4025 351.907 269.4025C351.907 269.4025 358.37 272.3205 358.37 272.3205C358.37 272.3205 366.712 278.7695 366.712 278.7695C366.712 278.7695 364.947 285.3545 364.947 285.3545C364.947 285.3545 354.497 286.7685 354.497 286.7685C354.497 286.7685 347.441 286.0645 347.441 286.0645C347.441 286.0645 344.961 285.1811 344.961 285.1811C344.961 285.1811 340.908 294.9671 340.908 294.9671C340.908 294.9671 343.287 296.0961 343.287 296.0961C343.287 296.0961 348.774 300.5881 348.774 300.5881C348.774 300.5881 355.163 308.9761 355.163 308.9761C355.163 308.9761 351.754 314.8801 351.754 314.8801C351.754 314.8801 341.294 313.5411 341.294 313.5411C341.294 313.5411 334.66 311.0351 334.66 311.0351C334.66 311.0351 332.493 309.5401 332.493 309.5401C332.493 309.5401 326.045 317.9431 326.045 317.9431C326.045 317.9431 328.05 319.6491 328.05 319.6491C328.05 319.6491 332.188 325.4081 332.188 325.4081C332.188 325.4081 336.188 335.1641 336.188 335.1641C336.188 335.1641 331.367 339.9851 331.367 339.9851C331.367 339.9851 321.611 335.9851 321.611 335.9851C321.611 335.9851 315.852 331.8471 315.852 331.8471C315.852 331.8471 314.146 329.8421 314.146 329.8421C314.146 329.8421 305.743 336.2901 305.743 336.2901C305.743 336.2901 307.238 338.4571 307.238 338.4571C307.238 338.4571 309.744 345.0911 309.744 345.0911C309.744 345.0911 311.083 355.5511 311.083 355.5511C311.083 355.5511 305.179 358.9601 305.179 358.9601C305.179 358.9601 296.791 352.5711 296.791 352.5711C296.791 352.5711 292.299 347.0841 292.299 347.0841C292.299 347.0841 291.17 344.7051 291.17 344.7051C291.17 344.7051 281.384 348.7581 281.384 348.7581C281.384 348.7581 282.2674 351.2381 282.2674 351.2381C282.2674 351.2381 282.9714 358.2941 282.9714 358.2941C282.9714 358.2941 281.5574 368.7441 281.5574 368.7441C281.5574 368.7441 274.9724 370.5091 274.9724 370.5091C274.9724 370.5091 268.5234 362.1671 268.5234 362.1671C268.5234 362.1671 265.6054 355.7041 265.6054 355.7041C265.6054 355.7041 265.1303 353.1141 265.1303 353.1141C265.1303 353.1141 254.6303 354.4971 254.6303 354.4971C254.6303 354.4971 254.8416 357.1211 254.8416 357.1211C254.8416 357.1211 253.6956 364.1191 253.6956 364.1191C253.6956 364.1191 249.6256 373.8461 249.6256 373.8461C249.6256 373.8461 242.8076 373.8461 242.8076 373.8461C242.8076 373.8461 238.7376 364.1191 238.7376 364.1191C238.7376 364.1191 237.5916 357.1211 237.5916 357.1211C237.5916 357.1211 237.8029 354.4971 237.8029 354.4971C237.8029 354.4971 227.3029 353.1141 227.3029 353.1141C227.3029 353.1141 226.8278 355.7041 226.8278 355.7041C226.8278 355.7041 223.9098 362.1671 223.9098 362.1671C223.9098 362.1671 217.4608 370.5091 217.4608 370.5091C217.4608 370.5091 210.8758 368.7441 210.8758 368.7441C210.8758 368.7441 209.4618 358.2941 209.4618 358.2941C209.4618 358.2941 210.1658 351.2381 210.1658 351.2381C210.1658 351.2381 211.0492 348.7581 211.0492 348.7581C211.0492 348.7581 201.2632 344.7051 201.2632 344.7051C201.2632 344.7051 200.1342 347.0841 200.1342 347.0841C200.1342 347.0841 195.6422 352.5711 195.6422 352.5711C195.6422 352.5711 187.2542 358.9601 187.2542 358.9601C187.2542 358.9601 181.3502 355.5511 181.3502 355.5511C181.3502 355.5511 182.6892 345.0911 182.6892 345.0911C182.6892 345.0911 185.1952 338.4571 185.1952 338.4571C185.1952 338.4571 186.6902 336.2901 186.6902 336.2901C186.6902 336.2901 178.2872 329.8421 178.2872 329.8421C178.2872 329.8421 176.5812 331.8471 176.5812 331.8471C176.5812 331.8471 170.8222 335.9851 170.8222 335.9851C170.8222 335.9851 161.0662 339.9851 161.0662 339.9851C161.0662 339.9851 156.2452 335.1641 156.2452 335.1641C156.2452 335.1641 160.2452 325.4081 160.2452 325.4081C160.2452 325.4081 164.3832 319.6491 164.3832 319.6491C164.3832 319.6491 166.3882 317.9431 166.3882 317.9431C166.3882 317.9431 159.9402 309.5401 159.9402 309.5401C159.9402 309.5401 157.7732 311.0351 157.7732 311.0351C157.7732 311.0351 151.1392 313.5411 151.1392 313.5411C151.1392 313.5411 140.6792 314.8801 140.6792 314.8801C140.6792 314.8801 137.2702 308.9761 137.2702 308.9761C137.2702 308.9761 143.6592 300.5881 143.6592 300.5881C143.6592 300.5881 149.1462 296.0961 149.1462 296.0961C149.1462 296.0961 151.5252 294.9671 151.5252 294.9671C151.5252 294.9671 147.4722 285.1811 147.4722 285.1811C147.4722 285.1811 144.9922 286.0645 144.9922 286.0645C144.9922 286.0645 137.9362 286.7685 137.9362 286.7685C137.9362 286.7685 127.4862 285.3545 127.4862 285.3545C127.4862 285.3545 125.7212 278.7695 125.7212 278.7695C125.7212 278.7695 134.0632 272.3205 134.0632 272.3205C134.0632 272.3205 140.5262 269.4025 140.5262 269.4025C140.5262 269.4025 143.1162 268.9274 143.1162 268.9274C143.1162 268.9274 141.7332 258.4274 141.7332 258.4274C141.7332 258.4274 139.1092 258.6387 139.1092 258.6387C139.1092 258.6387 132.1112 257.4927 132.1112 257.4927C132.1112 257.4927 122.3842 253.4227 122.3842 253.4227C122.3842 253.4227 122.3842 246.6047 122.3842 246.6047C122.3842 246.6047 132.1112 242.5347 132.1112 242.5347C132.1112 242.5347 139.1092 241.3887 139.1092 241.3887C139.1092 241.3887 141.7332 241.6 141.7332 241.6C141.7332 241.6 143.1162 231.1 143.1162 231.1C143.1162 231.1 140.5262 230.6249 140.5262 230.6249C140.5262 230.6249 134.0632 227.7069 134.0632 227.7069C134.0632 227.7069 125.7212 221.2579 125.7212 221.2579C125.7212 221.2579 127.4862 214.6729 127.4862 214.6729C127.4862 214.6729 137.9362 213.2589 137.9362 213.2589C137.9362 213.2589 144.9922 213.9629 144.9922 213.9629C144.9922 213.9629 147.4722 214.8463 147.4722 214.8463C147.4722 214.8463 151.5252 205.0603 151.5252 205.0603C151.5252 205.0603 149.1462 203.9313 149.1462 203.9313C149.1462 203.9313 143.6592 199.4393 143.6592 199.4393C143.6592 199.4393 137.2702 191.0513 137.2702 191.0513C137.2702 191.0513 140.6792 185.1473 140.6792 185.1473C140.6792 185.1473 151.1392 186.4863 151.1392 186.4863C151.1392 186.4863 157.7732 188.9923 157.7732 188.9923C157.7732 188.9923 159.9402 190.4873 159.9402 190.4873C159.9402 190.4873 166.3882 182.0843 166.3882 182.0843C166.3882 182.0843 164.3832 180.3783 164.3832 180.3783C164.3832 180.3783 160.2452 174.6193 160.2452 174.6193C160.2452 174.6193 156.2452 164.8633 156.2452 164.8633C156.2452 164.8633 161.0662 160.0423 161.0662 160.0423C161.0662 160.0423 170.8222 164.0423 170.8222 164.0423C170.8222 164.0423 176.5812 168.1803 176.5812 168.1803C176.5812 168.1803 178.2872 170.1853 178.2872 170.1853C178.2872 170.1853 186.6902 163.7373 186.6902 163.7373C186.6902 163.7373 185.1952 161.5703 185.1952 161.5703C185.1952 161.5703 182.6892 154.9363 182.6892 154.9363C182.6892 154.9363 181.3502 144.4763 181.3502 144.4763C181.3502 144.4763 187.2542 141.0673 187.2542 141.0673C187.2542 141.0673 195.6422 147.4563 195.6422 147.4563C195.6422 147.4563 200.1342 152.9433 200.1342 152.9433C200.1342 152.9433 201.2632 155.3223 201.2632 155.3223C201.2632 155.3223 211.0492 151.2693 211.0492 151.2693C211.0492 151.2693 210.1658 148.7893 210.1658 148.7893C210.1658 148.7893 209.4618 141.7333 209.4618 141.7333C209.4618 141.7333 210.8758 131.2833 210.8758 131.2833C210.8758 131.2833 217.4608 129.5183 217.4608 129.5183C217.4608 129.5183 223.9098 137.8603 223.9098 137.8603C223.9098 137.8603 226.8278 144.3233 226.8278 144.3233C226.8278 144.3233 227.3029 146.9133 227.3029 146.9133C227.3029 146.9133 237.8029 145.5303 237.8029 145.5303C237.8029 145.5303 237.5916 142.9063 237.5916 142.9063C237.5916 142.9063 238.7376 135.9083 238.7376 135.9083C238.7376 135.9083 242.8076 126.1813 242.8076 126.1813C242.8076 126.1813 249.6256 126.1813 249.6256 126.1813C249.6256 126.1813 253.6956 135.9083 253.6956 135.9083C253.6956 135.9083 254.8416 142.9063 254.8416 142.9063C254.8416 142.9063 254.6303 145.5303 254.6303 145.5303C254.6303 145.5303 265.1303 146.9133 265.1303 146.9133C265.1303 146.9133 265.6054 144.3233 265.6054 144.3233C265.6054 144.3233 268.5234 137.8603 268.5234 137.8603C268.5234 137.8603 274.9724 129.5183 274.9724 129.5183C274.9724 129.5183 281.5574 131.2833 281.5574 131.2833C281.5574 131.2833 282.9714 141.7333 282.9714 141.7333C282.9714 141.7333 282.2674 148.7893 282.2674 148.7893C282.2674 148.7893 281.384 151.2693 281.384 151.2693C281.384 151.2693 291.17 155.3223 291.17 155.3223C291.17 155.3223 292.299 152.9433 292.299 152.9433C292.299 152.9433 296.791 147.4563 296.791 147.4563C296.791 147.4563 305.179 141.0673 305.179 141.0673C305.179 141.0673 311.083 144.4763 311.083 144.4763C311.083 144.4763 309.744 154.9363 309.744 154.9363C309.744 154.9363 307.238 161.5703 307.238 161.5703C307.238 161.5703 305.743 163.7373 305.743 163.7373C305.743 163.7373 314.146 170.1853 314.146 170.1853C314.146 170.1853 315.852 168.1803 315.852 168.1803C315.852 168.1803 321.611 164.0423 321.611 164.0423C321.611 164.0423 331.367 160.0423 331.367 160.0423C331.367 160.0423 336.188 164.8633 336.188 164.8633C336.188 164.8633 332.188 174.6193 332.188 174.6193C332.188 174.6193 328.05 180.3783 328.05 180.3783C328.05 180.3783 326.045 182.0843 326.045 182.0843C326.045 182.0843 332.493 190.4873 332.493 190.4873C332.493 190.4873 334.66 188.9923 334.66 188.9923C334.66 188.9923 341.294 186.4863 341.294 186.4863C341.294 186.4863 351.754 185.1473 351.754 185.1473C351.754 185.1473 355.163 191.0513 355.163 191.0513C355.163 191.0513 348.774 199.4393 348.774 199.4393C348.774 199.4393 343.287 203.9313 343.287 203.9313C343.287 203.9313 340.908 205.0603 340.908 205.0603C340.908 205.0603 344.961 214.8463 344.961 214.8463C344.961 214.8463 347.441 213.9629 347.441 213.9629C347.441 213.9629 354.497 213.2589 354.497 213.2589C354.497 213.2589 364.947 214.6729 364.947 214.6729C364.947 214.6729 366.712 221.2579 366.712 221.2579C366.712 221.2579 358.37 227.7069 358.37 227.7069C358.37 227.7069 351.907 230.6249 351.907 230.6249C351.907 230.6249 349.317 231.1 349.317 231.1C349.317 231.1 350.7 241.6 350.7 241.6",
        fill: "#00f"
      }),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
        id: this.props.id + 2,
        d: "m122.3 243.1s6.017-0.8835 6.017-0.8835l3.529 0.343 9.953 4.505v5.915l-9.953 4.505-3.529 0.343s-6.017-0.8835-6.017-0.8835l-2.854 10.65 5.652 2.243 2.885 2.062s6.367 8.878 6.367 8.878l-2.957 5.122-10.87-1.075-3.228-1.467-4.769-3.773-7.798 7.798 3.773 4.769s1.467 3.228 1.467 3.228l1.074 10.87-5.122 2.957-8.878-6.367-2.062-2.885-2.243-5.652-10.65 2.854 0.8835 6.017-0.343 3.529s-4.505 9.953-4.505 9.953h-5.915s-4.505-9.953-4.505-9.953l-0.343-3.529 0.8835-6.017-10.65-2.854-2.243 5.652-2.062 2.885-8.878 6.367-5.122-2.957 1.075-10.87s1.467-3.228 1.467-3.228l3.773-4.769-7.798-7.798-4.769 3.773-3.228 1.467-10.87 1.075-2.957-5.122s6.367-8.878 6.367-8.878l2.885-2.062 5.652-2.243-2.854-10.65s-6.017 0.8835-6.017 0.8835l-3.529-0.343-9.953-4.505v-5.915l9.953-4.505 3.529-0.343s6.017 0.8835 6.017 0.8835l2.854-10.65-5.652-2.243-2.885-2.062s-6.367-8.878-6.367-8.878l2.957-5.122 10.87 1.075 3.228 1.467 4.769 3.773 7.798-7.798-3.773-4.769s-1.467-3.228-1.467-3.228l-1.075-10.87 5.122-2.957 8.878 6.367 2.062 2.885 2.243 5.652 10.65-2.854-0.8835-6.017 0.343-3.529s4.505-9.953 4.505-9.953h5.915s4.505 9.953 4.505 9.953l0.343 3.529-0.8835 6.017 10.65 2.854 2.243-5.652 2.062-2.885 8.878-6.367 5.122 2.957-1.074 10.87s-1.467 3.228-1.467 3.228l-3.773 4.769 7.798 7.798 4.769-3.773 3.228-1.467 10.87-1.075 2.957 5.122s-6.367 8.878-6.367 8.878l-2.885 2.062-5.652 2.243 2.854 10.65",
        fill: "#f00"
      }),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
        id: this.props.id + 3,
        d: "m471.9 243.1s6.017-0.8835 6.017-0.8835l3.529 0.343 9.953 4.505v5.915l-9.953 4.505-3.529 0.343s-6.017-0.8835-6.017-0.8835l-2.854 10.65 5.652 2.243 2.885 2.062s6.367 8.878 6.367 8.878l-2.957 5.122-10.87-1.075-3.228-1.467-4.769-3.773-7.798 7.798 3.773 4.769s1.467 3.228 1.467 3.228l1.075 10.87-5.122 2.957-8.878-6.367-2.062-2.885-2.243-5.652-10.65 2.854 0.8835 6.017-0.343 3.529s-4.505 9.953-4.505 9.953h-5.915s-4.505-9.953-4.505-9.953l-0.343-3.529 0.8835-6.017-10.65-2.854-2.243 5.652-2.062 2.885-8.878 6.367-5.122-2.957 1.075-10.87s1.467-3.228 1.467-3.228l3.773-4.769-7.798-7.798-4.769 3.773-3.228 1.467-10.87 1.075-2.957-5.122s6.367-8.878 6.367-8.878l2.885-2.062 5.652-2.243-2.854-10.65s-6.017 0.8835-6.017 0.8835l-3.529-0.343-9.953-4.505v-5.915l9.953-4.505 3.529-0.343s6.017 0.8835 6.017 0.8835l2.854-10.65-5.652-2.243-2.885-2.062s-6.367-8.878-6.367-8.878l2.957-5.122 10.87 1.075 3.228 1.467 4.769 3.773 7.798-7.798-3.773-4.769s-1.467-3.228-1.467-3.228l-1.075-10.87 5.122-2.957 8.878 6.367 2.062 2.885 2.243 5.652 10.65-2.854-0.8835-6.017 0.343-3.529s4.505-9.953 4.505-9.953h5.915s4.505 9.953 4.505 9.953l0.343 3.529-0.8835 6.017 10.65 2.854 2.243-5.652 2.062-2.885 8.878-6.367 5.122 2.957-1.075 10.87s-1.467 3.228-1.467 3.228l-3.773 4.769 7.798 7.798 4.769-3.773 3.228-1.467 10.87-1.075 2.957 5.122s-6.367 8.878-6.367 8.878l-2.885 2.062-5.652 2.243 2.854 10.65",
        fill: "#0f0"
      })
    );
  };

  return ThreeGears;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

ThreeGears_ThreeGears.defaultProps = {
  id: "my-svg-animation"
};

ThreeGears_ThreeGears.propTypes = {
  id: prop_types_default.a.string.isRequired
};

/* harmony default export */ var three_gears_ThreeGears = (ThreeGears_ThreeGears);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleMachine", function() { return src_BottleMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppResponsive", function() { return src_AppResponsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeGears", function() { return src_ThreeGears; });




var src_BottleMachine = BottleMachine;
var src_AppResponsive = AppResponsive;
var src_ThreeGears = three_gears_ThreeGears;

/***/ })
/******/ ])["default"];
});