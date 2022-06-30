/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/core/number.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/core/number.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/core.number.iterator */ "./node_modules/core-js/modules/core.number.iterator.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Number;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.number.iterator.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/core.number.iterator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Number, 'Number', function (iterated) {
  this._l = +iterated;
  this._i = 0;
}, function () {
  var i = this._i++;
  var done = !(i < this._l);
  return { done: done, value: done ? undefined : i };
});


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hi */ "./src/js/modules/hi.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/weather */ "./src/js/modules/weather.js");
/* harmony import */ var _modules_quote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/quote */ "./src/js/modules/quote.js");
/* harmony import */ var _modules_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/audio */ "./src/js/modules/audio.js");
/* harmony import */ var _modules_translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/translate */ "./src/js/modules/translate.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/settings */ "./src/js/modules/settings.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/todo */ "./src/js/modules/todo.js");









 // import playList from './modules/playList';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date', 'greeting', 'quote', 'weather', 'audio', 'todolist']
  }; // showFullDate(new Date());
  // showTime();
  // showDate();
  // timer();

  Object(_modules_hi__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_weather__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_quote__WEBPACK_IMPORTED_MODULE_4__["default"])('dataRU.json');
  Object(_modules_audio__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_translate__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_settings__WEBPACK_IMPORTED_MODULE_8__["default"])(state);
  Object(_modules_todo__WEBPACK_IMPORTED_MODULE_9__["default"])(); // playList();
  // console.log(playList());
});

/***/ }),

/***/ "./src/js/modules/audio.js":
/*!*********************************!*\
  !*** ./src/js/modules/audio.js ***!
  \*********************************/
/*! exports provided: fadePlayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadePlayer", function() { return fadePlayer; });
/* harmony import */ var _playList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList */ "./src/js/modules/playList.js");


const audio = fade => {
  // const audio = document.querySelector('.audio'),
  const player = document.querySelector('.player'),
        playBtn = document.querySelector('.play'),
        prevBtn = document.querySelector('.play-prev'),
        nextBtn = document.querySelector('.play-next'),
        songsList = document.querySelector('.play-list');
  let randomNum; // let playNum = localStorage.getItem('selected song');

  let playNum = 1; //переменная флаг

  let isPlay = false; //Создание нового аудио объекта со статичным состоянием 

  let audio = new Audio(_playList__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].src);
  console.log(_playList__WEBPACK_IMPORTED_MODULE_0__["default"][1].src);
  console.log(audio);

  function playAudio() {
    // audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
    // audio.currentTime = 0;
    // audio.muted();
    // останвока текущего трека и запуск нового 
    // audio.pause();
    // console.log(`да  ${playList[num].src}`);
    // audio.src = playList[num].src;
    // Условие на наличие паузы
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    } // localStorage.setItem('selected song', playNum);

  } // инициализация общего кол-ва времени трека 


  audio.addEventListener("loadeddata", () => {
    player.querySelector(".time-song .length").textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = .75;
  }, false); //   player.addEventListener('click', () =>{
  //     if (audio.paused) {
  //         playBtn.classList.remove("play");
  //         playBtn.classList.add("pause");
  //         audio.play();
  //       } else {
  //         playBtn.classList.remove("pause");
  //         playBtn.classList.add("play");
  //         audio.pause();
  //       }
  //    });
  // функции кнопок перелистывания 

  function playNext() {
    audio.src = _playList__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].src;
    playNum += 1;

    if (playNum >= _playList__WEBPACK_IMPORTED_MODULE_0__["default"].length) {
      playNum = 0;
    }

    playAudio(playNum);
    console.log(playNum);
    localStorage.setItem('selected song', playNum);
  }

  console.log(`playList is ${_playList__WEBPACK_IMPORTED_MODULE_0__["default"].length}`);

  function playPrev() {
    audio.src = _playList__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].src;
    playNum -= 1;

    if (playNum < 0) {
      playNum = _playList__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1;
    }

    console.log(playNum);
    playAudio(playNum);
    localStorage.setItem('selected song', playNum);
  } // === / функции кнопок перелистывания  ====


  function toggleBtn() {
    playBtn.classList.toggle('pause');
  } // Динамическое создание плейлиста 


  function createPlaylist() {
    _playList__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((item, index) => {
      // console.log(item);
      const li = document.createElement('li');
      li.classList.add('play-item');
      li.textContent = item.title;
      li.setAttribute('SONG', index);
      songsList.append(li);

      if (_playList__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].title == item.title) {
        li.style.opacity = '1';
      }
    });
  }

  createPlaylist();
  const song = document.querySelectorAll('.play-item');

  function hideSong() {
    song.forEach(item => {
      item.style.opacity = '0.5';
    });
  } // запуск треков по клику 


  function selectFromList() {
    songsList.addEventListener('click', event => {
      const target = event.target;

      if (target && target.classList.contains('play-item')) {
        song.forEach(item => {
          if (target == item) {
            hideSong();
            item.style.opacity = '1';
          }
        });

        if (target.getAttribute('song') === '0') {
          playNum = 0;
          console.log(playNum);
          audio.src = _playList__WEBPACK_IMPORTED_MODULE_0__["default"][0].src;
          playAudio();
        } else if (target.getAttribute('song') === '1') {
          playNum = 1;
          audio.src = _playList__WEBPACK_IMPORTED_MODULE_0__["default"][1].src;
          playAudio();
        } else if (target.getAttribute('song') === '2') {
          playNum = 2;
          audio.src = _playList__WEBPACK_IMPORTED_MODULE_0__["default"][2].src;
          playAudio();
        } else if (target.getAttribute('song') === '3') {
          playNum = 3;
          audio.src = _playList__WEBPACK_IMPORTED_MODULE_0__["default"][3].src;
          playAudio();
        } // playAudio();
        // console.log( target.getAttribute('song'));
        // playList.forEach(item => { 
        //     if(target.value )
        // });

      }
    });
  }

  selectFromList(); //click volume slider to change volume

  const timeline = player.querySelector(".timeline");
  timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false); //check audio percentage and update time accordingly

  setInterval(() => {
    const progressBar = player.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    player.querySelector(".time-song .current").textContent = getTimeCodeFromNum(audio.currentTime);
  }, 500); //turn 128 seconds into 2:08

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  }

  playBtn.addEventListener('click', playAudio);
  prevBtn.addEventListener('click', playPrev);
  nextBtn.addEventListener('click', playNext); //    playBtn.addEventListener('click', toggleBtn);
};

function fadePlayer(fade) {
  const player = document.querySelector('.player');
  player.classList.toggle(fade);
}


/* harmony default export */ __webpack_exports__["default"] = (audio);

/***/ }),

/***/ "./src/js/modules/hi.js":
/*!******************************!*\
  !*** ./src/js/modules/hi.js ***!
  \******************************/
/*! exports provided: getTimeOfDay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeOfDay", function() { return getTimeOfDay; });
function getTimeOfDay() {
  const date = new Date();
  const nowHourse = date.getHours(); // const nowMinutes = date.getMinutes();
  // console.log(nowHourse);
  // console.log(nowMinutes);

  if (nowHourse >= 6 && nowHourse < 12) {
    return 'Доброе утро,';
  } else if (nowHourse >= 12 && nowHourse < 18) {
    return 'Добрый день,';
  } else if (nowHourse >= 18 && nowHourse < 24) {
    return 'Добрый вечер,';
  } else if (nowHourse >= 0 && nowHourse < 6) {
    return 'Доброй ночи,';
  }
}

const sayHi = () => {
  const greeting = document.querySelector('.greeting'),
        user = document.querySelector('.name');
  user.classList.add('animationIn');
  const timeOfDay = getTimeOfDay();
  const greetingText = timeOfDay;
  greeting.innerHTML = greetingText; // console.log(user.value);

  function setNameUser() {
    user.addEventListener('input', () => {
      localStorage.setItem('user', user.value);
    });

    if (localStorage.getItem('user')) {
      console.log('done');
      let person = localStorage.getItem('user');
      user.value = person;
    }
  }

  setNameUser();
};


/* harmony default export */ __webpack_exports__["default"] = (sayHi);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  function showModals(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        modal.classList.remove("animationOut");
        document.body.style.overflow = "hidden";
      });
    });
    close.addEventListener('click', () => {
      modal.classList.add("animationOut");
      setTimeout(() => modal.style.display = "none", 900); // setTimeout("alert('da ya')", 2000);
      // modal.style.display = "none";
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.add("animationOut");
        setTimeout(() => modal.style.display = "none", 900);
      }
    });
  }

  showModals('.settings-img', '.modal', '.modal .modal_close');
  showModals('.todo', '.modal-todo', '.modal-todo .modal_close-todo');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/playList.js":
/*!************************************!*\
  !*** ./src/js/modules/playList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const playList = [{
  title: 'Aqua Caelestis',
  src: '../assets/sounds/Aqua Caelestis.mp3',
  duration: '00:58'
}, {
  title: 'River Flows In You',
  src: '../assets/sounds/River Flows In You.mp3',
  duration: '03:50'
}, {
  title: 'Ennio Morricone',
  src: '../assets/sounds/Ennio Morricone.mp3',
  duration: '03:50'
}, {
  title: 'Summer Wind',
  src: '../assets/sounds/Summer Wind.mp3',
  duration: '03:50'
}];
/* harmony default export */ __webpack_exports__["default"] = (playList);

/***/ }),

/***/ "./src/js/modules/quote.js":
/*!*********************************!*\
  !*** ./src/js/modules/quote.js ***!
  \*********************************/
/*! exports provided: fadeQuotes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeQuotes", function() { return fadeQuotes; });
// const quote = () => { 
async function getQuotes(quotests, fade) {
  const quote = document.querySelector('.quote'),
        author = document.querySelector('.author'),
        changeQuote = document.querySelector('.change-quote');
  const quotes = quotests;
  const res = await fetch(quotes);
  const data = await res.json();

  function showQuotes() {
    const arr = Object.entries(data).length - 1;
    let random = Math.round(Math.random() * arr);
    console.log(random);
    quote.textContent = data[random].text;
    author.textContent = data[random].author;
  }

  showQuotes();
  changeQuote.addEventListener('click', () => {
    showQuotes();
  });
}

getQuotes('dataRU.json');

function fadeQuotes(fade) {
  const changeQuoteWrapper = document.querySelector('.quotes-wrapper');
  changeQuoteWrapper.classList.toggle(fade);
} // };



/* harmony default export */ __webpack_exports__["default"] = (getQuotes);

/***/ }),

/***/ "./src/js/modules/settings.js":
/*!************************************!*\
  !*** ./src/js/modules/settings.js ***!
  \************************************/
/*! exports provided: showItemSettings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showItemSettings", function() { return showItemSettings; });
/* harmony import */ var core_js_core_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/core/number */ "./node_modules/core-js/core/number.js");
/* harmony import */ var core_js_core_number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_core_number__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/js/modules/weather.js");
// import weather from './weather';

 // import {fadeQuotes} from './quote';
// import {fadePlayer} from './audio';

const settings = state => {
  let weather = localStorage.getItem('weatherShow'),
      quotes = localStorage.getItem('quotesShow'),
      player = localStorage.getItem('playerShow'),
      greeting = localStorage.getItem('greetingsShow'),
      date = localStorage.getItem('dateShow'),
      week = localStorage.getItem('weekShow');

  function toggleCheckbox(dataValue, selector, itemStorage) {
    const myCheck = document.querySelectorAll('.myCheck');
    myCheck.forEach((item, index) => {
      if (item.getAttribute('data-input') === dataValue && itemStorage === 'false') {
        Object(_weather__WEBPACK_IMPORTED_MODULE_1__["hidePiece"])(selector);
        item.checked = false;
      } else {
        item.checked = true;
        Object(_weather__WEBPACK_IMPORTED_MODULE_1__["showPiece"])(selector);
      }
    });
  }

  toggleCheckbox('weather', '.weather', weather);
  toggleCheckbox('quotes', '.quotes-wrapper', quotes);
  toggleCheckbox('audio', '.player', player);
  toggleCheckbox('greetings', '.greeting-container', greeting);
  toggleCheckbox('date', '.date', date);
  toggleCheckbox('week', '.week', week);

  function hidenCheckbox() {
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach(item => {
      item.addEventListener('change', function () {
        switch (item.getAttribute('data-input')) {
          case 'weather':
            if (item.checked) {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["showPiece"])('.weather');
              localStorage.setItem('weatherShow', true);
            } else {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["hidePiece"])('.weather');
              localStorage.setItem('weatherShow', false);
            }

            break;

          case 'quotes':
            if (item.checked) {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["showPiece"])('.quotes-wrapper');
              localStorage.setItem('quotesShow', true);
            } else {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["hidePiece"])('.quotes-wrapper');
              localStorage.setItem('quotesShow', false);
            }

            break;

          case 'audio':
            if (item.checked) {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["showPiece"])('.player');
              localStorage.setItem('playerShow', true);
            } else {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["hidePiece"])('.player');
              localStorage.setItem('playerShow', false);
            }

            break;

          case 'greetings':
            if (item.checked) {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["showPiece"])('.greeting-container');
              localStorage.setItem('greetingsShow', true);
            } else {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["hidePiece"])('.greeting-container');
              localStorage.setItem('greetingsShow', false);
            }

            break;

          case 'date':
            if (item.checked) {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["showPiece"])('.date');
              localStorage.setItem('dateShow', true);
            } else {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["hidePiece"])('.date');
              localStorage.setItem('dateShow', false);
            }

            break;

          case 'week':
            if (item.checked) {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["showPiece"])('.week');
              localStorage.setItem('weekShow', true);
            } else {
              Object(_weather__WEBPACK_IMPORTED_MODULE_1__["hidePiece"])('.week');
              localStorage.setItem('weekShow', false);
            }

            break;
        }
      });
    });
  }

  hidenCheckbox();
};

function showItemSettings() {
  let language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ru';
  const weather = document.querySelector('.delete-weather'),
        quotes = document.querySelector('.delete-quotes'),
        player = document.querySelector('.delete-player'),
        setthings = document.querySelector('.settings-title'),
        greetings = document.querySelector('.delete-greetings'),
        date = document.querySelector('.delete-date'),
        week = document.querySelector('.delete-week');

  switch (language) {
    case 'ru':
      setthings.textContent = 'Настройки';
      weather.textContent = 'Отключить погоду';
      quotes.textContent = 'Отключить цитаты';
      player.textContent = 'Отключить плеер';
      greetings.textContent = 'Отключить приветствие';
      date.textContent = 'Отключить дату';
      week.textContent = 'Отключить недели';
      break;

    case 'en':
      setthings.textContent = 'Settings';
      weather.textContent = 'Disable weather';
      quotes.textContent = 'Disable quotes';
      player.textContent = 'Disable player';
      greetings.textContent = 'Disable greetings';
      date.textContent = 'Disable date';
      week.textContent = 'Disable week';
      break;
  }
}

showItemSettings();

/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hi */ "./src/js/modules/hi.js");


const slider = () => {
  const body = document.querySelector('.body-slide'),
        prevBtn = document.querySelector('.slide-prev'),
        nextBtn = document.querySelector('.slide-next');
  let randomNum = getRandomNum(10, 20);
  console.log(randomNum);

  function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  } // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f2f52b5eceec1531365504286e9ad&extras=url_l&format=json&nojsoncallback=1


  let timeOfDay = Object(_hi__WEBPACK_IMPORTED_MODULE_0__["getTimeOfDay"])().slice(7).replace(/,/g, '');
  const str = 'good morning, ';
  console.log(str.replace(/,/g, '')); // console.log(str.slice(-9));
  // console.log(str.substr(2));
  // timeOfDay.replace(/ [\s\S]+/, '');
  // timeOfDay.split(' ')[0];

  console.log(`time of day -${timeOfDay}`);

  async function getImageLink(timeDay) {
    const url = `https://api.unsplash.com/photos/random?query=${timeDay}&client_id=hNVHegDuMsOYHsbpZgeEKNUn2YiCxTgNrTgXwxSodrQ`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await data.urls.regular;
  }

  getImageLink(timeOfDay).then(data => {
    console.log(data);
    const img = new Image();
    img.src = "/assets/img/bg.jpg";

    img.onload = () => {
      body.style.background = 'center center/ cover no-repeat';
      body.style.backgroundColor = 'rgba(0,0,0, .3)';
      body.style.backgroundImage = `url("${data}")`;
    };
  }).catch(() => {
    // alert('Произошла ошибка, картинка не загрузилась');
    const img = new Image();
    img.src = "/assets/img/bg.jpg";

    img.onload = () => {
      body.style.backgroundColor = 'rgba(0,0,0, .3)';
      body.style.backgroundImage = 'url("/assets/img/bg.jpg")';
    };
  }).finally(() => {// const img = new Image();
    // img.src = "/assets/img/bg.jpg";
    // img.onload = () => {      
    //   body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1655713079339-6dd9a82ee041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")'
    // }; 
  });
  console.log(getImageLink(timeOfDay)); // function setBg() { 
  //     // console.log(`da i ${ing}`);
  //     const img = new Image();
  //     img.src = "/assets/img/bg.jpg";
  //     img.onload = () => { 
  //         body.style.backgroundColor = 'rgba(0,0,0, .5)';
  //         body.style.backgroundImage = getImageLink(timeOfDay);
  //     };
  // }
  // setBg();

  function getSlideNext() {
    getImageLink(timeOfDay).then(data => {
      console.log(data);
      const img = new Image();
      img.src = "/assets/img/bg.jpg";

      img.onload = () => {
        body.style.background = 'center center/ cover no-repeat';
        body.style.backgroundColor = 'rgba(0,0,0, .3)';
        body.style.backgroundImage = `url("${data}")`;
      };
    });

    if (randomNum < 20) {
      console.log(randomNum += 1);
    } else {
      randomNum = 10;
    } // setBg();

  } // setInterval(getSlideNext, 5000);


  function getSlidePrev() {
    getImageLink(timeOfDay).then(data => {
      console.log(data);
      const img = new Image();
      img.src = "/assets/img/bg.jpg";

      img.onload = () => {
        body.style.background = 'center center/ cover no-repeat';
        body.style.backgroundColor = 'rgba(0,0,0, .3)';
        body.style.backgroundImage = `url("${data}")`;
      };
    });

    if (randomNum > 10) {
      console.log(randomNum -= 1);
    } else {
      randomNum = 20;
    } // setBg();

  }

  prevBtn.addEventListener('click', getSlidePrev);
  nextBtn.addEventListener('click', getSlideNext); // function getLinkToImage() {
  //     const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=hNVHegDuMsOYHsbpZgeEKNUn2YiCxTgNrTgXwxSodrQ';
  //      fetch(url)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data.urls.regular)
  //       });
  // }
  //     getLinkToImage();
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: showFullDate, showTime, showDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFullDate", function() { return showFullDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTime", function() { return showTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDate", function() { return showDate; });
// const timer = () => { 
const time = document.querySelector('.time'),
      date = document.querySelector('.date');

function showTime(arg) {
  const date = new Date();
  const currentTime = date.toLocaleTimeString(arg);
  time.innerHTML = currentTime; // setTimeout(showTime, 1000);
} // showTime();


function showDate(format) {
  const nowDate = new Date();
  const currentDate = nowDate.toLocaleDateString(format);
  date.innerHTML = currentDate;
  console.log(currentDate);
} // showDate();
// function getWeekDay(date) { 
//     let days = ['вс','пн','вт','ср','чт','пт'];
//     return days[date.getDay()];
// }
// let dates = new Date(2014, 0, 2);
// };


function showFullDate(date, days, month) {
  let language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ru';
  const week = document.querySelector('.week');

  switch (language) {
    case 'ru':
      days = ['Воскресенье,', 'Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота'];
      month = ['Январь', 'Февраль', 'Март ', 'Апрель ', 'Май ', 'Июнь ', 'Июль ', 'Август ', 'Сентябрь', 'Октябрь ', 'Ноябрь ', 'Декабрь'];
      break;

    case 'en':
      days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septamber', 'October', 'November', 'December'];
      break;
  }

  return week.textContent = `
        ${days[date.getDay()]}
        ${month[date.getMonth()]}
        ${date.getDate()}
        `;
}

 // export default timer;

/***/ }),

/***/ "./src/js/modules/todo.js":
/*!********************************!*\
  !*** ./src/js/modules/todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const todo = function () {
  let language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ru';
  const input = document.querySelector('.myTodo'),
        targets = document.querySelector('.target'),
        list = document.querySelector('.target-list'),
        title = document.querySelector('.todo-title'),
        subtitle = document.querySelector('.todo-subtitle'); // const labelList = list.querySelectorAll('.list-label');  

  let data = [];

  if (localStorage.getItem('tasks')) {
    data = JSON.parse(localStorage.getItem('tasks'));
    showTasks();
  }

  switch (language) {
    case 'ru':
      title.textContent = 'Сегодня';
      subtitle.textContent = 'Добавить задачу';
      break;

    case 'en':
      title.textContent = 'Today';
      subtitle.textContent = 'Add task';
      break;
  }

  function setValue() {
    input.addEventListener('change', () => {
      let newTodo = {
        todo: input.value,
        checked: false,
        id: ''
      };
      console.log(newTodo);
      const random = Math.random() * 15.75;
      newTodo.id = random.toFixed(2);
      data.push(newTodo);
      localStorage.setItem('tasks', JSON.stringify(data)); // input.value = '';

      showTasks();
    });
  }

  setValue();

  function showTasks() {
    let displayMessage = '';

    if (data.length === 0) {
      list.innerHTML = '';
    }

    data.forEach((item, i) => {
      if (!item.checked) {
        displayMessage += `
                <li  class = 'list'>
                    <input class='list-input' type='checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}>
                    <label class='list-label' id= 'label_${i}' for = 'item_${i}'>${item.todo}</label>
                    <div class = 'list-close' id = '${item.id}' ></div>
                </li>
                `;
      } else {
        displayMessage += `
                <li  class = 'list'>
                    <input class='list-input' type='checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}>
                    <label class='list-label list-label-line' id= 'label_${i}' for = 'item_${i}'>${item.todo}</label>
                    <div class = 'list-close' id = '${item.id}' ></div>
                </li>
                `;
      }

      list.innerHTML = displayMessage;
    });
  }

  function setCheckbox() {
    list.addEventListener('change', event => {
      let idInput = event.target.getAttribute('id');
      let forLabel = list.querySelector('[for=' + idInput + ']');
      let valueLabel = forLabel.innerHTML;
      data.forEach(item => {
        if (item.todo === valueLabel) {
          item.checked = !item.checked;
          localStorage.setItem('tasks', JSON.stringify(data));
        }
      });
    });
  }

  setCheckbox();

  function deleteTasks() {
    list.addEventListener('click', event => {
      let labelList = list.querySelectorAll('.list-label');
      const target = event.target;
      data.forEach((item, index) => {
        // console.log(!item.checked )
        if (target.getAttribute('id') === item.id) {
          data.splice(index, 1);
          localStorage.setItem('tasks', JSON.stringify(data));
          showTasks();
        }
      });
      labelList.forEach(list => {
        if (target && target.getAttribute('id') === list.getAttribute('id')) {
          list.classList.toggle('list-label-line');
          console.log('done'); // setCheckbox();
        } else {
          console.log('not done');
        }
      });
    });
  }

  deleteTasks();
};

/* harmony default export */ __webpack_exports__["default"] = (todo);

/***/ }),

/***/ "./src/js/modules/translate.js":
/*!*************************************!*\
  !*** ./src/js/modules/translate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hi */ "./src/js/modules/hi.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/js/modules/weather.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote */ "./src/js/modules/quote.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/js/modules/timer.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/js/modules/settings.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo */ "./src/js/modules/todo.js");








const translate = () => {
  const cahngeBtn = document.querySelectorAll('.change-language-wrapper');
  const date = new Date();
  const greetingTranslation = {
    // 'ru': ['Доброе утро,', 'добрый день,', 'добрый вечер,', 'доброй ночи,'], 
    // 'ru': 'Хорошего дня',
    'en': ['Good morning,', 'Good afternoon,', 'Good evening,', 'Good night,'],
    'week': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    'weekRU': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septamber', 'October', 'November', 'December'],
    'monthsRU': ['Январь', 'Февраль', 'Март ', 'Апрель ', 'Май ', 'Июнь ', 'Июль ', 'Август ', 'Сентябрь', 'Октябрь ', 'Ноябрь ', 'Декабрь']
  };
  const hi = document.querySelector('.greeting');

  function showTranslateEN() {
    hi.classList.toggle('animation');
    const arr = greetingTranslation.en;
    console.log(arr[2]);

    if (Object(_hi__WEBPACK_IMPORTED_MODULE_0__["getTimeOfDay"])() === 'Доброе утро,') {
      return hi.textContent = arr[0];
    } else if (Object(_hi__WEBPACK_IMPORTED_MODULE_0__["getTimeOfDay"])() === 'Добрый день,') {
      return hi.textContent = arr[1];
    } else if (Object(_hi__WEBPACK_IMPORTED_MODULE_0__["getTimeOfDay"])() === 'Добрый вечер,') {
      return hi.textContent = arr[2];
    } else if (Object(_hi__WEBPACK_IMPORTED_MODULE_0__["getTimeOfDay"])() === 'Доброй ночи,') {
      return hi.textContent = arr[3];
    }
  }

  const showtranslateData = () => {
    const time = document.querySelector('.time'),
          dateFull = document.querySelector('.date');
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-US');
    time.textContent = currentTime;
    const currentDate = date.toLocaleDateString('en-US');
    dateFull.textContent = currentDate;
  };

  let EnTimer, RuTimer;

  function showtranslatePage() {
    let language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ru';

    switch (language) {
      case 'ru':
        RuTimer = setInterval(() => Object(_timer__WEBPACK_IMPORTED_MODULE_3__["showTime"])(), 1000);
        clearInterval(EnTimer);
        Object(_hi__WEBPACK_IMPORTED_MODULE_0__["default"])();
        Object(_timer__WEBPACK_IMPORTED_MODULE_3__["showDate"])();
        Object(_timer__WEBPACK_IMPORTED_MODULE_3__["showFullDate"])(date, '', '', 'ru');
        Object(_weather__WEBPACK_IMPORTED_MODULE_1__["getWeather"])('ru', 'Moscow');
        Object(_quote__WEBPACK_IMPORTED_MODULE_2__["default"])('dataRU.json');
        Object(_settings__WEBPACK_IMPORTED_MODULE_4__["showItemSettings"])('ru');
        break;

      case 'en':
        EnTimer = setInterval(() => Object(_timer__WEBPACK_IMPORTED_MODULE_3__["showTime"])('en-US'), 1000);
        clearInterval(RuTimer);
        Object(_timer__WEBPACK_IMPORTED_MODULE_3__["showDate"])('en-US');
        Object(_settings__WEBPACK_IMPORTED_MODULE_4__["showItemSettings"])('en');
        showTranslateEN();
        Object(_weather__WEBPACK_IMPORTED_MODULE_1__["getWeather"])('en', 'Moscow');
        Object(_quote__WEBPACK_IMPORTED_MODULE_2__["default"])('dataEN.json');
        Object(_timer__WEBPACK_IMPORTED_MODULE_3__["showFullDate"])(date, '', '', 'en');
        Object(_todo__WEBPACK_IMPORTED_MODULE_5__["default"])('en');
        break;
    }
  }

  let languageStorage = localStorage.getItem('language');
  console.log(languageStorage);

  function setFirstLanguage() {
    if (languageStorage === 'ru') {
      showtranslatePage('ru');
    } else {
      showtranslatePage('en');
    }
  }

  setFirstLanguage();

  function clickBtnLanguage() {
    cahngeBtn.forEach(item => {
      item.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('change-language-ru')) {
          localStorage.setItem('language', 'ru');
          showtranslatePage('ru');
        } else {
          localStorage.setItem('language', 'en');
          showtranslatePage('en'); // setInterval(showtranslateData,1000);
        }
      });
    });
  }

  clickBtnLanguage(); // cahngeBtn.addEventListener('click', (event) => { 
  //     const target = e.target;
  //     if(target && target.classList.contains('change-language-ru') ) { 
  //     }
  // });
  // cahngeBtn.addEventListener('click', showTranslateRu);
};

/* harmony default export */ __webpack_exports__["default"] = (translate);

/***/ }),

/***/ "./src/js/modules/weather.js":
/*!***********************************!*\
  !*** ./src/js/modules/weather.js ***!
  \***********************************/
/*! exports provided: getWeather, hidePiece, showPiece, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePiece", function() { return hidePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPiece", function() { return showPiece; });
const weatherIcon = document.querySelector('.weather-icon'),
      temperature = document.querySelector('.temperature'),
      weatherDescr = document.querySelector('.weather-description'),
      city = document.querySelector('.city');

async function getWeather(language) {
  let city = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Москва';
  const animation = document.querySelector('.description-container');
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=cda9512bfea66fa281c436745191bac0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.weather[0].id, // icon 
  data.weather[0].description, // descr
  Math.round(data.main.temp) // temp
  );
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`); // animation.classList.add('animationOut');
  // animation.classList.remove('animationOut');
  // animation.classList.toggle('animationIn');

  temperature.textContent = `${Math.round(data.main.temp)} °C`;
  weatherDescr.textContent = `${data.weather[0].description}`;
}

const weather = () => {
  //  switch (fade)  {
  //     case 'animationOut':
  //         weatherBlock.classList.add(fade);
  //     break;
  //     case 'animationIn':
  //         weatherBlock.classList.add(fade);
  //     break;
  //  }
  getWeather('ru');

  function getWeatherCity() {
    city.addEventListener('change', () => {
      console.log(city.value);
      getWeather('ru', city.value);
    });
  }

  getWeatherCity();
};

function hidePiece(selector) {
  const block = document.querySelector(selector);
  block.classList.add('animationOut'); // weatherBlock.classList.add('animationOutDisplay');

  setTimeout(() => block.classList.add('animationOutDisplay'), 500);
}

function showPiece(selector) {
  const block = document.querySelector(selector);
  block.classList.remove('animationOut');
  block.classList.add('animationIn');
  block.classList.remove('animationOutDisplay'); // setTimeout(() => weatherBlock.classList.remove('animationOutDisplay'), 700  );
}


/* harmony default export */ __webpack_exports__["default"] = (weather); // cda9512bfea66fa281c436745191bac0
// https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&appid=cda9512bfea66fa281c436745191bac0=metric
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cda9512bfea66fa281c436745191bac0

/***/ })

/******/ });
//# sourceMappingURL=script.js.map