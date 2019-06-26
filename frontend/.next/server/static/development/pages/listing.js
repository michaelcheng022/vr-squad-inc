module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DeleteItem.js":
/*!**********************************!*\
  !*** ./components/DeleteItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Listings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Listings */ "./components/Listings.js");
var _jsxFileName = "/home/michael/Desktop/web-dev-projects/vr-squad-inc/vr-squad-inc-master/frontend/components/DeleteItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_LISTING_MUTATION($id: ID!) {\n    deleteListing(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DELETE_LISTING_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var DeleteItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteItem, _Component);

  function DeleteItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      // manually update the cache on the client, so it matches the server
      // 1. Read the cache for the items we want
      var data = cache.readQuery({
        query: _Listings__WEBPACK_IMPORTED_MODULE_3__["ALL_LISTINGS_QUERY"]
      });
      console.log(data, payload); // 2. Filter the deleted item out of the page

      data.listings = data.listings.filter(function (listing) {
        return listing.id !== payload.data.deleteListing.id;
      }); // 3. Put the items back!

      cache.writeQuery({
        query: _Listings__WEBPACK_IMPORTED_MODULE_3__["ALL_LISTINGS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_LISTING_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, function (deleteListing, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick() {
            if (confirm('Are you sure you want to delete this item?')) {
              deleteListing();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteItem);

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/michael/Desktop/web-dev-projects/vr-squad-inc/vr-squad-inc-master/frontend/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-gallery */ "react-grid-gallery");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/michael/Desktop/web-dev-projects/vr-squad-inc/vr-squad-inc-master/frontend/components/ImageGallery.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ImageGallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageGallery, _React$Component);

  function ImageGallery(props) {
    var _this;

    _classCallCheck(this, ImageGallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageGallery).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatImages", function (images) {
      var formatted = images.map(function (img) {
        var image = {
          src: img,
          thumbnail: img,
          thumbnailWidth: 320,
          thumbnailHeight: 200
        };
        return image;
      });
      return formatted;
    });

    _this.state = {
      images: _this.props.images
    };
    return _this;
  } // onSelectImage = (index, image)  => {
  //     var images = this.state.images.slice();
  //     var img = images[index];
  //     if(img.hasOwnProperty("isSelected"))
  //         img.isSelected = !img.isSelected;
  //     else
  //         img.isSelected = true;
  //     this.setState({
  //         images: images
  //     });
  // }


  _createClass(ImageGallery, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "block",
          minHeight: "1px",
          minWidth: "280px",
          width: "100%",
          border: "1px solid #ddd",
          overflow: "hidden"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_3___default.a, {
        images: this.formatImages(this.state.images),
        enableImageSelection: false,
        enableLightBox: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return ImageGallery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             src: PropTypes.string.isRequired,
//             thumbnail: PropTypes.string.isRequired,
//             srcset: PropTypes.array,
//             caption: PropTypes.string,
//             thumbnailWidth: PropTypes.number.isRequired,
//             thumbnailHeight: PropTypes.number.isRequired,
//             isSelected: PropTypes.bool
//         })
//     ).isRequired
// };


/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ }),

/***/ "./components/Listing.js":
/*!*******************************!*\
  !*** ./components/Listing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Listing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteItem */ "./components/DeleteItem.js");
var _jsxFileName = "/home/michael/Desktop/web-dev-projects/vr-squad-inc/vr-squad-inc-master/frontend/components/Listing.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Listing =
/*#__PURE__*/
function (_Component) {
  _inherits(Listing, _Component);

  function Listing() {
    _classCallCheck(this, Listing);

    return _possibleConstructorReturn(this, _getPrototypeOf(Listing).apply(this, arguments));
  }

  _createClass(Listing, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, item.mainImage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: item.mainImage,
        alt: item.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/listing',
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, item.address))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttonList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: 'update',
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Edit \u270F\uFE0F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Delete This Item")));
    }
  }]);

  return Listing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Listing, "propTypes", {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});



/***/ }),

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default, ALL_LISTINGS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_LISTINGS_QUERY", function() { return ALL_LISTINGS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listing */ "./components/Listing.js");
var _jsxFileName = "/home/michael/Desktop/web-dev-projects/vr-squad-inc/vr-squad-inc-master/frontend/components/Listings.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_LISTINGS_QUERY {\n    listings {\n      id\n      address\n      description\n      mainImage\n      rooms\n      bath\n      lotSize\n      houseSize\n      price\n      user {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ALL_LISTINGS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Listings__Center",
  componentId: "seqjqm-0"
})(["text-align:center;"]);
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Listings__ItemsList",
  componentId: "seqjqm-1"
})(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;@media (max-width:1300px){grid-template-columns:1fr 1fr;margin:0 10vw;}@media (max-width:1000px){grid-template-columns:1fr;margin:0 100px;}@media (max-width:700px){margin:0 5vw;}"], function (props) {
  return props.theme.maxWidth;
});

var Listings =
/*#__PURE__*/
function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    return _possibleConstructorReturn(this, _getPrototypeOf(Listings).apply(this, arguments));
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_LISTINGS_QUERY,
        fetchPolicy: "network-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        console.log(data);
        console.log(_this.props.userId);
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, data.listings.map(function (listing) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listing__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: listing,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          });
        }));
      }));
    }
  }]);

  return Listings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Listings);


/***/ }),

/***/ "./components/SingleListing.js":
/*!*************************************!*\
  !*** ./components/SingleListing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ImageGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImageGallery */ "./components/ImageGallery.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeleteItem */ "./components/DeleteItem.js");
var _jsxFileName = "/home/michael/Desktop/web-dev-projects/vr-squad-inc/vr-squad-inc-master/frontend/components/SingleListing.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      profilePicture\n      company \n      website \n      phone\n      contactEmail\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_LISTING_QUERY($id: ID!) {\n    listing(where: { id: $id }) {\n      id\n      address\n      description\n      mainImage\n      images\n      rooms\n      bath\n      lotSize\n      houseSize\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var SingleListingStyles = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "SingleListing__SingleListingStyles",
  componentId: "sc-4stxqh-0"
})(["@media (max-width:400px){margin:0;}max-width:1200px;min-width:300px;margin:2rem auto;box-shadow:", ";display:grid;font-family:'Roboto',sans-serif;grid-auto-columns:1fr;grid-auto-flow:column;img{width:100%;height:100%;margin-bottom:50px;object-fit:contain;}.button-container{float:right;}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;margin:0 10px;border:1px solid transparent;padding:.125rem .5rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}.btn-edit{background-color:#ffc107;border-color:#ffc107;}.btn-delete{background-color:#dc3545;border-color:#dc3545;}.details{margin:3rem;font-size:14px;}.description{padding:10px 34px;line-height:28px;font-size:17px;}.section{margin-top:10px;margin-bottom:40px;}.contact-card{display:flex;flex-direction:row;justify-content:center;margin:100px 0;}.agent-picture img{height:175px;width:175px;object-fit:cover;}.agent-details{margin-left:10px;font-family:'Roboto Condensed',sans-serif;font-style:bold;text-transform:uppercase;}.agent-title{font-family:'Roboto',sans-serif;font-size:34px;font-weight:1000;}.agent-company{margin-bottom:10px;}.agent-contact{font-family:'Roboto Condensed',sans-serif;font-size:16px;margin-left:5px;font-weight:550;}.agent-website{margin-top:15px;margin-left:5px;}.agent-website a{text-decoration:none;font-size:12px;font-weight:600;color:black;cursor:pointer;}.agent-website a:hover{color:blue;}.section h3{font-family:'Roboto Condensed',sans-serif;font-size:32px;font-style:bold;width:100%;text-align:left;text-indent:40px;border-bottom:1.5px solid #000;line-height:0.1em;margin:10px 0 20px;}.section h3 span{background:#fff;padding:0 10px;}"], function (props) {
  return props.theme.bs;
});
var SINGLE_LISTING_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());

var SingleListing =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleListing, _Component);

  function SingleListing() {
    _classCallCheck(this, SingleListing);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleListing).apply(this, arguments));
  }

  _createClass(SingleListing, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_LISTING_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "Loading...");
        if (!data.listing) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, "No listing Found for ", _this.props.id);
        var listing = data.listing;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleListingStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, "VR Squad Inc | ", listing.address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: listing.mainImage,
          alt: listing.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, "DESCRIPTION")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, listing.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, "SPECIFICATIONS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "PRICE: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__["default"])(listing.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, listing.rooms, " BED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, listing.bath, " BATH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, "HOUSE SIZE: ", listing.houseSize, " SQ FT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, "LOT SIZE: ", listing.lotSize, " SQFT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, "GALLERY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageGallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
          images: listing.images,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: CURRENT_USER_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              error = _ref2.error,
              loading = _ref2.loading;
          console.log(data.me);
          var me = data.me;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, "PRESENTED BY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "contact-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-picture",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: me.profilePicture,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-details",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, me.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-contact agent-company",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, me.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-contact",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, me.contactEmail), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-contact",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, me.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-website",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: me.website,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, "website")))));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: 'update',
            query: {
              id: listing.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-edit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, "EDIT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-delete",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: listing.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, "DELETE")))));
      });
    }
  }]);

  return SingleListing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleListing);

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ItemStyles__Item",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid ", ";box-shadow:", ";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ", ";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:", ";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0;padding:10px 15px;text-align:center;margin-top:0;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:white;display:flex;line-height:1.3;font-size:16pt;text-align:center;text-decoration:none;color:black;padding:0 1rem;}a:hover{color:blue;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./pages/listing.js":
/*!**************************!*\
  !*** ./pages/listing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SingleListing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SingleListing */ "./components/SingleListing.js");
var _jsxFileName = "/home/michael/Desktop/web-dev-projects/vr-squad-inc/vr-squad-inc-master/frontend/pages/listing.js";



var Listing = function Listing(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SingleListing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Listing);

/***/ }),

/***/ 7:
/*!********************************!*\
  !*** multi ./pages/listing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/listing.js */"./pages/listing.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-grid-gallery":
/*!*************************************!*\
  !*** external "react-grid-gallery" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-gallery");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=listing.js.map