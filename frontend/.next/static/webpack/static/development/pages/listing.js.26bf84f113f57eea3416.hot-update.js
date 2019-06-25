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
          minWidth: "250px",
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

/***/ })

})
//# sourceMappingURL=listing.js.26bf84f113f57eea3416.hot-update.js.map