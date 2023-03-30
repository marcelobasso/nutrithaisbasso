exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.applyTrailingSlashOption = void 0;
const applyTrailingSlashOption = (input, option = `always`) => {
  const hasHtmlSuffix = input.endsWith(`.html`);
  const hasXmlSuffix = input.endsWith(`.xml`);
  const hasPdfSuffix = input.endsWith(`.pdf`);
  if (input === `/`) return input;
  if (hasHtmlSuffix || hasXmlSuffix || hasPdfSuffix) {
    option = `never`;
  }
  if (option === `always`) {
    return input.endsWith(`/`) ? input : `${input}/`;
  }
  if (option === `never`) {
    return input.endsWith(`/`) ? input.slice(0, -1) : input;
  }
  return input;
};
exports.applyTrailingSlashOption = applyTrailingSlashOption;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
exports.ScrollContext = _scrollHandler.ScrollHandler;
var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");
exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";
var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);
  function ScrollHandler() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;
    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;
      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };
    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };
    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));
      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };
    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;
      if (!shouldUpdateScroll) {
        return true;
      }

      // Hack to allow accessing this._stateStorage.
      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };
    return _this;
  }
  var _proto = ScrollHandler.prototype;
  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;
    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }
    this._isTicking = false;
  };
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
      key = _this$props$location.key,
      hash = _this$props$location.hash;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /** If a hash is present in the browser url as the component mounts (i.e. the user is navigating
     * from an external website) then scroll to the hash instead of any previously stored scroll
     * position. */
    if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    } else if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
      hash = _this$props$location2.hash,
      key = _this$props$location2.key;
    var scrollPosition;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */

    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };
  return ScrollHandler;
}(React.Component);
exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";
var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}
  var _proto = SessionStorage.prototype;
  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);
    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }
      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }
      return 0;
    }
  };
  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);
    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };
  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };
  return SessionStorage;
}();
exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
var _react = __webpack_require__(/*! react */ "react");
var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./.cache/context-utils.js":
/*!*********************************!*\
  !*** ./.cache/context-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createServerOrClientContext": () => (/* binding */ createServerOrClientContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// Ensure serverContext is not created more than once as React will throw when creating it more than once
// https://github.com/facebook/react/blob/dd2d6522754f52c70d02c51db25eb7cbd5d1c8eb/packages/react/src/ReactServerContext.js#L101
const createServerContext = (name, defaultValue = null) => {
  /* eslint-disable no-undef */
  if (!globalThis.__SERVER_CONTEXT) {
    globalThis.__SERVER_CONTEXT = {};
  }
  if (!globalThis.__SERVER_CONTEXT[name]) {
    globalThis.__SERVER_CONTEXT[name] = react__WEBPACK_IMPORTED_MODULE_0___default().createServerContext(name, defaultValue);
  }
  return globalThis.__SERVER_CONTEXT[name];
};
function createServerOrClientContext(name, defaultValue) {
  if ((react__WEBPACK_IMPORTED_MODULE_0___default().createServerContext)) {
    return createServerContext(name, defaultValue);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultValue);
}


/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath),
/* harmony export */   "findMatchPath": () => (/* binding */ findMatchPath),
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "grabMatchParams": () => (/* binding */ grabMatchParams),
/* harmony export */   "setMatchPaths": () => (/* binding */ setMatchPaths)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];
const trimPathname = rawPathname => {
  let newRawPathname = rawPathname;
  const queryIndex = rawPathname.indexOf(`?`);
  if (queryIndex !== -1) {
    const [path, qs] = rawPathname.split(`?`);
    newRawPathname = `${path}?${encodeURIComponent(qs)}`;
  }
  const pathname = decodeURIComponent(newRawPathname);

  // Remove the pathPrefix from the pathname.
  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname, decodeURIComponent(""))
  // Remove any hashfragment
  .split(`#`)[0];
  return trimmedPathname;
};
function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  }
  // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router
  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}

/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */
const setMatchPaths = value => {
  matchPaths = value;
};

/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */
const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);
  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);
  }
  return null;
};

/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */
const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);
  if (path) {
    return path.params;
  }
  return {};
};

// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }
  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);
  if (redirect) {
    return findPath(redirect.toPath);
  }
  let foundPath = findMatchPath(trimmedPathname);
  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }
  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};

/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */
const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;
  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }
  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.Link),
/* harmony export */   "PageRenderer": () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "Script": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.Script),
/* harmony export */   "ScriptStrategy": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.ScriptStrategy),
/* harmony export */   "Slice": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_5__.Slice),
/* harmony export */   "StaticQuery": () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQuery),
/* harmony export */   "StaticQueryContext": () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQueryContext),
/* harmony export */   "collectedScriptsByPage": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.collectedScriptsByPage),
/* harmony export */   "graphql": () => (/* binding */ graphql),
/* harmony export */   "navigate": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.navigate),
/* harmony export */   "parsePath": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.parsePath),
/* harmony export */   "prefetchPathname": () => (/* binding */ prefetchPathname),
/* harmony export */   "scriptCache": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCache),
/* harmony export */   "scriptCallbackCache": () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCallbackCache),
/* harmony export */   "useScrollRestoration": () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__.useScrollRestoration),
/* harmony export */   "useStaticQuery": () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery),
/* harmony export */   "withAssetPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withAssetPrefix),
/* harmony export */   "withPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withPrefix)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/dist/index.modern.mjs");
/* harmony import */ var _static_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-query */ "./.cache/static-query.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slice */ "./.cache/slice.js");
/* harmony import */ var gatsby_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-script */ "./node_modules/gatsby-script/dist/index.modern.mjs");

const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_0__["default"].enqueue;
function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}








/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLoader": () => (/* binding */ BaseLoader),
/* harmony export */   "PageResourceStatus": () => (/* binding */ PageResourceStatus),
/* harmony export */   "ProdLoader": () => (/* binding */ ProdLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getSliceResults": () => (/* binding */ getSliceResults),
/* harmony export */   "getStaticQueryResults": () => (/* binding */ getStaticQueryResults),
/* harmony export */   "publicLoader": () => (/* binding */ publicLoader),
/* harmony export */   "setLoader": () => (/* binding */ setLoader)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-server-dom-webpack */ "./node_modules/react-server-dom-webpack/index.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");





/**
 * Available resource loading statuses
 */
const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,
  /**
   * Resources loaded successfully
   */
  Success: `success`
};
const preferDefault = m => m && m.default || m;
const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};
const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`);
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json${maybeSearch ? `?${maybeSearch}` : ``}`;
};

/**
 * Utility to check the path that goes into doFetch for e.g. potential malicious intentions.
 * It checks for "//" because with this you could do a fetch request to a different domain.
 */
const shouldAbortFetch = rawPath => rawPath.startsWith(`//`);
function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };
    req.send(null);
  });
}
const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }
    if (navigator.connection.saveData) {
      return false;
    }
  }
  return true;
};

// Regex that matches common search crawlers
const BOT_REGEX = /bot|crawler|spider|crawling/i;
const toPageResources = (pageData, component = null, head) => {
  var _pageData$slicesMap;
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError,
    slicesMap: (_pageData$slicesMap = pageData.slicesMap) !== null && _pageData$slicesMap !== void 0 ? _pageData$slicesMap : {}
  };
  return {
    component,
    head,
    json: pageData.result,
    page
  };
};
function waitForResponse(response) {
  return new Promise(resolve => {
    try {
      const result = response.readRoot();
      resolve(result);
    } catch (err) {
      if (Object.hasOwnProperty.call(err, `_response`) && Object.hasOwnProperty.call(err, `_status`)) {
        setTimeout(() => {
          waitForResponse(response).then(resolve);
        }, 200);
      } else {
        throw err;
      }
    }
  });
}
class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.partialHydrationDb = new Map();
    this.slicesDataDb = new Map();
    this.sliceInflightDb = new Map();
    this.slicesDb = new Map();
    this.isPrefetchQueueRunning = false;
    this.prefetchQueued = [];
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.setMatchPaths)(matchPaths);
  }
  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);
    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    }

    // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }
  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }
  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req;

      // Handle 200
      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);
          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }
          const maybeSearch = pagePath.split(`?`)[1];
          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`;
          }
          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }
  fetchPartialHydrationJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath).replace(`.json`, `-rsc.json`);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req;

      // Handle 200
      if (status === 200) {
        try {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: responseText
          });
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }
  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);
      if (true) {
        return Promise.resolve(pageData);
      }
    }
    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }
  loadPartialHydrationJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.partialHydrationDb.has(pagePath)) {
      const pageData = this.partialHydrationDb.get(pagePath);
      if (true) {
        return Promise.resolve(pageData);
      }
    }
    return this.fetchPartialHydrationJson({
      pagePath
    }).then(pageData => {
      this.partialHydrationDb.set(pagePath, pageData);
      return pageData;
    });
  }
  loadSliceDataJson(sliceName) {
    if (this.slicesDataDb.has(sliceName)) {
      const jsonPayload = this.slicesDataDb.get(sliceName);
      return Promise.resolve({
        sliceName,
        jsonPayload
      });
    }
    const url = `${""}/slice-data/${sliceName}.json`;
    return doFetch(url, `GET`).then(res => {
      const jsonPayload = JSON.parse(res.responseText);
      this.slicesDataDb.set(sliceName, jsonPayload);
      return {
        sliceName,
        jsonPayload
      };
    });
  }
  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findMatchPath)(rawPath);
  }

  // TODO check all uses of this and whether they use undefined for page resources not exist
  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);
      if (true) {
        if (page.error) {
          return Promise.resolve({
            error: page.error,
            status: page.status
          });
        }
        return Promise.resolve(page.payload);
      }
    }
    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }
    const loadDataPromises = [this.loadAppData(), this.loadPageDataJson(pagePath)];
    if (false) {}
    const inFlightPromise = Promise.all(loadDataPromises).then(allData => {
      const [appDataResponse, pageDataResponse, rscDataResponse] = allData;
      if (pageDataResponse.status === PageResourceStatus.Error || (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.status) === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }
      let pageData = pageDataResponse.payload;
      const {
        componentChunkName,
        staticQueryHashes: pageStaticQueryHashes = [],
        slicesMap = {}
      } = pageData;
      const finalResult = {};
      const dedupedSliceNames = Array.from(new Set(Object.values(slicesMap)));
      const loadSlice = slice => {
        if (this.slicesDb.has(slice.name)) {
          return this.slicesDb.get(slice.name);
        } else if (this.sliceInflightDb.has(slice.name)) {
          return this.sliceInflightDb.get(slice.name);
        }
        const inFlight = this.loadComponent(slice.componentChunkName).then(component => {
          return {
            component: preferDefault(component),
            sliceContext: slice.result.sliceContext,
            data: slice.result.data
          };
        });
        this.sliceInflightDb.set(slice.name, inFlight);
        inFlight.then(results => {
          this.slicesDb.set(slice.name, results);
          this.sliceInflightDb.delete(slice.name);
        });
        return inFlight;
      };
      return Promise.all(dedupedSliceNames.map(sliceName => this.loadSliceDataJson(sliceName))).then(slicesData => {
        const slices = [];
        const dedupedStaticQueryHashes = [...pageStaticQueryHashes];
        for (const {
          jsonPayload,
          sliceName
        } of Object.values(slicesData)) {
          slices.push({
            name: sliceName,
            ...jsonPayload
          });
          for (const staticQueryHash of jsonPayload.staticQueryHashes) {
            if (!dedupedStaticQueryHashes.includes(staticQueryHash)) {
              dedupedStaticQueryHashes.push(staticQueryHash);
            }
          }
        }
        const loadChunkPromises = [Promise.all(slices.map(loadSlice)), this.loadComponent(componentChunkName, `head`)];
        if (true) {
          loadChunkPromises.push(this.loadComponent(componentChunkName));
        }

        // In develop we have separate chunks for template and Head components
        // to enable HMR (fast refresh requires single exports).
        // In production we have shared chunk with both exports. Double loadComponent here
        // will be deduped by webpack runtime resulting in single request and single module
        // being loaded for both `component` and `head`.
        // get list of components to get
        const componentChunkPromises = Promise.all(loadChunkPromises).then(components => {
          const [sliceComponents, headComponent, pageComponent] = components;
          finalResult.createdAt = new Date();
          for (const sliceComponent of sliceComponents) {
            if (!sliceComponent || sliceComponent instanceof Error) {
              finalResult.status = PageResourceStatus.Error;
              finalResult.error = sliceComponent;
            }
          }
          if ( true && (!pageComponent || pageComponent instanceof Error)) {
            finalResult.status = PageResourceStatus.Error;
            finalResult.error = pageComponent;
          }
          let pageResources;
          if (finalResult.status !== PageResourceStatus.Error) {
            finalResult.status = PageResourceStatus.Success;
            if (pageDataResponse.notFound === true || (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.notFound) === true) {
              finalResult.notFound = true;
            }
            pageData = Object.assign(pageData, {
              webpackCompilationHash: appDataResponse ? appDataResponse.webpackCompilationHash : ``
            });
            if (typeof (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.payload) === `string`) {
              pageResources = toPageResources(pageData, null, headComponent);
              pageResources.partialHydration = rscDataResponse.payload;
              const readableStream = new ReadableStream({
                start(controller) {
                  const te = new TextEncoder();
                  controller.enqueue(te.encode(rscDataResponse.payload));
                },
                pull(controller) {
                  // close on next read when queue is empty
                  controller.close();
                },
                cancel() {}
              });
              return waitForResponse((0,react_server_dom_webpack__WEBPACK_IMPORTED_MODULE_0__.createFromReadableStream)(readableStream)).then(result => {
                pageResources.partialHydration = result;
                return pageResources;
              });
            } else {
              pageResources = toPageResources(pageData, pageComponent, headComponent);
            }
          }

          // undefined if final result is an error
          return pageResources;
        });

        // get list of static queries to get
        const staticQueryBatchPromise = Promise.all(dedupedStaticQueryHashes.map(staticQueryHash => {
          // Check for cache in case this static query result has already been loaded
          if (this.staticQueryDb[staticQueryHash]) {
            const jsonPayload = this.staticQueryDb[staticQueryHash];
            return {
              staticQueryHash,
              jsonPayload
            };
          }
          return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
            const jsonPayload = JSON.parse(req.responseText);
            return {
              staticQueryHash,
              jsonPayload
            };
          }).catch(() => {
            throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
          });
        })).then(staticQueryResults => {
          const staticQueryResultsMap = {};
          staticQueryResults.forEach(({
            staticQueryHash,
            jsonPayload
          }) => {
            staticQueryResultsMap[staticQueryHash] = jsonPayload;
            this.staticQueryDb[staticQueryHash] = jsonPayload;
          });
          return staticQueryResultsMap;
        });
        return Promise.all([componentChunkPromises, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
          let payload;
          if (pageResources) {
            payload = {
              ...pageResources,
              staticQueryResults
            };
            finalResult.payload = payload;
            _emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`, {
              page: payload,
              pageResources: payload
            });
          }
          this.pageDb.set(pagePath, finalResult);
          if (finalResult.error) {
            return {
              error: finalResult.error,
              status: finalResult.status
            };
          }
          return payload;
        })
        // when static-query fail to load we throw a better error
        .catch(err => {
          return {
            error: err,
            status: PageResourceStatus.Error
          };
        });
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  }

  // returns undefined if the page does not exists in cache
  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);
      if (pageData.payload) {
        return pageData.payload;
      }
      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }
    return undefined;
  }
  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    }

    // Don't prefetch if this is a crawler bot
    if (navigator.userAgent && BOT_REGEX.test(navigator.userAgent)) {
      return false;
    }

    // Check if the page exists.
    if (this.pageDb.has(pagePath)) {
      return false;
    }
    return true;
  }
  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {}
      };
    }
    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {}
      };
    }
    const defer = {
      resolve: null,
      reject: null,
      promise: null
    };
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    this.prefetchQueued.push([pagePath, defer]);
    const abortC = new AbortController();
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath);
      // remove from the queue
      if (index !== -1) {
        this.prefetchQueued.splice(index, 1);
      }
    });
    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true;
      setTimeout(() => {
        this._processNextPrefetchBatch();
      }, 3000);
    }
    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC)
    };
  }
  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0));
    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4);
      const prefetches = Promise.all(toPrefetch.map(([pagePath, dPromise]) => {
        // Tell plugins with custom prefetching logic that they should start
        // prefetching this path.
        if (!this.prefetchTriggered.has(pagePath)) {
          this.apiRunner(`onPrefetchPathname`, {
            pathname: pagePath
          });
          this.prefetchTriggered.add(pagePath);
        }

        // If a plugin has disabled core prefetching, stop now.
        if (this.prefetchDisabled) {
          return dPromise.resolve(false);
        }
        return this.doPrefetch((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pagePath)).then(() => {
          if (!this.prefetchCompleted.has(pagePath)) {
            this.apiRunner(`onPostPrefetchPathname`, {
              pathname: pagePath
            });
            this.prefetchCompleted.add(pagePath);
          }
          dPromise.resolve(true);
        });
      }));
      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch();
          }, 3000);
        });
      } else {
        this.isPrefetchQueueRunning = false;
      }
    });
  }
  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    if (false) {} else {
      return (0,_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl, {
        crossOrigin: `anonymous`,
        as: `fetch`
      }).then(() =>
      // This was just prefetched, so will return a response from
      // the cache instead of making another request to the server
      this.loadPageDataJson(pagePath));
    }
  }
  hovering(rawPath) {
    this.loadPage(rawPath);
  }
  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);
    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }
  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }
  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;
      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      }

      // Handle 200
      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);
          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }
          appData = jsonPayload;
        } catch (err) {
          // continue regardless of error
        }
      }
      return appData;
    });
  }
}
const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);
class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = (chunkName, exportType = `components`) => {
      if (true) {
        exportType = `components`;
      }
      if (!asyncRequires[exportType][chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name "${chunkName}"`);
      }
      return asyncRequires[exportType][chunkName]()
      // loader will handle the case when component is error
      .catch(err => err);
    };
    super(loadComponent, matchPaths);
    if (pageData) {
      this.pageDataDb.set((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`
      });
    }
  }
  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }
      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(() => pageData);
    });
  }
  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data;
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data;
        });
      }
      return data;
    });
  }
  loadPartialHydrationJson(rawPath) {
    return super.loadPartialHydrationJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data;
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data;
        });
      }
      return data;
    });
  }
}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}
function getSliceResults() {
  if (instance) {
    return instance.slicesDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch;
  }
  let [path, search = ``] = pathAndSearch.split(`?`);
  if (search) {
    search = `?` + search;
  }
  if (path === `/`) {
    return `/` + search;
  }
  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search;
  }
  return path + search;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }
  const fakeLink = document.createElement(`link`);
  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }
  return false;
};
const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }
    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};
const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);
    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };
    req.send(null);
  });
};
const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};
const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }
    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;
if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");


// Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);
  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }
  return redirect;
}

/***/ }),

/***/ "./.cache/slice.js":
/*!*************************!*\
  !*** ./.cache/slice.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slice": () => (/* binding */ Slice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slice_server_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice/server-slice */ "./.cache/slice/server-slice.js");
/* harmony import */ var _slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice/inline-slice */ "./.cache/slice/inline-slice.js");
/* harmony import */ var _slice_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice/context */ "./.cache/slice/context.js");
"use client";





function Slice(props) {
  if (true) {
    // we use sliceName internally, so remap alias to sliceName
    const internalProps = {
      ...props,
      sliceName: props.alias
    };
    delete internalProps.alias;
    delete internalProps.__renderedByLocation;
    const slicesContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slice_context__WEBPACK_IMPORTED_MODULE_3__.SlicesContext);

    // validate props
    const propErrors = validateSliceProps(props);
    if (Object.keys(propErrors).length) {
      throw new SlicePropsError(slicesContext.renderEnvironment === `browser`, internalProps.sliceName, propErrors, props.__renderedByLocation);
    }
    if (slicesContext.renderEnvironment === `server`) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_server_slice__WEBPACK_IMPORTED_MODULE_1__.ServerSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `browser`) {
      // in the browser, we'll just render the component as is
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `engines` || slicesContext.renderEnvironment === `dev-ssr`) {
      // if we're in SSR, we'll just render the component as is
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `slices`) {
      // we are not yet supporting nested slices

      let additionalContextMessage = ``;

      // just in case generating additional contextual information fails, we still want the base message to show
      // and not show another cryptic error message
      try {
        additionalContextMessage = `\n\nSlice component "${slicesContext.sliceRoot.name}" (${slicesContext.sliceRoot.componentPath}) tried to render <Slice alias="${props.alias}"/>`;
      } catch {
        // don't need to handle it, we will just skip the additional context message if we fail to generate it
      }
      throw new Error(`Nested slices are not supported.${additionalContextMessage}\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices`);
    } else {
      throw new Error(`Slice context "${slicesContext.renderEnvironment}" is not supported.`);
    }
  } else {}
}
class SlicePropsError extends Error {
  constructor(inBrowser, sliceName, propErrors, renderedByLocation) {
    const errors = Object.entries(propErrors).map(([key, value]) => `not serializable "${value}" type passed to "${key}" prop`).join(`, `);
    const name = `SlicePropsError`;
    let stack = ``;
    let message = ``;
    if (inBrowser) {
      // They're just (kinda) kidding, I promise... You can still work here <3
      //   https://www.gatsbyjs.com/careers/
      const fullStack = react__WEBPACK_IMPORTED_MODULE_0___default().__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack();

      // remove the first line of the stack trace
      const stackLines = fullStack.trim().split(`\n`).slice(1);
      stackLines[0] = stackLines[0].trim();
      stack = `\n` + stackLines.join(`\n`);
      message = `Slice "${sliceName}" was passed props that are not serializable (${errors}).`;
    } else {
      // we can't really grab any extra info outside of the browser, so just print what we can
      message = `${name}: Slice "${sliceName}" was passed props that are not serializable (${errors}).`;
      const stackLines = new Error().stack.trim().split(`\n`).slice(2);
      stack = `${message}\n${stackLines.join(`\n`)}`;
    }
    super(message);
    this.name = name;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, SlicePropsError);
    }
    if (renderedByLocation) {
      this.forcedLocation = {
        ...renderedByLocation,
        functionName: `Slice`
      };
    }
  }
}
const validateSliceProps = (props, errors = {}, seenObjects = [], path = null) => {
  // recursively validate all props
  for (const [name, value] of Object.entries(props)) {
    if (value === undefined || value === null || !path && name === `children`) {
      continue;
    }
    const propPath = path ? `${path}.${name}` : name;
    if (typeof value === `function`) {
      errors[propPath] = typeof value;
    } else if (typeof value === `object` && seenObjects.indexOf(value) <= 0) {
      seenObjects.push(value);
      validateSliceProps(value, errors, seenObjects, propPath);
    }
  }
  return errors;
};

/***/ }),

/***/ "./.cache/slice/context.js":
/*!*********************************!*\
  !*** ./.cache/slice/context.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlicesContext": () => (/* binding */ SlicesContext),
/* harmony export */   "SlicesMapContext": () => (/* binding */ SlicesMapContext),
/* harmony export */   "SlicesPropsContext": () => (/* binding */ SlicesPropsContext),
/* harmony export */   "SlicesResultsContext": () => (/* binding */ SlicesResultsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SlicesResultsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesMapContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesPropsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});


/***/ }),

/***/ "./.cache/slice/inline-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/inline-slice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineSlice": () => (/* binding */ InlineSlice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");


const InlineSlice = ({
  sliceName,
  allowEmpty,
  children,
  ...sliceProps
}) => {
  const slicesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesMapContext);
  const slicesResultsMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesResultsContext);
  const concreteSliceName = slicesMap[sliceName];
  const slice = slicesResultsMap.get(concreteSliceName);
  if (!slice) {
    if (allowEmpty) {
      return null;
    } else {
      throw new Error(`Slice "${concreteSliceName}" for "${sliceName}" slot not found`);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slice.component, Object.assign({
    sliceContext: slice.sliceContext,
    data: slice.data
  }, sliceProps), children);
};

/***/ }),

/***/ "./.cache/slice/server-slice-renderer.js":
/*!***********************************************!*\
  !*** ./.cache/slice/server-slice-renderer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSliceRenderer": () => (/* binding */ ServerSliceRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ServerSliceRenderer = ({
  sliceId,
  children
}) => {
  const contents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-start`, {
    id: `${sliceId}-1`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-end`, {
    id: `${sliceId}-1`
  })];
  if (children) {
    // if children exist, we split the slice into a before and after piece
    // see renderSlices in render-html
    contents.push(children);
    contents.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-start`, {
      id: `${sliceId}-2`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-end`, {
      id: `${sliceId}-2`
    }));
  }
  return contents;
};

/***/ }),

/***/ "./.cache/slice/server-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/server-slice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSlice": () => (/* binding */ ServerSlice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-core-utils/create-content-digest */ "./node_modules/gatsby-core-utils/dist/create-content-digest.mjs");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");
/* harmony import */ var _server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-slice-renderer */ "./.cache/slice/server-slice-renderer.js");




const getSliceId = (sliceName, sliceProps) => {
  if (!Object.keys(sliceProps).length) {
    return sliceName;
  }
  const propsString = (0,gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__.createContentDigest)(sliceProps);
  return `${sliceName}-${propsString}`;
};
const ServerSlice = ({
  sliceName,
  allowEmpty,
  children,
  ...sliceProps
}) => {
  const slicesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesMapContext);
  const slicesProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesPropsContext);
  const concreteSliceName = slicesMap[sliceName];
  if (!concreteSliceName) {
    if (allowEmpty) {
      return null;
    } else {
      throw new Error(`Slice "${concreteSliceName}" for "${sliceName}" slot not found`);
    }
  }
  const sliceId = getSliceId(concreteSliceName, sliceProps);

  // set props on context object for static-entry to return
  let sliceUsage = slicesProps[sliceId];
  if (!sliceUsage) {
    slicesProps[sliceId] = sliceUsage = {
      props: sliceProps,
      sliceName: concreteSliceName,
      hasChildren: !!children
    };
  } else {
    if (children) {
      sliceUsage.hasChildren = true;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__.ServerSliceRenderer, {
    sliceId: sliceId
  }, children);
};

/***/ }),

/***/ "./.cache/static-query.js":
/*!********************************!*\
  !*** ./.cache/static-query.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticQuery": () => (/* binding */ StaticQuery),
/* harmony export */   "StaticQueryContext": () => (/* binding */ StaticQueryContext),
/* harmony export */   "useStaticQuery": () => (/* binding */ useStaticQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-utils */ "./.cache/context-utils.js");



const StaticQueryContext = (0,_context_utils__WEBPACK_IMPORTED_MODULE_1__.createServerOrClientContext)(`StaticQuery`, {});
function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}
let warnedAboutStaticQuery = false;

// TODO(v6): Remove completely
const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  if ( true && !warnedAboutStaticQuery) {
    console.warn(`The <StaticQuery /> component is deprecated and will be removed in Gatsby v6. Use useStaticQuery instead. Refer to the migration guide for more information: https://gatsby.dev/migrating-4-to-5/#staticquery--is-deprecated`);
    warnedAboutStaticQuery = true;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};
StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
const useStaticQuery = query => {
  var _context$query;
  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    // TODO(v5): Remove since we require React >= 18
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }
  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext);

  // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction
  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }
  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};


/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */

function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }
  if (str === prefix) {
    return `/`;
  }
  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }
  return str;
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ G),
/* harmony export */   "MainImage": () => (/* binding */ L),
/* harmony export */   "Placeholder": () => (/* binding */ z),
/* harmony export */   "StaticImage": () => (/* binding */ U),
/* harmony export */   "generateImageData": () => (/* binding */ v),
/* harmony export */   "getImage": () => (/* binding */ S),
/* harmony export */   "getImageData": () => (/* binding */ I),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ f),
/* harmony export */   "getSrc": () => (/* binding */ N),
/* harmony export */   "getSrcSet": () => (/* binding */ x),
/* harmony export */   "withArtDirection": () => (/* binding */ W)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 4 / 3,
  c = function (e) {
    return console.warn(e);
  },
  h = function (e, t) {
    return e - t;
  },
  g = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function p(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function m(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    c = e.formats,
    h = void 0 === c ? ["auto", "webp"] : c;
  return h = h.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: h,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || d))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / d) : 800), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: h
  }));
}
function f(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = m(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function v(e) {
  var t,
    a = (e = m(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    f = e.height,
    v = e.filename,
    k = e.reporter,
    E = void 0 === k ? {
      warn: c
    } : k,
    M = e.backgroundColor,
    S = e.placeholderURL;
  if (a || E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = p(v)) : i = {
    width: h,
    height: f,
    format: (null == (t = i) ? void 0 : t.format) || p(v) || "auto"
  };
  var N = new Set(e.formats);
  (0 === N.size || N.has("auto") || N.has("")) && (N.delete("auto"), N.delete(""), N.add(i.format)), N.has("jpg") && N.has("png") && (E.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), N.delete("jpg" === i.format ? "png" : "jpg"));
  var x = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: c
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        g = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (g.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + g.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: c
          } : u,
          h = a.width / a.height,
          g = w(void 0 === l ? s : l);
        if (i && r) {
          var p = b(a, {
            width: i,
            height: r,
            fit: o
          });
          i = p.width, r = p.height, h = p.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : 800;
        var m = i;
        if (a.width < i || a.height < r) {
          var f = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + f + ' "' + ("width" === f ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + f + " of " + a[f] + "px. If possible, replace the current image with a larger one."), "width" === f ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: g.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: m,
          presentationHeight: Math.round(m / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? y(e) : "fullWidth" === i ? y(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    I = {
      sources: []
    },
    W = e.sizes;
  W || (W = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  }(x.presentationWidth, o)), N.forEach(function (e) {
    var t = x.sizes.map(function (t) {
      var i = r(v, t, Math.round(t / x.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      E.warn("[" + a + "] The resolver for image " + v + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === x.unscaledWidth;
      }) || t[0];
      i && (I.fallback = {
        src: i.src,
        srcSet: g(t),
        sizes: W
      });
    } else {
      var n;
      null == (n = I.sources) || n.push({
        srcSet: g(t),
        sizes: W,
        type: "image/" + e
      });
    }
  });
  var j = {
    images: I,
    layout: o,
    backgroundColor: M
  };
  switch (S && (j.placeholder = {
    fallback: S
  }), o) {
    case "fixed":
      j.width = x.presentationWidth, j.height = x.presentationHeight;
      break;
    case "fullWidth":
      j.width = 1, j.height = 1 / x.aspectRatio;
      break;
    case "constrained":
      j.width = e.width || x.presentationWidth || 1, j.height = (j.width || 1) / x.aspectRatio;
  }
  return j;
}
var w = function (e) {
  return Array.from(new Set([1].concat(e))).sort(h);
};
function y(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    d = e.layout,
    c = a.width / a.height,
    g = w(void 0 === l ? s : l);
  if (i && r) {
    var p = b(a, {
      width: i,
      height: r,
      fit: o
    });
    i = p.width, r = p.height, c = p.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(h),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}
function b(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var k = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  E = ["images", "placeholder"];
function M() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var S = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  N = function (e) {
    var t, a, i;
    return null == (t = S(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  x = function (e) {
    var t, a, i;
    return null == (t = S(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function I(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, k);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), v(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function W(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, E), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var j,
  R = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  _ = ["fallback", "sources", "shouldLoad"],
  A = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, R);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  O = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, _),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
A.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, O.displayName = "Picture", O.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var T = ["fallback"],
  z = function (t) {
    var a = t.fallback,
      i = o(t, T);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
z.displayName = "Placeholder", z.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (j = O.propTypes) ? void 0 : j.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var L = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, t, {
    shouldLoad: !0
  }))));
};
L.displayName = "MainImage", L.propTypes = O.propTypes;
var q = ["children"],
  C = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  D = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  P = function (a) {
    var i = a.children,
      r = o(a, q);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, null));
  },
  H = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  F = ["style", "className"],
  B = function (e) {
    return e.replace(/\n/g, "");
  },
  G = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, H);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      S = u.backgroundColor,
      N = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return M() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (M() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      x = N.style,
      I = N.className,
      W = o(N, F),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? B(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: B(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, x, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return M() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, S, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), M() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  V = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  U = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, V);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(G),
  X = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  Y = new Set(["fixed", "fullWidth", "constrained"]),
  Z = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: X,
    height: X,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !Y.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
U.displayName = "StaticImage", U.propTypes = Z;


/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_645542019_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/645542019.json */ "./public/page-data/sq/d/645542019.json");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.css */ "./src/components/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_4__);






function Footer() {
  const {
    logo
  } = _public_page_data_sq_d_645542019_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.getImage)(logo.childImageSharp.gatsbyImageData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("footer", {
    className: "text-center text-lg-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container p-5 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row dark-violet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "col-lg-6 col-md-12 mb-4 mb-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", {
    className: "text-uppercase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas me-3 mb-3 fa-map-marked-alt"
  }), " Onde me encontrar?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "mb-2"
  }, "Rua Buarque de Macedo, 4146 - Sala 204"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "mb-2"
  }, "Bairro Centro - 95185-000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "mb-2"
  }, "Carlos Barbosa/RS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/contato"
  }, "Veja outras formas de contato"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "footerLogo col-lg-6 col-md-12 mb-4 mb-md-0 d-flex justify-content-end align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.GatsbyImage, {
    image: image,
    className: "logo",
    alt: "Logo Tha\xEDs Basso nutricionista"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "footerHi p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_3__.Container, {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Made with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-heart heart"
  }), " by Lucas and Marcelo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "\xA9 All rights are reserved | 2022"))));
}

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.css */ "./src/components/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_3__);




function Navbar() {
  const PAGES = [{
    name: "Home",
    to: "/",
    ariaLabel: "Página inicial"
  }, {
    name: "Sobre mim",
    to: "/sobre-mim",
    ariaLable: "Informações sobre mim"
  }, {
    name: "Contato",
    to: "/contato",
    ariaLabel: "Informações de contato"
  }];

  // {
  //     name: 'Consultório',
  //     to: '/consultorio',
  //     ariaLabel: 'Informações sobre o consultório',
  // },

  const SOCIAL_LINKS = [{
    icon: "fa-facebook",
    href: "https://www.facebook.com/nutricionistathaisb",
    alt: "Link do Facebook"
  }, {
    icon: "fa-instagram",
    href: "https://www.instagram.com/nutrithaisbasso/",
    alt: "Link do Instagram"
  }, {
    icon: "fa-whatsapp",
    href: "https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005",
    alt: "Link do Whatsapp"
  }, {
    icon: "fa-youtube",
    href: "https://www.youtube.com/channel/UCACMTraiEAeIf0pZ552PNZg",
    alt: "Link do canal do Youtube"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light fixed-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_2__.Container, {
    className: "justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-mdb-toggle": "collapse",
    "data-mdb-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: "fas fa-bars"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/",
    alt: "P\xE1gina inicial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "/icons/logo-with-name.png",
    alt: "Logo Tha\xEDs Basso nutricionista",
    className: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "navbarSupportedContent",
    className: "collapse navbar-collapse flex-grow-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "navbar-nav mb-lg-0"
  }, PAGES.map((page, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    key: index,
    className: "nav-item px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: page.to,
    "aria-label": page.ariaLabel,
    className: "nav-link text go-right"
  }, page.name))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "socialLinks",
    className: "d-flex align-items-center d-none d-lg-block"
  }, SOCIAL_LINKS.map((page, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: page.href,
    alt: page.alt,
    target: "_blank",
    rel: "noopener",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: `fab ${page.icon} fa-15x px-2`
  }))))));
}

/***/ }),

/***/ "./src/components/common/ActionBanner.js":
/*!***********************************************!*\
  !*** ./src/components/common/ActionBanner.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interface_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _ActionBanner_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionBanner.css */ "./src/components/common/ActionBanner.css");
/* harmony import */ var _ActionBanner_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ActionBanner_css__WEBPACK_IMPORTED_MODULE_2__);



function ActionBanner(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "action-banner my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_interface_UI__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action-banner-box text-center white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center align-items-center flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action-banner-image-container mb-5"
  }, props.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_interface_UI__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
    className: "mx-5"
  }, props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-50 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_interface_UI__WEBPACK_IMPORTED_MODULE_1__.CallToAction, {
    text: props.CallToAction,
    className: "mt-4"
  }))))));
}

/***/ }),

/***/ "./src/components/common/Header.js":
/*!*****************************************!*\
  !*** ./src/components/common/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.css */ "./src/components/common/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_2__);



function Header(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: "pt-5 justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.PageTitle, {
    title: props.title,
    subtitle: props.subtitle
  })));
}

/***/ }),

/***/ "./src/components/common/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/common/Layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _fontawesome_free_6_2_1_web_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fontawesome-free-6.2.1-web/css/all.min.css */ "./src/fontawesome-free-6.2.1-web/css/all.min.css");
/* harmony import */ var _fontawesome_free_6_2_1_web_css_all_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_free_6_2_1_web_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_4__);


// import 'mdb-ui-kit'; // lib



function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "filler",
    style: {
      display: 'block',
      height: '100px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-content"
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./src/components/common/Section.js":
/*!******************************************!*\
  !*** ./src/components/common/Section.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interface_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/UI */ "./src/components/common/interface/UI.js");


function Section(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_interface_UI__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
    className: props.className
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_interface_UI__WEBPACK_IMPORTED_MODULE_1__.SectionText, {
    className: props.className
  }, props.content));
}

/***/ }),

/***/ "./src/components/common/Seo.js":
/*!**************************************!*\
  !*** ./src/components/common/Seo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2057882989_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/2057882989.json */ "./public/page-data/sq/d/2057882989.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Seo(props) {
  const data = _public_page_data_sq_d_2057882989_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const {
    title,
    description
  } = data.site.siteMetadata;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
    rel: "canonical",
    href: "https://thaisbasso.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/icons/favicon.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "text/javascript",
    src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", null, props.title || title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    name: "description",
    content: props.description || description
  }));
}

/***/ }),

/***/ "./src/components/common/interface/UI.js":
/*!***********************************************!*\
  !*** ./src/components/common/interface/UI.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallToAction": () => (/* binding */ CallToAction),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "PageTitle": () => (/* binding */ PageTitle),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "SectionText": () => (/* binding */ SectionText),
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PageTitle = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
  className: `text-center  ${props.className || ""}`
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "d-block title mb-3"
}, props.title), props.subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "subtitle d-block"
}, props.subtitle));
const SectionTitle = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
  className: `text mb-4 p-0 fs-1gg ${props.className || ""}`
}, props.children);
const SectionText = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: `text mb-4 p-0 ${props.className}`
}, props.children);
const Row = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: `row ${props.className || ""}`
}, props.children);
const Container = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: `container-lg px-2 py-2 ` + props.className
}, props.children);
const CallToAction = props => {
  const whatsappLink = "https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: props.className,
    href: props.href || whatsappLink,
    alt: props.alt || false,
    target: props.target || false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: `btn btn-custom fs-6 text-center ${props.buttonClassName || ""}`
  }, props.text || "Marque sua consulta"));
};


/***/ }),

/***/ "./src/components/home/AboutMe.js":
/*!****************************************!*\
  !*** ./src/components/home/AboutMe.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutMe)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_660500567_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/660500567.json */ "./public/page-data/sq/d/660500567.json");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wave */ "./src/components/home/Wave.js");
/* harmony import */ var _AboutMe_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutMe.css */ "./src/components/home/AboutMe.css");
/* harmony import */ var _AboutMe_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AboutMe_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _common_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Section */ "./src/components/common/Section.js");







function AboutMe() {
  const data = _public_page_data_sq_d_660500567_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const image = data.logo.childImageSharp.gatsbyImageData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "aboutMe p-5 my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_4__.Container, {
    className: "justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_4__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "aboutMeText col-lg-7 col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "Venha comigo ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("u", null, "revolucionar a nutri\xE7\xE3o")),
    content: "Sou a Tha\xEDs Basso, nutricionista p\xF3s graduada em nutri\xE7\xE3o funcional e comportamento alimentar, uma das \xE1reas mais atuais da Nutri\xE7\xE3o. Sou apaixonada pela minha profiss\xE3o e por como ela pode mudar a vida das pessoas. Estou sempre buscando conhecimento e novidades na \xE1rea, possuo mais de 10 cursos em \xE1reas espec\xEDficas da nutri\xE7\xE3o que agregam e enriquecem minha pr\xE1tica cl\xEDnica."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_4__.CallToAction, {
    text: "Agende sua consulta!",
    href: "https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005",
    alt: "Whatsapp link",
    target: "_blank",
    rel: "noopener",
    className: "d-block w-50"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "aboutMeText col-lg-1 col-md-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-lg-4 col-md-12 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__.GatsbyImage, {
    image: image,
    className: "rounded-circle shadow-custom",
    alt: "Profile image"
  }))))));
}

/***/ }),

/***/ "./src/components/home/Features.js":
/*!*****************************************!*\
  !*** ./src/components/home/Features.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Features)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _Features_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Features.css */ "./src/components/home/Features.css");
/* harmony import */ var _Features_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Features_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_undraw_undraw_super_woman_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/undraw/undraw_super_woman.svg */ "./src/images/undraw/undraw_super_woman.svg");
/* harmony import */ var _images_undraw_undraw_super_woman_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_undraw_undraw_super_woman_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_undraw_undraw_fish_bowl_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/undraw/undraw_fish_bowl.svg */ "./src/images/undraw/undraw_fish_bowl.svg");
/* harmony import */ var _images_undraw_undraw_fish_bowl_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_undraw_undraw_fish_bowl_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_undraw_undraw_a_better_world_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/undraw/undraw_a_better_world.svg */ "./src/images/undraw/undraw_a_better_world.svg");
/* harmony import */ var _images_undraw_undraw_a_better_world_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_undraw_undraw_a_better_world_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_undraw_undraw_mint_tea_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/undraw/undraw_mint_tea.svg */ "./src/images/undraw/undraw_mint_tea.svg");
/* harmony import */ var _images_undraw_undraw_mint_tea_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_undraw_undraw_mint_tea_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _common_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Section */ "./src/components/common/Section.js");









function Features(data) {
  const features = [{
    title: "Saúde da mulher",
    text: "Uma gama de conhecimentos que vai te ajudar a levar uma vida mais leve e saudável, de acordo com as suas necessidades.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_undraw_undraw_super_woman_svg__WEBPACK_IMPORTED_MODULE_3___default()), null),
    action: "Melhorar minha saúde"
  }, {
    title: "Nutrição vegetariana",
    text: "Com carinho e dedicação especial àqueles que se importas com os animais. Quero te apresentar uma dieta que vai além dos grãos e que abre portas para um mundo imenso de possibilidades.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_undraw_undraw_fish_bowl_svg__WEBPACK_IMPORTED_MODULE_4___default()), null),
    action: "Diversificar minha alimentação"
  }, {
    title: "Doenças Crônicas Não Transmissíveis",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Possui uma dificuldade de alimenta\xE7\xE3o que limita suas op\xE7\xF5es? Pois saiba que voc\xEA n\xE3o precisa se privar, pra todo alimento existe uma ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "green-underline"
    }, "alternativa"), " e eu quero te ajudar a encontrar a que mais te agrade."),
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_undraw_undraw_a_better_world_svg__WEBPACK_IMPORTED_MODULE_5___default()), null),
    action: "Deixar de me limitar"
  }, {
    title: "Saúde intestinal",
    text: "Tenha um estino regulado e saudável melhorando a sua alimentação. Posso te ensinar a consumir alimentos que te ajudarão a ter um ritmo intestinal confortável e saudável, melhorando a sua rotina.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_images_undraw_undraw_mint_tea_svg__WEBPACK_IMPORTED_MODULE_6___default()), null),
    action: "Regular meu intestino"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "features my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "text-center",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Conhe\xE7a algumas das minhas ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "green-underline"
    }, "especializa\xE7\xF5es")),
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Algumas das minhas especializa\xE7\xF5es mais atuais.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Para conhecer minha forma\xE7\xE3o melhor ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__.Link, {
      to: "/sobre-mim"
    }, "acesse a p\xE1gina \"sobre mim\""))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-5"
  }), features.map((feature, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.Row, {
    key: index,
    className: `py-5 ${index % 2 && "flex-row-reverse"}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-lg-6 col-md-12 d-flex flex-column justify-content-center px-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, feature.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, feature.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.CallToAction, {
    text: feature.action
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-lg-6 col-md-12 px-5 d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-75"
  }, feature.image))))));
}

/***/ }),

/***/ "./src/components/home/Flowery.js":
/*!****************************************!*\
  !*** ./src/components/home/Flowery.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Flowery)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_4273996657_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/4273996657.json */ "./public/page-data/sq/d/4273996657.json");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flowery_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flowery.css */ "./src/components/home/Flowery.css");
/* harmony import */ var _Flowery_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Flowery_css__WEBPACK_IMPORTED_MODULE_2__);




function Flowery() {
  const query = _public_page_data_sq_d_4273996657_json__WEBPACK_IMPORTED_MODULE_0__.data;
  console.log(query);
  const floweryImage = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(query.image.edges[0].node.childImageSharp.gatsbyImageData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage, {
    className: "flowery_image",
    image: floweryImage
  });
}

/***/ }),

/***/ "./src/components/home/GoogleEvaluations.js":
/*!**************************************************!*\
  !*** ./src/components/home/GoogleEvaluations.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoogleEvaluations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function GoogleEvaluations() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "googleEvalueations p-5 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "https://apps.elfsight.com/p/platform.js",
    defer: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "elfsight-app-c6e9d81b-43a3-4913-bc90-815285eadf31"
  }));
}

/***/ }),

/***/ "./src/components/home/Portfolio.js":
/*!******************************************!*\
  !*** ./src/components/home/Portfolio.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Portfolio)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _Portfolio_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portfolio.css */ "./src/components/home/Portfolio.css");
/* harmony import */ var _Portfolio_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Portfolio_css__WEBPACK_IMPORTED_MODULE_2__);



function Portfolio() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "portfolio my-5 p-5 mx-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center white py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, null, "Voc\xEA tamb\xE9m pode conhecer mais sobre meu trabalho no meu meu", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "green-underline"
  }, "portfolio profissional")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.CallToAction, {
    href: "/documents/portfolio-thais-basso-2023.pdf",
    text: "Clique aqui e conhe\xE7a meu portf\xF3lio",
    target: "_blank",
    buttonClassName: "w-50"
  }))));
}

/***/ }),

/***/ "./src/components/home/SocialProof.js":
/*!********************************************!*\
  !*** ./src/components/home/SocialProof.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialProof)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2307700096_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/2307700096.json */ "./public/page-data/sq/d/2307700096.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _images_undraw_undraw_reviews_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/undraw/undraw_reviews.svg */ "./src/images/undraw/undraw_reviews.svg");
/* harmony import */ var _images_undraw_undraw_reviews_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_undraw_undraw_reviews_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _SocialProof_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialProof.css */ "./src/components/home/SocialProof.css");
/* harmony import */ var _SocialProof_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SocialProof_css__WEBPACK_IMPORTED_MODULE_4__);






function SocialProof() {
  const SocialProofPhotos = _public_page_data_sq_d_2307700096_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const images = SocialProofPhotos.images.edges.map(image => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.GatsbyImage, {
    style: {
      width: "64px",
      margin: "0 auto"
    },
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.getImage)(image.node.childImageSharp.gatsbyImageData)
  }));
  const opinions = [[{
    name: "Andressa Morari Canal",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "Aprendi a fazer", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "green-underline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "trocas inteligentes")), " ", "de alimentos que muitas vezes escolhia por costume [...] Com um plano alimentar adaptado para as minhas necessidades, consegui entender que", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "green-underline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "comer bem n\xE3o \xE9 dif\xEDcil")), ", apenas precisa de dedica\xE7\xE3o e organiza\xE7\xE3o!"),
    link: "https://g.co/kgs/gpcbHb",
    image: images[0]
  }, {
    name: "Taís Macena de Oliveira",
    text: "Me fez ver a comida de outra forma. Me fez perceber qual é o impacto da alimentação de uma forma completa. Diferente de outras experiências que tive, que só mostravam déficit calórico e nada mais. Consegui entender a importância de cada grupo alimentar. [...]",
    link: "https://g.co/kgs/PkKpVj",
    image: ""
  }, {
    name: "Vitória Tesser Henkes",
    text: "Atendimento profissional, cuidadoso e humano! A Thaís mantém excelentes acompanhamentos com os pacientes e tem visões amplas sobre saúde e alimentação, proporcionando muita qualidade de vida :)",
    link: "https://g.co/kgs/AFdNLb",
    image: images[2]
  }], [{
    name: "Lisiane Delai",
    text: "Meu acompanhamento com a Thaís foi excelente. Procurei a nutri com o objetivo de melhorar minha alimentação e a da minha família, sem buscar a perda de peso. Consegui alcançar meu objetivo ainda nos primeiros meses de acompanhamento. Comer de forma saudável e nutritiva me deixou mais disposta, mais feliz e confiante. Meus filhos, especialmente a mais nova, tinham grande dificuldade de aceitar novos alimentos. Com as orientações da Thaís, consegui melhorar significativamente essa situação. O que mais me deixa satisfeita é saber que nada é restringido. Eu escolho o que quero comer. Isso é o máximo! A perda de peso aconteceu sem que eu percebesse. Essa liberdade é importante e necessária para que o processo se torne um hábito, como hoje é para mim. Super satisfeita com o trabalho da Thaís! Uma excelente profissional!",
    link: "https://g.co/kgs/9zVbu4",
    image: ""
  }, {
    name: "Priscila Merzoni",
    text: "Amei o atendimento da Thaís, super indico, e já estou conseguindo atingir meus objetivos em apenas um mês de acompanhamento! Ela sabe ouvir e entender nossas dificuldades e conseguiu fazer um plano alimentar que eu também conseguisse seguir sem restrições! Nunca havia conseguido seguir uma dieta por mais de 15 dias.. já estamos a um mês e sigo no caminho! Meu objetivo era melhorar alguns exames e com alimentação correta alguns valores já diminuiriam a metade! É lógico que juntamente com tudo isso vem a perda de peso que não era a minha maior necessidade e já perdi muito mais que imaginava perder em um mês! Alimentação saudável e exercício físico é a chave para uma vida equilibrada e com saúde!",
    link: "https://g.co/kgs/RQHyF6",
    image: ""
  }]];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "social-proof my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    className: "text-center"
  }, "Veja o que meus pacientes est\xE3o dizendo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_2__.Row, {
    className: "p-3"
  }, opinions.map(group => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-lg-6 col-md-12 d-flex flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "d-flex align-items-center flex-column"
  }, group.map((opinion, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: opinion.link,
    key: index,
    target: "_blank",
    alt: "Visualizar avaliza\xE7\xE3o no Google"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "opinion my-3 text-center"
  }, opinion.image || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    class: "fas fa-user-circle fa-4x"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "mb-3 mt-2"
  }, opinion.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "m-0 opinion-content"
  }, "\"", opinion.text, "\""))))))))));
}

/***/ }),

/***/ "./src/components/home/SpecialFeatures.js":
/*!************************************************!*\
  !*** ./src/components/home/SpecialFeatures.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpecialFeatures)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_interface_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/interface/UI */ "./src/components/common/interface/UI.js");
/* harmony import */ var _SpecialFeatures_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecialFeatures.css */ "./src/components/home/SpecialFeatures.css");
/* harmony import */ var _SpecialFeatures_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpecialFeatures_css__WEBPACK_IMPORTED_MODULE_2__);



function SpecialFeatures() {
  const specialFeatures = [{
    icon: "fas fa-diagnoses",
    title: "No seu tempo e do seu jeito",
    description: "Mudando seus hábitos e entendendo porque você age de determinadas maneiras, criando estratégias reais e eficazes para melhorar a sua saúde e qualidade de vida"
  }, {
    icon: "fas fa-cookie-bite",
    title: "Sem dietas exageradas",
    description: "Você merece aprender a comer de forma saudável sem depender de dietas malucas e com restrições desnecessárias!"
  }, {
    icon: "fas fa-chart-pie",
    title: "Com cardápios ilustrados",
    description: "Ilustrados e personalizados para a sua alimentação, facilitando a compreensão de uma rotina alimentar variada e completa."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "special-features my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
    className: "text-center"
  }, "E como vamos fazer tudo isso?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_interface_UI__WEBPACK_IMPORTED_MODULE_1__.Row, {
    className: "p-3"
  }, specialFeatures.map((feature, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "col-lg-4 col-md-12 px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "special-feature-box d-flex justify-content-center align-items-center w-100 p-3 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: `${feature.icon} fa-4x`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, feature.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, feature.description))))));
}

/***/ }),

/***/ "./src/components/home/Treatment.js":
/*!******************************************!*\
  !*** ./src/components/home/Treatment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Treatment)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_26914289_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/26914289.json */ "./public/page-data/sq/d/26914289.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _common_interface_UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/interface/UI.js */ "./src/components/common/interface/UI.js");
/* harmony import */ var _common_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Section.js */ "./src/components/common/Section.js");
/* harmony import */ var _Treatment_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Treatment.css */ "./src/components/home/Treatment.css");
/* harmony import */ var _Treatment_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Treatment_css__WEBPACK_IMPORTED_MODULE_4__);






function Treatment() {
  const constructImages = listName => {
    return queryData[listName].edges.map((edge, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.GatsbyImage, {
      alt: "Prato ilustrativo",
      image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.getImage)(edge.node.childImageSharp.gatsbyImageData),
      className: index < 2 && "left"
    }));
  };
  const queryData = _public_page_data_sq_d_26914289_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const sections = [{
    title: "Para quem é o acompanhamento nutricional?",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "\xC9 indicado para todas as pessoas que buscam mudar sua rela\xE7\xE3o com a comida e aprender a se alimentar de forma saud\xE1vel e sem restri\xE7\xF5es alimentares, para atingir seus objetivos espec\xEDficos priorizando sempre sua sa\xFAde, com um plano de tratamento totalmente personalizado.", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "\xC9 indicado para quem quer aprender a se alimentar de forma equilibrada e com um plano alimentar sustent\xE1vel a longo prazo, al\xE9m de auxiliar no controle e tratamento de patologias, \xE9 um investimento na sua sa\xFAde e tamb\xE9m no manejo do seu peso e melhora na composi\xE7\xE3o corporal.")),
    images: constructImages("plates")
  }, {
    title: "O que vou ganhar com o tratamento nutricional?",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Com a abordagem comportamental voc\xEA descobrir\xE1 que \xE9 poss\xEDvel comer de tudo e ter uma vida saud\xE1vel, sem dietas malucas e sem os ciclos de restri\xE7\xE3o e compuls\xE3o."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Voc\xEA ir\xE1 aprender o que precisa comer para alcan\xE7ar seus objetivos, seja para ter mais sa\xFAde, tratar doen\xE7as cr\xF4nicas como hipertens\xE3o e diabetes ou para emagrecer e sentir-se bem com o seu corpo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Voc\xEA estar\xE1 investindo no seu eu do futuro, prevenindo doen\xE7as e sentindo-se mais disposto e produtivo no seu dia a dia.")),
    images: constructImages("foods")
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "treatment"
  }, sections.map((section, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI_js__WEBPACK_IMPORTED_MODULE_2__.Container, {
    className: "p-5",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI_js__WEBPACK_IMPORTED_MODULE_2__.Row, {
    className: index % 2 && "flex-row-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "acompanhamentoImagens col-lg-6 col-md-12 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_interface_UI_js__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-6"
  }, section.images[0], section.images[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "box"
  }), section.images[2], section.images[3]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "acompanhamentoText col-lg-6 col-md-12 d-flex justify-content-center flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_Section_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: section.title,
    content: section.content
  }))))));
}

/***/ }),

/***/ "./src/components/home/Wave.js":
/*!*************************************!*\
  !*** ./src/components/home/Wave.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wave)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Wave(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    id: "wave",
    className: props.className,
    style: {
      transform: `rotate(${props.rotate})`,
      transition: '0.3s',
      position: 'relative',
      zIndex: -10,
      ...props.style
    },
    viewBox: "0 0 1440 240",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "sw-gradient-0",
    x1: "0",
    x2: "0",
    y1: "1",
    y2: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "rgba(222, 208, 231, 1)",
    offset: "0%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "rgba(222, 208, 231, 1)",
    offset: "100%"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    style: {
      transform: 'translate(0, 0px)',
      opacity: 1
    },
    fill: "url(#sw-gradient-0)",
    d: props.d
  }));
}

/***/ }),

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/Layout */ "./src/components/common/Layout.js");
/* harmony import */ var _components_common_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/Seo */ "./src/components/common/Seo.js");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Header */ "./src/components/common/Header.js");
/* harmony import */ var _components_home_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/AboutMe */ "./src/components/home/AboutMe.js");
/* harmony import */ var _components_home_GoogleEvaluations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/GoogleEvaluations */ "./src/components/home/GoogleEvaluations.js");
/* harmony import */ var _components_home_Treatment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Treatment */ "./src/components/home/Treatment.js");
/* harmony import */ var _components_home_Features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/Features */ "./src/components/home/Features.js");
/* harmony import */ var _components_home_SpecialFeatures__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/SpecialFeatures */ "./src/components/home/SpecialFeatures.js");
/* harmony import */ var _components_home_SocialProof__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/SocialProof */ "./src/components/home/SocialProof.js");
/* harmony import */ var _images_undraw_undraw_woman_white_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/undraw/undraw_woman_white.svg */ "./src/images/undraw/undraw_woman_white.svg");
/* harmony import */ var _images_undraw_undraw_woman_white_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_undraw_undraw_woman_white_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_common_ActionBanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/common/ActionBanner */ "./src/components/common/ActionBanner.js");
/* harmony import */ var _components_home_Flowery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/Flowery */ "./src/components/home/Flowery.js");
/* harmony import */ var _components_home_Portfolio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home/Portfolio */ "./src/components/home/Portfolio.js");














function Home({
  data
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Tha\xEDs Basso",
    subtitle: "Nutricionista funcional e comportamental"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_home_Flowery__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_home_AboutMe__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_home_Treatment__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_home_Portfolio__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_home_Features__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_home_SpecialFeatures__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_home_SocialProof__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_ActionBanner__WEBPACK_IMPORTED_MODULE_11__["default"], {
    text: "Relaxe e venha comigo desvendar uma forma mais saud\xE1vel de se alimentar",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_images_undraw_undraw_woman_white_svg__WEBPACK_IMPORTED_MODULE_10___default()), null)
  }));
}
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Seo__WEBPACK_IMPORTED_MODULE_2__["default"], null);

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/node-object-hash/dist/hasher.js":
/*!******************************************************!*\
  !*** ./node_modules/node-object-hash/dist/hasher.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var objectSorter_1 = __importDefault(__webpack_require__(/*! ./objectSorter */ "./node_modules/node-object-hash/dist/objectSorter.js"));
var crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Default hash algorithm
 */
var DEFAULT_ALG = 'sha256';
/**
 * Default hash string enoding
 */
var DEFAULT_ENC = 'hex';
/**
 * Hasher constructor
 * @param options hasher options
 * @return hasher instance
 */
function hasher(options) {
    if (options === void 0) { options = {}; }
    var sortObject = (0, objectSorter_1.default)(options);
    /**
     * Object hash function
     * @param obj object to hash
     * @param opts hasher options
     * @returns hash string
     */
    function hashObject(obj, opts) {
        if (opts === void 0) { opts = {}; }
        var alg = opts.alg || options.alg || DEFAULT_ALG;
        var enc = opts.enc || options.enc || DEFAULT_ENC;
        var sorted = sortObject(obj);
        return crypto_1.default.createHash(alg).update(sorted).digest(enc);
    }
    return {
        hash: hashObject,
        sort: sortObject,
        sortObject: sortObject,
    };
}
module.exports = hasher;
//# sourceMappingURL=hasher.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/objectSorter.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/objectSorter.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
var str = __importStar(__webpack_require__(/*! ./stringifiers */ "./node_modules/node-object-hash/dist/stringifiers.js"));
/**
 * Object sorter consturctor
 * @param options object transformation options
 * @return function that transforms object to strings
 */
function objectSorter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign({ sort: true, coerce: true, trim: false }, options), sort = _a.sort, coerce = _a.coerce, trim = _a.trim;
    var stringifiers = {
        unknown: function _unknown(obj) {
            var _a, _b;
            // `unknonw` - is a typo, saved for backward compatibility
            var constructorName = (_b = (_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'unknonw';
            var objectName = typeof obj.toString === 'function' ? obj.toString() : 'unknown';
            return "<:" + constructorName + ">:" + objectName;
        },
    };
    var sortOptions = {
        array: typeof sort === 'boolean' ? sort : sort.array,
        typedArray: typeof sort === 'boolean' ? false : sort.typedArray,
        object: typeof sort === 'boolean' ? sort : sort.object,
        set: typeof sort === 'boolean' ? sort : sort.set,
        map: typeof sort === 'boolean' ? sort : sort.map,
    };
    var coerceOptions = {
        boolean: typeof coerce === 'boolean' ? coerce : coerce.boolean,
        number: typeof coerce === 'boolean' ? coerce : coerce.number,
        bigint: typeof coerce === 'boolean' ? coerce : coerce.bigint,
        string: typeof coerce === 'boolean' ? coerce : coerce.string,
        undefined: typeof coerce === 'boolean' ? coerce : coerce.undefined,
        null: typeof coerce === 'boolean' ? coerce : coerce.null,
        symbol: typeof coerce === 'boolean' ? coerce : coerce.symbol,
        function: typeof coerce === 'boolean' ? coerce : coerce.function,
        date: typeof coerce === 'boolean' ? coerce : coerce.date,
        set: typeof coerce === 'boolean' ? coerce : coerce.set,
    };
    var trimOptions = {
        string: typeof trim === 'boolean' ? trim : trim.string,
        function: typeof trim === 'boolean' ? trim : trim.function,
    };
    stringifiers.hashable = str._hashable.bind(stringifiers);
    if (trimOptions.string) {
        stringifiers.string = coerceOptions.string
            ? str._stringTrimCoerce.bind(stringifiers)
            : str._stringTrim.bind(stringifiers);
    }
    else {
        stringifiers.string = coerceOptions.string
            ? str._stringCoerce.bind(stringifiers)
            : str._string.bind(stringifiers);
    }
    stringifiers.number = coerceOptions.number
        ? str._numberCoerce.bind(stringifiers)
        : str._number.bind(stringifiers);
    stringifiers.bigint = coerceOptions.bigint
        ? str._bigIntCoerce.bind(stringifiers)
        : str._bigInt.bind(stringifiers);
    stringifiers.boolean = coerceOptions.boolean
        ? str._booleanCoerce.bind(stringifiers)
        : str._boolean.bind(stringifiers);
    stringifiers.symbol = coerceOptions.symbol
        ? str._symbolCoerce.bind(stringifiers)
        : str._symbol.bind(stringifiers);
    stringifiers.undefined = coerceOptions.undefined
        ? str._undefinedCoerce.bind(stringifiers)
        : str._undefined.bind(stringifiers);
    stringifiers.null = coerceOptions.null
        ? str._nullCoerce.bind(stringifiers)
        : str._null.bind(stringifiers);
    if (trimOptions.function) {
        stringifiers.function = coerceOptions.function
            ? str._functionTrimCoerce.bind(stringifiers)
            : str._functionTrim.bind(stringifiers);
    }
    else {
        stringifiers.function = coerceOptions.function
            ? str._functionCoerce.bind(stringifiers)
            : str._function.bind(stringifiers);
    }
    stringifiers.date = coerceOptions.date
        ? str._dateCoerce.bind(stringifiers)
        : str._date.bind(stringifiers);
    stringifiers.array = sortOptions.array
        ? str._arraySort.bind(stringifiers)
        : str._array.bind(stringifiers);
    stringifiers.typedarray = sortOptions.typedArray
        ? str._typedArraySort.bind(stringifiers)
        : str._typedArray.bind(stringifiers);
    if (sortOptions.set) {
        stringifiers.set = coerceOptions.set
            ? str._setSortCoerce.bind(stringifiers)
            : str._setSort.bind(stringifiers);
    }
    else {
        stringifiers.set = coerceOptions.set
            ? str._setCoerce.bind(stringifiers)
            : str._set.bind(stringifiers);
    }
    stringifiers.object = sortOptions.object
        ? str._objectSort.bind(stringifiers)
        : str._object.bind(stringifiers);
    stringifiers.map = sortOptions.map
        ? str._mapSort.bind(stringifiers)
        : str._map.bind(stringifiers);
    /**
     * Serializes object to string
     * @param obj object
     */
    function objectToString(obj) {
        return stringifiers[(0, typeGuess_1.guessType)(obj)](obj);
    }
    return objectToString;
}
module.exports = objectSorter;
//# sourceMappingURL=objectSorter.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/stringifiers.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/stringifiers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @private
 * @inner
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._mapSort = exports._map = exports._objectSort = exports._object = exports._setCoerce = exports._set = exports._setSort = exports._setSortCoerce = exports._typedArray = exports._typedArraySort = exports._array = exports._arraySort = exports._date = exports._dateCoerce = exports._functionTrim = exports._functionTrimCoerce = exports._function = exports._functionCoerce = exports._null = exports._nullCoerce = exports._undefined = exports._undefinedCoerce = exports._symbol = exports._symbolCoerce = exports._boolean = exports._booleanCoerce = exports._bigInt = exports._bigIntCoerce = exports._number = exports._numberCoerce = exports._stringTrim = exports._stringTrimCoerce = exports._string = exports._stringCoerce = exports._hashable = exports.PREFIX = void 0;
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
/**
 * Prefixes that used when type coercion is disabled
 */
exports.PREFIX = {
    string: '<:s>',
    number: '<:n>',
    bigint: '<:bi>',
    boolean: '<:b>',
    symbol: '<:smbl>',
    undefined: '<:undf>',
    null: '<:null>',
    function: '<:func>',
    array: '',
    date: '<:date>',
    set: '<:set>',
    map: '<:map>',
};
/**
 * Converts Hashable to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _hashable(obj) {
    return obj.toHashableString();
}
exports._hashable = _hashable;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringCoerce(obj) {
    return obj;
}
exports._stringCoerce = _stringCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _string(obj) {
    return exports.PREFIX.string + ':' + obj;
}
exports._string = _string;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringTrimCoerce(obj) {
    return obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrimCoerce = _stringTrimCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringTrim(obj) {
    return exports.PREFIX.string + ':' + obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrim = _stringTrim;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _numberCoerce(obj) {
    return obj.toString();
}
exports._numberCoerce = _numberCoerce;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _number(obj) {
    return exports.PREFIX.number + ":" + obj;
}
exports._number = _number;
/**
 * Converts BigInt to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _bigIntCoerce(obj) {
    return obj.toString();
}
exports._bigIntCoerce = _bigIntCoerce;
/**
 * Converts BigInt to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _bigInt(obj) {
    return exports.PREFIX.bigint + ":" + obj.toString();
}
exports._bigInt = _bigInt;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _booleanCoerce(obj) {
    return obj ? '1' : '0';
}
exports._booleanCoerce = _booleanCoerce;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _boolean(obj) {
    return exports.PREFIX.boolean + ':' + obj.toString();
}
exports._boolean = _boolean;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _symbolCoerce() {
    return exports.PREFIX.symbol;
}
exports._symbolCoerce = _symbolCoerce;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _symbol(obj) {
    return exports.PREFIX.symbol + ':' + obj.toString();
}
exports._symbol = _symbol;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _undefinedCoerce() {
    return '';
}
exports._undefinedCoerce = _undefinedCoerce;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _undefined() {
    return exports.PREFIX.undefined;
}
exports._undefined = _undefined;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _nullCoerce() {
    return '';
}
exports._nullCoerce = _nullCoerce;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _null() {
    return exports.PREFIX.null;
}
exports._null = _null;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionCoerce(obj) {
    return obj.name + '=>' + obj.toString();
}
exports._functionCoerce = _functionCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _function(obj) {
    return exports.PREFIX.function + ':' + obj.name + '=>' + obj.toString();
}
exports._function = _function;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionTrimCoerce(obj) {
    return (obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrimCoerce = _functionTrimCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionTrim(obj) {
    return (exports.PREFIX.function +
        ':' +
        obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrim = _functionTrim;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _dateCoerce(obj) {
    return obj.toISOString();
}
exports._dateCoerce = _dateCoerce;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _date(obj) {
    return exports.PREFIX.date + ':' + obj.toISOString();
}
exports._date = _date;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _arraySort(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[(0, typeGuess_1.guessType)(item)](item);
        })
            .sort()
            .toString() +
        ']');
}
exports._arraySort = _arraySort;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _array(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[(0, typeGuess_1.guessType)(item)](item);
        })
            .toString() +
        ']');
}
exports._array = _array;
/**
 * Converts TypedArray to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _typedArraySort(obj) {
    var stringifiers = this;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var values = Array.prototype.slice.call(obj);
    return ('[' +
        values
            .map(function (num) {
            return stringifiers[(0, typeGuess_1.guessType)(num)](num);
        })
            .sort()
            .toString() +
        ']');
}
exports._typedArraySort = _typedArraySort;
/**
 * Converts TypedArray to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _typedArray(obj) {
    var stringifiers = this;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var values = Array.prototype.slice.call(obj);
    return ('[' +
        values
            .map(function (num) {
            return stringifiers[(0, typeGuess_1.guessType)(num)](num);
        })
            .toString() +
        ']');
}
exports._typedArray = _typedArray;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setSortCoerce(obj) {
    return _arraySort.call(this, Array.from(obj));
}
exports._setSortCoerce = _setSortCoerce;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setSort(obj) {
    return exports.PREFIX.set + ":" + _arraySort.call(this, Array.from(obj));
}
exports._setSort = _setSort;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _set(obj) {
    return exports.PREFIX.set + ":" + _array.call(this, Array.from(obj));
}
exports._set = _set;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setCoerce(obj) {
    return _array.call(this, Array.from(obj));
}
exports._setCoerce = _setCoerce;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _object(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj);
    var objArray = [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var val = obj[key];
        var valT = (0, typeGuess_1.guessType)(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._object = _object;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _objectSort(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj).sort();
    var objArray = [];
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var val = obj[key];
        var valT = (0, typeGuess_1.guessType)(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._objectSort = _objectSort;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _map(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var _a = item, key = _a[0], value = _a[1];
        mapped.push([
            stringifiers[(0, typeGuess_1.guessType)(key)](key),
            stringifiers[(0, typeGuess_1.guessType)(value)](value),
        ]);
    }
    return '[' + mapped.join(';') + ']';
}
exports._map = _map;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _mapSort(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        var _a = item, key = _a[0], value = _a[1];
        mapped.push([
            stringifiers[(0, typeGuess_1.guessType)(key)](key),
            stringifiers[(0, typeGuess_1.guessType)(value)](value),
        ]);
    }
    return '[' + mapped.sort().join(';') + ']';
}
exports._mapSort = _mapSort;
//# sourceMappingURL=stringifiers.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/typeGuess.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-object-hash/dist/typeGuess.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.guessType = exports.guessObjectType = exports.TYPE_MAP = void 0;
/**
 * Type mapping rules.
 */
exports.TYPE_MAP = {
    Array: 'array',
    Int8Array: 'typedarray',
    Uint8Array: 'typedarray',
    Uint8ClampedArray: 'typedarray',
    Int16Array: 'typedarray',
    Uint16Array: 'typedarray',
    Int32Array: 'typedarray',
    Uint32Array: 'typedarray',
    Float32Array: 'typedarray',
    Float64Array: 'typedarray',
    BigUint64Array: 'typedarray',
    BigInt64Array: 'typedarray',
    Buffer: 'typedarray',
    Map: 'map',
    Set: 'set',
    Date: 'date',
    String: 'string',
    Number: 'number',
    BigInt: 'bigint',
    Boolean: 'boolean',
    Object: 'object',
};
/**
 * Guess object type
 * @param obj analyzed object
 * @return object type
 */
function guessObjectType(obj) {
    var _a, _b;
    if (obj === null) {
        return 'null';
    }
    if (instanceOfHashable(obj)) {
        return 'hashable';
    }
    var type = (_b = (_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'unknown';
    return exports.TYPE_MAP[type] || 'unknown';
}
exports.guessObjectType = guessObjectType;
/**
 * Guess variable type
 * @param obj analyzed variable
 * @return variable type
 */
function guessType(obj) {
    var type = typeof obj;
    return type !== 'object' ? type : guessObjectType(obj);
}
exports.guessType = guessType;
/**
 * Identify if object is instance of Hashable interface
 * @param object analyzed variable
 * @return true if object has toHashableString property and this property is function
 * otherwise return false
 */
function instanceOfHashable(object) {
    return typeof object.toHashableString === 'function';
}
//# sourceMappingURL=typeGuess.js.map

/***/ }),

/***/ "./src/components/Footer.css":
/*!***********************************!*\
  !*** ./src/components/Footer.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Navbar.css":
/*!***********************************!*\
  !*** ./src/components/Navbar.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/common/ActionBanner.css":
/*!************************************************!*\
  !*** ./src/components/common/ActionBanner.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/common/Header.css":
/*!******************************************!*\
  !*** ./src/components/common/Header.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/home/AboutMe.css":
/*!*****************************************!*\
  !*** ./src/components/home/AboutMe.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/home/Features.css":
/*!******************************************!*\
  !*** ./src/components/home/Features.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/home/Flowery.css":
/*!*****************************************!*\
  !*** ./src/components/home/Flowery.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/home/Portfolio.css":
/*!*******************************************!*\
  !*** ./src/components/home/Portfolio.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/home/SocialProof.css":
/*!*********************************************!*\
  !*** ./src/components/home/SocialProof.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/home/SpecialFeatures.css":
/*!*************************************************!*\
  !*** ./src/components/home/SpecialFeatures.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/home/Treatment.css":
/*!*******************************************!*\
  !*** ./src/components/home/Treatment.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/fontawesome-free-6.2.1-web/css/all.min.css":
/*!********************************************************!*\
  !*** ./src/fontawesome-free-6.2.1-web/css/all.min.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

function createStringDecoder() {
  return new TextDecoder();
}
var decoderOptions = {
  stream: true
};
function readPartialStringChunk(decoder, buffer) {
  return decoder.decode(buffer, decoderOptions);
}
function readFinalStringChunk(decoder, buffer) {
  return decoder.decode(buffer);
}

function parseModel(response, json) {
  return JSON.parse(json, response._fromJSON);
}

// eslint-disable-next-line no-unused-vars
function resolveModuleReference(bundlerConfig, moduleData) {
  if (bundlerConfig) {
    return bundlerConfig[moduleData.id][moduleData.name];
  }

  return moduleData;
} // The chunk cache contains all the chunks we've preloaded so far.
// If they're still pending they're a thenable. This map also exists
// in Webpack but unfortunately it's not exposed so we have to
// replicate it in user space. null means that it has already loaded.

var chunkCache = new Map(); // Start preloading the modules since we might need them soon.
// This function doesn't suspend.

function preloadModule(moduleData) {
  var chunks = moduleData.chunks;

  for (var i = 0; i < chunks.length; i++) {
    var chunkId = chunks[i];
    var entry = chunkCache.get(chunkId);

    if (entry === undefined) {
      var thenable = __webpack_require__.e(chunkId);

      var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
      var reject = chunkCache.set.bind(chunkCache, chunkId);
      thenable.then(resolve, reject);
      chunkCache.set(chunkId, thenable);
    }
  }
} // Actually require the module or suspend if it's not yet ready.
// Increase priority if necessary.

function requireModule(moduleData) {
  var chunks = moduleData.chunks;

  for (var i = 0; i < chunks.length; i++) {
    var chunkId = chunks[i];
    var entry = chunkCache.get(chunkId);

    if (entry !== null) {
      // We assume that preloadModule has been called before.
      // So we don't expect to see entry being undefined here, that's an error.
      // Let's throw either an error or the Promise.
      throw entry;
    }
  }

  var moduleExports = __webpack_require__(moduleData.id);

  if (moduleData.name === '*') {
    // This is a placeholder value that represents that the caller imported this
    // as a CommonJS module as is.
    return moduleExports;
  }

  if (moduleData.name === '') {
    // This is a placeholder value that represents that the caller accessed the
    // default property of this if it was an ESM interop module.
    return moduleExports.__esModule ? moduleExports.default : moduleExports;
  }

  return moduleExports[moduleData.name];
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ContextRegistry = ReactSharedInternals.ContextRegistry;
function getOrCreateServerContext(globalName) {
  if (!ContextRegistry[globalName]) {
    ContextRegistry[globalName] = React.createServerContext(globalName, REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED);
  }

  return ContextRegistry[globalName];
}

var PENDING = 0;
var RESOLVED_MODEL = 1;
var RESOLVED_MODULE = 2;
var INITIALIZED = 3;
var ERRORED = 4;

function Chunk(status, value, response) {
  this._status = status;
  this._value = value;
  this._response = response;
}

Chunk.prototype.then = function (resolve) {
  var chunk = this;

  if (chunk._status === PENDING) {
    if (chunk._value === null) {
      chunk._value = [];
    }

    chunk._value.push(resolve);
  } else {
    resolve();
  }
};

function readChunk(chunk) {
  switch (chunk._status) {
    case INITIALIZED:
      return chunk._value;

    case RESOLVED_MODEL:
      return initializeModelChunk(chunk);

    case RESOLVED_MODULE:
      return initializeModuleChunk(chunk);

    case PENDING:
      // eslint-disable-next-line no-throw-literal
      throw chunk;

    default:
      throw chunk._value;
  }
}

function readRoot() {
  var response = this;
  var chunk = getChunk(response, 0);
  return readChunk(chunk);
}

function createPendingChunk(response) {
  return new Chunk(PENDING, null, response);
}

function createErrorChunk(response, error) {
  return new Chunk(ERRORED, error, response);
}

function createInitializedChunk(response, value) {
  return new Chunk(INITIALIZED, value, response);
}

function wakeChunk(listeners) {
  if (listeners !== null) {
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  }
}

function triggerErrorOnChunk(chunk, error) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var erroredChunk = chunk;
  erroredChunk._status = ERRORED;
  erroredChunk._value = error;
  wakeChunk(listeners);
}

function createResolvedModelChunk(response, value) {
  return new Chunk(RESOLVED_MODEL, value, response);
}

function createResolvedModuleChunk(response, value) {
  return new Chunk(RESOLVED_MODULE, value, response);
}

function resolveModelChunk(chunk, value) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var resolvedChunk = chunk;
  resolvedChunk._status = RESOLVED_MODEL;
  resolvedChunk._value = value;
  wakeChunk(listeners);
}

function resolveModuleChunk(chunk, value) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var resolvedChunk = chunk;
  resolvedChunk._status = RESOLVED_MODULE;
  resolvedChunk._value = value;
  wakeChunk(listeners);
}

function initializeModelChunk(chunk) {
  var value = parseModel(chunk._response, chunk._value);
  var initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}

function initializeModuleChunk(chunk) {
  var value = requireModule(chunk._value);
  var initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
} // Report that any missing chunks in the model is now going to throw this
// error upon read. Also notify any pending promises.


function reportGlobalError(response, error) {
  response._chunks.forEach(function (chunk) {
    // If this chunk was already resolved or errored, it won't
    // trigger an error but if it wasn't then we need to
    // because we won't be getting any new data to resolve it.
    triggerErrorOnChunk(chunk, error);
  });
}

function createElement(type, key, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: null,
    props: props,
    // Record the component responsible for creating this element.
    _owner: null
  };

  {
    // We don't really need to add any of these but keeping them for good measure.
    // Unfortunately, _store is enumerable in jest matchers so for equality to
    // work, I need to keep it or make _store non-enumerable in the other file.
    element._store = {};
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: true // This element has already been validated on the server.

    });
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: null
    });
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: null
    });
  }

  return element;
}

function createLazyChunkWrapper(chunk) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: chunk,
    _init: readChunk
  };
  return lazyType;
}

function getChunk(response, id) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunk = createPendingChunk(response);
    chunks.set(id, chunk);
  }

  return chunk;
}

function parseModelString(response, parentObject, value) {
  switch (value[0]) {
    case '$':
      {
        if (value === '$') {
          return REACT_ELEMENT_TYPE;
        } else if (value[1] === '$' || value[1] === '@') {
          // This was an escaped string value.
          return value.substring(1);
        } else {
          var id = parseInt(value.substring(1), 16);
          var chunk = getChunk(response, id);
          return readChunk(chunk);
        }
      }

    case '@':
      {
        var _id = parseInt(value.substring(1), 16);

        var _chunk = getChunk(response, _id); // We create a React.lazy wrapper around any lazy values.
        // When passed into React, we'll know how to suspend on this.


        return createLazyChunkWrapper(_chunk);
      }
  }

  return value;
}
function parseModelTuple(response, value) {
  var tuple = value;

  if (tuple[0] === REACT_ELEMENT_TYPE) {
    // TODO: Consider having React just directly accept these arrays as elements.
    // Or even change the ReactElement type to be an array.
    return createElement(tuple[1], tuple[2], tuple[3]);
  }

  return value;
}
function createResponse(bundlerConfig) {
  var chunks = new Map();
  var response = {
    _bundlerConfig: bundlerConfig,
    _chunks: chunks,
    readRoot: readRoot
  };
  return response;
}
function resolveModel(response, id, model) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunks.set(id, createResolvedModelChunk(response, model));
  } else {
    resolveModelChunk(chunk, model);
  }
}
function resolveProvider(response, id, contextName) {
  var chunks = response._chunks;
  chunks.set(id, createInitializedChunk(response, getOrCreateServerContext(contextName).Provider));
}
function resolveModule(response, id, model) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);
  var moduleMetaData = parseModel(response, model);
  var moduleReference = resolveModuleReference(response._bundlerConfig, moduleMetaData); // TODO: Add an option to encode modules that are lazy loaded.
  // For now we preload all modules as early as possible since it's likely
  // that we'll need them.

  preloadModule(moduleReference);

  if (!chunk) {
    chunks.set(id, createResolvedModuleChunk(response, moduleReference));
  } else {
    resolveModuleChunk(chunk, moduleReference);
  }
}
function resolveSymbol(response, id, name) {
  var chunks = response._chunks; // We assume that we'll always emit the symbol before anything references it
  // to save a few bytes.

  chunks.set(id, createInitializedChunk(response, Symbol.for(name)));
}
function resolveError(response, id, message, stack) {
  // eslint-disable-next-line react-internal/prod-error-codes
  var error = new Error(message);
  error.stack = stack;
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunks.set(id, createErrorChunk(response, error));
  } else {
    triggerErrorOnChunk(chunk, error);
  }
}
function close(response) {
  // In case there are any remaining unresolved chunks, they won't
  // be resolved now. So we need to issue an error to those.
  // Ideally we should be able to early bail out if we kept a
  // ref count of pending chunks.
  reportGlobalError(response, new Error('Connection closed.'));
}

function processFullRow(response, row) {
  if (row === '') {
    return;
  }

  var tag = row[0]; // When tags that are not text are added, check them here before
  // parsing the row as text.
  // switch (tag) {
  // }

  var colon = row.indexOf(':', 1);
  var id = parseInt(row.substring(1, colon), 16);
  var text = row.substring(colon + 1);

  switch (tag) {
    case 'J':
      {
        resolveModel(response, id, text);
        return;
      }

    case 'M':
      {
        resolveModule(response, id, text);
        return;
      }

    case 'P':
      {
        resolveProvider(response, id, text);
        return;
      }

    case 'S':
      {
        resolveSymbol(response, id, JSON.parse(text));
        return;
      }

    case 'E':
      {
        var errorInfo = JSON.parse(text);
        resolveError(response, id, errorInfo.message, errorInfo.stack);
        return;
      }

    default:
      {
        throw new Error("Error parsing the data. It's probably an error code or network corruption.");
      }
  }
}

function processStringChunk(response, chunk, offset) {
  var linebreak = chunk.indexOf('\n', offset);

  while (linebreak > -1) {
    var fullrow = response._partialRow + chunk.substring(offset, linebreak);
    processFullRow(response, fullrow);
    response._partialRow = '';
    offset = linebreak + 1;
    linebreak = chunk.indexOf('\n', offset);
  }

  response._partialRow += chunk.substring(offset);
}
function processBinaryChunk(response, chunk) {

  var stringDecoder = response._stringDecoder;
  var linebreak = chunk.indexOf(10); // newline

  while (linebreak > -1) {
    var fullrow = response._partialRow + readFinalStringChunk(stringDecoder, chunk.subarray(0, linebreak));
    processFullRow(response, fullrow);
    response._partialRow = '';
    chunk = chunk.subarray(linebreak + 1);
    linebreak = chunk.indexOf(10); // newline
  }

  response._partialRow += readPartialStringChunk(stringDecoder, chunk);
}

function createFromJSONCallback(response) {
  return function (key, value) {
    if (typeof value === 'string') {
      // We can't use .bind here because we need the "this" value.
      return parseModelString(response, this, value);
    }

    if (typeof value === 'object' && value !== null) {
      return parseModelTuple(response, value);
    }

    return value;
  };
}

function createResponse$1(bundlerConfig) {
  // NOTE: CHECK THE COMPILER OUTPUT EACH TIME YOU CHANGE THIS.
  // It should be inlined to one object literal but minor changes can break it.
  var stringDecoder =  createStringDecoder() ;
  var response = createResponse(bundlerConfig);
  response._partialRow = '';

  {
    response._stringDecoder = stringDecoder;
  } // Don't inline this call because it causes closure to outline the call above.


  response._fromJSON = createFromJSONCallback(response);
  return response;
}

function startReadingFromStream(response, stream) {
  var reader = stream.getReader();

  function progress(_ref) {
    var done = _ref.done,
        value = _ref.value;

    if (done) {
      close(response);
      return;
    }

    var buffer = value;
    processBinaryChunk(response, buffer);
    return reader.read().then(progress, error);
  }

  function error(e) {
    reportGlobalError(response, e);
  }

  reader.read().then(progress, error);
}

function createFromReadableStream(stream, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  startReadingFromStream(response, stream);
  return response;
}

function createFromFetch(promiseForResponse, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  promiseForResponse.then(function (r) {
    startReadingFromStream(response, r.body);
  }, function (e) {
    reportGlobalError(response, e);
  });
  return response;
}

function createFromXHR(request, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  var processedLength = 0;

  function progress(e) {
    var chunk = request.responseText;
    processStringChunk(response, chunk, processedLength);
    processedLength = chunk.length;
  }

  function load(e) {
    progress();
    close(response);
  }

  function error(e) {
    reportGlobalError(response, new TypeError('Network error'));
  }

  request.addEventListener('progress', progress);
  request.addEventListener('load', load);
  request.addEventListener('error', error);
  request.addEventListener('abort', error);
  request.addEventListener('timeout', error);
  return response;
}

exports.createFromFetch = createFromFetch;
exports.createFromReadableStream = createFromReadableStream;
exports.createFromXHR = createFromXHR;
  })();
}


/***/ }),

/***/ "./node_modules/react-server-dom-webpack/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-server-dom-webpack/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-server-dom-webpack.development.js */ "./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js");
}


/***/ }),

/***/ "./src/images/undraw/undraw_a_better_world.svg":
/*!*****************************************************!*\
  !*** ./src/images/undraw/undraw_a_better_world.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function UndrawABetterWorld (props) {
    return React.createElement("svg",props,[React.createElement("rect",{"y":"728.49218","width":"840.5","height":"2","fill":"#3f3d56","key":0}),React.createElement("path",{"d":"M977.78688,333.21663v193.18h-502.38v-193.18a249.99082,249.99082,0,0,1,50.23-150.72,251.155,251.155,0,0,1,186.46-100.06q7.185-.42,14.5-.41c2.77,0,5.54.04,8.28.14a250.35447,250.35447,0,0,1,169.33,73.43c1.36,1.36,2.69,2.73,4.03,4.11a253.05329,253.05329,0,0,1,19.32,22.79A250.05555,250.05555,0,0,1,977.78688,333.21663Z","transform":"translate(-179.75 -82.02353)","fill":"#e6e6e6","key":1}),React.createElement("path",{"d":"M734.88051,82.16857v444.226H712.09225V82.43783q7.19385-.41945,14.50162-.4143C729.36989,82.02353,732.13554,82.065,734.88051,82.16857Z","transform":"translate(-179.75 -82.02353)","fill":"#fff","key":2}),React.createElement("path",{"d":"M927.55526,182.499H525.63249a251.94447,251.94447,0,0,1,19.31825-22.78826H908.237A251.94447,251.94447,0,0,1,927.55526,182.499Z","transform":"translate(-179.75 -82.02353)","fill":"#fff","key":3}),React.createElement("rect",{"x":"581.74684","y":"165.73314","width":"178.04999","height":"278.64001","fill":"#fff","key":4}),React.createElement("rect",{"x":"612.79288","y":"216.65602","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":5}),React.createElement("rect",{"x":"656.18358","y":"216.65602","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":6}),React.createElement("rect",{"x":"699.57428","y":"216.65602","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":7}),React.createElement("rect",{"x":"613.54099","y":"278.00149","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":8}),React.createElement("rect",{"x":"656.93169","y":"278.00149","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":9}),React.createElement("rect",{"x":"700.3224","y":"278.00149","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":10}),React.createElement("rect",{"x":"614.28911","y":"339.34697","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":11}),React.createElement("rect",{"x":"657.67981","y":"339.34697","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":12}),React.createElement("rect",{"x":"701.07051","y":"339.34697","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":13}),React.createElement("rect",{"x":"615.03722","y":"400.69244","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":14}),React.createElement("rect",{"x":"658.42793","y":"400.69244","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":15}),React.createElement("rect",{"x":"701.81863","y":"400.69244","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":16}),React.createElement("rect",{"x":"615.03722","y":"400.69244","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":17}),React.createElement("rect",{"x":"658.42793","y":"400.69244","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":18}),React.createElement("rect",{"x":"701.81863","y":"400.69244","width":"26.93216","height":"26.93216","fill":"#e6e6e6","key":19}),React.createElement("circle",{"cx":"355.37197","cy":"345.96177","r":"37.11924","fill":"#493165","key":20}),React.createElement("polygon",{"points":"357.287 444.373 353.667 444.373 354.797 383.073 355.477 345.963 355.577 345.963 356.227 383.073 356.587 404.183 356.627 406.233 357.287 444.373","fill":"#fff","key":21}),React.createElement("rect",{"x":"537.56939","y":"482.6444","width":"1.83557","height":"6.93436","transform":"translate(538.01779 -298.85673) rotate(62.23413)","fill":"#fff","key":22}),React.createElement("circle",{"cx":"464.50174","cy":"291.16612","r":"56.44638","fill":"#493165","key":23}),React.createElement("polygon",{"points":"467.487 444.373 461.837 444.373 463.007 380.763 463.617 347.603 464.657 291.163 464.817 291.163 465.797 347.593 466.357 379.703 466.417 382.823 467.487 444.373","fill":"#fff","key":24}),React.createElement("rect",{"x":"647.97348","y":"456.30851","width":"2.7913","height":"10.54493","transform":"translate(575.5382 -410.07438) rotate(62.23413)","fill":"#fff","key":25}),React.createElement("path",{"d":"M527.82874,319.29022l9.53553-7.6266c-7.40773-.81727-10.45142,3.22275-11.69709,6.42045-5.78722-2.40307-12.0873.74628-12.0873.74628l19.07884,6.92629A14.43742,14.43742,0,0,0,527.82874,319.29022Z","transform":"translate(-179.75 -82.02353)","fill":"#493165","key":26}),React.createElement("path",{"d":"M628.30425,257.14042l9.53553-7.6266c-7.40773-.81727-10.45142,3.22275-11.69709,6.42045-5.78722-2.40307-12.08729.74628-12.08729.74628l19.07883,6.92629A14.43742,14.43742,0,0,0,628.30425,257.14042Z","transform":"translate(-179.75 -82.02353)","fill":"#493165","key":27}),React.createElement("path",{"d":"M589.97854,316.18273l9.53553-7.6266c-7.40773-.81727-10.45142,3.22275-11.69709,6.42045-5.78722-2.40307-12.08729.74628-12.08729.74628l19.07883,6.92629A14.43742,14.43742,0,0,0,589.97854,316.18273Z","transform":"translate(-179.75 -82.02353)","fill":"#493165","key":28}),React.createElement("path",{"d":"M325.54487,370.51438s22.96236,4.917,26.39049,2.63155a6.45007,6.45007,0,0,1,6.85627,0c19.4261-7.42764-.17771-30.0795-.74906-39.22121s-11.99849-21.71155-11.99849-21.71155Z","transform":"translate(-179.75 -82.02353)","fill":"#2f2e41","key":29}),React.createElement("path",{"d":"M304.72571,349.15094c0,12.52844-25.05692,40.091-25.05692,40.091l47.60809,73.91784s18.79271-75.1707,7.51708-78.92922,1.25284-21.29835,1.25284-21.29835Z","transform":"translate(-179.75 -82.02353)","fill":"#a0616a","key":30}),React.createElement("path",{"d":"M249.60059,473.18258l33.82679,21.29835-8.76992,13.7813s-7.51708-6.26419-7.51708-7.51707-50.1138-25.05694-55.12517-28.81546,11.27558-20.0455,11.27558-20.0455Z","transform":"translate(-179.75 -82.02353)","fill":"#a0616a","key":31}),React.createElement("path",{"d":"M384.46168,471.51334s-33.38067,21.71476-34.6335,24.22045,8.76992,31.3211,15.17718,30.21965-.14305-21.44973-.14305-21.44973,30.06825-23.804,40.091-32.574-2.50571-28.81547-2.50571-28.81547Z","transform":"translate(-179.75 -82.02353)","fill":"#a0616a","key":32}),React.createElement("polygon",{"points":"217.932 674.792 225.493 702.224 243.47 701.475 234.218 667.276 217.932 674.792","fill":"#a0616a","key":33}),React.createElement("polygon",{"points":"106.183 669.291 112.447 696.853 124.976 696.853 124.976 669.291 106.183 669.291","fill":"#a0616a","key":34}),React.createElement("circle",{"cx":"147.5269","cy":"260.86319","r":"27.56258","fill":"#a0616a","key":35}),React.createElement("path",{"d":"M287.10313,380.47292s-3.6757,5.01053-17.457,8.76907-52.61951,40.091-53.87234,66.40078,32.574,18.79266,32.574,18.79266,31.32113,5.01138,31.32113,6.26423-1.25283,8.76992-1.25283,8.76992c-20.04555,25.05688-22.55121,67.65361-22.55121,67.65361s-12.52846,186.67387-10.02275,201.708,62.64225,6.26421,62.64225,6.26421L310.99,597.21421S336.0468,747.55555,341.05822,760.084s76.42355-3.75854,76.42355-3.75854-58.88372-249.31612-58.88372-265.60308,18.79267-20.0455,18.79267-20.0455,20.04545,3.75852,21.29833-3.75854,8.76992-18.79267,8.76992-18.79267-15.03412-32.574-28.81542-50.1138S334.794,384.23059,334.794,384.23059l-16.287,56.378Z","transform":"translate(-179.75 -82.02353)","fill":"#2f2e41","key":36}),React.createElement("path",{"d":"M402.43429,775.84068s-2.58448,27.87708-2.50566,31.83816c.07036,3.535,25.07018,4.50756,27.57586.74906s11.27561,0,11.27561,2.50571,25.05687.7358,25.05687.7358c32.574-15.03417-4.66249-19.182-4.66249-19.182s-22.1867-10.47353-32.20945-14.23208-5.99245-1.49811-5.99245-1.49811C418.46687,785.52717,402.43429,775.84068,402.43429,775.84068Z","transform":"translate(-179.75 -82.02353)","fill":"#2f2e41","key":37}),React.createElement("path",{"d":"M282.1745,802.68072c-1.25283,1.25284,2.50567,17.53979,20.0455,15.03413s12.52846-21.29833,12.52846-23.804-2.50571-21.29838-3.75854-26.30976-22.55121,3.75855-22.55121,3.75855S283.42734,801.42789,282.1745,802.68072Z","transform":"translate(-179.75 -82.02353)","fill":"#2f2e41","key":38}),React.createElement("path",{"d":"M349.44282,317.35541A93.12641,93.12641,0,0,0,346.586,329.3539c-.57135,4.57085-11.42714,5.71356-11.42714,5.71356,1.1427,0,1.1427-6.85628,1.1427-6.85628,0,3.9995-6.28492,7.999-6.28492,7.999A67.492,67.492,0,0,0,314.59005,348.78c-7.999,8.57031,2.28544,9.713,2.28544,9.713-.77087,13.77352-28.96826,19.35638-28.96826,19.35638-32.56729-11.42711-7.75734-50.52627-7.75734-50.52627,24.56833-45.70851,44.43895-25.68008,44.43895-25.68008C346.01468,298.5006,349.44282,317.35541,349.44282,317.35541Z","transform":"translate(-179.75 -82.02353)","fill":"#2f2e41","key":39})]);
}

UndrawABetterWorld.defaultProps = {"data-name":"Layer 1","width":"840.5","height":"735.95293","viewBox":"0 0 840.5 735.95293"};

module.exports = UndrawABetterWorld;

UndrawABetterWorld.default = UndrawABetterWorld;


/***/ }),

/***/ "./src/images/undraw/undraw_fish_bowl.svg":
/*!************************************************!*\
  !*** ./src/images/undraw/undraw_fish_bowl.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function UndrawFishBowl (props) {
    return React.createElement("svg",props,[React.createElement("defs",{"key":0},React.createElement("linearGradient",{"id":"b70114c3-aa16-4a03-9ef7-67b468bf27e0-169","x1":"243.12","y1":"779.72","x2":"243.12","y2":"272.62","gradientUnits":"userSpaceOnUse"},[React.createElement("stop",{"offset":"0","stopColor":"gray","stopOpacity":"0.25","key":0}),React.createElement("stop",{"offset":"0.54","stopColor":"gray","stopOpacity":"0.12","key":1}),React.createElement("stop",{"offset":"1","stopColor":"gray","stopOpacity":"0.1","key":2})])),React.createElement("title",{"key":1},"fish bowl"),React.createElement("path",{"d":"M1124,779.51c0,5.48-47.94,10.49-127.21,14.34-14.41.69-29.86,1.35-46.24,2q-21.24.81-44.51,1.51-22.56.67-46.83,1.25c-51.12,1.22-107.62,2.1-167.65,2.54q-21.85.17-44.29.25-23.37.09-47.27.08c-289.4,0-524-9.82-524-21.94s234.6-22,524-22c124.59,0,239,1.82,328.94,4.86l9.83.33h.06C1052.11,766.79,1124,772.79,1124,779.51Z","transform":"translate(-76 -98.55)","fill":"#3f3d56","key":2}),React.createElement("path",{"d":"M1124,779.51c0,5.48-47.94,10.49-127.21,14.34-14.41.69-29.86,1.35-46.24,2q-21.24.81-44.51,1.51-22.56.67-46.83,1.25c-51.12,1.22-107.62,2.1-167.65,2.54q-21.85.17-44.29.25-23.37.09-47.27.08c-289.4,0-524-9.82-524-21.94s234.6-22,524-22c124.59,0,239,1.82,328.94,4.86l9.83.33h.06C1052.11,766.79,1124,772.79,1124,779.51Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":3}),React.createElement("path",{"d":"M1124,771.28c0,5.48-47.94,10.49-127.21,14.33-14.41.7-29.86,1.36-46.24,2q-21.24.81-44.51,1.51-22.56.67-46.83,1.25c-51.12,1.22-107.62,2.1-167.65,2.54q-21.85.15-44.29.25-23.37.08-47.27.08c-289.4,0-524-9.82-524-21.94s234.6-21.95,524-21.95c124.59,0,239,1.82,328.94,4.86l9.83.33h.06C1052.11,758.56,1124,764.56,1124,771.28Z","transform":"translate(-76 -98.55)","fill":"#3f3d56","key":4}),React.createElement("path",{"d":"M1124,771.27c0,5.48-47.94,10.49-127.21,14.35-14.41.69-29.86,1.35-46.24,2q-21.24.79-44.51,1.51-22.56.67-46.82,1.25c-51.13,1.22-107.63,2.1-167.66,2.54q-21.84.15-44.29.24-23.37.09-47.27.1c-289.4,0-524-9.83-524-22,0-10.45,174.59-19.2,408.37-21.4q20-.2,40.45-.32,36.82-.21,75.18-.22t75.18.22q20.49.13,40.44.32c79.45.74,152.08,2.25,213.31,4.32l9.83.33h.07C1052.11,758.56,1124,764.56,1124,771.27Z","transform":"translate(-76 -98.55)","fill":"#3f3d56","key":5}),React.createElement("path",{"d":"M854,361.77l-81.08,3.74,79.67-16.27a101.12,101.12,0,0,0-6-20.94,101.34,101.34,0,1,0-129.87-155l56.54,73L707.07,184a101.55,101.55,0,0,0-20.15,77.75l57.94,16-56-6.46a102.68,102.68,0,0,0,4.4,13.31A101.35,101.35,0,0,0,659,405.14,101.34,101.34,0,0,0,672.31,577.5a34.94,34.94,0,0,0-5.26,10.92,33.3,33.3,0,0,0-.39,17.48,34.63,34.63,0,0,0-9.28,32.55A34.63,34.63,0,0,0,648.1,671a34.61,34.61,0,0,0-9.28,32.55,33.39,33.39,0,0,0-8.89,15.07c-4.19,14.7,1.52,29.23,12.76,32.43s23.74-6.13,27.93-20.84a33.41,33.41,0,0,0,.4-17.48,34.69,34.69,0,0,0,9.28-32.55,34.7,34.7,0,0,0,9.28-32.56,34.67,34.67,0,0,0,9.28-32.55A33.28,33.28,0,0,0,707.74,600a34.65,34.65,0,0,0,1.3-11.88,101.34,101.34,0,0,0,103.1-139.32,101.39,101.39,0,0,0,41.81-87Z","transform":"translate(-76 -98.55)","fill":"#f2f2f2","key":6}),React.createElement("ellipse",{"cx":"524","cy":"672.26","rx":"122.29","ry":"12.93","opacity":"0.1","key":7}),React.createElement("circle",{"cx":"524","cy":"431.21","r":"243.4","fill":"#3f3d56","key":8}),React.createElement("path",{"d":"M802.25,529.75C802.25,641.45,711.69,732,600,732c-6.41,0-12.76-.29-19-.88-100.56-9.39-179.75-92.38-183.12-194.55q-.12-3.41-.12-6.82,0-7.66.57-15.2c7.77-104.59,95.1-187,201.68-187,92,0,169.64,61.42,194.17,145.48.43,1.51.86,3,1.27,4.55q2.25,8.5,3.8,17.29A204,204,0,0,1,802.25,529.75Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":9}),React.createElement("path",{"d":"M802.25,529.75C802.25,641.45,711.69,732,600,732c-109.41,0-198.54-86.9-202.13-195.43,23.06.66,46.55-.1,68.34-7.61,23.62-8.13,43.84-23.69,65.59-36,58.43-32.95,128.16-41.82,194.91-35.3,22.67,2.21,46.18,6.81,67.46,15.27a202.39,202.39,0,0,1,8.08,56.77Z","transform":"translate(-76 -98.55)","fill":"#A2B1DA","opacity":"0.4","key":10}),React.createElement("path",{"d":"M802.25,529.75C802.25,641.45,711.69,732,600,732c-6.41,0-12.76-.29-19-.88A202.26,202.26,0,0,1,468.42,556.56c23.06.66,46.55-.1,68.34-7.61,23.63-8.13,43.84-23.69,65.59-36,57.9-32.66,126.89-41.65,193.09-35.47q2.25,8.5,3.8,17.29A204,204,0,0,1,802.25,529.75Z","transform":"translate(-76 -98.55)","fill":"#A2B1DA","opacity":"0.4","key":11}),React.createElement("path",{"d":"M802.25,529.75C802.25,641.45,711.69,732,600,732S397.75,641.45,397.75,529.75q0-7.66.57-15.2A160.57,160.57,0,0,1,444.5,527.4c23.72,10.65,44.82,27,69.49,35.21,18,6,37.14,7.43,56.08,8,23.65.75,47.8.15,70.17-7.56,23.62-8.13,43.83-23.69,65.59-35.95,28.93-16.32,60.66-26.73,93.41-32.29A204,204,0,0,1,802.25,529.75Z","transform":"translate(-76 -98.55)","fill":"#A2B1DA","key":12}),React.createElement("path",{"d":"M1064,138.68l-18.25,11.57,11.08-20.15a18,18,0,0,0-11-3.94h-.3a21.58,21.58,0,0,1-3.78-.28l-6.19,3.92,2.65-4.82a22.06,22.06,0,0,1-10.82-8.21l-11.07,7,7-12.72c-6.48-7.77-15.2-12.53-24.81-12.53-11.51,0-21.76,6.84-28.38,17.51a21.22,21.22,0,0,1-18.76,10.12l-.62,0c-12.71,0-23,14.41-23,32.19s10.3,32.18,23,32.18a17.31,17.31,0,0,0,8-2c8.29-4.31,19.17-4.4,27.85-.55a29.08,29.08,0,0,0,23.68.06c8.62-3.78,19.37-3.7,27.61.53a17.23,17.23,0,0,0,7.93,2c12.71,0,23-14.41,23-32.18A40.86,40.86,0,0,0,1064,138.68Z","transform":"translate(-76 -98.55)","fill":"#f2f2f2","key":13}),React.createElement("path",{"d":"M1029.59,185.77a34,34,0,0,0-19.72,2.14,29,29,0,0,1-23.67,0c-8.69-3.85-19.57-3.77-27.86.54a17.2,17.2,0,0,1-8,2C939,190.41,929.65,179,927.69,164a21.58,21.58,0,0,0,5.64-6.08c6.62-10.67,16.88-17.51,28.39-17.51s21.64,6.76,28.26,17.31a21.79,21.79,0,0,0,18.76,10.31h.29C1018,168.05,1025.8,175.26,1029.59,185.77Z","transform":"translate(-76 -98.55)","opacity":"0.03","key":14}),React.createElement("path",{"d":"M269.07,125.62l-9.1,5.77,5.53-10a9,9,0,0,0-5.51-2h-.14a10.79,10.79,0,0,1-1.89-.14l-3.09,2,1.33-2.41a11,11,0,0,1-5.4-4.09l-5.52,3.5,3.49-6.35a16.19,16.19,0,0,0-12.37-6.25c-5.75,0-10.86,3.42-14.16,8.74a10.59,10.59,0,0,1-9.36,5h-.31c-6.34,0-11.48,7.18-11.48,16.05s5.14,16,11.48,16a8.62,8.62,0,0,0,4-1,16.56,16.56,0,0,1,13.89-.27,14.52,14.52,0,0,0,11.81,0,16.62,16.62,0,0,1,13.77.26,8.49,8.49,0,0,0,3.95,1c6.34,0,11.48-7.18,11.48-16A20.26,20.26,0,0,0,269.07,125.62Z","transform":"translate(-76 -98.55)","fill":"#f2f2f2","key":15}),React.createElement("path",{"d":"M251.92,149.11a16.87,16.87,0,0,0-9.83,1.07,14.52,14.52,0,0,1-11.81,0,16.58,16.58,0,0,0-13.9.27,8.55,8.55,0,0,1-4,1c-5.64,0-10.32-5.67-11.3-13.15a10.93,10.93,0,0,0,2.82-3c3.3-5.32,8.42-8.73,14.16-8.73s10.79,3.37,14.09,8.63a10.85,10.85,0,0,0,9.36,5.14h.15C246.15,140.27,250,143.87,251.92,149.11Z","transform":"translate(-76 -98.55)","opacity":"0.03","key":16}),React.createElement("path",{"d":"M363.34,236.06,378,245.33l-8.88-16.14a14.48,14.48,0,0,1,8.85-3.15h.23a16.2,16.2,0,0,0,3-.23l4.95,3.15L384,225.09a17.66,17.66,0,0,0,8.67-6.58l8.87,5.63L396,214c5.19-6.22,12.18-10,19.87-10,9.23,0,17.44,5.48,22.75,14a17,17,0,0,0,15,8.11h.5c10.18,0,18.43,11.54,18.43,25.78s-8.25,25.79-18.43,25.79a13.86,13.86,0,0,1-6.43-1.61,26.62,26.62,0,0,0-22.31-.44,23.23,23.23,0,0,1-19,.05,26.6,26.6,0,0,0-22.12.43,13.9,13.9,0,0,1-6.35,1.57c-10.19,0-18.44-11.55-18.44-25.79A32.75,32.75,0,0,1,363.34,236.06Z","transform":"translate(-76 -98.55)","fill":"#f2f2f2","key":17}),React.createElement("path",{"d":"M390.89,273.79a27.28,27.28,0,0,1,15.8,1.72,23.28,23.28,0,0,0,19,0,26.61,26.61,0,0,1,22.32.43,13.82,13.82,0,0,0,6.42,1.61c9.05,0,16.57-9.11,18.14-21.13A17.44,17.44,0,0,1,468,251.5c-5.31-8.54-13.52-14-22.75-14s-17.33,5.42-22.64,13.88a17.44,17.44,0,0,1-15,8.25h-.23C400.17,259.6,393.93,265.37,390.89,273.79Z","transform":"translate(-76 -98.55)","opacity":"0.03","key":18}),React.createElement("path",{"d":"M1025.86,758.07c4.86-9-.65-20-7-28s-14-16.35-13.88-26.56c.24-14.67,15.81-23.34,28.26-31.12A137.54,137.54,0,0,0,1058.62,652c3.06-3.12,6-6.46,7.8-10.44,2.57-5.73,2.5-12.26,2.34-18.55q-.81-31.39-3.11-62.74","transform":"translate(-76 -98.55)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","strokeWidth":"4","key":19}),React.createElement("path",{"d":"M1089.31,559.12a22.84,22.84,0,0,0-11.43-18.74l-5.12,10.13.15-12.27a22.88,22.88,0,1,0,16.4,20.88Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":20}),React.createElement("path",{"d":"M1048.5,714a22.87,22.87,0,1,1,1.11-18.43l-14.3,11.63,15.73-3.64A22.74,22.74,0,0,1,1048.5,714Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":21}),React.createElement("path",{"d":"M1037.2,669.57a22.88,22.88,0,0,1-7.26-44.89l-.12,9.43,5.18-10.26h.06a22.89,22.89,0,1,1,2.14,45.72Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":22}),React.createElement("path",{"d":"M1092.75,632.61a22.89,22.89,0,1,1,10.11-42.83l-4,11.08,8.32-8a22.75,22.75,0,0,1,7.39,15.79A22.34,22.34,0,0,1,1114,615,22.89,22.89,0,0,1,1092.75,632.61Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":23}),React.createElement("path",{"d":"M1086.23,565.22c-5.28.58-10.42,2.22-15.72,2.55s-11.12-.94-14.47-5.06c-1.81-2.22-2.71-5-4.24-7.45a16.27,16.27,0,0,0-5.76-5.42A22.89,22.89,0,1,0,1088.82,565C1088,565.07,1087.09,565.13,1086.23,565.22Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":24}),React.createElement("path",{"d":"M1092.75,632.61A22.91,22.91,0,0,1,1071,600a16.68,16.68,0,0,1,4.6,4.61c1.63,2.46,2.62,5.3,4.54,7.56,3.56,4.19,9.65,5.56,15.17,5.31s10.85-1.82,16.36-2.32c.76-.07,1.53-.12,2.3-.14A22.89,22.89,0,0,1,1092.75,632.61Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":25}),React.createElement("path",{"d":"M1037.2,669.57a22.88,22.88,0,0,1-22-32.22,18.64,18.64,0,0,1,4.84,4.65c1.77,2.51,2.88,5.4,5,7.72,3.86,4.3,10.35,5.81,16.2,5.67,5.67-.12,11.12-1.51,16.76-1.94A22.9,22.9,0,0,1,1037.2,669.57Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":26}),React.createElement("path",{"d":"M1048.5,714a22.89,22.89,0,0,1-41.72-18.67,23,23,0,0,1,5,4.47c2.18,2.66,3.61,5.66,6.13,8.13,4.68,4.6,12.23,6.49,19,6.67A99.3,99.3,0,0,0,1048.5,714Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":27}),React.createElement("path",{"d":"M991.36,747.73s18.06-.56,23.5-4.43,27.78-8.51,29.13-2.29,27.14,30.91,6.75,31.08-47.38-3.18-52.81-6.49S991.36,747.73,991.36,747.73Z","transform":"translate(-76 -98.55)","fill":"#656380","key":28}),React.createElement("path",{"d":"M1051.11,769.93c-20.39.16-47.38-3.18-52.81-6.49-4.14-2.52-5.79-11.56-6.34-15.73l-.6,0s1.14,14.56,6.57,17.87,32.42,6.65,52.81,6.49c5.89-.05,7.92-2.14,7.81-5.24C1057.73,768.72,1055.49,769.89,1051.11,769.93Z","transform":"translate(-76 -98.55)","opacity":"0.2","key":29}),React.createElement("path",{"d":"M922,754c-3.17-5.87.43-13.06,4.56-18.29s9.17-10.68,9.06-17.35c-.15-9.58-10.32-15.24-18.45-20.32a89.64,89.64,0,0,1-16.57-13.32,24.33,24.33,0,0,1-5.09-6.81c-1.68-3.75-1.63-8-1.52-12.11q.53-20.52,2-41","transform":"translate(-76 -98.55)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","strokeWidth":"4","key":30}),React.createElement("path",{"d":"M880.56,624A14.92,14.92,0,0,1,888,611.78l3.34,6.62-.1-8A14.95,14.95,0,1,1,880.56,624Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":31}),React.createElement("path",{"d":"M907.21,725.17A14.94,14.94,0,0,0,935.42,719a14.72,14.72,0,0,0-1-6.06,14.95,14.95,0,0,0-28,.16l9.34,7.6-10.27-2.38A14.65,14.65,0,0,0,907.21,725.17Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":32}),React.createElement("path",{"d":"M914.58,696.16a15,15,0,0,0,15.63-14.23,14.65,14.65,0,0,0-1.29-6.81,15,15,0,0,0-9.59-8.28l.07,6.16L916,666.3h0a15,15,0,0,0-15.62,14.23,14.63,14.63,0,0,0,.64,5.1A15,15,0,0,0,914.58,696.16Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":33}),React.createElement("path",{"d":"M878.31,672a15,15,0,0,0,15.63-14.23,15,15,0,0,0-22.24-13.74l2.64,7.24-5.43-5.22a14.95,14.95,0,0,0,9.4,25.95Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":34}),React.createElement("path",{"d":"M882.57,628c3.44.38,6.8,1.45,10.26,1.67s7.26-.62,9.45-3.31c1.18-1.45,1.77-3.28,2.77-4.86a10.75,10.75,0,0,1,3.76-3.55,15,15,0,0,1-14,21.7,15,15,0,0,1-13.92-11.78C881.44,627.91,882,628,882.57,628Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":35}),React.createElement("path",{"d":"M878.31,672a15,15,0,0,0,15.63-14.23,14.79,14.79,0,0,0-1.42-7.09,11,11,0,0,0-3,3c-1.07,1.6-1.71,3.46-3,4.94-2.33,2.73-6.31,3.63-9.91,3.46s-7.09-1.18-10.69-1.51c-.49-.05-1-.08-1.5-.09A14.94,14.94,0,0,0,878.31,672Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":36}),React.createElement("path",{"d":"M914.58,696.16a15,15,0,0,0,15.63-14.23,14.65,14.65,0,0,0-1.29-6.81,12,12,0,0,0-3.16,3c-1.16,1.64-1.88,3.52-3.24,5-2.52,2.81-6.76,3.8-10.58,3.71s-7.26-1-10.94-1.27A15,15,0,0,0,914.58,696.16Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":37}),React.createElement("path",{"d":"M907.21,725.17A14.94,14.94,0,0,0,935.42,719a14.72,14.72,0,0,0-1-6.06,14.92,14.92,0,0,0-3.28,2.93c-1.42,1.73-2.36,3.69-4,5.31-3.06,3-8,4.23-12.38,4.35A63.38,63.38,0,0,1,907.21,725.17Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":38}),React.createElement("path",{"d":"M944.53,747.21s-11.8-.37-15.35-2.9-18.15-5.55-19-1.49-17.72,20.19-4.41,20.29,30.94-2.07,34.49-4.23S944.53,747.21,944.53,747.21Z","transform":"translate(-76 -98.55)","fill":"#656380","key":39}),React.createElement("path",{"d":"M905.5,761.7c13.32.11,31-2.07,34.49-4.23,2.71-1.65,3.78-7.56,4.14-10.28l.4,0s-.75,9.51-4.3,11.67-21.17,4.34-34.49,4.23c-3.84,0-5.17-1.39-5.1-3.42C901.18,760.91,902.64,761.68,905.5,761.7Z","transform":"translate(-76 -98.55)","opacity":"0.2","key":40}),React.createElement("path",{"d":"M569,634.7c22.75-4.2,22.85-37.36,22.85-37.36-1,4.74-3.33,5.2-15.18,9s-19,16.05-19,16.05c-35.41-40.37-65.85,3.59-65.85,3.59a42,42,0,0,0,21.19,16.41c-1.4,3.42-2.88,8.19-1.14,9.94,2,2,7.47-4.15,10.41-7.84.88.1,1.76.19,2.64.25,1.69,3.39,5.88,12.3,5.87,17.59,0,0,9.66-.74,8.44-18.35A72.86,72.86,0,0,0,557,638.69s-1,27.47,7,28.91,15.84,11.18,15.84,11.18C591.72,655.61,569,634.7,569,634.7Z","transform":"translate(-76 -98.55)","fill":"#fe7d1e","opacity":"0.6","key":41}),React.createElement("path",{"d":"M710.58,582.71c22.68,4.54,35.07-26.22,35.07-26.22-2.65,4-5,3.59-17.43,2.69S704.63,567,704.63,567C686.72,516.42,642.14,546,642.14,546a42,42,0,0,0,13.6,23.1c-2.57,2.66-5.71,6.54-4.74,8.8,1.12,2.65,8.47-1.08,12.57-3.42.78.43,1.57.83,2.36,1.21.31,3.78.9,13.61-1.07,18.52,0,0,9.25,2.89,14.64-13.92a72.53,72.53,0,0,0,18.37,1.68s-11.14,25.13-4.2,29.46,10.56,16.25,10.56,16.25C723.88,610.53,710.58,582.71,710.58,582.71Z","transform":"translate(-76 -98.55)","fill":"#fe7d1e","opacity":"0.6","key":42}),React.createElement("path",{"d":"M359.09,373l.06-.09-.23-.15-.47-.33.09.08A1.94,1.94,0,0,0,356,373l-.28.41h0L342.12,393l-2.38,3.42c-7.16-2.15-18.78,6.93-24.67,12.13l-1,.92c-.47-1.05-.74-1.72-.74-1.72-.29,3.2-11.57,8-14.21,9.73a9.57,9.57,0,0,1-3.93,1.33c.38-12.16-9-24.95-9-24.95L263.2,364.58a25.79,25.79,0,0,1,2.35-15.5c.18-.38.38-.76.59-1.13l1,0h.13a32.1,32.1,0,0,0,5.59-.5A30.6,30.6,0,0,0,298,319.24c2.31-.6,4.28-2.74,3.95-5.21a4,4,0,0,0,0-1.42h0a5.16,5.16,0,0,0-.27-.87h0c-.66-1.66-2.05-3-3.07-4.52a14,14,0,0,1-2.18-7.44,29.65,29.65,0,0,1,1.07-6.82,11.47,11.47,0,0,0,.65-4.12l0-.28a6.81,6.81,0,0,0-.05-1.1,5.06,5.06,0,0,0-.18-.77h0a7.37,7.37,0,0,0-3.08-3.75c-3.63-2.37-8.29-2.4-12.37-3.89-5.92-2.17-11.28-7.53-17.46-6.23-3.38.7-6,3.29-8.9,5.12a21.48,21.48,0,0,1-10.74,3.26c-3.2.1-6.43-.51-9.58,0a10.72,10.72,0,0,0-1.66.45,24.77,24.77,0,0,0-8.32-1.31,14,14,0,0,0-7.85,2.16c-4.25,3-5.39,8.74-5.32,13.9v.12c0,.34,0,.67,0,1,0,2.47.24,5,.28,7.45a22.3,22.3,0,0,1-.93,6.8c-2,6.11-7.57,10.78-8.7,17.1a15.25,15.25,0,0,0-.19,3.3c-.08,3.58,1.07,7.17,2.13,10.64,2.19,7.17,3.93,14.79,3.94,22.23a36.54,36.54,0,0,1-2.71,13.47,20.38,20.38,0,0,1-1.92,3.56c-.25.36-.52.7-.79,1l-.12.13c-.24.28-.5.54-.76.8l-.22.2a8,8,0,0,1-.79.62l-.26.2a7.94,7.94,0,0,1-1.14.64l1.95-.11a8.6,8.6,0,0,1-1.95,1.24l10.32-.6c0,.11,0,.22.05.34a4.87,4.87,0,0,1-.15.76,6,6,0,0,1-.25.71.3.3,0,0,0,0,.1,6.16,6.16,0,0,1-.8,1.29l-.08.1a6.76,6.76,0,0,1-.52.55h0a4.94,4.94,0,0,1-.56.44l-.13.09a5.89,5.89,0,0,1-.64.37h0a6.42,6.42,0,0,1-.66.24l-.17.05a4.61,4.61,0,0,1-.72.15l1-.12c.65-.08,1.3-.16,1.94-.27l.19,0a5.17,5.17,0,0,1-3.1,1.54,28.08,28.08,0,0,0,6.53-1.28c1.35,9,4.33,36.53,2.69,41.61C213.5,438.34,218,478,218,478s.61,3,1.68,7.58c-2.76,6.51-5.91,13.73-7.49,16.62-3.18,5.81-1.61,35.43,9.32,48.6,0,0,4.53,6.38,3.34,8.71s.2,6.39.2,6.39l1.73,38.33A99.93,99.93,0,0,1,226,616c-4.66,5.78-11.86,14.21-15.25,15.59-5.23,2.12-44.29,49.56-44.29,49.56s.31.57.92,1.5l-1.1,1.27-7.5,8.69-.59.69c-1.4-.27-10.77-2-18.2-2.51l-.73,0v-.14a28.25,28.25,0,0,0-7.84.21l-.06,0,0,0a2.59,2.59,0,0,0-1.29.68c-2.53,3.1-3.9,51.89-3.9,51.89s2.7,24.37,11.1,25.78a4.68,4.68,0,0,0,1.35.25h.09a2.46,2.46,0,0,0,.47,0c6-.44,8.79-3.91,10-6.27a10.41,10.41,0,0,0,.84-2.25s-1-4.36,1.66-10.36,7.52-16.46,7.52-16.46,8.92-9.39,7.33-13.95l.86-1.24c3.36-4.78,10.13-14.22,15.61-20.53l1.08-1.21a27.35,27.35,0,0,0,6.22,1.81s8.4-3.29,11.53-10.65c1.33-3.13,6.54-8.67,12.09-14-.12.92-.18,1.43-.18,1.43l-.19,46.65a33.22,33.22,0,0,0,5.74,3.17c0,.37,0,.76,0,1.15a149.35,149.35,0,0,1-1.2,19.9c-.05.35-.11.69-.17,1-.69-.49-1.29-.66-1.67-.27-1.72,1.74-2.79,12.87-2.89,18,0,.1,0,.2,0,.29h0c-.12,2.13-.69,4.65-.69,6.91-.05,3.28,1,6,6.27,6.26,6.58.28,34.88.71,50,.93a33.54,33.54,0,0,0,22.37-7.93c2.78-2.38,4.91-5,5-7.52.14-1.91-.9-3.75-3.79-5.34,0,.06,0,.12-.06.19-.38-.21-.79-.41-1.24-.61l-14.55-2.28-24.8-12.68s-.15-7.66-3.13-6.39a8.37,8.37,0,0,0-2.51,1c-.15-.28-.3-.58-.45-.89a28.81,28.81,0,0,1-3.06-12.92c0-.41,0-.82.06-1.24a21.7,21.7,0,0,0,2.05-2.11s-.19-17.42,1.76-20.72,8-36.59,8-36.59.2-6.19,4.1-9.87,2.54-14.33,2.54-14.33,5.47-2.9,7.23-12.39,7.42-30.2,7.42-30.2,11.72-30.59,10.94-49.95,1.17-29.43,1.17-29.43l2.44-45,0-.7c1,.74,1.62,1.34,1.62,1.34s0-.18,0-.49l.56.49s1.24-20.41.82-28.51c6.84-2.32,17.24-6.14,17.83-8.08.88-2.9,12.59-12.05,12.59-12.05a2.33,2.33,0,0,1-.71-.27c.37-.17.75-.37,1.16-.59,7.68-4.11,21.95-16.14,19.55-23.49l15.6-22.45A3.81,3.81,0,0,0,359.09,373ZM232,351.13a11.16,11.16,0,0,0-1.14.09A87.1,87.1,0,0,0,228,339.39c-1.81-6.08-3.75-12.2-4.05-18.53,0-.27,0-.55,0-.83a23.39,23.39,0,0,1,.65-4.94c.38.69.79,1.37,1.22,2,2.49,3.77,5.41,7.35,6.95,11.6a33.08,33.08,0,0,0,2.17,5.85c1.07,1.79,3,3.28,5.12,3a4,4,0,0,0,1.93-.89A81.53,81.53,0,0,1,232,351.13Z","transform":"translate(-76 -98.55)","fill":"url(#b70114c3-aa16-4a03-9ef7-67b468bf27e0-169)","key":43}),React.createElement("path",{"d":"M321.52,428.56a10,10,0,0,1-3.69,1.4c-4.81.14-8.77-12.88-8.77-12.88s1.37-1.38,3.55-3.32c6.44-5.74,20-16.32,26.3-10.4C346,410,329.79,424.08,321.52,428.56Z","transform":"translate(-76 -98.55)","fill":"#ecb4b6","key":44}),React.createElement("path",{"d":"M248.46,738.89,230.73,758s-16.41.18-13.2-8.87a33.21,33.21,0,0,0,1.36-6,146.54,146.54,0,0,0,1.16-19.38c0-4.25-.07-7.23-.07-7.23s25.84-11.32,23.2.47a22.06,22.06,0,0,0-.53,4.49,28.2,28.2,0,0,0,2.95,12.59A28.57,28.57,0,0,0,248.46,738.89Z","transform":"translate(-76 -98.55)","fill":"#ecb4b6","key":45}),React.createElement("path",{"d":"M248.46,738.89,230.73,758s-16.41.18-13.2-8.87a33.21,33.21,0,0,0,1.36-6c2.34,1.81,5.71,7.15,5.71,7.15s11.32,3.3,14.43-6.6c1.74-5.54,4.49-8.28,6.57-9.61A28.57,28.57,0,0,0,248.46,738.89Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":46}),React.createElement("path",{"d":"M289.61,767.73A32.35,32.35,0,0,1,268,775.45c-14.62-.22-42-.64-48.31-.91-8.48-.36-5.67-7.61-5.39-12.61,0-.17,0-.33,0-.5.09-5,1.13-15.84,2.79-17.54s7.49,7.54,7.49,7.54,11.32,3.31,14.43-6.6S248.46,734,248.46,734c2.88-1.25,3,6.22,3,6.22l24,12.35,14.06,2.22c.45.21.87.42,1.25.62C297.07,758.92,294.26,763.7,289.61,767.73Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":47}),React.createElement("circle",{"cx":"169.35","cy":"649.12","r":"1.04","fill":"#fff","opacity":"0.25","key":48}),React.createElement("circle",{"cx":"179.06","cy":"653.93","r":"1.04","fill":"#fff","opacity":"0.25","key":49}),React.createElement("circle",{"cx":"184.06","cy":"656.17","r":"1.04","fill":"#fff","opacity":"0.25","key":50}),React.createElement("circle",{"cx":"194.44","cy":"660.15","r":"1.04","fill":"#fff","opacity":"0.25","key":51}),React.createElement("circle",{"cx":"189.16","cy":"658.45","r":"1.04","fill":"#fff","opacity":"0.25","key":52}),React.createElement("path",{"d":"M289.61,767.73A32.35,32.35,0,0,1,268,775.45c-14.62-.22-42-.64-48.31-.91-8.48-.36-5.67-7.61-5.39-12.61l53.31,3.29s21.83-3.31,23.13-9.82C297.07,758.92,294.26,763.7,289.61,767.73Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":53}),React.createElement("path",{"d":"M289.61,767.51A32.25,32.25,0,0,1,268,775.23c-14.62-.21-42-.63-48.3-.9-8.49-.37-5.68-7.62-5.4-12.62L267.61,765s21.83-3.31,23.13-9.81C297.07,758.71,294.26,763.49,289.61,767.51Z","transform":"translate(-76 -98.55)","fill":"#fff","opacity":"0.25","key":54}),React.createElement("path",{"d":"M190.36,690.79a36,36,0,0,0-5.35,5.36c-5.29,6.15-11.83,15.35-15.08,20l-2,2.94L160.84,718s-7.64-11.69-7.54-12,6-12.83,6-12.83l2.3-2.69,7.24-8.47,3.28-3.84S196.78,686.17,190.36,690.79Z","transform":"translate(-76 -98.55)","fill":"#ecb4b6","key":55}),React.createElement("path",{"d":"M169.93,716.15l-2,2.94L160.84,718s-7.64-11.69-7.54-12,6-12.83,6-12.83l2.3-2.69.75.13h1.8c-6.33,6.6.47,21.13.47,21.13S167.59,712.09,169.93,716.15Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":56}),React.createElement("path",{"d":"M162,731s-4.72,10.19-7.27,16-1.6,10.09-1.6,10.09a9.29,9.29,0,0,1-.81,2.19c-1.16,2.31-3.84,5.68-9.66,6.11a3.38,3.38,0,0,1-.45,0c-8.6-.23-11.33-25.19-11.33-25.19s1.31-47.54,3.76-50.56a2.45,2.45,0,0,1,1.25-.66,26.11,26.11,0,0,1,7.58-.2c7.78.56,17.77,2.47,17.77,2.47h1.8c-6.33,6.6.46,21.12.46,21.12s3,.29,5.38,4.53S162,731,162,731Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":57}),React.createElement("circle",{"cx":"75.64","cy":"618.27","r":"1.04","fill":"#fff","opacity":"0.25","key":58}),React.createElement("circle",{"cx":"75.13","cy":"626.51","r":"1.04","fill":"#fff","opacity":"0.25","key":59}),React.createElement("path",{"d":"M151.64,759.09a11.12,11.12,0,0,1-9.66,6.12h-.45C132.93,765,130.19,740,130.19,740s1.32-47.53,3.77-50.55a2.37,2.37,0,0,1,1.25-.67,26.79,26.79,0,0,1,7.57-.2c-.14,8.54-.55,35.55.05,38.23S148.22,751.91,151.64,759.09Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":60}),React.createElement("path",{"d":"M152.26,759.27a11.11,11.11,0,0,1-9.66,6.11,3.42,3.42,0,0,1-.45,0c-8.61-.23-11.34-25.19-11.34-25.19s1.32-47.54,3.77-50.56a2.37,2.37,0,0,1,1.24-.66,26.14,26.14,0,0,1,7.58-.2c-.14,8.54-.55,35.55,0,38.23S148.83,752.08,152.26,759.27Z","transform":"translate(-76 -98.55)","fill":"#fff","opacity":"0.25","key":61}),React.createElement("path",{"d":"M141.53,765.21C132.93,765,130.19,740,130.19,740s1.32-47.53,3.77-50.55a2.37,2.37,0,0,1,1.25-.67c1.8,2.69,3.38,8.63,2,21.7-2.69,24.76.55,26.31.55,26.31S141.73,757.82,141.53,765.21Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":62}),React.createElement("path",{"d":"M141.46,765.21C132.86,765,130.12,740,130.12,740s1.32-47.53,3.77-50.55a2.37,2.37,0,0,1,1.25-.67c1.8,2.69,3.38,8.63,2,21.7-2.69,24.76.55,26.31.55,26.31S141.65,757.82,141.46,765.21Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":63}),React.createElement("path",{"d":"M321.52,428.56a10,10,0,0,1-3.69,1.4c-4.81.14-8.77-12.88-8.77-12.88s1.37-1.38,3.55-3.32C314.14,417.31,318.48,426.8,321.52,428.56Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":64}),React.createElement("path",{"d":"M290.67,423.88s4,.28,6.51-1.42,13.44-6.37,13.72-9.48c0,0,6.51,15.85,10.19,16.41,0,0-11.32,8.92-12.17,11.75S286,450.9,286,450.9Z","transform":"translate(-76 -98.55)","fill":"#ff748e","key":65}),React.createElement("path",{"d":"M290.67,423.88s4,.28,6.51-1.42,13.44-6.37,13.72-9.48c0,0,6.51,15.85,10.19,16.41,0,0-11.32,8.92-12.17,11.75S286,450.9,286,450.9Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":66}),React.createElement("path",{"d":"M190.36,690.79a36,36,0,0,0-5.35,5.36c-8.53-3.58-14-10.87-16.13-14.07l3.28-3.84S196.78,686.17,190.36,690.79Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":67}),React.createElement("path",{"d":"M230.73,610.53s-13.84,18.48-18.9,20.56-42.78,48.29-42.78,48.29,8.11,14.9,23,17.35c0,0,8.11-3.21,11.13-10.37S230,659,230,659Z","transform":"translate(-76 -98.55)","fill":"#5e5a6b","key":68}),React.createElement("path",{"d":"M230.73,610.53s-13.84,18.48-18.9,20.56-42.78,48.29-42.78,48.29,8.11,14.9,23,17.35c0,0,8.11-3.21,11.13-10.37S230,659,230,659Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":69}),React.createElement("path",{"d":"M188.81,672.44a59.76,59.76,0,0,0,12.59,0C208.9,671.74,203.24,676.26,188.81,672.44Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":70}),React.createElement("path",{"d":"M185.41,677.25s9.91,5.66,13.73,2.83S195.45,682.81,185.41,677.25Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":71}),React.createElement("path",{"d":"M243.18,717a22.06,22.06,0,0,0-.53,4.49c-7.65,6.94-16.85,4.79-22.6,2.27,0-4.25-.07-7.23-.07-7.23S245.82,705.22,243.18,717Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":72}),React.createElement("path",{"d":"M289,470.94l-.29,5.22L286.38,520s-1.89,9.81-1.13,28.68-10.57,48.66-10.57,48.66-5.47,20.19-7.17,29.43-7,12.07-7,12.07,1.32,10.38-2.45,14-4,9.62-4,9.62-5.85,32.44-7.73,35.65-1.7,20.19-1.7,20.19c-12.26,14.52-30.18,1.32-30.18,1.32l.19-45.46s5.09-41.88,8.86-47.73,3.77-21.88,3.77-21.88l-1.67-37.35s-1.34-4-.19-6.22-3.23-8.49-3.23-8.49c-10.56-12.83-12.07-41.69-9-47.35s12.23-28.29,12.23-28.29l12.62-7.36,22.8.68Z","transform":"translate(-76 -98.55)","fill":"#5e5a6b","key":73}),React.createElement("path",{"d":"M235.35,693.24s3,10.33,5.39,11.46S235.35,693.24,235.35,693.24Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":74}),React.createElement("path",{"d":"M239.46,658.86s7.73,6.1,11,6.09S239.46,658.86,239.46,658.86Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":75}),React.createElement("path",{"d":"M286,403.5V416l-8.22-3.54-8.19-3.53-17.83-17.54s-14.1-9.17-21.65-17.52c-4.31-4.76-6.48-9.26-2.68-11.63a23.77,23.77,0,0,0,4.93-4.33,80.51,80.51,0,0,0,9.84-14.51l.35-.64c3.67-6.73,6.1-12.49,6.1-12.49s10.34,3.32,17,8c.54.37,1.05.76,1.53,1.15,3.71,3.05,5.55,6.57,2.14,10.08a24.61,24.61,0,0,0-2.44,2.91h0a24.25,24.25,0,0,0-1.51,2.39c-.21.36-.4.73-.58,1.1a25.31,25.31,0,0,0-2.26,15.1Z","transform":"translate(-76 -98.55)","fill":"#ecb4b6","key":76}),React.createElement("path",{"d":"M269.31,349.46a24.61,24.61,0,0,0-2.44,2.91h0a24.25,24.25,0,0,0-1.51,2.39c-.21.36-.4.73-.58,1.1a29.62,29.62,0,0,1-22.23-12c-.12-.17-.24-.33-.35-.5l.35-.64c3.67-6.73,6.1-12.49,6.1-12.49s10.34,3.32,17,8c.54.37,1.05.76,1.53,1.15C270.88,342.43,272.72,346,269.31,349.46Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":77}),React.createElement("path",{"d":"M296.16,325.07a29.69,29.69,0,0,1-29.71,29.71h-.13l-1,0a29.72,29.72,0,1,1,30.8-29.69Z","transform":"translate(-76 -98.55)","fill":"#ecb4b6","key":78}),React.createElement("path",{"d":"M270.34,398.5s15,8.45,11.13,1.32L262,371h0l22.16,28.49s14.15,19.43,6.42,32.82c0,0-1.13,11.13.19,13.77s-.38,30.75-.38,30.75-5.28-4.91-8.11-4-22.83,2.64-22.83,2.64Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":79}),React.createElement("path",{"d":"M289,470.94l-.29,5.22c-1.79-1.3-4.28-2.76-5.94-2.2C280,474.9,260,476.6,260,476.6l.92-6.49Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":80}),React.createElement("path",{"d":"M270.91,398.5s15,8.45,11.13,1.32L262.52,371h0l22.16,28.49s14.15,19.43,6.41,32.82c0,0-1.13,11.13.19,13.77s-.38,30.75-.38,30.75-5.28-4.91-8.11-4S260,475.47,260,475.47Z","transform":"translate(-76 -98.55)","fill":"#464353","key":81}),React.createElement("path",{"d":"M278.91,413c-.88,9.06-4.61,19.85-4.61,19.85s-2.63,26.79-6,34.72-1.89,18.86-3.77,39c-.68,7.27-3,12.26-6.18,15.63-5.2,5.54-12.61,6.7-18.47,6.36l-1.39-.11c-9.43-.94-18.48-46.4-18.48-46.4s-4.34-38.67-2.64-43.95-1.7-35.47-2.83-42.07c-.72-4.18,1.44-11,3.12-15.47,1-2.56,1.78-4.34,1.78-4.34s3.21-10.18,8.49-15.46a7.77,7.77,0,0,1,5.6-2.35,13.88,13.88,0,0,1,7,2.19l.24.16s34.33,35.08,37.53,43.19C279.16,406.24,279.25,409.48,278.91,413Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":82}),React.createElement("path",{"d":"M277.78,412.41c-.88,9.07-4.61,19.86-4.61,19.86s-2.64,26.79-6,34.71-1.89,18.86-3.78,39c-.67,7.26-3,12.25-6.18,15.63-5.19,5.54-12.6,6.69-18.46,6.35-.48,0-.93-.06-1.39-.11-9.43-.94-18.48-46.4-18.48-46.4s-4.34-38.67-2.64-43.95-1.7-35.46-2.83-42.07c-.72-4.18,1.44-11,3.12-15.46,1-2.57,1.78-4.34,1.78-4.34s3.21-10.19,8.49-15.47a7.77,7.77,0,0,1,5.59-2.35,14,14,0,0,1,7,2.19l.25.16s34.33,35.09,37.53,43.2C278,405.67,278.12,408.91,277.78,412.41Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":83}),React.createElement("path",{"d":"M239.31,550.49s-7.78,6.94-10.47,6.65S239.31,550.49,239.31,550.49Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":84}),React.createElement("path",{"d":"M241.38,557.15s-8.2,3.81-10.65,4.38S238.22,556.17,241.38,557.15Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":85}),React.createElement("path",{"d":"M273.13,453s12.16.14,14,4S277.09,451.46,273.13,453Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":86}),React.createElement("path",{"d":"M271.43,459.67s9.34,2,12.16,4.24S271.43,459.67,271.43,459.67Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":87}),React.createElement("path",{"d":"M255.73,436.61S254.6,475,250.42,479.9,255.73,436.61,255.73,436.61Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":88}),React.createElement("path",{"d":"M245.26,545s-7.77,33.81,7.85,35.93,10.82-38.48,10.82-38.48Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":89}),React.createElement("path",{"d":"M244.69,544.41s-7.77,33.81,7.86,35.94,10.81-38.49,10.81-38.49Z","transform":"translate(-76 -98.55)","fill":"#ecb4b6","key":90}),React.createElement("path",{"d":"M258.06,402.47c-.8-20.32-29.24-24.52-35.87-5.3l-.14.39c-4.33,13-2.45,46-2.45,46s.57,22.13,2.64,29.48,7.92,28.49,7.92,31.88,5.42,16.41,7.71,17.36,3.44,8.3,4,9.62,2.25,18.48,2.25,18.48,21.32-1.32,21.7-4.71-4.72-20-4.72-20-3.76-6.79-4.24-12.26-3.49-7.92-2.93-11.69-1.7-5.66-1.7-8.12-1.69-9.05-1.69-9.05-3.59-2.83-3-6.22-5.09-10.19-3.58-12.64,1.88-8.49,1.88-8.49S247.71,430,249,422.65s9-19.24,9-19.24S258.08,403.07,258.06,402.47Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":91}),React.createElement("path",{"d":"M257.18,521.66c-5.19,5.54-12.6,6.69-18.46,6.35-.67-2.57-1.66-5.73-3.11-6.33-2.29-.94-7.71-14-7.71-17.35s-5.85-24.53-7.92-31.88S217.34,443,217.34,443s-1.89-33,2.45-46c.05-.13.09-.26.13-.4,6.64-19.22,35.07-15,35.88,5.31,0,.6,0,.93,0,.93s-7.74,11.88-9,19.24-3.21,34.52-3.21,34.52-.38,6-1.89,8.49,4.15,9.25,3.59,12.64,3,6.23,3,6.23,1.7,6.59,1.7,9.05,2.26,4.34,1.7,8.11,2.45,6.22,2.93,11.7A30.68,30.68,0,0,0,257.18,521.66Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":92}),React.createElement("path",{"d":"M256.93,401.91c-.81-20.32-29.24-24.53-35.88-5.3,0,.13-.08.26-.13.39-4.34,13-2.45,46-2.45,46s.57,22.12,2.64,29.48S229,500.93,229,504.33s5.42,16.41,7.71,17.35,3.44,8.3,4,9.62S243,549.79,243,549.79s21.32-1.32,21.69-4.72-4.71-20-4.71-20-3.76-6.79-4.24-12.26-3.5-7.93-2.93-11.7-1.7-5.66-1.7-8.11-1.69-9.06-1.69-9.06-3.59-2.83-3-6.22-5.1-10.19-3.59-12.64,1.89-8.49,1.89-8.49,1.89-27.16,3.21-34.52,9-19.24,9-19.24S257,402.51,256.93,401.91Z","transform":"translate(-76 -98.55)","fill":"#472d65","key":93}),React.createElement("path",{"d":"M221.91,454.15c.57-.57,11.32-12.45,14.72-8.2S221.91,454.15,221.91,454.15Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":94}),React.createElement("path",{"d":"M222.9,463.35c.43-.43,10.75-.85,13.3-6.65S222.9,463.35,222.9,463.35Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":95}),React.createElement("g",{"opacity":"0.1","key":96},[React.createElement("path",{"d":"M211.13,359a2.91,2.91,0,0,1,.57,1,4.43,4.43,0,0,0-.57-3.86c-.5-.57-1.24-.92-1.69-1.53,0-.05-.06-.11-.1-.16a3,3,0,0,0,.1,3C209.89,358.11,210.63,358.45,211.13,359Z","transform":"translate(-76 -98.55)","key":0}),React.createElement("path",{"d":"M225.53,322.36c0-1.07.05-2.14,0-3.2-.19-3.85-.91-7.8-1.07-11.66-.23,4.73.83,9.69,1.07,14.49C225.53,322.11,225.53,322.24,225.53,322.36Z","transform":"translate(-76 -98.55)","key":1})]),React.createElement("path",{"d":"M325.64,420.48l.58.4a2.33,2.33,0,0,1-.6-3.24l26.22-38.06a2.34,2.34,0,0,1,3.25-.6l-.59-.4a3.75,3.75,0,0,1,1,5.21l-24.62,35.73A3.73,3.73,0,0,1,325.64,420.48Z","transform":"translate(-76 -98.55)","fill":"#464353","key":97}),React.createElement("path",{"d":"M340.26,373.86H341a0,0,0,0,1,0,0v50.88a0,0,0,0,1,0,0h-.71a1.74,1.74,0,0,1-1.74-1.74V375.6A1.74,1.74,0,0,1,340.26,373.86Z","transform":"translate(210.49 -220.81) rotate(34.56)","fill":"#9f9eff","key":98}),React.createElement("rect",{"x":"350.05","y":"384.08","width":"0.47","height":"4.15","rx":"0.17","transform":"matrix(0.82, 0.57, -0.57, 0.82, 204.9, -229.11)","fill":"#464353","key":99}),React.createElement("path",{"d":"M299.88,321.43c-.42-2-2.08-3.53-3.22-5.25-2.86-4.31-2.41-10-1.07-15a10.7,10.7,0,0,0,.6-4.25,6.7,6.7,0,0,0-3.15-4.41c-3.5-2.31-8-2.34-11.94-3.79-5.72-2.12-10.9-7.34-16.87-6.07-3.26.69-5.77,3.21-8.59,5a20.65,20.65,0,0,1-10.37,3.18c-3.09.09-6.22-.51-9.26,0a8.26,8.26,0,0,0-1.6.44,23.64,23.64,0,0,0-8-1.29,13.57,13.57,0,0,0-7.58,2.11c-4.11,2.9-5.2,8.51-5.14,13.54s.91,10.2-.63,15c-1.91,6-7.31,10.5-8.39,16.66-.75,4.18.64,8.41,1.87,12.48,3.54,11.69,5.88,24.61,1.18,35.89-1.19,2.86-3,5.69-5.79,7l10-.58a5.43,5.43,0,0,1-4.55,6.17,23.15,23.15,0,0,0,7.32-1.67,7.83,7.83,0,0,0,4.61-5.59c.19-1.34-.09-2.75.28-4.06.65-2.24,3-3.48,4.81-4.91,4.87-3.79,7.17-10.18,7.36-16.35s-1.45-12.24-3.2-18.16-3.63-11.89-3.91-18a23.44,23.44,0,0,1,.62-6.72c.36.67.76,1.33,1.17,1.95,2.41,3.68,5.23,7.17,6.71,11.31a31.74,31.74,0,0,0,2.1,5.69c1,1.75,2.94,3.2,4.95,2.89s3.51-2.47,4.17-4.53.95-4.31,2.2-6.07c2.38-3.32,7.13-3.62,11.21-3.5,8.6.27,20.46,1.58,27.19-5,1.28-1.25,1.89-3.17,3.89-2.7,1.79.42,2.79,3.33,4.7,4C296.63,327.81,300.6,324.89,299.88,321.43Z","transform":"translate(-76 -98.55)","opacity":"0.1","key":100}),React.createElement("path",{"d":"M299.88,320.33c-.42-2-2.08-3.53-3.22-5.25-2.86-4.31-2.41-10-1.07-15a10.7,10.7,0,0,0,.6-4.25,6.7,6.7,0,0,0-3.15-4.41c-3.5-2.31-8-2.34-11.94-3.79-5.72-2.12-10.9-7.34-16.87-6.07-3.26.69-5.77,3.21-8.59,5a20.65,20.65,0,0,1-10.37,3.18c-3.09.09-6.22-.51-9.26,0a8.26,8.26,0,0,0-1.6.44,23.64,23.64,0,0,0-8-1.29,13.57,13.57,0,0,0-7.58,2.11c-4.11,2.9-5.2,8.51-5.14,13.54s.91,10.2-.63,15c-1.91,5.95-7.31,10.5-8.39,16.66-.75,4.18.64,8.41,1.87,12.48,3.54,11.69,5.88,24.61,1.18,35.89-1.19,2.86-3,5.69-5.79,7l10-.59a5.43,5.43,0,0,1-4.55,6.17,23.15,23.15,0,0,0,7.32-1.67,7.83,7.83,0,0,0,4.61-5.59c.19-1.34-.09-2.75.28-4.06.65-2.24,3-3.48,4.81-4.91,4.87-3.79,7.17-10.18,7.36-16.35s-1.45-12.24-3.2-18.16-3.63-11.89-3.91-18.05a23.44,23.44,0,0,1,.62-6.72c.36.67.76,1.33,1.17,2,2.41,3.68,5.23,7.17,6.71,11.31a31.74,31.74,0,0,0,2.1,5.69c1,1.75,2.94,3.2,4.95,2.89s3.51-2.47,4.17-4.53.95-4.31,2.2-6.07c2.38-3.32,7.13-3.62,11.21-3.5,8.6.27,20.46,1.58,27.19-5,1.28-1.25,1.89-3.17,3.89-2.7,1.79.42,2.79,3.33,4.7,4C296.63,326.71,300.6,323.79,299.88,320.33Z","transform":"translate(-76 -98.55)","fill":"#464353","key":101}),React.createElement("g",{"opacity":"0.1","key":102},[React.createElement("path",{"d":"M213.69,302.62c0,.65-.05,1.31,0,1.95,0,2.1.18,4.22.25,6.33C214,308.17,213.78,305.38,213.69,302.62Z","transform":"translate(-76 -98.55)","key":0}),React.createElement("path",{"d":"M210.28,368.7c.26-7.77-1.51-15.79-3.78-23.31a44.54,44.54,0,0,1-2-8.3c-.42,3.9.83,7.82,2,11.6A80.29,80.29,0,0,1,210.28,368.7Z","transform":"translate(-76 -98.55)","key":1}),React.createElement("path",{"d":"M294.61,305.56a29.68,29.68,0,0,1,1-5.48,10.7,10.7,0,0,0,.6-4.25,4.56,4.56,0,0,0-.18-.75c-.12.57-.27,1.14-.42,1.71A25.85,25.85,0,0,0,294.61,305.56Z","transform":"translate(-76 -98.55)","key":2}),React.createElement("path",{"d":"M211.86,387.69l-6,.35a10,10,0,0,1-3.94,3.54l9.4-.56A5,5,0,0,0,211.86,387.69Z","transform":"translate(-76 -98.55)","key":3}),React.createElement("path",{"d":"M299.62,319.48a5.21,5.21,0,0,1-6.13,2.86c-1.91-.65-2.91-3.56-4.7-4-2-.47-2.61,1.45-3.89,2.7-6.73,6.61-18.59,5.3-27.19,5-4.08-.12-8.83.18-11.21,3.5-1.25,1.76-1.53,4-2.2,6.07s-2,4.2-4.17,4.53-3.92-1.14-4.95-2.89a31.74,31.74,0,0,1-2.1-5.69c-1.48-4.14-4.3-7.63-6.71-11.31-.41-.62-.81-1.28-1.17-1.95a23.44,23.44,0,0,0-.62,6.72c0,.16,0,.32,0,.48a21.09,21.09,0,0,1,.58-3.9c.36.67.76,1.33,1.17,2,2.41,3.68,5.23,7.17,6.71,11.31a31.74,31.74,0,0,0,2.1,5.69c1,1.75,2.94,3.2,4.95,2.89s3.51-2.47,4.17-4.53.95-4.31,2.2-6.07c2.38-3.32,7.13-3.62,11.21-3.5,8.6.27,20.46,1.58,27.19-5,1.28-1.25,1.89-3.17,3.89-2.7,1.79.42,2.79,3.33,4.7,4,3.14,1.07,7.11-1.85,6.39-5.31A4.66,4.66,0,0,0,299.62,319.48Z","transform":"translate(-76 -98.55)","key":4}),React.createElement("path",{"d":"M224.33,377.63c-1.84,1.43-4.16,2.67-4.81,4.91-.37,1.31-.09,2.72-.28,4.06a7.83,7.83,0,0,1-4.61,5.59,14.48,14.48,0,0,1-2.87,1,5.44,5.44,0,0,1-4.45,4,23.15,23.15,0,0,0,7.32-1.67,7.83,7.83,0,0,0,4.61-5.59c.19-1.34-.09-2.75.28-4.06.65-2.24,3-3.48,4.81-4.91,4.87-3.79,7.17-10.18,7.36-16.35,0-.92,0-1.83,0-2.74C231.34,367.83,229.06,374,224.33,377.63Z","transform":"translate(-76 -98.55)","key":5})])]);
}

UndrawFishBowl.defaultProps = {"data-name":"Layer 1","width":"1048","height":"702.91","viewBox":"0 0 1048 702.91"};

module.exports = UndrawFishBowl;

UndrawFishBowl.default = UndrawFishBowl;


/***/ }),

/***/ "./src/images/undraw/undraw_mint_tea.svg":
/*!***********************************************!*\
  !*** ./src/images/undraw/undraw_mint_tea.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function UndrawMintTea (props) {
    return React.createElement("svg",props,[React.createElement("defs",{"key":0},[React.createElement("linearGradient",{"id":"f1cd73ea-bab0-41a4-9ae7-11b65985e33b-488","x1":"687.83","y1":"817.26","x2":"687.83","y2":"478.42","gradientTransform":"translate(-289.16)","gradientUnits":"userSpaceOnUse","key":0},[React.createElement("stop",{"offset":"0","stopColor":"gray","stopOpacity":"0.25","key":0}),React.createElement("stop",{"offset":"0.54","stopColor":"gray","stopOpacity":"0.12","key":1}),React.createElement("stop",{"offset":"1","stopColor":"gray","stopOpacity":"0.1","key":2})]),React.createElement("linearGradient",{"id":"bfa0f3e7-93bc-481b-bb94-2444c82829fd-489","x1":"1133.86","y1":"747.7","x2":"1133.86","y2":"450.05","gradientTransform":"matrix(-1, 0, 0, 1, 1900, 0)","xlinkHref":"#f1cd73ea-bab0-41a4-9ae7-11b65985e33b-488","key":1}),React.createElement("linearGradient",{"id":"bd8b2140-5874-4d92-bce5-6c56d7cb8024-490","x1":"1163.35","y1":"551.07","x2":"1180.51","y2":"551.07","gradientTransform":"matrix(-1, 0, 0, 1, 1900, 0)","xlinkHref":"#f1cd73ea-bab0-41a4-9ae7-11b65985e33b-488","key":2})]),React.createElement("title",{"key":1},"mint tea"),React.createElement("ellipse",{"cx":"553.06","cy":"681.38","rx":"553.06","ry":"67.65","fill":"#493165","opacity":"0.1","key":2}),React.createElement("path",{"d":"M599.36,518.63S418.51,526.51,421.13,552s221.38,52.53,367,0C788.09,552,775.71,516.76,599.36,518.63Z","transform":"translate(-46.94 -75.49)","fill":"#a1c4f5","key":3}),React.createElement("path",{"d":"M456.44,408.67h2.62s-.87-26.09-4.37-31.31h1.75s-5.24-22.61-13.09-28.7l2.62-.87s-8.73-16.52-22.7-20l2.18-1.31s-19.63-6.52-29.24-7.39l1.75-.87a77.1,77.1,0,0,0-19.76-7.38,44.49,44.49,0,0,0,5.67-17L383,294s2.94-6.81,1.87-24.77c0,0-2.28-8.7.65-12.8l-.21-1.32s-5.19,4-13.77,3.55l-.21-1.32s-13,2.53-15.38,4.72l-.14-.89s-10.94,4.47-13.36,8.93l-.65-1.26s-7.09,5.38-8.11,12.38c-.07.21-.12.43-.17.64l-.77-.92-.26,1.72,0-.05s-.08.48-.2,1.28a56.28,56.28,0,0,0-3.35-9.24c-2.21-5.29-5.18-10-9.18-13.26l.26,2.74S301.14,249.68,285.55,249l.71,1.59s-16.11-6.17-37.73-3.24l.71,1.59s-14.34-2.19-47.67,8.8c0,0-15.24,8.67-24.45,5.15l-2.39,1.06s10.17,7.85,13.68,24.37L186,289.37s11.39,23.5,16.7,26.85l-1.6.71s14,18.54,23.61,20.92l-2,1.85s14.69,11.56,28.86,9.08l-1.46,2.07s20.59-2,29.72-5.11l-1.24,1.51a75.81,75.81,0,0,0,16.78-.55c-.09.4-.17.8-.22,1.2l.83-.28a36.9,36.9,0,0,0-2.39,7.54c-17.89,15.21-38,40.19-38.51,76l38.23-54.51a106.85,106.85,0,0,0,2.41,14.46s3.7,8.2,1.49,12.72l.43,1.27s4.45-4.8,13-5.79l.43,1.27s12.44-4.66,14.38-7.21l.29.85a57.45,57.45,0,0,0,7.84-6c4.61,6.17,11,13.34,18.16,16.88v-1.74s12.22,12.18,33.17,18.27V420s12.22,7.83,47.13,11.31c0,0,17.46-1.74,24.44,5.21h2.62S453,425.2,456.44,408.67Z","transform":"translate(-46.94 -75.49)","fill":"#493165","opacity":"0.1","key":4}),React.createElement("path",{"d":"M616.79,386.17l.72,2.52s24.85-8,28.9-12.82l.48,1.68s20.3-11.27,24-20.5l1.56,2.28s13.48-12.94,13-27.33l1.85,1.74s.86-20.67-1-30.14l1.32,1.44a77.19,77.19,0,0,0,1.65-21,44.81,44.81,0,0,0,17.87.78l-.38-.81s7.37,1,24.33-5c0,0,7.74-4.59,12.48-2.9l1.22-.57s-5.28-3.88-7.22-12.26l1.22-.57s-6-11.83-8.77-13.48l.81-.38s-7.3-9.28-12.26-10.38l1-1s-7.12-5.33-14.13-4.39l-.66,0,.68-1-1.73.23,0-.05-1.28.16a57.26,57.26,0,0,0,8-5.77c4.48-3.58,8.16-7.73,10.22-12.48l-2.56,1s8.72-22.1,5.09-37.28L721.88,179s1.5-17.18-7.28-37.15L713.26,143s-1.84-14.39-21.58-43.4c0,0-12.54-12.27-11.69-22.09l-1.68-2s-4.75,11.94-19.66,19.87l-1.68-2s-19.45,17.42-21.21,23.45l-1.12-1.34s-14,18.53-13.6,28.46l-2.35-1.45s-7.06,17.3-.77,30.24l-2.4-.83s7.61,19.24,13.1,27.16l-1.79-.78a75.75,75.75,0,0,0,5.16,16c-.41,0-.82.06-1.22.12l.5.73a36.33,36.33,0,0,0-7.91-.23c-19.54-13-49.09-25.41-83.71-16.07l62.93,21.74a107.78,107.78,0,0,0-13.24,6.3s-6.86,5.81-11.82,4.93l-1.1.77s5.84,2.95,9.15,10.88l-1.11.77s7.91,10.67,10.89,11.83l-.73.51a56.87,56.87,0,0,0,7.88,5.9c-4.66,6.13-9.77,14.29-11.22,22.11l1.67-.48s-8.34,15.1-8.42,36.91l1.67-.47s-4.15,13.9,2.12,48.42c0,0,6.48,16.3,1.72,24.93l.72,2.52S600,387.37,616.79,386.17Z","transform":"translate(-46.94 -75.49)","fill":"#493165","opacity":"0.1","key":5}),React.createElement("path",{"d":"M820.83,388l-.44,1.23s12.44,4,15.49,3.2l-.29.82s11.53,1.33,15.72-1.35l0,1.38s9.25-1.34,13.23-7.33l.25,1.24s6.37-8.15,8.39-12.53l.12,1a38.63,38.63,0,0,0,6.79-8.08,22.25,22.25,0,0,0,7,5.52l.08-.43s2.72,2.53,11.36,5c0,0,4.48.38,5.92,2.45l.66.12a11,11,0,0,1,.63-7.08l.67.12s1-6.57.35-8l.44.08s-.26-5.91-2-7.8l.7-.09s-1.34-4.24-4.47-5.9l-.27-.19.56-.2s-.29-.17-.77-.42h0l-.57-.31a28.83,28.83,0,0,0,4.92,0,17,17,0,0,0,7.79-2.1l-1.34-.34s10-6.45,12.93-13.68l-.87.07a41.84,41.84,0,0,0,7.85-17.23l-.86.06s3.44-6.39,3.85-23.93c0,0-1.52-8.64,1.68-12.39l-.1-1.31s-5.41,3.48-13.78,2.36l-.1-1.3S909.45,282,907,284l-.07-.87s-11.08,3.46-13.81,7.61l-.54-1.27s-7.91,5-9.12,12.07l-.73-1s-2.51,10-2.58,14.87l-.5-.84a38,38,0,0,0-2.56,8,5.64,5.64,0,0,0-.53-.31v.44a18.52,18.52,0,0,0-3.16-2.39c-4.16-11-12.56-24.63-29.37-30.91l19.27,27.16a53.87,53.87,0,0,0-7.22-1.29s-4.48.37-6.24-1.43l-.67,0a11,11,0,0,1,.55,7.1H849s.11,6.64,1,8h-.45a29.46,29.46,0,0,0,1.49,4.7c-3.68,1.13-8.13,3-11,5.72l.82.29A41.85,41.85,0,0,0,826.7,352.1l.82.29s-5.74,4.44-13.24,20.31c0,0-2.11,8.52-6.56,10.64l-.44,1.23S813.63,383.59,820.83,388Z","transform":"translate(-46.94 -75.49)","fill":"#493165","opacity":"0.1","key":6}),React.createElement("ellipse",{"cx":"550.81","cy":"679.4","rx":"211.21","ry":"45.5","fill":"#a1c4f5","key":7}),React.createElement("ellipse",{"cx":"550.81","cy":"679.4","rx":"211.21","ry":"45.5","opacity":"0.1","key":8}),React.createElement("ellipse",{"cx":"550.81","cy":"673.32","rx":"211.21","ry":"45.5","fill":"#a1c4f5","key":9}),React.createElement("ellipse",{"cx":"552.06","cy":"673.32","rx":"155.63","ry":"33.53","opacity":"0.1","key":10}),React.createElement("path",{"d":"M491.34,541.31s31,13.94,31.46,44.86","transform":"translate(-46.94 -75.49)","fill":"none","stroke":"#8BC74B","strokeMiterlimit":"10","strokeWidth":"6","key":11}),React.createElement("path",{"d":"M491.34,541.31s31,13.94,31.46,44.86","transform":"translate(-46.94 -75.49)","fill":"none","stroke":"#407d3b","strokeMiterlimit":"10","strokeWidth":"6","opacity":"0.3","key":12}),React.createElement("path",{"d":"M483.73,534.67s9.55,18.2,4.56,28.13l-.41-1.24s-5.4,9.92-12,13.23V574a39.66,39.66,0,0,1-15.77,8.69v-.83s-5.82,3.73-22.42,5.38c0,0-8.3-.83-11.62,2.48h-1.25A20.65,20.65,0,0,0,426,576.45h-1.25s.42-12.41,2.08-14.89H426s2.49-10.76,6.22-13.65l-1.24-.42s4.15-7.86,10.79-9.51l-1-.62s9.34-3.11,13.91-3.52l-.83-.41S471.69,523.09,483.73,534.67Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":13}),React.createElement("path",{"d":"M483.73,534.67s9.55,18.2,4.56,28.13l-.41-1.24s-5.4,9.92-12,13.23V574a39.66,39.66,0,0,1-15.77,8.69v-.83s-5.82,3.73-22.42,5.38c0,0-8.3-.83-11.62,2.48h-1.25A20.65,20.65,0,0,0,426,576.45h-1.25s.42-12.41,2.08-14.89H426s2.49-10.76,6.22-13.65l-1.24-.42s4.15-7.86,10.79-9.51l-1-.62s9.34-3.11,13.91-3.52l-.83-.41S471.69,523.09,483.73,534.67Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":14}),React.createElement("path",{"d":"M484,534.45s9.13,17.49,4.37,27l-.4-1.19s-5.17,9.54-11.52,12.71v-.79a38.11,38.11,0,0,1-15.1,8.34v-.79s-5.57,3.58-21.46,5.17c0,0-7.95-.8-11.13,2.38h-1.19a20,20,0,0,0,1.19-12.72h-1.19s.4-11.92,2-14.3h-.8s2.39-10.33,6-13.11l-1.19-.4s4-7.55,10.33-9.14l-1-.59s8.94-3,13.31-3.38l-.79-.4S472.46,523.33,484,534.45Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":15}),React.createElement("path",{"d":"M435.91,578.56a150.43,150.43,0,0,1,24.91-29.63c-11.05-4.47-24.91,10.56-24.91,10.56,10.27-14.52,23.06-12,25.72-11.28a85.54,85.54,0,0,1,11.18-8.35c-5-5.34-21.41,1.74-21.41,1.74,13.17-7.57,20.06-3.69,22-2.13a55.27,55.27,0,0,1,10.55-5s-4.35,2.83-10.65,7.57c1.71,3.19,6.33,14.33-4.34,27.32,0,0,10.79-17.29,3.62-26.77-3.47,2.63-7.49,5.81-11.67,9.4.79,3.72,2,15.49-11.62,25,0,0,14.69-13.36,10.91-24.35C451.69,560,442.52,569,435.91,578.56Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":16}),React.createElement("path",{"d":"M483.81,534s-1.34-20.51,7.24-27.56l-.12,1.3s9-6.88,16.37-7.21l-.33.76a39.68,39.68,0,0,1,17.94-1.54l-.34.75s6.82-1,22.67,4.19c0,0,7.25,4.12,11.63,2.44l1.14.51a20.7,20.7,0,0,0-6.51,11.59l1.14.51s-5.42,11.17-7.94,12.77l.76.33s-6.64,8.82-11.23,10l1,.88s-7,5.5-13.73,4.32l.7,1s-9.8-1-14.14-2.43l.59.71S490.11,549.44,483.81,534Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":17}),React.createElement("path",{"d":"M483.81,534s-1.34-20.51,7.24-27.56l-.12,1.3s9-6.88,16.37-7.21l-.33.76a39.68,39.68,0,0,1,17.94-1.54l-.34.75s6.82-1,22.67,4.19c0,0,7.25,4.12,11.63,2.44l1.14.51a20.7,20.7,0,0,0-6.51,11.59l1.14.51s-5.42,11.17-7.94,12.77l.76.33s-6.64,8.82-11.23,10l1,.88s-7,5.5-13.73,4.32l.7,1s-9.8-1-14.14-2.43l.59.71S490.11,549.44,483.81,534Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":18}),React.createElement("path",{"d":"M483.49,534.06s-1.26-19.68,7-26.47l-.12,1.26s8.59-6.62,15.69-7l-.32.73a38,38,0,0,1,17.18-1.5l-.32.72s6.53-1,21.71,4c0,0,6.94,4,11.13,2.34l1.09.48a19.92,19.92,0,0,0-6.25,11.14l1.09.48s-5.2,10.74-7.62,12.27l.73.32s-6.37,8.48-10.77,9.57l.93.84s-6.7,5.29-13.15,4.16l.66.95s-9.38-.9-13.53-2.31l.56.68S489.5,548.91,483.49,534.06Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":19}),React.createElement("path",{"d":"M545.33,513.26a150.74,150.74,0,0,1-34.79,17c8.28,8.57,27.05.47,27.05.47-15.28,9.1-26,1.6-28.09-.14a85.93,85.93,0,0,1-13.61,3.1c2.41,6.91,20.28,7.09,20.28,7.09-15.11,1.57-19.83-4.77-21-7a55.1,55.1,0,0,1-11.67.3s5.12-.82,12.8-2.6c-.27-3.61,0-15.66,15-23.2,0,0-16.88,11.43-14.17,23,4.24-1,9.2-2.28,14.48-3.86.78-3.72,4.47-15,20.75-18.1,0,0-18.85,6.25-19.86,17.83C523.37,523.84,535.42,519.28,545.33,513.26Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":20}),React.createElement("path",{"d":"M482.73,537.68s-9.91,3.37-14.49.06l.65-.11s-4.55-3.53-5.68-7.16l.42.07a20.46,20.46,0,0,1-3.09-8.69l.42.07s-1.4-3.24-.89-11.78c0,0,1.08-4.14-.31-6.09l.1-.63a10.45,10.45,0,0,0,6.55,1.69l.1-.63s6.2,1.21,7.31,2.25l.07-.43s5.2,2.13,6.35,4.25l.31-.6s3.61,2.74,3.91,6.23l.39-.47a46.33,46.33,0,0,1,.65,7.32l.27-.39S489.52,532.51,482.73,537.68Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":21}),React.createElement("path",{"d":"M482.73,537.68s-9.91,3.37-14.49.06l.65-.11s-4.55-3.53-5.68-7.16l.42.07a20.46,20.46,0,0,1-3.09-8.69l.42.07s-1.4-3.24-.89-11.78c0,0,1.08-4.14-.31-6.09l.1-.63a10.45,10.45,0,0,0,6.55,1.69l.1-.63s6.2,1.21,7.31,2.25l.07-.43s5.2,2.13,6.35,4.25l.31-.6s3.61,2.74,3.91,6.23l.39-.47a46.33,46.33,0,0,1,.65,7.32l.27-.39S489.52,532.51,482.73,537.68Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":22}),React.createElement("path",{"d":"M483.05,536.83s-9.27,3.11-13.56,0l.61-.1s-4.26-3.27-5.32-6.63l.39.06a18.89,18.89,0,0,1-2.91-8l.39.06s-1.31-3-.85-10.9c0,0,1-3.83-.3-5.63l.09-.59a9.85,9.85,0,0,0,6.13,1.58l.1-.58s5.8,1.12,6.84,2.08l.06-.38s4.87,2,5.95,3.94l.29-.56s3.39,2.54,3.67,5.77l.37-.44a42.48,42.48,0,0,1,.61,6.78l.26-.36S489.4,532.06,483.05,536.83Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":23}),React.createElement("path",{"d":"M465.22,509.86a74.69,74.69,0,0,1,12.55,14.5c3.05-5.06-3.22-13-3.22-13,6.31,6.16,4.07,12.22,3.51,13.47a42.48,42.48,0,0,1,3.22,6.12c3-2,.81-10.61.81-10.61,2.68,7,.24,10.1-.67,10.95a26.82,26.82,0,0,1,1.63,5.55s-1-2.35-2.87-5.8c-1.7.59-7.51,2-13-4.26,0,0,7.62,6.63,12.82,3.86-1-1.9-2.26-4.11-3.69-6.44-1.88.1-7.74-.24-11.31-7.64,0,0,5.39,8.23,11.06,7.25A73.08,73.08,0,0,0,465.22,509.86Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":24}),React.createElement("path",{"d":"M484.7,537.19S495,535.51,499,539.54h-.67s3.9,4.24,4.41,8l-.4-.13a20.38,20.38,0,0,1,1.6,9.08l-.4-.14s.85,3.43-1.07,11.77c0,0-1.76,3.9-.71,6l-.21.6a10.43,10.43,0,0,0-6.17-2.75l-.21.6s-5.91-2.22-6.84-3.43l-.13.41s-4.78-3-5.56-5.25l-.4.54s-3.11-3.29-2.82-6.79l-.47.4a46.16,46.16,0,0,1,.58-7.32l-.34.33S477.14,541.16,484.7,537.19Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":25}),React.createElement("path",{"d":"M484.7,537.09S495,535.41,499,539.44h-.67s3.9,4.23,4.41,8l-.4-.13a20.36,20.36,0,0,1,1.6,9.07l-.4-.13s.85,3.43-1.07,11.76c0,0-1.76,3.9-.71,6l-.21.61a10.41,10.41,0,0,0-6.17-2.76l-.21.61s-5.91-2.22-6.84-3.43l-.13.4s-4.78-3-5.56-5.24l-.4.54s-3.11-3.3-2.82-6.79l-.47.4a46.34,46.34,0,0,1,.58-7.33l-.34.34S477.14,541.06,484.7,537.09Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":26}),React.createElement("path",{"d":"M484.25,538s9.65-1.52,13.37,2.23H497s3.66,3.93,4.15,7.42l-.37-.13a18.86,18.86,0,0,1,1.52,8.42l-.37-.13s.8,3.18-1,10.89c0,0-1.63,3.61-.64,5.61l-.19.56a9.85,9.85,0,0,0-5.78-2.58l-.19.56s-5.54-2.07-6.4-3.19l-.13.37s-4.47-2.76-5.21-4.88l-.38.5s-2.91-3.06-2.65-6.3l-.44.38a42.16,42.16,0,0,1,.52-6.79l-.31.31S477.2,541.62,484.25,538Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":27}),React.createElement("path",{"d":"M497.35,567.53a74.32,74.32,0,0,1-10-16.38c-3.85,4.48,1,13.36,1,13.36-5.19-7.12-2-12.73-1.22-13.86a42.43,42.43,0,0,1-2.16-6.57c-3.29,1.5-2.56,10.33-2.56,10.33-1.47-7.38,1.44-10,2.48-10.69a27.68,27.68,0,0,1-.68-5.75s.63,2.49,1.87,6.2c1.77-.3,7.73-.7,12.14,6.37,0,0-6.42-7.81-12-5.94.68,2,1.54,4.43,2.57,7,1.87.22,7.58,1.53,9.88,9.41,0,0-3.95-9-9.71-9A72.89,72.89,0,0,0,497.35,567.53Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":28}),React.createElement("path",{"d":"M607.77,639.31s-31,13.94-31.46,44.86","transform":"translate(-46.94 -75.49)","fill":"none","stroke":"#8BC74B","strokeMiterlimit":"10","strokeWidth":"6","key":29}),React.createElement("path",{"d":"M607.77,639.31s-31,13.94-31.46,44.86","transform":"translate(-46.94 -75.49)","fill":"none","stroke":"#407d3b","strokeMiterlimit":"10","strokeWidth":"6","opacity":"0.3","key":30}),React.createElement("path",{"d":"M615.39,632.67s-9.55,18.2-4.57,28.13l.42-1.24s5.39,9.92,12,13.23V672a39.66,39.66,0,0,0,15.77,8.69v-.83s5.81,3.73,22.42,5.38c0,0,8.3-.83,11.62,2.48h1.25a20.65,20.65,0,0,1-1.25-13.23h1.25s-.42-12.41-2.08-14.89h.83s-2.49-10.76-6.23-13.65l1.25-.42S664,637.63,657.32,636l1-.62s-9.34-3.11-13.9-3.52l.83-.41S627.43,621.09,615.39,632.67Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":31}),React.createElement("path",{"d":"M615.39,632.67s-9.55,18.2-4.57,28.13l.42-1.24s5.39,9.92,12,13.23V672a39.66,39.66,0,0,0,15.77,8.69v-.83s5.81,3.73,22.42,5.38c0,0,8.3-.83,11.62,2.48h1.25a20.65,20.65,0,0,1-1.25-13.23h1.25s-.42-12.41-2.08-14.89h.83s-2.49-10.76-6.23-13.65l1.25-.42S664,637.63,657.32,636l1-.62s-9.34-3.11-13.9-3.52l.83-.41S627.43,621.09,615.39,632.67Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":32}),React.createElement("path",{"d":"M615.13,632.45s-9.14,17.49-4.37,27l.4-1.19s5.16,9.54,11.52,12.71v-.79a38,38,0,0,0,15.1,8.34v-.79s5.56,3.58,21.46,5.17c0,0,7.94-.8,11.12,2.38h1.19a20,20,0,0,1-1.19-12.72h1.19s-.39-11.92-2-14.3h.79s-2.38-10.33-6-13.11l1.19-.4s-4-7.55-10.33-9.14l1-.59s-8.94-3-13.31-3.38l.79-.4S626.65,621.33,615.13,632.45Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":33}),React.createElement("path",{"d":"M663.21,676.56a150.43,150.43,0,0,0-24.91-29.63c11.05-4.47,24.91,10.56,24.91,10.56-10.27-14.52-23.06-12-25.73-11.28a84.78,84.78,0,0,0-11.17-8.35c5-5.34,21.4,1.74,21.4,1.74-13.16-7.57-20.06-3.69-22-2.13a55.56,55.56,0,0,0-10.55-5s4.35,2.83,10.65,7.57c-1.72,3.19-6.33,14.33,4.34,27.32,0,0-10.79-17.29-3.62-26.77,3.47,2.63,7.48,5.81,11.67,9.4-.8,3.72-2,15.49,11.62,25,0,0-14.69-13.36-10.92-24.35C647.43,658,656.6,667,663.21,676.56Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":34}),React.createElement("path",{"d":"M615.31,632s1.34-20.51-7.24-27.56l.12,1.3s-9-6.88-16.37-7.21l.33.76a39.68,39.68,0,0,0-17.94-1.54l.34.75s-6.83-1-22.67,4.19c0,0-7.26,4.12-11.64,2.44l-1.13.51a20.77,20.77,0,0,1,6.51,11.59l-1.14.51s5.41,11.17,7.94,12.77l-.76.33s6.64,8.82,11.23,10l-1,.88s7,5.5,13.73,4.32l-.7,1s9.79-1,14.14-2.43l-.6.71S609,647.44,615.31,632Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":35}),React.createElement("path",{"d":"M615.31,632s1.34-20.51-7.24-27.56l.12,1.3s-9-6.88-16.37-7.21l.33.76a39.68,39.68,0,0,0-17.94-1.54l.34.75s-6.83-1-22.67,4.19c0,0-7.26,4.12-11.64,2.44l-1.13.51a20.77,20.77,0,0,1,6.51,11.59l-1.14.51s5.41,11.17,7.94,12.77l-.76.33s6.64,8.82,11.23,10l-1,.88s7,5.5,13.73,4.32l-.7,1s9.79-1,14.14-2.43l-.6.71S609,647.44,615.31,632Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":36}),React.createElement("path",{"d":"M615.63,632.06s1.26-19.68-7-26.47l.12,1.26s-8.59-6.62-15.69-7l.32.73a38,38,0,0,0-17.18-1.5l.32.72s-6.54-1-21.71,4c0,0-6.94,3.95-11.13,2.34l-1.09.48a20,20,0,0,1,6.25,11.14l-1.09.48S553,629,555.4,630.55l-.73.32s6.37,8.48,10.77,9.57l-.93.84s6.7,5.29,13.15,4.16l-.66.95s9.38-.9,13.53-2.31l-.56.68S609.61,646.91,615.63,632.06Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":37}),React.createElement("path",{"d":"M553.79,611.26a150.74,150.74,0,0,0,34.79,17c-8.28,8.57-27.05.47-27.05.47,15.28,9.1,26,1.6,28.09-.14a86.06,86.06,0,0,0,13.6,3.1c-2.4,6.91-20.27,7.09-20.27,7.09,15.1,1.57,19.83-4.77,21-7a55.09,55.09,0,0,0,11.67.3s-5.12-.82-12.81-2.6c.28-3.61,0-15.66-15.05-23.2,0,0,16.88,11.43,14.18,23-4.24-1-9.2-2.28-14.48-3.86-.78-3.72-4.48-15-20.75-18.1,0,0,18.84,6.25,19.85,17.83C575.75,621.84,563.7,617.28,553.79,611.26Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":38}),React.createElement("path",{"d":"M616.38,635.68s9.92,3.37,14.5.06l-.66-.11s4.56-3.53,5.68-7.16l-.41.07a20.46,20.46,0,0,0,3.09-8.69l-.42.07s1.4-3.24.89-11.78c0,0-1.08-4.14.31-6.09l-.1-.63a10.48,10.48,0,0,1-6.55,1.69l-.1-.63s-6.2,1.21-7.31,2.25l-.07-.43s-5.2,2.13-6.35,4.25l-.31-.6s-3.62,2.74-3.91,6.23l-.4-.47a46.72,46.72,0,0,0-.64,7.32l-.27-.39S609.59,630.51,616.38,635.68Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":39}),React.createElement("path",{"d":"M616.38,635.68s9.92,3.37,14.5.06l-.66-.11s4.56-3.53,5.68-7.16l-.41.07a20.46,20.46,0,0,0,3.09-8.69l-.42.07s1.4-3.24.89-11.78c0,0-1.08-4.14.31-6.09l-.1-.63a10.48,10.48,0,0,1-6.55,1.69l-.1-.63s-6.2,1.21-7.31,2.25l-.07-.43s-5.2,2.13-6.35,4.25l-.31-.6s-3.62,2.74-3.91,6.23l-.4-.47a46.72,46.72,0,0,0-.64,7.32l-.27-.39S609.59,630.51,616.38,635.68Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":40}),React.createElement("path",{"d":"M616.07,634.83s9.26,3.11,13.56,0l-.61-.1s4.26-3.27,5.32-6.63l-.39.06a18.81,18.81,0,0,0,2.9-8l-.38.06s1.31-3,.85-10.9c0,0-1-3.83.3-5.63l-.1-.59a9.85,9.85,0,0,1-6.13,1.58l-.09-.58s-5.8,1.12-6.84,2.08l-.07-.38s-4.86,2-5.95,3.94l-.28-.56s-3.39,2.54-3.67,5.77l-.37-.44a42.48,42.48,0,0,0-.61,6.78l-.26-.36S609.72,630.06,616.07,634.83Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":41}),React.createElement("path",{"d":"M633.9,607.86a74.55,74.55,0,0,0-12.56,14.5c-3-5.06,3.22-13,3.22-13-6.3,6.16-4.07,12.22-3.51,13.47a41.45,41.45,0,0,0-3.21,6.12c-3-2-.82-10.61-.82-10.61-2.67,7-.24,10.1.68,10.95a26.82,26.82,0,0,0-1.63,5.55s1-2.35,2.87-5.8c1.7.59,7.51,2,13-4.26,0,0-7.62,6.63-12.82,3.86,1-1.9,2.26-4.11,3.69-6.44,1.88.1,7.74-.24,11.31-7.64,0,0-5.39,8.23-11.07,7.25A73.54,73.54,0,0,1,633.9,607.86Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":42}),React.createElement("path",{"d":"M614.42,635.19s-10.34-1.68-14.31,2.35h.67s-3.9,4.24-4.41,8l.4-.13a20.46,20.46,0,0,0-1.61,9.08l.4-.14s-.84,3.43,1.08,11.77c0,0,1.76,3.9.71,6l.2.6a10.48,10.48,0,0,1,6.18-2.75l.2.6s5.92-2.22,6.84-3.43l.14.41s4.77-3,5.56-5.25l.4.54s3.11-3.29,2.82-6.79l.47.4a46.16,46.16,0,0,0-.58-7.32l.33.33S622,639.16,614.42,635.19Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":43}),React.createElement("path",{"d":"M614.42,635.09s-10.34-1.68-14.31,2.35h.67s-3.9,4.23-4.41,8l.4-.13a20.44,20.44,0,0,0-1.61,9.07l.4-.13s-.84,3.43,1.08,11.76c0,0,1.76,3.9.71,6l.2.61a10.46,10.46,0,0,1,6.18-2.76l.2.61s5.92-2.22,6.84-3.43l.14.4s4.77-3,5.56-5.24l.4.54s3.11-3.3,2.82-6.79l.47.4a46.34,46.34,0,0,0-.58-7.33l.33.34S622,639.06,614.42,635.09Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":44}),React.createElement("path",{"d":"M614.87,636s-9.65-1.52-13.38,2.23h.62s-3.66,3.93-4.14,7.42l.37-.13a19,19,0,0,0-1.53,8.42l.38-.13s-.8,3.18,1,10.89c0,0,1.63,3.61.64,5.61l.19.56a9.85,9.85,0,0,1,5.78-2.58l.19.56s5.53-2.07,6.4-3.19l.13.37s4.47-2.76,5.21-4.88l.38.5s2.91-3.06,2.65-6.3l.44.38a43.41,43.41,0,0,0-.52-6.79l.31.31S621.92,639.62,614.87,636Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":45}),React.createElement("path",{"d":"M601.77,665.53a74.32,74.32,0,0,0,10-16.38c3.85,4.48-1,13.36-1,13.36,5.19-7.12,2-12.73,1.22-13.86a42.4,42.4,0,0,0,2.15-6.57c3.3,1.5,2.57,10.33,2.57,10.33,1.47-7.38-1.44-10-2.49-10.69a27,27,0,0,0,.69-5.75s-.64,2.49-1.87,6.2c-1.77-.3-7.73-.7-12.14,6.37,0,0,6.41-7.81,12-5.94-.69,2-1.54,4.43-2.57,7-1.87.22-7.59,1.53-9.88,9.41,0,0,4-9,9.71-9A73.34,73.34,0,0,1,601.77,665.53Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":46}),React.createElement("path",{"d":"M788.28,552.22A450.45,450.45,0,0,1,778.76,611c-2.2,9.38-4.62,18.06-7.19,26.1q-1,3-2,6-2.22,6.51-4.57,12.44a152.52,152.52,0,0,1-108.54,92.74c-95.86,21.44-161.63-20-161.63-20-41.11-25.74-60.7-60.73-69.58-92.73-.48-1.75-.94-3.48-1.35-5.21-1.05-4.27-1.91-8.46-2.61-12.56-6.25-36.57,0-65.47,0-65.47C549.65,609.25,788.28,552.22,788.28,552.22Z","transform":"translate(-46.94 -75.49)","fill":"#a1c4f5","opacity":"0.7","key":47}),React.createElement("path",{"d":"M771.57,637.09q-3.14,9.84-6.54,18.39a152.52,152.52,0,0,1-108.54,92.74c-95.86,21.44-161.63-20-161.63-20-43.35-27.14-62.77-64.57-70.93-97.93C454.43,641.41,609.16,692,771.57,637.09Z","transform":"translate(-46.94 -75.49)","fill":"#fcc329","opacity":"0.5","key":48}),React.createElement("path",{"d":"M805.94,597.35a42.39,42.39,0,0,0-26.79,9.3q-.71,3.29-1.46,6.47c-2.2,9.38-4.62,18.07-7.19,26.1q-1,3-2,6l-.34,1c5.6,14,20.38,24,37.75,24,22.17,0,40.14-16.3,40.14-36.4S828.11,597.35,805.94,597.35Zm0,63.08c-16.26,0-29.44-11.95-29.44-26.69s13.18-26.69,29.44-26.69,29.44,12,29.44,26.69S822.2,660.43,805.94,660.43Z","transform":"translate(-46.94 -75.49)","fill":"#a1c4f5","key":49}),React.createElement("path",{"d":"M466,515.88a9.69,9.69,0,0,1-.71-2c-.08-.79.22-1.83-.47-2.2-.39-.21-.93,0-1.27-.33a1.54,1.54,0,0,1-.38-.87,3,3,0,0,0-2.78-2.17c.75-2,3.43-2.48,4.61-4.23.6-.87.41-2.48-.64-2.49a1.92,1.92,0,0,0-.71.19l-3.91,1.61a20.07,20.07,0,0,0-2.21,1,17.3,17.3,0,0,0-5.2,5.23,22.8,22.8,0,0,0-3.23,5.88,13.3,13.3,0,0,0-.69,4c0,.14,0,.28,0,.41-.63.11-1.15.39-1.82.52-.51,1.34-1,2.68-1.52,4a5,5,0,0,1-1,1.83,7.92,7.92,0,0,1-1.07.84,6.21,6.21,0,0,0-2.13,5.41,5.81,5.81,0,0,0-3.42,7.16,6.83,6.83,0,0,0-5,4.42,3.22,3.22,0,0,1-.65,1.37,2.62,2.62,0,0,1-1.74.54c-1.71.11-3.21,1.46-4.76.73a9.64,9.64,0,0,0-5.65-.8,4.11,4.11,0,0,1-1.21.11,3,3,0,0,1-1-.35,8.16,8.16,0,0,0-2.25-.88,2.09,2.09,0,0,0-2.12.82c-.55-.59-.87-1.36-1.37-2a2.17,2.17,0,0,0-2.06-1c.52-.46,0-1.38-.68-1.55a8.41,8.41,0,0,0-2.06.08c-1.79,0-3.17-1.65-4.9-2.08s-3.73.08-4.55-1.35c-.27-.46-.34-1.07-.71-1.41a2.7,2.7,0,0,0-.52-1.06,3.44,3.44,0,0,0-2.76-.82,11,11,0,0,0-3.2.55,3.59,3.59,0,0,0-.11-.41,8.09,8.09,0,0,0-3.55-4.36,14.68,14.68,0,0,0-4.2-1.71c0-.13,0-.26,0-.39a16.52,16.52,0,0,1,.85-5.45c.06-.19.13-.38.2-.57a19.51,19.51,0,0,0,8.77-32.72,6.05,6.05,0,0,0-.15-1.17,5.78,5.78,0,0,0-1.18-2.28,7.18,7.18,0,0,0-4.07-3.71c-.51-.25-1.05-.48-1.62-.74-2.84-1.28-5.58-3.16-8.8-3.15-2.94,0-5.76,1.62-8.66,1.56h-.44l-.26,0c-.82-.1-1.79-.29-2.33.34a3.77,3.77,0,0,0-.41.8,1.82,1.82,0,0,1-.15.27h0a2.59,2.59,0,0,1-.37.5h0c-.93,1-2.51,1.49-3.81,2.16a11.65,11.65,0,0,0-5.62,7.78,24.58,24.58,0,0,0,.08,9.85,8.12,8.12,0,0,0,2.08,4.5h0l0,0s-9.8,7-8,8c1,.53,5-2,8.53-4.49,0,.15.07.3.11.45a32.7,32.7,0,0,0,1.6,4.58c.74,1.75,1.78,3.64,3.61,4.17a4.3,4.3,0,0,0,1.24.14l.32,0a28.9,28.9,0,0,1-.84,8,4.86,4.86,0,0,0-3,.83,2.48,2.48,0,0,1-1.21.65,2.16,2.16,0,0,1-1.26-.62,7.11,7.11,0,0,0-8.9.47c-3.55,3.34-3.15,9.88-7.31,12.42-1.14.7-2.61,1.07-3.28,2.24a7.75,7.75,0,0,1-.56,1.07,3,3,0,0,1-1,.72,19.12,19.12,0,0,0-3.43,2,5,5,0,0,0-2,3.33,6.33,6.33,0,0,0,.61,2.79,26.38,26.38,0,0,0,2.28,4.38,4.63,4.63,0,0,0-.92,2.16c-.3,2.06.69,4.09.8,6.17a23.13,23.13,0,0,1-.81,5.39c-1.29,7,1.18,14.07,3.7,20.71a10.73,10.73,0,0,1,.88,3.41c.06,2.17-1.18,4.15-1.52,6.29-.71,4.51,2.59,8.74,2.66,13.3,0,2.1-.63,4.23-.11,6.27a22.88,22.88,0,0,0,1.79,3.78c1.06,2.24,1.35,4.79,2.36,7a16.82,16.82,0,0,0,5.22,6.22c1.27,4-.54,8.88,0,13.16.69-.27,1.39-.52,2.08-.77a30.17,30.17,0,0,0,4.63,18.21,42.56,42.56,0,0,1,3.32,5.36,25.13,25.13,0,0,1,1.3,4.25q1.84,7.67,3.68,15.33c1,4.14,2,8.36,1.7,12.61-.21,3-.95,6.29.86,8.63a6,6,0,0,1,1.1,1.51,3.83,3.83,0,0,1,0,2,133.5,133.5,0,0,0-1.82,15c-.41.55-.82,1.1-1.19,1.66-3,4.4-4.47,9.68-5.64,14.89a179.53,179.53,0,0,0-3.78,31.11,21,21,0,0,0-3.86,4.7c-1.58,2.93-1.78,6.37-1.95,9.7a3.45,3.45,0,0,0,.18,1.6,3.27,3.27,0,0,0,1.66,1.39l.91.43c-.2.73-.37,1.48-.53,2.23-1.15-1.3-3.22-3.37-3.57-1.85a74.53,74.53,0,0,0-1.87,15.39,1.3,1.3,0,0,0,1.39,1.56A85.79,85.79,0,0,0,362,817.26c4.14,0,8.28-.34,12.41-.65l4.22-.33a92,92,0,0,0,12.95-1.61,10.73,10.73,0,0,0,5.21-2.3c1.39-1.31,2.1-3.55,1.13-5.21v0c-1.18-2-3.93-2.16-6.24-2.48a20.35,20.35,0,0,1-6.53-2.08c-.47-.24-.91-.5-1.36-.76l.35-.1c2-.67,3.55-2.19,5.42-3.12a21.92,21.92,0,0,1,7-1.61,15.25,15.25,0,0,0,6.84-2.09,6,6,0,0,0,2.75-5.78c0-.15-.07-.31-.11-.46-.74-2.37-3.3-3.62-5.7-4.25s-5-.94-6.92-2.48l-.28-.23c-.16-.13-.33-.27-.51-.4a4,4,0,0,0,.57-2.39,12.08,12.08,0,0,0-1.39-3.69c-1-2.38-1.1-5-1.37-7.61-.69-6.47-2.68-12.72-4.18-19.05q-.25-1.08-.48-2.16a46.21,46.21,0,0,1,5.32-8.54,27.77,27.77,0,0,0,5.11-10.09c.31-1.13.54-2.28.77-3.42q4-19.85,7.53-39.78a32.8,32.8,0,0,0,.67-5.75,17.29,17.29,0,0,0,1-5.44c.69-2.69,1.39-5.51.83-7.28-.4-1.24-.6-5.5-.82-9.59a36.72,36.72,0,0,0-.4-6.54c-.06-.37-.13-.74-.22-1.11a3.58,3.58,0,0,0-.13-.54,18.79,18.79,0,0,0-1.29-3.57,14.61,14.61,0,0,0-1-2,9,9,0,0,0-.74-1.09c1.53.07,3.05.2,4.56.42.37.06.83.09,1.05-.22a1,1,0,0,0,.14-.55,9.31,9.31,0,0,0-1.19-5c-.58-1-1.4-2-1.37-3.25a4.76,4.76,0,0,1,.4-1.61l2-5.46c1.72-4.6.9-9.95,1.79-14.79a86,86,0,0,0,1.34-11.44c.17-3.28.06-6.83-1.91-9.45a11.43,11.43,0,0,1-1.48-2.08,6.36,6.36,0,0,1-.36-2.49q0-7.71.31-15.4a151.08,151.08,0,0,0,25.7-2.91,17.22,17.22,0,0,0,2.92-.78,15.8,15.8,0,0,0,3-1.86,37.71,37.71,0,0,0,8-7A23.53,23.53,0,0,0,452,546.18c2.09-1.93,3.19-4.68,4.24-7.32a11.21,11.21,0,0,0,1-3.56c.06-1.26-.77-2.58-.54-3.82a10.08,10.08,0,0,1,3.07-5.55,2.07,2.07,0,0,0,.73-1,1.59,1.59,0,0,0-.17-1,.6.6,0,0,1-.06-.11l.59-.39c.68-.48,1.33-1,2-1.54a12.14,12.14,0,0,0,2.56-2.6A4.21,4.21,0,0,0,466,515.88Zm-94,281a4.36,4.36,0,0,0-.52,0,6.47,6.47,0,0,0-1.86.53l-.14.07q1.22-2.62,2.25-5.32l.24-.64-.09,1.2A14.86,14.86,0,0,0,372,796.85Z","transform":"translate(-46.94 -75.49)","fill":"url(#f1cd73ea-bab0-41a4-9ae7-11b65985e33b-488)","key":50}),React.createElement("path",{"d":"M382.45,529.72c.07,2.84,1,5.6,1.19,8.44-8.38.42-16.65-3.65-24.95-2.4,2.32-1.5,3.56-4.21,4.29-6.87a28.71,28.71,0,0,0,.82-10.56,3.55,3.55,0,0,0-.11-.59c-.3-1.39-1.1-3.36-.89-4.45.28-1.45,1.65-1.17,2.88-1.08a108.34,108.34,0,0,1,11.19,1.44c1,.17,10.36,2.52,10.5,2.27a44.09,44.09,0,0,0-4.07,8.38A16.35,16.35,0,0,0,382.45,529.72Z","transform":"translate(-46.94 -75.49)","fill":"#a1616a","key":51}),React.createElement("path",{"d":"M465.36,520.92a12.28,12.28,0,0,1-2.56,2.58c-.64.52-1.29,1-2,1.53a8.51,8.51,0,0,1-4.2,1.71c-2,.13-6.23-1-7.47-2.75a5,5,0,0,1-.72-2.86,13.23,13.23,0,0,1,.69-4,22.63,22.63,0,0,1,3.23-5.85,17.27,17.27,0,0,1,5.2-5.19,20.07,20.07,0,0,1,2.21-1l3.91-1.6a1.92,1.92,0,0,1,.71-.19c1.05,0,1.24,1.61.64,2.48-1.18,1.74-3.86,2.22-4.61,4.2a3,3,0,0,1,2.78,2.16,1.54,1.54,0,0,0,.38.87c.34.28.88.12,1.27.33.69.37.39,1.4.47,2.18a9.69,9.69,0,0,0,.71,2A4.18,4.18,0,0,1,465.36,520.92Z","transform":"translate(-46.94 -75.49)","fill":"#a1616a","key":52}),React.createElement("path",{"d":"M349.8,806.32a3,3,0,0,1,2.6-.39A95.45,95.45,0,0,0,367,807.11c.61-3-1.17-5.9-1.74-8.9a8.1,8.1,0,0,0-.58-2.25c-.69-1.33-2.24-1.93-3.7-2.24-2.64-.56-6.76-1.54-8.23,1.13C351,798.05,350.44,802.77,349.8,806.32Z","transform":"translate(-46.94 -75.49)","fill":"#65617d","key":53}),React.createElement("path",{"d":"M403.37,795a15.5,15.5,0,0,1-6.84,2.08,21.9,21.9,0,0,0-7,1.6c-1.87.92-3.44,2.44-5.42,3.1a11.25,11.25,0,0,1-5.62.09c-2.22-.42-4.59-1.23-5.79-3.15-1.07-1.7-.95-3.87-.81-5.87.18-2.27.34-4.54.51-6.82a3.18,3.18,0,0,1,.42-1.64c1.61-2.34,5.51,1,7.6,1a14.71,14.71,0,0,0,9.26-4,2.52,2.52,0,0,1,.72-.54c.94-.43,1.88.35,2.72,1l.28.23c1.94,1.53,4.54,1.84,6.92,2.46s5,1.87,5.7,4.23c0,.15.08.3.11.45A6,6,0,0,1,403.37,795Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":54}),React.createElement("path",{"d":"M403.37,795a15.5,15.5,0,0,1-6.84,2.08,21.9,21.9,0,0,0-7,1.6c-1.87.92-3.44,2.44-5.42,3.1a11.25,11.25,0,0,1-5.62.09c-2.22-.42-4.59-1.23-5.79-3.15-1.07-1.7-.95-3.87-.81-5.87.18-2.27.34-4.54.51-6.82a3.18,3.18,0,0,1,.42-1.64c1.61-2.34,5.51,1,7.6,1a14.71,14.71,0,0,0,9.26-4,2.52,2.52,0,0,1,.72-.54c.94-.43,1.88.35,2.72,1l.28.23c1.94,1.53,4.54,1.84,6.92,2.46s5,1.87,5.7,4.23c0,.15.08.3.11.45A6,6,0,0,1,403.37,795Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":55}),React.createElement("path",{"d":"M403.37,795.78a15.37,15.37,0,0,1-6.84,2.08,22.17,22.17,0,0,0-7,1.6c-1.87.93-3.44,2.44-5.42,3.1a11.25,11.25,0,0,1-5.62.09,9.31,9.31,0,0,1-5.79-3.91c-1.07-1.7-.95-3.87-.81-5.87.18-2.27.34-4.54.51-6.82a3.18,3.18,0,0,1,.42-1.64c1.61-2.34,5.51,1,7.6,1a14.71,14.71,0,0,0,9.26-4,2.52,2.52,0,0,1,.72-.54c.94-.43,1.88.35,2.72,1a19.18,19.18,0,0,1-2.32,4.8,10,10,0,0,1-7.3,4.57c-1.48.11-3-.19-4.43.19s-2.76,1.85-2.25,3.24,2.24,1.65,3.69,1.73a16.38,16.38,0,0,0,6-.42c1.18-.39,2.25-1,3.39-1.51,4.86-2,11-.89,15-4.29a10.15,10.15,0,0,1,1.22-.94C407.17,791.46,405.23,794.51,403.37,795.78Z","transform":"translate(-46.94 -75.49)","fill":"#e8eaf2","key":56}),React.createElement("path",{"d":"M403.37,795.78a15.37,15.37,0,0,1-6.84,2.08,22.17,22.17,0,0,0-7,1.6c-1.87.93-3.44,2.44-5.42,3.1a11.25,11.25,0,0,1-5.62.09,9.31,9.31,0,0,1-5.79-3.91c-1.07-1.7-.95-3.87-.81-5.87.18-2.27.34-4.54.51-6.82a3.18,3.18,0,0,1,.42-1.64c1.61-2.34,5.51,1,7.6,1a14.71,14.71,0,0,0,9.26-4,2.52,2.52,0,0,1,.72-.54c.94-.43,1.88.35,2.72,1a19.18,19.18,0,0,1-2.32,4.8,10,10,0,0,1-7.3,4.57c-1.48.11-3-.19-4.43.19s-2.76,1.85-2.25,3.24,2.24,1.65,3.69,1.73a16.38,16.38,0,0,0,6-.42c1.18-.39,2.25-1,3.39-1.51,4.86-2,11-.89,15-4.29a10.15,10.15,0,0,1,1.22-.94C407.17,791.46,405.23,794.51,403.37,795.78Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":57}),React.createElement("path",{"d":"M350.7,647.25a29.83,29.83,0,0,0,4.1,22,41.53,41.53,0,0,1,3.32,5.33,24.64,24.64,0,0,1,1.3,4.23l3.68,15.25c1,4.12,2,8.31,1.7,12.54-.21,2.94-.95,6.25.86,8.58a6,6,0,0,1,1.1,1.51,3.79,3.79,0,0,1,0,2c-1.87,11.07-3.25,22.65.12,33.36,3.05,9.71,3.23,20.47,5.82,30.31a6.77,6.77,0,0,0,1.61,3.36,5.34,5.34,0,0,0,2.42,1.15c3.82.91,7.86-.16,11.43-1.81,2.51-1.16,5.2-3.2,5-5.95a12.07,12.07,0,0,0-1.39-3.67c-1-2.37-1.1-5-1.37-7.58-.69-6.43-2.68-12.64-4.18-18.94S383.72,736,385,729.7a168.5,168.5,0,0,1,12.37-38.05,4.61,4.61,0,0,1,1.13-1.7,12.27,12.27,0,0,0,1.61-1.09,4.86,4.86,0,0,0,.73-2c.56-2,2.21-3.49,3.32-5.25,2.81-4.46,1.92-10.17,1.82-15.43s.63-10.29-.21-15.34-3.73-10.21-8.6-11.79a18.56,18.56,0,0,0-7.54-.36C376.24,640,363.25,642.45,350.7,647.25Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":58}),React.createElement("path",{"d":"M350.7,647.25a29.83,29.83,0,0,0,4.1,22,41.53,41.53,0,0,1,3.32,5.33,24.64,24.64,0,0,1,1.3,4.23l3.68,15.25c1,4.12,2,8.31,1.7,12.54-.21,2.94-.95,6.25.86,8.58a6,6,0,0,1,1.1,1.51,3.79,3.79,0,0,1,0,2c-1.87,11.07-3.25,22.65.12,33.36,3.05,9.71,3.23,20.47,5.82,30.31a6.77,6.77,0,0,0,1.61,3.36,5.34,5.34,0,0,0,2.42,1.15c3.82.91,7.86-.16,11.43-1.81,2.51-1.16,5.2-3.2,5-5.95a12.07,12.07,0,0,0-1.39-3.67c-1-2.37-1.1-5-1.37-7.58-.69-6.43-2.68-12.64-4.18-18.94S383.72,736,385,729.7a168.5,168.5,0,0,1,12.37-38.05,4.61,4.61,0,0,1,1.13-1.7,12.27,12.27,0,0,0,1.61-1.09,4.86,4.86,0,0,0,.73-2c.56-2,2.21-3.49,3.32-5.25,2.81-4.46,1.92-10.17,1.82-15.43s.63-10.29-.21-15.34-3.73-10.21-8.6-11.79a18.56,18.56,0,0,0-7.54-.36C376.24,640,363.25,642.45,350.7,647.25Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":59}),React.createElement("path",{"d":"M405.16,679.35a32.07,32.07,0,0,1-.68,5.92Q401,705.09,397,724.83c-.23,1.14-.46,2.28-.77,3.41a27.71,27.71,0,0,1-5.11,10C380,752.12,379,772.23,373,788.93c-.41,1.13-.81,2.26-1.25,3.38A85.48,85.48,0,0,1,368,800.6a2.38,2.38,0,0,1-.77,1,2.27,2.27,0,0,1-1.21.24,35.24,35.24,0,0,1-15.66-3.56,3.25,3.25,0,0,1-1.66-1.38,3.42,3.42,0,0,1-.18-1.59c.17-3.31.37-6.74,1.95-9.65a20.63,20.63,0,0,1,3.86-4.68,177.84,177.84,0,0,1,3.78-31c1.17-5.18,2.62-10.43,5.64-14.81,2.22-3.24,5.4-6.44,5-10.34-.17-1.72-.89-3.86.51-4.86.61-.44,1.51-.5,1.92-1.13a2,2,0,0,0,.27-1,24,24,0,0,0-.49-8,42.85,42.85,0,0,1-1.2-5.22,6.63,6.63,0,0,1,1.32-5c.07-3.56,0-7.26,0-10.82a19.76,19.76,0,0,0-.5-6c-.27-.94-.68-1.83-.89-2.78-.74-3.43,1.12-7.53-1.1-10.25-.92-1.12-2.34-1.69-3.55-2.5a13,13,0,0,1-4.88-7,38.71,38.71,0,0,1-1.39-8.59,9.54,9.54,0,0,1,0-1.85,3.76,3.76,0,0,1,.25-.93c.69-1.55,2.54-2.15,4.19-2.55a135.5,135.5,0,0,1,32-3.73c4-2.71,6.22-1.75,7.91,1.13a29.53,29.53,0,0,1,2.26,5.5c.77,2.33.81,15.37,1.57,17.71C407.94,669.94,405.12,676.15,405.16,679.35Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":60}),React.createElement("path",{"d":"M333.14,560.65c-.3,2.05.69,4.07.8,6.14a22.8,22.8,0,0,1-.81,5.35c-1.29,7,1.18,14,3.7,20.61a10.68,10.68,0,0,1,.88,3.39c.06,2.16-1.18,4.13-1.52,6.26-.71,4.48,2.59,8.69,2.66,13.23,0,2.09-.63,4.21-.11,6.23a22.78,22.78,0,0,0,1.79,3.77c1.06,2.23,1.35,4.76,2.36,7,1.82,4.07,5.75,6.73,9.48,9.17,2.13-.7,4.42-1.55,5.59-3.46a8.41,8.41,0,0,0,1-3,78.86,78.86,0,0,0,.75-14.08,86.19,86.19,0,0,0-.64-12.13c-.75-5.11-2.41-10-3.6-15.07-1.51-6.35-2.28-12.9-4.61-19a64.77,64.77,0,0,0-8.63-14.75c-1.28-1.75-2.3-4.26-4.79-3.86A5.22,5.22,0,0,0,333.14,560.65Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":61}),React.createElement("path",{"d":"M333.14,560.65c-.3,2.05.69,4.07.8,6.14a22.8,22.8,0,0,1-.81,5.35c-1.29,7,1.18,14,3.7,20.61a10.68,10.68,0,0,1,.88,3.39c.06,2.16-1.18,4.13-1.52,6.26-.71,4.48,2.59,8.69,2.66,13.23,0,2.09-.63,4.21-.11,6.23a22.78,22.78,0,0,0,1.79,3.77c1.06,2.23,1.35,4.76,2.36,7,1.82,4.07,5.75,6.73,9.48,9.17,2.13-.7,4.42-1.55,5.59-3.46a8.41,8.41,0,0,0,1-3,78.86,78.86,0,0,0,.75-14.08,86.19,86.19,0,0,0-.64-12.13c-.75-5.11-2.41-10-3.6-15.07-1.51-6.35-2.28-12.9-4.61-19a64.77,64.77,0,0,0-8.63-14.75c-1.28-1.75-2.3-4.26-4.79-3.86A5.22,5.22,0,0,0,333.14,560.65Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":62}),React.createElement("path",{"d":"M387.37,515.92a44.09,44.09,0,0,0-4.07,8.38,19.55,19.55,0,0,1-4.62.56c-6,0-10.32-3.44-13.87-7.78-.31-1.4-2.22-2.7-2-3.79.28-1.45,1.65-1.17,2.88-1.08a108.34,108.34,0,0,1,11.19,1.44C377.83,513.82,387.23,516.17,387.37,515.92Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":63}),React.createElement("circle",{"cx":"331.74","cy":"429.49","r":"19.36","fill":"#a1616a","key":64}),React.createElement("path",{"d":"M403.14,643.68a99.71,99.71,0,0,0-10.08.07,33.76,33.76,0,0,0-6.27.64c-2.54.58-4.92,1.74-7.42,2.46-4,1.17-8.26,1.22-12.42,1.63a70.11,70.11,0,0,0-8.13,1.28,3.76,3.76,0,0,1,.25-.93c.69-1.55,2.54-2.15,4.19-2.55a135.5,135.5,0,0,1,32-3.73C399.21,639.84,401.45,640.8,403.14,643.68Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":65}),React.createElement("path",{"d":"M390,536.66c-.84,1-2,2.06-3.23,1.74a4.21,4.21,0,0,1-1.25-.67c-2.24-1.44-5-1.78-7.6-2.17A111.54,111.54,0,0,1,362.23,532a16.16,16.16,0,0,0-4.63-.94c-3.28,0-6.19,2.2-8.25,4.76s-3.51,5.55-5.53,8.13c-1.44,1.85-3.15,3.47-4.49,5.38-3.39,4.84-4.12,11.14-3.24,17s3.2,11.34,5.51,16.77a58.16,58.16,0,0,0,4.51,9.08,21.63,21.63,0,0,0,1.74,13.49,13.26,13.26,0,0,1,1.76,4,10,10,0,0,1-.13,2.94l-1,7c-.3,2.13-.6,4.26-1,6.38-.71,3.88-1.68,8.1.12,11.61,2.15,4.2-.11,9.59.46,14.28A71.65,71.65,0,0,1,367,647.44c4.16-.41,8.4-.46,12.42-1.63,2.5-.73,4.88-1.88,7.42-2.46a33.76,33.76,0,0,1,6.27-.64A73.31,73.31,0,0,1,407,643c.37.05.83.08,1.05-.22a1,1,0,0,0,.14-.55,9.24,9.24,0,0,0-1.19-4.93c-.58-1-1.4-2-1.37-3.23a4.77,4.77,0,0,1,.4-1.6l2-5.43c1.72-4.58.9-9.9,1.79-14.71A85.33,85.33,0,0,0,411.15,601c.17-3.27.06-6.8-1.91-9.41a11,11,0,0,1-1.48-2.07,6.23,6.23,0,0,1-.36-2.47q-.06-9.81.54-19.59c-1.72-3.08-3.51-6.24-5.23-9.32-2-3.59-4-7.26-4.83-11.29-.53-2.67-.52-5.41-.9-8.1a2.72,2.72,0,0,0-3.44-2.72A12.57,12.57,0,0,0,390,536.66Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":66}),React.createElement("path",{"d":"M460.83,525a8.51,8.51,0,0,1-4.2,1.71c-2,.13-6.23-1-7.47-2.75a5,5,0,0,1-.72-2.86,3.29,3.29,0,0,1,.84-.16,21.69,21.69,0,0,1,6.49.26,7.31,7.31,0,0,1,5.05,3.78S460.82,525,460.83,525Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":67}),React.createElement("path",{"d":"M396.42,566.9a13.69,13.69,0,0,0,4.07,3.85,13,13,0,0,0,6.36,1,151.09,151.09,0,0,0,26.56-2.91,16.36,16.36,0,0,0,2.92-.79,15.2,15.2,0,0,0,3-1.84,37.8,37.8,0,0,0,8-7A23.32,23.32,0,0,0,452,547.59c2.09-1.92,3.19-4.65,4.24-7.28a11,11,0,0,0,1-3.54c.06-1.25-.77-2.56-.54-3.79a10.05,10.05,0,0,1,3.07-5.53,2.09,2.09,0,0,0,.73-1,1.59,1.59,0,0,0-.17-1,7.34,7.34,0,0,0-5.05-3.78,21.75,21.75,0,0,0-6.5-.26,16.17,16.17,0,0,0-2.12.56l-1.52,4a5,5,0,0,1-1,1.82,8.8,8.8,0,0,1-1.07.84,6.14,6.14,0,0,0-2.13,5.37,5.78,5.78,0,0,0-3.42,7.13,6.83,6.83,0,0,0-5,4.39,3.11,3.11,0,0,1-.65,1.37,2.62,2.62,0,0,1-1.74.54c-1.71.1-3.21,1.45-4.76.72a9.72,9.72,0,0,0-5.65-.79,4.11,4.11,0,0,1-1.21.11,3.2,3.2,0,0,1-1-.35,8.16,8.16,0,0,0-2.25-.88,2.09,2.09,0,0,0-2.12.82c-.55-.59-.87-1.36-1.37-2a2.17,2.17,0,0,0-2.06-1c.52-.46,0-1.37-.68-1.54a8.93,8.93,0,0,0-2.06.08c-1.79,0-3.17-1.64-4.9-2.06s-3.73.07-4.55-1.35c-.29-.51-.35-1.2-.85-1.51a1.65,1.65,0,0,0-1.08-.12,10.35,10.35,0,0,0-3.26,1c-1.68,6.56-.8,13.37.48,20A17.65,17.65,0,0,0,396.42,566.9Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":68}),React.createElement("path",{"d":"M396.37,590.4,388,607.21c.9-1.56,2.8-2.16,4.3-3.15a11.44,11.44,0,0,0,4.11-5.53,33.68,33.68,0,0,0,1.58-6.81c.17-1.07.52-2.56,0-3.53C397.07,588.39,396.76,589.61,396.37,590.4Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":69}),React.createElement("path",{"d":"M372.38,604.67a74.41,74.41,0,0,1-6.26,4.88c-4.83,3.85-8.28,9.13-11.64,14.32a22.36,22.36,0,0,0-2.38,4.34c.39.33,1,0,1.37-.36L360,622.1a15.18,15.18,0,0,0,2.18-2.21c1.14-1.53,1.64-3.44,2.67-5a20.09,20.09,0,0,1,4-4.05c1.5-1.29,8.42-7.13,6.73-9.4C374.37,602,373.37,603.69,372.38,604.67Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":70}),React.createElement("path",{"d":"M386.68,531.81a19.2,19.2,0,0,0-6.93-2.28,14.56,14.56,0,0,0-4.41-.32c-1.36.17-2.67.69-4,.77-1.92.11-3.77-.67-5.63-1.18s-4-.7-5.57.42a2.39,2.39,0,0,1-1.21.64,2.08,2.08,0,0,1-1.26-.61,7.14,7.14,0,0,0-8.9.47c-3.55,3.33-3.15,9.83-7.31,12.35-1.14.7-2.61,1.07-3.28,2.23a8.36,8.36,0,0,1-.56,1.07,3,3,0,0,1-1,.71,19.69,19.69,0,0,0-3.43,2,5,5,0,0,0-2,3.31,6.33,6.33,0,0,0,.61,2.79,26.13,26.13,0,0,0,25.37,16.22,4.1,4.1,0,0,0,2.66-.83,5.11,5.11,0,0,0,.93-1.54c1.95-4.1,5.63-7.12,8-11,1.39-2.33,2.28-4.92,3.73-7.21,2.19-3.47,5.53-6,8.79-8.52,1.84-1.4,3.89-2.88,6.21-2.78,2.06.09,3.56.2,2.8-2.33A8,8,0,0,0,386.68,531.81Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":71}),React.createElement("path",{"d":"M386.68,531.81a19.2,19.2,0,0,0-6.93-2.28,14.56,14.56,0,0,0-4.41-.32c-1.36.17-2.67.69-4,.77-1.92.11-3.77-.67-5.63-1.18s-4-.7-5.57.42a2.39,2.39,0,0,1-1.21.64,2.08,2.08,0,0,1-1.26-.61,7.14,7.14,0,0,0-8.9.47c-3.55,3.33-3.15,9.83-7.31,12.35-1.14.7-2.61,1.07-3.28,2.23a8.36,8.36,0,0,1-.56,1.07,3,3,0,0,1-1,.71,19.69,19.69,0,0,0-3.43,2,5,5,0,0,0-2,3.31,6.33,6.33,0,0,0,.61,2.79,26.13,26.13,0,0,0,25.37,16.22,4.1,4.1,0,0,0,2.66-.83,5.11,5.11,0,0,0,.93-1.54c1.95-4.1,5.63-7.12,8-11,1.39-2.33,2.28-4.92,3.73-7.21,2.19-3.47,5.53-6,8.79-8.52,1.84-1.4,3.89-2.88,6.21-2.78,2.06.09,3.56.2,2.8-2.33A8,8,0,0,0,386.68,531.81Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":72}),React.createElement("path",{"d":"M396.76,812.4a10.8,10.8,0,0,1-5.21,2.29,95,95,0,0,1-12.95,1.6l-4.22.32c-4.13.31-8.27.63-12.41.65a86.72,86.72,0,0,1-15.26-1.32,1.7,1.7,0,0,1-1.21-.59,1.64,1.64,0,0,1-.18-1,73.87,73.87,0,0,1,1.87-15.32c.48-2.06,4.18,2.57,4.35,2.76a4.24,4.24,0,0,0,3.36,1.79c4.26.23,9-2.36,12.42-4.66a16,16,0,0,1,2.3-1.43,6.81,6.81,0,0,1,1.86-.53,11.28,11.28,0,0,1,6.33,1.28c2.55,1.27,4.78,3.08,7.3,4.38a20.58,20.58,0,0,0,6.53,2.07c2.31.32,5.06.47,6.24,2.46v0C398.86,808.86,398.15,811.09,396.76,812.4Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":73}),React.createElement("path",{"d":"M396.76,813.16a10.8,10.8,0,0,1-5.21,2.29,93.5,93.5,0,0,1-12.95,1.6l-4.22.32c-4.13.32-8.27.63-12.41.65a85.78,85.78,0,0,1-15.26-1.32,1.69,1.69,0,0,1-1.21-.58,7.17,7.17,0,0,1-.95-1.73c.09-5.15,1.49-10.3,2.64-15.32.48-2.06,4.18,2.57,4.35,2.76a4.24,4.24,0,0,0,3.36,1.79c4.26.23,9-2.36,12.42-4.66a16,16,0,0,1,2.3-1.43,6.81,6.81,0,0,1,1.86-.53c-.55,3.07-5,6.77-7.21,7.9-4.59,2.27-10,1.14-15.16,1.4a2.11,2.11,0,0,0-1.08.26c-.61.41-.65,1.28-.63,2,0,1.22.2,2.65,1.26,3.27a3.49,3.49,0,0,0,1.7.35,239.9,239.9,0,0,0,37.8-1.32,20.79,20.79,0,0,0,6.16-1.37,16.23,16.23,0,0,0,3.57-2.3C399.5,808.48,398.15,811.86,396.76,813.16Z","transform":"translate(-46.94 -75.49)","fill":"#e8eaf2","key":74}),React.createElement("path",{"d":"M386.22,504.76c-.08,2,1.29,5.89-2.45,4.8-2.24-.64-2.87-3.28-5.7-2.7s-3.48,4.08-4.44,6.36a12.14,12.14,0,0,1-8.82,7.13,5.39,5.39,0,0,1-2.43,0c-1.83-.52-2.87-2.41-3.61-4.15a32,32,0,0,1-1.6-4.56,19.15,19.15,0,0,1-.58-3.34h0a13.7,13.7,0,0,1,0-2.31c.34-4.55,2.93-8.7,6.24-11.84s7.35-5.4,11.33-7.64a16.38,16.38,0,0,1,4.17-1.86,13.88,13.88,0,0,1,4.41-.18,15.36,15.36,0,0,1,5.61,1.32,8,8,0,0,1,2,1.38A6,6,0,0,1,392,490c.72,2.94-1.16,5.59-2.68,7.91C388,500,386.31,502.19,386.22,504.76Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":75}),React.createElement("path",{"d":"M449.21,547.73c-.8-2-4.16-7.6-3.19-9.51a25,25,0,0,1,2.56,4.57C449.22,544.35,448.7,546.44,449.21,547.73Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":76}),React.createElement("path",{"d":"M389.43,497.93c1.53-2.32,3.4-5,2.69-7.91a6.2,6.2,0,0,0-2.18-3.26,5.61,5.61,0,0,1,.55,1.37c.72,2.94-1.16,5.59-2.68,7.92-1.36,2.06-3,4.25-3.13,6.83-.08,2,1.29,5.89-2.46,4.8-2.23-.64-2.86-3.29-5.69-2.7s-3.48,4.07-4.44,6.36a12.19,12.19,0,0,1-8.82,7.13,5.25,5.25,0,0,1-2.43,0,3.57,3.57,0,0,1-1.14-.56,4.9,4.9,0,0,0,2.76,2.45,5.39,5.39,0,0,0,2.43,0,12.19,12.19,0,0,0,8.83-7.12c1-2.29,1.58-5.77,4.44-6.36s3.46,2.05,5.69,2.7c3.75,1.08,2.38-2.81,2.45-4.81C386.4,502.19,388.08,500,389.43,497.93Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":77}),React.createElement("path",{"d":"M390.26,494a16.54,16.54,0,0,1-1.15,1.63,18.49,18.49,0,0,1-2.64,2.74,21.72,21.72,0,0,1-1.79,1.41,29.31,29.31,0,0,1-3.62,2.16A66.85,66.85,0,0,1,369.5,506l-7.73,2.25c-.95.72-2.69,2-4.6,3.35a19.15,19.15,0,0,1-.58-3.34h0a13.7,13.7,0,0,1,0-2.31c.34-4.55,2.93-8.7,6.24-11.84s7.35-5.4,11.33-7.64a16.38,16.38,0,0,1,4.17-1.86,13.88,13.88,0,0,1,4.41-.18,15.36,15.36,0,0,1,5.61,1.32,8,8,0,0,1,2,1.38,7.6,7.6,0,0,1,1,2.1A5.92,5.92,0,0,1,390.26,494Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":78}),React.createElement("path",{"d":"M390.26,493.43a15.56,15.56,0,0,1-1.15,1.64,19,19,0,0,1-2.64,2.74c-.58.5-1.17,1-1.79,1.41a28.05,28.05,0,0,1-3.62,2.15,66.06,66.06,0,0,1-11.56,4.15l-7.73,2.25c-2.7,2-11.73,8.72-13.24,7.89-1.79-1,8-7.92,8-7.92l.45.34c-1.43-.9-2.19-3-2.51-4.8a24.33,24.33,0,0,1-.08-9.8,11.62,11.62,0,0,1,5.62-7.74c1.3-.67,2.88-1.12,3.81-2.15a2.59,2.59,0,0,0,.37-.5,1.17,1.17,0,0,0,.15-.27,3.7,3.7,0,0,1,.41-.79c.54-.62,1.51-.44,2.33-.34l.26,0a3.17,3.17,0,0,0,.44,0c2.9.06,5.72-1.55,8.66-1.55,3.22,0,6,1.86,8.8,3.13l1.62.74c2.05.95,3.59,2,4.44,4.68A5.89,5.89,0,0,1,390.26,493.43Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":79}),React.createElement("path",{"d":"M367.79,481.74a1.51,1.51,0,0,1,.18.66,1.37,1.37,0,0,1-.49,1,2.31,2.31,0,0,1-1.22.43c-.31,0-.63.07-.95.08a2.59,2.59,0,0,1-1.26-.22,1.64,1.64,0,0,1-.22-.14,2.59,2.59,0,0,0,.37-.5c.08.06.15,0,.44,0a7,7,0,0,0,1.57-.26,2,2,0,0,0,.59-.29,1.74,1.74,0,0,0,.55-.84Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":80}),React.createElement("path",{"d":"M356.73,507.66a3.68,3.68,0,0,0,1.34.5,6.1,6.1,0,0,0,1,.17,5.77,5.77,0,0,0,2.53-.71","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":81}),React.createElement("g",{"opacity":"0.1","key":82},React.createElement("path",{"d":"M808.22,660.33c.75,0,1.51.1,2.28.1,16.26,0,29.44-11.95,29.44-26.69s-13.18-26.69-29.44-26.69c-.77,0-1.53.06-2.28.11,15.19,1.06,27.16,12.54,27.16,26.58S823.41,659.27,808.22,660.33Z","transform":"translate(-46.94 -75.49)"})),React.createElement("path",{"d":"M771.57,637.09h0c2.57-8,5-16.72,7.19-26.1C754.25,594.16,685.1,582,603.63,582c-92,0-168.23,15.45-182.31,35.65.7,4.1,1.56,8.29,2.61,12.56,0,0,0,0,0,.08v-.07C454.43,641.41,609.16,692,771.57,637.09Z","transform":"translate(-46.94 -75.49)","fill":"#fcc329","opacity":"0.3","key":83}),React.createElement("path",{"d":"M471.31,751.64s-23.53-9.37-24.89-32.37","transform":"translate(-46.94 -75.49)","fill":"none","stroke":"#8BC74B","strokeMiterlimit":"10","strokeWidth":"6","key":84}),React.createElement("path",{"d":"M471.31,751.64s-23.53-9.37-24.89-32.37","transform":"translate(-46.94 -75.49)","fill":"none","stroke":"#407d3b","strokeMiterlimit":"10","strokeWidth":"6","opacity":"0.3","key":85}),React.createElement("path",{"d":"M477.2,756.34s-7.71-13.24-4.32-20.8l.35.91s3.69-7.57,8.53-10.25l0,.62a29.61,29.61,0,0,1,11.46-7l0,.62s4.2-3,16.52-4.74c0,0,6.21.34,8.57-2.23l.93,0a15.44,15.44,0,0,0-.5,9.9l.93,0s.1,9.25-1.06,11.15l.62,0s-1.5,8.09-4.19,10.37l.94.26s-2.83,6-7.72,7.44l.79.43s-6.86,2.61-10.24,3.07l.63.28S486.54,764.57,477.2,756.34Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":86}),React.createElement("path",{"d":"M477.2,756.34s-7.71-13.24-4.32-20.8l.35.91s3.69-7.57,8.53-10.25l0,.62a29.61,29.61,0,0,1,11.46-7l0,.62s4.2-3,16.52-4.74c0,0,6.21.34,8.57-2.23l.93,0a15.44,15.44,0,0,0-.5,9.9l.93,0s.1,9.25-1.06,11.15l.62,0s-1.5,8.09-4.19,10.37l.94.26s-2.83,6-7.72,7.44l.79.43s-6.86,2.61-10.24,3.07l.63.28S486.54,764.57,477.2,756.34Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":87}),React.createElement("path",{"d":"M477,756.51s-7.38-12.72-4.14-20l.33.87s3.54-7.27,8.17-9.84l0,.59a28.3,28.3,0,0,1,11-6.71l0,.59s4-2.84,15.81-4.55c0,0,5.94.34,8.21-2.14l.88,0a14.85,14.85,0,0,0-.47,9.5l.89,0s.09,8.89-1,10.72l.59,0s-1.44,7.77-4,10l.9.25s-2.71,5.75-7.39,7.15l.76.41s-6.56,2.51-9.8,3l.6.27S486,764.41,477,756.51Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":88}),React.createElement("path",{"d":"M511.38,722.09A112.8,112.8,0,0,1,493.8,745c8.37,3,18.2-8.68,18.2-8.68-7.17,11.15-16.78,9.69-18.79,9.24a64.28,64.28,0,0,1-8,6.59c3.9,3.81,15.89-2,15.89-2-9.56,6.07-14.82,3.41-16.35,2.31a41.48,41.48,0,0,1-7.68,4.09s3.14-2.25,7.68-6c-1.39-2.32-5.18-10.46,2.34-20.49,0,0-7.47,13.24-1.83,20.06,2.5-2.07,5.39-4.57,8.39-7.38-.72-2.74-2-11.47,7.83-19,0,0-10.5,10.43-7.33,18.49C500.23,736.44,506.76,729.39,511.38,722.09Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":89}),React.createElement("path",{"d":"M477.16,756.86s1.67,15.23-4.49,20.76l.05-1s-6.45,5.42-12,5.9L461,782a29.56,29.56,0,0,1-13.31,1.73l.22-.57s-5,1-17-2.38c0,0-5.53-2.83-8.74-1.44l-.86-.34a15.43,15.43,0,0,0,4.47-8.84l-.87-.34s3.67-8.5,5.5-9.77l-.58-.23s4.66-6.78,8-7.77l-.75-.63s5-4.32,10.08-3.66l-.55-.71s7.32.39,10.6,1.34l-.46-.51S472,745.55,477.16,756.86Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":90}),React.createElement("path",{"d":"M477.16,756.86s1.67,15.23-4.49,20.76l.05-1s-6.45,5.42-12,5.9L461,782a29.56,29.56,0,0,1-13.31,1.73l.22-.57s-5,1-17-2.38c0,0-5.53-2.83-8.74-1.44l-.86-.34a15.43,15.43,0,0,0,4.47-8.84l-.87-.34s3.67-8.5,5.5-9.77l-.58-.23s4.66-6.78,8-7.77l-.75-.63s5-4.32,10.08-3.66l-.55-.71s7.32.39,10.6,1.34l-.46-.51S472,745.55,477.16,756.86Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":91}),React.createElement("path",{"d":"M477.4,756.78s1.58,14.62-4.32,19.94l0-.94s-6.18,5.21-11.45,5.69l.21-.55a28.44,28.44,0,0,1-12.75,1.68l.22-.56s-4.83,1-16.3-2.25c0,0-5.29-2.72-8.36-1.38l-.83-.32a14.93,14.93,0,0,0,4.29-8.5l-.83-.33s3.52-8.16,5.27-9.38l-.55-.22s4.47-6.52,7.71-7.47l-.72-.6s4.81-4.16,9.66-3.53l-.53-.69s7,.37,10.16,1.28l-.45-.49S472.43,745.92,477.4,756.78Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":92}),React.createElement("path",{"d":"M432,774.29a112.09,112.09,0,0,1,25.35-13.77c-6.45-6.11-20.16.54-20.16.54,11.08-7.28,19.27-2,20.92-.82a62.87,62.87,0,0,1,10-2.75c-2-5.07-15.33-4.62-15.33-4.62,11.2-1.67,14.93,2.9,15.88,4.52a41.2,41.2,0,0,1,8.68-.61s-3.79.78-9.45,2.35c.32,2.69.49,11.67-10.45,17.78,0,0,12.2-9.06,9.8-17.59-3.12.88-6.77,2-10.65,3.34-.46,2.8-2.85,11.29-14.86,14.16,0,0,13.82-5.27,14.2-13.93C448,765.7,439.21,769.49,432,774.29Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":93}),React.createElement("path",{"d":"M477.84,754.06s7.27-2.83,10.8-.51l-.49.1s3.51,2.48,4.46,5.14l-.31,0a15.18,15.18,0,0,1,2.59,6.36l-.31,0s1.15,2.37,1,8.74c0,0-.67,3.12.43,4.52l-.05.48a7.78,7.78,0,0,0-4.93-1.05l-.06.47s-4.65-.69-5.52-1.43l0,.32s-3.95-1.41-4.87-3l-.21.46s-2.78-1.92-3.12-4.51l-.28.37a35.25,35.25,0,0,1-.72-5.44l-.19.3S473,758.13,477.84,754.06Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":94}),React.createElement("path",{"d":"M477.84,754.06s7.27-2.83,10.8-.51l-.49.1s3.51,2.48,4.46,5.14l-.31,0a15.18,15.18,0,0,1,2.59,6.36l-.31,0s1.15,2.37,1,8.74c0,0-.67,3.12.43,4.52l-.05.48a7.78,7.78,0,0,0-4.93-1.05l-.06.47s-4.65-.69-5.52-1.43l0,.32s-3.95-1.41-4.87-3l-.21.46s-2.78-1.92-3.12-4.51l-.28.37a35.25,35.25,0,0,1-.72-5.44l-.19.3S473,758.13,477.84,754.06Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":95}),React.createElement("path",{"d":"M477.63,754.71s6.8-2.62,10.1-.47l-.45.1s3.28,2.29,4.18,4.76l-.29,0A14,14,0,0,1,493.6,765l-.3,0s1.08,2.2,1,8.1c0,0-.63,2.88.4,4.18l-.05.44a7.38,7.38,0,0,0-4.61-1l-.05.44s-4.36-.65-5.17-1.33l0,.29s-3.69-1.31-4.56-2.74l-.2.42s-2.6-1.77-2.92-4.17l-.26.34a31.64,31.64,0,0,1-.68-5l-.18.27S473.07,758.47,477.63,754.71Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":96}),React.createElement("path",{"d":"M491.8,774.21A55.72,55.72,0,0,1,482,763.82c-2.1,3.86,2.83,9.58,2.83,9.58-4.9-4.38-3.43-9-3.06-9.91a31,31,0,0,1-2.59-4.46c-2.17,1.61-.26,7.93-.26,7.93-2.23-5.15-.51-7.51.14-8.17a20.73,20.73,0,0,1-1.4-4.08s.86,1.71,2.33,4.22c1.25-.49,5.53-1.72,9.85,2.75,0,0-5.9-4.69-9.68-2.46.82,1.38,1.82,3,3,4.68,1.4-.14,5.77-.08,8.67,5.31,0,0-4.28-6-8.47-5A54.38,54.38,0,0,0,491.8,774.21Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":97}),React.createElement("path",{"d":"M476.4,754.49s-7.65,1.59-10.74-1.28l.5,0s-3-3-3.54-5.81l.3.09a15.15,15.15,0,0,1-1.49-6.71l.3.09s-.74-2.53.42-8.8c0,0,1.18-3,.32-4.53l.14-.46a7.74,7.74,0,0,0,4.69,1.85l.13-.45s4.48,1.46,5.2,2.33l.09-.31s3.65,2,4.31,3.73l.29-.42s2.42,2.35,2.32,5l.33-.32a35.07,35.07,0,0,1-.19,5.48l.24-.26S481.89,751.29,476.4,754.49Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":98}),React.createElement("path",{"d":"M476.4,754.57s-7.64,1.59-10.73-1.29l.49,0s-3-3-3.54-5.81l.3.09a15.31,15.31,0,0,1-1.49-6.71l.3.09s-.74-2.53.42-8.8c0,0,1.18-3,.33-4.53l.13-.46A7.81,7.81,0,0,0,467.3,729l.13-.46s4.48,1.46,5.21,2.33l.08-.3s3.66,2.05,4.32,3.72l.28-.41s2.42,2.35,2.32,5l.34-.31a34.09,34.09,0,0,1-.2,5.47l.24-.26S481.9,751.37,476.4,754.57Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":99}),React.createElement("path",{"d":"M476.71,753.89s-7.14,1.45-10-1.22l.46,0s-2.85-2.81-3.33-5.39l.29.08a14,14,0,0,1-1.42-6.21l.28.08s-.69-2.34.37-8.14c0,0,1.1-2.74.3-4.2l.12-.42a7.36,7.36,0,0,0,4.39,1.73l.12-.43s4.19,1.37,4.87,2.18l.08-.29s3.43,1.91,4.05,3.46l.26-.38s2.27,2.18,2.18,4.6L480,739a31.62,31.62,0,0,1-.17,5.07l.22-.24S481.84,750.94,476.71,753.89Z","transform":"translate(-46.94 -75.49)","fill":"#8BC74B","key":100}),React.createElement("path",{"d":"M466,732.31a55.73,55.73,0,0,1,8,11.88c2.71-3.47-1.2-9.93-1.2-9.93,4.1,5.14,1.9,9.42,1.37,10.29a32.92,32.92,0,0,1,1.82,4.82c2.4-1.23,1.57-7.77,1.57-7.77,1.34,5.44-.75,7.49-1.5,8a20.27,20.27,0,0,1,.7,4.25s-.56-1.83-1.6-4.55c-1.31.28-5.73.77-9.25-4.34,0,0,5,5.6,9.13,4-.58-1.51-1.29-3.26-2.14-5.11-1.4-.1-5.7-.88-7.67-6.68,0,0,3.24,6.58,7.53,6.37A54.5,54.5,0,0,0,466,732.31Z","transform":"translate(-46.94 -75.49)","fill":"#407d3b","opacity":"0.3","key":101}),React.createElement("path",{"d":"M704.19,538.91c-1.8-4.82,1.4-9.9,1.4-9.9l.26-11c-1.41-2.92,3.46-10.16,3.46-10.16s1.15-5.46,2.18-6,2.17-2.79,2.17-2.79a1.69,1.69,0,0,1,1-1.5,73.49,73.49,0,0,0,4.68-10.26,11.55,11.55,0,0,0,.94-6.1,11.7,11.7,0,0,0-.46-1.53l-.12-.31,0-.13,0-.11a8,8,0,0,1-.76-3.26c.14-2.35,2.31-4.08,4.47-5.07s4.57-1.65,6.27-3.32c2.12-2.08,2.61-5.24,3.1-8.16s1.26-6.09,3.66-7.85c2.12-1.55,5-1.58,7.62-1.14a25.39,25.39,0,0,1,9.83,3.91c2.86,1.92,5.41,4.46,8.71,5.46,1.21.37,2.49.51,3.69.91a9.08,9.08,0,0,1,5.5,5.5h0c.05.12.08.24.12.36s.1.3.14.45.07.25.1.38.07.3.1.45,0,.25.05.38a3.62,3.62,0,0,1,.06.46l0,.38c0,.16,0,.32,0,.48a19.66,19.66,0,0,1,3.51,4.41c4.23,6.69,9.49,16.37,11.82,20.75l.12.21a1.25,1.25,0,0,0,0-.14s10.31,10.36,4.29,9a11.45,11.45,0,0,0-1.24-.23l.07,1.15,0,0c1,1.21,5.13,5.38-2.62,8.47-6.42,2.56-19.57,3.22-23.88,3.36l.37,1.82c6.67,5.46,4.1,11.69,4.23,15.75s.77,8.89.77,8.89,2.82,4.58,2.43,7,2,6.35,2,6.35,3.59,3.93,3.2,6.48a16,16,0,0,0,.64,5.84s2.44,4.44,1.41,7-.51,3.94-.51,3.94,5.25.76,5.64,3.55,5.12,3.81,5.12,3.81,8.45,3.05,10.5,4.45,12.94,11.56,12.94,11.56S824.1,614,824.67,615.18s7,6,4,10.57l-.46.69a39,39,0,0,1-11.82,11.2c-2.06,1.27-4.11,2.69-4.73,3.64-1.34,2.09-23.82,16.48-23.82,16.48s-9.88,8.68-16.23,14.73l-.49,2.91c.08.13.17.26.25.41a1.77,1.77,0,0,1-.6,1.72l-.09.52s-2.56,21.59-4.87,31.68a26.29,26.29,0,0,0,.47,14.37c2.39-2.65,2.67-3.6,2.67-3.6a27.58,27.58,0,0,1,1.63,5.32c0,.27.06.52.08.76a.19.19,0,0,1,.17.07l.89,1.23c1,1.36,1.85,2.79,2.72,4.22,2,3.27,8.34,4.8,8.34,4.8a6.2,6.2,0,0,0,1.7.59,19.19,19.19,0,0,0,5.38.16,9.74,9.74,0,0,1,1.59.39,6.09,6.09,0,0,1,1.2.56v0c2.76,1.78,1.76,5.07,1.76,5.07l0,0,0,0-.07,0-.07.05-.11.07-.17.1-.14.09-.16.09-.15.08-.19.12-.17.09-.41.22-.2.1-.27.14-.22.11-.3.14-.28.14-.51.23-.3.13-.33.14L790,746l-.34.13-.64.24-.31.1-.45.15-.33.11-.52.15-.28.08-.8.2-.26,0-.63.14-.15,0-.14,0-.68.11-.2,0c-.3,0-.6.08-.91.11l-.2,0-.73,0-.3,0h-1l-.95,0-.2,0-.77-.08-.34,0-.67-.11-.33-.06-1-.24a61.31,61.31,0,0,0-22-1.9c-5.64.47-7.08-1.46-7.08-1.46a2.87,2.87,0,0,1-.28-.48,1.54,1.54,0,0,1-.08-.19c0-.12-.1-.24-.14-.36s0-.16-.07-.25-.05-.24-.08-.36,0-.18,0-.27l0-.15,0-.37a13.72,13.72,0,0,1,.23-3.26,37.31,37.31,0,0,1,2.06-6.92l.4.28c0-.21.09-.43.13-.66,1.39-7.45,1.87-25.31,1.92-27.2h0a3.36,3.36,0,0,1-2.15-.74l-.16-.14c-4.81-3.91-2.45-21.72-.87-24.2s1.88-15.19,2.45-19.24c.28-1.92,1.29-2.48,2.6-2.51l.56,0c.18-3.79-.36-12.63-.79-18.68v0q0-.6-.09-1.14l-1.2.06-1.8-10.67s-1-3.94-7.3-15.11a60.17,60.17,0,0,1-6.92-23.37s-1.92-3.68-1.41-5.33a30.35,30.35,0,0,0,.59-3.2,41.58,41.58,0,0,0-6.7-3.28c-6.71-2.71-11.75-7.79-14.09-10.32l-.37-.4a26.72,26.72,0,0,0-1.58,2.72,53.94,53.94,0,0,1-8.33-7.11,4.84,4.84,0,0,1-.71-1.23c-1.69-4.23,0-13.25,0-13.25A7.1,7.1,0,0,1,704.19,538.91Z","transform":"translate(-46.94 -75.49)","fill":"url(#bfa0f3e7-93bc-481b-bb94-2444c82829fd-489)","key":102}),React.createElement("g",{"opacity":"0.1","key":103},React.createElement("path",{"d":"M731.9,564.61c.26.47,2.1,1.57,4.35,2.79.21-1.63.36-2.87.4-3.25.13-1.41-2.86-7.68-2.86-7.68s-5.73-7.68-5.6-8.83-2.21-4.48-2.21-4.48l-5.18-8.42a3.79,3.79,0,0,1-.54,3.94c-1.56,2-.26,6.14-.26,6.14l-.32,5.17,0,.51c.19.18,1,1,2.87,2.64s1.4,2,1.21,2.13c.39.69-.09.81-.09.81a3.4,3.4,0,0,0-.45,0l.41.38C726.81,559.41,731.44,563.77,731.9,564.61Z","transform":"translate(-46.94 -75.49)","fill":"url(#bd8b2140-5874-4d92-bce5-6c56d7cb8024-490)"})),React.createElement("path",{"d":"M766.2,469.39c1.56,1.62-.21,3.9,1,5.64.68,1,2.19,1.61,3,2.53,1.67,1.81.41,4.12-.39,6.18-2.94,7.51,1.47,16.06,10.7,20.76a19.32,19.32,0,0,1-12.66,1c-4.12-1.1-7.29-3.67-8.13-6.58-.59-2.07-.08-4.27-1.15-6.25-1.65-3.08-6.7-4.94-8.2-8.05-1.17-2.44.11-5.08,1.6-7.44a58.41,58.41,0,0,1,6.36-8.31c1.44-1.58,1.45-2.2,3.75-1.78A11,11,0,0,1,766.2,469.39Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":104}),React.createElement("path",{"d":"M752.45,491.42a24.11,24.11,0,0,0,1.48,6.51,33.47,33.47,0,0,0,3.3,7.73,11.52,11.52,0,0,0,6.45,5.12,8.09,8.09,0,0,1-6.72,1.94c-1.73-.3-3.48-1.18-5.15-.65a15.26,15.26,0,0,0-2.22,1.18,6.33,6.33,0,0,1-7.44-1.79,8.41,8.41,0,0,1-1.29-7.81c.5-1.59,1.39-3,1.86-4.65.69-2.37.41-5,1.57-7.21,1.66-3.17,6.31-5,9.46-6.26C753.92,487.21,752.37,489.39,752.45,491.42Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":105}),React.createElement("path",{"d":"M755.81,489.53a24.09,24.09,0,0,0,1.47,6.51,33.39,33.39,0,0,0,3.3,7.72,11.47,11.47,0,0,0,6.45,5.12,8.05,8.05,0,0,1-6.72,1.95c-1.73-.31-3.48-1.18-5.15-.65a15.16,15.16,0,0,0-2.21,1.18,6.34,6.34,0,0,1-7.44-1.79,8.42,8.42,0,0,1-1.3-7.81c.5-1.6,1.4-3.05,1.86-4.65.69-2.38.42-5,1.57-7.22,1.67-3.16,6.31-5,9.46-6.25C757.28,485.32,755.73,487.5,755.81,489.53Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":106}),React.createElement("path",{"d":"M753.69,632.08s1.89,23,1.07,26.13-2.2,44.77-2.2,44.77-.57,24.3-2.46,29.4S762.88,736,763.39,736s4.15-10.39,4.15-10.39-3.59-6.3-1.32-16.31S771,677.86,771,677.86l4.15-25.19s-.56-5.92,1.64-9.26,5-25.18,4.41-27.07-15.59-6-15.59-6l-6.45,8.43Z","transform":"translate(-46.94 -75.49)","fill":"#ecb4b6","key":107}),React.createElement("path",{"d":"M781,621.16v.06l0,.38c-.05.42-.09.86-.14,1.32-.79,7.29-2.59,18.21-4.09,20.49s-1.72,5.78-1.7,7.75c0,.23,0,.43,0,.61,0,.56.05.9.05.9L771.9,672l-.14.82-.82,5s-2.52,21.4-4.79,31.42a26.61,26.61,0,0,0,.28,13.7c.07.21.13.41.2.59a12.39,12.39,0,0,0,.84,2s-.51,1.46-1.19,3.29c-.14.4-.3.83-.46,1.26l-.25.67c-1,2.57-2,5.14-2.25,5.17-.5.06-15.18,1.51-13.29-3.59a14.53,14.53,0,0,0,.57-2.27c1.44-7.8,1.89-27.13,1.89-27.13s1.38-41.68,2.2-44.77c.55-2.05-.11-13-.61-20v0c-.25-3.53-.46-6.1-.46-6.1l5.48-13.35,6.45-8.43s10.74,3,14.4,5l.11.06c.6.35,1,.67,1.08.94A20.79,20.79,0,0,1,781,621.16Z","transform":"translate(-46.94 -75.49)","opacity":"0.07","key":108}),React.createElement("path",{"d":"M771.26,650.28s-7.12,1.89-6.49,4Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":109}),React.createElement("path",{"d":"M767.47,725.58s-.77,2.18-1.65,4.55c-1,.47-1.77.77-1.77.77s-2.74-2.55.88-6.29c.58-.61,1.08-1.15,1.5-1.63A14.07,14.07,0,0,0,767.47,725.58Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":110}),React.createElement("path",{"d":"M771,726.81c-.28,1.51-3.59,3.18-5.38,4-.68.3-1.14.48-1.14.48a3.34,3.34,0,0,1-.76-1.2c-.42-1.1-.49-2.89,1.64-5.1.5-.51.93-1,1.32-1.41,2.4-2.66,2.68-3.62,2.68-3.62a27.18,27.18,0,0,1,1.6,5.27A5.41,5.41,0,0,1,771,726.81Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":111}),React.createElement("path",{"d":"M771,726.81c-.28,1.51-3.59,3.18-5.38,4-1,2.57-2,5.14-2.25,5.17-.5.06-15.18,1.51-13.29-3.59a14.53,14.53,0,0,0,.57-2.27l4.07,2.87c2.07,1.48,5.19.38,5.19.38l3.81-3.28,1-.82a5.46,5.46,0,0,0,1.66-.39,8.11,8.11,0,0,0,3.28-2.63c.72-.77,1.13-1,1.35-1A5.41,5.41,0,0,1,771,726.81Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":112}),React.createElement("path",{"d":"M794.33,743a26,26,0,0,1-9,3.6,18.25,18.25,0,0,1-8.22-.23,59.7,59.7,0,0,0-21.59-1.89c-5.54.47-7-1.45-7-1.45-.92-1.25-.89-3.44-.52-5.63a37.87,37.87,0,0,1,2-6.87s2.52,1.77,4.6,3.25,5.19.37,5.19.37l4.76-4.09c3-.22,4.94-3,4.94-3,1.33-1.42,1.59-1,1.59-1l.88,1.22c1,1.34,1.81,2.77,2.67,4.18,2,3.24,8.21,4.76,8.21,4.76a6.26,6.26,0,0,0,1.66.59,19,19,0,0,0,5.29.16,7,7,0,0,1,2.66.9C795.35,739.61,794.33,743,794.33,743Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":113}),React.createElement("circle",{"cx":"718.67","cy":"657.21","r":"0.49","fill":"#4b4b5b","key":114}),React.createElement("circle",{"cx":"724.71","cy":"659.78","r":"0.49","fill":"#4b4b5b","key":115}),React.createElement("circle",{"cx":"722.33","cy":"663.44","r":"0.49","fill":"#4b4b5b","key":116}),React.createElement("circle",{"cx":"730.62","cy":"662.2","r":"0.49","fill":"#4b4b5b","key":117}),React.createElement("circle",{"cx":"721.34","cy":"658.8","r":"0.49","fill":"#4b4b5b","key":118}),React.createElement("circle",{"cx":"718.99","cy":"663.18","r":"0.49","fill":"#4b4b5b","key":119}),React.createElement("circle",{"cx":"727.62","cy":"661.21","r":"0.49","fill":"#4b4b5b","key":120}),React.createElement("circle",{"cx":"733.86","cy":"662.95","r":"0.49","fill":"#4b4b5b","key":121}),React.createElement("path",{"d":"M794.33,743s-8.43,5.79-17.22,3.37a59.7,59.7,0,0,0-21.59-1.89c-5.54.47-7-1.45-7-1.45a4.23,4.23,0,0,1-.7-2c0-.14,0-.29,0-.43a14.46,14.46,0,0,1,.22-3.16c1.16.85,3.55,1.9,8.39,2.06a151.21,151.21,0,0,1,19.43,2.4l10.7-.43s6-1.3,6-3.53C795.35,739.61,794.33,743,794.33,743Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":122}),React.createElement("path",{"d":"M779.35,745a2.66,2.66,0,0,1-.53,0,60.26,60.26,0,0,1-9.15-1.62,12.23,12.23,0,0,0-2.34-.34c-2.49-.13-8.66-.42-12.13-.4h-.08a18.19,18.19,0,0,1-7.26-1.76c0-.14,0-.29,0-.43a18.08,18.08,0,0,0,7.38,1.81c3.47,0,9.66.28,12.15.4a14,14,0,0,1,2.41.35c2.41.56,8.16,1.85,9.52,1.58Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":123}),React.createElement("path",{"d":"M775,651.77c0,.56.05.9.05.9L771.9,672c-.58.54-1.13,1.07-1.65,1.57a42.81,42.81,0,0,0-4.47,4.72c-1.89,2.93-8.56,1.41-8.43,1.13s2.86-14.07,2.86-14.07l2.17-5.57a3.55,3.55,0,0,0,4.48-1c1.4-1.48,4.54-4.39,6.67-6.34l1.5-1.37C775,651.39,775,651.59,775,651.77Z","transform":"translate(-46.94 -75.49)","opacity":"0.03","key":124}),React.createElement("path",{"d":"M781,621.22l0,.38c-.05.42-.09.86-.14,1.32-.47-.17-.93-.36-1.37-.56l-.64-.29a32.78,32.78,0,0,1-5.85-3.62l5.48-2.35,1.62-.7c.6.35,1,.67,1.08.94A21.3,21.3,0,0,1,781,621.22Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":125}),React.createElement("path",{"d":"M828,626c-.15.22-.29.45-.45.68A38.58,38.58,0,0,1,816,637.79c-2,1.26-4.05,2.67-4.65,3.61-1.32,2.08-23.42,16.34-23.42,16.34s-10.28,9.11-16.5,15.12l-.79.77-.38.37L769,675.26c-.54.56-1,1-1.36,1.46l-.35.41c-.14.17-.25.32-.33.44-1.88,2.93-8.56,1.42-8.43,1.14s2.86-14.08,2.86-14.08l2.17-5.57a3.4,3.4,0,0,0,2.86.19,4.32,4.32,0,0,0,1.62-1.13c1.41-1.49,4.55-4.4,6.68-6.35,1.25-1.15,2.16-2,2.16-2l7.08-8S793,630,799.78,627c0,0-7.66-3.11-13.13-4a23.82,23.82,0,0,1-6.07-1.48l-.64-.29a33.24,33.24,0,0,1-5.85-3.62l5.48-2.35L808.38,603c.17,0,1.84.11,3.07.19l1.3.09s10.74,11.15,11.3,12.28S831,621.47,828,626Z","transform":"translate(-46.94 -75.49)","fill":"#ecb4b6","key":126}),React.createElement("path",{"d":"M796.29,620.81s12.37,1.51,14.82,4.06c0,0-10.86.76-11.33,2.17,0,0,6.21-4.19,7.93-3.11Z","transform":"translate(-46.94 -75.49)","opacity":"0.03","key":127}),React.createElement("path",{"d":"M770.59,673.63l-.38.37L769,675.26c-.54.56-1,1-1.36,1.46l-1.6-2.08a6.69,6.69,0,0,1,1.82-1.1,3.17,3.17,0,0,1,2.78.08Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":128}),React.createElement("path",{"d":"M769.8,678.26a9.21,9.21,0,0,1-1.29.53l-1.27-1.66L765.61,675a6.56,6.56,0,0,1,1.83-1.1,3.15,3.15,0,0,1,2.77.08,4,4,0,0,1,1.47,1.63S772.17,677.05,769.8,678.26Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":129}),React.createElement("path",{"d":"M770.06,678l-.26.26a9.21,9.21,0,0,1-1.29.53l-1.27-1.66c-.14.17-.25.32-.33.44-1.88,2.93-8.56,1.42-8.43,1.14s2.86-14.08,2.86-14.08l2.17-5.57a3.4,3.4,0,0,0,2.86.19,1.39,1.39,0,0,1,0,2,13.34,13.34,0,0,0-2.15,6.28c-.84,2.34,1.73,5.2,3.22,6.41a4.81,4.81,0,0,0,.8.54,1.84,1.84,0,0,1,.71.8A15,15,0,0,1,770.06,678Z","transform":"translate(-46.94 -75.49)","opacity":"0.05","key":130}),React.createElement("path",{"d":"M769.31,678l-2.87,2.88a21.48,21.48,0,0,0-8.67,10.81,22.43,22.43,0,0,1-1,2.49,11.12,11.12,0,0,0-.75,3.53c-.07.73-.1,1.46-.12,2.09A3.42,3.42,0,0,1,755,702l0,0a3.38,3.38,0,0,1-4.62.4l-.16-.14c-4.72-3.87-2.41-21.54-.85-24s1.84-15.06,2.41-19.08c.27-1.91,1.26-2.46,2.55-2.49a37.94,37.94,0,0,1,4.47.68l.25,0c2.93.23,8.55,1.1,6.58,3.82a13.27,13.27,0,0,0-2.14,6.28c-1,2.88,3.11,6.57,4,7S769.31,678,769.31,678Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":131}),React.createElement("circle",{"cx":"718.23","cy":"600.73","r":"0.84","fill":"#4b4b5b","key":132}),React.createElement("circle",{"cx":"716.95","cy":"603.86","r":"0.84","fill":"#4b4b5b","key":133}),React.createElement("circle",{"cx":"713.03","cy":"608.9","r":"0.84","fill":"#4b4b5b","key":134}),React.createElement("circle",{"cx":"714.97","cy":"606.31","r":"0.84","fill":"#4b4b5b","key":135}),React.createElement("circle",{"cx":"711.4","cy":"611.88","r":"0.84","fill":"#4b4b5b","key":136}),React.createElement("path",{"d":"M755,689.94s-.69,8.2,0,12a3.37,3.37,0,0,1-4.66.44l-.16-.14c-4.72-3.87-2.41-21.54-.85-24s1.84-15.06,2.41-19.08c.27-1.91,1.26-2.46,2.55-2.49a37.94,37.94,0,0,1,4.47.68c0,4-.22,13.22-1.27,16.25C756.15,677.54,755,689.94,755,689.94Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":137}),React.createElement("path",{"d":"M752.94,673.25a74.22,74.22,0,0,0-2.08,16.13c.09,3.33-.29,9.82-.5,13l-.16-.14c-4.72-3.87-2.41-21.54-.85-24s1.84-15.06,2.41-19.08c.27-1.91,1.26-2.46,2.55-2.49C754.13,660.77,753.64,670.8,752.94,673.25Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":138}),React.createElement("path",{"d":"M756.15,656.91c-.17,3.22-.7,11.81-1.57,14.27-1.08,3.08-2.23,17.81-2.27,18.44l.37,0c0-.16,1.2-15.32,2.26-18.34.89-2.53,1.41-11,1.59-14.32Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":139}),React.createElement("path",{"d":"M758.92,498.22a72.84,72.84,0,0,1,9.57,2.37c3.46,1.28,4,2,4,2l3.59.56v-3.84s12.86.95,14.15.43c0,0,.07,0,.08-.05.63-.63-.37,5,.57,6.17s5,5.33-2.58,8.4-24.87,3.37-24.87,3.37l-4.91-9.69Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":140}),React.createElement("path",{"d":"M739.59,516.73l13.6-2.89a33.07,33.07,0,0,1-3.94-10.41,14.35,14.35,0,0,1,.92-8.74c3.9-7.93-10.58-12.08-10.58-12.08s-5.3,8.19-10.08,12.3c-1.59,1.38-3.14,2.3-4.4,2.3C720.07,497.21,739.59,516.73,739.59,516.73Z","transform":"translate(-46.94 -75.49)","fill":"#ecb4b6","key":141}),React.createElement("path",{"d":"M812.75,604.38s-5.92,14-11.33,14.23c-3.26.15-13.32,1.53-20.81,2.61l-.67.09a33.24,33.24,0,0,1-5.85-3.62l5.48-2.35L808.38,603c.17,0,1.84.11,3.07.19Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":142}),React.createElement("path",{"d":"M770.44,616.59c-5.14.74,1.39,5.92,1.39,5.92s-2.52,1.89-5.42,8.81-4.28,6.43-4.28,6.43l-8,.43c-.25-3.53-.46-6.1-.46-6.1l5.48-13.35,6.45-8.43s10.74,3,14.4,5l.11.06c.6.35,1,.67,1.08.94C781.3,616.83,770.67,614.09,770.44,616.59Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":143}),React.createElement("path",{"d":"M739.59,516.73l13.6-2.89a33.07,33.07,0,0,1-3.94-10.41l-4.25,4.1a10.43,10.43,0,0,1-5.82-1.7,8.63,8.63,0,0,1-2-1.82c-3-3.78-6.67-8.69-6.67-8.69s-.42-.19-1-.41c-1.59,1.38-3.14,2.3-4.4,2.3C720.07,497.21,739.59,516.73,739.59,516.73Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":144}),React.createElement("path",{"d":"M812.75,603.24s-5.92,14-11.33,14.23-29.59,3.91-29.59,3.91-2.52,1.89-5.42,8.81-4.28,6.42-4.28,6.42l-9.32.51-1.76-10.58s-1-3.9-7.18-15a59.92,59.92,0,0,1-6.8-23.17s-1.89-3.66-1.39-5.29,2.15-14.61,2.27-16-2.77-7.55-2.77-7.55-5.54-7.56-5.41-8.69-2.14-4.41-2.14-4.41l-5-8.28a3.77,3.77,0,0,1-.52,3.87c-1.51,2-.25,6.05-.25,6.05l-.3,5.08-.07,1.22s.75.75,2.81,2.64,1.09,2.14,1.09,2.14c-6.42-.88-11.46,9.57-11.46,9.57a53.14,53.14,0,0,1-8.19-7,4.22,4.22,0,0,1-.69-1.22c-1.67-4.19,0-13.14,0-13.14a7.09,7.09,0,0,1,.54-7.43c-1.76-4.78,1.38-9.82,1.38-9.82l.26-11c-1.39-2.89,3.4-10.07,3.4-10.07s1.13-5.41,2.14-5.92,2.14-2.77,2.14-2.77c-.13-2.52,6.55-2.77,7.17-2.89a13.16,13.16,0,0,0,2.28-1.33,17.12,17.12,0,0,1,2-1.19c1.13-.51,4.15.88,4.15.88s3.65,4.91,6.67,8.69a8.63,8.63,0,0,0,2,1.82A10.43,10.43,0,0,0,745,508l4.33-4.17,12.8.77,3,14.74c6.55,5.41,4,11.58,4.16,15.61s.75,8.82.75,8.82,2.77,4.53,2.4,6.92,2,6.3,2,6.3,3.52,3.9,3.15,6.42a15.78,15.78,0,0,0,.63,5.79s2.39,4.41,1.38,6.93-.5,3.9-.5,3.9,5.16.76,5.54,3.53,5,3.78,5,3.78,8.31,3,10.32,4.41S812.75,603.24,812.75,603.24Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":145}),React.createElement("path",{"d":"M707,541.67s9.45,1.13,10.58,2.51-9.44,1.52-9.44,1.52Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":146}),React.createElement("path",{"d":"M721,549.16s-6.92-2.46-7.11-1.7,7.11,4.91,7.11,4.91Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":147}),React.createElement("path",{"d":"M723.85,535.75C725,537.64,735,549.84,735,549.84l-10.71-15.6Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":148}),React.createElement("path",{"d":"M725.3,532.41c.75,1,8.75,14.1,8.75,14.1L726,531.78Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":149}),React.createElement("path",{"d":"M708.55,516.73s3.08-4.34,6.1-1.57S708.55,516.73,708.55,516.73Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":150}),React.createElement("path",{"d":"M730.14,513s7.87,0,11.71,1.76S738.45,509.49,730.14,513Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":151}),React.createElement("path",{"d":"M739.18,507.1H738s-2.7-1-3.4-3.09-6.13-.19-6.13-.19-.79.6-.1-.37-2.39-4-3.78-6.05a1.82,1.82,0,0,1-.24-.51,17.12,17.12,0,0,1,2-1.19c1.13-.5,4.15.89,4.15.89s3.65,4.91,6.67,8.68A8.92,8.92,0,0,0,739.18,507.1Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":152}),React.createElement("path",{"d":"M739.18,506.34H738s-2.7-1-3.4-3.09-6.13-.18-6.13-.18-.79.59-.1-.38-2.39-4-3.78-6a2,2,0,0,1-.24-.51,17.12,17.12,0,0,1,2-1.19c1.13-.51,4.15.88,4.15.88s3.65,4.91,6.67,8.69A8.63,8.63,0,0,0,739.18,506.34Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":153}),React.createElement("circle",{"cx":"701.52","cy":"438.75","r":"0.83","fill":"#e7c7ca","key":154}),React.createElement("circle",{"cx":"715.89","cy":"458.29","r":"0.83","fill":"#e7c7ca","key":155}),React.createElement("circle",{"cx":"710.7","cy":"445.95","r":"0.83","fill":"#e7c7ca","key":156}),React.createElement("circle",{"cx":"718.21","cy":"470.99","r":"0.83","fill":"#e7c7ca","key":157}),React.createElement("circle",{"cx":"728.85","cy":"492.91","r":"0.83","fill":"#e7c7ca","key":158}),React.createElement("circle",{"cx":"729.68","cy":"504.13","r":"0.83","fill":"#e7c7ca","key":159}),React.createElement("path",{"d":"M788.83,498.22l-1.7,5.48-5.36-.38-4.78-5.1s-.31-.92-.8-2.28c-1.21-3.38-3.49-9.5-4.74-11.38-1.77-2.65-2.9-13.6-2.9-13.6s1.93-4.41,7.45,4.41c4.16,6.63,9.33,16.23,11.62,20.57C788.38,497.36,788.83,498.22,788.83,498.22Z","transform":"translate(-46.94 -75.49)","fill":"#ecb4b6","key":160}),React.createElement("path",{"d":"M765.15,574.91c0,1.35-5.65,2-8.32,2.2l-1.37.1c.62,1.41-2.71,12.25-2.71,12.25a5.39,5.39,0,0,1-.84-.11c-4.38-.89-13.08-7-13.08-7s-.18-2.08-9.16-5.73c-6.6-2.68-11.55-7.72-13.85-10.23A15.39,15.39,0,0,0,714.4,565l7.94-8.25,3,2.8c3.11,2.93,7.59,7.23,8,8,.69,1.27,13.15,7.35,13.15,7.35,2.77-2.39,8.76-2.9,8.76-2.9S765.15,573.15,765.15,574.91Z","transform":"translate(-46.94 -75.49)","fill":"#ecb4b6","key":161}),React.createElement("path",{"d":"M750.35,546.51c.38.76,17.45,12.09,20.34,12.28s-2.71-5.41-2.89-5.48S750.35,546.51,750.35,546.51Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":162}),React.createElement("path",{"d":"M792.61,737.9A7.07,7.07,0,0,0,790,737a19,19,0,0,1-5.29-.16,12.72,12.72,0,0,1,.38,4.66l1.6-.07S792.64,740.12,792.61,737.9Z","transform":"translate(-46.94 -75.49)","fill":"#fff","opacity":"0.3","key":163}),React.createElement("path",{"d":"M756,697.71c-.07.73-.1,1.46-.12,2.09A3.42,3.42,0,0,1,755,702l0,0a29.94,29.94,0,0,1-.27-4.48C754.84,697.73,755.41,697.75,756,697.71Z","transform":"translate(-46.94 -75.49)","fill":"#fff","opacity":"0.3","key":164}),React.createElement("path",{"d":"M725.32,559.51c-4.1-.26-7.6,4-9.5,6.93A15.39,15.39,0,0,0,714.4,565l7.94-8.25Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":165}),React.createElement("path",{"d":"M725.36,558.41c-6.42-.88-11.46,9.58-11.46,9.58a52.84,52.84,0,0,1-8.19-7.06,4.16,4.16,0,0,1-.69-1.21c1.49-3.6,5.62-9.59,16.51-7.31l-.07,1.22s.75.76,2.81,2.64S725.36,558.41,725.36,558.41Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":166}),React.createElement("path",{"d":"M725.36,559.17c-6.42-.88-11.46,9.57-11.46,9.57a53.14,53.14,0,0,1-8.19-7,4.22,4.22,0,0,1-.69-1.22c1.49-3.59,5.62-9.58,16.51-7.3l-.07,1.22s.75.75,2.81,2.64S725.36,559.17,725.36,559.17Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":167}),React.createElement("path",{"d":"M788.83,498.22l-1.7,5.48-5.36-.38-4.78-5.1s-.31-.92-.8-2.28c.67.38,5.3,2.94,8.11,3.09,2.22.11,3-2,3.32-3.09C788.38,497.36,788.83,498.22,788.83,498.22Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":168}),React.createElement("path",{"d":"M790.49,500.14l-.35-.41c-1.27-1.45-2.38-2.58-2.38-2.58a5.9,5.9,0,0,1-1.09,2.71,2.78,2.78,0,0,1-2.37,1.06,15.41,15.41,0,0,1-4.7-1.39,38.85,38.85,0,0,1-3.49-1.75l0,1.51,0,1.51v3.47s-1.33,9.19,10.89,4.28c0,0-.76-3.38,3.88-2.73Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":169}),React.createElement("path",{"d":"M776.11,496.65l-.07,3v3.46s-1.32,9.2,10.9,4.28c0,0-.89-3.9,5-2.51s-4.22-8.88-4.22-8.88-.42,3.91-3.45,3.76S776.11,496.65,776.11,496.65Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":170}),React.createElement("path",{"d":"M752.81,592.86c.13-.19.63-15.24,2.58-15.62s6.8,1.64,6.8,1.64l-.88,12Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":171}),React.createElement("path",{"d":"M755.46,577.21c.62,1.41-2.71,12.25-2.71,12.25a5.39,5.39,0,0,1-.84-.11c.3-4.48,1-12.22,2.35-12.49a6.83,6.83,0,0,1,2.57.25Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":172}),React.createElement("path",{"d":"M752.05,592.48c.13-.19.63-15.24,2.59-15.62s6.8,1.64,6.8,1.64l-.89,12Z","transform":"translate(-46.94 -75.49)","fill":"#493165","key":173}),React.createElement("path",{"d":"M769.49,503.09a33.28,33.28,0,0,1-3.3-7.73c-.42-1.29-.84-2.59-1.13-3.91a15.59,15.59,0,0,1-10.69,6.63,28.81,28.81,0,0,0-1.25,3,8.43,8.43,0,0,0,1.3,7.82,6.34,6.34,0,0,0,7.44,1.78,17.37,17.37,0,0,1,2.21-1.18c1.67-.53,3.42.35,5.15.65a8,8,0,0,0,6.72-1.94A11.51,11.51,0,0,1,769.49,503.09Z","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":174}),React.createElement("circle",{"cx":"705.11","cy":"408.14","r":"15.61","opacity":"0.1","key":175}),React.createElement("circle",{"cx":"705.11","cy":"407.12","r":"15.61","fill":"#ecb4b6","key":176}),React.createElement("path",{"d":"M763.61,477.73c1.83-1.27,4.53-.25,6.47-1.37a4.81,4.81,0,0,0,2-2.56,9.24,9.24,0,0,0-5.49-11.57c-1.19-.39-2.44-.53-3.64-.9-3.24-1-5.75-3.51-8.56-5.41a24.79,24.79,0,0,0-9.67-3.88c-2.56-.44-5.4-.41-7.49,1.13-2.36,1.75-3.11,4.89-3.59,7.79s-1,6-3.06,8.09c-1.66,1.65-4,2.29-6.16,3.28s-4.25,2.7-4.39,5c-.11,1.83,1,3.48,1.4,5.28a11.54,11.54,0,0,1-.92,6.05,72.67,72.67,0,0,1-7.78,15.45,42.35,42.35,0,0,0,12.37,4.56,10.89,10.89,0,0,0,5.38,0,8.88,8.88,0,0,0,4.88-4.63,15.24,15.24,0,0,0,1.64-5.83c.31-4-1-8.4.84-12a4.19,4.19,0,0,1,1.53-1.82,12.13,12.13,0,0,1,2.63-.79,10.8,10.8,0,0,0,3.88-2.67l4.16-3.87a11.55,11.55,0,0,1,3.23-2.38,8.06,8.06,0,0,1,6.92.77c1.84,1,4,2.58,5.82,1.58","transform":"translate(-46.94 -75.49)","fill":"#3f3d56","key":177}),React.createElement("g",{"opacity":"0.1","key":178},[React.createElement("path",{"d":"M764.87,477.38l1.1-.32A2.66,2.66,0,0,1,764.87,477.38Z","transform":"translate(-46.94 -75.49)","key":0}),React.createElement("path",{"d":"M764.87,477.38l-1.26.35a3.68,3.68,0,0,1,.71-.37A3.37,3.37,0,0,0,764.87,477.38Z","transform":"translate(-46.94 -75.49)","key":1}),React.createElement("path",{"d":"M724.55,506.67a10.89,10.89,0,0,0,5.38,0,8.88,8.88,0,0,0,4.88-4.63,15.24,15.24,0,0,0,1.64-5.83c.31-4.05-1-8.4.84-12a4.19,4.19,0,0,1,1.53-1.82,12.3,12.3,0,0,1,2.63-.79,10.8,10.8,0,0,0,3.88-2.67l4.16-3.87a11.55,11.55,0,0,1,3.23-2.38,8.06,8.06,0,0,1,6.92.77c1.31.74,2.77,1.73,4.17,1.88a3.68,3.68,0,0,0-.71.37l1.26-.35a2.66,2.66,0,0,0,1.1-.32l-1.1.32a3.37,3.37,0,0,1-.55,0c1.77-.68,4.06,0,5.76-1a4.81,4.81,0,0,0,2-2.56,8.19,8.19,0,0,0,.42-4.07,8.69,8.69,0,0,1,.09,6.11,4.81,4.81,0,0,1-2,2.56c-1.7,1-4,.32-5.76,1-1.4-.15-2.86-1.14-4.17-1.88a8.06,8.06,0,0,0-6.92-.77,11.55,11.55,0,0,0-3.23,2.38L745.84,481a10.8,10.8,0,0,1-3.88,2.67,12.3,12.3,0,0,0-2.63.79,4.19,4.19,0,0,0-1.53,1.82c-1.8,3.64-.53,8-.84,12a15.24,15.24,0,0,1-1.64,5.83,8.88,8.88,0,0,1-4.88,4.63,10.89,10.89,0,0,1-5.38,0,42.35,42.35,0,0,1-12.37-4.56c.29-.44.57-.88.85-1.32A42.1,42.1,0,0,0,724.55,506.67Z","transform":"translate(-46.94 -75.49)","key":2}),React.createElement("path",{"d":"M720,478a18.7,18.7,0,0,1,.88,2.65c0,.2.06.4.08.6A13,13,0,0,1,720,478Z","transform":"translate(-46.94 -75.49)","key":3})]),React.createElement("path",{"d":"M754.33,507.69a6.35,6.35,0,0,0,7.44,1.79A15.26,15.26,0,0,1,764,508.3c1.67-.53,3.42.34,5.15.65a8.08,8.08,0,0,0,5.78-1.23,7.89,7.89,0,0,0,.94.3,8.05,8.05,0,0,1-6.72,2c-1.73-.31-3.48-1.18-5.15-.65a15.26,15.26,0,0,0-2.22,1.18,6.35,6.35,0,0,1-7.44-1.79,8,8,0,0,1-1.7-5.57A7.85,7.85,0,0,0,754.33,507.69Z","transform":"translate(-46.94 -75.49)","opacity":"0.1","key":179})]);
}

UndrawMintTea.defaultProps = {"data-name":"Layer 1","width":"1106.12","height":"749.03","viewBox":"0 0 1106.12 749.03"};

module.exports = UndrawMintTea;

UndrawMintTea.default = UndrawMintTea;


/***/ }),

/***/ "./src/images/undraw/undraw_reviews.svg":
/*!**********************************************!*\
  !*** ./src/images/undraw/undraw_reviews.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function UndrawReviews (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M 857.3 503 a 10.5 10.5 0 0 1 1.6 -0.3 l 21.9 -44.5 l -6.7 -10 l 13.8 -12.1 l 17.4 21.2 l -35.4 51.4 a 10.5 10.5 0 1 1 -12.6 -5.8 Z","transform":"translate(-199,-181.5)","fill":"#a0616a","key":0}),React.createElement("path",{"d":"M 894.7 442.2 a 4.5 4.5 0 0 1 -1 0.8 l -22.4 13 a 4.5 4.5 0 0 1 -6.3 -2 l -10.9 -23 a 4.5 4.5 0 0 1 1.5 -5.6 l 13.9 -9.4 a 4.5 4.5 0 0 1 5.7 0.5 L 894.6 435.9 a 4.5 4.5 0 0 1 0.1 6.3 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":1}),React.createElement("polygon",{"points":"727.1,515.7 715.3,518.9 697.2,474.8 714.7,470.1 727.1,515.7","fill":"#a0616a","key":2}),React.createElement("path",{"d":"M 906.7 697.9 h 23.6 a 0 0 0 0 1 0 0 v 14.9 a 0 0 0 0 1 0 0 H 891.8 a 0 0 0 0 1 0 0 v 0 A 14.9 14.9 0 0 1 906.7 697.9 Z","transform":"translate(-352.2,82.4) rotate(-15.2)","fill":"#2f2e41","key":3}),React.createElement("polygon",{"points":"626,524.7 613.7,524.7 607.9,477.4 626,477.4 626,524.7","fill":"#a0616a","key":4}),React.createElement("path",{"d":"M 604.9 521.2 h 23.6 a 0 0 0 0 1 0 0 v 14.9 a 0 0 0 0 1 0 0 H 590.1 a 0 0 0 0 1 0 0 v 0 A 14.9 14.9 0 0 1 604.9 521.2 Z","fill":"#2f2e41","key":5}),React.createElement("circle",{"cx":"638.9","cy":"194.2","r":"24.6","fill":"#a0616a","key":6}),React.createElement("path",{"d":"M 824.2 672.5 H 807.5 a 4.5 4.5 0 0 1 -4.5 -4.2 c -5 -79.4 -2.1 -136.3 9.2 -179.2 a 4.7 4.7 0 0 1 0.2 -0.6 l 0.9 -2.2 a 4.5 4.5 0 0 1 4.2 -2.8 h 34.5 a 4.5 4.5 0 0 1 3.4 1.6 l 4.7 5.5 c 0.1 0.1 0.2 0.2 0.3 0.3 c 21.1 29.4 40 87 61.9 164.3 a 4.5 4.5 0 0 1 -3 5.5 L 901.2 666.4 a 4.5 4.5 0 0 1 -5.4 -2.3 l -46.7 -96.9 a 3.5 3.5 0 0 0 -6.6 1 l -13.7 100.4 A 4.5 4.5 0 0 1 824.2 672.5 Z","transform":"translate(-199,-181.5)","fill":"#2f2e41","key":7}),React.createElement("path",{"d":"M 858.1 490.9 c 0 0 -0.1 0 -0.1 0 l -41.8 -1.3 a 4.5 4.5 0 0 1 -4.3 -4 c -5.3 -42.9 9.2 -54.4 15.7 -57.4 a 3.5 3.5 0 0 0 2 -2.7 l 0.6 -4.5 a 4.5 4.5 0 0 1 0.9 -2.2 c 10.2 -13.2 24.1 -17.4 31.5 -18.8 a 4.5 4.5 0 0 1 5.3 3.8 l 0.8 6.5 a 3.6 3.6 0 0 0 0.7 1.7 c 21.3 27.8 -2.4 68.8 -7.4 76.8 h 0 A 4.5 4.5 0 0 1 858.1 490.9 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":8}),React.createElement("path",{"d":"M 887.5 378.4 A 97.8 97.8 0 0 0 867.9 358 c -6.2 -4.8 -13.1 -9 -20.7 -11 c -7.6 -2 -16 -1.6 -23 2 c -6.9 3.7 -14.1 11 -14.2 18.9 c 0 2.5 0.6 5.9 3.1 5.5 l 0.7 0.1 q 9 -1.8 18 -3.6 q 3.8 13.3 7.7 26.6 c 0.5 1.9 1.3 4 3 4.8 c 1.7 0.8 3.6 0 5.3 -0.7 c 0.3 -0.1 2.7 -5.5 2.7 -5.5 a 1 1 0 0 1 1.7 -0.3 l 1.4 1.8 a 2 2 0 0 0 2.3 0.6 q 14.7 -6.1 29.4 -12.3 c 1.4 -0.6 2.9 -1.3 3.3 -2.7 C 889.1 380.9 888.3 379.6 887.5 378.4 Z","transform":"translate(-199,-181.5)","fill":"#2f2e41","key":9}),React.createElement("path",{"d":"M 1000 718.5 h -301 a 1 1 0 0 1 0 -2 h 301 a 1 1 0 0 1 0 2 Z","transform":"translate(-199,-181.5)","fill":"#3f3d56","key":10}),React.createElement("path",{"d":"M 836.8 562.7 a 3.2 3.2 0 0 1 -1.9 -0.6 l -4.6 -3.3 a 2.2 2.2 0 0 0 -2.6 0 l -4.6 3.3 a 3.2 3.2 0 0 1 -4.9 -3.6 l 1.7 -5.4 a 2.2 2.2 0 0 0 -0.8 -2.5 l -4.6 -3.3 a 3.2 3.2 0 0 1 1.9 -5.8 h 5.6 a 2.2 2.2 0 0 0 2.1 -1.5 l 1.7 -5.4 a 3.2 3.2 0 0 1 6.1 0 l 1.7 5.4 a 2.2 2.2 0 0 0 2.1 1.5 h 5.6 a 3.2 3.2 0 0 1 1.9 5.8 l -4.6 3.3 a 2.2 2.2 0 0 0 -0.8 2.5 l 1.7 5.4 a 3.2 3.2 0 0 1 -1.2 3.6 A 3.2 3.2 0 0 1 836.8 562.7 Z","transform":"translate(-199,-181.5)","fill":"#493165","key":11}),React.createElement("path",{"d":"M 854.2 552 a 10.7 10.7 0 0 0 1.4 -16.4 l 7.8 -93.9 l -23.1 3.2 l -0.4 91.2 a 10.8 10.8 0 0 0 14.4 15.9 Z","transform":"translate(-199,-181.5)","fill":"#a0616a","key":12}),React.createElement("path",{"d":"M 864.9 455.2 a 4.5 4.5 0 0 1 -1.3 -0.2 l -24.8 -7.3 a 4.5 4.5 0 0 1 -2.9 -5.9 l 9.2 -23.8 a 4.5 4.5 0 0 1 5.2 -2.8 l 16.4 3.6 a 4.5 4.5 0 0 1 3.5 4.5 l -0.8 27.5 a 4.5 4.5 0 0 1 -4.5 4.4 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":13}),React.createElement("path",{"d":"M 631 572.5 H 206 a 7 7 0 0 1 -7 -7 v -127 a 7 7 0 0 1 7 -7 H 631 a 7 7 0 0 1 7 7 v 127 A 7 7 0 0 1 631 572.5 Z m -425 -139 a 5 5 0 0 0 -5 5 v 127 a 5 5 0 0 0 5 5 H 631 a 5 5 0 0 0 5 -5 v -127 a 5 5 0 0 0 -5 -5 Z","transform":"translate(-199,-181.5)","fill":"#3f3d56","key":14}),React.createElement("path",{"d":"M 392 626 a 3.9 3.9 0 0 1 -2.3 -0.8 l -5.6 -4.1 a 2.7 2.7 0 0 0 -3.2 0 l -5.6 4.1 a 3.9 3.9 0 0 1 -6.1 -4.4 l 2.1 -6.6 a 2.7 2.7 0 0 0 -1 -3 l -5.6 -4.1 a 3.9 3.9 0 0 1 2.3 -7.1 h 6.9 a 2.7 2.7 0 0 0 2.6 -1.9 l 2.1 -6.6 a 3.9 3.9 0 0 1 7.5 0 l 2.1 6.6 a 2.7 2.7 0 0 0 2.6 1.9 h 6.9 a 3.9 3.9 0 0 1 2.3 7.1 l -5.6 4.1 a 2.7 2.7 0 0 0 -1 3 l 2.1 6.6 a 3.9 3.9 0 0 1 -1.4 4.4 A 3.9 3.9 0 0 1 392 626 Z","transform":"translate(-199,-181.5)","fill":"#493165","key":15}),React.createElement("path",{"d":"M 448.5 626 a 3.9 3.9 0 0 1 -2.3 -0.8 l -5.6 -4.1 a 2.7 2.7 0 0 0 -3.2 0 l -5.6 4.1 a 3.9 3.9 0 0 1 -6.1 -4.4 l 2.1 -6.6 a 2.7 2.7 0 0 0 -1 -3 l -5.6 -4.1 a 3.9 3.9 0 0 1 2.3 -7.1 h 6.9 a 2.7 2.7 0 0 0 2.6 -1.9 l 2.1 -6.6 a 3.9 3.9 0 0 1 7.5 0 l 2.1 6.6 a 2.7 2.7 0 0 0 2.6 1.9 h 6.9 a 3.9 3.9 0 0 1 2.3 7.1 l -5.6 4.1 a 2.7 2.7 0 0 0 -1 3 l 2.1 6.6 a 3.9 3.9 0 0 1 -1.4 4.4 A 3.9 3.9 0 0 1 448.5 626 Z","transform":"translate(-199,-181.5)","fill":"#493165","key":16}),React.createElement("path",{"d":"M 505 626 a 3.9 3.9 0 0 1 -2.3 -0.8 l -5.6 -4.1 a 2.7 2.7 0 0 0 -3.2 0 l -5.6 4.1 a 3.9 3.9 0 0 1 -6.1 -4.4 l 2.1 -6.6 a 2.7 2.7 0 0 0 -1 -3 l -5.6 -4.1 a 3.9 3.9 0 0 1 2.3 -7.1 h 6.9 a 2.7 2.7 0 0 0 2.6 -1.9 l 2.1 -6.6 a 3.9 3.9 0 0 1 7.5 0 l 2.1 6.6 a 2.7 2.7 0 0 0 2.6 1.9 h 6.9 a 3.9 3.9 0 0 1 2.3 7.1 l -5.6 4.1 a 2.7 2.7 0 0 0 -1 3 l 2.1 6.6 a 3.9 3.9 0 0 1 -1.4 4.4 A 3.9 3.9 0 0 1 505 626 Z","transform":"translate(-199,-181.5)","fill":"#493165","key":17}),React.createElement("path",{"d":"M 561.5 626 a 3.9 3.9 0 0 1 -2.3 -0.8 l -5.6 -4.1 a 2.7 2.7 0 0 0 -3.2 0 L 544.9 625.2 a 3.9 3.9 0 0 1 -6.1 -4.4 l 2.1 -6.6 a 2.7 2.7 0 0 0 -1 -3 l -5.6 -4.1 a 3.9 3.9 0 0 1 2.3 -7.1 h 6.9 a 2.7 2.7 0 0 0 2.6 -1.9 l 2.1 -6.6 a 3.9 3.9 0 0 1 7.5 0 l 2.1 6.6 a 2.7 2.7 0 0 0 2.6 1.9 h 6.9 a 3.9 3.9 0 0 1 2.3 7.1 l -5.6 4.1 a 2.7 2.7 0 0 0 -1 3 l 2.1 6.6 A 3.9 3.9 0 0 1 563.8 625.2 A 3.9 3.9 0 0 1 561.5 626 Z","transform":"matrix(1,0,0,1,-199,-181.5)","fill":"#493165","key":18}),React.createElement("path",{"d":"M 599.1 626.4 a 4.3 4.3 0 0 1 -2.5 -0.8 a 4.3 4.3 0 0 1 -1.6 -4.8 l 2.1 -6.6 a 2.3 2.3 0 0 0 -0.8 -2.6 l -5.6 -4.1 a 4.3 4.3 0 0 1 2.5 -7.8 H 600.1 a 2.3 2.3 0 0 0 2.2 -1.6 l 2.1 -6.6 a 4.3 4.3 0 0 1 8.2 0 l 2.1 6.6 a 2.3 2.3 0 0 0 2.2 1.6 h 6.9 a 4.3 4.3 0 0 1 2.5 7.8 l -5.6 4.1 a 2.3 2.3 0 0 0 -0.8 2.6 l 2.1 6.6 a 4.3 4.3 0 0 1 -6.7 4.8 l -5.6 -4.1 a 2.3 2.3 0 0 0 -2.7 0 l -5.6 4.1 A 4.3 4.3 0 0 1 599.1 626.4 Z m 9.5 -7.3 a 4.3 4.3 0 0 1 2.5 0.8 l 5.6 4.1 a 2.3 2.3 0 0 0 3.6 -2.6 l -2.1 -6.6 a 4.3 4.3 0 0 1 1.6 -4.8 l 5.6 -4.1 a 2.3 2.3 0 0 0 -1.4 -4.2 h -6.9 a 4.3 4.3 0 0 1 -4.1 -3 l -2.1 -6.6 a 2.3 2.3 0 0 0 -4.4 0 l -2.1 6.6 a 4.3 4.3 0 0 1 -4.1 3 h -6.9 a 2.3 2.3 0 0 0 -1.4 4.2 l 5.6 4.1 a 4.3 4.3 0 0 1 1.6 4.8 l -2.1 6.6 a 2.3 2.3 0 0 0 3.6 2.6 l 5.6 -4.1 A 4.3 4.3 0 0 1 608.5 619 Z","transform":"translate(-199,-181.5)","fill":"#3f3d56","key":19}),React.createElement("path",{"d":"M 254 461.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 1 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":20}),React.createElement("path",{"d":"M 254 495.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 1 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":21}),React.createElement("path",{"d":"M 254 529.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 1 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":22}),React.createElement("path",{"d":"M 254 461.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 1 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":23}),React.createElement("path",{"d":"M 254 495.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 1 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":24}),React.createElement("path",{"d":"M 254 529.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 1 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":25}),React.createElement("path",{"d":"M 631 322.5 H 206 a 7 7 0 0 1 -7 -7 v -127 a 7 7 0 0 1 7 -7 H 631 a 7 7 0 0 1 7 7 v 127 A 7 7 0 0 1 631 322.5 Z m -425 -139 a 5 5 0 0 0 -5 5 v 127 a 5 5 0 0 0 5 5 H 631 a 5 5 0 0 0 5 -5 v -127 a 5 5 0 0 0 -5 -5 Z","transform":"translate(-199,-181.5)","fill":"#3f3d56","key":26}),React.createElement("path",{"d":"M 392 376 a 3.9 3.9 0 0 1 -2.3 -0.8 l -5.6 -4.1 a 2.7 2.7 0 0 0 -3.2 0 l -5.6 4.1 a 3.9 3.9 0 0 1 -6.1 -4.4 l 2.1 -6.6 a 2.7 2.7 0 0 0 -1 -3 l -5.6 -4.1 a 3.9 3.9 0 0 1 2.3 -7.1 h 6.9 a 2.7 2.7 0 0 0 2.6 -1.9 l 2.1 -6.6 a 3.9 3.9 0 0 1 7.5 0 l 2.1 6.6 a 2.7 2.7 0 0 0 2.6 1.9 h 6.9 a 3.9 3.9 0 0 1 2.3 7.1 l -5.6 4.1 a 2.7 2.7 0 0 0 -1 3 l 2.1 6.6 a 3.9 3.9 0 0 1 -1.4 4.4 A 3.9 3.9 0 0 1 392 376 Z","transform":"translate(-199,-181.5)","fill":"#493165","key":27}),React.createElement("path",{"d":"M 448.5 376 a 3.9 3.9 0 0 1 -2.3 -0.8 l -5.6 -4.1 a 2.7 2.7 0 0 0 -3.2 0 l -5.6 4.1 a 3.9 3.9 0 0 1 -6.1 -4.4 l 2.1 -6.6 a 2.7 2.7 0 0 0 -1 -3 l -5.6 -4.1 a 3.9 3.9 0 0 1 2.3 -7.1 h 6.9 a 2.7 2.7 0 0 0 2.6 -1.9 l 2.1 -6.6 a 3.9 3.9 0 0 1 7.5 0 l 2.1 6.6 a 2.7 2.7 0 0 0 2.6 1.9 h 6.9 a 3.9 3.9 0 0 1 2.3 7.1 l -5.6 4.1 a 2.7 2.7 0 0 0 -1 3 l 2.1 6.6 a 3.9 3.9 0 0 1 -1.4 4.4 A 3.9 3.9 0 0 1 448.5 376 Z","transform":"translate(-199,-181.5)","fill":"#493165","key":28}),React.createElement("path",{"d":"M 505 376 a 3.9 3.9 0 0 1 -2.3 -0.8 l -5.6 -4.1 a 2.7 2.7 0 0 0 -3.2 0 l -5.6 4.1 a 3.9 3.9 0 0 1 -6.1 -4.4 l 2.1 -6.6 a 2.7 2.7 0 0 0 -1 -3 l -5.6 -4.1 a 3.9 3.9 0 0 1 2.3 -7.1 h 6.9 a 2.7 2.7 0 0 0 2.6 -1.9 l 2.1 -6.6 a 3.9 3.9 0 0 1 7.5 0 l 2.1 6.6 a 2.7 2.7 0 0 0 2.6 1.9 h 6.9 a 3.9 3.9 0 0 1 2.3 7.1 l -5.6 4.1 a 2.7 2.7 0 0 0 -1 3 l 2.1 6.6 a 3.9 3.9 0 0 1 -1.4 4.4 A 3.9 3.9 0 0 1 505 376 Z","transform":"matrix(1,0,0,1,-199,-181.5)","fill":"#493165","key":29}),React.createElement("path",{"d":"M 599.1 376.4 a 4.3 4.3 0 0 1 -2.5 -0.8 a 4.3 4.3 0 0 1 -1.6 -4.8 l 2.1 -6.6 a 2.3 2.3 0 0 0 -0.8 -2.6 l -5.6 -4.1 a 4.3 4.3 0 0 1 2.5 -7.8 H 600.1 a 2.3 2.3 0 0 0 2.2 -1.6 l 2.1 -6.6 a 4.3 4.3 0 0 1 8.2 0 l 2.1 6.6 a 2.3 2.3 0 0 0 2.2 1.6 h 6.9 a 4.3 4.3 0 0 1 2.5 7.8 l -5.6 4.1 a 2.3 2.3 0 0 0 -0.8 2.6 l 2.1 6.6 a 4.3 4.3 0 0 1 -6.7 4.8 l -5.6 -4.1 a 2.3 2.3 0 0 0 -2.7 0 l -5.6 4.1 A 4.3 4.3 0 0 1 599.1 376.4 Z m 9.5 -7.3 a 4.3 4.3 0 0 1 2.5 0.8 l 5.6 4.1 a 2.3 2.3 0 0 0 3.6 -2.6 l -2.1 -6.6 a 4.3 4.3 0 0 1 1.6 -4.8 l 5.6 -4.1 a 2.3 2.3 0 0 0 -1.4 -4.2 h -6.9 a 4.3 4.3 0 0 1 -4.1 -3 l -2.1 -6.6 a 2.3 2.3 0 0 0 -4.4 0 l -2.1 6.6 a 4.3 4.3 0 0 1 -4.1 3 h -6.9 a 2.3 2.3 0 0 0 -1.4 4.2 l 5.6 4.1 a 4.3 4.3 0 0 1 1.6 4.8 l -2.1 6.6 a 2.3 2.3 0 0 0 3.6 2.6 l 5.6 -4.1 A 4.3 4.3 0 0 1 608.5 369 Z","transform":"translate(-199,-181.5)","fill":"#3f3d56","key":30}),React.createElement("path",{"d":"M 542.1 376.2 a 4.3 4.3 0 0 1 -2.5 -0.8 a 4.3 4.3 0 0 1 -1.6 -4.8 l 2.1 -6.6 a 2.3 2.3 0 0 0 -0.8 -2.6 l -5.6 -4.1 A 4.3 4.3 0 0 1 536.2 349.5 H 543.1 a 2.3 2.3 0 0 0 2.2 -1.6 l 2.1 -6.6 a 4.3 4.3 0 0 1 8.2 0 l 2.1 6.6 a 2.3 2.3 0 0 0 2.2 1.6 h 6.9 a 4.3 4.3 0 0 1 2.5 7.8 l -5.6 4.1 a 2.3 2.3 0 0 0 -0.8 2.6 l 2.1 6.6 a 4.3 4.3 0 0 1 -6.7 4.8 l -5.6 -4.1 a 2.3 2.3 0 0 0 -2.7 0 l -5.6 4.1 A 4.3 4.3 0 0 1 542.1 376.2 Z m 9.5 -7.3 a 4.3 4.3 0 0 1 2.5 0.8 l 5.6 4.1 a 2.3 2.3 0 0 0 3.6 -2.6 l -2.1 -6.6 a 4.3 4.3 0 0 1 1.6 -4.8 l 5.6 -4.1 a 2.3 2.3 0 0 0 -1.4 -4.2 h -6.9 a 4.3 4.3 0 0 1 -4.1 -3 l -2.1 -6.6 a 2.3 2.3 0 0 0 -4.4 0 l -2.1 6.6 A 4.3 4.3 0 0 1 543.1 351.5 h -6.9 a 2.3 2.3 0 0 0 -1.4 4.2 l 5.6 4.1 a 4.3 4.3 0 0 1 1.6 4.8 l -2.1 6.6 a 2.3 2.3 0 0 0 3.6 2.6 l 5.6 -4.1 A 4.3 4.3 0 0 1 551.5 368.9 Z","transform":"translate(-199,-181.5)","fill":"#3f3d56","key":31}),React.createElement("path",{"d":"M 254 211.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 0 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":32}),React.createElement("path",{"d":"M 254 245.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 0 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":33}),React.createElement("path",{"d":"M 254 279.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 0 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":34}),React.createElement("path",{"d":"M 254 211.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 0 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":35}),React.createElement("path",{"d":"M 254 245.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 0 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":36}),React.createElement("path",{"d":"M 254 279.5 a 6.5 6.5 0 0 0 0 13 h 329 a 6.5 6.5 0 0 0 0 -13 Z","transform":"translate(-199,-181.5)","fill":"#cccccc","key":37}),React.createElement("path",{"fill":"#493165","transform":"matrix(1,0,0,1,-199,-181.5)","d":"M 561.1 375.5 C 560.2 375.5 559.4 375.2 558.8 374.7 l -5.6 -4.1 C 552.2 369.9 550.9 369.9 550 370.6 l -5.6 4.1 C 543 375.8 541.1 375.8 539.7 374.8 C 538.2 373.8 537.7 371.9 538.3 370.3 l 2.1 -6.6 C 540.7 362.6 540.3 361.4 539.4 360.7 l -5.6 -4.1 C 532.4 355.6 531.8 353.8 532.3 352.2 C 532.8 350.5 534.4 349.4 536.1 349.5 h 6.9 C 544.2 349.5 545.2 348.7 545.6 347.6 l 2.1 -6.6 C 548.2 339.3 549.7 338.2 551.4 338.2 C 553.2 338.2 554.7 339.3 555.2 341 l 2.1 6.6 C 557.6 348.7 558.7 349.5 559.9 349.5 h 6.9 C 568.5 349.4 570 350.5 570.6 352.2 C 571.1 353.8 570.5 355.6 569.1 356.6 l -5.6 4.1 C 562.5 361.4 562.1 362.6 562.5 363.7 l 2.1 6.6 C 565.1 371.9 564.6 373.7 563.2 374.7 C 562.6 375.1 561.8 375.4 561.1 375.5 Z","key":38}),React.createElement("path",{"fill":"#493165","transform":"matrix(1,0,0,1,-199,-181.5)","d":"M 619.1 376.5 C 618.2 376.5 617.4 376.2 616.8 375.7 l -5.6 -4.1 C 610.2 370.9 608.9 370.9 608 371.6 l -5.6 4.1 C 601 376.8 599.1 376.8 597.7 375.8 C 596.2 374.8 595.7 372.9 596.3 371.3 l 2.1 -6.6 C 598.7 363.6 598.3 362.4 597.4 361.7 l -5.6 -4.1 C 590.4 356.6 589.8 354.8 590.3 353.2 C 590.8 351.5 592.4 350.4 594.1 350.5 h 6.9 C 602.2 350.5 603.2 349.7 603.6 348.6 l 2.1 -6.6 C 606.2 340.3 607.7 339.2 609.4 339.2 C 611.2 339.2 612.7 340.3 613.2 342 l 2.1 6.6 C 615.6 349.7 616.7 350.5 617.9 350.5 h 6.9 C 626.5 350.4 628 351.5 628.6 353.2 C 629.1 354.8 628.5 356.6 627.1 357.6 l -5.6 4.1 C 620.5 362.4 620.1 363.6 620.5 364.7 l 2.1 6.6 C 623.1 372.9 622.6 374.7 621.2 375.7 C 620.6 376.1 619.8 376.4 619.1 376.5 Z","key":39}),React.createElement("path",{"fill":"#493165","transform":"matrix(1,0,0,1,-199,-181.5)","d":"M 617.6 625.5 C 616.7 625.5 615.9 625.2 615.3 624.7 l -5.6 -4.1 C 608.7 619.9 607.4 619.9 606.5 620.6 L 601 624.7 C 599.6 625.8 597.7 625.8 596.3 624.8 C 594.8 623.8 594.3 621.9 594.9 620.3 l 2.1 -6.6 C 597.3 612.6 596.9 611.4 596 610.7 l -5.6 -4.1 C 589 605.6 588.4 603.8 588.9 602.2 C 589.4 600.5 591 599.4 592.7 599.5 h 6.9 C 600.8 599.5 601.8 598.7 602.2 597.6 l 2.1 -6.6 C 604.8 589.3 606.3 588.2 608 588.2 C 609.8 588.2 611.3 589.3 611.8 591 l 2.1 6.6 C 614.2 598.7 615.3 599.5 616.5 599.5 h 6.9 C 625.1 599.4 626.6 600.5 627.2 602.2 C 627.7 603.8 627.1 605.6 625.7 606.6 l -5.6 4.1 C 619.1 611.4 618.7 612.6 619.1 613.7 l 2.1 6.6 C 621.7 621.9 621.2 623.7 619.9 624.7 C 619.2 625.2 618.4 625.5 617.6 625.5 Z","key":40})]);
}

UndrawReviews.defaultProps = {"data-name":"Layer 1","width":"802","height":"537","viewBox":"0 0 801.95277 537"};

module.exports = UndrawReviews;

UndrawReviews.default = UndrawReviews;


/***/ }),

/***/ "./src/images/undraw/undraw_super_woman.svg":
/*!**************************************************!*\
  !*** ./src/images/undraw/undraw_super_woman.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function UndrawSuperWoman (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"super woman"),React.createElement("ellipse",{"cx":"449.78288","cy":"728.92428","rx":"283","ry":"43","fill":"#f2f2f2","key":1}),React.createElement("path",{"d":"M797.69781,640.497a20.81252,20.81252,0,1,0,2.7716-39.91523l.52093,10.7122-5.06814-9.18046a20.734,20.734,0,0,0-10.68367,11.72261,20.40854,20.40854,0,0,0-1.19713,5.62987A20.80853,20.80853,0,0,0,797.69781,640.497Z","transform":"translate(-170.10856 -63.78786)","fill":"#8BC74B","key":2}),React.createElement("path",{"d":"M822.77515,764.74043c-1.78905-9.11027,5.96331-17.1868,13.62087-22.43652s16.605-10.40779,19.21775-19.31684c3.755-12.80387-7.43-24.5298-16.13564-34.64175a125.30021,125.30021,0,0,1-16.52359-24.55739c-1.81108-3.5325-3.47558-7.22527-3.95222-11.16626-.6864-5.67546,1.13694-11.32308,2.97391-16.73673q9.17924-27.05168,19.62843-53.65005","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":3}),React.createElement("path",{"d":"M798.55493,637.73906a20.81252,20.81252,0,1,0,2.7716-39.91523l.52093,10.7122-5.06815-9.18045a20.734,20.734,0,0,0-10.68367,11.7226,20.40888,20.40888,0,0,0-1.19712,5.62987A20.80853,20.80853,0,0,0,798.55493,637.73906Z","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":4}),React.createElement("path",{"d":"M820.23135,578.53552a20.78824,20.78824,0,0,1,14.97993-13.19763l1.71362,10.18378,3.177-10.69567a20.81,20.81,0,1,1-19.87058,13.70952Z","transform":"translate(-170.10856 -63.78786)","fill":"#8BC74B","key":5}),React.createElement("path",{"d":"M821.37418,574.85827a20.78818,20.78818,0,0,1,14.97993-13.19763l1.71361,10.18378,3.177-10.69567a20.81,20.81,0,1,1-19.87057,13.70952Z","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":6}),React.createElement("path",{"d":"M835.82474,688.55172a20.81,20.81,0,0,0,18.419-37.02268l-2.44121,8.21926-1.73106-10.30382a.36335.36335,0,0,0-.053-.02009,20.81113,20.81113,0,1,0-14.1938,39.12733Z","transform":"translate(-170.10856 -63.78786)","fill":"#8BC74B","key":7}),React.createElement("path",{"d":"M836.815,684.827a20.81,20.81,0,0,0,18.419-37.02268l-2.44121,8.21926-1.731-10.30382a.36307.36307,0,0,0-.053-.02009A20.81113,20.81113,0,1,0,836.815,684.827Z","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":8}),React.createElement("path",{"d":"M814.15782,723.11434A20.80131,20.80131,0,1,0,818.1684,706.817l9.27267,13.95654-12.66994-7.40769A20.61627,20.61627,0,0,0,814.15782,723.11434Z","transform":"translate(-170.10856 -63.78786)","fill":"#8BC74B","key":9}),React.createElement("path",{"d":"M815.01494,720.35641a20.80131,20.80131,0,1,0,4.01058-16.29737l9.27266,13.95654-12.66994-7.40769A20.61642,20.61642,0,0,0,815.01494,720.35641Z","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":10}),React.createElement("path",{"d":"M756.86664,177.62556a58.487,58.487,0,0,1,58.40593-55.43027c1.77754,0,3.5328.09271,5.26995.248a77.70681,77.70681,0,0,1,134.32685-.06351c1.46553-.11007,2.94093-.18445,4.43459-.18445a58.487,58.487,0,0,1,58.40593,55.43027","transform":"translate(-170.10856 -63.78786)","fill":"#f2f2f2","key":11}),React.createElement("path",{"d":"M769.04819,173.12649a58.487,58.487,0,0,1,58.40593-55.43026c1.77754,0,3.5328.0927,5.26995.248a77.70681,77.70681,0,0,1,134.32685-.06351c1.46553-.11007,2.94092-.18445,4.43459-.18445a58.487,58.487,0,0,1,58.40593,55.43026","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":12}),React.createElement("path",{"d":"M331.86664,455.62556a58.487,58.487,0,0,1,58.40593-55.43027c1.77754,0,3.5328.09271,5.27.248a77.70681,77.70681,0,0,1,134.32685-.06351c1.46553-.11007,2.94093-.18445,4.43459-.18445a58.487,58.487,0,0,1,58.40593,55.43027","transform":"translate(-170.10856 -63.78786)","fill":"#f2f2f2","key":13}),React.createElement("path",{"d":"M344.04819,451.12649a58.487,58.487,0,0,1,58.40593-55.43026c1.77754,0,3.5328.0927,5.26995.248a77.70681,77.70681,0,0,1,134.32685-.06351c1.46553-.11007,2.94092-.18445,4.43459-.18445a58.487,58.487,0,0,1,58.40593,55.43026","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":14}),React.createElement("path",{"d":"M207.86664,162.62556a58.487,58.487,0,0,1,58.40593-55.43027c1.77754,0,3.5328.09271,5.27.248a77.70681,77.70681,0,0,1,134.32685-.06351c1.46553-.11007,2.94093-.18445,4.43459-.18445a58.487,58.487,0,0,1,58.40593,55.43027","transform":"translate(-170.10856 -63.78786)","fill":"#f2f2f2","key":15}),React.createElement("path",{"d":"M220.04819,158.12649a58.487,58.487,0,0,1,58.40593-55.43026c1.77754,0,3.5328.0927,5.26995.248a77.70681,77.70681,0,0,1,134.32685-.06351c1.46553-.11007,2.94092-.18445,4.43459-.18445a58.487,58.487,0,0,1,58.40593,55.43026","transform":"translate(-170.10856 -63.78786)","fill":"none","stroke":"#3f3d56","strokeMiterlimit":"10","key":16}),React.createElement("path",{"d":"M465.161,281.26091s105.12,52.19753,123.96913,44.94787,25.3738-71.7716,25.3738-71.7716l-77.57133-14.49931Z","transform":"translate(-170.10856 -63.78786)","fill":"#493165","key":17}),React.createElement("path",{"d":"M465.161,281.26091s105.12,52.19753,123.96913,44.94787,25.3738-71.7716,25.3738-71.7716l-77.57133-14.49931Z","transform":"translate(-170.10856 -63.78786)","opacity":"0.1","key":18}),React.createElement("rect",{"x":"444.03289","y":"139.53925","width":"68.87174","height":"60.17215","fill":"#ff6584","key":19}),React.createElement("rect",{"x":"444.03289","y":"139.53925","width":"68.87174","height":"60.17215","opacity":"0.1","key":20}),React.createElement("path",{"d":"M551.43193,459.60246s-2.89987,63.072,16.67421,61.62208,0-59.44718,0-59.44718Z","transform":"translate(-170.10856 -63.78786)","fill":"#fbbebe","key":21}),React.createElement("path",{"d":"M631.90311,212.38917s4.3498,27.5487-3.62483,31.17353-13.04938,6.52469-13.04938,6.52469L633.353,262.4118l33.34842,2.1749,8.69959-6.52469,7.97462-7.24966s-13.04938-2.89986-13.04938-9.42455-.725-26.09876-.725-26.09876Z","transform":"translate(-170.10856 -63.78786)","fill":"#fbbebe","key":22}),React.createElement("path",{"d":"M631.90311,212.38917s4.3498,27.5487-3.62483,31.17353-13.04938,6.52469-13.04938,6.52469L633.353,262.4118l33.34842,2.1749,8.69959-6.52469,7.97462-7.24966s-13.04938-2.89986-13.04938-9.42455-.725-26.09876-.725-26.09876Z","transform":"translate(-170.10856 -63.78786)","opacity":"0.1","key":23}),React.createElement("path",{"d":"M586.23028,470.477s-21.024,67.4218-21.024,116.71947c0,0-34.79835,78.29629-33.34842,116.71947l-8.69958,52.92249,12.32441,4.34979,9.42455-7.97462s2.89987-28.27366,12.32442-42.048,31.17352-79.02125,31.17352-79.02125,57.99726-121.79423,55.82236-139.19341S586.23028,470.477,586.23028,470.477Z","transform":"translate(-170.10856 -63.78786)","fill":"#fbbebe","key":24}),React.createElement("path",{"d":"M714.5492,455.25267s13.77434,6.52469-5.79973,122.51919c0,0,10.87449,76.84636,1.44993,118.89437l-1.44993,42.048H693.52519l-2.89986-4.3498s-.725-37.69821-5.79972-47.84773-9.42456-68.87174-9.42456-68.87174-23.1989-119.61933-18.12414-129.76885S714.5492,455.25267,714.5492,455.25267Z","transform":"translate(-170.10856 -63.78786)","fill":"#fbbebe","key":25}),React.createElement("path",{"d":"M520.98337,744.514s5.07476,11.59945,14.49931,8.69959,11.59945-2.89986,11.59945-2.89986-6.52469,33.34842-4.34979,49.29766-1.44993,26.09877-15.94925,26.09877-16.67421-17.39918-16.67421-17.39918l6.52469-41.323Z","transform":"translate(-170.10856 -63.78786)","fill":"#2f2e41","key":26}),React.createElement("path",{"d":"M687.72547,726.38982s5.07476,10.14952,13.04938,7.97462,10.87448-5.79972,10.87448-5.79972-.725,22.47393,2.1749,32.62345,9.42456,39.14815-5.79972,40.59808a19.57344,19.57344,0,0,1-20.299-11.59945v-63.797Z","transform":"translate(-170.10856 -63.78786)","fill":"#2f2e41","key":27}),React.createElement("circle",{"cx":"481.36863","cy":"135.55194","r":"31.89849","fill":"#fbbebe","key":28}),React.createElement("path",{"d":"M710.1994,256.61208s-25.26734-9.92145-34.38264-8.58555a37.25942,37.25942,0,0,1-28.68937,8.58555c-17.39917-2.1749-24.2029-10.52478-24.2029-10.52478s-46.84373,10.52478-43.94387,14.87457,15.94924,75.39643,15.94924,75.39643,8.69959,61.62208-1.44993,82.64609-15.22428,55.82235-10.87448,58.72221,52.92249,15.94925,58.72222,19.57408,7.97462-8.69959,11.59945-6.52469,11.59945,5.79972,16.67421,2.89986,54.37242-28.99863,52.92249-34.07339-20.299-66.69684-26.82373-79.02125-1.44993-38.42318,2.1749-43.49794,10.87448-10.87449,12.32441-25.3738S710.1994,256.61208,710.1994,256.61208Z","transform":"translate(-170.10856 -63.78786)","fill":"#2f2e41","key":29}),React.createElement("path",{"d":"M580.57841,258.72133s-5.94758,4.41544-8.12248,13.84-5.07476,84.821-5.07476,84.821-26.82373,103.67008-21.024,105.845,22.47393,6.52469,24.64883,4.34979,26.82373-89.89574,24.64883-99.32029,2.89986-36.97325,2.89986-36.97325Z","transform":"translate(-170.10856 -63.78786)","fill":"#2f2e41","key":30}),React.createElement("path",{"d":"M714.5492,393.63059s-39.14815-19.57407-43.49794-6.52469,41.323,26.82373,41.323,26.82373,15.94924-5.79973,15.94924-9.42456S714.5492,393.63059,714.5492,393.63059Z","transform":"translate(-170.10856 -63.78786)","fill":"#fbbebe","key":31}),React.createElement("path",{"d":"M702.22478,259.51194l7.97462-2.89986s4.3498-2.89986,9.42456,7.97462,60.17215,74.67146,50.02263,94.9705-43.49794,61.62208-44.94787,58.72222-18.12414-24.64883-15.22428-26.82373,36.24828-31.89849,31.89849-36.24828-22.47394-41.323-32.62346-42.773S702.22478,259.51194,702.22478,259.51194Z","transform":"translate(-170.10856 -63.78786)","fill":"#2f2e41","key":32}),React.createElement("path",{"d":"M616.31635,198.25234s-110.54869-44.44993-206.24416-87.2229c0,0-50.02263-12.32442-76.12139,10.87448,0,0,21.749-2.89986,21.749,9.42456,0,0,18.8491,24.64883-39.87311,28.99862-40.89583,3.02933-57.17843,27.50732-63.29552,42.08979A59.24487,59.24487,0,0,1,228.57346,230.587c-14.13464,8.44768-34.62017,14.66271-58.4649,3.68656,0,0,1.35559,2.084,3.92695,5.55645,46.0383,62.17216,217.481,116.28076,278.02235,68.11808,37.41476-29.7647,96.72794-67.385,139.24718-48.43619,66.69684,29.72359,79.02125,16.67421,79.02125,16.67421l2.89987-7.97462s-64.522-17.39918-65.97188-39.87311S616.31635,198.25234,616.31635,198.25234Z","transform":"translate(-170.10856 -63.78786)","fill":"#493165","key":33}),React.createElement("path",{"d":"M680.83829,204.05207s15.58677,6.16221,18.48663,26.46125c0,0,16.67421,32.62345-2.1749,40.59807s-22.47393,5.79973-22.47393,5.79973v-3.62483s20.299-12.32442,15.94924-21.749S680.83829,204.05207,680.83829,204.05207Z","transform":"translate(-170.10856 -63.78786)","fill":"#493165","key":34}),React.createElement("path",{"d":"M652.92712,296.48519s5.07476-13.04938,3.62483-13.04938,5.89836-8.026,8.7489-5.10045,7.92531,11.62514,2.12558,13.8S652.92712,296.48519,652.92712,296.48519Z","transform":"translate(-170.10856 -63.78786)","fill":"#493165","key":35}),React.createElement("path",{"d":"M688.656,288.73956s-13.25223-4.51862-13.19094-3.07-8.26815-5.55384-5.46571-8.5255,11.27974-8.40961,13.69785-2.707S688.656,288.73956,688.656,288.73956Z","transform":"translate(-170.10856 -63.78786)","fill":"#493165","key":36}),React.createElement("path",{"d":"M667.42643,268.9365s6.61905-3.71513,10.55918,2.12974-4.75945,15.9944-10.55918,15.9944-5.79973-12.32442-5.79973-12.32442Z","transform":"translate(-170.10856 -63.78786)","fill":"#493165","key":37}),React.createElement("path",{"d":"M667.42643,268.9365s6.61905-3.71513,10.55918,2.12974-4.75945,15.9944-10.55918,15.9944-5.79973-12.32442-5.79973-12.32442Z","transform":"translate(-170.10856 -63.78786)","opacity":"0.1","key":38}),React.createElement("path",{"d":"M623.82107,147.28577c-3.82238,3.15091-7.44723,6.682-9.82414,11.0281a49.47886,49.47886,0,0,0-3.11533,7.58425c-2.93163,8.43717-10.21915,16.98234-7.13481,25.36489.88011,2.39193,2.25238,4.91391,1.46341,7.33743-.70069,2.15231-2.86338,3.40831-4.42762,5.04432-3.35738,3.51142-3.92177,8.78008-4.12686,13.634-.3756,8.8891,4.51213,19.36439,10.418,26.01854a36.35608,36.35608,0,0,1,3.55418,4.0236,9.43178,9.43178,0,0,1,1.1133,7.75883l8.60341-1.79561a71.36278,71.36278,0,0,1,.29032,9.55906,8.92381,8.92381,0,0,0,9.46276-6.11555,25.551,25.551,0,0,0,2.36354,6.53063,33.70927,33.70927,0,0,0,5.71418-10.58251,30.25635,30.25635,0,0,0,1.02617-15.2781,64.78435,64.78435,0,0,0-3.70426-10.85941c-3.04-7.68275-5.52249-15.57226-8.00218-23.4537-1.28788-4.09341-2.59131-8.31991-2.201-12.59335l3.057-.3325a14.59645,14.59645,0,0,1,.96489-4.93366,18.10138,18.10138,0,0,1,5.11254,1.92416l3.52412-8.94225c2.3259,2.41217,5.66385,3.504,8.86,4.51037l12.14847,3.82516.07395-2.40425a62.35343,62.35343,0,0,0,17.28717,10.84362,3.93274,3.93274,0,0,1-.85375-3.12932c2.99375,5.36313,1.79654,12.04445-.05106,17.9021s-4.29883,11.82112-3.55478,17.918c.55648,4.55993,2.89237,8.92087,2.45932,13.49417-.21326,2.25209-1.09408,4.39517-1.368,6.64069-.65327,5.35552,2.16255,10.45542,4.88066,15.11592l5.28537-7.25854c1.93437-2.65651,3.92822-5.37093,6.66714-7.18672,2.81156-1.864,6.2965-2.70073,8.74663-5.01936,4.37384-4.1391,3.81852-11.19066,2.39615-17.04212-.75612-3.11056-1.67107-6.26525-1.39309-9.4543.47124-5.40617,4.22787-9.87921,6.34364-14.87644a25.82573,25.82573,0,0,0-1.44726-22.70338c-2.62532-4.50312-6.59227-8.12979-9.06629-12.71777-2.46279-4.56715-3.40224-10.0014-6.77676-13.94308a23.52175,23.52175,0,0,0-5.6807-4.526,74.05661,74.05661,0,0,0-31.5064-10.27882C640.835,136.812,631.91946,140.61,623.82107,147.28577Z","transform":"translate(-170.10856 -63.78786)","fill":"#ff6584","key":39})]);
}

UndrawSuperWoman.defaultProps = {"data-name":"Layer 1","width":"860.28222","height":"771.92428","viewBox":"0 0 860.28222 771.92428"};

module.exports = UndrawSuperWoman;

UndrawSuperWoman.default = UndrawSuperWoman;


/***/ }),

/***/ "./src/images/undraw/undraw_woman_white.svg":
/*!**************************************************!*\
  !*** ./src/images/undraw/undraw_woman_white.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function UndrawWomanWhite (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M 526.4 329.6 c 19.9 12.8 38.5 30 56 51.2 v 32.4 c -8.5 -2.9 -41 -14.9 -53.9 -33.9 c -14.8 -22 -17.5 -55.3 -5.1 -63.7 c 3.2 -2.2 7.1 -2.4 11.4 -1.3 c 13.5 9.7 26.5 21.5 38.8 35.3 c 4.4 6.7 7.1 15.3 8.8 24 v 0.4 c -16 -22.3 -34.8 -36.7 -56 -44.4 Z","fill":"#fbfbfb","key":0}),React.createElement("path",{"d":"M 525.4 130.6 c 19.9 12.8 38.5 30 56 51.2 v 7.4 c -1.7 -0.6 -4.3 -1.5 -7.4 -2.7 c -14.3 -16.9 -30.6 -28.3 -48.6 -34.9 c 12.6 8.1 24.7 18 36.3 29.5 c -12.3 -5.9 -26.6 -14.7 -34.2 -25.8 c -0.8 -1.2 -1.6 -2.4 -2.3 -3.6 c -12.7 -21.1 -13.5 -44.2 -1.8 -52.1 c 12.4 -8.4 34 3.5 48.9 25.4 c 8.6 12.7 11 32.4 11.5 46.8 c -0.8 1 -1.6 2.1 -2.3 3.2 c -16 -22.3 -34.8 -36.7 -56 -44.4 Z","fill":"#fbfbfb","key":1}),React.createElement("path",{"d":"M 638.6 248.8 v 0 c -1.4 3.9 -3.2 7.9 -5.3 11.8 c -3.1 5.8 -8 11.2 -13.5 16 c -5.9 5.2 -12.5 9.7 -18.6 13.4 c -8.5 5.1 -16 8.6 -18.9 9.9 v -3.1 c 16.9 -20.1 34.8 -36.5 54 -48.8 c -20.3 7.4 -38.4 21 -54 41.7 v -13.9 c 16.9 -20.1 34.8 -36.5 54 -48.8 c -20.3 7.4 -38.4 21 -54 41.7 v -13.9 c 16.7 -19.8 34.4 -36 53.2 -48.3 c 8.8 7.1 9.6 24.3 3 42.3 v 0 Z","fill":"#fbfbfb","key":2}),React.createElement("circle",{"cx":"143.7","cy":"245.5","r":"143.7","fill":"#ff6884","key":3}),React.createElement("path",{"id":"uuid-9ac3c440-2c29-483e-b5ea-f157a67fda2d-137","d":"M 593.9 475.9 c 12.1 10.2 16.6 24.7 10.1 32.4 c -6.5 7.7 -21.5 5.7 -33.6 -4.5 c -4.9 -4 -8.7 -9.1 -11.2 -14.9 l -50.7 -43.8 l 21.1 -23.3 l 47.7 45.6 c 6.1 1.5 11.8 4.4 16.6 8.6 h 0 Z","fill":"#fcb4b4","key":4}),React.createElement("polygon",{"points":"553,443.5 491,364 432.4,256.6 430.8,405.5 518.8,477.7 553,443.5","fill":"#2f2e41","key":5}),React.createElement("polygon",{"points":"283.6,224.6 297.7,160.1 345.2,162.4 357.3,209.2 283.6,224.6","fill":"#fcb4b4","key":6}),React.createElement("polygon",{"points":"283.6,224.6 297.7,160.1 345.2,162.4 357.3,209.2 283.6,224.6","isolation":"isolate","opacity":".1","key":7}),React.createElement("circle",{"cx":"320.3","cy":"124.3","r":"53.1","fill":"#fcb4b4","key":8}),React.createElement("path",{"d":"M 296.5 144.8 v 0 s -5.4 -0.1 -16.5 -2.1 c -11.1 -2.1 8.2 24 8.2 24 c -52.4 -21.9 -35.6 -77.4 -35.6 -77.4 c -53.2 -10.2 -30.9 -57.5 -30.9 -57.5 c 0 0 17.5 -33.8 71.5 -31.7 c 53.9 2.2 28.4 55.3 28.4 55.3 c 35.1 0.1 39.1 31.7 39.1 31.7 c 0 0 -12.7 1.6 -35.7 7.4 c -23 5.8 -28.4 50.3 -28.4 50.3 l 0 0 l 0 0 h 0 Z","fill":"#2f2e41","key":9}),React.createElement("path",{"d":"M 294.4 204.3 l -2.4 -4.7 s -42.7 4.9 -49.7 11.5 s -23 35.5 -23 35.5 l 35 30 l 40.1 -72.3 v 0 Z","fill":"#ffb6b6","key":10}),React.createElement("path",{"d":"M 347.4 203.2 s 32 -8.5 50 9.5 s 39 51 39 51 l -1 26 l -50 -24.1 l -38 -62.4 v 0 Z","fill":"#ffb6b6","key":11}),React.createElement("path",{"d":"M 355.5 199.6 s 41.8 -15 68.8 17 s 35 133 35 133 c 0 0 61 187 46 189 s -106.5 7.5 -106.5 7.5 l -31.5 -203.5 l -14 -143 h 2.2 v 0 Z","fill":"#2f2e41","key":12}),React.createElement("path",{"d":"M 259.4 379.6 l -10 36 l 136 10 s -5 -30.1 0 -41 l -126 -5 Z","fill":"#fcb4b4","key":13}),React.createElement("polygon",{"points":"336.4,613.6 342.4,699.6 417.9,697.6 415.4,610.6 336.4,613.6","fill":"#fcb4b4","key":14}),React.createElement("polygon",{"points":"218.5,605.1 196.4,698.6 275.4,698.1 295.6,621.7 218.5,605.1","fill":"#fcb4b4","key":15}),React.createElement("path",{"d":"M 353.4 199.6 h -61.3 l -49.7 66 l 11 135 s 25 -7 60 -7 h 75 s -11 -35 3 -49 s 4 -79 4 -79 l -42 -66 v 0 Z","fill":"#fbfbfb","key":16}),React.createElement("path",{"d":"M 244.4 404.6 l -56 203 s 82.5 33.1 132.2 23.6 s 117.8 -12.6 117.8 -12.6 l -48 -206 l -146 -8 v 0 Z","fill":"#2f2e41","key":17}),React.createElement("path",{"id":"uuid-73c6c48b-3ad6-4bf4-ae9b-2aead64e96c3-138","d":"M 373.9 478.9 c 12.1 10.2 16.6 24.7 10.1 32.4 c -6.5 7.7 -21.5 5.7 -33.6 -4.5 c -4.9 -4 -8.7 -9.1 -11.2 -14.9 l -50.7 -43.8 l 21.1 -23.3 l 47.7 45.6 c 6.1 1.5 11.8 4.4 16.6 8.6 Z","fill":"#fcb4b4","key":18}),React.createElement("polygon",{"points":"343,443.5 281,364 222.4,256.6 220.8,405.5 308.8,477.7 343,443.5","fill":"#2f2e41","key":19}),React.createElement("path",{"d":"M 296.2 199.6 s -41.8 -15 -68.8 17 s -35 133 -35 133 c 0 0 -61 187 -46 189 s 106.5 7.5 106.5 7.5 l 31.5 -203.5 l 14 -143 h -2.2 v 0 Z","fill":"#2f2e41","key":20}),React.createElement("rect",{"x":"581.4","y":"161.6","width":"2","height":"348","fill":"rgb(255, 255, 255)","key":21}),React.createElement("path",{"d":"M 27.4 518.6 c 19.9 12.8 38.5 30 56 51.2 v 32.4 c -8.5 -2.9 -41 -14.9 -53.9 -33.9 c -14.8 -22 -17.5 -55.3 -5.1 -63.7 c 3.2 -2.2 7.1 -2.4 11.4 -1.3 c 13.5 9.7 26.5 21.5 38.8 35.3 c 4.4 6.7 7.1 15.3 8.8 24 v 0.4 c -16 -22.3 -34.8 -36.7 -56 -44.4 Z","fill":"#fbfbfb","key":22}),React.createElement("path",{"d":"M 26.4 319.6 c 19.9 12.8 38.5 30 56 51.2 v 7.4 c -1.7 -0.6 -4.3 -1.5 -7.4 -2.7 c -14.3 -16.9 -30.6 -28.3 -48.6 -34.9 c 12.6 8.1 24.7 18 36.3 29.5 c -12.3 -5.9 -26.6 -14.7 -34.2 -25.8 c -0.8 -1.2 -1.6 -2.4 -2.3 -3.6 c -12.7 -21.1 -13.5 -44.2 -1.8 -52.1 c 12.4 -8.4 34 3.5 48.9 25.4 c 8.6 12.7 11 32.4 11.5 46.8 c -0.8 1 -1.6 2.1 -2.3 3.2 c -16 -22.3 -34.8 -36.7 -56 -44.4 Z","fill":"#fbfbfb","key":23}),React.createElement("path",{"d":"M 139.6 437.8 v 0 c -1.4 3.9 -3.2 7.9 -5.3 11.8 c -3.1 5.8 -8 11.2 -13.5 16 c -5.9 5.2 -12.5 9.7 -18.6 13.4 c -8.5 5.1 -16 8.6 -18.9 9.9 v -3.1 c 16.9 -20.1 34.8 -36.5 54 -48.8 c -20.3 7.4 -38.4 21 -54 41.7 v -13.9 c 16.9 -20.1 34.8 -36.5 54 -48.8 c -20.3 7.4 -38.4 21 -54 41.7 v -13.9 c 16.7 -19.8 34.4 -36 53.2 -48.3 c 8.8 7.1 9.6 24.3 3 42.3 Z","fill":"#fbfbfb","key":24}),React.createElement("rect",{"x":"82.4","y":"350.6","width":"2","height":"348","fill":"rgb(255, 255, 255)","key":25})]);
}

UndrawWomanWhite.defaultProps = {"width":"643","height":"699.6","viewBox":"0 0 642.99652 699.63874"};

module.exports = UndrawWomanWhite;

UndrawWomanWhite.default = UndrawWomanWhite;


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/create-content-digest.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/create-content-digest.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContentDigest": () => (/* binding */ createContentDigest)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var node_object_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-object-hash */ "./node_modules/node-object-hash/dist/hasher.js");


const hasher = node_object_hash__WEBPACK_IMPORTED_MODULE_1__({
  coerce: false,
  alg: `md5`,
  enc: `hex`,
  sort: {
    map: true,
    object: true,
    array: false,
    set: false
  }
});
const hashPrimitive = input => crypto__WEBPACK_IMPORTED_MODULE_0__.createHash(`md5`).update(input).digest(`hex`);

/**
 * Hashes an input using md5 hash of hexadecimal digest.
 *
 * @param input The input to encrypt
 * @return The content digest
 */

const createContentDigest = input => {
  if (typeof input === `object` && !Buffer.isBuffer(input)) {
    return hasher.hash(input);
  }
  return hashPrimitive(input);
};

/***/ }),

/***/ "./node_modules/gatsby-link/dist/index.modern.mjs":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-link/dist/index.modern.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ P),
/* harmony export */   "navigate": () => (/* binding */ E),
/* harmony export */   "parsePath": () => (/* binding */ a),
/* harmony export */   "withAssetPrefix": () => (/* binding */ y),
/* harmony export */   "withPrefix": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-page-utils/apply-trailing-slash-option */ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js");
"use client"
;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=> true? true?"":0:0;function h(t,e=(()=> true? true?"":0:0)()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:p())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const f=t=>null==t?void 0:t.startsWith("/"),u=()=> true?"always":0;function _(t,e){const{pathname:n,search:r,hash:o}=a(t);return`${(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__.applyTrailingSlashOption)(n,e)}${r}${o}`}const d=(t,e)=>"number"==typeof t?t:l(t)?f(t)?function(t){const e=h(t),n=u();return"always"===n||"never"===n?_(e,n):e}(t):function(t,e){if(f(t))return t;const r=u(),o=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.resolve)(t,e);return"always"===r||"never"===r?_(o,r):o}(t,e):t,m=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];function y(t){return h(t,p())}const v={activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3__.string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_3__.object,partiallyActive:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool};function b(t){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,({location:n})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,i({},t,{_location:n})))}class w extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(d(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver(n=>{n.forEach(n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)})});return n.observe(t),{instance:n,el:t}})(t,t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()}))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,m); false||l(n)||console.warn(`External link ${n} was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links`);const _=d(n,f.pathname);return l(_)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Link,i({to:_,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(_);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(_)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(_,{state:p,replace:e})}return!0}},u)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",i({href:_},u))}}w.propTypes=i({},v,{onClick:prop_types__WEBPACK_IMPORTED_MODULE_3__.func,to:prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,replace:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3__.object});const P=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((t,n)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,i({innerRef:n},t))),E=(t,e)=>{window.___navigate(d(t,window.location.pathname),e)};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ }),

/***/ "./public/page-data/sq/d/2057882989.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2057882989.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Thaís Basso | Nutricionista funcional e comportamental","description":"Nutricionista pós-graduada em nutrição funcional e comportamento alimentar, uma das áreas mais atuais da Nutrição. Apaixonada pela minha profissão e como ela pode mudar a vida das pessoas."}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2307700096.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2307700096.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"images":{"edges":[{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+klEQVR42h2U2VfTZwKGP7mwzEUvKvsWxCRCCJHFKAkEEwigIIgaICELAZWwDItIFCIDBBBZYpEgpBVQRAFZDUtBWRQNVFux1jo9dpx6aDlzzpz5CzzWH3zvHL19L57z3DwvUSUJSbyYTxIlISRhf7CTu5srIYQ4R+z106ZGBY9rDkf+caX02F+Xi1I+dBoVGyoJb0we4q8mhHxRV6Ii2ccSnY5E7iMKuYgo4qIJKczgk/T4PTs+UTguroTl7ZHp5+n+516WJ7herjinS0Bf1XGY9Qnoq1ZBFcuHgOWOlGjBRrNRryhUpxEAJC/j6I7ynCxCjDoBAWI+jzxf345QbgBC9viB4+PxUR7BYQbN6u0lq4k+bCmltemR23KBHyMJ3csUqJJRpk1Benz0FWuD8ZMPqSo4RcjZUpWT1WIgq7MXrKaSY/Bx9WT2sny3PHa5IPdoFG02KOj45RrcuZCL8iQhlQd702MxETgqFW2pjxxiNEflyEtPsQR85Uy47l86kYZyJTEWZiqv1pxBZVEm4+nmSb3cPeDn6UGNOVlUI5eiUa/ErXIlzCcOolDOp6IgFpXu50OXlkxzFalMqV6FqDD+ydS4mM+mzv4+ezZZHixw/dhbgiA+vtrlTQP9fHFBr0RlRhoc1kYMVmgxVpKMJqUEYp4/EsXhVJ+RDoNWu2UszIckjL8RHxuzk4SLlbrkgnpoW3o/iqUZ2B0goP7scJyra4W52IBs2UFY9GpY1Dq0ZkqQfzgMQo4PEkThOK07RcsLStFQcYERCYIRweNmEbGqdVKmqkNsRjEjlJ2kAVwxZXPF6HyyiXpTI5LDuchLlOF+/UV8k5eIff5ukAR6I0ephvFcLTUZa6i5soaJDg+BIJA7Qg5kdW16h57GLh/p9h7BcRoSpYVXYCpk6edRZchHZowQPC8XVJ6QoUkTi1BfV3Bc/obiHAPOnmtCdXUrbWnq2E6UiMFm+b4jYUkmhhNdAu4BHWWHJEF4SIvivDxUKuNQq09DiugghLu9YJDxYT2diPKkcGTHBKLdVARbRxfKzpqh0+TS1AQ5ZDHx70kAJ4LhidUQ5Q5RV7Yc5mI93tgt6Pr7EeTGhUMhEUIjDkJnthQj5WkYN2bguc2I52MdeOsYx+3uq3D5chcN4vCg1pa/Jz7enE1RQjaqm8e3e3tH6aPBLky01+Afmjioo7jIiduHQhkfttxYTJlUcHSU49exZjwdbodjogff2/toZHjktj8rCAFs4TsiSa+c1BQ14oeHC8zv/3xDJ/t66bVqI/IT9uGMPBj5iaHIOxSEgZIk2KvVWL1WgbcLffj3sxk8HrPR9dmbVCo6yHi6eGC/QDhC7nY16dbm7uK3ly8+vnj2As8eOai1zgyNNBKn4sJwWsrDJZ0UA5UZmKvX4ZW9G5uv1/Du+QM8HLbSp/e+xfXWKub4YRnYu4OyPjXs/OvLnzcXJyfwYHJm69HMAiwVhTQlgoeksCDUaI7ghikHA3Wn8NvjUbx6soD15Tms2W/Quf42rAxf3Voa6cZwd+NGrdGwk6zcGyND3V3KobYG3GmrY6x1FbSm4ATUsQdoDI9NO6vK0JyvwEzPJfw4P4gns5N0cWKMjtuacbe9mq6OdzMTPe0oM1ScNJWdJ2R9xu60cPMWmbhYYrVfqsIDWyPz89zAVkOBCgIfN2ouKaSjNgtWpkawOj1M79/upPab3bjTXrd1u+U845jsww/f9VtszV8Tq7neidyrLCIlhJAzYVwy13a5Y6atCfMWC2yl+o8Ct53Meb1y2zG/TJfsc3Rtbmp78XY7M3u9iZm+fhlTNjOWB69duXlR8/kU/vt6lpD5lhoyeenijt+z3pCNuVFiv9GWuTz67Z/z16+iv6kR5uI8zPb3YH3FgfXl77B6rxePhjqwNGTdsH/TqJi+0fkZ9npldMcvKyOE3G+pI6P1VWSk1kj+NTXoNN7TTD7gP85Pp/u1z2eWxh+vvftjbcnx10uH48Mrx8LG0+m+scU7X6vf/++XLx7cspD5AZvT22cz5OXiXfLT4ij5P99TMgoAw8f8AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/0ddd656d49811373551b77f30414dcb2/677b8/andressa-morari-canal.png","srcSet":"/static/0ddd656d49811373551b77f30414dcb2/677b8/andressa-morari-canal.png 66w","sizes":"100vw"},"sources":[{"srcSet":"/static/0ddd656d49811373551b77f30414dcb2/ddf38/andressa-morari-canal.webp 66w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF4ElEQVR42h2OfVDT9x3HP2FtCSIPejyFJISQZ/L88MsDhIeQM0AkAQIJEkICIaDOqXhwQxELPoz2FJzumPTBOjutWtG6udXtelvZw+2pPb2t827dnaO1XXezd7tt3Z1Vf+H73tn3P6/XX697k92hI6dTTy6PkexWdY7XY6JUokPob3YmfE2OlZZG+0e+RvtjX4PtUbPXsuats16t91jiwRZnrtWoILNFm6NSiEijEpNKJSEyWJVkdWgE+BLktGnJ6zbG3Fztx5xdBzdXC6/biHq3ER5OD7dDDxdngMtRC86qXbMYlT0Wi44ECyOkVIoFNUoxkdGmIqIKKteXkNttPOXgdGh0GTCeijxJhny8RVe9bjermcuhYy6bdt1l0/FuRy3vstfCadfBYdUsmO0KyuJ1UiolRPUeQw7H6UhvkZ82mZXwOI38lcWD2ZlUGKcnkmyi18+6683wOnTg7DrmcugZZ/vKs7W6al6uqER1jeiEXCUipUacQ3JzBWlssj6FWQp5TQU/tNXHfn9pAXvbOHb37H72n5vz+NV8BqPtdTCpZagSlTGNrJIppCJUScpYRU0JX6ksRaWqLCJSlRDRZhKqbNL7SksVqiWl2clYAG8d28mWhtuBu1eB35wDVl/CzblRpIMNkJaWwiATQyMTs2qZCCJlaVaiLoNEXbYmLH/2ORoYCg/qnNVQGKVP1NJyHB4KsTcOpPDjuTH8b/U8Pn/z2/j03BEc7WzE/tgWtDU7YLdo4HUZYTTUMKmiAjVqMa9Qi2GxKPtpYnLXda1T/jTIG6rK2YX5cXb1yE4spTpwKdmBD8/sx4O3l3E+3Y1fvrAbmXAdTCYV6jg99Fo5KyooYEUFhfzm4mLYLbVXKP31wftVpgrU6CrXA5yR/eGtZVyeHsb3M2F8cGYWX66eBx7cxhc3lvH5SzOYizVCpZZBq6yCRiXDhrw8lifMW8/P3wi7zXCPhsfivFhfAoVWzHb2BvHBD5awP1yPOwsTwF9W8d+V7+CLHy7jvak0rqdDOBptRJPbArlcBr1GjoL8fOTnbWAbN+TDYTc9pNZIgJcaKmA0ytmR7X348M0X0KqT4uLuPjy6tog/z+4F/84l3Ds5h5vbo5jursfWBivk8iqYahUoKij4KviUbpftIbWEfPfl5kp4ber1V6dG2J2XJ1FdUoytZhX+cWEWj392FrjzUzy8vIRfHEhhp9+IvmYTJJUV0GkV2FxcxPKFG9aLCwtRX++8R3V+x3UtJ0eDRcVfnMmwXx8fZZWF+XhG8DUM1+lxe2kc/7q1hM/OHcZinw9BowzDAQ52qwmNLhPbVLSR5T6byxcXFsFmNV8hva160M5p0c7pn6w8P4L3T25nmrJiFOUKodxUiGNbHfjJnhBu7Q3iYJsFw149DkR9mIk2Id3hZzaTBZuKivm83DzIpJJ+6mpuFrZ4LPd7vDbcmB3J3ju7D01qCXuGBNCJSjHbVYd3ZxK4/eIQfjcbwzszA/jtiTHMpzpZuK0bmeRYdjiZgdloXSOi56jFZaZAg62v02PGj46O8p9dnGIBvQxEAlanlrHj2/x499AQ/nntRfz758t4bWKQTad6WW8oiv5InKWTGT6dHMPuHfsi0a5tRONRf06yzUsdDv3pywcH8emFST7qUGUFJECiyclWj+1id88cAP60gvduvsKa3D7WHYoh3hPPDkQT/PaRXUgOpE98Y8deCgXDOZRpraenwx/n6cZs4tT7J9OIOlQgoicDPg//yaWF9QfXTjH87W12/PmpdX9DgI91RvmecC+S8WFkhnYsHJqao+9OjdPgQJootcVD411NAgD0+p5uujXdGQsaqj4uEubBIFfgr28sAndv4OLiHEKtnehs70Ik1Ivujp61YCDUsy06QN/sSVB/LClIJTJEExE/fSvZSofiAdoTrMt5OdP09LBQXSlKlJdJVl6Z3v3R944fftzU0P6oozW8FovEr27xtcU/+fuD3NH0Dtq3ZzInGumnWE+cBvpT9H8XwrGpLA6KNAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/eaec55498c36463a16cb4fe4fc18ac20/677b8/nicole-steffani.png","srcSet":"/static/eaec55498c36463a16cb4fe4fc18ac20/677b8/nicole-steffani.png 66w","sizes":"100vw"},"sources":[{"srcSet":"/static/eaec55498c36463a16cb4fe4fc18ac20/ddf38/nicole-steffani.webp 66w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLUlEQVR42iWSzW9c1RnGTzxz7z3f9/vOnZk7nhnbY884Httju46dkMTGqUJCErexFDc0ISFtgGBosykkCwQIiW+JBCK1i0rdIqjFDlZd8C9U6qIqMkT9B7pCIdc+T3UnRzrS0Vn89Hve9yGCa0IdRRhVxNXhiOA+caVHGdVXBPe/Etz7QQr3Z8bUI0bVHqPqS+rI5ybHe45tU2LbbIRzQTgThFJOiBQe4VQfCjQhSvmEM/+S4P6PjLoQzAdnLqTwwKgCdSQYlXBsAUrlXrnsbJVKNikOpeyQ41BCONNPPuyECO7fc1UMV8fg1HusZZQL7h8oGRnGtHEccWBZNC+XaF4qOSiVyiiV7E+GALJNypZFSBSmI1FYIVoF9z03ge+luZLhvpIRfDcxWkWGMw+CDy2NZTnGsijKJWe/XKa5ZbHi/bFjc+KpdIT4XoWEQXU7DKqIoyxP4lFTWBZWWkZGyQBF/GFkqoq4xraoKZdsOI40tiXyYgSWxS8y6hMSehl1VfQwCutIotF9z00R+DUThw1UkhY8t4LCkDGFcpmhMHIcDttihlENRr39wG0i8ib32tm6TRyHXdUqRC2dfNwancVYa85ktR4a9R4qSRNKhnDswk7AccRwMbbFIbgPT2Wm4vcw3VzLD7fWMF49cpm0Gv3d3sQqFvpn8sW5M6Y3uWzq1YnC8gnIkSiXbdgWHcYurm1zpH4Hq9MXzOaxF8zG3GbeTRcx21z9ghyfP/Pwwvp1zHZPHHRa86Y/tYI4qj8xsfmwJpTyoV2xDC0SpOEkBmPr+M3xG3j57GvmdxvXDzYXzuFwbfA96bYG+XhjBnFQN4oHCN0aXB0Nu8aYhm1TCOpCiwCSBUjcDLEex1PTv8L1Uzu4dvwG7pzfMX+++Taeai//ROIgy4eVYJ5xHDkcumXxISxw68iiDkLVhGYpYm8M/dHjWJ56FlunbmNjcBlPT1/E9fWXzQsbt7DWu/gTCbzKQ1/F8HTloBI0TBJkiN0ajnRW4FgaZ5fO4r2X3sdicwUTlT5e2XwdOxfu4s61D/HuzU9x6/zr5g+bdw9ub72Jd3Y++54MptZ2R5MOYq+WT48umEF71SyNH8V86wi66RxeOvdH/OWNv+LupbtY757Gi6dv4f7O53jwyqd467dvmd0Pds3uh7v5v/7xH/zvv4++IEdnN6+O1xbQqs48blf76NQHZqq+iFg30Qi72Fi8hF+fvIGNwRbm22s4OXMBV57ewc75P+Gj1x6YB3f+hr/f+zb/7ut/4rtv/n2ZjLX6dLTaf9jKlpCEnf1q0kMSTBhfZwjdNrJ4FvVwFlV/BhPZMcx3nsHZo7/HqaXnzcby8zh/7Ob+9unbePXqe3s3Nu7YJPTaRIlsW8saBE9y32saziIIFps4HDOVuIc47CKOemjUVjDWOGGmxk6ZfvccxrJ106qfzFcG2zixfO3iL4/dJCSOx0e4TAjj0X2hUgiZ5JwH+4JH4LxitNs0YdhBGEwircyarLZkstovUE0X9yvJYh5HA9SrRz+upkfIQv/ZEcJ5TEiJkrLlECHje5wHYI4PxsLHXCS5VOmBVFWjdGZ8r30Qx708jHu5H0zC8zrwvKlPOu11AoC43hwhQqQF9NDc7AlSmDq2usRY8CPnYWELKSoQIobWKZSuQ7ujcP0mXL+9J3VzS3tTQ1gUDg7VqqsFMCGMhUNT16uPcOYS7tao0skVzqOvOI9+4Cz4mTP/EePxnlTpl1JVn7NL2hGqQYLg8IiUXSLlJHHdGfJ/5HLXoC098sQAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/6150278cf93d41626e905ef7a1396d36/677b8/vitoria-tesser-henkes.png","srcSet":"/static/6150278cf93d41626e905ef7a1396d36/677b8/vitoria-tesser-henkes.png 66w","sizes":"100vw"},"sources":[{"srcSet":"/static/6150278cf93d41626e905ef7a1396d36/ddf38/vitoria-tesser-henkes.webp 66w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1}}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/26914289.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/26914289.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"plates":{"edges":[{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAACQBACdASoUAAwAPtFUo0uoJKMhsAgBABoJZACdMoJYAIHUZdQkqbUF1lmhVYAA/ubOnVjVxqpVPsEulpi+gfU/9NE0A2a017zpM/1ZUN0fjHEmjQJJ0JqbEEc2fs47myTofNUqXZGVO1aMEHXMPvpbKODymw03fH5FADjPLgPGsE5sVnmT7j89vPl9NNo+pgTgAA=="},"images":{"fallback":{"src":"/static/795a39978ef624a4ca26b3bb7c6393ad/cdcae/pancakes.webp","srcSet":"/static/795a39978ef624a4ca26b3bb7c6393ad/cdcae/pancakes.webp 569w","sizes":"100vw"},"sources":[]},"width":1,"height":0.6098418277680141}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAAAwBACdASoUAA0APtFWo0uoJKMhsAgBABoJYgCsIIpJ/gPN5n6tSBHmv+AA/vAWauvXl2mU/QdbS7n4arKaAZWZgC50zrAfcvSckEs/ecSsIKtrGA/dUu1CqSQMbGnGzpTud0Gjm0p1ZbOYiCTJrW8TBqidAc0wo4Oeje3ULejpzIuw6A6x8odOn4AAAA=="},"images":{"fallback":{"src":"/static/ecb9921263a4a3bc1b04155b4506ded7/f2559/pasta.webp","srcSet":"/static/ecb9921263a4a3bc1b04155b4506ded7/57584/pasta.webp 750w,\\n/static/ecb9921263a4a3bc1b04155b4506ded7/984df/pasta.webp 1080w,\\n/static/ecb9921263a4a3bc1b04155b4506ded7/f2559/pasta.webp 1200w","sizes":"100vw"},"sources":[]},"width":1,"height":0.6666666666666666}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAABwBACdASoUAA0APtFUo0uoJKMhsAgBABoJagC7L1yVfWyrGJN+A/WPAp3qIAD+8eBheOkjaZQKNQ2Kv09VjEp30f87yPMs+9mfKtPCEgjPPJGzOtTUrBhg0ZBbEGQp5xlRvinvWStNdFIDRdGbmTJfYZPqX1jJj6vgm+auzNJqMHvK+2j1345Y8bYkAAAA"},"images":{"fallback":{"src":"/static/354f859770eda4b9d8474d9e8c7aa5cd/4ffff/plate-with-salads.webp","srcSet":"/static/354f859770eda4b9d8474d9e8c7aa5cd/57584/plate-with-salads.webp 750w,\\n/static/354f859770eda4b9d8474d9e8c7aa5cd/4ffff/plate-with-salads.webp 900w","sizes":"100vw"},"sources":[]},"width":1,"height":0.6666666666666666}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQAwCdASoUAA0APtFUo0uoJKMhsAgBABoJQBUesWqV/NiQVAKQAP7iekhzzwpsnqSJyktXAV+i2bTy3BYBc97HrbN8xdO77IR3xQwkjd3zXIr/gboomS5yhvOL6ZVItTkkGRWfkghwPTSFoOPhnlNVvGjobPXp4lgfituAAAA="},"images":{"fallback":{"src":"/static/4354a4b1ce009c44fca32bbc4972825d/4cb18/fruits-and-cereals.webp","srcSet":"/static/4354a4b1ce009c44fca32bbc4972825d/5ab4c/fruits-and-cereals.webp 750w,\\n/static/4354a4b1ce009c44fca32bbc4972825d/9446f/fruits-and-cereals.webp 1080w,\\n/static/4354a4b1ce009c44fca32bbc4972825d/4cb18/fruits-and-cereals.webp 1191w","sizes":"100vw"},"sources":[]},"width":1,"height":0.6574307304785895}}}}]},"foods":{"edges":[{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAABQBACdASoUAA0APtFUo0uoJKMhsAgBABoJQBOmUABoOJcszwYP+dVcygNAAP6xqSw4rezm+tktkP1zmYY6j1HI8RSQpExN5RxyDlbuvfq66SKqfmWqJtpuM1/T7KDxopdd3ttcFFQp/KRH4obx/LceX9p3KpaoDgjCGeDVWXXHDs3QAAA="},"images":{"fallback":{"src":"/static/44abdb2389e9963e243dfbc6fa2dd13d/ac8d5/eating-cupcakes.webp","srcSet":"/static/44abdb2389e9963e243dfbc6fa2dd13d/57584/eating-cupcakes.webp 750w,\\n/static/44abdb2389e9963e243dfbc6fa2dd13d/984df/eating-cupcakes.webp 1080w,\\n/static/44abdb2389e9963e243dfbc6fa2dd13d/ac8d5/eating-cupcakes.webp 1152w","sizes":"100vw"},"sources":[]},"width":1,"height":0.6666666666666666}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAQBACdASoUAA0APtFUo0uoJKMhsAgBABoJYwCsABuURf5NLTbKpvjbgAD+Zn/9QWDp5MvUgWIXJdMzBibQme2G/rfI6rtYa1FGctf/IVtGEnzcbnR/BgLT7os0m5ItUJ9weqPzyWkBLL/8QAAAAA=="},"images":{"fallback":{"src":"/static/32c8f1e635fae9d27793bd26fd17ebd0/fbfb9/in-the-kitchen.webp","srcSet":"/static/32c8f1e635fae9d27793bd26fd17ebd0/57584/in-the-kitchen.webp 750w,\\n/static/32c8f1e635fae9d27793bd26fd17ebd0/984df/in-the-kitchen.webp 1080w,\\n/static/32c8f1e635fae9d27793bd26fd17ebd0/fbfb9/in-the-kitchen.webp 1133w","sizes":"100vw"},"sources":[]},"width":1,"height":0.6663724624889673}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRroAAABXRUJQVlA4IK4AAADwBACdASoUAA0APtFUo0uoJKMhsAgBABoJbACdMoRwIsy/y8+AA24sVQjHTAS1nTQA+W6rofN8cSJAq97D45NXhQmVThUAKr0f8tLrz+qIp3pIoekEFriFDqZdJ7THgBizFkDWRVJRzfbsGYo31lpwmH7+ClBugRtYlvcnCdxSIB9W1DX752FP3FwZOzi0GOdIpwwTBYC7V/XThY3U2svGyU1T262xa/haBz+XbAA="},"images":{"fallback":{"src":"/static/182b8a9ef8bccddc443baeef47bc46f2/73d33/in-the-park.webp","srcSet":"/static/182b8a9ef8bccddc443baeef47bc46f2/57584/in-the-park.webp 750w,\\n/static/182b8a9ef8bccddc443baeef47bc46f2/984df/in-the-park.webp 1080w,\\n/static/182b8a9ef8bccddc443baeef47bc46f2/73d33/in-the-park.webp 1122w","sizes":"100vw"},"sources":[]},"width":1,"height":0.6666666666666666}}}},{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRvYAAABXRUJQVlA4IOoAAADQBQCdASoUABQAPtFep0+oJKMiKAgBABoJbAB4qfQPxVcwDn/xbDo+D327/lj4E8aVBs03MNQAAPxi0nZG6AWWil1QuD0a2B62W7miDv0pXcgyG1HLZNlQtUH7UH9LmDy3+/1G+nqBntldQCnYrYGEhhT7Wd2CkF/cBBU6v/49Em46NdbtOXJ0vQ+uwag8jQWVjsP22sGKHtC1JyG4JvaLxufrGzPBO9Ifx11W/zsi/yb8oc44P5N0GnaRbzpivaN4T08GjHvuf+E4frNT33/MmJgUy91xGg+/6hOrtME5V2MU0DJlyKQAAAA="},"images":{"fallback":{"src":"/static/26a6a6e8c9d8be85e7dd3055a42e8660/ff433/fruits.webp","srcSet":"/static/26a6a6e8c9d8be85e7dd3055a42e8660/4f03f/fruits.webp 750w,\\n/static/26a6a6e8c9d8be85e7dd3055a42e8660/ff433/fruits.webp 772w","sizes":"100vw"},"sources":[]},"width":1,"height":1}}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/4273996657.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/4273996657.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"image":{"edges":[{"node":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAhCAYAAADZPosTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAI2klEQVR42n3UeVATVh4H8F+CznScdbuH03br9m632+mxde1Wi4o3oIByJyQhgXCEM+TiChByEnLfISQkBBJCEkgCBCP3FRCoawV18OixrbW7pdY6bWe2rVt9O3b/cJ0y/f773vvMe+/3mx9IqBYRP9fQ4ZFOfjZoGsabGQMtQ5qlTzLeyIG8BPKzUooNBZXRr3skNkoL3mAJaWbRVPtF1MU+/eWI4fw3IcHiDSc9st1eEgZPzSQGhESjupmoE5mYoR8DOr/fJix53k6fmOqqHfLX4bnOxnTFLWvVMBrWziNbnelMG70RuRvd94Kqqf+EZYtoQndxWUv1bvE0TMOAZAkDCnrbo8pid4Wc6kb2umCbXBdXmlHyNLcSVzjUcEyNJBnmCW6S3GWq6P9eWdixrsrnfB6Um5CGYkDtxe6a1eAXy3PWa57z3n/Bim8dC4ayflAXeRRqig/VkyS+AsLhD2pxDcjI9B6oPNjgb0hWIjXZfoD0ev4fYreUPWKtDfj6pNO31WQHKt9R96U6w7U6Y7h6b0q39tR8+wcALfguEBNs8dI822pK+l9P5x0hZglOdKDO6pHlwp0Fv5OQTF9ZGaE+La0bOmqDVK9wDPGSld9oqN2o7C3mpzW7xON91XOuGd3ltKjxfYB08isx2YRdkEZ4tSUx9XkcK4cB1YktLjvrFBqzrDlVNE5YV8T/tj5B1q+lun/oYkcQK44XlRO7EPuQ6POUV1Mfa0mzgps9/EiAOwUA7QAEbvJWMvWNG3Iar9tIGexkxPFqhOlt3R7ezBlRemPUyhYjaZYBNcXrkRzvXD5z5cImeY7TxTumR+ITbbGN8WrAwhMQFiwA1LIJQOPE4Urou4QGmomgJHUjO2MYGWl9KoQQ9InmXN30MDLiepAy02Fhpgh+bysZAENR5yZRqvlJFyWMFT9tgLBgESaUqwBdgs7sHOrrPaTCIy8q6Qoo3cMhiPHqj6QZFcjFUQX8vGnkr5uISI/bVjqLI2iQu3QxxD1zwFMxCZzDUnDnR8BGCoIltw9+ikcwuERIO2izMwe/GJGdN0WtH8Z2cX1kB1P8zZi+F/k4Mx98FPjh/lasKNFscxZHfgzUROfkcW6of0eDdZQNguREG7SkWf4H2hmR88WZ+CxelgL1MKaRjzuNAoKFu73N00Yvd+rbsHAJvdd73X158OazDuIp2BmzZ0s7tf+p/ZjjcP9LuipOwUPRFDkdb+fAMxUEar86o1crz7Kzyt8UPK7P7z4cEkW/suT56MPCJbSgv4aCrPmwmzzyKzPRB7bcEAY2irbUotHRnO+aKP3InBu4a87tu9xbNkFWZHfWuOgjKNy82CRPtu8OVy/5PdTxiKtk5C138Sh4yyawG4K8TMmNppOKYTFOcUuZY4no8F4UqI2uqbJc3fosH2oj+YX6TA9cMt+EfmoU3NRRcOWNYjyFExt60Jypvtuaab/SRG74ZzwNtlmKBt4N8Rc/UWY64lpTOugAgDmruY4Z56/GeNPnMGZcP3ZUsoJdX/oe1s/egYW2qw+Dwiz9XeEJA5KlW5EsX0a0Vg581FM7oTDl94Ms0Q747cXQmmqBv/d8DPOmy1g93gtTijUwJw5h7hfl8tDNh0F+qm6iPkGOdBTGHb/IiHSF3ipfbRS0aT7I31YDroQIBOWjGL84An0twy+E+PPDc7prCb6CBeC93Am3P7kHY7zVB2BTiorNP9aGHDUyNOoIfu9tnu5xMkY62vJCp1XpbqNF1hUTqhrFqo55MOI9VtCT3Gpv1RSaV7+fNyu9CqP8lZhxwYWHLolpOqaRKvKco+2c4KCWZR5XkR1IldWDLNTQVeHbBgg1nQZrcU9M+R76T70nO267EWKdQdf6v9p2ybUOk9KLD1qoMVkPYry1rjlDV2goClyVcWtHGwvL+vjxZhTgRK+Py87mOkt7d/dyfNBGcW8uepYNzB3Nu1200/VLpg+fmddehTHJew/A1lzrC/yTxs+4yaq9KrLrionpQDIVTsbcOvDHxqNCgoFgRaHq0WXLLg24pCMgT2jHsnbwobtoBN73fAsXOtZhpnXt/6qMMxXwM3UJeobr11Kc7aaxoO9ePTt3KHkCHpNnmiV6ghUFuWMrCKFNpjLXo9rnOoC3W4V1l4xtuh68A5e7b8Os7MoDUN1sxwhwWmgttPyGn2S8pcQ5kU/Rvz02B7IU5Y2zspM81F7q7J0zXrL6SyM/WNJdZMvJbnDgfTHu6sGfN7acaYfGJNUm+i4hsA5I8lsyje5TzdP+kHiG1JxF/SLAZaMrU4vn59svoQH2OHKS+o8qD7VBP+fU5hnjAvzj1I2HwVZqOwje7oK6HRYofo0H7VQveGqHiUOS2U8D4sj4sCV4fbYjikY1s98FeKHvTOWmXf++cAfG1QswoZzDnLNfhBnJ/M9vSgEzsPfKsO0Uf0yoaRKQHEFxdsNWV314zc0eQvzjLWsqoupaJ6szeblrBbdoX3npXOclOGtfxUxKZ38Olh3lgBCnBkO+CEwlzs2sDC7oy91P8lOVX3MPSe4KU8qQXyjuG7OesUY7FtCIdPzjDqbjcff+WzDQMI2RaF/YeFiUxBfHFB0pgOKjhSRmEv1cUxr/ZuXBKtRQnrQ+bDOisG5sMmKcLpvURd/YUgXQaWVAh7YUI1BvB3enYIOnHyRi8bGZQNiXHVeaWLTSWio+JyiUlEqFeadbhNQPnUYRcqpbVgqZf9qp0WSyejyVx7wD2dDpSwLXRmD+QRIQ92VhSHHZwIyvBBlNBNVEBl3CZCCnXDeh43FuF+OSEKPmiJxWFBuorU6SUiivQm7uK9hux4Yg8T4IpP3ZGNqhgs2Jf44H6pE8b+lJMhIyK5G1RYAqD1bvpFa9GVdVu6+R15T2NwruJSigPQdSaSn8YkiH8EDcjwfcvtQnKPsLXkva804D5UTi8v01FisRSsr24MsrDovgt/DT0Gisz/9lkBCXDcR9eMDFpkPOPhy89fSL8NpfXt58/zCTFY8tq9wLPEEKbN0LgCYRCHiF8F9HL3yAo7PrYwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/3196a8118b20a3545dd2a175081dde79/8bf84/flowery.webp","srcSet":"/static/3196a8118b20a3545dd2a175081dde79/8bf84/flowery.webp 390w","sizes":"100vw"},"sources":[]},"width":1,"height":1.641025641025641}}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/645542019.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/645542019.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"logo":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAC4jAAAuIwF4pT92AAAG80lEQVR42lWUa0xb5xnHH5tsyZKu3aRJ/ZKq3aUJTRaK8fHx/QLGGNvHl4CBpKTpyLDNpYuwDZRSWJdAuJiLudM1KO001hRfGGmUNa3aNRfOe6BJpk2r+iFV86XqAGMvS6OOiwnv9B4OWXqkR8/zHun89P//30cHLt0aE/cj9+t9qOhaP3KPD3PHMntYO7TN6sXTN8Lw9nwDbD+DyALDyAGj3GFRiNVkVM8DdCO5eBQVwShywRBnAehDRWdCLIO7kRV3szbcw9rT/chd0TlrhvbZXDEBNV+RQD8yQhiZYIizid6a90APq4Xg3E7oRgoY59wwhopgiLMC9CLnfDey4RDLrIVYZp1AQ4jBYVRS3sM6IMQyGWeum2AAmWEQWcVjXDFcuBn6/gBnfn0Amf82gAo6McbAfTkCI3MMAbrO80DErAt9g4ey9rVB9ML+MCqFPlQsHubsonGuDP4w79sd5ozX+5Ae9yIt7kMGPIwY0xCywRCyZsAAKqVDrB0LytJC55X2Iuf7zdezoGVWIjqFMkXt6BCEufxYL9LhPk630svp1nkgZ5cPcwyJQwydrBn6UZGPz5G14W7ErIcQ86CbtW2Qd/1sibmPLYMwpycZFfPKON1qL9KtEXAYmSbb2Sw4zR4UnZ0rB/jtrEIcYhkYQGWuHuRY4KE82LbKq2Rd77ezeiA5hTnjpwTCK0R6HOZMUx/eePN7E/PHYHTOKXpj3g1w6cYYdMyaMnpZF5zlan/ch4raeljn19uKSR9EFU8PcmYDgWyBjF8Mcpbjr83uhYn5l2B4jhENzVlgZM6+tV/xhkx486JzB+Db8NqXRTB+pfKHA9dKSvuvOSO9rAP3Ibd/GFmbwrOmKyNXnaUXJjt2d32lgvFye8afXvTtmDnQIp7+VSv8paQHIJFbAAtWRvTBZ7fg2ywVYADe3h/bDsL1k2o4gkf2jF08+uwUbss421AK55rLIWr2w2U4A5FfnoSYpA7i6lfg3acqRNPGFoClAptoobicByUMRu+ySvtxQq37fEmjQ4s6w+Q92nTo4tET8Im+8wdRQwMT1dR3xJT1UzEq8F5MUT8VUzb8Lq57VXH+5x74s6kV4E79KbiKsWhZpZ1JyuQ4SdE4JZXhpEyBUyr11QXX4eenNK/WxejgVzEqgGNS/1ZRARwV5ih5L6+fvODu2AGpHCksa/TtSUqOUxS9kqLozSStTP8n1+DWnMa7pujGj2KUn/84KvVvRKnAijDjiCyAo7JgIkoHF8kcUTeaYMHhfjIpV95NEWUUnSbK/q3PLcc/AojLArd5BdLAWowKbMSk/jR/lgXvTSsb226b2vbhssHHcdPUHlx3cwduxwDL2twy3qpMvkqgy0rt9N/3GWFaHohs2QusRqnAZkzq34hJAziqqL+ET7y1G++sBSPlrTDneCZJFVLeDrvq5Uxitzsl4+2uL9NKnM5XHjynbn9esPkgtgVLk3NEUT9x8kAl5NO+XCbH+y+rxIMt2aQqsUVSiRnKNwpJfd47yS0gXlZoPrv4hA3i8uDvheDT0f/DYnUHKsFBV3sJqDC7ktS6ReJJWySeVXJmZFXTD4HkUpIq7QTey2d3J7p1e+sEHKGDX8AuPVhkVe5tGA/K5udNMvNAyhcllnu2gXf1uqbegom9ccq/KazEA7ISV7TN8ueUvp/acrzbsA2hb1qyPZsWSeU6OdsoXzckNIYXeXWUHH+jV1ef1XSp4hQPWyfQuLx++tLjx4DJ8f5zW9lDmFCF2ZUbFokHO+U1Flg02fYnaeV/CfC+TvXKOW17vgBMR6gAvqVvleRSvhrBKskMPwJ6qNaa4/38THA4A759Yg8kVdrLBHhPpXhjQttFx4VFnqaD//iNveUn1hzvgvDxAyGzzUc6uRTsoKuPWqVegCWDERImi4FfaLniZtzZ9YsYFfgmIvXjy4rGTrXc5xDUpclqPKIMF2Z71oTLOK9/9jjInzoiglRmpjh1KAuW1fquJK3AqXyT5F1Z41+Jwk+0zWUGqWfImu3Bwnpsw0jnYTap79Oq4lM7j+QF4LDqZREsFh3l/zR3n3kGljS5A/fztP5JZWt1nFjWNRnyczwfWISshOzIpWwWZnsI7OMKe9Njbu1JcMprxA55DUCiwAZLzlK4886HsJL5NOCywsfiltYn47Lg/fPaxrw8SeVHwr6tCcvM22Vkvi7ycy411IFDXiO2y6qAoaoAlo1mSDhLIOEqg7vP7RfjGYAZOggxZWPL5bwWm1HqnREUYmuOZ8Um9UUOK2sl5qxfQ0vNILiUtWIHXQ0OeTV850m4SuFrxwtwmzkueo85DYOFrbvwIhYxdHU5Q/nettNVLxWpa39m2HccXIoaKDh0IoNYdSlrvgP7Hwy5CkYfORMnAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/5bf2635ceb6ece4d06a3ce228a3d1654/1e7f3/logo.png","srcSet":"/static/5bf2635ceb6ece4d06a3ce228a3d1654/1e7f3/logo.png 237w","sizes":"100vw"},"sources":[{"srcSet":"/static/5bf2635ceb6ece4d06a3ce228a3d1654/0f0b8/logo.webp 237w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.388185654008439}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/660500567.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/660500567.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"logo":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/webp;base64,UklGRuwAAABXRUJQVlA4IOAAAABwBQCdASoUABQAPtFgqE+oJSOiKAgBABoJZgCdMw4kAITcLwRXG37xyau0QkDpztG5YBMgAOJ3qJKzUh9WKxBnT76NRA1vSRkxr7TFNhoOkbBIeZxj2cVwC6O5LRGLubfzPDuk93MM0t/Va2xeSIZR+4Yjiu3bu2i3sLp5BnETZgnbpYQw/flhCElt+IcdYdTAq/KtWswxB0bCcA88z3kUZthx5rrePLuCGFgLBi9/5S8hmdLItOEjkByX8GSRaj4lFCJW0bwh/jM2YxIVsS1GiWjyJ0iSiiKionQCh8GAAA=="},"images":{"fallback":{"src":"/static/7acee6fa0e3bf33c4b5dd8b75a3a028c/5c459/foto-profile.webp","srcSet":"/static/7acee6fa0e3bf33c4b5dd8b75a3a028c/4f03f/foto-profile.webp 750w,\\n/static/7acee6fa0e3bf33c4b5dd8b75a3a028c/5c459/foto-profile.webp 990w","sizes":"100vw"},"sources":[]},"width":1,"height":1}}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map