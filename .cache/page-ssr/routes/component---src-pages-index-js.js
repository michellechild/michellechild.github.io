exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Layout({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "content"
  }, children));
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout.js */ "./src/components/layout.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_m_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/m_logo.svg */ "./src/images/m_logo.svg");



 // styles
// markup

const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _images_m_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "M",
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "title is-1 has-text-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "name-style px-2 has-background-primary-light"
  }, "Hi! I\u2019m Michelle.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "is-size-5 mb-2 is-family-sans-serif has-text-weight-semibold has-text-grey-light"
  }, "product designer | developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "is-size-3"
  }, "I aim to design tools that make your work a more joyful experience. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "is-size-6 px-1 has-text-weight-semibold has-text-info"
  }, "(like writing with your favorite pen)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "is-size-3"
  }, "I'm currently the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "has-text-weight-bold"
  }, "Director of Design"), " at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "is-link",
    href: "https://www.crew2030.org",
    rel: "noreferrer",
    target: "_blank"
  }, "Crew2030"), ". My role is to imagine and design intuitive user experiences across the Crew Platform with a clean, reusable code structure."))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/m_logo.svg":
/*!*******************************!*\
  !*** ./src/images/m_logo.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI1NHB4IiB2aWV3Qm94PSIwIDAgOTIgNTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwQkFFRiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDdDODdBIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OS4wMDAwMDAsIC01NC4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY5LjAwMDAwMCwgNTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTAuNjI1NzY5LDUzLjkzMzk5NjMgTDkwLjYyNTc2OSw1My45MzM5OTYzIEM4OS42NDk1OTEyLDU0LjIwOTM2MjYgODguODQxNzUxLDUzLjU5NDU5NjcgODguNTY3ODA3NCw1Mi42MjA1MTk3IEM4OC40NTgxMzk3LDUyLjIzMjAyMDIgODIuODQ0MzI3MywxOS43NDE5Njk0IDYxLjgxOTcyMiwxMS43ODE2ODk4IEM1Ny4xNDE0Njk4LDEwLjE1NDM4MTUgNTIuOTI4OTY2OCwxMC45MTkzODg0IDQ5LjM4NDM5ODcsMTIuNTQ4NzMzIEM0OS44NTEyNzYxLDE0Ljk0MTA0ODEgNDkuOTgxMDI3LDE3LjYzOTcyNzkgNDkuOTcyOTAzNSwyMC41ODU3MTcgQzQ5LjM0OTg3MzcsMzIuNTM4OTIwNSA0Mi42MTY1OTMzLDQ2LjAwMDE4OTkgMzQuMDU2NjQ2Myw0Ni4zMDc2ODYgQzMxLjU0ODA1NDMsNDYuMzgyNTgwMSAyOS43Mzk2NjU3LDQ1LjIxMDc0NjMgMjguNzQxMTQ4MSw0My4xNzY2MTA5IEMyNi4zMDU2Njc5LDM3LjU1NDExNjIgMzEuMDAwMTY3MiwyNS4wODQ3OTg5IDM5LjExMjQxNzIsMTYuNDkzMjM1OSBDNDEuMjEwOTk2NSwxNC4yMjAzODk1IDQzLjQxOTI0MzUsMTIuMzM2MDQyNiA0NS43OTE3NjYzLDExLjAzNjgyMDYgQzQ0LjU0NzUxMTksNy4zOTE2NjgyOSA0MS45Mzc2MDE0LDQuMTMxMTY4ODggMzYuODk0MDE1OCwzLjQ0NzE2NTQzIEMyNy40NDgxNTI1LDIuMTEyMTkzNDMgMTguODI0NTcxMiwxMy4zNzI1NjkxIDEzLjMwMzk1MzcsMjIuOTE3MzkyNyBDNy4wNzkyOTY4LDMzLjcxMzY5NTkgMy4wODcwMzE3OCw0NC45MzE1MzM1IDMuMDg3MDMxNzgsNDQuOTMxNTMzNSBDMi45MTY0Mzc1OSw0NS44MjAwODE4IDEuNzQ1NTIwNjEsNDYuMTQ5OTc4MiAxLjA0OTM3ODk5LDQ1LjkyNTI5NTcgQzAuMzUzMjM3MzY1LDQ1LjcwMDYxMzEgLTAuMTcyNTM1NzI0LDQ0LjU4NzM4MjIgMC4wNTI4OTIzMDg1LDQzLjg5MzE5NjggQzAuNzgzMzMzMjkyLDQyLjAwNTAwMzMgMTYuNTYyODQ0MywtMi44MTY3OTQ3MSAzNy40MzU4MTAzLDAuMTQwMDU1MTMzIEM0Mi45MjU5NjQ1LDAuOTA3MDk4MzY3IDQ2LjgxODcxNjIsNC4yMjg0NjM0NSA0OC42OTgxODU4LDkuMzc3MTU2MzEgQzUzLjU1NDkzMDEsNy4xNjkwMjIxMSA1OC41MTk1MzY5LDYuODIzMDYwNzIgNjMuMjUyODQ4Niw4LjY0NDUwNTU3IEM3Mi43MjA4MjYsMTIuMjg3Mzk1MyA4MC42NjY3NjkyLDIwLjk4NjQzNDggODYuMzY5OTQwNSwzMy42ODI0NzExIEM4OC45MjEyNDA2LDM5LjU4NTIyODEgOTAuODA5NTQ2OCw0NS43NTQzMzEzIDkyLDUyLjA3NTg5NjMgQzkxLjgyNzM3NDksNTIuOTY0NDQ0NiA5MS40MDcyMDc4LDUzLjcxMzM4NjYgOTAuNjI1NzY5LDUzLjkzMzk5NjMgWiBNNDYuNTMyNTg3NCwxNC40MDI1MzQgQzQ0LjY3MDc3NTQsMTUuNjU1Mzg5NSA0Mi45NjI4ODE4LDE3LjEyNDEzMDYgNDEuNDQ0MzIyNCwxOC43NzgzMDA3IEMzNC4wMDM4NDM0LDI2Ljc2Mjc5MDggMzAuMDA5NTQ3NSwzNy45ODEzMDcyIDMxLjc1Mjk0NzksNDEuOTA1NjcyNCBDMzEuOTc0MDg4NSw0Mi42ODQ5MzQgMzIuNTMwMzI0OCw0My4xNTg1MDk2IDM0LjAwNzkwNTIsNDMuMTY0NjE4OCBDMzkuODYzMzkyNyw0Mi45ODg1ODM1IDQ2LjIyNjE0OTcsMzEuOTQ0MDY2IDQ2LjgxODcxNjIsMjAuNjMwMjkxNSBDNDYuNzcwMjAwNywxOC45NjI0ODE1IDQ2LjgwNDUwMDEsMTYuODQ5NjA1NSA0Ni41MzI1ODc0LDE0LjQwMjUzNCBaIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map