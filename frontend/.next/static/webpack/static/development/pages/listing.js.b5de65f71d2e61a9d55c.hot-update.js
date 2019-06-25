webpackHotUpdate("static/development/pages/listing.js",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
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






var ImageGallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageGallery, _React$Component);

  function ImageGallery(props) {
    var _this;

    _classCallCheck(this, ImageGallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageGallery).call(this, props));
    _this.state = {
      images: _this.props.images
    };
    _this.onSelectImage = _this.onSelectImage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageGallery, [{
    key: "onSelectImage",
    value: function onSelectImage(index, image) {
      var images = this.state.images.slice();
      var img = images[index];
      if (img.hasOwnProperty("isSelected")) img.isSelected = !img.isSelected;else img.isSelected = true;
      this.setState({
        images: images
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "block",
          minHeight: "1px",
          width: "100%",
          border: "1px solid #ddd",
          overflow: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_3___default.a, {
        images: this.state.images,
        onSelectImage: this.onSelectImage,
        lightboxWidth: 1536,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }));
    }
  }]);

  return ImageGallery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

ImageGallery.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    srcset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
    caption: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    thumbnailWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    thumbnailHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    isSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
  })).isRequired
};
ImageGallery.defaultProps = {
  images: shuffleArray([{
    src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: "8H (gratisography.com)"
  }, {
    src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    caption: "286H (gratisography.com)"
  }, {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 148,
    caption: "315H (gratisography.com)"
  }, {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    isSelected: true,
    caption: "201H (gratisography.com)"
  }, {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
    thumbnailWidth: 248,
    thumbnailHeight: 320,
    caption: "Big Ben (Tom Eversley - isorepublic.com)"
  }, {
    src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
    thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 113,
    isSelected: true,
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
  }, {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
    thumbnailWidth: 313,
    thumbnailHeight: 320,
    caption: "Wood Glass (Tom Eversley - isorepublic.com)"
  }, {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    isSelected: true,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
  }])
};
/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ }),

/***/ "./components/SingleListing.js":
/*!*************************************!*\
  !*** ./components/SingleListing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_LISTING_QUERY($id: ID!) {\n    listing(where: { id: $id }) {\n      id\n      address\n      description\n      mainImage\n      images\n      rooms\n      bath\n      lotSize\n      houseSize\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var SingleListingStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SingleListing__SingleListingStyles",
  componentId: "sc-4stxqh-0"
})(["max-width:1200px;margin:2rem auto;box-shadow:", ";display:grid;font-family:Arial;grid-auto-columns:1fr;grid-auto-flow:column;img{width:100%;height:100%;margin-bottom:20px;object-fit:contain;}.button-container{float:right;}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;margin:0 10px;border:1px solid transparent;padding:.125rem .5rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}.btn-edit{background-color:#ffc107;border-color:#ffc107;}.btn-delete{background-color:#dc3545;border-color:#dc3545;}.details{margin:3rem;font-size:14px;}.section{margin-bottom:20px;}.section h3{width:100%;text-align:left;text-indent:40px;border-bottom:1.5px solid #000;line-height:0.1em;margin:10px 0 20px;}.section h3 span{background:#fff;padding:0 10px;}"], function (props) {
  return props.theme.bs;
});
var SINGLE_LISTING_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

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
          lineNumber: 95
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
            lineNumber: 102
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "Loading...");
        if (!data.listing) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, "No listing Found for ", _this.props.id);
        var listing = data.listing;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleListingStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Sick Fits | ", listing.address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: listing.mainImage,
          alt: listing.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "DESCRIPTION")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, listing.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "SPECIFICATIONS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, "PRICE: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__["default"])(listing.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, listing.rooms, " BED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, listing.bath, " BATH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "HOUSE SIZE: ", listing.houseSize, " SQ FT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, "LOT SIZE: ", listing.lotSize, " SQFT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "GALLERY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageGallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
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
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-edit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "EDIT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-delete",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: listing.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
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

/***/ "./node_modules/aphrodite/lib/generate.js":
/*!************************************************!*\
  !*** ./node_modules/aphrodite/lib/generate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _inlineStylePrefixerStatic = __webpack_require__(/*! inline-style-prefixer/static */ "./node_modules/inline-style-prefixer/static.js");

var _inlineStylePrefixerStatic2 = _interopRequireDefault(_inlineStylePrefixerStatic);

var _util = __webpack_require__(/*! ./util */ "./node_modules/aphrodite/lib/util.js");

/**
 * Generate CSS for a selector and some styles.
 *
 * This function handles the media queries, pseudo selectors, and descendant
 * styles that can be used in aphrodite styles.
 *
 * @param {string} selector: A base CSS selector for the styles to be generated
 *     with.
 * @param {Object} styleTypes: A list of properties of the return type of
 *     StyleSheet.create, e.g. [styles.red, styles.blue].
 * @param stringHandlers: See `generateCSSRuleset`
 * @param useImportant: See `generateCSSRuleset`
 *
 * To actually generate the CSS special-construct-less styles are passed to
 * `generateCSSRuleset`.
 *
 * For instance, a call to
 *
 *     generateCSSInner(".foo", {
 *       color: "red",
 *       "@media screen": {
 *         height: 20,
 *         ":hover": {
 *           backgroundColor: "black"
 *         }
 *       },
 *       ":active": {
 *         fontWeight: "bold",
 *         ">>bar": {
 *           _names: { "foo_bar": true },
 *           height: 10,
 *         }
 *       }
 *     });
 *
 * will make 5 calls to `generateCSSRuleset`:
 *
 *     generateCSSRuleset(".foo", { color: "red" }, ...)
 *     generateCSSRuleset(".foo:active", { fontWeight: "bold" }, ...)
 *     generateCSSRuleset(".foo:active .foo_bar", { height: 10 }, ...)
 *     // These 2 will be wrapped in @media screen {}
 *     generateCSSRuleset(".foo", { height: 20 }, ...)
 *     generateCSSRuleset(".foo:hover", { backgroundColor: "black" }, ...)
 */
var generateCSS = function generateCSS(selector, styleTypes, stringHandlers, useImportant) {
    var merged = styleTypes.reduce(_util.recursiveMerge);

    var declarations = {};
    var mediaQueries = {};
    var pseudoStyles = {};

    Object.keys(merged).forEach(function (key) {
        if (key[0] === ':') {
            pseudoStyles[key] = merged[key];
        } else if (key[0] === '@') {
            mediaQueries[key] = merged[key];
        } else {
            declarations[key] = merged[key];
        }
    });

    return generateCSSRuleset(selector, declarations, stringHandlers, useImportant) + Object.keys(pseudoStyles).map(function (pseudoSelector) {
        return generateCSSRuleset(selector + pseudoSelector, pseudoStyles[pseudoSelector], stringHandlers, useImportant);
    }).join("") + Object.keys(mediaQueries).map(function (mediaQuery) {
        var ruleset = generateCSS(selector, [mediaQueries[mediaQuery]], stringHandlers, useImportant);
        return mediaQuery + '{' + ruleset + '}';
    }).join("");
};

exports.generateCSS = generateCSS;
/**
 * Helper method of generateCSSRuleset to facilitate custom handling of certain
 * CSS properties. Used for e.g. font families.
 *
 * See generateCSSRuleset for usage and documentation of paramater types.
 */
var runStringHandlers = function runStringHandlers(declarations, stringHandlers) {
    var result = {};

    Object.keys(declarations).forEach(function (key) {
        // If a handler exists for this particular key, let it interpret
        // that value first before continuing
        if (stringHandlers && stringHandlers.hasOwnProperty(key)) {
            result[key] = stringHandlers[key](declarations[key]);
        } else {
            result[key] = declarations[key];
        }
    });

    return result;
};

/**
 * Generate a CSS ruleset with the selector and containing the declarations.
 *
 * This function assumes that the given declarations don't contain any special
 * children (such as media queries, pseudo-selectors, or descendant styles).
 *
 * Note that this method does not deal with nesting used for e.g.
 * psuedo-selectors or media queries. That responsibility is left to  the
 * `generateCSS` function.
 *
 * @param {string} selector: the selector associated with the ruleset
 * @param {Object} declarations: a map from camelCased CSS property name to CSS
 *     property value.
 * @param {Object.<string, function>} stringHandlers: a map from camelCased CSS
 *     property name to a function which will map the given value to the value
 *     that is output.
 * @param {bool} useImportant: A boolean saying whether to append "!important"
 *     to each of the CSS declarations.
 * @returns {string} A string of raw CSS.
 *
 * Examples:
 *
 *    generateCSSRuleset(".blah", { color: "red" })
 *    -> ".blah{color: red !important;}"
 *    generateCSSRuleset(".blah", { color: "red" }, {}, false)
 *    -> ".blah{color: red}"
 *    generateCSSRuleset(".blah", { color: "red" }, {color: c => c.toUpperCase})
 *    -> ".blah{color: RED}"
 *    generateCSSRuleset(".blah:hover", { color: "red" })
 *    -> ".blah:hover{color: red}"
 */
var generateCSSRuleset = function generateCSSRuleset(selector, declarations, stringHandlers, useImportant) {
    var handledDeclarations = runStringHandlers(declarations, stringHandlers);

    var prefixedDeclarations = (0, _inlineStylePrefixerStatic2['default'])(handledDeclarations);

    var prefixedRules = (0, _util.flatten)((0, _util.objectToPairs)(prefixedDeclarations).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];

        if (Array.isArray(value)) {
            var _ret = (function () {
                // inline-style-prefix-all returns an array when there should be
                // multiple rules, we will flatten to single rules

                var prefixedValues = [];
                var unprefixedValues = [];

                value.forEach(function (v) {
                    if (v.indexOf('-') === 0) {
                        prefixedValues.push(v);
                    } else {
                        unprefixedValues.push(v);
                    }
                });

                prefixedValues.sort();
                unprefixedValues.sort();

                return {
                    v: prefixedValues.concat(unprefixedValues).map(function (v) {
                        return [key, v];
                    })
                };
            })();

            if (typeof _ret === 'object') return _ret.v;
        }
        return [[key, value]];
    }));

    var rules = prefixedRules.map(function (_ref3) {
        var _ref32 = _slicedToArray(_ref3, 2);

        var key = _ref32[0];
        var value = _ref32[1];

        var stringValue = (0, _util.stringifyValue)(key, value);
        var ret = (0, _util.kebabifyStyleName)(key) + ':' + stringValue + ';';
        return useImportant === false ? ret : (0, _util.importantify)(ret);
    }).join("");

    if (rules) {
        return selector + '{' + rules + '}';
    } else {
        return "";
    }
};
exports.generateCSSRuleset = generateCSSRuleset;

/***/ }),

/***/ "./node_modules/aphrodite/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/aphrodite/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _util = __webpack_require__(/*! ./util */ "./node_modules/aphrodite/lib/util.js");

var _inject = __webpack_require__(/*! ./inject */ "./node_modules/aphrodite/lib/inject.js");

var StyleSheet = {
    create: function create(sheetDefinition) {
        return (0, _util.mapObj)(sheetDefinition, function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var val = _ref2[1];

            return [key, {
                // TODO(emily): Make a 'production' mode which doesn't prepend
                // the class name here, to make the generated CSS smaller.
                _name: key + '_' + (0, _util.hashObject)(val),
                _definition: val
            }];
        });
    },

    rehydrate: function rehydrate() {
        var renderedClassNames = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        (0, _inject.addRenderedClassNames)(renderedClassNames);
    }
};

/**
 * Utilities for using Aphrodite server-side.
 */
var StyleSheetServer = {
    renderStatic: function renderStatic(renderFunc) {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
        var html = renderFunc();
        var cssContent = (0, _inject.flushToString)();

        return {
            html: html,
            css: {
                content: cssContent,
                renderedClassNames: (0, _inject.getRenderedClassNames)()
            }
        };
    }
};

/**
 * Utilities for using Aphrodite in tests.
 *
 * Not meant to be used in production.
 */
var StyleSheetTestUtils = {
    /**
     * Prevent styles from being injected into the DOM.
     *
     * This is useful in situations where you'd like to test rendering UI
     * components which use Aphrodite without any of the side-effects of
     * Aphrodite happening. Particularly useful for testing the output of
     * components when you have no DOM, e.g. testing in Node without a fake DOM.
     *
     * Should be paired with a subsequent call to
     * clearBufferAndResumeStyleInjection.
     */
    suppressStyleInjection: function suppressStyleInjection() {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
    },

    /**
     * Opposite method of preventStyleInject.
     */
    clearBufferAndResumeStyleInjection: function clearBufferAndResumeStyleInjection() {
        (0, _inject.reset)();
    }
};

var css = function css() {
    for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
    }

    var useImportant = true; // Append !important to all style definitions
    return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions);
};

exports['default'] = {
    StyleSheet: StyleSheet,
    StyleSheetServer: StyleSheetServer,
    StyleSheetTestUtils: StyleSheetTestUtils,
    css: css
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/aphrodite/lib/inject.js":
/*!**********************************************!*\
  !*** ./node_modules/aphrodite/lib/inject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _asap = __webpack_require__(/*! asap */ "./node_modules/asap/browser-asap.js");

var _asap2 = _interopRequireDefault(_asap);

var _generate = __webpack_require__(/*! ./generate */ "./node_modules/aphrodite/lib/generate.js");

var _util = __webpack_require__(/*! ./util */ "./node_modules/aphrodite/lib/util.js");

// The current <style> tag we are inserting into, or null if we haven't
// inserted anything yet. We could find this each time using
// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
// faster.
var styleTag = null;

// Inject a string of styles into a <style> tag in the head of the document. This
// will automatically create a style tag and then continue to use it for
// multiple injections. It will also use a style tag with the `data-aphrodite`
// tag on it if that exists in the DOM. This could be used for e.g. reusing the
// same style tag that server-side rendering inserts.
var injectStyleTag = function injectStyleTag(cssContents) {
    if (styleTag == null) {
        // Try to find a style tag with the `data-aphrodite` attribute first.
        styleTag = document.querySelector("style[data-aphrodite]");

        // If that doesn't work, generate a new style tag.
        if (styleTag == null) {
            // Taken from
            // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
            var head = document.head || document.getElementsByTagName('head')[0];
            styleTag = document.createElement('style');

            styleTag.type = 'text/css';
            styleTag.setAttribute("data-aphrodite", "");
            head.appendChild(styleTag);
        }
    }

    if (styleTag.styleSheet) {
        styleTag.styleSheet.cssText += cssContents;
    } else {
        styleTag.appendChild(document.createTextNode(cssContents));
    }
};

// Custom handlers for stringifying CSS values that have side effects
// (such as fontFamily, which can cause @font-face rules to be injected)
var stringHandlers = {
    // With fontFamily we look for objects that are passed in and interpret
    // them as @font-face rules that we need to inject. The value of fontFamily
    // can either be a string (as normal), an object (a single font face), or
    // an array of objects and strings.
    fontFamily: function fontFamily(val) {
        if (Array.isArray(val)) {
            return val.map(fontFamily).join(",");
        } else if (typeof val === "object") {
            injectStyleOnce(val.fontFamily, "@font-face", [val], false);
            return '"' + val.fontFamily + '"';
        } else {
            return val;
        }
    },

    // With animationName we look for an object that contains keyframes and
    // inject them as an `@keyframes` block, returning a uniquely generated
    // name. The keyframes object should look like
    //  animationName: {
    //    from: {
    //      left: 0,
    //      top: 0,
    //    },
    //    '50%': {
    //      left: 15,
    //      top: 5,
    //    },
    //    to: {
    //      left: 20,
    //      top: 20,
    //    }
    //  }
    // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
    // to use `animationName` here. Improve that so we can call this
    // `animation` instead of `animationName`.
    animationName: function animationName(val) {
        if (typeof val !== "object") {
            return val;
        }

        // Generate a unique name based on the hash of the object. We can't
        // just use the hash because the name can't start with a number.
        // TODO(emily): this probably makes debugging hard, allow a custom
        // name?
        var name = 'keyframe_' + (0, _util.hashObject)(val);

        // Since keyframes need 3 layers of nesting, we use `generateCSS` to
        // build the inner layers and wrap it in `@keyframes` ourselves.
        var finalVal = '@keyframes ' + name + '{';
        Object.keys(val).forEach(function (key) {
            finalVal += (0, _generate.generateCSS)(key, [val[key]], stringHandlers, false);
        });
        finalVal += '}';

        injectGeneratedCSSOnce(name, finalVal);

        return name;
    }
};

// This is a map from Aphrodite's generated class names to `true` (acting as a
// set of class names)
var alreadyInjected = {};

// This is the buffer of styles which have not yet been flushed.
var injectionBuffer = "";

// A flag to tell if we are already buffering styles. This could happen either
// because we scheduled a flush call already, so newly added styles will
// already be flushed, or because we are statically buffering on the server.
var isBuffering = false;

var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
    if (!alreadyInjected[key]) {
        if (!isBuffering) {
            // We should never be automatically buffering on the server (or any
            // place without a document), so guard against that.
            if (typeof document === "undefined") {
                throw new Error("Cannot automatically buffer without a document");
            }

            // If we're not already buffering, schedule a call to flush the
            // current styles.
            isBuffering = true;
            (0, _asap2['default'])(flushToStyleTag);
        }

        injectionBuffer += generatedCSS;
        alreadyInjected[key] = true;
    }
};

var injectStyleOnce = function injectStyleOnce(key, selector, definitions, useImportant) {
    if (!alreadyInjected[key]) {
        var generated = (0, _generate.generateCSS)(selector, definitions, stringHandlers, useImportant);

        injectGeneratedCSSOnce(key, generated);
    }
};

exports.injectStyleOnce = injectStyleOnce;
var reset = function reset() {
    injectionBuffer = "";
    alreadyInjected = {};
    isBuffering = false;
    styleTag = null;
};

exports.reset = reset;
var startBuffering = function startBuffering() {
    if (isBuffering) {
        throw new Error("Cannot buffer while already buffering");
    }
    isBuffering = true;
};

exports.startBuffering = startBuffering;
var flushToString = function flushToString() {
    isBuffering = false;
    var ret = injectionBuffer;
    injectionBuffer = "";
    return ret;
};

exports.flushToString = flushToString;
var flushToStyleTag = function flushToStyleTag() {
    var cssContent = flushToString();
    if (cssContent.length > 0) {
        injectStyleTag(cssContent);
    }
};

exports.flushToStyleTag = flushToStyleTag;
var getRenderedClassNames = function getRenderedClassNames() {
    return Object.keys(alreadyInjected);
};

exports.getRenderedClassNames = getRenderedClassNames;
var addRenderedClassNames = function addRenderedClassNames(classNames) {
    classNames.forEach(function (className) {
        alreadyInjected[className] = true;
    });
};

exports.addRenderedClassNames = addRenderedClassNames;
/**
 * Inject styles associated with the passed style definition objects, and return
 * an associated CSS class name.
 *
 * @param {boolean} useImportant If true, will append !important to generated
 *     CSS output. e.g. {color: red} -> "color: red !important".
 * @param {Object[]} styleDefinitions style definition objects as returned as
 *     properties of the return value of StyleSheet.create().
 */
var injectAndGetClassName = function injectAndGetClassName(useImportant, styleDefinitions) {
    // Filter out falsy values from the input, to allow for
    // `css(a, test && c)`
    var validDefinitions = styleDefinitions.filter(function (def) {
        return def;
    });

    // Break if there aren't any valid styles.
    if (validDefinitions.length === 0) {
        return "";
    }

    var className = validDefinitions.map(function (s) {
        return s._name;
    }).join("-o_O-");
    injectStyleOnce(className, '.' + className, validDefinitions.map(function (d) {
        return d._definition;
    }), useImportant);

    return className;
};
exports.injectAndGetClassName = injectAndGetClassName;

/***/ }),

/***/ "./node_modules/aphrodite/lib/no-important.js":
/*!****************************************************!*\
  !*** ./node_modules/aphrodite/lib/no-important.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Module with the same interface as the core aphrodite module,
// except that styles injected do not automatically have !important
// appended to them.
//


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _inject = __webpack_require__(/*! ./inject */ "./node_modules/aphrodite/lib/inject.js");

var _indexJs = __webpack_require__(/*! ./index.js */ "./node_modules/aphrodite/lib/index.js");

var css = function css() {
    for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
    }

    var useImportant = false; // Don't append !important to style definitions
    return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions);
};

exports.StyleSheet = _indexJs.StyleSheet;
exports.StyleSheetServer = _indexJs.StyleSheetServer;
exports.StyleSheetTestUtils = _indexJs.StyleSheetTestUtils;
exports.css = css;

/***/ }),

/***/ "./node_modules/aphrodite/lib/util.js":
/*!********************************************!*\
  !*** ./node_modules/aphrodite/lib/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// {K1: V1, K2: V2, ...} -> [[K1, V1], [K2, V2]]


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var objectToPairs = function objectToPairs(obj) {
    return Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
};

exports.objectToPairs = objectToPairs;
// [[K1, V1], [K2, V2]] -> {K1: V1, K2: V2, ...}
var pairsToObject = function pairsToObject(pairs) {
    var result = {};
    pairs.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var val = _ref2[1];

        result[key] = val;
    });
    return result;
};

var mapObj = function mapObj(obj, fn) {
    return pairsToObject(objectToPairs(obj).map(fn));
};

exports.mapObj = mapObj;
// Flattens an array one level
// [[A], [B, C, [D]]] -> [A, B, C, [D]]
var flatten = function flatten(list) {
    return list.reduce(function (memo, x) {
        return memo.concat(x);
    }, []);
};

exports.flatten = flatten;
var UPPERCASE_RE = /([A-Z])/g;
var MS_RE = /^ms-/;

var kebabify = function kebabify(string) {
    return string.replace(UPPERCASE_RE, '-$1').toLowerCase();
};
var kebabifyStyleName = function kebabifyStyleName(string) {
    return kebabify(string).replace(MS_RE, '-ms-');
};

exports.kebabifyStyleName = kebabifyStyleName;
var recursiveMerge = function recursiveMerge(a, b) {
    // TODO(jlfwong): Handle malformed input where a and b are not the same
    // type.

    if (typeof a !== 'object') {
        return b;
    }

    var ret = _extends({}, a);

    Object.keys(b).forEach(function (key) {
        if (ret.hasOwnProperty(key)) {
            ret[key] = recursiveMerge(a[key], b[key]);
        } else {
            ret[key] = b[key];
        }
    });

    return ret;
};

exports.recursiveMerge = recursiveMerge;
/**
 * CSS properties which accept numbers but are not in units of "px".
 * Taken from React's CSSProperty.js
 */
var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};

/**
 * Taken from React's CSSProperty.js
 *
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 * Taken from React's CSSProperty.js
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
// Taken from React's CSSProperty.js
Object.keys(isUnitlessNumber).forEach(function (prop) {
    prefixes.forEach(function (prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
});

var stringifyValue = function stringifyValue(key, prop) {
    if (typeof prop === "number") {
        if (isUnitlessNumber[key]) {
            return "" + prop;
        } else {
            return prop + "px";
        }
    } else {
        return prop;
    }
};

exports.stringifyValue = stringifyValue;
/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @return {string} Base 36 encoded hash result
 */
function murmurhash2_32_gc(str) {
    var l = str.length;
    var h = l;
    var i = 0;
    var k = undefined;

    while (l >= 4) {
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
        k ^= k >>> 24;
        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

        l -= 4;
        ++i;
    }

    switch (l) {
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    }

    h ^= h >>> 13;
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h ^= h >>> 15;

    return (h >>> 0).toString(36);
}

// Hash a javascript object using JSON.stringify. This is very fast, about 3
// microseconds on my computer for a sample object:
// http://jsperf.com/test-hashfnv32a-hash/5
//
// Note that this uses JSON.stringify to stringify the objects so in order for
// this to produce consistent hashes browsers need to have a consistent
// ordering of objects. Ben Alpert says that Facebook depends on this, so we
// can probably depend on this too.
var hashObject = function hashObject(object) {
    return murmurhash2_32_gc(JSON.stringify(object));
};

exports.hashObject = hashObject;
var IMPORTANT_RE = /^([^:]+:.*?)( !important)?;$/;

// Given a single style rule string like "a: b;", adds !important to generate
// "a: b !important;".
var importantify = function importantify(string) {
    return string.replace(IMPORTANT_RE, function (_, base, important) {
        return base + " !important;";
    });
};
exports.importantify = importantify;

/***/ }),

/***/ "./node_modules/aphrodite/no-important.js":
/*!************************************************!*\
  !*** ./node_modules/aphrodite/no-important.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/no-important.js */ "./node_modules/aphrodite/lib/no-important.js");


/***/ }),

/***/ "./node_modules/asap/browser-asap.js":
/*!*******************************************!*\
  !*** ./node_modules/asap/browser-asap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(/*! ./raw */ "./node_modules/asap/browser-raw.js");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),

/***/ "./node_modules/asap/browser-raw.js":
/*!******************************************!*\
  !*** ./node_modules/asap/browser-raw.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js");

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/calc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/calc.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = __webpack_require__(/*! ../../utils/isPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/cursor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/cursor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flex.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/flex.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js":
/*!****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/gradient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/gradient.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = __webpack_require__(/*! ../../utils/isPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/position.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/position.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return { position: ['-webkit-sticky', 'sticky'] };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/sizing.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/sizing.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/transition.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/transition.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = __webpack_require__(/*! ../../utils/isPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = __webpack_require__(/*! ../prefixProps */ "./node_modules/inline-style-prefixer/lib/static/prefixProps.js");

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/prefixAll.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/prefixAll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = __webpack_require__(/*! ./prefixProps */ "./node_modules/inline-style-prefixer/lib/static/prefixProps.js");

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = __webpack_require__(/*! ../utils/sortPrefixedStyle */ "./node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js");

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _position = __webpack_require__(/*! ./plugins/position */ "./node_modules/inline-style-prefixer/lib/static/plugins/position.js");

var _position2 = _interopRequireDefault(_position);

var _calc = __webpack_require__(/*! ./plugins/calc */ "./node_modules/inline-style-prefixer/lib/static/plugins/calc.js");

var _calc2 = _interopRequireDefault(_calc);

var _cursor = __webpack_require__(/*! ./plugins/cursor */ "./node_modules/inline-style-prefixer/lib/static/plugins/cursor.js");

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = __webpack_require__(/*! ./plugins/flex */ "./node_modules/inline-style-prefixer/lib/static/plugins/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _sizing = __webpack_require__(/*! ./plugins/sizing */ "./node_modules/inline-style-prefixer/lib/static/plugins/sizing.js");

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = __webpack_require__(/*! ./plugins/gradient */ "./node_modules/inline-style-prefixer/lib/static/plugins/gradient.js");

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = __webpack_require__(/*! ./plugins/transition */ "./node_modules/inline-style-prefixer/lib/static/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = __webpack_require__(/*! ./plugins/flexboxIE */ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js");

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = __webpack_require__(/*! ./plugins/flexboxOld */ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// special flexbox specifications


var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return (0, _sortPrefixedStyle2.default)(styles);
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/prefixProps.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/prefixProps.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js":
/*!****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
};

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortPrefixedStyle;

var _isPrefixedProperty = __webpack_require__(/*! ./isPrefixedProperty */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js");

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortPrefixedStyle(style) {
  return Object.keys(style).sort(function (left, right) {
    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
      return -1;
    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
      return 1;
    }
    return 0;
  }).reduce(function (sortedStyle, prop) {
    sortedStyle[prop] = style[prop];
    return sortedStyle;
  }, {});
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static.js":
/*!******************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/static/prefixAll */ "./node_modules/inline-style-prefixer/lib/static/prefixAll.js")


/***/ }),

/***/ "./node_modules/react-grid-gallery/lib/CheckButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-grid-gallery/lib/CheckButton.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckButton = function (_Component) {
    _inherits(CheckButton, _Component);

    function CheckButton(props) {
        _classCallCheck(this, CheckButton);

        var _this = _possibleConstructorReturn(this, (CheckButton.__proto__ || Object.getPrototypeOf(CheckButton)).call(this, props));

        _this.state = {
            hover: _this.props.hover
        };

        _this.fill = _this.fill.bind(_this);
        _this.visibility = _this.visibility.bind(_this);
        return _this;
    }

    _createClass(CheckButton, [{
        key: 'fill',
        value: function fill() {
            if (this.props.isSelected) return this.props.selectedColor;else if (this.state.hover) return this.props.hoverColor;
            return this.props.color;
        }
    }, {
        key: 'visibility',
        value: function visibility() {
            if (this.props.isSelected || this.props.isSelectable && this.props.parentHover) return 'visible';
            return 'hidden';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var circleStyle = {
                display: this.props.isSelected ? "block" : "none"
            };

            return _react2.default.createElement(
                'div',
                {
                    title: 'Select',
                    style: {
                        visibility: this.visibility(),
                        background: 'none',
                        float: 'left',
                        width: '36px',
                        height: '36px',
                        border: 'none',
                        padding: '6px',
                        cursor: 'pointer',
                        pointerEvents: 'visible'
                    },
                    onClick: this.props.onClick ? function (e) {
                        return _this2.props.onClick(_this2.props.index, e);
                    } : null,
                    onMouseOver: function onMouseOver(e) {
                        return _this2.setState({ hover: true });
                    },
                    onMouseOut: function onMouseOut(e) {
                        return _this2.setState({ hover: false });
                    } },
                _react2.default.createElement(
                    'svg',
                    {
                        fill: this.fill(),
                        height: '24', viewBox: '0 0 24 24',
                        width: '24',
                        xmlns: 'http://www.w3.org/2000/svg' },
                    _react2.default.createElement(
                        'radialGradient',
                        {
                            id: 'shadow',
                            cx: '38',
                            cy: '95.488',
                            r: '10.488',
                            gradientTransform: 'matrix(1 0 0 -1 -26 109)',
                            gradientUnits: 'userSpaceOnUse' },
                        _react2.default.createElement('stop', {
                            offset: '.832',
                            stopColor: '#010101' }),
                        _react2.default.createElement('stop', {
                            offset: '1',
                            stopColor: '#010101',
                            stopOpacity: '0' })
                    ),
                    _react2.default.createElement('circle', {
                        style: circleStyle,
                        opacity: '.26',
                        fill: 'url(#shadow)',
                        cx: '12', cy: '13.512',
                        r: '10.488' }),
                    _react2.default.createElement('circle', {
                        style: circleStyle,
                        fill: '#FFF',
                        cx: '12',
                        cy: '12.2',
                        r: '8.292' }),
                    _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
                )
            );
        }
    }]);

    return CheckButton;
}(_react.Component);

CheckButton.propTypes = { index: _propTypes2.default.number,
    color: _propTypes2.default.string,
    isSelectable: _propTypes2.default.bool,
    isSelected: _propTypes2.default.bool,
    selectedColor: _propTypes2.default.string,
    parentHover: _propTypes2.default.bool,
    hover: _propTypes2.default.bool,
    hoverColor: _propTypes2.default.string,
    onClick: _propTypes2.default.func };

CheckButton.defaultProps = { isSelectable: true,
    isSelected: false,
    parentHover: false,
    hover: false };

module.exports = CheckButton;

/***/ }),

/***/ "./node_modules/react-grid-gallery/lib/Gallery.js":
/*!********************************************************!*\
  !*** ./node_modules/react-grid-gallery/lib/Gallery.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactImages = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");

var _reactImages2 = _interopRequireDefault(_reactImages);

var _Image = __webpack_require__(/*! ./Image.js */ "./node_modules/react-grid-gallery/lib/Image.js");

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
    _inherits(Gallery, _Component);

    function Gallery(props) {
        _classCallCheck(this, Gallery);

        var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

        _this.state = {
            images: _this.props.images,
            thumbnails: [],
            lightboxIsOpen: _this.props.isOpen,
            currentImage: _this.props.currentImage,
            containerWidth: 0
        };

        _this.onResize = _this.onResize.bind(_this);
        _this.closeLightbox = _this.closeLightbox.bind(_this);
        _this.gotoImage = _this.gotoImage.bind(_this);
        _this.gotoNext = _this.gotoNext.bind(_this);
        _this.gotoPrevious = _this.gotoPrevious.bind(_this);
        _this.onClickImage = _this.onClickImage.bind(_this);
        _this.openLightbox = _this.openLightbox.bind(_this);
        _this.onSelectImage = _this.onSelectImage.bind(_this);
        return _this;
    }

    _createClass(Gallery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.onResize();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(np) {
            if (this.state.currentImage > np.images.length - 1) {
                this.setState({ currentImage: np.images.length - 1 });
            }
            if (this.state.images != np.images || this.props.maxRows != np.maxRows) {
                this.setState({
                    images: np.images,
                    thumbnails: this.renderThumbs(this._gallery.clientWidth, np.images)
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!this._gallery) return;
            if (this._gallery.clientWidth !== this.state.containerWidth) {
                this.onResize();
            }
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            if (!this._gallery) return;
            this.setState({
                containerWidth: Math.floor(this._gallery.clientWidth),
                thumbnails: this.renderThumbs(this._gallery.clientWidth)
            });
        }
    }, {
        key: 'openLightbox',
        value: function openLightbox(index, event) {
            if (event) {
                event.preventDefault();
            }
            if (this.props.lightboxWillOpen) {
                this.props.lightboxWillOpen.call(this, index);
            }
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, index);
            }

            this.setState({
                currentImage: index,
                lightboxIsOpen: true
            });
        }
    }, {
        key: 'closeLightbox',
        value: function closeLightbox() {
            if (this.props.lightboxWillClose) {
                this.props.lightboxWillClose.call(this);
            }
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, 0);
            }

            this.setState({
                currentImage: 0,
                lightboxIsOpen: false
            });
        }
    }, {
        key: 'gotoPrevious',
        value: function gotoPrevious() {
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, this.state.currentImage - 1);
            }
            this.setState({
                currentImage: this.state.currentImage - 1
            });
        }
    }, {
        key: 'gotoNext',
        value: function gotoNext() {
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, this.state.currentImage + 1);
            }
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        }
    }, {
        key: 'onClickImage',
        value: function onClickImage() {
            if (this.state.currentImage === this.props.images.length - 1) return;
            this.gotoNext();
        }
    }, {
        key: 'onSelectImage',
        value: function onSelectImage(index, event) {
            event.preventDefault();
            if (this.props.onSelectImage) this.props.onSelectImage.call(this, index, this.state.images[index]);
        }
    }, {
        key: 'gotoImage',
        value: function gotoImage(index) {
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, index);
            }
            this.setState({
                currentImage: index
            });
        }
    }, {
        key: 'getOnClickThumbnailFn',
        value: function getOnClickThumbnailFn() {
            if (!this.props.onClickThumbnail && this.props.enableLightbox) return this.openLightbox;
            if (this.props.onClickThumbnail) return this.props.onClickThumbnail;
            return null;
        }
    }, {
        key: 'getOnClickLightboxThumbnailFn',
        value: function getOnClickLightboxThumbnailFn() {
            if (!this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.gotoImage;
            if (this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.props.onClickLightboxThumbnail;
            return null;
        }
    }, {
        key: 'getOnClickImageFn',
        value: function getOnClickImageFn() {
            if (this.props.onClickImage) return this.props.onClickImage;
            return this.onClickImage;
        }
    }, {
        key: 'getOnClickPrevFn',
        value: function getOnClickPrevFn() {
            if (this.props.onClickPrev) return this.props.onClickPrev;
            return this.gotoPrevious;
        }
    }, {
        key: 'getOnClickNextFn',
        value: function getOnClickNextFn() {
            if (this.props.onClickNext) return this.props.onClickNext;
            return this.gotoNext;
        }
    }, {
        key: 'calculateCutOff',
        value: function calculateCutOff(len, delta, items) {
            var cutoff = [];
            var cutsum = 0;
            for (var i in items) {
                var item = items[i];
                var fractOfLen = item.scaletwidth / len;
                cutoff[i] = Math.floor(fractOfLen * delta);
                cutsum += cutoff[i];
            }

            var stillToCutOff = delta - cutsum;
            while (stillToCutOff > 0) {
                for (i in cutoff) {
                    cutoff[i]++;
                    stillToCutOff--;
                    if (stillToCutOff < 0) break;
                }
            }
            return cutoff;
        }
    }, {
        key: 'buildImageRow',
        value: function buildImageRow(items, containerWidth) {
            var row = [];
            var len = 0;
            var imgMargin = 2 * this.props.margin;
            while (items.length > 0 && len < containerWidth) {
                var item = items.shift();
                row.push(item);
                len += item.scaletwidth + imgMargin;
            }

            var delta = len - containerWidth;
            if (row.length > 0 && delta > 0) {
                var cutoff = this.calculateCutOff(len, delta, row);
                for (var i in row) {
                    var pixelsToRemove = cutoff[i];
                    item = row[i];
                    item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
                    item.vwidth = item.scaletwidth - pixelsToRemove;
                }
            } else {
                for (var j in row) {
                    item = row[j];
                    item.marginLeft = 0;
                    item.vwidth = item.scaletwidth;
                }
            }
            return row;
        }
    }, {
        key: 'setThumbScale',
        value: function setThumbScale(item) {
            item.scaletwidth = Math.floor(this.props.rowHeight * (item.thumbnailWidth / item.thumbnailHeight));
        }
    }, {
        key: 'renderThumbs',
        value: function renderThumbs(containerWidth) {
            var images = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.images;

            if (!images) return [];
            if (containerWidth == 0) return [];

            var items = images.slice();
            for (var t in items) {
                this.setThumbScale(items[t]);
            }

            var thumbs = [];
            var rows = [];
            while (items.length > 0) {
                rows.push(this.buildImageRow(items, containerWidth));
            }

            for (var r in rows) {
                for (var i in rows[r]) {
                    var item = rows[r][i];
                    if (this.props.maxRows) {
                        if (r < this.props.maxRows) {
                            thumbs.push(item);
                        }
                    } else {
                        thumbs.push(item);
                    }
                }
            }
            return thumbs;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var images = this.state.thumbnails.map(function (item, idx) {
                return _react2.default.createElement(_Image2.default, {
                    key: "Image-" + idx + "-" + item.src,
                    item: item,
                    index: idx,
                    margin: _this2.props.margin,
                    height: _this2.props.rowHeight,
                    isSelectable: _this2.props.enableImageSelection,
                    onClick: _this2.getOnClickThumbnailFn(),
                    onSelectImage: _this2.onSelectImage,
                    tagStyle: _this2.props.tagStyle,
                    tileViewportStyle: _this2.props.tileViewportStyle,
                    thumbnailStyle: _this2.props.thumbnailStyle,
                    thumbnailImageComponent: _this2.props.thumbnailImageComponent
                });
            });
            var resizeIframeStyles = {
                height: 0,
                margin: 0,
                padding: 0,
                overflow: "hidden",
                borderWidth: 0,
                position: "fixed",
                backgroundColor: "transparent",
                width: "100%"
            };
            return _react2.default.createElement(
                'div',
                { id: this.props.id,
                    className: 'ReactGridGallery',
                    ref: function ref(c) {
                        return _this2._gallery = c;
                    } },
                _react2.default.createElement('iframe', { style: resizeIframeStyles,
                    ref: function ref(c) {
                        return c && c.contentWindow && c.contentWindow.addEventListener('resize', _this2.onResize);
                    } }),
                images,
                _react2.default.createElement(_reactImages2.default, _extends({
                    images: this.props.images,
                    backdropClosesModal: this.props.backdropClosesModal,
                    currentImage: this.state.currentImage,
                    preloadNextImage: this.props.preloadNextImage,
                    customControls: this.props.customControls,
                    enableKeyboardInput: this.props.enableKeyboardInput,
                    imageCountSeparator: this.props.imageCountSeparator,
                    isOpen: this.state.lightboxIsOpen,
                    onClickImage: this.getOnClickImageFn(),
                    onClickNext: this.getOnClickNextFn(),
                    onClickPrev: this.getOnClickPrevFn(),
                    showCloseButton: this.props.showCloseButton,
                    showImageCount: this.props.showImageCount,
                    onClose: this.closeLightbox,
                    width: this.props.lightboxWidth,
                    theme: this.props.theme,
                    onClickThumbnail: this.getOnClickLightboxThumbnailFn(),
                    showThumbnails: this.props.showLightboxThumbnails
                }, this.props.lightBoxProps))
            );
        }
    }]);

    return Gallery;
}(_react.Component);

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
    images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        src: _propTypes2.default.string.isRequired,
        nano: _propTypes2.default.string,
        alt: _propTypes2.default.string,
        thumbnail: _propTypes2.default.string.isRequired,
        srcset: _propTypes2.default.array,
        caption: _propTypes2.default.string,
        tags: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            value: _propTypes2.default.string.isRequired,
            title: _propTypes2.default.string.isRequired
        })),
        thumbnailWidth: _propTypes2.default.number.isRequired,
        thumbnailHeight: _propTypes2.default.number.isRequired,
        isSelected: _propTypes2.default.bool,
        thumbnailCaption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
    })).isRequired,
    id: _propTypes2.default.string,
    enableImageSelection: _propTypes2.default.bool,
    onSelectImage: _propTypes2.default.func,
    rowHeight: _propTypes2.default.number,
    maxRows: _propTypes2.default.number,
    margin: _propTypes2.default.number,
    onClickThumbnail: _propTypes2.default.func,
    lightboxWillOpen: _propTypes2.default.func,
    lightboxWillClose: _propTypes2.default.func,
    enableLightbox: _propTypes2.default.bool,
    backdropClosesModal: _propTypes2.default.bool,
    currentImage: _propTypes2.default.number,
    preloadNextImage: _propTypes2.default.bool,
    customControls: _propTypes2.default.arrayOf(_propTypes2.default.node),
    currentImageWillChange: _propTypes2.default.func,
    enableKeyboardInput: _propTypes2.default.bool,
    imageCountSeparator: _propTypes2.default.string,
    isOpen: _propTypes2.default.bool,
    onClickImage: _propTypes2.default.func,
    onClickNext: _propTypes2.default.func,
    onClickPrev: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    showCloseButton: _propTypes2.default.bool,
    showImageCount: _propTypes2.default.bool,
    lightboxWidth: _propTypes2.default.number,
    tileViewportStyle: _propTypes2.default.func,
    thumbnailStyle: _propTypes2.default.func,
    showLightboxThumbnails: _propTypes2.default.bool,
    onClickLightboxThumbnail: _propTypes2.default.func,
    tagStyle: _propTypes2.default.object,
    thumbnailImageComponent: _propTypes2.default.func,
    lightBoxProps: _propTypes2.default.object
};

Gallery.defaultProps = {
    id: "ReactGridGallery",
    enableImageSelection: true,
    rowHeight: 180,
    margin: 2,
    enableLightbox: true,
    backdropClosesModal: false,
    currentImage: 0,
    preloadNextImage: true,
    enableKeyboardInput: true,
    imageCountSeparator: ' of ',
    isOpen: false,
    showCloseButton: true,
    showImageCount: true,
    lightboxWidth: 1024,
    showLightboxThumbnails: false,
    lightBoxProps: {}
};

module.exports = Gallery;

/***/ }),

/***/ "./node_modules/react-grid-gallery/lib/Image.js":
/*!******************************************************!*\
  !*** ./node_modules/react-grid-gallery/lib/Image.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _CheckButton = __webpack_require__(/*! ./CheckButton.js */ "./node_modules/react-grid-gallery/lib/CheckButton.js");

var _CheckButton2 = _interopRequireDefault(_CheckButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Component) {
    _inherits(Image, _Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.state = {
            hover: false
        };
        return _this;
    }

    _createClass(Image, [{
        key: 'tagStyle',
        value: function tagStyle() {
            if (this.props.tagStyle) return this.props.tagStyle;
            return {
                display: "inline",
                padding: ".2em .6em .3em",
                fontSize: "75%",
                fontWeight: "600",
                lineHeight: "1",
                color: "yellow",
                background: "rgba(0,0,0,0.65)",
                textAlign: "center",
                whiteSpace: "nowrap",
                verticalAlign: "baseline",
                borderRadius: ".25em"
            };
        }
    }, {
        key: 'tileViewportStyle',
        value: function tileViewportStyle() {
            if (this.props.tileViewportStyle) return this.props.tileViewportStyle.call(this);
            var nanoBase64Backgorund = {};
            if (this.props.item.nano) {
                nanoBase64Backgorund = {
                    background: 'url(' + this.props.item.nano + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                };
            }
            if (this.props.item.isSelected) return Object.assign({
                width: this.props.item.vwidth - 32,
                height: this.props.height - 32,
                margin: 16,
                overflow: "hidden"
            }, nanoBase64Backgorund);
            return Object.assign({
                width: this.props.item.vwidth,
                height: this.props.height,
                overflow: "hidden"
            }, nanoBase64Backgorund);
        }
    }, {
        key: 'thumbnailStyle',
        value: function thumbnailStyle() {
            if (this.props.thumbnailStyle) return this.props.thumbnailStyle.call(this);

            var rotationTransformValue = undefined;
            switch (this.props.item.orientation) {
                case 3:
                    rotationTransformValue = "rotate(180deg)";
                    break;
                case 6:
                    rotationTransformValue = "rotate(90deg)";
                    break;
                case 8:
                    rotationTransformValue = "rotate(270deg)";
                    break;
                case 2:
                    rotationTransformValue = "rotateY(180deg)";
                    break;
                case 4:
                    rotationTransformValue = "rotate(180deg) rotateY(180deg)";
                    break;
                case 5:
                    rotationTransformValue = "rotate(270deg) rotateY(180deg)";
                    break;
                case 7:
                    rotationTransformValue = "rotate(90deg) rotateY(180deg)";
                    break;
            }
            if (this.props.item.isSelected) {
                var ratio = this.props.item.scaletwidth / this.props.height;
                var height = 0;
                var width = 0;
                var viewportHeight = this.props.height - 32;
                var viewportWidth = this.props.item.vwidth - 32;

                if (this.props.item.scaletwidth > this.props.height) {
                    width = this.props.item.scaletwidth - 32;
                    height = Math.floor(width / ratio);
                } else {
                    height = this.props.height - 32;
                    width = Math.floor(height * ratio);
                }

                var marginTop = -Math.abs(Math.floor((viewportHeight - height) / 2));
                var marginLeft = -Math.abs(Math.floor((viewportWidth - width) / 2));
                return {
                    cursor: 'pointer',
                    width: width,
                    height: height,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    transform: rotationTransformValue
                };
            }
            return {
                cursor: 'pointer',
                width: this.props.item.scaletwidth,
                height: this.props.height,
                marginLeft: this.props.item.marginLeft,
                marginTop: 0,
                transform: rotationTransformValue
            };
        }
    }, {
        key: 'renderCheckButton',
        value: function renderCheckButton() {
            return _react2.default.createElement(_CheckButton2.default, { key: 'Select',
                index: this.props.index,
                color: "rgba(255, 255, 255, 0.7)",
                selectedColor: "#4285f4",
                hoverColor: "rgba(255, 255, 255, 1)",
                isSelected: this.props.item.isSelected,
                isSelectable: this.props.isSelectable,
                onClick: this.props.isSelectable ? this.props.onSelectImage : null,
                parentHover: this.state.hover });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var alt = this.props.item.alt ? this.props.item.alt : "";
            var tags = typeof this.props.item.tags === 'undefined' ? _react2.default.createElement('noscript', null) : this.props.item.tags.map(function (tag) {
                return _react2.default.createElement(
                    'div',
                    { title: tag.title,
                        key: "tag-" + tag.value,
                        style: { display: "inline-block",
                            cursor: 'pointer',
                            pointerEvents: 'visible',
                            margin: "2px" } },
                    _react2.default.createElement(
                        'span',
                        { style: _this2.tagStyle() },
                        tag.value
                    )
                );
            });

            var customOverlay = typeof this.props.item.customOverlay === 'undefined' ? _react2.default.createElement('noscript', null) : _react2.default.createElement(
                'div',
                { className: 'ReactGridGallery_custom-overlay',
                    key: "custom-overlay-" + this.props.index,
                    style: {
                        pointerEvents: "none",
                        opacity: this.state.hover ? 1 : 0,
                        position: "absolute",
                        height: "100%",
                        width: "100%" } },
                this.props.item.customOverlay
            );

            var thumbnailProps = {
                key: "img-" + this.props.index,
                src: this.props.item.thumbnail,
                alt: alt,
                title: this.props.item.caption,
                style: this.thumbnailStyle()
            };

            var ThumbnailImageComponent = this.props.thumbnailImageComponent;

            return _react2.default.createElement(
                'div',
                { className: 'ReactGridGallery_tile',
                    key: "tile-" + this.props.index,
                    onMouseEnter: function onMouseEnter(e) {
                        return _this2.setState({ hover: true });
                    },
                    onMouseLeave: function onMouseLeave(e) {
                        return _this2.setState({ hover: false });
                    },
                    style: {
                        margin: this.props.margin,
                        WebkitUserSelect: "none",
                        position: "relative",
                        float: "left",
                        background: "#eee",
                        padding: "0px" } },
                _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-icon-bar',
                        key: "tile-icon-bar-" + this.props.index,
                        style: {
                            pointerEvents: "none",
                            opacity: 1,
                            position: "absolute",
                            height: "36px",
                            width: "100%" } },
                    this.renderCheckButton()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-bottom-bar',
                        key: "tile-bottom-bar-" + this.props.index,
                        style: {
                            padding: "2px",
                            pointerEvents: "none",
                            position: "absolute",
                            minHeight: "0px",
                            maxHeight: "160px",
                            width: "100%",
                            bottom: "0px",
                            overflow: "hidden"
                        } },
                    tags
                ),
                customOverlay,
                _react2.default.createElement('div', { className: 'ReactGridGallery_tile-overlay',
                    key: "tile-overlay-" + this.props.index,
                    style: {
                        pointerEvents: "none",
                        opacity: 1,
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        background: this.state.hover && !this.props.item.isSelected && this.props.isSelectable ? 'linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)' : 'none' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-viewport',
                        style: this.tileViewportStyle(),
                        key: "tile-viewport-" + this.props.index,
                        onClick: this.props.onClick ? function (e) {
                            return _this2.props.onClick.call(_this2, _this2.props.index, e);
                        } : null },
                    ThumbnailImageComponent ? _react2.default.createElement(ThumbnailImageComponent, _extends({}, this.props, { imageProps: thumbnailProps })) : _react2.default.createElement('img', thumbnailProps)
                ),
                this.props.item.thumbnailCaption && _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-description',
                        style: {
                            background: "white",
                            height: "100%",
                            width: "100%",
                            margin: 0,
                            userSelect: "text",
                            WebkitUserSelect: "text",
                            MozUserSelect: "text",
                            overflow: "hidden"
                        } },
                    this.props.item.thumbnailCaption
                )
            );
        }
    }]);

    return Image;
}(_react.Component);

Image.propTypes = {
    item: _propTypes2.default.object,
    index: _propTypes2.default.number,
    margin: _propTypes2.default.number,
    height: _propTypes2.default.number,
    isSelectable: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    onSelectImage: _propTypes2.default.func,
    tileViewportStyle: _propTypes2.default.func,
    thumbnailStyle: _propTypes2.default.func,
    tagStyle: _propTypes2.default.object,
    customOverlay: _propTypes2.default.element,
    thumbnailImageComponent: _propTypes2.default.func
};

Image.defaultProps = {
    isSelectable: true,
    hover: false
};

exports.default = Image;

/***/ }),

/***/ "./node_modules/react-images/lib/Lightbox.js":
/*!***************************************************!*\
  !*** ./node_modules/react-images/lib/Lightbox.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _aphrodite = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/lib/index.js");

var _reactScrolllock = __webpack_require__(/*! react-scrolllock */ "./node_modules/react-scrolllock/dist/index.js");

var _reactScrolllock2 = _interopRequireDefault(_reactScrolllock);

var _theme = __webpack_require__(/*! ./theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _Arrow = __webpack_require__(/*! ./components/Arrow */ "./node_modules/react-images/lib/components/Arrow.js");

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Container = __webpack_require__(/*! ./components/Container */ "./node_modules/react-images/lib/components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Footer = __webpack_require__(/*! ./components/Footer */ "./node_modules/react-images/lib/components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(/*! ./components/Header */ "./node_modules/react-images/lib/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _PaginatedThumbnails = __webpack_require__(/*! ./components/PaginatedThumbnails */ "./node_modules/react-images/lib/components/PaginatedThumbnails.js");

var _PaginatedThumbnails2 = _interopRequireDefault(_PaginatedThumbnails);

var _Portal = __webpack_require__(/*! ./components/Portal */ "./node_modules/react-images/lib/components/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _Spinner = __webpack_require__(/*! ./components/Spinner */ "./node_modules/react-images/lib/components/Spinner.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _bindFunctions = __webpack_require__(/*! ./utils/bindFunctions */ "./node_modules/react-images/lib/utils/bindFunctions.js");

var _bindFunctions2 = _interopRequireDefault(_bindFunctions);

var _canUseDom = __webpack_require__(/*! ./utils/canUseDom */ "./node_modules/react-images/lib/utils/canUseDom.js");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _deepMerge = __webpack_require__(/*! ./utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// consumers sometimes provide incorrect type or casing
function normalizeSourceSet(data) {
	var sourceSet = data.srcSet || data.srcset;

	if (Array.isArray(sourceSet)) {
		return sourceSet.join();
	}

	return sourceSet;
}

var Lightbox = function (_Component) {
	_inherits(Lightbox, _Component);

	function Lightbox(props) {
		_classCallCheck(this, Lightbox);

		var _this = _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

		_this.theme = (0, _deepMerge2.default)(_theme2.default, props.theme);
		_this.classes = _aphrodite.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, _this.theme));
		_this.state = { imageLoaded: false };

		_bindFunctions2.default.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput', 'handleImageLoaded']);
		return _this;
	}

	_createClass(Lightbox, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				theme: this.theme
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.isOpen) {
				if (this.props.enableKeyboardInput) {
					window.addEventListener('keydown', this.handleKeyboardInput);
				}
				if (typeof this.props.currentImage === 'number') {
					this.preloadImage(this.props.currentImage, this.handleImageLoaded);
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!_canUseDom2.default) return;

			// preload images
			if (nextProps.preloadNextImage) {
				var currentIndex = this.props.currentImage;
				var nextIndex = nextProps.currentImage + 1;
				var prevIndex = nextProps.currentImage - 1;
				var preloadIndex = void 0;

				if (currentIndex && nextProps.currentImage > currentIndex) {
					preloadIndex = nextIndex;
				} else if (currentIndex && nextProps.currentImage < currentIndex) {
					preloadIndex = prevIndex;
				}

				// if we know the user's direction just get one image
				// otherwise, to be safe, we need to grab one in each direction
				if (preloadIndex) {
					this.preloadImage(preloadIndex);
				} else {
					this.preloadImage(prevIndex);
					this.preloadImage(nextIndex);
				}
			}

			// preload current image
			if (this.props.currentImage !== nextProps.currentImage || !this.props.isOpen && nextProps.isOpen) {
				var img = this.preloadImageData(nextProps.images[nextProps.currentImage], this.handleImageLoaded);
				if (img) this.setState({ imageLoaded: img.complete });
			}

			// add/remove event listeners
			if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
			if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.props.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'preloadImage',
		value: function preloadImage(idx, onload) {
			return this.preloadImageData(this.props.images[idx], onload);
		}
	}, {
		key: 'preloadImageData',
		value: function preloadImageData(data, onload) {
			if (!data) return;
			var img = new Image();
			var sourceSet = normalizeSourceSet(data);

			// TODO: add error handling for missing images
			img.onerror = onload;
			img.onload = onload;
			img.src = data.src;

			if (sourceSet) img.srcset = sourceSet;

			return img;
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    images = _props.images;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === images.length - 1) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			var currentImage = this.props.currentImage;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === 0) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickPrev();
		}
	}, {
		key: 'closeBackdrop',
		value: function closeBackdrop(event) {
			// make sure event only happens if they click the backdrop
			// and if the caption is widening the figure element let that respond too
			if (event.target.id === 'lightboxBackdrop' || event.target.tagName === 'FIGURE') {
				this.props.onClose();
			}
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				// left
				this.gotoPrev(event);
				return true;
			} else if (event.keyCode === 39) {
				// right
				this.gotoNext(event);
				return true;
			} else if (event.keyCode === 27) {
				// esc
				this.props.onClose();
				return true;
			}
			return false;
		}
	}, {
		key: 'handleImageLoaded',
		value: function handleImageLoaded() {
			this.setState({ imageLoaded: true });
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'left',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				title: this.props.leftArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'right',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				title: this.props.rightArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			var _props2 = this.props,
			    backdropClosesModal = _props2.backdropClosesModal,
			    isOpen = _props2.isOpen,
			    showThumbnails = _props2.showThumbnails,
			    width = _props2.width;
			var imageLoaded = this.state.imageLoaded;


			if (!isOpen) return _react2.default.createElement('span', { key: 'closed' });

			var offsetThumbnails = 0;
			if (showThumbnails) {
				offsetThumbnails = this.theme.thumbnail.size + this.theme.container.gutter.vertical;
			}

			return _react2.default.createElement(
				_Container2.default,
				{
					key: 'open',
					onClick: backdropClosesModal && this.closeBackdrop,
					onTouchEnd: backdropClosesModal && this.closeBackdrop
				},
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: (0, _aphrodite.css)(this.classes.content), style: { marginBottom: offsetThumbnails, maxWidth: width } },
						imageLoaded && this.renderHeader(),
						this.renderImages(),
						this.renderSpinner(),
						imageLoaded && this.renderFooter()
					),
					imageLoaded && this.renderThumbnails(),
					imageLoaded && this.renderArrowPrev(),
					imageLoaded && this.renderArrowNext(),
					this.props.preventScroll && _react2.default.createElement(_reactScrolllock2.default, null)
				)
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _props3 = this.props,
			    currentImage = _props3.currentImage,
			    images = _props3.images,
			    onClickImage = _props3.onClickImage,
			    showThumbnails = _props3.showThumbnails;
			var imageLoaded = this.state.imageLoaded;


			if (!images || !images.length) return null;

			var image = images[currentImage];
			var sourceSet = normalizeSourceSet(image);
			var sizes = sourceSet ? '100vw' : null;

			var thumbnailsSize = showThumbnails ? this.theme.thumbnail.size : 0;
			var heightOffset = this.theme.header.height + this.theme.footer.height + thumbnailsSize + this.theme.container.gutter.vertical + 'px';

			return _react2.default.createElement(
				'figure',
				{ className: (0, _aphrodite.css)(this.classes.figure) },
				_react2.default.createElement('img', {
					className: (0, _aphrodite.css)(this.classes.image, imageLoaded && this.classes.imageLoaded),
					onClick: onClickImage,
					sizes: sizes,
					alt: image.alt,
					src: image.src,
					srcSet: sourceSet,
					style: {
						cursor: onClickImage ? 'pointer' : 'auto',
						maxHeight: 'calc(100vh - ' + heightOffset + ')'
					}
				})
			);
		}
	}, {
		key: 'renderThumbnails',
		value: function renderThumbnails() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    showThumbnails = _props4.showThumbnails,
			    thumbnailOffset = _props4.thumbnailOffset;


			if (!showThumbnails) return;

			return _react2.default.createElement(_PaginatedThumbnails2.default, {
				currentImage: currentImage,
				images: images,
				offset: thumbnailOffset,
				onClickThumbnail: onClickThumbnail
			});
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			var _props5 = this.props,
			    closeButtonTitle = _props5.closeButtonTitle,
			    customControls = _props5.customControls,
			    onClose = _props5.onClose,
			    showCloseButton = _props5.showCloseButton;


			return _react2.default.createElement(_Header2.default, {
				customControls: customControls,
				onClose: onClose,
				showCloseButton: showCloseButton,
				closeButtonTitle: closeButtonTitle
			});
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter() {
			var _props6 = this.props,
			    currentImage = _props6.currentImage,
			    images = _props6.images,
			    imageCountSeparator = _props6.imageCountSeparator,
			    showImageCount = _props6.showImageCount;


			if (!images || !images.length) return null;

			return _react2.default.createElement(_Footer2.default, {
				caption: images[currentImage].caption,
				countCurrent: currentImage + 1,
				countSeparator: imageCountSeparator,
				countTotal: images.length,
				showCount: showImageCount
			});
		}
	}, {
		key: 'renderSpinner',
		value: function renderSpinner() {
			var _props7 = this.props,
			    spinner = _props7.spinner,
			    spinnerColor = _props7.spinnerColor,
			    spinnerSize = _props7.spinnerSize;
			var imageLoaded = this.state.imageLoaded;

			var Spinner = spinner;

			return _react2.default.createElement(
				'div',
				{ className: (0, _aphrodite.css)(this.classes.spinner, !imageLoaded && this.classes.spinnerActive) },
				_react2.default.createElement(Spinner, {
					color: spinnerColor,
					size: spinnerSize
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Portal2.default,
				null,
				this.renderDialog()
			);
		}
	}]);

	return Lightbox;
}(_react.Component);

Lightbox.propTypes = {
	backdropClosesModal: _propTypes2.default.bool,
	closeButtonTitle: _propTypes2.default.string,
	currentImage: _propTypes2.default.number,
	customControls: _propTypes2.default.arrayOf(_propTypes2.default.node),
	enableKeyboardInput: _propTypes2.default.bool,
	imageCountSeparator: _propTypes2.default.string,
	images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		src: _propTypes2.default.string.isRequired,
		srcSet: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
		caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
		thumbnail: _propTypes2.default.string
	})).isRequired,
	isOpen: _propTypes2.default.bool,
	leftArrowTitle: _propTypes2.default.string,
	onClickImage: _propTypes2.default.func,
	onClickNext: _propTypes2.default.func,
	onClickPrev: _propTypes2.default.func,
	onClose: _propTypes2.default.func.isRequired,
	preloadNextImage: _propTypes2.default.bool,
	preventScroll: _propTypes2.default.bool,
	rightArrowTitle: _propTypes2.default.string,
	showCloseButton: _propTypes2.default.bool,
	showImageCount: _propTypes2.default.bool,
	showThumbnails: _propTypes2.default.bool,
	spinner: _propTypes2.default.func,
	spinnerColor: _propTypes2.default.string,
	spinnerSize: _propTypes2.default.number,
	theme: _propTypes2.default.object,
	thumbnailOffset: _propTypes2.default.number,
	width: _propTypes2.default.number
};
Lightbox.defaultProps = {
	closeButtonTitle: 'Close (Esc)',
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	leftArrowTitle: 'Previous (Left arrow key)',
	onClickShowNextImage: true,
	preloadNextImage: true,
	preventScroll: true,
	rightArrowTitle: 'Next (Right arrow key)',
	showCloseButton: true,
	showImageCount: true,
	spinner: _Spinner2.default,
	spinnerColor: 'white',
	spinnerSize: 100,
	theme: {},
	thumbnailOffset: 2,
	width: 1024
};
Lightbox.childContextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	content: {
		position: 'relative'
	},
	figure: {
		margin: 0 // remove browser default
	},
	image: {
		display: 'block', // removes browser default gutter
		height: 'auto',
		margin: '0 auto', // maintain center on very short screens OR very narrow image
		maxWidth: '100%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none',

		// opacity animation on image load
		opacity: 0,
		transition: 'opacity 0.3s'
	},
	imageLoaded: {
		opacity: 1
	},
	spinner: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',

		// opacity animation to make spinner appear with delay
		opacity: 0,
		transition: 'opacity 0.3s',
		pointerEvents: 'none'
	},
	spinnerActive: {
		opacity: 1
	}
};

exports.default = Lightbox;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Arrow.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-images/lib/components/Arrow.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Icon = __webpack_require__(/*! ./Icon */ "./node_modules/react-images/lib/components/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Arrow(_ref, _ref2) {
	var theme = _ref2.theme;

	var direction = _ref.direction,
	    icon = _ref.icon,
	    onClick = _ref.onClick,
	    size = _ref.size,
	    props = _objectWithoutProperties(_ref, ['direction', 'icon', 'onClick', 'size']);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement(
		'button',
		_extends({
			type: 'button',
			className: (0, _noImportant.css)(classes.arrow, classes['arrow__direction__' + direction], size && classes['arrow__size__' + size]),
			onClick: onClick,
			onTouchEnd: onClick
		}, props),
		_react2.default.createElement(_Icon2.default, { fill: !!theme.arrow && theme.arrow.fill || _theme2.default.arrow.fill, type: icon })
	);
}

Arrow.propTypes = {
	direction: _propTypes2.default.oneOf(['left', 'right']),
	icon: _propTypes2.default.string,
	onClick: _propTypes2.default.func.isRequired,
	size: _propTypes2.default.oneOf(['medium', 'small']).isRequired
};
Arrow.defaultProps = {
	size: 'medium'
};
Arrow.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	arrow: {
		background: 'none',
		border: 'none',
		borderRadius: 4,
		cursor: 'pointer',
		outline: 'none',
		padding: 10, // increase hit area
		position: 'absolute',
		top: '50%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'
	},

	// sizes
	arrow__size__medium: {
		height: _theme2.default.arrow.height,
		marginTop: _theme2.default.arrow.height / -2,
		width: 40,

		'@media (min-width: 768px)': {
			width: 70
		}
	},
	arrow__size__small: {
		height: _theme2.default.thumbnail.size,
		marginTop: _theme2.default.thumbnail.size / -2,
		width: 30,

		'@media (min-width: 500px)': {
			width: 40
		}
	},

	// direction
	arrow__direction__right: {
		right: _theme2.default.container.gutter.horizontal
	},
	arrow__direction__left: {
		left: _theme2.default.container.gutter.horizontal
	}
};

exports.default = Arrow;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Container.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Container.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Container(_ref, _ref2) {
	var theme = _ref2.theme;

	var props = _objectWithoutProperties(_ref, []);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement('div', _extends({ id: 'lightboxBackdrop',
		className: (0, _noImportant.css)(classes.container)
	}, props));
}

Container.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	container: {
		alignItems: 'center',
		backgroundColor: _theme2.default.container.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: _theme2.default.container.gutter.vertical,
		paddingLeft: _theme2.default.container.gutter.horizontal,
		paddingRight: _theme2.default.container.gutter.horizontal,
		paddingTop: _theme2.default.container.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: _theme2.default.container.zIndex
	}
};

exports.default = Container;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Footer.js":
/*!************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Footer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Footer(_ref, _ref2) {
	var theme = _ref2.theme;

	var caption = _ref.caption,
	    countCurrent = _ref.countCurrent,
	    countSeparator = _ref.countSeparator,
	    countTotal = _ref.countTotal,
	    showCount = _ref.showCount,
	    props = _objectWithoutProperties(_ref, ['caption', 'countCurrent', 'countSeparator', 'countTotal', 'showCount']);

	if (!caption && !showCount) return null;

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	var imageCount = showCount ? _react2.default.createElement(
		'div',
		{ className: (0, _noImportant.css)(classes.footerCount) },
		countCurrent,
		countSeparator,
		countTotal
	) : _react2.default.createElement('span', null);

	return _react2.default.createElement(
		'div',
		_extends({ className: (0, _noImportant.css)(classes.footer) }, props),
		caption ? _react2.default.createElement(
			'figcaption',
			{ className: (0, _noImportant.css)(classes.footerCaption) },
			caption
		) : _react2.default.createElement('span', null),
		imageCount
	);
}

Footer.propTypes = {
	caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	countCurrent: _propTypes2.default.number,
	countSeparator: _propTypes2.default.string,
	countTotal: _propTypes2.default.number,
	showCount: _propTypes2.default.bool
};
Footer.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	footer: {
		boxSizing: 'border-box',
		color: _theme2.default.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: _theme2.default.footer.gutter.vertical,
		paddingLeft: _theme2.default.footer.gutter.horizontal,
		paddingRight: _theme2.default.footer.gutter.horizontal,
		paddingTop: _theme2.default.footer.gutter.vertical
	},
	footerCount: {
		color: _theme2.default.footer.count.color,
		fontSize: _theme2.default.footer.count.fontSize,
		paddingLeft: '1em' // add a small gutter for the caption
	},
	footerCaption: {
		flex: '1 1 0'
	}
};

exports.default = Footer;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Header.js":
/*!************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Header.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Icon = __webpack_require__(/*! ./Icon */ "./node_modules/react-images/lib/components/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Header(_ref, _ref2) {
	var theme = _ref2.theme;

	var customControls = _ref.customControls,
	    onClose = _ref.onClose,
	    showCloseButton = _ref.showCloseButton,
	    closeButtonTitle = _ref.closeButtonTitle,
	    props = _objectWithoutProperties(_ref, ['customControls', 'onClose', 'showCloseButton', 'closeButtonTitle']);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement(
		'div',
		_extends({ className: (0, _noImportant.css)(classes.header) }, props),
		customControls ? customControls : _react2.default.createElement('span', null),
		!!showCloseButton && _react2.default.createElement(
			'button',
			{
				title: closeButtonTitle,
				className: (0, _noImportant.css)(classes.close),
				onClick: onClose
			},
			_react2.default.createElement(_Icon2.default, { fill: !!theme.close && theme.close.fill || _theme2.default.close.fill, type: 'close' })
		)
	);
}

Header.propTypes = {
	customControls: _propTypes2.default.array,
	onClose: _propTypes2.default.func.isRequired,
	showCloseButton: _propTypes2.default.bool
};
Header.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		height: _theme2.default.header.height
	},
	close: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',
		zIndex: 1,

		// increase hit area
		height: 40,
		marginRight: -10,
		padding: 10,
		width: 40
	}
};

exports.default = Header;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Icon.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/components/Icon.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _arrowLeft = __webpack_require__(/*! ../icons/arrowLeft */ "./node_modules/react-images/lib/icons/arrowLeft.js");

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _arrowRight = __webpack_require__(/*! ../icons/arrowRight */ "./node_modules/react-images/lib/icons/arrowRight.js");

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _close = __webpack_require__(/*! ../icons/close */ "./node_modules/react-images/lib/icons/close.js");

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var icons = { arrowLeft: _arrowLeft2.default, arrowRight: _arrowRight2.default, close: _close2.default };

var Icon = function Icon(_ref) {
	var fill = _ref.fill,
	    type = _ref.type,
	    props = _objectWithoutProperties(_ref, ['fill', 'type']);

	var icon = icons[type];

	return _react2.default.createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: icon(fill) }
	}, props));
};

Icon.propTypes = {
	fill: _propTypes2.default.string,
	type: _propTypes2.default.oneOf(Object.keys(icons))
};
Icon.defaultProps = {
	fill: 'white'
};

exports.default = Icon;

/***/ }),

/***/ "./node_modules/react-images/lib/components/PaginatedThumbnails.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-images/lib/components/PaginatedThumbnails.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _Thumbnail = __webpack_require__(/*! ./Thumbnail */ "./node_modules/react-images/lib/components/Thumbnail.js");

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _Arrow = __webpack_require__(/*! ./Arrow */ "./node_modules/react-images/lib/components/Arrow.js");

var _Arrow2 = _interopRequireDefault(_Arrow);

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = _noImportant.StyleSheet.create({
	paginatedThumbnails: {
		bottom: _theme2.default.container.gutter.vertical,
		height: _theme2.default.thumbnail.size,
		padding: '0 50px',
		position: 'absolute',
		textAlign: 'center',
		whiteSpace: 'nowrap',
		left: '50%',
		transform: 'translateX(-50%)'
	}
});

var arrowStyles = {
	height: _theme2.default.thumbnail.size + _theme2.default.thumbnail.gutter * 2,
	width: 40
};

var PaginatedThumbnails = function (_Component) {
	_inherits(PaginatedThumbnails, _Component);

	function PaginatedThumbnails(props) {
		_classCallCheck(this, PaginatedThumbnails);

		var _this = _possibleConstructorReturn(this, (PaginatedThumbnails.__proto__ || Object.getPrototypeOf(PaginatedThumbnails)).call(this, props));

		_this.state = {
			hasCustomPage: false
		};

		_this.gotoPrev = _this.gotoPrev.bind(_this);
		_this.gotoNext = _this.gotoNext.bind(_this);
		return _this;
	}

	_createClass(PaginatedThumbnails, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// Component should be controlled, flush state when currentImage changes
			if (nextProps.currentImage !== this.props.currentImage) {
				this.setState({
					hasCustomPage: false
				});
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'getFirst',
		value: function getFirst() {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    offset = _props.offset;

			if (this.state.hasCustomPage) {
				return this.clampFirst(this.state.first);
			}
			return this.clampFirst(currentImage - offset);
		}
	}, {
		key: 'setFirst',
		value: function setFirst(event, newFirst) {
			var first = this.state.first;


			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			if (first === newFirst) return;

			this.setState({
				hasCustomPage: true,
				first: newFirst
			});
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			this.setFirst(event, this.getFirst() - this.props.offset);
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			this.setFirst(event, this.getFirst() + this.props.offset);
		}
	}, {
		key: 'clampFirst',
		value: function clampFirst(value) {
			var _props2 = this.props,
			    images = _props2.images,
			    offset = _props2.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side

			if (value < 0) {
				return 0;
			} else if (value + totalCount > images.length) {
				// Too far
				return images.length - totalCount;
			} else {
				return value;
			}
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.getFirst() <= 0) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'left',
				size: 'small',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				style: arrowStyles,
				title: 'Previous (Left arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			var _props3 = this.props,
			    offset = _props3.offset,
			    images = _props3.images;

			var totalCount = 2 * offset + 1;
			if (this.getFirst() + totalCount >= images.length) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'right',
				size: 'small',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				style: arrowStyles,
				title: 'Next (Right arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    offset = _props4.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side
			var thumbnails = [];
			var baseOffset = 0;
			if (images.length <= totalCount) {
				thumbnails = images;
			} else {
				// Try to center current image in list
				baseOffset = this.getFirst();
				thumbnails = images.slice(baseOffset, baseOffset + totalCount);
			}

			return _react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.paginatedThumbnails) },
				this.renderArrowPrev(),
				thumbnails.map(function (img, idx) {
					return _react2.default.createElement(_Thumbnail2.default, _extends({ key: baseOffset + idx
					}, img, {
						index: baseOffset + idx,
						onClick: onClickThumbnail,
						active: baseOffset + idx === currentImage }));
				}),
				this.renderArrowNext()
			);
		}
	}]);

	return PaginatedThumbnails;
}(_react.Component);

exports.default = PaginatedThumbnails;


PaginatedThumbnails.propTypes = {
	currentImage: _propTypes2.default.number,
	images: _propTypes2.default.array,
	offset: _propTypes2.default.number,
	onClickThumbnail: _propTypes2.default.func.isRequired
};

/***/ }),

/***/ "./node_modules/react-images/lib/components/PassContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-images/lib/components/PassContext.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
	_inherits(PassContext, _Component);

	function PassContext() {
		_classCallCheck(this, PassContext);

		return _possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
	}

	_createClass(PassContext, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react.Children.only(this.props.children);
		}
	}]);

	return PassContext;
}(_react.Component);

PassContext.propTypes = {
	context: _propTypes2.default.object.isRequired
};
PassContext.childContextTypes = {
	theme: _propTypes2.default.object
};

exports.default = PassContext;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Portal.js":
/*!************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Portal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _PassContext = __webpack_require__(/*! ./PassContext */ "./node_modules/react-images/lib/components/PassContext.js");

var _PassContext2 = _interopRequireDefault(_PassContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

		_this.portalElement = null;
		return _this;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// Animate fade on mount/unmount
			var duration = 200;
			var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ' + duration + 'ms; }\n\t\t';

			(0, _reactDom.render)(_react2.default.createElement(
				_PassContext2.default,
				{ context: this.context },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'style',
						null,
						styles
					),
					_react2.default.createElement(
						_reactTransitionGroup.TransitionGroup,
						this.props,
						_react2.default.createElement(
							_reactTransitionGroup.CSSTransition,
							{ timeout: { enter: duration, exit: duration }, classNames: 'fade' },
							this.props.children
						)
					)
				)
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			(0, _reactDom.unmountComponentAtNode)(this.portalElement);
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Portal;
}(_react.Component);

exports.default = Portal;


Portal.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/react-images/lib/components/Spinner.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Spinner.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(props) {
	var classes = _noImportant.StyleSheet.create(styles(props));

	return _react2.default.createElement(
		'div',
		{ className: (0, _noImportant.css)(classes.spinner) },
		_react2.default.createElement('div', { className: (0, _noImportant.css)(classes.ripple) })
	);
};

Spinner.propTypes = {
	color: _propTypes2.default.string,
	size: _propTypes2.default.number
};

var rippleKeyframes = {
	'0%': {
		top: '50%',
		left: '50%',
		width: 0,
		height: 0,
		opacity: 1
	},
	'100%': {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		opacity: 0
	}
};

var styles = function styles(_ref) {
	var color = _ref.color,
	    size = _ref.size;
	return {
		spinner: {
			display: 'inline-block',
			position: 'relative',
			width: size,
			height: size
		},
		ripple: {
			position: 'absolute',
			border: '4px solid ' + color,
			opacity: 1,
			borderRadius: '50%',
			animationName: rippleKeyframes,
			animationDuration: '1s',
			animationTimingFunction: 'cubic-bezier(0, 0.2, 0.8, 1)',
			animationIterationCount: 'infinite'
		}
	};
};

exports.default = Spinner;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Thumbnail.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Thumbnail.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thumbnail(_ref, _ref2) {
	var index = _ref.index,
	    src = _ref.src,
	    thumbnail = _ref.thumbnail,
	    active = _ref.active,
	    _onClick = _ref.onClick;
	var theme = _ref2.theme;

	var url = thumbnail ? thumbnail : src;
	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement('div', {
		className: (0, _noImportant.css)(classes.thumbnail, active && classes.thumbnail__active),
		onClick: function onClick(e) {
			e.preventDefault();
			e.stopPropagation();
			_onClick(index);
		},
		style: { backgroundImage: 'url("' + url + '")' }
	});
}

Thumbnail.propTypes = {
	active: _propTypes2.default.bool,
	index: _propTypes2.default.number,
	onClick: _propTypes2.default.func.isRequired,
	src: _propTypes2.default.string,
	thumbnail: _propTypes2.default.string
};

Thumbnail.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	thumbnail: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
		cursor: 'pointer',
		display: 'inline-block',
		height: _theme2.default.thumbnail.size,
		margin: _theme2.default.thumbnail.gutter,
		overflow: 'hidden',
		width: _theme2.default.thumbnail.size
	},
	thumbnail__active: {
		boxShadow: 'inset 0 0 0 2px ' + _theme2.default.thumbnail.activeBorderColor
	}
};

exports.default = Thumbnail;

/***/ }),

/***/ "./node_modules/react-images/lib/icons/arrowLeft.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/icons/arrowLeft.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z\"/>\n\t</svg>";
};

/***/ }),

/***/ "./node_modules/react-images/lib/icons/arrowRight.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-images/lib/icons/arrowRight.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z\"/>\n\t</svg>";
};

/***/ }),

/***/ "./node_modules/react-images/lib/icons/close.js":
/*!******************************************************!*\
  !*** ./node_modules/react-images/lib/icons/close.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n\t\t<path d=\"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z\"/>\n\t</svg>";
};

/***/ }),

/***/ "./node_modules/react-images/lib/theme.js":
/*!************************************************!*\
  !*** ./node_modules/react-images/lib/theme.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// ==============================
// THEME
// ==============================

var theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10
	},
	zIndex: 2001
};

// header
theme.header = {
	height: 40
};
theme.close = {
	fill: 'white'
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em'
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5
	}
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2
};

// arrow
theme.arrow = {
	background: 'none',
	fill: 'white',
	height: 120
};

exports.default = theme;

/***/ }),

/***/ "./node_modules/react-images/lib/utils/bindFunctions.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-images/lib/utils/bindFunctions.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = bindFunctions;
/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
};

/***/ }),

/***/ "./node_modules/react-images/lib/utils/canUseDom.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/utils/canUseDom.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Return true if window + document

exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ "./node_modules/react-images/lib/utils/deepMerge.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/utils/deepMerge.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function deepMerge(target) {
	var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var extended = _extends({}, target);

	Object.keys(source).forEach(function (key) {
		if (_typeof(source[key]) !== 'object' || !source[key]) {
			extended[key] = source[key];
		} else {
			if (!target[key]) {
				extended[key] = source[key];
			} else {
				extended[key] = deepMerge(target[key], source[key]);
			}
		}
	});

	return extended;
}

exports.default = deepMerge;

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-prop-toggle/dist/LifeCycleProvider.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-prop-toggle/dist/LifeCycleProvider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _PropToggle = __webpack_require__(/*! ./PropToggle */ "./node_modules/react-prop-toggle/dist/PropToggle.js");

var _PropToggle2 = _interopRequireDefault(_PropToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LifeCycleProvider = function LifeCycleProvider(_ref) {
  var isActive = _ref.isActive,
      props = _objectWithoutProperties(_ref, ['isActive']);

  return isActive ? _react2.default.createElement(_PropToggle2.default, props) : null;
};

LifeCycleProvider.defaultProps = _PropToggle.defaultProps;

exports.default = LifeCycleProvider;

/***/ }),

/***/ "./node_modules/react-prop-toggle/dist/PropToggle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-prop-toggle/dist/PropToggle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// create defaults
var defaultProps = exports.defaultProps = {
  attributes: {},
  styles: {}
};

var PropToggle = function (_PureComponent) {
  _inherits(PropToggle, _PureComponent);

  function PropToggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PropToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PropToggle.__proto__ || Object.getPrototypeOf(PropToggle)).call.apply(_ref, [this].concat(args))), _this), _this.originalAttributes = {}, _this.originalStyles = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PropToggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          attributes = _props.attributes,
          styles = _props.styles,
          _props$target = _props.target,
          target = _props$target === undefined ? document.body : _props$target;

      if (!target) return;

      this.attributeKeys = Object.keys(attributes);
      this.styleKeys = Object.keys(styles);

      // styles
      if (this.styleKeys.length) {
        this.styleKeys.forEach(function (k) {
          _this2.originalStyles[k] = target.style.getPropertyValue(k);
          target.style.setProperty(k, styles[k]);
        });
      }

      // attributes
      if (this.attributeKeys.length) {
        this.attributeKeys.forEach(function (k) {
          _this2.originalAttributes[k] = target.getAttribute(k) || '';
          target.setAttribute(k, attributes[k]);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      var _props$target2 = this.props.target,
          target = _props$target2 === undefined ? document.body : _props$target2;

      if (!target) return;

      // styles
      if (this.styleKeys.length) {
        this.styleKeys.forEach(function (k) {
          target.style.setProperty(k, _this3.originalStyles[k]);
        });
      }

      // attributes
      if (this.attributeKeys.length) {
        this.attributeKeys.forEach(function (k) {
          if (_this3.originalAttributes[k]) {
            target.setAttribute(k, _this3.originalAttributes[k]);
          } else {
            target.removeAttribute(k);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return PropToggle;
}(_react.PureComponent);

PropToggle.defaultProps = defaultProps;
exports.default = PropToggle;

/***/ }),

/***/ "./node_modules/react-prop-toggle/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-prop-toggle/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LifeCycleProvider = __webpack_require__(/*! ./LifeCycleProvider */ "./node_modules/react-prop-toggle/dist/LifeCycleProvider.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LifeCycleProvider).default;
  }
});

var _PropToggle = __webpack_require__(/*! ./PropToggle */ "./node_modules/react-prop-toggle/dist/PropToggle.js");

Object.defineProperty(exports, 'SimpleToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PropToggle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/ScrollLock.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/ScrollLock.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _reactPropToggle = __webpack_require__(/*! react-prop-toggle */ "./node_modules/react-prop-toggle/dist/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scrolllock/dist/utils.js");

var _withTouchListeners = __webpack_require__(/*! ./withTouchListeners */ "./node_modules/react-scrolllock/dist/withTouchListeners.js");

var _withTouchListeners2 = _interopRequireDefault(_withTouchListeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOCK_COUNT = 0;

var ScrollLock = function (_PureComponent) {
  _inherits(ScrollLock, _PureComponent);

  function ScrollLock() {
    _classCallCheck(this, ScrollLock);

    return _possibleConstructorReturn(this, (ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).apply(this, arguments));
  }

  _createClass(ScrollLock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      LOCK_COUNT++;
      if (_exenv.canUseDOM) {
        this.initialHeight = window.innerHeight;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      LOCK_COUNT = Math.max(LOCK_COUNT - 1, 0);

      if (_exenv.canUseDOM) {
        var offset = window.innerHeight - this.initialHeight;

        // adjust scroll if the window has been resized since the lock was engaged
        if (offset) {
          window.scrollTo(0, window.pageYOffset + offset);
        }
      }

      // reset the initial height in case this scroll lock is used again
      this.initialHeight = window.innerHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      var accountForScrollbars = this.props.accountForScrollbars;

      // avoid overly incrementing padding

      var scrollbarSpacer = accountForScrollbars && LOCK_COUNT < 1 ? { 'padding-right': (0, _utils.getPadding)() + 'px' } : {};

      var height = (0, _utils.getDocumentHeight)() + 'px';

      return _react2.default.createElement(_reactPropToggle.SimpleToggle, {
        styles: _extends({
          'box-sizing': 'border-box', // account for possible declaration `width: 100%;` on body
          overflow: 'hidden',
          position: 'relative',
          height: height
        }, scrollbarSpacer)
      });
    }
  }]);

  return ScrollLock;
}(_react.PureComponent);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};
exports.default = (0, _withTouchListeners2.default)(ScrollLock);

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollLock = __webpack_require__(/*! ./ScrollLock */ "./node_modules/react-scrolllock/dist/ScrollLock.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollLock).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventTouchMove = preventTouchMove;
exports.allowTouchMove = allowTouchMove;
exports.preventInertiaScroll = preventInertiaScroll;
exports.isTouchDevice = isTouchDevice;
exports.getPadding = getPadding;
exports.camelToKebab = camelToKebab;
exports.getWindowHeight = getWindowHeight;
exports.getDocumentHeight = getDocumentHeight;
exports.parse = parse;
function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  if (!window) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function getPadding() {
  if (!document || !window) return 0;

  var currentPadding = parseInt(document.body.paddingRight, 10) || 0;
  var clientWidth = document.body ? document.body.clientWidth : 0;
  var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

  return adjustedPadding;
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getWindowHeight() {
  var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (window && window.innerHeight) {
    return window.innerHeight * multiplier;
  }
}

function getDocumentHeight() {
  if (document && document.body) {
    return document.body.clientHeight;
  }
}

function parse(val) {
  return isNaN(val) ? val : val + 'px';
}

/***/ }),

/***/ "./node_modules/react-scrolllock/dist/withTouchListeners.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-scrolllock/dist/withTouchListeners.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withTouchListeners;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scrolllock/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withTouchListeners(WrappedComponent) {
  return function (_PureComponent) {
    _inherits(TouchProvider, _PureComponent);

    function TouchProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TouchProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchProvider.__proto__ || Object.getPrototypeOf(TouchProvider)).call.apply(_ref, [this].concat(args))), _this), _this.listenerOptions = {
        capture: false,
        passive: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TouchProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!_exenv.canUseDOM) return;

        var touchScrollTarget = this.props.touchScrollTarget;

        var target = document.body;

        // account for touch devices
        if (target && (0, _utils.isTouchDevice)()) {
          // Mobile Safari ignores { overflow: hidden } declaration on the body.
          target.addEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

          // Allow scroll on provided target
          if (touchScrollTarget) {
            touchScrollTarget.addEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
            touchScrollTarget.addEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (!_exenv.canUseDOM) return;

        var touchScrollTarget = this.props.touchScrollTarget;

        var target = document.body;

        // remove touch listeners
        if (target && (0, _utils.isTouchDevice)()) {
          target.removeEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

          if (touchScrollTarget) {
            touchScrollTarget.removeEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
            touchScrollTarget.removeEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return TouchProvider;
  }(_react.PureComponent);
}

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};

var propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply spread
   * them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;;
/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */

var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes =  true ? propTypes : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;;
/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? propTypes : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt =  true ? _PropTypes.timeoutsShape : undefined;;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;;
var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    this.setState(function (state) {
      var children = _extends({}, state.children);

      delete children[child.key];
      return {
        children: children
      };
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? propTypes : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.transitionTimeout = transitionTimeout;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]);

exports.timeoutsShape = timeoutsShape;

var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]);

exports.classNamesShape = classNamesShape;

/***/ })

})
//# sourceMappingURL=listing.js.b5de65f71d2e61a9d55c.hot-update.js.map