/*!
 * svg-animations v1.0.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["SvgAnimation"] = factory(require("react"));
	else
		root["SvgAnimation"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
* svg.js - A lightweight library for manipulating and animating SVG.
* @version 2.6.6
* https://svgdotjs.github.io/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Thu Aug 30 2018 11:37:58 GMT+0200 (GMT+02:00)
*/;
(function(root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
      return factory(root, root.document)
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(typeof window !== "undefined" ? window : this, function(window, document) {

// Find global reference - uses 'this' by default when available,
// falls back to 'window' otherwise (for bundlers like Webpack)
var globalRef = (typeof this !== "undefined") ? this : window;

// The main wrapping element
var SVG = globalRef.SVG = function(element) {
  if (SVG.supported) {
    element = new SVG.Doc(element)

    if(!SVG.parser.draw)
      SVG.prepare()

    return element
  }
}

// Default namespaces
SVG.ns    = 'http://www.w3.org/2000/svg'
SVG.xmlns = 'http://www.w3.org/2000/xmlns/'
SVG.xlink = 'http://www.w3.org/1999/xlink'
SVG.svgjs = 'http://svgjs.com/svgjs'

// Svg support test
SVG.supported = (function() {
  return !! document.createElementNS &&
         !! document.createElementNS(SVG.ns,'svg').createSVGRect
})()

// Don't bother to continue if SVG is not supported
if (!SVG.supported) return false

// Element id sequence
SVG.did  = 1000

// Get next named element id
SVG.eid = function(name) {
  return 'Svgjs' + capitalize(name) + (SVG.did++)
}

// Method for element creation
SVG.create = function(name) {
  // create element
  var element = document.createElementNS(this.ns, name)

  // apply unique id
  element.setAttribute('id', this.eid(name))

  return element
}

// Method for extending objects
SVG.extend = function() {
  var modules, methods, key, i

  // Get list of modules
  modules = [].slice.call(arguments)

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--)
    if (modules[i])
      for (key in methods)
        modules[i].prototype[key] = methods[key]

  // Make sure SVG.Set inherits any newly added methods
  if (SVG.Set && SVG.Set.inherit)
    SVG.Set.inherit()
}

// Invent new element
SVG.invent = function(config) {
  // Create element initializer
  var initializer = typeof config.create == 'function' ?
    config.create :
    function() {
      this.constructor.call(this, SVG.create(config.create))
    }

  // Inherit prototype
  if (config.inherit)
    initializer.prototype = new config.inherit

  // Extend with methods
  if (config.extend)
    SVG.extend(initializer, config.extend)

  // Attach construct method to parent
  if (config.construct)
    SVG.extend(config.parent || SVG.Container, config.construct)

  return initializer
}

// Adopt existing svg elements
SVG.adopt = function(node) {
  // check for presence of node
  if (!node) return null

  // make sure a node isn't already adopted
  if (node.instance) return node.instance

  // initialize variables
  var element

  // adopt with element-specific settings
  if (node.nodeName == 'svg')
    element = node.parentNode instanceof window.SVGElement ? new SVG.Nested : new SVG.Doc
  else if (node.nodeName == 'linearGradient')
    element = new SVG.Gradient('linear')
  else if (node.nodeName == 'radialGradient')
    element = new SVG.Gradient('radial')
  else if (SVG[capitalize(node.nodeName)])
    element = new SVG[capitalize(node.nodeName)]
  else
    element = new SVG.Element(node)

  // ensure references
  element.type  = node.nodeName
  element.node  = node
  node.instance = element

  // SVG.Class specific preparations
  if (element instanceof SVG.Doc)
    element.namespace().defs()

  // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
  element.setData(JSON.parse(node.getAttribute('svgjs:data')) || {})

  return element
}

// Initialize parsing element
SVG.prepare = function() {
  // Select document body and create invisible svg element
  var body = document.getElementsByTagName('body')[0]
    , draw = (body ? new SVG.Doc(body) : SVG.adopt(document.documentElement).nested()).size(2, 0)

  // Create parser object
  SVG.parser = {
    body: body || document.documentElement
  , draw: draw.style('opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden').node
  , poly: draw.polyline().node
  , path: draw.path().node
  , native: SVG.create('svg')
  }
}

SVG.parser = {
  native: SVG.create('svg')
}

document.addEventListener('DOMContentLoaded', function() {
  if(!SVG.parser.draw)
    SVG.prepare()
}, false)

// Storage for regular expressions
SVG.regex = {
  // Parse unit value
  numberAndUnit:    /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i

  // Parse hex value
, hex:              /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

  // Parse rgb value
, rgb:              /rgb\((\d+),(\d+),(\d+)\)/

  // Parse reference id
, reference:        /#([a-z0-9\-_]+)/i

  // splits a transformation chain
, transforms:       /\)\s*,?\s*/

  // Whitespace
, whitespace:       /\s/g

  // Test hex value
, isHex:            /^#[a-f0-9]{3,6}$/i

  // Test rgb value
, isRgb:            /^rgb\(/

  // Test css declaration
, isCss:            /[^:]+:[^;]+;?/

  // Test for blank string
, isBlank:          /^(\s+)?$/

  // Test for numeric string
, isNumber:         /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i

  // Test for percent value
, isPercent:        /^-?[\d\.]+%$/

  // Test for image url
, isImage:          /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i

  // split at whitespace and comma
, delimiter:        /[\s,]+/

  // The following regex are used to parse the d attribute of a path

  // Matches all hyphens which are not after an exponent
, hyphen:           /([^e])\-/gi

  // Replaces and tests for all path letters
, pathLetters:      /[MLHVCSQTAZ]/gi

  // yes we need this one, too
, isPathLetter:     /[MLHVCSQTAZ]/i

  // matches 0.154.23.45
, numbersWithDots:  /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi

  // matches .
, dots:             /\./g
}

SVG.utils = {
  // Map function
  map: function(array, block) {
    var i
      , il = array.length
      , result = []

    for (i = 0; i < il; i++)
      result.push(block(array[i]))

    return result
  }

  // Filter function
, filter: function(array, block) {
    var i
      , il = array.length
      , result = []

    for (i = 0; i < il; i++)
      if (block(array[i]))
        result.push(array[i])

    return result
  }

  // Degrees to radians
, radians: function(d) {
    return d % 360 * Math.PI / 180
  }

  // Radians to degrees
, degrees: function(r) {
    return r * 180 / Math.PI % 360
  }

, filterSVGElements: function(nodes) {
    return this.filter( nodes, function(el) { return el instanceof window.SVGElement })
  }

}

SVG.defaults = {
  // Default attribute values
  attrs: {
    // fill and stroke
    'fill-opacity':     1
  , 'stroke-opacity':   1
  , 'stroke-width':     0
  , 'stroke-linejoin':  'miter'
  , 'stroke-linecap':   'butt'
  , fill:               '#000000'
  , stroke:             '#000000'
  , opacity:            1
    // position
  , x:                  0
  , y:                  0
  , cx:                 0
  , cy:                 0
    // size
  , width:              0
  , height:             0
    // radius
  , r:                  0
  , rx:                 0
  , ry:                 0
    // gradient
  , offset:             0
  , 'stop-opacity':     1
  , 'stop-color':       '#000000'
    // text
  , 'font-size':        16
  , 'font-family':      'Helvetica, Arial, sans-serif'
  , 'text-anchor':      'start'
  }

}
// Module for color convertions
SVG.Color = function(color) {
  var match

  // initialize defaults
  this.r = 0
  this.g = 0
  this.b = 0

  if(!color) return

  // parse color
  if (typeof color === 'string') {
    if (SVG.regex.isRgb.test(color)) {
      // get rgb values
      match = SVG.regex.rgb.exec(color.replace(SVG.regex.whitespace,''))

      // parse numeric values
      this.r = parseInt(match[1])
      this.g = parseInt(match[2])
      this.b = parseInt(match[3])

    } else if (SVG.regex.isHex.test(color)) {
      // get hex values
      match = SVG.regex.hex.exec(fullHex(color))

      // parse numeric values
      this.r = parseInt(match[1], 16)
      this.g = parseInt(match[2], 16)
      this.b = parseInt(match[3], 16)

    }

  } else if (typeof color === 'object') {
    this.r = color.r
    this.g = color.g
    this.b = color.b

  }

}

SVG.extend(SVG.Color, {
  // Default to hex conversion
  toString: function() {
    return this.toHex()
  }
  // Build hex value
, toHex: function() {
    return '#'
      + compToHex(this.r)
      + compToHex(this.g)
      + compToHex(this.b)
  }
  // Build rgb value
, toRgb: function() {
    return 'rgb(' + [this.r, this.g, this.b].join() + ')'
  }
  // Calculate true brightness
, brightness: function() {
    return (this.r / 255 * 0.30)
         + (this.g / 255 * 0.59)
         + (this.b / 255 * 0.11)
  }
  // Make color morphable
, morph: function(color) {
    this.destination = new SVG.Color(color)

    return this
  }
  // Get morphed color at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // normalise pos
    pos = pos < 0 ? 0 : pos > 1 ? 1 : pos

    // generate morphed color
    return new SVG.Color({
      r: ~~(this.r + (this.destination.r - this.r) * pos)
    , g: ~~(this.g + (this.destination.g - this.g) * pos)
    , b: ~~(this.b + (this.destination.b - this.b) * pos)
    })
  }

})

// Testers

// Test if given value is a color string
SVG.Color.test = function(color) {
  color += ''
  return SVG.regex.isHex.test(color)
      || SVG.regex.isRgb.test(color)
}

// Test if given value is a rgb object
SVG.Color.isRgb = function(color) {
  return color && typeof color.r == 'number'
               && typeof color.g == 'number'
               && typeof color.b == 'number'
}

// Test if given value is a color
SVG.Color.isColor = function(color) {
  return SVG.Color.isRgb(color) || SVG.Color.test(color)
}
// Module for array conversion
SVG.Array = function(array, fallback) {
  array = (array || []).valueOf()

  // if array is empty and fallback is provided, use fallback
  if (array.length == 0 && fallback)
    array = fallback.valueOf()

  // parse array
  this.value = this.parse(array)
}

SVG.extend(SVG.Array, {
  // Make array morphable
  morph: function(array) {
    this.destination = this.parse(array)

    // normalize length of arrays
    if (this.value.length != this.destination.length) {
      var lastValue       = this.value[this.value.length - 1]
        , lastDestination = this.destination[this.destination.length - 1]

      while(this.value.length > this.destination.length)
        this.destination.push(lastDestination)
      while(this.value.length < this.destination.length)
        this.value.push(lastValue)
    }

    return this
  }
  // Clean up any duplicate points
, settle: function() {
    // find all unique values
    for (var i = 0, il = this.value.length, seen = []; i < il; i++)
      if (seen.indexOf(this.value[i]) == -1)
        seen.push(this.value[i])

    // set new value
    return this.value = seen
  }
  // Get morphed array at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // generate morphed array
    for (var i = 0, il = this.value.length, array = []; i < il; i++)
      array.push(this.value[i] + (this.destination[i] - this.value[i]) * pos)

    return new SVG.Array(array)
  }
  // Convert array to string
, toString: function() {
    return this.value.join(' ')
  }
  // Real value
, valueOf: function() {
    return this.value
  }
  // Parse whitespace separated string
, parse: function(array) {
    array = array.valueOf()

    // if already is an array, no need to parse it
    if (Array.isArray(array)) return array

    return this.split(array)
  }
  // Strip unnecessary whitespace
, split: function(string) {
    return string.trim().split(SVG.regex.delimiter).map(parseFloat)
  }
  // Reverse array
, reverse: function() {
    this.value.reverse()

    return this
  }
, clone: function() {
    var clone = new this.constructor()
    clone.value = array_clone(this.value)
    return clone
  }
})
// Poly points array
SVG.PointArray = function(array, fallback) {
  SVG.Array.call(this, array, fallback || [[0,0]])
}

// Inherit from SVG.Array
SVG.PointArray.prototype = new SVG.Array
SVG.PointArray.prototype.constructor = SVG.PointArray

SVG.extend(SVG.PointArray, {
  // Convert array to string
  toString: function() {
    // convert to a poly point string
    for (var i = 0, il = this.value.length, array = []; i < il; i++)
      array.push(this.value[i].join(','))

    return array.join(' ')
  }
  // Convert array to line object
, toLine: function() {
    return {
      x1: this.value[0][0]
    , y1: this.value[0][1]
    , x2: this.value[1][0]
    , y2: this.value[1][1]
    }
  }
  // Get morphed array at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // generate morphed point string
    for (var i = 0, il = this.value.length, array = []; i < il; i++)
      array.push([
        this.value[i][0] + (this.destination[i][0] - this.value[i][0]) * pos
      , this.value[i][1] + (this.destination[i][1] - this.value[i][1]) * pos
      ])

    return new SVG.PointArray(array)
  }
  // Parse point string and flat array
, parse: function(array) {
    var points = []

    array = array.valueOf()

    // if it is an array
    if (Array.isArray(array)) {
      // and it is not flat, there is no need to parse it
      if(Array.isArray(array[0])) {
        // make sure to use a clone
        return array.map(function (el) { return el.slice() })
      } else if (array[0].x != null){
        // allow point objects to be passed
        return array.map(function (el) { return [el.x, el.y] })
      }
    } else { // Else, it is considered as a string
      // parse points
      array = array.trim().split(SVG.regex.delimiter).map(parseFloat)
    }

    // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
    if (array.length % 2 !== 0) array.pop()

    // wrap points in two-tuples and parse points as floats
    for(var i = 0, len = array.length; i < len; i = i + 2)
      points.push([ array[i], array[i+1] ])

    return points
  }
  // Move point string
, move: function(x, y) {
    var box = this.bbox()

    // get relative offset
    x -= box.x
    y -= box.y

    // move every point
    if (!isNaN(x) && !isNaN(y))
      for (var i = this.value.length - 1; i >= 0; i--)
        this.value[i] = [this.value[i][0] + x, this.value[i][1] + y]

    return this
  }
  // Resize poly string
, size: function(width, height) {
    var i, box = this.bbox()

    // recalculate position of all points according to new size
    for (i = this.value.length - 1; i >= 0; i--) {
      if(box.width) this.value[i][0] = ((this.value[i][0] - box.x) * width)  / box.width  + box.x
      if(box.height) this.value[i][1] = ((this.value[i][1] - box.y) * height) / box.height + box.y
    }

    return this
  }
  // Get bounding box of points
, bbox: function() {
    SVG.parser.poly.setAttribute('points', this.toString())

    return SVG.parser.poly.getBBox()
  }
})

var pathHandlers = {
  M: function(c, p, p0) {
    p.x = p0.x = c[0]
    p.y = p0.y = c[1]

    return ['M', p.x, p.y]
  },
  L: function(c, p) {
    p.x = c[0]
    p.y = c[1]
    return ['L', c[0], c[1]]
  },
  H: function(c, p) {
    p.x = c[0]
    return ['H', c[0]]
  },
  V: function(c, p) {
    p.y = c[0]
    return ['V', c[0]]
  },
  C: function(c, p) {
    p.x = c[4]
    p.y = c[5]
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]]
  },
  S: function(c, p) {
    p.x = c[2]
    p.y = c[3]
    return ['S', c[0], c[1], c[2], c[3]]
  },
  Q: function(c, p) {
    p.x = c[2]
    p.y = c[3]
    return ['Q', c[0], c[1], c[2], c[3]]
  },
  T: function(c, p) {
    p.x = c[0]
    p.y = c[1]
    return ['T', c[0], c[1]]
  },
  Z: function(c, p, p0) {
    p.x = p0.x
    p.y = p0.y
    return ['Z']
  },
  A: function(c, p) {
    p.x = c[5]
    p.y = c[6]
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]]
  }
}

var mlhvqtcsa = 'mlhvqtcsaz'.split('')

for(var i = 0, il = mlhvqtcsa.length; i < il; ++i){
  pathHandlers[mlhvqtcsa[i]] = (function(i){
    return function(c, p, p0) {
      if(i == 'H') c[0] = c[0] + p.x
      else if(i == 'V') c[0] = c[0] + p.y
      else if(i == 'A'){
        c[5] = c[5] + p.x,
        c[6] = c[6] + p.y
      }
      else
        for(var j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j%2 ? p.y : p.x)
        }

      return pathHandlers[i](c, p, p0)
    }
  })(mlhvqtcsa[i].toUpperCase())
}

// Path points array
SVG.PathArray = function(array, fallback) {
  SVG.Array.call(this, array, fallback || [['M', 0, 0]])
}

// Inherit from SVG.Array
SVG.PathArray.prototype = new SVG.Array
SVG.PathArray.prototype.constructor = SVG.PathArray

SVG.extend(SVG.PathArray, {
  // Convert array to string
  toString: function() {
    return arrayToString(this.value)
  }
  // Move path string
, move: function(x, y) {
    // get bounding box of current situation
    var box = this.bbox()

    // get relative offset
    x -= box.x
    y -= box.y

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (var l, i = this.value.length - 1; i >= 0; i--) {
        l = this.value[i][0]

        if (l == 'M' || l == 'L' || l == 'T')  {
          this.value[i][1] += x
          this.value[i][2] += y

        } else if (l == 'H')  {
          this.value[i][1] += x

        } else if (l == 'V')  {
          this.value[i][1] += y

        } else if (l == 'C' || l == 'S' || l == 'Q')  {
          this.value[i][1] += x
          this.value[i][2] += y
          this.value[i][3] += x
          this.value[i][4] += y

          if (l == 'C')  {
            this.value[i][5] += x
            this.value[i][6] += y
          }

        } else if (l == 'A')  {
          this.value[i][6] += x
          this.value[i][7] += y
        }

      }
    }

    return this
  }
  // Resize path string
, size: function(width, height) {
    // get bounding box of current situation
    var i, l, box = this.bbox()

    // recalculate position of all points according to new size
    for (i = this.value.length - 1; i >= 0; i--) {
      l = this.value[i][0]

      if (l == 'M' || l == 'L' || l == 'T')  {
        this.value[i][1] = ((this.value[i][1] - box.x) * width)  / box.width  + box.x
        this.value[i][2] = ((this.value[i][2] - box.y) * height) / box.height + box.y

      } else if (l == 'H')  {
        this.value[i][1] = ((this.value[i][1] - box.x) * width)  / box.width  + box.x

      } else if (l == 'V')  {
        this.value[i][1] = ((this.value[i][1] - box.y) * height) / box.height + box.y

      } else if (l == 'C' || l == 'S' || l == 'Q')  {
        this.value[i][1] = ((this.value[i][1] - box.x) * width)  / box.width  + box.x
        this.value[i][2] = ((this.value[i][2] - box.y) * height) / box.height + box.y
        this.value[i][3] = ((this.value[i][3] - box.x) * width)  / box.width  + box.x
        this.value[i][4] = ((this.value[i][4] - box.y) * height) / box.height + box.y

        if (l == 'C')  {
          this.value[i][5] = ((this.value[i][5] - box.x) * width)  / box.width  + box.x
          this.value[i][6] = ((this.value[i][6] - box.y) * height) / box.height + box.y
        }

      } else if (l == 'A')  {
        // resize radii
        this.value[i][1] = (this.value[i][1] * width)  / box.width
        this.value[i][2] = (this.value[i][2] * height) / box.height

        // move position values
        this.value[i][6] = ((this.value[i][6] - box.x) * width)  / box.width  + box.x
        this.value[i][7] = ((this.value[i][7] - box.y) * height) / box.height + box.y
      }

    }

    return this
  }
  // Test if the passed path array use the same path data commands as this path array
, equalCommands: function(pathArray) {
    var i, il, equalCommands

    pathArray = new SVG.PathArray(pathArray)

    equalCommands = this.value.length === pathArray.value.length
    for(i = 0, il = this.value.length; equalCommands && i < il; i++) {
      equalCommands = this.value[i][0] === pathArray.value[i][0]
    }

    return equalCommands
  }
  // Make path array morphable
, morph: function(pathArray) {
    pathArray = new SVG.PathArray(pathArray)

    if(this.equalCommands(pathArray)) {
      this.destination = pathArray
    } else {
      this.destination = null
    }

    return this
  }
  // Get morphed path array at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    var sourceArray = this.value
      , destinationArray = this.destination.value
      , array = [], pathArray = new SVG.PathArray()
      , i, il, j, jl

    // Animate has specified in the SVG spec
    // See: https://www.w3.org/TR/SVG11/paths.html#PathElement
    for (i = 0, il = sourceArray.length; i < il; i++) {
      array[i] = [sourceArray[i][0]]
      for(j = 1, jl = sourceArray[i].length; j < jl; j++) {
        array[i][j] = sourceArray[i][j] + (destinationArray[i][j] - sourceArray[i][j]) * pos
      }
      // For the two flags of the elliptical arc command, the SVG spec say:
      // Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
      // Elliptical arc command as an array followed by corresponding indexes:
      // ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
      //   0    1   2        3                 4             5      6  7
      if(array[i][0] === 'A') {
        array[i][4] = +(array[i][4] != 0)
        array[i][5] = +(array[i][5] != 0)
      }
    }

    // Directly modify the value of a path array, this is done this way for performance
    pathArray.value = array
    return pathArray
  }
  // Absolutize and parse path to array
, parse: function(array) {
    // if it's already a patharray, no need to parse it
    if (array instanceof SVG.PathArray) return array.valueOf()

    // prepare for parsing
    var i, x0, y0, s, seg, arr
      , x = 0
      , y = 0
      , paramCnt = { 'M':2, 'L':2, 'H':1, 'V':1, 'C':6, 'S':4, 'Q':4, 'T':2, 'A':7, 'Z':0 }

    if(typeof array == 'string'){

      array = array
        .replace(SVG.regex.numbersWithDots, pathRegReplace) // convert 45.123.123 to 45.123 .123
        .replace(SVG.regex.pathLetters, ' $& ') // put some room between letters and numbers
        .replace(SVG.regex.hyphen, '$1 -')      // add space before hyphen
        .trim()                                 // trim
        .split(SVG.regex.delimiter)   // split into array

    }else{
      array = array.reduce(function(prev, curr){
        return [].concat.call(prev, curr)
      }, [])
    }

    // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
    var arr = []
      , p = new SVG.Point()
      , p0 = new SVG.Point()
      , index = 0
      , len = array.length

    do{
      // Test if we have a path letter
      if(SVG.regex.isPathLetter.test(array[index])){
        s = array[index]
        ++index
      // If last letter was a move command and we got no new, it defaults to [L]ine
      }else if(s == 'M'){
        s = 'L'
      }else if(s == 'm'){
        s = 'l'
      }

      arr.push(pathHandlers[s].call(null,
          array.slice(index, (index = index + paramCnt[s.toUpperCase()])).map(parseFloat),
          p, p0
        )
      )

    }while(len > index)

    return arr

  }
  // Get bounding box of path
, bbox: function() {
    SVG.parser.path.setAttribute('d', this.toString())

    return SVG.parser.path.getBBox()
  }

})

// Module for unit convertions
SVG.Number = SVG.invent({
  // Initialize
  create: function(value, unit) {
    // initialize defaults
    this.value = 0
    this.unit  = unit || ''

    // parse value
    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? (value < 0 ? -3.4e+38 : +3.4e+38) : value

    } else if (typeof value === 'string') {
      unit = value.match(SVG.regex.numberAndUnit)

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1])

        // normalize
        if (unit[5] == '%')
          this.value /= 100
        else if (unit[5] == 's')
          this.value *= 1000

        // store unit
        this.unit = unit[5]
      }

    } else {
      if (value instanceof SVG.Number) {
        this.value = value.valueOf()
        this.unit  = value.unit
      }
    }

  }
  // Add methods
, extend: {
    // Stringalize
    toString: function() {
      return (
        this.unit == '%' ?
          ~~(this.value * 1e8) / 1e6:
        this.unit == 's' ?
          this.value / 1e3 :
          this.value
      ) + this.unit
    }
  , toJSON: function() {
      return this.toString()
    }
  , // Convert to primitive
    valueOf: function() {
      return this.value
    }
    // Add number
  , plus: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this + number, this.unit || number.unit)
    }
    // Subtract number
  , minus: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this - number, this.unit || number.unit)
    }
    // Multiply number
  , times: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this * number, this.unit || number.unit)
    }
    // Divide number
  , divide: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this / number, this.unit || number.unit)
    }
    // Convert to different unit
  , to: function(unit) {
      var number = new SVG.Number(this)

      if (typeof unit === 'string')
        number.unit = unit

      return number
    }
    // Make number morphable
  , morph: function(number) {
      this.destination = new SVG.Number(number)

      if(number.relative) {
        this.destination.value += this.value
      }

      return this
    }
    // Get morphed number at given position
  , at: function(pos) {
      // Make sure a destination is defined
      if (!this.destination) return this

      // Generate new morphed number
      return new SVG.Number(this.destination)
          .minus(this)
          .times(pos)
          .plus(this)
    }

  }
})


SVG.Element = SVG.invent({
  // Initialize node
  create: function(node) {
    // make stroke value accessible dynamically
    this._stroke = SVG.defaults.attrs.stroke
    this._event = null

    // initialize data object
    this.dom = {}

    // create circular reference
    if (this.node = node) {
      this.type = node.nodeName
      this.node.instance = this

      // store current attribute value
      this._stroke = node.getAttribute('stroke') || this._stroke
    }
  }

  // Add class methods
, extend: {
    // Move over x-axis
    x: function(x) {
      return this.attr('x', x)
    }
    // Move over y-axis
  , y: function(y) {
      return this.attr('y', y)
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2)
    }
    // Move element to given x and y values
  , move: function(x, y) {
      return this.x(x).y(y)
    }
    // Move element by its center
  , center: function(x, y) {
      return this.cx(x).cy(y)
    }
    // Set width of element
  , width: function(width) {
      return this.attr('width', width)
    }
    // Set height of element
  , height: function(height) {
      return this.attr('height', height)
    }
    // Set element size to given width and height
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this
        .width(new SVG.Number(p.width))
        .height(new SVG.Number(p.height))
    }
    // Clone element
  , clone: function(parent) {
      // write dom data to the dom so the clone can pickup the data
      this.writeDataToDom()

      // clone element and assign new id
      var clone = assignNewId(this.node.cloneNode(true))

      // insert the clone in the given parent or after myself
      if(parent) parent.add(clone)
      else this.after(clone)

      return clone
    }
    // Remove element
  , remove: function() {
      if (this.parent())
        this.parent().removeElement(this)

      return this
    }
    // Replace element
  , replace: function(element) {
      this.after(element).remove()

      return element
    }
    // Add element to given container and return self
  , addTo: function(parent) {
      return parent.put(this)
    }
    // Add element to given container and return container
  , putIn: function(parent) {
      return parent.add(this)
    }
    // Get / set id
  , id: function(id) {
      return this.attr('id', id)
    }
    // Checks whether the given point inside the bounding box of the element
  , inside: function(x, y) {
      var box = this.bbox()

      return x > box.x
          && y > box.y
          && x < box.x + box.width
          && y < box.y + box.height
    }
    // Show element
  , show: function() {
      return this.style('display', '')
    }
    // Hide element
  , hide: function() {
      return this.style('display', 'none')
    }
    // Is element visible?
  , visible: function() {
      return this.style('display') != 'none'
    }
    // Return id on string conversion
  , toString: function() {
      return this.attr('id')
    }
    // Return array of classes on the node
  , classes: function() {
      var attr = this.attr('class')

      return attr == null ? [] : attr.trim().split(SVG.regex.delimiter)
    }
    // Return true if class exists on the node, false otherwise
  , hasClass: function(name) {
      return this.classes().indexOf(name) != -1
    }
    // Add class to the node
  , addClass: function(name) {
      if (!this.hasClass(name)) {
        var array = this.classes()
        array.push(name)
        this.attr('class', array.join(' '))
      }

      return this
    }
    // Remove class from the node
  , removeClass: function(name) {
      if (this.hasClass(name)) {
        this.attr('class', this.classes().filter(function(c) {
          return c != name
        }).join(' '))
      }

      return this
    }
    // Toggle the presence of a class on the node
  , toggleClass: function(name) {
      return this.hasClass(name) ? this.removeClass(name) : this.addClass(name)
    }
    // Get referenced element form attribute value
  , reference: function(attr) {
      return SVG.get(this.attr(attr))
    }
    // Returns the parent element instance
  , parent: function(type) {
      var parent = this

      // check for parent
      if(!parent.node.parentNode) return null

      // get parent element
      parent = SVG.adopt(parent.node.parentNode)

      if(!type) return parent

      // loop trough ancestors if type is given
      while(parent && parent.node instanceof window.SVGElement){
        if(typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent
        if(!parent.node.parentNode || parent.node.parentNode.nodeName == '#document') return null // #759, #720
        parent = SVG.adopt(parent.node.parentNode)
      }
    }
    // Get parent document
  , doc: function() {
      return this instanceof SVG.Doc ? this : this.parent(SVG.Doc)
    }
    // return array of all ancestors of given type up to the root svg
  , parents: function(type) {
      var parents = [], parent = this

      do{
        parent = parent.parent(type)
        if(!parent || !parent.node) break

        parents.push(parent)
      } while(parent.parent)

      return parents
    }
    // matches the element vs a css selector
  , matches: function(selector){
      return matches(this.node, selector)
    }
    // Returns the svg node to call native svg methods on it
  , native: function() {
      return this.node
    }
    // Import raw svg
  , svg: function(svg) {
      // create temporary holder
      var well = document.createElement('svg')

      // act as a setter if svg is given
      if (svg && this instanceof SVG.Parent) {
        // dump raw svg
        well.innerHTML = '<svg>' + svg.replace(/\n/, '').replace(/<([\w:-]+)([^<]+?)\/>/g, '<$1$2></$1>') + '</svg>'

        // transplant nodes
        for (var i = 0, il = well.firstChild.childNodes.length; i < il; i++)
          this.node.appendChild(well.firstChild.firstChild)

      // otherwise act as a getter
      } else {
        // create a wrapping svg element in case of partial content
        well.appendChild(svg = document.createElement('svg'))

        // write svgjs data to the dom
        this.writeDataToDom()

        // insert a copy of this node
        svg.appendChild(this.node.cloneNode(true))

        // return target element
        return well.innerHTML.replace(/^<svg>/, '').replace(/<\/svg>$/, '')
      }

      return this
    }
  // write svgjs data to the dom
  , writeDataToDom: function() {

      // dump variables recursively
      if(this.each || this.lines){
        var fn = this.each ? this : this.lines();
        fn.each(function(){
          this.writeDataToDom()
        })
      }

      // remove previously set data
      this.node.removeAttribute('svgjs:data')

      if(Object.keys(this.dom).length)
        this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)) // see #428

      return this
    }
  // set given data to the elements data property
  , setData: function(o){
      this.dom = o
      return this
    }
  , is: function(obj){
      return is(this, obj)
    }
  }
})

SVG.easing = {
  '-': function(pos){return pos}
, '<>':function(pos){return -Math.cos(pos * Math.PI) / 2 + 0.5}
, '>': function(pos){return  Math.sin(pos * Math.PI / 2)}
, '<': function(pos){return -Math.cos(pos * Math.PI / 2) + 1}
}

SVG.morph = function(pos){
  return function(from, to) {
    return new SVG.MorphObj(from, to).at(pos)
  }
}

SVG.Situation = SVG.invent({

  create: function(o){
    this.init = false
    this.reversed = false
    this.reversing = false

    this.duration = new SVG.Number(o.duration).valueOf()
    this.delay = new SVG.Number(o.delay).valueOf()

    this.start = +new Date() + this.delay
    this.finish = this.start + this.duration
    this.ease = o.ease

    // this.loop is incremented from 0 to this.loops
    // it is also incremented when in an infinite loop (when this.loops is true)
    this.loop = 0
    this.loops = false

    this.animations = {
      // functionToCall: [list of morphable objects]
      // e.g. move: [SVG.Number, SVG.Number]
    }

    this.attrs = {
      // holds all attributes which are not represented from a function svg.js provides
      // e.g. someAttr: SVG.Number
    }

    this.styles = {
      // holds all styles which should be animated
      // e.g. fill-color: SVG.Color
    }

    this.transforms = [
      // holds all transformations as transformation objects
      // e.g. [SVG.Rotate, SVG.Translate, SVG.Matrix]
    ]

    this.once = {
      // functions to fire at a specific position
      // e.g. "0.5": function foo(){}
    }

  }

})


SVG.FX = SVG.invent({

  create: function(element) {
    this._target = element
    this.situations = []
    this.active = false
    this.situation = null
    this.paused = false
    this.lastPos = 0
    this.pos = 0
    // The absolute position of an animation is its position in the context of its complete duration (including delay and loops)
    // When performing a delay, absPos is below 0 and when performing a loop, its value is above 1
    this.absPos = 0
    this._speed = 1
  }

, extend: {

    /**
     * sets or returns the target of this animation
     * @param o object || number In case of Object it holds all parameters. In case of number its the duration of the animation
     * @param ease function || string Function which should be used for easing or easing keyword
     * @param delay Number indicating the delay before the animation starts
     * @return target || this
     */
    animate: function(o, ease, delay){

      if(typeof o == 'object'){
        ease = o.ease
        delay = o.delay
        o = o.duration
      }

      var situation = new SVG.Situation({
        duration: o || 1000,
        delay: delay || 0,
        ease: SVG.easing[ease || '-'] || ease
      })

      this.queue(situation)

      return this
    }

    /**
     * sets a delay before the next element of the queue is called
     * @param delay Duration of delay in milliseconds
     * @return this.target()
     */
  , delay: function(delay){
      // The delay is performed by an empty situation with its duration
      // attribute set to the duration of the delay
      var situation = new SVG.Situation({
        duration: delay,
        delay: 0,
        ease: SVG.easing['-']
      })

      return this.queue(situation)
    }

    /**
     * sets or returns the target of this animation
     * @param null || target SVG.Element which should be set as new target
     * @return target || this
     */
  , target: function(target){
      if(target && target instanceof SVG.Element){
        this._target = target
        return this
      }

      return this._target
    }

    // returns the absolute position at a given time
  , timeToAbsPos: function(timestamp){
      return (timestamp - this.situation.start) / (this.situation.duration/this._speed)
    }

    // returns the timestamp from a given absolute positon
  , absPosToTime: function(absPos){
      return this.situation.duration/this._speed * absPos + this.situation.start
    }

    // starts the animationloop
  , startAnimFrame: function(){
      this.stopAnimFrame()
      this.animationFrame = window.requestAnimationFrame(function(){ this.step() }.bind(this))
    }

    // cancels the animationframe
  , stopAnimFrame: function(){
      window.cancelAnimationFrame(this.animationFrame)
    }

    // kicks off the animation - only does something when the queue is currently not active and at least one situation is set
  , start: function(){
      // dont start if already started
      if(!this.active && this.situation){
        this.active = true
        this.startCurrent()
      }

      return this
    }

    // start the current situation
  , startCurrent: function(){
      this.situation.start = +new Date + this.situation.delay/this._speed
      this.situation.finish = this.situation.start + this.situation.duration/this._speed
      return this.initAnimations().step()
    }

    /**
     * adds a function / Situation to the animation queue
     * @param fn function / situation to add
     * @return this
     */
  , queue: function(fn){
      if(typeof fn == 'function' || fn instanceof SVG.Situation)
        this.situations.push(fn)

      if(!this.situation) this.situation = this.situations.shift()

      return this
    }

    /**
     * pulls next element from the queue and execute it
     * @return this
     */
  , dequeue: function(){
      // stop current animation
      this.stop()

      // get next animation from queue
      this.situation = this.situations.shift()

      if(this.situation){
        if(this.situation instanceof SVG.Situation) {
          this.start()
        } else {
          // If it is not a SVG.Situation, then it is a function, we execute it
          this.situation.call(this)
        }
      }

      return this
    }

    // updates all animations to the current state of the element
    // this is important when one property could be changed from another property
  , initAnimations: function() {
      var i, j, source
      var s = this.situation

      if(s.init) return this

      for(i in s.animations){
        source = this.target()[i]()

        if(!Array.isArray(source)) {
          source = [source]
        }

        if(!Array.isArray(s.animations[i])) {
          s.animations[i] = [s.animations[i]]
        }

        //if(s.animations[i].length > source.length) {
        //  source.concat = source.concat(s.animations[i].slice(source.length, s.animations[i].length))
        //}

        for(j = source.length; j--;) {
          // The condition is because some methods return a normal number instead
          // of a SVG.Number
          if(s.animations[i][j] instanceof SVG.Number)
            source[j] = new SVG.Number(source[j])

          s.animations[i][j] = source[j].morph(s.animations[i][j])
        }
      }

      for(i in s.attrs){
        s.attrs[i] = new SVG.MorphObj(this.target().attr(i), s.attrs[i])
      }

      for(i in s.styles){
        s.styles[i] = new SVG.MorphObj(this.target().style(i), s.styles[i])
      }

      s.initialTransformation = this.target().matrixify()

      s.init = true
      return this
    }
  , clearQueue: function(){
      this.situations = []
      return this
    }
  , clearCurrent: function(){
      this.situation = null
      return this
    }
    /** stops the animation immediately
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately.
     * @param clearQueue A Boolean indicating whether to remove queued animation as well.
     * @return this
     */
  , stop: function(jumpToEnd, clearQueue){
      var active = this.active
      this.active = false

      if(clearQueue){
        this.clearQueue()
      }

      if(jumpToEnd && this.situation){
        // initialize the situation if it was not
        !active && this.startCurrent()
        this.atEnd()
      }

      this.stopAnimFrame()

      return this.clearCurrent()
    }

    /** resets the element to the state where the current element has started
     * @return this
     */
  , reset: function(){
      if(this.situation){
        var temp = this.situation
        this.stop()
        this.situation = temp
        this.atStart()
      }
      return this
    }

    // Stop the currently-running animation, remove all queued animations, and complete all animations for the element.
  , finish: function(){

      this.stop(true, false)

      while(this.dequeue().situation && this.stop(true, false));

      this.clearQueue().clearCurrent()

      return this
    }

    // set the internal animation pointer at the start position, before any loops, and updates the visualisation
  , atStart: function() {
      return this.at(0, true)
    }

    // set the internal animation pointer at the end position, after all the loops, and updates the visualisation
  , atEnd: function() {
      if (this.situation.loops === true) {
        // If in a infinite loop, we end the current iteration
        this.situation.loops = this.situation.loop + 1
      }

      if(typeof this.situation.loops == 'number') {
        // If performing a finite number of loops, we go after all the loops
        return this.at(this.situation.loops, true)
      } else {
        // If no loops, we just go at the end
        return this.at(1, true)
      }
    }

    // set the internal animation pointer to the specified position and updates the visualisation
    // if isAbsPos is true, pos is treated as an absolute position
  , at: function(pos, isAbsPos){
      var durDivSpd = this.situation.duration/this._speed

      this.absPos = pos
      // If pos is not an absolute position, we convert it into one
      if (!isAbsPos) {
        if (this.situation.reversed) this.absPos = 1 - this.absPos
        this.absPos += this.situation.loop
      }

      this.situation.start = +new Date - this.absPos * durDivSpd
      this.situation.finish = this.situation.start + durDivSpd

      return this.step(true)
    }

    /**
     * sets or returns the speed of the animations
     * @param speed null || Number The new speed of the animations
     * @return Number || this
     */
  , speed: function(speed){
      if (speed === 0) return this.pause()

      if (speed) {
        this._speed = speed
        // We use an absolute position here so that speed can affect the delay before the animation
        return this.at(this.absPos, true)
      } else return this._speed
    }

    // Make loopable
  , loop: function(times, reverse) {
      var c = this.last()

      // store total loops
      c.loops = (times != null) ? times : true
      c.loop = 0

      if(reverse) c.reversing = true
      return this
    }

    // pauses the animation
  , pause: function(){
      this.paused = true
      this.stopAnimFrame()

      return this
    }

    // unpause the animation
  , play: function(){
      if(!this.paused) return this
      this.paused = false
      // We use an absolute position here so that the delay before the animation can be paused
      return this.at(this.absPos, true)
    }

    /**
     * toggle or set the direction of the animation
     * true sets direction to backwards while false sets it to forwards
     * @param reversed Boolean indicating whether to reverse the animation or not (default: toggle the reverse status)
     * @return this
     */
  , reverse: function(reversed){
      var c = this.last()

      if(typeof reversed == 'undefined') c.reversed = !c.reversed
      else c.reversed = reversed

      return this
    }


    /**
     * returns a float from 0-1 indicating the progress of the current animation
     * @param eased Boolean indicating whether the returned position should be eased or not
     * @return number
     */
  , progress: function(easeIt){
      return easeIt ? this.situation.ease(this.pos) : this.pos
    }

    /**
     * adds a callback function which is called when the current animation is finished
     * @param fn Function which should be executed as callback
     * @return number
     */
  , after: function(fn){
      var c = this.last()
        , wrapper = function wrapper(e){
            if(e.detail.situation == c){
              fn.call(this, c)
              this.off('finished.fx', wrapper) // prevent memory leak
            }
          }

      this.target().on('finished.fx', wrapper)

      return this._callStart()
    }

    // adds a callback which is called whenever one animation step is performed
  , during: function(fn){
      var c = this.last()
        , wrapper = function(e){
            if(e.detail.situation == c){
              fn.call(this, e.detail.pos, SVG.morph(e.detail.pos), e.detail.eased, c)
            }
          }

      // see above
      this.target().off('during.fx', wrapper).on('during.fx', wrapper)

      this.after(function(){
        this.off('during.fx', wrapper)
      })

      return this._callStart()
    }

    // calls after ALL animations in the queue are finished
  , afterAll: function(fn){
      var wrapper = function wrapper(e){
            fn.call(this)
            this.off('allfinished.fx', wrapper)
          }

      // see above
      this.target().off('allfinished.fx', wrapper).on('allfinished.fx', wrapper)

      return this._callStart()
    }

    // calls on every animation step for all animations
  , duringAll: function(fn){
      var wrapper = function(e){
            fn.call(this, e.detail.pos, SVG.morph(e.detail.pos), e.detail.eased, e.detail.situation)
          }

      this.target().off('during.fx', wrapper).on('during.fx', wrapper)

      this.afterAll(function(){
        this.off('during.fx', wrapper)
      })

      return this._callStart()
    }

  , last: function(){
      return this.situations.length ? this.situations[this.situations.length-1] : this.situation
    }

    // adds one property to the animations
  , add: function(method, args, type){
      this.last()[type || 'animations'][method] = args
      return this._callStart()
    }

    /** perform one step of the animation
     *  @param ignoreTime Boolean indicating whether to ignore time and use position directly or recalculate position based on time
     *  @return this
     */
  , step: function(ignoreTime){

      // convert current time to an absolute position
      if(!ignoreTime) this.absPos = this.timeToAbsPos(+new Date)

      // This part convert an absolute position to a position
      if(this.situation.loops !== false) {
        var absPos, absPosInt, lastLoop

        // If the absolute position is below 0, we just treat it as if it was 0
        absPos = Math.max(this.absPos, 0)
        absPosInt = Math.floor(absPos)

        if(this.situation.loops === true || absPosInt < this.situation.loops) {
          this.pos = absPos - absPosInt
          lastLoop = this.situation.loop
          this.situation.loop = absPosInt
        } else {
          this.absPos = this.situation.loops
          this.pos = 1
          // The -1 here is because we don't want to toggle reversed when all the loops have been completed
          lastLoop = this.situation.loop - 1
          this.situation.loop = this.situation.loops
        }

        if(this.situation.reversing) {
          // Toggle reversed if an odd number of loops as occured since the last call of step
          this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - lastLoop) % 2)
        }

      } else {
        // If there are no loop, the absolute position must not be above 1
        this.absPos = Math.min(this.absPos, 1)
        this.pos = this.absPos
      }

      // while the absolute position can be below 0, the position must not be below 0
      if(this.pos < 0) this.pos = 0

      if(this.situation.reversed) this.pos = 1 - this.pos


      // apply easing
      var eased = this.situation.ease(this.pos)

      // call once-callbacks
      for(var i in this.situation.once){
        if(i > this.lastPos && i <= eased){
          this.situation.once[i].call(this.target(), this.pos, eased)
          delete this.situation.once[i]
        }
      }

      // fire during callback with position, eased position and current situation as parameter
      if(this.active) this.target().fire('during', {pos: this.pos, eased: eased, fx: this, situation: this.situation})

      // the user may call stop or finish in the during callback
      // so make sure that we still have a valid situation
      if(!this.situation){
        return this
      }

      // apply the actual animation to every property
      this.eachAt()

      // do final code when situation is finished
      if((this.pos == 1 && !this.situation.reversed) || (this.situation.reversed && this.pos == 0)){

        // stop animation callback
        this.stopAnimFrame()

        // fire finished callback with current situation as parameter
        this.target().fire('finished', {fx:this, situation: this.situation})

        if(!this.situations.length){
          this.target().fire('allfinished')

          // Recheck the length since the user may call animate in the afterAll callback
          if(!this.situations.length){
            this.target().off('.fx') // there shouldnt be any binding left, but to make sure...
            this.active = false
          }
        }

        // start next animation
        if(this.active) this.dequeue()
        else this.clearCurrent()

      }else if(!this.paused && this.active){
        // we continue animating when we are not at the end
        this.startAnimFrame()
      }

      // save last eased position for once callback triggering
      this.lastPos = eased
      return this

    }

    // calculates the step for every property and calls block with it
  , eachAt: function(){
      var i, len, at, self = this, target = this.target(), s = this.situation

      // apply animations which can be called trough a method
      for(i in s.animations){

        at = [].concat(s.animations[i]).map(function(el){
          return typeof el !== 'string' && el.at ? el.at(s.ease(self.pos), self.pos) : el
        })

        target[i].apply(target, at)

      }

      // apply animation which has to be applied with attr()
      for(i in s.attrs){

        at = [i].concat(s.attrs[i]).map(function(el){
          return typeof el !== 'string' && el.at ? el.at(s.ease(self.pos), self.pos) : el
        })

        target.attr.apply(target, at)

      }

      // apply animation which has to be applied with style()
      for(i in s.styles){

        at = [i].concat(s.styles[i]).map(function(el){
          return typeof el !== 'string' && el.at ? el.at(s.ease(self.pos), self.pos) : el
        })

        target.style.apply(target, at)

      }

      // animate initialTransformation which has to be chained
      if(s.transforms.length){

        // get initial initialTransformation
        at = s.initialTransformation
        for(i = 0, len = s.transforms.length; i < len; i++){

          // get next transformation in chain
          var a = s.transforms[i]

          // multiply matrix directly
          if(a instanceof SVG.Matrix){

            if(a.relative){
              at = at.multiply(new SVG.Matrix().morph(a).at(s.ease(this.pos)))
            }else{
              at = at.morph(a).at(s.ease(this.pos))
            }
            continue
          }

          // when transformation is absolute we have to reset the needed transformation first
          if(!a.relative)
            a.undo(at.extract())

          // and reapply it after
          at = at.multiply(a.at(s.ease(this.pos)))

        }

        // set new matrix on element
        target.matrix(at)
      }

      return this

    }


    // adds an once-callback which is called at a specific position and never again
  , once: function(pos, fn, isEased){
      var c = this.last()
      if(!isEased) pos = c.ease(pos)

      c.once[pos] = fn

      return this
    }

  , _callStart: function() {
      setTimeout(function(){this.start()}.bind(this), 0)
      return this
    }

  }

, parent: SVG.Element

  // Add method to parent elements
, construct: {
    // Get fx module or create a new one, then animate with given duration and ease
    animate: function(o, ease, delay) {
      return (this.fx || (this.fx = new SVG.FX(this))).animate(o, ease, delay)
    }
  , delay: function(delay){
      return (this.fx || (this.fx = new SVG.FX(this))).delay(delay)
    }
  , stop: function(jumpToEnd, clearQueue) {
      if (this.fx)
        this.fx.stop(jumpToEnd, clearQueue)

      return this
    }
  , finish: function() {
      if (this.fx)
        this.fx.finish()

      return this
    }
    // Pause current animation
  , pause: function() {
      if (this.fx)
        this.fx.pause()

      return this
    }
    // Play paused current animation
  , play: function() {
      if (this.fx)
        this.fx.play()

      return this
    }
    // Set/Get the speed of the animations
  , speed: function(speed) {
      if (this.fx)
        if (speed == null)
          return this.fx.speed()
        else
          this.fx.speed(speed)

      return this
    }
  }

})

// MorphObj is used whenever no morphable object is given
SVG.MorphObj = SVG.invent({

  create: function(from, to){
    // prepare color for morphing
    if(SVG.Color.isColor(to)) return new SVG.Color(from).morph(to)
    // check if we have a list of values
    if(SVG.regex.delimiter.test(from)) {
      // prepare path for morphing
      if(SVG.regex.pathLetters.test(from)) return new SVG.PathArray(from).morph(to)
      // prepare value list for morphing
      else return new SVG.Array(from).morph(to)
    }
    // prepare number for morphing
    if(SVG.regex.numberAndUnit.test(to)) return new SVG.Number(from).morph(to)

    // prepare for plain morphing
    this.value = from
    this.destination = to
  }

, extend: {
    at: function(pos, real){
      return real < 1 ? this.value : this.destination
    },

    valueOf: function(){
      return this.value
    }
  }

})

SVG.extend(SVG.FX, {
  // Add animatable attributes
  attr: function(a, v, relative) {
    // apply attributes individually
    if (typeof a == 'object') {
      for (var key in a)
        this.attr(key, a[key])

    } else {
      this.add(a, v, 'attrs')
    }

    return this
  }
  // Add animatable styles
, style: function(s, v) {
    if (typeof s == 'object')
      for (var key in s)
        this.style(key, s[key])

    else
      this.add(s, v, 'styles')

    return this
  }
  // Animatable x-axis
, x: function(x, relative) {
    if(this.target() instanceof SVG.G){
      this.transform({x:x}, relative)
      return this
    }

    var num = new SVG.Number(x)
    num.relative = relative
    return this.add('x', num)
  }
  // Animatable y-axis
, y: function(y, relative) {
    if(this.target() instanceof SVG.G){
      this.transform({y:y}, relative)
      return this
    }

    var num = new SVG.Number(y)
    num.relative = relative
    return this.add('y', num)
  }
  // Animatable center x-axis
, cx: function(x) {
    return this.add('cx', new SVG.Number(x))
  }
  // Animatable center y-axis
, cy: function(y) {
    return this.add('cy', new SVG.Number(y))
  }
  // Add animatable move
, move: function(x, y) {
    return this.x(x).y(y)
  }
  // Add animatable center
, center: function(x, y) {
    return this.cx(x).cy(y)
  }
  // Add animatable size
, size: function(width, height) {
    if (this.target() instanceof SVG.Text) {
      // animate font size for Text elements
      this.attr('font-size', width)

    } else {
      // animate bbox based size for all other elements
      var box

      if(!width || !height){
        box = this.target().bbox()
      }

      if(!width){
        width = box.width / box.height  * height
      }

      if(!height){
        height = box.height / box.width  * width
      }

      this.add('width' , new SVG.Number(width))
          .add('height', new SVG.Number(height))

    }

    return this
  }
  // Add animatable width
, width: function(width) {
    return this.add('width', new SVG.Number(width))
  }
  // Add animatable height
, height: function(height) {
    return this.add('height', new SVG.Number(height))
  }
  // Add animatable plot
, plot: function(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if(arguments.length == 4) {
      return this.plot([a, b, c, d])
    }

    return this.add('plot', new (this.target().morphArray)(a))
  }
  // Add leading method
, leading: function(value) {
    return this.target().leading ?
      this.add('leading', new SVG.Number(value)) :
      this
  }
  // Add animatable viewbox
, viewbox: function(x, y, width, height) {
    if (this.target() instanceof SVG.Container) {
      this.add('viewbox', new SVG.ViewBox(x, y, width, height))
    }

    return this
  }
, update: function(o) {
    if (this.target() instanceof SVG.Stop) {
      if (typeof o == 'number' || o instanceof SVG.Number) {
        return this.update({
          offset:  arguments[0]
        , color:   arguments[1]
        , opacity: arguments[2]
        })
      }

      if (o.opacity != null) this.attr('stop-opacity', o.opacity)
      if (o.color   != null) this.attr('stop-color', o.color)
      if (o.offset  != null) this.attr('offset', o.offset)
    }

    return this
  }
})

SVG.Box = SVG.invent({
  create: function(x, y, width, height) {
    if (typeof x == 'object' && !(x instanceof SVG.Element)) {
      // chromes getBoundingClientRect has no x and y property
      return SVG.Box.call(this, x.left != null ? x.left : x.x , x.top != null ? x.top : x.y, x.width, x.height)
    } else if (arguments.length == 4) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }

    // add center, right, bottom...
    fullBox(this)
  }
, extend: {
    // Merge rect box with another, return a new instance
    merge: function(box) {
      var b = new this.constructor()

      // merge boxes
      b.x      = Math.min(this.x, box.x)
      b.y      = Math.min(this.y, box.y)
      b.width  = Math.max(this.x + this.width,  box.x + box.width)  - b.x
      b.height = Math.max(this.y + this.height, box.y + box.height) - b.y

      return fullBox(b)
    }

  , transform: function(m) {
      var xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, p, bbox

      var pts = [
        new SVG.Point(this.x, this.y),
        new SVG.Point(this.x2, this.y),
        new SVG.Point(this.x, this.y2),
        new SVG.Point(this.x2, this.y2)
      ]

      pts.forEach(function(p) {
        p = p.transform(m)
        xMin = Math.min(xMin,p.x)
        xMax = Math.max(xMax,p.x)
        yMin = Math.min(yMin,p.y)
        yMax = Math.max(yMax,p.y)
      })

      bbox = new this.constructor()
      bbox.x = xMin
      bbox.width = xMax-xMin
      bbox.y = yMin
      bbox.height = yMax-yMin

      fullBox(bbox)

      return bbox
    }
  }
})

SVG.BBox = SVG.invent({
  // Initialize
  create: function(element) {
    SVG.Box.apply(this, [].slice.call(arguments))

    // get values if element is given
    if (element instanceof SVG.Element) {
      var box

      // yes this is ugly, but Firefox can be a pain when it comes to elements that are not yet rendered
      try {

        if (!document.documentElement.contains){
          // This is IE - it does not support contains() for top-level SVGs
          var topParent = element.node
          while (topParent.parentNode){
            topParent = topParent.parentNode
          }
          if (topParent != document) throw new Exception('Element not in the dom')
        } else {
          // the element is NOT in the dom, throw error
          if(!document.documentElement.contains(element.node)) throw new Exception('Element not in the dom')
        }

        // find native bbox
        box = element.node.getBBox()
      } catch(e) {
        if(element instanceof SVG.Shape){
          var clone = element.clone(SVG.parser.draw.instance).show()
          box = clone.node.getBBox()
          clone.remove()
        }else{
          box = {
            x:      element.node.clientLeft
          , y:      element.node.clientTop
          , width:  element.node.clientWidth
          , height: element.node.clientHeight
          }
        }
      }

      SVG.Box.call(this, box)
    }

  }

  // Define ancestor
, inherit: SVG.Box

  // Define Parent
, parent: SVG.Element

  // Constructor
, construct: {
    // Get bounding box
    bbox: function() {
      return new SVG.BBox(this)
    }
  }

})

SVG.BBox.prototype.constructor = SVG.BBox


SVG.extend(SVG.Element, {
  tbox: function(){
    console.warn('Use of TBox is deprecated and mapped to RBox. Use .rbox() instead.')
    return this.rbox(this.doc())
  }
})

SVG.RBox = SVG.invent({
  // Initialize
  create: function(element) {
    SVG.Box.apply(this, [].slice.call(arguments))

    if (element instanceof SVG.Element) {
      SVG.Box.call(this, element.node.getBoundingClientRect())
    }
  }

, inherit: SVG.Box

  // define Parent
, parent: SVG.Element

, extend: {
    addOffset: function() {
      // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
      this.x += window.pageXOffset
      this.y += window.pageYOffset
      return this
    }
  }

  // Constructor
, construct: {
    // Get rect box
    rbox: function(el) {
      if (el) return new SVG.RBox(this).transform(el.screenCTM().inverse())
      return new SVG.RBox(this).addOffset()
    }
  }

})

SVG.RBox.prototype.constructor = SVG.RBox

SVG.Matrix = SVG.invent({
  // Initialize
  create: function(source) {
    var i, base = arrayToMatrix([1, 0, 0, 1, 0, 0])

    // ensure source as object
    source = source instanceof SVG.Element ?
      source.matrixify() :
    typeof source === 'string' ?
      arrayToMatrix(source.split(SVG.regex.delimiter).map(parseFloat)) :
    arguments.length == 6 ?
      arrayToMatrix([].slice.call(arguments)) :
    Array.isArray(source) ?
      arrayToMatrix(source) :
    typeof source === 'object' ?
      source : base

    // merge source
    for (i = abcdef.length - 1; i >= 0; --i)
      this[abcdef[i]] = source[abcdef[i]] != null ?
        source[abcdef[i]] : base[abcdef[i]]
  }

  // Add methods
, extend: {
    // Extract individual transformations
    extract: function() {
      // find delta transform points
      var px    = deltaTransformPoint(this, 0, 1)
        , py    = deltaTransformPoint(this, 1, 0)
        , skewX = 180 / Math.PI * Math.atan2(px.y, px.x) - 90

      return {
        // translation
        x:        this.e
      , y:        this.f
      , transformedX:(this.e * Math.cos(skewX * Math.PI / 180) + this.f * Math.sin(skewX * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b)
      , transformedY:(this.f * Math.cos(skewX * Math.PI / 180) + this.e * Math.sin(-skewX * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d)
        // skew
      , skewX:    -skewX
      , skewY:    180 / Math.PI * Math.atan2(py.y, py.x)
        // scale
      , scaleX:   Math.sqrt(this.a * this.a + this.b * this.b)
      , scaleY:   Math.sqrt(this.c * this.c + this.d * this.d)
        // rotation
      , rotation: skewX
      , a: this.a
      , b: this.b
      , c: this.c
      , d: this.d
      , e: this.e
      , f: this.f
      , matrix: new SVG.Matrix(this)
      }
    }
    // Clone matrix
  , clone: function() {
      return new SVG.Matrix(this)
    }
    // Morph one matrix into another
  , morph: function(matrix) {
      // store new destination
      this.destination = new SVG.Matrix(matrix)

      return this
    }
    // Get morphed matrix at a given position
  , at: function(pos) {
      // make sure a destination is defined
      if (!this.destination) return this

      // calculate morphed matrix at a given position
      var matrix = new SVG.Matrix({
        a: this.a + (this.destination.a - this.a) * pos
      , b: this.b + (this.destination.b - this.b) * pos
      , c: this.c + (this.destination.c - this.c) * pos
      , d: this.d + (this.destination.d - this.d) * pos
      , e: this.e + (this.destination.e - this.e) * pos
      , f: this.f + (this.destination.f - this.f) * pos
      })

      return matrix
    }
    // Multiplies by given matrix
  , multiply: function(matrix) {
      return new SVG.Matrix(this.native().multiply(parseMatrix(matrix).native()))
    }
    // Inverses matrix
  , inverse: function() {
      return new SVG.Matrix(this.native().inverse())
    }
    // Translate matrix
  , translate: function(x, y) {
      return new SVG.Matrix(this.native().translate(x || 0, y || 0))
    }
    // Scale matrix
  , scale: function(x, y, cx, cy) {
      // support uniformal scale
      if (arguments.length == 1) {
        y = x
      } else if (arguments.length == 3) {
        cy = cx
        cx = y
        y = x
      }

      return this.around(cx, cy, new SVG.Matrix(x, 0, 0, y, 0, 0))
    }
    // Rotate matrix
  , rotate: function(r, cx, cy) {
      // convert degrees to radians
      r = SVG.utils.radians(r)

      return this.around(cx, cy, new SVG.Matrix(Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0))
    }
    // Flip matrix on x or y, at a given offset
  , flip: function(a, o) {
      return a == 'x' ?
          this.scale(-1, 1, o, 0) :
        a == 'y' ?
          this.scale(1, -1, 0, o) :
          this.scale(-1, -1, a, o != null ? o : a)
    }
    // Skew
  , skew: function(x, y, cx, cy) {
      // support uniformal skew
      if (arguments.length == 1) {
        y = x
      } else if (arguments.length == 3) {
        cy = cx
        cx = y
        y = x
      }

      // convert degrees to radians
      x = SVG.utils.radians(x)
      y = SVG.utils.radians(y)

      return this.around(cx, cy, new SVG.Matrix(1, Math.tan(y), Math.tan(x), 1, 0, 0))
    }
    // SkewX
  , skewX: function(x, cx, cy) {
      return this.skew(x, 0, cx, cy)
    }
    // SkewY
  , skewY: function(y, cx, cy) {
      return this.skew(0, y, cx, cy)
    }
    // Transform around a center point
  , around: function(cx, cy, matrix) {
      return this
        .multiply(new SVG.Matrix(1, 0, 0, 1, cx || 0, cy || 0))
        .multiply(matrix)
        .multiply(new SVG.Matrix(1, 0, 0, 1, -cx || 0, -cy || 0))
    }
    // Convert to native SVGMatrix
  , native: function() {
      // create new matrix
      var matrix = SVG.parser.native.createSVGMatrix()

      // update with current values
      for (var i = abcdef.length - 1; i >= 0; i--)
        matrix[abcdef[i]] = this[abcdef[i]]

      return matrix
    }
    // Convert matrix to string
  , toString: function() {
      // Construct the matrix directly, avoid values that are too small
      return 'matrix(' + float32String(this.a) + ',' + float32String(this.b)
        + ',' + float32String(this.c) + ',' + float32String(this.d)
        + ',' + float32String(this.e) + ',' + float32String(this.f)
        + ')'
    }
  }

  // Define parent
, parent: SVG.Element

  // Add parent method
, construct: {
    // Get current matrix
    ctm: function() {
      return new SVG.Matrix(this.node.getCTM())
    },
    // Get current screen matrix
    screenCTM: function() {
      /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
         This is needed because FF does not return the transformation matrix
         for the inner coordinate system when getScreenCTM() is called on nested svgs.
         However all other Browsers do that */
      if(this instanceof SVG.Nested) {
        var rect = this.rect(1,1)
        var m = rect.node.getScreenCTM()
        rect.remove()
        return new SVG.Matrix(m)
      }
      return new SVG.Matrix(this.node.getScreenCTM())
    }

  }

})

SVG.Point = SVG.invent({
  // Initialize
  create: function(x,y) {
    var i, source, base = {x:0, y:0}

    // ensure source as object
    source = Array.isArray(x) ?
      {x:x[0], y:x[1]} :
    typeof x === 'object' ?
      {x:x.x, y:x.y} :
    x != null ?
      {x:x, y:(y != null ? y : x)} : base // If y has no value, then x is used has its value

    // merge source
    this.x = source.x
    this.y = source.y
  }

  // Add methods
, extend: {
    // Clone point
    clone: function() {
      return new SVG.Point(this)
    }
    // Morph one point into another
  , morph: function(x, y) {
      // store new destination
      this.destination = new SVG.Point(x, y)

      return this
    }
    // Get morphed point at a given position
  , at: function(pos) {
      // make sure a destination is defined
      if (!this.destination) return this

      // calculate morphed matrix at a given position
      var point = new SVG.Point({
        x: this.x + (this.destination.x - this.x) * pos
      , y: this.y + (this.destination.y - this.y) * pos
      })

      return point
    }
    // Convert to native SVGPoint
  , native: function() {
      // create new point
      var point = SVG.parser.native.createSVGPoint()

      // update with current values
      point.x = this.x
      point.y = this.y

      return point
    }
    // transform point with matrix
  , transform: function(matrix) {
      return new SVG.Point(this.native().matrixTransform(matrix.native()))
    }

  }

})

SVG.extend(SVG.Element, {

  // Get point
  point: function(x, y) {
    return new SVG.Point(x,y).transform(this.screenCTM().inverse());
  }

})

SVG.extend(SVG.Element, {
  // Set svg element attribute
  attr: function(a, v, n) {
    // act as full getter
    if (a == null) {
      // get an object of attributes
      a = {}
      v = this.node.attributes
      for (n = v.length - 1; n >= 0; n--)
        a[v[n].nodeName] = SVG.regex.isNumber.test(v[n].nodeValue) ? parseFloat(v[n].nodeValue) : v[n].nodeValue

      return a

    } else if (typeof a == 'object') {
      // apply every attribute individually if an object is passed
      for (v in a) this.attr(v, a[v])

    } else if (v === null) {
        // remove value
        this.node.removeAttribute(a)

    } else if (v == null) {
      // act as a getter if the first and only argument is not an object
      v = this.node.getAttribute(a)
      return v == null ?
        SVG.defaults.attrs[a] :
      SVG.regex.isNumber.test(v) ?
        parseFloat(v) : v

    } else {
      // BUG FIX: some browsers will render a stroke if a color is given even though stroke width is 0
      if (a == 'stroke-width')
        this.attr('stroke', parseFloat(v) > 0 ? this._stroke : null)
      else if (a == 'stroke')
        this._stroke = v

      // convert image fill and stroke to patterns
      if (a == 'fill' || a == 'stroke') {
        if (SVG.regex.isImage.test(v))
          v = this.doc().defs().image(v, 0, 0)

        if (v instanceof SVG.Image)
          v = this.doc().defs().pattern(0, 0, function() {
            this.add(v)
          })
      }

      // ensure correct numeric values (also accepts NaN and Infinity)
      if (typeof v === 'number')
        v = new SVG.Number(v)

      // ensure full hex color
      else if (SVG.Color.isColor(v))
        v = new SVG.Color(v)

      // parse array values
      else if (Array.isArray(v))
        v = new SVG.Array(v)

      // if the passed attribute is leading...
      if (a == 'leading') {
        // ... call the leading method instead
        if (this.leading)
          this.leading(v)
      } else {
        // set given attribute on node
        typeof n === 'string' ?
          this.node.setAttributeNS(n, a, v.toString()) :
          this.node.setAttribute(a, v.toString())
      }

      // rebuild if required
      if (this.rebuild && (a == 'font-size' || a == 'x'))
        this.rebuild(a, v)
    }

    return this
  }
})
SVG.extend(SVG.Element, {
  // Add transformations
  transform: function(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this
      , matrix, bbox

    // act as a getter
    if (typeof o !== 'object') {
      // get current matrix
      matrix = new SVG.Matrix(target).extract()

      return typeof o === 'string' ? matrix[o] : matrix
    }

    // get current matrix
    matrix = new SVG.Matrix(target)

    // ensure relative flag
    relative = !!relative || !!o.relative

    // act on matrix
    if (o.a != null) {
      matrix = relative ?
        // relative
        matrix.multiply(new SVG.Matrix(o)) :
        // absolute
        new SVG.Matrix(o)

    // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      ensureCentre(o, target)

      // apply transformation
      matrix = relative ?
        // relative
        matrix.rotate(o.rotation, o.cx, o.cy) :
        // absolute
        matrix.rotate(o.rotation - matrix.extract().rotation, o.cx, o.cy)

    // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1

      if (!relative) {
        // absolute; multiply inversed values
        var e = matrix.extract()
        o.scaleX = o.scaleX * 1 / e.scaleX
        o.scaleY = o.scaleY * 1 / e.scaleY
      }

      matrix = matrix.scale(o.scaleX, o.scaleY, o.cx, o.cy)

    // act on skew
    } else if (o.skew != null || o.skewX != null || o.skewY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure skew values on both axes
      o.skewX = o.skew != null ? o.skew : o.skewX != null ? o.skewX : 0
      o.skewY = o.skew != null ? o.skew : o.skewY != null ? o.skewY : 0

      if (!relative) {
        // absolute; reset skew values
        var e = matrix.extract()
        matrix = matrix.multiply(new SVG.Matrix().skew(e.skewX, e.skewY, o.cx, o.cy).inverse())
      }

      matrix = matrix.skew(o.skewX, o.skewY, o.cx, o.cy)

    // act on flip
    } else if (o.flip) {
      if(o.flip == 'x' || o.flip == 'y') {
        o.offset = o.offset == null ? target.bbox()['c' + o.flip] : o.offset
      } else {
        if(o.offset == null) {
          bbox = target.bbox()
          o.flip = bbox.cx
          o.offset = bbox.cy
        } else {
          o.flip = o.offset
        }
      }

      matrix = new SVG.Matrix().flip(o.flip, o.offset)

    // act on translate
    } else if (o.x != null || o.y != null) {
      if (relative) {
        // relative
        matrix = matrix.translate(o.x, o.y)
      } else {
        // absolute
        if (o.x != null) matrix.e = o.x
        if (o.y != null) matrix.f = o.y
      }
    }

    return this.attr('transform', matrix)
  }
})

SVG.extend(SVG.FX, {
  transform: function(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this.target()
      , matrix, bbox

    // act as a getter
    if (typeof o !== 'object') {
      // get current matrix
      matrix = new SVG.Matrix(target).extract()

      return typeof o === 'string' ? matrix[o] : matrix
    }

    // ensure relative flag
    relative = !!relative || !!o.relative

    // act on matrix
    if (o.a != null) {
      matrix = new SVG.Matrix(o)

    // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      ensureCentre(o, target)

      // apply transformation
      matrix = new SVG.Rotate(o.rotation, o.cx, o.cy)

    // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1

      matrix = new SVG.Scale(o.scaleX, o.scaleY, o.cx, o.cy)

    // act on skew
    } else if (o.skewX != null || o.skewY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure skew values on both axes
      o.skewX = o.skewX != null ? o.skewX : 0
      o.skewY = o.skewY != null ? o.skewY : 0

      matrix = new SVG.Skew(o.skewX, o.skewY, o.cx, o.cy)

    // act on flip
    } else if (o.flip) {
      if(o.flip == 'x' || o.flip == 'y') {
        o.offset = o.offset == null ? target.bbox()['c' + o.flip] : o.offset
      } else {
        if(o.offset == null) {
          bbox = target.bbox()
          o.flip = bbox.cx
          o.offset = bbox.cy
        } else {
          o.flip = o.offset
        }
      }

      matrix = new SVG.Matrix().flip(o.flip, o.offset)

    // act on translate
    } else if (o.x != null || o.y != null) {
      matrix = new SVG.Translate(o.x, o.y)
    }

    if(!matrix) return this

    matrix.relative = relative

    this.last().transforms.push(matrix)

    return this._callStart()
  }
})

SVG.extend(SVG.Element, {
  // Reset all transformations
  untransform: function() {
    return this.attr('transform', null)
  },
  // merge the whole transformation chain into one matrix and returns it
  matrixify: function() {

    var matrix = (this.attr('transform') || '')
      // split transformations
      .split(SVG.regex.transforms).slice(0,-1).map(function(str){
        // generate key => value pairs
        var kv = str.trim().split('(')
        return [kv[0], kv[1].split(SVG.regex.delimiter).map(function(str){ return parseFloat(str) })]
      })
      // merge every transformation into one matrix
      .reduce(function(matrix, transform){

        if(transform[0] == 'matrix') return matrix.multiply(arrayToMatrix(transform[1]))
        return matrix[transform[0]].apply(matrix, transform[1])

      }, new SVG.Matrix())

    return matrix
  },
  // add an element to another parent without changing the visual representation on the screen
  toParent: function(parent) {
    if(this == parent) return this
    var ctm = this.screenCTM()
    var pCtm = parent.screenCTM().inverse()

    this.addTo(parent).untransform().transform(pCtm.multiply(ctm))

    return this
  },
  // same as above with parent equals root-svg
  toDoc: function() {
    return this.toParent(this.doc())
  }

})

SVG.Transformation = SVG.invent({

  create: function(source, inversed){

    if(arguments.length > 1 && typeof inversed != 'boolean'){
      return this.constructor.call(this, [].slice.call(arguments))
    }

    if(Array.isArray(source)){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        this[this.arguments[i]] = source[i]
      }
    } else if(typeof source == 'object'){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        this[this.arguments[i]] = source[this.arguments[i]]
      }
    }

    this.inversed = false

    if(inversed === true){
      this.inversed = true
    }

  }

, extend: {

    arguments: []
  , method: ''

  , at: function(pos){

      var params = []

      for(var i = 0, len = this.arguments.length; i < len; ++i){
        params.push(this[this.arguments[i]])
      }

      var m = this._undo || new SVG.Matrix()

      m = new SVG.Matrix().morph(SVG.Matrix.prototype[this.method].apply(m, params)).at(pos)

      return this.inversed ? m.inverse() : m

    }

  , undo: function(o){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        o[this.arguments[i]] = typeof this[this.arguments[i]] == 'undefined' ? 0 : o[this.arguments[i]]
      }

      // The method SVG.Matrix.extract which was used before calling this
      // method to obtain a value for the parameter o doesn't return a cx and
      // a cy so we use the ones that were provided to this object at its creation
      o.cx = this.cx
      o.cy = this.cy

      this._undo = new SVG[capitalize(this.method)](o, true).at(1)

      return this
    }

  }

})

SVG.Translate = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['transformedX', 'transformedY']
  , method: 'translate'
  }

})

SVG.Rotate = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['rotation', 'cx', 'cy']
  , method: 'rotate'
  , at: function(pos){
      var m = new SVG.Matrix().rotate(new SVG.Number().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(pos), this.cx, this.cy)
      return this.inversed ? m.inverse() : m
    }
  , undo: function(o){
      this._undo = o
      return this
    }
  }

})

SVG.Scale = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['scaleX', 'scaleY', 'cx', 'cy']
  , method: 'scale'
  }

})

SVG.Skew = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['skewX', 'skewY', 'cx', 'cy']
  , method: 'skew'
  }

})

SVG.extend(SVG.Element, {
  // Dynamic style generator
  style: function(s, v) {
    if (arguments.length == 0) {
      // get full style
      return this.node.style.cssText || ''

    } else if (arguments.length < 2) {
      // apply every style individually if an object is passed
      if (typeof s == 'object') {
        for (v in s) this.style(v, s[v])

      } else if (SVG.regex.isCss.test(s)) {
        // parse css string
        s = s.split(/\s*;\s*/)
          // filter out suffix ; and stuff like ;;
          .filter(function(e) { return !!e })
          .map(function(e){ return e.split(/\s*:\s*/) })

        // apply every definition individually
        while (v = s.pop()) {
          this.style(v[0], v[1])
        }
      } else {
        // act as a getter if the first and only argument is not an object
        return this.node.style[camelCase(s)]
      }

    } else {
      this.node.style[camelCase(s)] = v === null || SVG.regex.isBlank.test(v) ? '' : v
    }

    return this
  }
})
SVG.Parent = SVG.invent({
  // Initialize node
  create: function(element) {
    this.constructor.call(this, element)
  }

  // Inherit from
, inherit: SVG.Element

  // Add class methods
, extend: {
    // Returns all child elements
    children: function() {
      return SVG.utils.map(SVG.utils.filterSVGElements(this.node.childNodes), function(node) {
        return SVG.adopt(node)
      })
    }
    // Add given element at a position
  , add: function(element, i) {
      if (i == null)
        this.node.appendChild(element.node)
      else if (element.node != this.node.childNodes[i])
        this.node.insertBefore(element.node, this.node.childNodes[i])

      return this
    }
    // Basically does the same as `add()` but returns the added element instead
  , put: function(element, i) {
      this.add(element, i)
      return element
    }
    // Checks if the given element is a child
  , has: function(element) {
      return this.index(element) >= 0
    }
    // Gets index of given element
  , index: function(element) {
      return [].slice.call(this.node.childNodes).indexOf(element.node)
    }
    // Get a element at the given index
  , get: function(i) {
      return SVG.adopt(this.node.childNodes[i])
    }
    // Get first child
  , first: function() {
      return this.get(0)
    }
    // Get the last child
  , last: function() {
      return this.get(this.node.childNodes.length - 1)
    }
    // Iterates over all children and invokes a given block
  , each: function(block, deep) {
      var i, il
        , children = this.children()

      for (i = 0, il = children.length; i < il; i++) {
        if (children[i] instanceof SVG.Element)
          block.apply(children[i], [i, children])

        if (deep && (children[i] instanceof SVG.Container))
          children[i].each(block, deep)
      }

      return this
    }
    // Remove a given child
  , removeElement: function(element) {
      this.node.removeChild(element.node)

      return this
    }
    // Remove all elements in this container
  , clear: function() {
      // remove children
      while(this.node.hasChildNodes())
        this.node.removeChild(this.node.lastChild)

      // remove defs reference
      delete this._defs

      return this
    }
  , // Get defs
    defs: function() {
      return this.doc().defs()
    }
  }

})

SVG.extend(SVG.Parent, {

  ungroup: function(parent, depth) {
    if(depth === 0 || this instanceof SVG.Defs || this.node == SVG.parser.draw) return this

    parent = parent || (this instanceof SVG.Doc ? this : this.parent(SVG.Parent))
    depth = depth || Infinity

    this.each(function(){
      if(this instanceof SVG.Defs) return this
      if(this instanceof SVG.Parent) return this.ungroup(parent, depth-1)
      return this.toParent(parent)
    })

    this.node.firstChild || this.remove()

    return this
  },

  flatten: function(parent, depth) {
    return this.ungroup(parent, depth)
  }

})
SVG.Container = SVG.invent({
  // Initialize node
  create: function(element) {
    this.constructor.call(this, element)
  }

  // Inherit from
, inherit: SVG.Parent

})

SVG.ViewBox = SVG.invent({

  create: function(source) {
    var i, base = [0, 0, 0, 0]

    var x, y, width, height, box, view, we, he
      , wm   = 1 // width multiplier
      , hm   = 1 // height multiplier
      , reg  = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi

    if(source instanceof SVG.Element){

      we = source
      he = source
      view = (source.attr('viewBox') || '').match(reg)
      box = source.bbox

      // get dimensions of current node
      width  = new SVG.Number(source.width())
      height = new SVG.Number(source.height())

      // find nearest non-percentual dimensions
      while (width.unit == '%') {
        wm *= width.value
        width = new SVG.Number(we instanceof SVG.Doc ? we.parent().offsetWidth : we.parent().width())
        we = we.parent()
      }
      while (height.unit == '%') {
        hm *= height.value
        height = new SVG.Number(he instanceof SVG.Doc ? he.parent().offsetHeight : he.parent().height())
        he = he.parent()
      }

      // ensure defaults
      this.x      = 0
      this.y      = 0
      this.width  = width  * wm
      this.height = height * hm
      this.zoom   = 1

      if (view) {
        // get width and height from viewbox
        x      = parseFloat(view[0])
        y      = parseFloat(view[1])
        width  = parseFloat(view[2])
        height = parseFloat(view[3])

        // calculate zoom accoring to viewbox
        this.zoom = ((this.width / this.height) > (width / height)) ?
          this.height / height :
          this.width  / width

        // calculate real pixel dimensions on parent SVG.Doc element
        this.x      = x
        this.y      = y
        this.width  = width
        this.height = height

      }

    }else{

      // ensure source as object
      source = typeof source === 'string' ?
        source.match(reg).map(function(el){ return parseFloat(el) }) :
      Array.isArray(source) ?
        source :
      typeof source == 'object' ?
        [source.x, source.y, source.width, source.height] :
      arguments.length == 4 ?
        [].slice.call(arguments) :
        base

      this.x = source[0]
      this.y = source[1]
      this.width = source[2]
      this.height = source[3]
    }


  }

, extend: {

    toString: function() {
      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height
    }
  , morph: function(x, y, width, height){
      this.destination = new SVG.ViewBox(x, y, width, height)
      return this
    }

  , at: function(pos) {

      if(!this.destination) return this

      return new SVG.ViewBox([
          this.x + (this.destination.x - this.x) * pos
        , this.y + (this.destination.y - this.y) * pos
        , this.width + (this.destination.width - this.width) * pos
        , this.height + (this.destination.height - this.height) * pos
      ])

    }

  }

  // Define parent
, parent: SVG.Container

  // Add parent method
, construct: {

    // get/set viewbox
    viewbox: function(x, y, width, height) {
      if (arguments.length == 0)
        // act as a getter if there are no arguments
        return new SVG.ViewBox(this)

      // otherwise act as a setter
      return this.attr('viewBox', new SVG.ViewBox(x, y, width, height))
    }

  }

})
// Add events to elements
;[  'click'
  , 'dblclick'
  , 'mousedown'
  , 'mouseup'
  , 'mouseover'
  , 'mouseout'
  , 'mousemove'
  // , 'mouseenter' -> not supported by IE
  // , 'mouseleave' -> not supported by IE
  , 'touchstart'
  , 'touchmove'
  , 'touchleave'
  , 'touchend'
  , 'touchcancel' ].forEach(function(event) {

  // add event to SVG.Element
  SVG.Element.prototype[event] = function(f) {
    // bind event to element rather than element node
    SVG.on(this.node, event, f)
    return this
  }
})

// Initialize listeners stack
SVG.listeners = []
SVG.handlerMap = []
SVG.listenerId = 0

// Add event binder in the SVG namespace
SVG.on = function(node, event, listener, binding, options) {
  // create listener, get object-index
  var l     = listener.bind(binding || node.instance || node)
    , index = (SVG.handlerMap.indexOf(node) + 1 || SVG.handlerMap.push(node)) - 1
    , ev    = event.split('.')[0]
    , ns    = event.split('.')[1] || '*'


  // ensure valid object
  SVG.listeners[index]         = SVG.listeners[index]         || {}
  SVG.listeners[index][ev]     = SVG.listeners[index][ev]     || {}
  SVG.listeners[index][ev][ns] = SVG.listeners[index][ev][ns] || {}

  if(!listener._svgjsListenerId)
    listener._svgjsListenerId = ++SVG.listenerId

  // reference listener
  SVG.listeners[index][ev][ns][listener._svgjsListenerId] = l

  // add listener
  node.addEventListener(ev, l, options || false)
}

// Add event unbinder in the SVG namespace
SVG.off = function(node, event, listener) {
  var index = SVG.handlerMap.indexOf(node)
    , ev    = event && event.split('.')[0]
    , ns    = event && event.split('.')[1]
    , namespace = ''

  if(index == -1) return

  if (listener) {
    if(typeof listener == 'function') listener = listener._svgjsListenerId
    if(!listener) return

    // remove listener reference
    if (SVG.listeners[index][ev] && SVG.listeners[index][ev][ns || '*']) {
      // remove listener
      node.removeEventListener(ev, SVG.listeners[index][ev][ns || '*'][listener], false)

      delete SVG.listeners[index][ev][ns || '*'][listener]
    }

  } else if (ns && ev) {
    // remove all listeners for a namespaced event
    if (SVG.listeners[index][ev] && SVG.listeners[index][ev][ns]) {
      for (listener in SVG.listeners[index][ev][ns])
        SVG.off(node, [ev, ns].join('.'), listener)

      delete SVG.listeners[index][ev][ns]
    }

  } else if (ns){
    // remove all listeners for a specific namespace
    for(event in SVG.listeners[index]){
        for(namespace in SVG.listeners[index][event]){
            if(ns === namespace){
                SVG.off(node, [event, ns].join('.'))
            }
        }
    }

  } else if (ev) {
    // remove all listeners for the event
    if (SVG.listeners[index][ev]) {
      for (namespace in SVG.listeners[index][ev])
        SVG.off(node, [ev, namespace].join('.'))

      delete SVG.listeners[index][ev]
    }

  } else {
    // remove all listeners on a given node
    for (event in SVG.listeners[index])
      SVG.off(node, event)

    delete SVG.listeners[index]
    delete SVG.handlerMap[index]

  }
}

//
SVG.extend(SVG.Element, {
  // Bind given event to listener
  on: function(event, listener, binding, options) {
    SVG.on(this.node, event, listener, binding, options)

    return this
  }
  // Unbind event from listener
, off: function(event, listener) {
    SVG.off(this.node, event, listener)

    return this
  }
  // Fire given event
, fire: function(event, data) {

    // Dispatch event
    if(event instanceof window.Event){
        this.node.dispatchEvent(event)
    }else{
        this.node.dispatchEvent(event = new SVG.CustomEvent(event, {detail:data, cancelable: true}))
    }

    this._event = event
    return this
  }
, event: function() {
    return this._event
  }
})


SVG.Defs = SVG.invent({
  // Initialize node
  create: 'defs'

  // Inherit from
, inherit: SVG.Container

})
SVG.G = SVG.invent({
  // Initialize node
  create: 'g'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Move over x-axis
    x: function(x) {
      return x == null ? this.transform('x') : this.transform({ x: x - this.x() }, true)
    }
    // Move over y-axis
  , y: function(y) {
      return y == null ? this.transform('y') : this.transform({ y: y - this.y() }, true)
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.gbox().cx : this.x(x - this.gbox().width / 2)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.gbox().cy : this.y(y - this.gbox().height / 2)
    }
  , gbox: function() {

      var bbox  = this.bbox()
        , trans = this.transform()

      bbox.x  += trans.x
      bbox.x2 += trans.x
      bbox.cx += trans.x

      bbox.y  += trans.y
      bbox.y2 += trans.y
      bbox.cy += trans.y

      return bbox
    }
  }

  // Add parent method
, construct: {
    // Create a group element
    group: function() {
      return this.put(new SVG.G)
    }
  }
})

SVG.Doc = SVG.invent({
  // Initialize node
  create: function(element) {
    if (element) {
      // ensure the presence of a dom element
      element = typeof element == 'string' ?
        document.getElementById(element) :
        element

      // If the target is an svg element, use that element as the main wrapper.
      // This allows svg.js to work with svg documents as well.
      if (element.nodeName == 'svg') {
        this.constructor.call(this, element)
      } else {
        this.constructor.call(this, SVG.create('svg'))
        element.appendChild(this.node)
        this.size('100%', '100%')
      }

      // set svg element attributes and ensure defs node
      this.namespace().defs()
    }
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Add namespaces
    namespace: function() {
      return this
        .attr({ xmlns: SVG.ns, version: '1.1' })
        .attr('xmlns:xlink', SVG.xlink, SVG.xmlns)
        .attr('xmlns:svgjs', SVG.svgjs, SVG.xmlns)
    }
    // Creates and returns defs element
  , defs: function() {
      if (!this._defs) {
        var defs

        // Find or create a defs element in this instance
        if (defs = this.node.getElementsByTagName('defs')[0])
          this._defs = SVG.adopt(defs)
        else
          this._defs = new SVG.Defs

        // Make sure the defs node is at the end of the stack
        this.node.appendChild(this._defs.node)
      }

      return this._defs
    }
    // custom parent method
  , parent: function() {
      if(!this.node.parentNode || this.node.parentNode.nodeName == '#document') return null
      return this.node.parentNode
    }
    // Fix for possible sub-pixel offset. See:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=608812
  , spof: function() {
      var pos = this.node.getScreenCTM()

      if (pos)
        this
          .style('left', (-pos.e % 1) + 'px')
          .style('top',  (-pos.f % 1) + 'px')

      return this
    }

      // Removes the doc from the DOM
  , remove: function() {
      if(this.parent()) {
        this.parent().removeChild(this.node)
      }

      return this
    }
  , clear: function() {
      // remove children
      while(this.node.hasChildNodes())
        this.node.removeChild(this.node.lastChild)

      // remove defs reference
      delete this._defs

      // add back parser
      if(!SVG.parser.draw.parentNode)
        this.node.appendChild(SVG.parser.draw)

      return this
    }
  , clone: function (parent) {
      // write dom data to the dom so the clone can pickup the data
      this.writeDataToDom()

      // get reference to node
      var node = this.node

      // clone element and assign new id
      var clone = assignNewId(node.cloneNode(true))

      // insert the clone in the given parent or after myself
      if(parent) {
        (parent.node || parent).appendChild(clone.node)
      } else {
        node.parentNode.insertBefore(clone.node, node.nextSibling)
      }

      return clone
    }
  }

})

// ### This module adds backward / forward functionality to elements.

//
SVG.extend(SVG.Element, {
  // Get all siblings, including myself
  siblings: function() {
    return this.parent().children()
  }
  // Get the curent position siblings
, position: function() {
    return this.parent().index(this)
  }
  // Get the next element (will return null if there is none)
, next: function() {
    return this.siblings()[this.position() + 1]
  }
  // Get the next element (will return null if there is none)
, previous: function() {
    return this.siblings()[this.position() - 1]
  }
  // Send given element one step forward
, forward: function() {
    var i = this.position() + 1
      , p = this.parent()

    // move node one step forward
    p.removeElement(this).add(this, i)

    // make sure defs node is always at the top
    if (p instanceof SVG.Doc)
      p.node.appendChild(p.defs().node)

    return this
  }
  // Send given element one step backward
, backward: function() {
    var i = this.position()

    if (i > 0)
      this.parent().removeElement(this).add(this, i - 1)

    return this
  }
  // Send given element all the way to the front
, front: function() {
    var p = this.parent()

    // Move node forward
    p.node.appendChild(this.node)

    // Make sure defs node is always at the top
    if (p instanceof SVG.Doc)
      p.node.appendChild(p.defs().node)

    return this
  }
  // Send given element all the way to the back
, back: function() {
    if (this.position() > 0)
      this.parent().removeElement(this).add(this, 0)

    return this
  }
  // Inserts a given element before the targeted element
, before: function(element) {
    element.remove()

    var i = this.position()

    this.parent().add(element, i)

    return this
  }
  // Insters a given element after the targeted element
, after: function(element) {
    element.remove()

    var i = this.position()

    this.parent().add(element, i + 1)

    return this
  }

})
SVG.Mask = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('mask'))

    // keep references to masked elements
    this.targets = []
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Unmask all masked elements and remove itself
    remove: function() {
      // unmask all targets
      for (var i = this.targets.length - 1; i >= 0; i--)
        if (this.targets[i])
          this.targets[i].unmask()
      this.targets = []

      // remove mask from parent
      SVG.Element.prototype.remove.call(this)

      return this
    }
  }

  // Add parent method
, construct: {
    // Create masking element
    mask: function() {
      return this.defs().put(new SVG.Mask)
    }
  }
})


SVG.extend(SVG.Element, {
  // Distribute mask to svg element
  maskWith: function(element) {
    // use given mask or create a new one
    this.masker = element instanceof SVG.Mask ? element : this.parent().mask().add(element)

    // store reverence on self in mask
    this.masker.targets.push(this)

    // apply mask
    return this.attr('mask', 'url("#' + this.masker.attr('id') + '")')
  }
  // Unmask element
, unmask: function() {
    delete this.masker
    return this.attr('mask', null)
  }

})

SVG.ClipPath = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('clipPath'))

    // keep references to clipped elements
    this.targets = []
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Unclip all clipped elements and remove itself
    remove: function() {
      // unclip all targets
      for (var i = this.targets.length - 1; i >= 0; i--)
        if (this.targets[i])
          this.targets[i].unclip()
      this.targets = []

      // remove clipPath from parent
      this.parent().removeElement(this)

      return this
    }
  }

  // Add parent method
, construct: {
    // Create clipping element
    clip: function() {
      return this.defs().put(new SVG.ClipPath)
    }
  }
})

//
SVG.extend(SVG.Element, {
  // Distribute clipPath to svg element
  clipWith: function(element) {
    // use given clip or create a new one
    this.clipper = element instanceof SVG.ClipPath ? element : this.parent().clip().add(element)

    // store reverence on self in mask
    this.clipper.targets.push(this)

    // apply mask
    return this.attr('clip-path', 'url("#' + this.clipper.attr('id') + '")')
  }
  // Unclip element
, unclip: function() {
    delete this.clipper
    return this.attr('clip-path', null)
  }

})
SVG.Gradient = SVG.invent({
  // Initialize node
  create: function(type) {
    this.constructor.call(this, SVG.create(type + 'Gradient'))

    // store type
    this.type = type
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Add a color stop
    at: function(offset, color, opacity) {
      return this.put(new SVG.Stop).update(offset, color, opacity)
    }
    // Update gradient
  , update: function(block) {
      // remove all stops
      this.clear()

      // invoke passed block
      if (typeof block == 'function')
        block.call(this, this)

      return this
    }
    // Return the fill id
  , fill: function() {
      return 'url(#' + this.id() + ')'
    }
    // Alias string convertion to fill
  , toString: function() {
      return this.fill()
    }
    // custom attr to handle transform
  , attr: function(a, b, c) {
      if(a == 'transform') a = 'gradientTransform'
      return SVG.Container.prototype.attr.call(this, a, b, c)
    }
  }

  // Add parent method
, construct: {
    // Create gradient element in defs
    gradient: function(type, block) {
      return this.defs().gradient(type, block)
    }
  }
})

// Add animatable methods to both gradient and fx module
SVG.extend(SVG.Gradient, SVG.FX, {
  // From position
  from: function(x, y) {
    return (this._target || this).type == 'radial' ?
      this.attr({ fx: new SVG.Number(x), fy: new SVG.Number(y) }) :
      this.attr({ x1: new SVG.Number(x), y1: new SVG.Number(y) })
  }
  // To position
, to: function(x, y) {
    return (this._target || this).type == 'radial' ?
      this.attr({ cx: new SVG.Number(x), cy: new SVG.Number(y) }) :
      this.attr({ x2: new SVG.Number(x), y2: new SVG.Number(y) })
  }
})

// Base gradient generation
SVG.extend(SVG.Defs, {
  // define gradient
  gradient: function(type, block) {
    return this.put(new SVG.Gradient(type)).update(block)
  }

})

SVG.Stop = SVG.invent({
  // Initialize node
  create: 'stop'

  // Inherit from
, inherit: SVG.Element

  // Add class methods
, extend: {
    // add color stops
    update: function(o) {
      if (typeof o == 'number' || o instanceof SVG.Number) {
        o = {
          offset:  arguments[0]
        , color:   arguments[1]
        , opacity: arguments[2]
        }
      }

      // set attributes
      if (o.opacity != null) this.attr('stop-opacity', o.opacity)
      if (o.color   != null) this.attr('stop-color', o.color)
      if (o.offset  != null) this.attr('offset', new SVG.Number(o.offset))

      return this
    }
  }

})

SVG.Pattern = SVG.invent({
  // Initialize node
  create: 'pattern'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Return the fill id
    fill: function() {
      return 'url(#' + this.id() + ')'
    }
    // Update pattern by rebuilding
  , update: function(block) {
      // remove content
      this.clear()

      // invoke passed block
      if (typeof block == 'function')
        block.call(this, this)

      return this
    }
    // Alias string convertion to fill
  , toString: function() {
      return this.fill()
    }
    // custom attr to handle transform
  , attr: function(a, b, c) {
      if(a == 'transform') a = 'patternTransform'
      return SVG.Container.prototype.attr.call(this, a, b, c)
    }

  }

  // Add parent method
, construct: {
    // Create pattern element in defs
    pattern: function(width, height, block) {
      return this.defs().pattern(width, height, block)
    }
  }
})

SVG.extend(SVG.Defs, {
  // Define gradient
  pattern: function(width, height, block) {
    return this.put(new SVG.Pattern).update(block).attr({
      x:            0
    , y:            0
    , width:        width
    , height:       height
    , patternUnits: 'userSpaceOnUse'
    })
  }

})
SVG.Shape = SVG.invent({
  // Initialize node
  create: function(element) {
    this.constructor.call(this, element)
  }

  // Inherit from
, inherit: SVG.Element

})

SVG.Bare = SVG.invent({
  // Initialize
  create: function(element, inherit) {
    // construct element
    this.constructor.call(this, SVG.create(element))

    // inherit custom methods
    if (inherit)
      for (var method in inherit.prototype)
        if (typeof inherit.prototype[method] === 'function')
          this[method] = inherit.prototype[method]
  }

  // Inherit from
, inherit: SVG.Element

  // Add methods
, extend: {
    // Insert some plain text
    words: function(text) {
      // remove contents
      while (this.node.hasChildNodes())
        this.node.removeChild(this.node.lastChild)

      // create text node
      this.node.appendChild(document.createTextNode(text))

      return this
    }
  }
})


SVG.extend(SVG.Parent, {
  // Create an element that is not described by SVG.js
  element: function(element, inherit) {
    return this.put(new SVG.Bare(element, inherit))
  }
})

SVG.Symbol = SVG.invent({
  // Initialize node
  create: 'symbol'

  // Inherit from
, inherit: SVG.Container

, construct: {
    // create symbol
    symbol: function() {
      return this.put(new SVG.Symbol)
    }
  }
})

SVG.Use = SVG.invent({
  // Initialize node
  create: 'use'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Use element as a reference
    element: function(element, file) {
      // Set lined element
      return this.attr('href', (file || '') + '#' + element, SVG.xlink)
    }
  }

  // Add parent method
, construct: {
    // Create a use element
    use: function(element, file) {
      return this.put(new SVG.Use).element(element, file)
    }
  }
})
SVG.Rect = SVG.invent({
  // Initialize node
  create: 'rect'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create a rect element
    rect: function(width, height) {
      return this.put(new SVG.Rect()).size(width, height)
    }
  }
})
SVG.Circle = SVG.invent({
  // Initialize node
  create: 'circle'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create circle element, based on ellipse
    circle: function(size) {
      return this.put(new SVG.Circle).rx(new SVG.Number(size).divide(2)).move(0, 0)
    }
  }
})

SVG.extend(SVG.Circle, SVG.FX, {
  // Radius x value
  rx: function(rx) {
    return this.attr('r', rx)
  }
  // Alias radius x value
, ry: function(ry) {
    return this.rx(ry)
  }
})

SVG.Ellipse = SVG.invent({
  // Initialize node
  create: 'ellipse'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create an ellipse
    ellipse: function(width, height) {
      return this.put(new SVG.Ellipse).size(width, height).move(0, 0)
    }
  }
})

SVG.extend(SVG.Ellipse, SVG.Rect, SVG.FX, {
  // Radius x value
  rx: function(rx) {
    return this.attr('rx', rx)
  }
  // Radius y value
, ry: function(ry) {
    return this.attr('ry', ry)
  }
})

// Add common method
SVG.extend(SVG.Circle, SVG.Ellipse, {
    // Move over x-axis
    x: function(x) {
      return x == null ? this.cx() - this.rx() : this.cx(x + this.rx())
    }
    // Move over y-axis
  , y: function(y) {
      return y == null ? this.cy() - this.ry() : this.cy(y + this.ry())
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.attr('cx') : this.attr('cx', x)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.attr('cy') : this.attr('cy', y)
    }
    // Set width of element
  , width: function(width) {
      return width == null ? this.rx() * 2 : this.rx(new SVG.Number(width).divide(2))
    }
    // Set height of element
  , height: function(height) {
      return height == null ? this.ry() * 2 : this.ry(new SVG.Number(height).divide(2))
    }
    // Custom size function
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this
        .rx(new SVG.Number(p.width).divide(2))
        .ry(new SVG.Number(p.height).divide(2))
    }
})
SVG.Line = SVG.invent({
  // Initialize node
  create: 'line'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Get array
    array: function() {
      return new SVG.PointArray([
        [ this.attr('x1'), this.attr('y1') ]
      , [ this.attr('x2'), this.attr('y2') ]
      ])
    }
    // Overwrite native plot() method
  , plot: function(x1, y1, x2, y2) {
      if (x1 == null)
        return this.array()
      else if (typeof y1 !== 'undefined')
        x1 = { x1: x1, y1: y1, x2: x2, y2: y2 }
      else
        x1 = new SVG.PointArray(x1).toLine()

      return this.attr(x1)
    }
    // Move by left top corner
  , move: function(x, y) {
      return this.attr(this.array().move(x, y).toLine())
    }
    // Set element size to given width and height
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this.attr(this.array().size(p.width, p.height).toLine())
    }
  }

  // Add parent method
, construct: {
    // Create a line element
    line: function(x1, y1, x2, y2) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a SVG.PointArray
      return SVG.Line.prototype.plot.apply(
        this.put(new SVG.Line)
      , x1 != null ? [x1, y1, x2, y2] : [0, 0, 0, 0]
      )
    }
  }
})

SVG.Polyline = SVG.invent({
  // Initialize node
  create: 'polyline'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create a wrapped polyline element
    polyline: function(p) {
      // make sure plot is called as a setter
      return this.put(new SVG.Polyline).plot(p || new SVG.PointArray)
    }
  }
})

SVG.Polygon = SVG.invent({
  // Initialize node
  create: 'polygon'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create a wrapped polygon element
    polygon: function(p) {
      // make sure plot is called as a setter
      return this.put(new SVG.Polygon).plot(p || new SVG.PointArray)
    }
  }
})

// Add polygon-specific functions
SVG.extend(SVG.Polyline, SVG.Polygon, {
  // Get array
  array: function() {
    return this._array || (this._array = new SVG.PointArray(this.attr('points')))
  }
  // Plot new path
, plot: function(p) {
    return (p == null) ?
      this.array() :
      this.clear().attr('points', typeof p == 'string' ? p : (this._array = new SVG.PointArray(p)))
  }
  // Clear array cache
, clear: function() {
    delete this._array
    return this
  }
  // Move by left top corner
, move: function(x, y) {
    return this.attr('points', this.array().move(x, y))
  }
  // Set element size to given width and height
, size: function(width, height) {
    var p = proportionalSize(this, width, height)

    return this.attr('points', this.array().size(p.width, p.height))
  }

})

// unify all point to point elements
SVG.extend(SVG.Line, SVG.Polyline, SVG.Polygon, {
  // Define morphable array
  morphArray:  SVG.PointArray
  // Move by left top corner over x-axis
, x: function(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y)
  }
  // Move by left top corner over y-axis
, y: function(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y)
  }
  // Set width of element
, width: function(width) {
    var b = this.bbox()

    return width == null ? b.width : this.size(width, b.height)
  }
  // Set height of element
, height: function(height) {
    var b = this.bbox()

    return height == null ? b.height : this.size(b.width, height)
  }
})
SVG.Path = SVG.invent({
  // Initialize node
  create: 'path'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Define morphable array
    morphArray:  SVG.PathArray
    // Get array
  , array: function() {
      return this._array || (this._array = new SVG.PathArray(this.attr('d')))
    }
    // Plot new path
  , plot: function(d) {
      return (d == null) ?
        this.array() :
        this.clear().attr('d', typeof d == 'string' ? d : (this._array = new SVG.PathArray(d)))
    }
    // Clear array cache
  , clear: function() {
      delete this._array
      return this
    }
    // Move by left top corner
  , move: function(x, y) {
      return this.attr('d', this.array().move(x, y))
    }
    // Move by left top corner over x-axis
  , x: function(x) {
      return x == null ? this.bbox().x : this.move(x, this.bbox().y)
    }
    // Move by left top corner over y-axis
  , y: function(y) {
      return y == null ? this.bbox().y : this.move(this.bbox().x, y)
    }
    // Set element size to given width and height
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this.attr('d', this.array().size(p.width, p.height))
    }
    // Set width of element
  , width: function(width) {
      return width == null ? this.bbox().width : this.size(width, this.bbox().height)
    }
    // Set height of element
  , height: function(height) {
      return height == null ? this.bbox().height : this.size(this.bbox().width, height)
    }

  }

  // Add parent method
, construct: {
    // Create a wrapped path element
    path: function(d) {
      // make sure plot is called as a setter
      return this.put(new SVG.Path).plot(d || new SVG.PathArray)
    }
  }
})

SVG.Image = SVG.invent({
  // Initialize node
  create: 'image'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // (re)load image
    load: function(url) {
      if (!url) return this

      var self = this
        , img  = new window.Image()

      // preload image
      SVG.on(img, 'load', function() {
        SVG.off(img)

        var p = self.parent(SVG.Pattern)

        if(p === null) return

        // ensure image size
        if (self.width() == 0 && self.height() == 0)
          self.size(img.width, img.height)

        // ensure pattern size if not set
        if (p && p.width() == 0 && p.height() == 0)
          p.size(self.width(), self.height())

        // callback
        if (typeof self._loaded === 'function')
          self._loaded.call(self, {
            width:  img.width
          , height: img.height
          , ratio:  img.width / img.height
          , url:    url
          })
      })

      SVG.on(img, 'error', function(e){
        SVG.off(img)

        if (typeof self._error === 'function'){
            self._error.call(self, e)
        }
      })

      return this.attr('href', (img.src = this.src = url), SVG.xlink)
    }
    // Add loaded callback
  , loaded: function(loaded) {
      this._loaded = loaded
      return this
    }

  , error: function(error) {
      this._error = error
      return this
    }
  }

  // Add parent method
, construct: {
    // create image element, load image and set its size
    image: function(source, width, height) {
      return this.put(new SVG.Image).load(source).size(width || 0, height || width || 0)
    }
  }

})
SVG.Text = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('text'))

    this.dom.leading = new SVG.Number(1.3)    // store leading value for rebuilding
    this._rebuild = true                      // enable automatic updating of dy values
    this._build   = false                     // disable build mode for adding multiple lines

    // set default font
    this.attr('font-family', SVG.defaults.attrs['font-family'])
  }

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Move over x-axis
    x: function(x) {
      // act as getter
      if (x == null)
        return this.attr('x')

      return this.attr('x', x)
    }
    // Move over y-axis
  , y: function(y) {
      var oy = this.attr('y')
        , o  = typeof oy === 'number' ? oy - this.bbox().y : 0

      // act as getter
      if (y == null)
        return typeof oy === 'number' ? oy - o : oy

      return this.attr('y', typeof y.valueOf() === 'number' ? y + o : y)
    }
    // Move center over x-axis
  , cx: function(x) {
      return x == null ? this.bbox().cx : this.x(x - this.bbox().width / 2)
    }
    // Move center over y-axis
  , cy: function(y) {
      return y == null ? this.bbox().cy : this.y(y - this.bbox().height / 2)
    }
    // Set the text content
  , text: function(text) {
      // act as getter
      if (typeof text === 'undefined'){
        var text = ''
        var children = this.node.childNodes
        for(var i = 0, len = children.length; i < len; ++i){

          // add newline if its not the first child and newLined is set to true
          if(i != 0 && children[i].nodeType != 3 && SVG.adopt(children[i]).dom.newLined == true){
            text += '\n'
          }

          // add content of this node
          text += children[i].textContent
        }

        return text
      }

      // remove existing content
      this.clear().build(true)

      if (typeof text === 'function') {
        // call block
        text.call(this, this)

      } else {
        // store text and make sure text is not blank
        text = text.split('\n')

        // build new lines
        for (var i = 0, il = text.length; i < il; i++)
          this.tspan(text[i]).newLine()
      }

      // disable build mode and rebuild lines
      return this.build(false).rebuild()
    }
    // Set font size
  , size: function(size) {
      return this.attr('font-size', size).rebuild()
    }
    // Set / get leading
  , leading: function(value) {
      // act as getter
      if (value == null)
        return this.dom.leading

      // act as setter
      this.dom.leading = new SVG.Number(value)

      return this.rebuild()
    }
    // Get all the first level lines
  , lines: function() {
      var node = (this.textPath && this.textPath() || this).node

      // filter tspans and map them to SVG.js instances
      var lines = SVG.utils.map(SVG.utils.filterSVGElements(node.childNodes), function(el){
        return SVG.adopt(el)
      })

      // return an instance of SVG.set
      return new SVG.Set(lines)
    }
    // Rebuild appearance type
  , rebuild: function(rebuild) {
      // store new rebuild flag if given
      if (typeof rebuild == 'boolean')
        this._rebuild = rebuild

      // define position of all lines
      if (this._rebuild) {
        var self = this
          , blankLineOffset = 0
          , dy = this.dom.leading * new SVG.Number(this.attr('font-size'))

        this.lines().each(function() {
          if (this.dom.newLined) {
            if (!self.textPath())
              this.attr('x', self.attr('x'))
            if(this.text() == '\n') {
              blankLineOffset += dy
            }else{
              this.attr('dy', dy + blankLineOffset)
              blankLineOffset = 0
            }
          }
        })

        this.fire('rebuild')
      }

      return this
    }
    // Enable / disable build mode
  , build: function(build) {
      this._build = !!build
      return this
    }
    // overwrite method from parent to set data properly
  , setData: function(o){
      this.dom = o
      this.dom.leading = new SVG.Number(o.leading || 1.3)
      return this
    }
  }

  // Add parent method
, construct: {
    // Create text element
    text: function(text) {
      return this.put(new SVG.Text).text(text)
    }
    // Create plain text element
  , plain: function(text) {
      return this.put(new SVG.Text).plain(text)
    }
  }

})

SVG.Tspan = SVG.invent({
  // Initialize node
  create: 'tspan'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Set text content
    text: function(text) {
      if(text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '')

      typeof text === 'function' ? text.call(this, this) : this.plain(text)

      return this
    }
    // Shortcut dx
  , dx: function(dx) {
      return this.attr('dx', dx)
    }
    // Shortcut dy
  , dy: function(dy) {
      return this.attr('dy', dy)
    }
    // Create new line
  , newLine: function() {
      // fetch text parent
      var t = this.parent(SVG.Text)

      // mark new line
      this.dom.newLined = true

      // apply new hy¡n
      return this.dy(t.dom.leading * t.attr('font-size')).attr('x', t.x())
    }
  }

})

SVG.extend(SVG.Text, SVG.Tspan, {
  // Create plain text node
  plain: function(text) {
    // clear if build mode is disabled
    if (this._build === false)
      this.clear()

    // create text node
    this.node.appendChild(document.createTextNode(text))

    return this
  }
  // Create a tspan
, tspan: function(text) {
    var node  = (this.textPath && this.textPath() || this).node
      , tspan = new SVG.Tspan

    // clear if build mode is disabled
    if (this._build === false)
      this.clear()

    // add new tspan
    node.appendChild(tspan.node)

    return tspan.text(text)
  }
  // Clear all lines
, clear: function() {
    var node = (this.textPath && this.textPath() || this).node

    // remove existing child nodes
    while (node.hasChildNodes())
      node.removeChild(node.lastChild)

    return this
  }
  // Get length of text element
, length: function() {
    return this.node.getComputedTextLength()
  }
})

SVG.TextPath = SVG.invent({
  // Initialize node
  create: 'textPath'

  // Inherit from
, inherit: SVG.Parent

  // Define parent class
, parent: SVG.Text

  // Add parent method
, construct: {
    morphArray: SVG.PathArray
    // Create path for text to run on
  , path: function(d) {
      // create textPath element
      var path  = new SVG.TextPath
        , track = this.doc().defs().path(d)

      // move lines to textpath
      while (this.node.hasChildNodes())
        path.node.appendChild(this.node.firstChild)

      // add textPath element as child node
      this.node.appendChild(path.node)

      // link textPath to path and add content
      path.attr('href', '#' + track, SVG.xlink)

      return this
    }
    // return the array of the path track element
  , array: function() {
      var track = this.track()

      return track ? track.array() : null
    }
    // Plot path if any
  , plot: function(d) {
      var track = this.track()
        , pathArray = null

      if (track) {
        pathArray = track.plot(d)
      }

      return (d == null) ? pathArray : this
    }
    // Get the path track element
  , track: function() {
      var path = this.textPath()

      if (path)
        return path.reference('href')
    }
    // Get the textPath child
  , textPath: function() {
      if (this.node.firstChild && this.node.firstChild.nodeName == 'textPath')
        return SVG.adopt(this.node.firstChild)
    }
  }
})

SVG.Nested = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('svg'))

    this.style('overflow', 'visible')
  }

  // Inherit from
, inherit: SVG.Container

  // Add parent method
, construct: {
    // Create nested svg document
    nested: function() {
      return this.put(new SVG.Nested)
    }
  }
})
SVG.A = SVG.invent({
  // Initialize node
  create: 'a'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Link url
    to: function(url) {
      return this.attr('href', url, SVG.xlink)
    }
    // Link show attribute
  , show: function(target) {
      return this.attr('show', target, SVG.xlink)
    }
    // Link target attribute
  , target: function(target) {
      return this.attr('target', target)
    }
  }

  // Add parent method
, construct: {
    // Create a hyperlink element
    link: function(url) {
      return this.put(new SVG.A).to(url)
    }
  }
})

SVG.extend(SVG.Element, {
  // Create a hyperlink element
  linkTo: function(url) {
    var link = new SVG.A

    if (typeof url == 'function')
      url.call(link, link)
    else
      link.to(url)

    return this.parent().put(link).put(this)
  }

})
SVG.Marker = SVG.invent({
  // Initialize node
  create: 'marker'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Set width of element
    width: function(width) {
      return this.attr('markerWidth', width)
    }
    // Set height of element
  , height: function(height) {
      return this.attr('markerHeight', height)
    }
    // Set marker refX and refY
  , ref: function(x, y) {
      return this.attr('refX', x).attr('refY', y)
    }
    // Update marker
  , update: function(block) {
      // remove all content
      this.clear()

      // invoke passed block
      if (typeof block == 'function')
        block.call(this, this)

      return this
    }
    // Return the fill id
  , toString: function() {
      return 'url(#' + this.id() + ')'
    }
  }

  // Add parent method
, construct: {
    marker: function(width, height, block) {
      // Create marker element in defs
      return this.defs().marker(width, height, block)
    }
  }

})

SVG.extend(SVG.Defs, {
  // Create marker
  marker: function(width, height, block) {
    // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
    return this.put(new SVG.Marker)
      .size(width, height)
      .ref(width / 2, height / 2)
      .viewbox(0, 0, width, height)
      .attr('orient', 'auto')
      .update(block)
  }

})

SVG.extend(SVG.Line, SVG.Polyline, SVG.Polygon, SVG.Path, {
  // Create and attach markers
  marker: function(marker, width, height, block) {
    var attr = ['marker']

    // Build attribute name
    if (marker != 'all') attr.push(marker)
    attr = attr.join('-')

    // Set marker attribute
    marker = arguments[1] instanceof SVG.Marker ?
      arguments[1] :
      this.doc().marker(width, height, block)

    return this.attr(attr, marker)
  }

})
// Define list of available attributes for stroke and fill
var sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset']
, fill:   ['color', 'opacity', 'rule']
, prefix: function(t, a) {
    return a == 'color' ? t : t + '-' + a
  }
}

// Add sugar for fill and stroke
;['fill', 'stroke'].forEach(function(m) {
  var i, extension = {}

  extension[m] = function(o) {
    if (typeof o == 'undefined')
      return this
    if (typeof o == 'string' || SVG.Color.isRgb(o) || (o && typeof o.fill === 'function'))
      this.attr(m, o)

    else
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--)
        if (o[sugar[m][i]] != null)
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]])

    return this
  }

  SVG.extend(SVG.Element, SVG.FX, extension)

})

SVG.extend(SVG.Element, SVG.FX, {
  // Map rotation to transform
  rotate: function(d, cx, cy) {
    return this.transform({ rotation: d, cx: cx, cy: cy })
  }
  // Map skew to transform
, skew: function(x, y, cx, cy) {
    return arguments.length == 1  || arguments.length == 3 ?
      this.transform({ skew: x, cx: y, cy: cx }) :
      this.transform({ skewX: x, skewY: y, cx: cx, cy: cy })
  }
  // Map scale to transform
, scale: function(x, y, cx, cy) {
    return arguments.length == 1  || arguments.length == 3 ?
      this.transform({ scale: x, cx: y, cy: cx }) :
      this.transform({ scaleX: x, scaleY: y, cx: cx, cy: cy })
  }
  // Map translate to transform
, translate: function(x, y) {
    return this.transform({ x: x, y: y })
  }
  // Map flip to transform
, flip: function(a, o) {
    o = typeof a == 'number' ? a : o
    return this.transform({ flip: a || 'both', offset: o })
  }
  // Map matrix to transform
, matrix: function(m) {
    return this.attr('transform', new SVG.Matrix(arguments.length == 6 ? [].slice.call(arguments) : m))
  }
  // Opacity
, opacity: function(value) {
    return this.attr('opacity', value)
  }
  // Relative move over x axis
, dx: function(x) {
    return this.x(new SVG.Number(x).plus(this instanceof SVG.FX ? 0 : this.x()), true)
  }
  // Relative move over y axis
, dy: function(y) {
    return this.y(new SVG.Number(y).plus(this instanceof SVG.FX ? 0 : this.y()), true)
  }
  // Relative move over x and y axes
, dmove: function(x, y) {
    return this.dx(x).dy(y)
  }
})

SVG.extend(SVG.Rect, SVG.Ellipse, SVG.Circle, SVG.Gradient, SVG.FX, {
  // Add x and y radius
  radius: function(x, y) {
    var type = (this._target || this).type;
    return type == 'radial' || type == 'circle' ?
      this.attr('r', new SVG.Number(x)) :
      this.rx(x).ry(y == null ? x : y)
  }
})

SVG.extend(SVG.Path, {
  // Get path length
  length: function() {
    return this.node.getTotalLength()
  }
  // Get point at length
, pointAt: function(length) {
    return this.node.getPointAtLength(length)
  }
})

SVG.extend(SVG.Parent, SVG.Text, SVG.Tspan, SVG.FX, {
  // Set font
  font: function(a, v) {
    if (typeof a == 'object') {
      for (v in a) this.font(v, a[v])
    }

    return a == 'leading' ?
        this.leading(v) :
      a == 'anchor' ?
        this.attr('text-anchor', v) :
      a == 'size' || a == 'family' || a == 'weight' || a == 'stretch' || a == 'variant' || a == 'style' ?
        this.attr('font-'+ a, v) :
        this.attr(a, v)
  }
})

SVG.Set = SVG.invent({
  // Initialize
  create: function(members) {
    // Set initial state
    Array.isArray(members) ? this.members = members : this.clear()
  }

  // Add class methods
, extend: {
    // Add element to set
    add: function() {
      var i, il, elements = [].slice.call(arguments)

      for (i = 0, il = elements.length; i < il; i++)
        this.members.push(elements[i])

      return this
    }
    // Remove element from set
  , remove: function(element) {
      var i = this.index(element)

      // remove given child
      if (i > -1)
        this.members.splice(i, 1)

      return this
    }
    // Iterate over all members
  , each: function(block) {
      for (var i = 0, il = this.members.length; i < il; i++)
        block.apply(this.members[i], [i, this.members])

      return this
    }
    // Restore to defaults
  , clear: function() {
      // initialize store
      this.members = []

      return this
    }
    // Get the length of a set
  , length: function() {
      return this.members.length
    }
    // Checks if a given element is present in set
  , has: function(element) {
      return this.index(element) >= 0
    }
    // retuns index of given element in set
  , index: function(element) {
      return this.members.indexOf(element)
    }
    // Get member at given index
  , get: function(i) {
      return this.members[i]
    }
    // Get first member
  , first: function() {
      return this.get(0)
    }
    // Get last member
  , last: function() {
      return this.get(this.members.length - 1)
    }
    // Default value
  , valueOf: function() {
      return this.members
    }
    // Get the bounding box of all members included or empty box if set has no items
  , bbox: function(){
      // return an empty box of there are no members
      if (this.members.length == 0)
        return new SVG.RBox()

      // get the first rbox and update the target bbox
      var rbox = this.members[0].rbox(this.members[0].doc())

      this.each(function() {
        // user rbox for correct position and visual representation
        rbox = rbox.merge(this.rbox(this.doc()))
      })

      return rbox
    }
  }

  // Add parent method
, construct: {
    // Create a new set
    set: function(members) {
      return new SVG.Set(members)
    }
  }
})

SVG.FX.Set = SVG.invent({
  // Initialize node
  create: function(set) {
    // store reference to set
    this.set = set
  }

})

// Alias methods
SVG.Set.inherit = function() {
  var m
    , methods = []

  // gather shape methods
  for(var m in SVG.Shape.prototype)
    if (typeof SVG.Shape.prototype[m] == 'function' && typeof SVG.Set.prototype[m] != 'function')
      methods.push(m)

  // apply shape aliasses
  methods.forEach(function(method) {
    SVG.Set.prototype[method] = function() {
      for (var i = 0, il = this.members.length; i < il; i++)
        if (this.members[i] && typeof this.members[i][method] == 'function')
          this.members[i][method].apply(this.members[i], arguments)

      return method == 'animate' ? (this.fx || (this.fx = new SVG.FX.Set(this))) : this
    }
  })

  // clear methods for the next round
  methods = []

  // gather fx methods
  for(var m in SVG.FX.prototype)
    if (typeof SVG.FX.prototype[m] == 'function' && typeof SVG.FX.Set.prototype[m] != 'function')
      methods.push(m)

  // apply fx aliasses
  methods.forEach(function(method) {
    SVG.FX.Set.prototype[method] = function() {
      for (var i = 0, il = this.set.members.length; i < il; i++)
        this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments)

      return this
    }
  })
}




SVG.extend(SVG.Element, {
  // Store data values on svg nodes
  data: function(a, v, r) {
    if (typeof a == 'object') {
      for (v in a)
        this.data(v, a[v])

    } else if (arguments.length < 2) {
      try {
        return JSON.parse(this.attr('data-' + a))
      } catch(e) {
        return this.attr('data-' + a)
      }

    } else {
      this.attr(
        'data-' + a
      , v === null ?
          null :
        r === true || typeof v === 'string' || typeof v === 'number' ?
          v :
          JSON.stringify(v)
      )
    }

    return this
  }
})
SVG.extend(SVG.Element, {
  // Remember arbitrary data
  remember: function(k, v) {
    // remember every item in an object individually
    if (typeof arguments[0] == 'object')
      for (var v in k)
        this.remember(v, k[v])

    // retrieve memory
    else if (arguments.length == 1)
      return this.memory()[k]

    // store memory
    else
      this.memory()[k] = v

    return this
  }

  // Erase a given memory
, forget: function() {
    if (arguments.length == 0)
      this._memory = {}
    else
      for (var i = arguments.length - 1; i >= 0; i--)
        delete this.memory()[arguments[i]]

    return this
  }

  // Initialize or return local memory object
, memory: function() {
    return this._memory || (this._memory = {})
  }

})
// Method for getting an element by id
SVG.get = function(id) {
  var node = document.getElementById(idFromReference(id) || id)
  return SVG.adopt(node)
}

// Select elements by query string
SVG.select = function(query, parent) {
  return new SVG.Set(
    SVG.utils.map((parent || document).querySelectorAll(query), function(node) {
      return SVG.adopt(node)
    })
  )
}

SVG.extend(SVG.Parent, {
  // Scoped select method
  select: function(query) {
    return SVG.select(query, this.node)
  }

})
function pathRegReplace(a, b, c, d) {
  return c + d.replace(SVG.regex.dots, ' .')
}

// creates deep clone of array
function array_clone(arr){
  var clone = arr.slice(0)
  for(var i = clone.length; i--;){
    if(Array.isArray(clone[i])){
      clone[i] = array_clone(clone[i])
    }
  }
  return clone
}

// tests if a given element is instance of an object
function is(el, obj){
  return el instanceof obj
}

// tests if a given selector matches an element
function matches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
}

// Convert dash-separated-string to camelCase
function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function(m, g) {
    return g.toUpperCase()
  })
}

// Capitalize first letter of a string
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Ensure to six-based hex
function fullHex(hex) {
  return hex.length == 4 ?
    [ '#',
      hex.substring(1, 2), hex.substring(1, 2)
    , hex.substring(2, 3), hex.substring(2, 3)
    , hex.substring(3, 4), hex.substring(3, 4)
    ].join('') : hex
}

// Component to hex value
function compToHex(comp) {
  var hex = comp.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

// Calculate proportional width and height values when necessary
function proportionalSize(element, width, height) {
  if (width == null || height == null) {
    var box = element.bbox()

    if (width == null)
      width = box.width / box.height * height
    else if (height == null)
      height = box.height / box.width * width
  }

  return {
    width:  width
  , height: height
  }
}

// Delta transform point
function deltaTransformPoint(matrix, x, y) {
  return {
    x: x * matrix.a + y * matrix.c + 0
  , y: x * matrix.b + y * matrix.d + 0
  }
}

// Map matrix array to object
function arrayToMatrix(a) {
  return { a: a[0], b: a[1], c: a[2], d: a[3], e: a[4], f: a[5] }
}

// Parse matrix if required
function parseMatrix(matrix) {
  if (!(matrix instanceof SVG.Matrix))
    matrix = new SVG.Matrix(matrix)

  return matrix
}

// Add centre point to transform object
function ensureCentre(o, target) {
  o.cx = o.cx == null ? target.bbox().cx : o.cx
  o.cy = o.cy == null ? target.bbox().cy : o.cy
}

// PathArray Helpers
function arrayToString(a) {
  for (var i = 0, il = a.length, s = ''; i < il; i++) {
    s += a[i][0]

    if (a[i][1] != null) {
      s += a[i][1]

      if (a[i][2] != null) {
        s += ' '
        s += a[i][2]

        if (a[i][3] != null) {
          s += ' '
          s += a[i][3]
          s += ' '
          s += a[i][4]

          if (a[i][5] != null) {
            s += ' '
            s += a[i][5]
            s += ' '
            s += a[i][6]

            if (a[i][7] != null) {
              s += ' '
              s += a[i][7]
            }
          }
        }
      }
    }
  }

  return s + ' '
}

// Deep new id assignment
function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (var i = node.childNodes.length - 1; i >= 0; i--)
    if (node.childNodes[i] instanceof window.SVGElement)
      assignNewId(node.childNodes[i])

  return SVG.adopt(node).id(SVG.eid(node.nodeName))
}

// Add more bounding box properties
function fullBox(b) {
  if (b.x == null) {
    b.x      = 0
    b.y      = 0
    b.width  = 0
    b.height = 0
  }

  b.w  = b.width
  b.h  = b.height
  b.x2 = b.x + b.width
  b.y2 = b.y + b.height
  b.cx = b.x + b.width / 2
  b.cy = b.y + b.height / 2

  return b
}

// Get id from reference string
function idFromReference(url) {
  var m = (url || '').toString().match(SVG.regex.reference)

  if (m) return m[1]
}

// If values like 1e-88 are passed, this is not a valid 32 bit float,
// but in those cases, we are so close to 0 that 0 works well!
function float32String(v) {
  return Math.abs(v) > 1e-37 ? v : 0
}

// Create matrix array for looping
var abcdef = 'abcdef'.split('')

// Add CustomEvent to IE9 and IE10
if (typeof window.CustomEvent !== 'function') {
  // Code from: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
  var CustomEventPoly = function(event, options) {
    options = options || { bubbles: false, cancelable: false, detail: undefined }
    var e = document.createEvent('CustomEvent')
    e.initCustomEvent(event, options.bubbles, options.cancelable, options.detail)
    return e
  }

  CustomEventPoly.prototype = window.Event.prototype

  SVG.CustomEvent = CustomEventPoly
} else {
  SVG.CustomEvent = window.CustomEvent
}

// requestAnimationFrame / cancelAnimationFrame Polyfill with fallback based on Paul Irish
(function(w) {
  var lastTime = 0
  var vendors = ['moz', 'webkit']

  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    w.requestAnimationFrame = w[vendors[x] + 'RequestAnimationFrame']
    w.cancelAnimationFrame  = w[vendors[x] + 'CancelAnimationFrame'] ||
                              w[vendors[x] + 'CancelRequestAnimationFrame']
  }

  w.requestAnimationFrame = w.requestAnimationFrame ||
    function(callback) {
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16 - (currTime - lastTime))

      var id = w.setTimeout(function() {
        callback(currTime + timeToCall)
      }, timeToCall)

      lastTime = currTime + timeToCall
      return id
    }

  w.cancelAnimationFrame = w.cancelAnimationFrame || w.clearTimeout;

}(window))

return SVG

}));

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
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
* svg.pathmorphing.js - Enables pathmorphing / path animation in svg.js
* @version 0.1.3
*
*
* @copyright (c) 2018 Ulrich-Matthias Schäfer
* @license MIT
*/;
;(function() {
"use strict";

SVG.extend(SVG.PathArray, {
  morph: function(array) {

    var startArr = this.value
      ,  destArr = this.parse(array)

    var startOffsetM = 0
      ,  destOffsetM = 0

    var startOffsetNextM = false
      ,  destOffsetNextM = false

    while(true){
      // stop if there is no M anymore
      if(startOffsetM === false && destOffsetM === false) break

      // find the next M in path array
      startOffsetNextM = findNextM(startArr, startOffsetM === false ? false : startOffsetM+1)
       destOffsetNextM = findNextM( destArr,  destOffsetM === false ? false :  destOffsetM+1)

      // We have to add one M to the startArray
      if(startOffsetM === false){
        var bbox = new SVG.PathArray(result.start).bbox()

        // when the last block had no bounding box we simply take the first M we got
        if(bbox.height == 0 || bbox.width == 0){
          startOffsetM =  startArr.push(startArr[0]) - 1
        }else{
          // we take the middle of the bbox instead when we got one
          startOffsetM = startArr.push( ['M', bbox.x + bbox.width/2, bbox.y + bbox.height/2 ] ) - 1
        }
      }

      // We have to add one M to the destArray
      if( destOffsetM === false){
        var bbox = new SVG.PathArray(result.dest).bbox()

        if(bbox.height == 0 || bbox.width == 0){
          destOffsetM =  destArr.push(destArr[0]) - 1
        }else{
          destOffsetM =  destArr.push( ['M', bbox.x + bbox.width/2, bbox.y + bbox.height/2 ] ) - 1
        }
      }

      // handle block from M to next M
      var result = handleBlock(startArr, startOffsetM, startOffsetNextM, destArr, destOffsetM, destOffsetNextM)

      // update the arrays to their new values
      startArr = startArr.slice(0, startOffsetM).concat(result.start, startOffsetNextM === false ? [] : startArr.slice(startOffsetNextM))
       destArr =  destArr.slice(0,  destOffsetM).concat(result.dest ,  destOffsetNextM === false ? [] :  destArr.slice( destOffsetNextM))

      // update offsets
      startOffsetM = startOffsetNextM === false ? false : startOffsetM + result.start.length
       destOffsetM =  destOffsetNextM === false ? false :  destOffsetM + result.dest.length

    }

    // copy back arrays
    this.value = startArr
    this.destination = new SVG.PathArray()
    this.destination.value = destArr

    return this
  }
})



// sorry for the long declaration
// slices out one block (from M to M) and syncronize it so the types and length match
function handleBlock(startArr, startOffsetM, startOffsetNextM, destArr, destOffsetM, destOffsetNextM, undefined){

  // slice out the block we need
  var startArrTemp = startArr.slice(startOffsetM, startOffsetNextM || undefined)
    ,  destArrTemp =  destArr.slice( destOffsetM,  destOffsetNextM || undefined)

  var i = 0
    , posStart = {pos:[0,0], start:[0,0]}
    , posDest  = {pos:[0,0], start:[0,0]}

  do{

    // convert shorthand types to long form
    startArrTemp[i] = simplyfy.call(posStart, startArrTemp[i])
     destArrTemp[i] = simplyfy.call(posDest ,  destArrTemp[i])

    // check if both shape types match
    // 2 elliptical arc curve commands ('A'), are considered different if the
    // flags (large-arc-flag, sweep-flag) don't match
    if(startArrTemp[i][0] != destArrTemp[i][0] || startArrTemp[i][0] == 'M' ||
        (startArrTemp[i][0] == 'A' &&
          (startArrTemp[i][4] != destArrTemp[i][4] || startArrTemp[i][5] != destArrTemp[i][5])
        )
      ) {

      // if not, convert shapes to beziere
      Array.prototype.splice.apply(startArrTemp, [i, 1].concat(toBeziere.call(posStart, startArrTemp[i])))
       Array.prototype.splice.apply(destArrTemp, [i, 1].concat(toBeziere.call(posDest, destArrTemp[i])))

    } else {

      // only update positions otherwise
      startArrTemp[i] = setPosAndReflection.call(posStart, startArrTemp[i])
       destArrTemp[i] = setPosAndReflection.call(posDest ,  destArrTemp[i])

    }

    // we are at the end at both arrays. stop here
    if(++i == startArrTemp.length && i == destArrTemp.length) break

    // destArray is longer. Add one element
    if(i == startArrTemp.length){
      startArrTemp.push([
        'C',
        posStart.pos[0],
        posStart.pos[1],
        posStart.pos[0],
        posStart.pos[1],
        posStart.pos[0],
        posStart.pos[1],
      ])
    }

    // startArr is longer. Add one element
    if(i == destArrTemp.length){
      destArrTemp.push([
        'C',
        posDest.pos[0],
        posDest.pos[1],
        posDest.pos[0],
        posDest.pos[1],
        posDest.pos[0],
        posDest.pos[1]
      ])
    }


  }while(true)

  // return the updated block
  return {start:startArrTemp, dest:destArrTemp}
}

// converts shorthand types to long form
function simplyfy(val){

  switch(val[0]){
    case 'z': // shorthand line to start
    case 'Z':
      val[0] = 'L'
      val[1] = this.start[0]
      val[2] = this.start[1]
      break
    case 'H': // shorthand horizontal line
      val[0] = 'L'
      val[2] = this.pos[1]
      break
    case 'V': // shorthand vertical line
      val[0] = 'L'
      val[2] = val[1]
      val[1] = this.pos[0]
      break
    case 'T': // shorthand quadratic beziere
      val[0] = 'Q'
      val[3] = val[1]
      val[4] = val[2]
      val[1] = this.reflection[1]
      val[2] = this.reflection[0]
      break
    case 'S': // shorthand cubic beziere
      val[0] = 'C'
      val[6] = val[4]
      val[5] = val[3]
      val[4] = val[2]
      val[3] = val[1]
      val[2] = this.reflection[1]
      val[1] = this.reflection[0]
      break
  }

  return val

}

// updates reflection point and current position
function setPosAndReflection(val){

  var len = val.length

  this.pos = [ val[len-2], val[len-1] ]

  if('SCQT'.indexOf(val[0]) != -1)
    this.reflection = [ 2 * this.pos[0] - val[len-4], 2 * this.pos[1] - val[len-3] ]

  return val
}

// converts all types to cubic beziere
function toBeziere(val){
  var retVal = [val]

  switch(val[0]){
    case 'M': // special handling for M
      this.pos = this.start = [val[1], val[2]]
      return retVal
    case 'L':
      val[5] = val[3] = val[1]
      val[6] = val[4] = val[2]
      val[1] = this.pos[0]
      val[2] = this.pos[1]
      break
    case 'Q':
      val[6] = val[4]
      val[5] = val[3]
      val[4] = val[4] * 1/3 + val[2] * 2/3
      val[3] = val[3] * 1/3 + val[1] * 2/3
      val[2] = this.pos[1] * 1/3 + val[2] * 2/3
      val[1] = this.pos[0] * 1/3 + val[1] * 2/3
      break
    case 'A':
      retVal = arcToBeziere(this.pos, val)
      val = retVal[0]
      break
  }

  val[0] = 'C'
  this.pos = [val[5], val[6]]
  this.reflection = [2 * val[5] - val[3], 2 * val[6] - val[4]]

  return retVal

}

// finds the next position of type M
function findNextM(arr, offset){

  if(offset === false) return false

  for(var i = offset, len = arr.length;i < len;++i){

    if(arr[i][0] == 'M') return i

  }

  return false
}



// Convert an arc segment into equivalent cubic Bezier curves
// Depending on the arc, up to 4 curves might be used to represent it since a
// curve gives a good approximation for only a quarter of an ellipse
// The curves are returned as an array of SVG curve commands:
// [ ['C', x1, y1, x2, y2, x, y] ... ]
function arcToBeziere(pos, val) {
    // Parameters extraction, handle out-of-range parameters as specified in the SVG spec
    // See: https://www.w3.org/TR/SVG11/implnote.html#ArcOutOfRangeParameters
    var rx = Math.abs(val[1]), ry = Math.abs(val[2]), xAxisRotation = val[3] % 360
      , largeArcFlag = val[4], sweepFlag = val[5], x = val[6], y = val[7]
      , A = new SVG.Point(pos), B = new SVG.Point(x, y)
      , primedCoord, lambda, mat, k, c, cSquare, t, O, OA, OB, tetaStart, tetaEnd
      , deltaTeta, nbSectors, f, arcSegPoints, angle, sinAngle, cosAngle, pt, i, il
      , retVal = [], x1, y1, x2, y2

    // Ensure radii are non-zero
    if(rx === 0 || ry === 0 || (A.x === B.x && A.y === B.y)) {
      // treat this arc as a straight line segment
      return [['C', A.x, A.y, B.x, B.y, B.x, B.y]]
    }

    // Ensure radii are large enough using the algorithm provided in the SVG spec
    // See: https://www.w3.org/TR/SVG11/implnote.html#ArcCorrectionOutOfRangeRadii
    primedCoord = new SVG.Point((A.x-B.x)/2, (A.y-B.y)/2).transform(new SVG.Matrix().rotate(xAxisRotation))
    lambda = (primedCoord.x * primedCoord.x) / (rx * rx) + (primedCoord.y * primedCoord.y) / (ry * ry)
    if(lambda > 1) {
      lambda = Math.sqrt(lambda)
      rx = lambda*rx
      ry = lambda*ry
    }

    // To simplify calculations, we make the arc part of a unit circle (rayon is 1) instead of an ellipse
    mat = new SVG.Matrix().rotate(xAxisRotation).scale(1/rx, 1/ry).rotate(-xAxisRotation)
    A = A.transform(mat)
    B = B.transform(mat)

    // Calculate the horizontal and vertical distance between the initial and final point of the arc
    k = [B.x-A.x, B.y-A.y]

    // Find the length of the chord formed by A and B
    cSquare = k[0]*k[0] + k[1]*k[1]
    c = Math.sqrt(cSquare)

    // Calculate the ratios of the horizontal and vertical distance on the length of the chord
    k[0] /= c
    k[1] /= c

    // Calculate the distance between the circle center and the chord midpoint
    // using this formula: t = sqrt(r^2 - c^2 / 4)
    // where t is the distance between the cirle center and the chord midpoint,
    //       r is the rayon of the circle and c is the chord length
    // From: http://www.ajdesigner.com/phpcircle/circle_segment_chord_t.php
    // Because of the imprecision of floating point numbers, cSquare might end
    // up being slightly above 4 which would result in a negative radicand
    // To prevent that, a test is made before computing the square root
    t = (cSquare < 4) ? Math.sqrt(1 - cSquare/4) : 0

    // For most situations, there are actually two different ellipses that
    // satisfy the constraints imposed by the points A and B, the radii rx and ry,
    // and the xAxisRotation
    // When the flags largeArcFlag and sweepFlag are equal, it means that the
    // second ellipse is used as a solution
    // See: https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
    if(largeArcFlag === sweepFlag) {
        t *= -1
    }

    // Calculate the coordinates of the center of the circle from the midpoint of the chord
    // This is done by multiplying the ratios calculated previously by the distance between
    // the circle center and the chord midpoint and using these values to go from the midpoint
    // to the center of the circle
    // The negative of the vertical distance ratio is used to modify the x coordinate while
    // the horizontal distance ratio is used to modify the y coordinate
    // That is because the center of the circle is perpendicular to the chord and perpendicular
    // lines are negative reciprocals
    O = new SVG.Point((B.x+A.x)/2 + t*-k[1], (B.y+A.y)/2 + t*k[0])
    // Move the center of the circle at the origin
    OA = new SVG.Point(A.x-O.x, A.y-O.y)
    OB = new SVG.Point(B.x-O.x, B.y-O.y)

    // Calculate the start and end angle
    tetaStart = Math.acos(OA.x/Math.sqrt(OA.x*OA.x + OA.y*OA.y))
    if (OA.y < 0) {
      tetaStart *= -1
    }
    tetaEnd = Math.acos(OB.x/Math.sqrt(OB.x*OB.x + OB.y*OB.y))
    if (OB.y < 0) {
      tetaEnd *= -1
    }

    // If sweep-flag is '1', then the arc will be drawn in a "positive-angle" direction,
    // make sure that the end angle is above the start angle
    if (sweepFlag && tetaStart > tetaEnd) {
      tetaEnd += 2*Math.PI
    }
    // If sweep-flag is '0', then the arc will be drawn in a "negative-angle" direction,
    // make sure that the end angle is below the start angle
    if (!sweepFlag && tetaStart < tetaEnd) {
      tetaEnd -= 2*Math.PI
    }

    // Find the number of Bezier curves that are required to represent the arc
    // A cubic Bezier curve gives a good enough approximation when representing at most a quarter of a circle
    nbSectors = Math.ceil(Math.abs(tetaStart-tetaEnd) * 2/Math.PI)

    // Calculate the coordinates of the points of all the Bezier curves required to represent the arc
    // For an in-depth explanation of this part see: http://pomax.github.io/bezierinfo/#circles_cubic
    arcSegPoints = []
    angle = tetaStart
    deltaTeta = (tetaEnd-tetaStart)/nbSectors
    f = 4*Math.tan(deltaTeta/4)/3
    for (i = 0; i <= nbSectors; i++) { // The <= is because a Bezier curve have a start and a endpoint
      cosAngle = Math.cos(angle)
      sinAngle = Math.sin(angle)

      pt = new SVG.Point(O.x+cosAngle, O.y+sinAngle)
      arcSegPoints[i] = [new SVG.Point(pt.x+f*sinAngle, pt.y-f*cosAngle), pt, new SVG.Point(pt.x-f*sinAngle, pt.y+f*cosAngle)]

      angle += deltaTeta
    }

    // Remove the first control point of the first segment point and remove the second control point of the last segment point
    // These two control points are not used in the approximation of the arc, that is why they are removed
    arcSegPoints[0][0] = arcSegPoints[0][1].clone()
    arcSegPoints[arcSegPoints.length-1][2] = arcSegPoints[arcSegPoints.length-1][1].clone()

    // Revert the transformation that was applied to make the arc part of a unit circle instead of an ellipse
    mat = new SVG.Matrix().rotate(xAxisRotation).scale(rx, ry).rotate(-xAxisRotation)
    for (i = 0, il = arcSegPoints.length; i < il; i++) {
      arcSegPoints[i][0] = arcSegPoints[i][0].transform(mat)
      arcSegPoints[i][1] = arcSegPoints[i][1].transform(mat)
      arcSegPoints[i][2] = arcSegPoints[i][2].transform(mat)
    }


    // Convert the segments points to SVG curve commands
    for (i = 1, il = arcSegPoints.length; i < il; i++) {
      pt = arcSegPoints[i-1][2]
      x1 = pt.x
      y1 = pt.y

      pt = arcSegPoints[i][0]
      x2 = pt.x
      y2 = pt.y

      pt = arcSegPoints[i][1]
      x = pt.x
      y = pt.y

      retVal.push(['C', x1, y1, x2, y2, x, y])
    }

    return retVal
}
}());


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



var ReactPropTypesSecret = __webpack_require__(6);

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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/svg.js/dist/svg.js
var svg = __webpack_require__(1);
var svg_default = /*#__PURE__*/__webpack_require__.n(svg);

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

    var bottles = svg_default.a.get("bottles");
    var mobile = svg_default.a.get("mobile");
    var bouchon = svg_default.a.get("bouchonMob");
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



__webpack_require__(4);

var AppResponsive_Svg = function (_Component) {
  AppResponsive_inherits(Svg, _Component);

  function Svg(props) {
    AppResponsive_classCallCheck(this, Svg);

    var _this = AppResponsive_possibleConstructorReturn(this, _Component.call(this, props));

    _this.initializeRects = function (table) {
      var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

      table.forEach(function (item) {
        svg_default.a.get(item.id).attr({
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

      var el = svg_default.a.get(id);
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