webpackHotUpdate("static/development/pages/listing.js",{

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











var SingleListingStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SingleListing__SingleListingStyles",
  componentId: "sc-4stxqh-0"
})(["max-width:1200px;min-width:300px;margin:2rem auto;box-shadow:", ";display:grid;font-family:Arial;grid-auto-columns:1fr;grid-auto-flow:column;img{width:100%;height:100%;margin-bottom:20px;object-fit:contain;}.button-container{float:right;}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;margin:0 10px;border:1px solid transparent;padding:.125rem .5rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}.btn-edit{background-color:#ffc107;border-color:#ffc107;}.btn-delete{background-color:#dc3545;border-color:#dc3545;}.details{margin:3rem;font-size:14px;}.section{margin-bottom:20px;}.contact-card{display:flex;flex-direction:row;justify-content:center;margin:100px 0;}.agent-picture img{height:175px;width:175px;object-fit:cover;}.agent-details{font-family:\"Bebas Neue\",\"Arial Black\",\"Arial Bold\",Gadget,sans-serif !important;}.agent-title{font-size:20pt;}.section h3{width:100%;text-align:left;text-indent:40px;border-bottom:1.5px solid #000;line-height:0.1em;margin:10px 0 20px;}.section h3 span{background:#fff;padding:0 10px;}"], function (props) {
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
          lineNumber: 131
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
            lineNumber: 138
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "Loading...");
        if (!data.listing) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, "No listing Found for ", _this.props.id);
        var listing = data.listing;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleListingStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, "Sick Fits | ", listing.address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, listing.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: listing.mainImage,
          alt: listing.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, "DESCRIPTION")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, listing.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, "SPECIFICATIONS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, "PRICE: ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__["default"])(listing.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, listing.rooms, " BED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, listing.bath, " BATH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, "HOUSE SIZE: ", listing.houseSize, " SQ FT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, "LOT SIZE: ", listing.lotSize, " SQFT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, "GALLERY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageGallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
          images: listing.images,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: CURRENT_USER_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
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
              lineNumber: 173
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, "PRESENTED BY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "contact-card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-picture",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: me.profilePicture,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-details",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }, me.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-company",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          }, me.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-contact",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }, me.contactEmail), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-phone",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }, me.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "agent-website",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: me.website,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, "website")))));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
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
            lineNumber: 192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-edit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, "EDIT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-delete",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: listing.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "DELETE")))));
      });
    }
  }]);

  return SingleListing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleListing);

/***/ })

})
//# sourceMappingURL=listing.js.4f1659047429e3d159b0.hot-update.js.map