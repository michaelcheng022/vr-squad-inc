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

    var images = _this.props.images.map(function (img) {
      var image = {
        src: img,
        thumbnail: img,
        thumbnailWidth: Math.random(0, 1) * 300,
        thumbnailHeight: Math.random(0, 1) * 200
      };
      return image;
    });

    _this.state = {
      images: images
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
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_3___default.a, {
        images: this.state.images,
        onSelectImage: this.onSelectImage,
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
  images: [{
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
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ })

})
//# sourceMappingURL=listing.js.2e157854dd8fe5a30534.hot-update.js.map