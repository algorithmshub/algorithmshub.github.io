webpackHotUpdate_N_E("pages/maths/aliquotsum",{

/***/ "./pages/maths/aliquotsum.mdx":
/*!************************************!*\
  !*** ./pages/maths/aliquotsum.mdx ***!
  \************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _home_bunlong_workspace_os_algorithmshub_site_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _home_bunlong_workspace_os_algorithmshub_site_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n\n\nvar _jsxFileName = \"/home/bunlong/workspace/os/algorithmshub-site/pages/maths/aliquotsum.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\nvar meta = {\n  name: 'AliquotSum',\n  tableOfContents: {\n    depth: 0,\n    children: [{\n      depth: 1,\n      slug: '#aliquotsum',\n      title: 'AliquotSum',\n      children: [{\n        depth: 2,\n        slug: '#java',\n        title: 'Java'\n      }]\n    }]\n  }\n};\nvar layoutProps = {\n  meta: meta\n};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n      props = Object(_home_bunlong_workspace_os_algorithmshub_site_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, Object(_home_bunlong_workspace_os_algorithmshub_site_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", Object(_home_bunlong_workspace_os_algorithmshub_site_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    \"id\": \"aliquotsum\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }), \"AliquotSum\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 8\n    }\n  }, \"What is Aliquot sum?\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, \"In number theory, the aliquot sum s(n) of a positive integer n is the sum of all proper divisors of n, that is, all divisors of n other than n itself.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h2\", Object(_home_bunlong_workspace_os_algorithmshub_site_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    \"id\": \"java\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }), \"Java\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_home_bunlong_workspace_os_algorithmshub_site_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"pre\"\n  }, {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  }), \"/**\\n * Input : 12\\n * Output : 16\\n * Explanation :\\n *  Proper divisors of 12 is 1, 2, 3, 4, 6 \\n *  and sum is 1 + 2 + 3 + 4 + 6 = 16\\n */\\npublic class AliquotSum {\\n\\n  /** Driver Code */\\n  public static void main(String[] args) {\\n    System.out.println(aliquotSum1(12) == 16);\\n    System.out.println(aliquotSum1(15) == 9);\\n\\n    System.out.println(aliquotSum2(12) == 16);\\n    System.out.println(aliquotSum2(15) == 9);\\n  }\\n\\n  /**\\n   * find the aliquot sum of an integer number\\n   *\\n   * @param n a positive integer\\n   * @return aliquot sum of given {@code n}\\n   */\\n  public static int aliquotSum1(int n) {\\n    int sum = 0; \\n\\n    for (int i = 1; i < n; i++) {\\n      if (n % i == 0) {\\n        sum += i;\\n      }\\n    }\\n\\n    return sum;\\n  }\\n\\n  /**\\n   * find the aliquot sum of an integer number\\n   *\\n   * @param n a positive integer\\n   * @return aliquot sum of given {@code n}\\n   */\\n  public static int aliquotSum2(int n) {\\n    int sum = 0;\\n\\n    for (int i = 1, limit = n / 2; i <= limit; ++i) {\\n      if (n % i == 0) {\\n        sum += i;\\n      }\\n    }\\n\\n    return sum;\\n  }\\n}\\n\")));\n}\n_c = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nif (true) {\n  var toInject = {\n    \"editThisPagePath\": \"pages/maths/aliquotsum.mdx\"\n  };\n\n  for (var k in toInject) {\n    window[k] = toInject[k];\n  }\n}\n\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWF0aHMvYWxpcXVvdHN1bS5tZHg/NjJiOCJdLCJuYW1lcyI6WyJtZXRhIiwibmFtZSIsInRhYmxlT2ZDb250ZW50cyIsImRlcHRoIiwiY2hpbGRyZW4iLCJzbHVnIiwidGl0bGUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCIsInRvSW5qZWN0IiwiayIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBOztBQUVPLElBQU1BLElBQUksR0FBRztBQUNsQkMsTUFBSSxFQUFFLFlBRFk7QUFFbEJDLGlCQUFlLEVBQUU7QUFDZkMsU0FBSyxFQUFFLENBRFE7QUFFZkMsWUFBUSxFQUFFLENBQUM7QUFDVEQsV0FBSyxFQUFFLENBREU7QUFFVEUsVUFBSSxFQUFFLGFBRkc7QUFHVEMsV0FBSyxFQUFFLFlBSEU7QUFJVEYsY0FBUSxFQUFFLENBQUM7QUFDVEQsYUFBSyxFQUFFLENBREU7QUFFVEUsWUFBSSxFQUFFLE9BRkc7QUFHVEMsYUFBSyxFQUFFO0FBSEUsT0FBRDtBQUpELEtBQUQ7QUFGSztBQUZDLENBQWI7QUFpQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCUCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTVEsU0FBUyxHQUFHLFNBQWxCO0FBQ2UsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQscUtBQWVKLFdBQWYsRUFBZ0NJLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFTCwrTkFBUTtBQUNOLFVBQU07QUFEQSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBSCxDQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4SkFOSyxFQU9MLCtOQUFRO0FBQ04sVUFBTTtBQURBLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBLLEVBVUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd21DQUFMLENBVkssQ0FBUDtBQWtFRDtLQXRFdUJELFU7QUF3RXhCO0FBQ0FBLFVBQVUsQ0FBQ0csY0FBWCxHQUE0QixJQUE1Qjs7QUFHSSxVQUFtQztBQUMvQixNQUFNQyxRQUFRLEdBQUc7QUFBQyx3QkFBbUI7QUFBcEIsR0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNELFFBQWQsRUFBd0I7QUFDcEJFLFVBQU0sQ0FBQ0QsQ0FBRCxDQUFOLEdBQVlELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFwQjtBQUNIO0FBQ0o7O0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9tYXRocy9hbGlxdW90c3VtLm1keC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cblxuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIG5hbWU6ICdBbGlxdW90U3VtJyxcbiAgdGFibGVPZkNvbnRlbnRzOiB7XG4gICAgZGVwdGg6IDAsXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICBkZXB0aDogMSxcbiAgICAgIHNsdWc6ICcjYWxpcXVvdHN1bScsXG4gICAgICB0aXRsZTogJ0FsaXF1b3RTdW0nLFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIGRlcHRoOiAyLFxuICAgICAgICBzbHVnOiAnI2phdmEnLFxuICAgICAgICB0aXRsZTogJ0phdmEnXG4gICAgICB9XVxuICAgIH1dXG4gIH1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwiYWxpcXVvdHN1bVwiXG4gICAgfX0+e2BBbGlxdW90U3VtYH08L2gxPlxuICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFdoYXQgaXMgQWxpcXVvdCBzdW0/YH08L3N0cm9uZz48L3A+XG4gICAgPHA+e2BJbiBudW1iZXIgdGhlb3J5LCB0aGUgYWxpcXVvdCBzdW0gcyhuKSBvZiBhIHBvc2l0aXZlIGludGVnZXIgbiBpcyB0aGUgc3VtIG9mIGFsbCBwcm9wZXIgZGl2aXNvcnMgb2YgbiwgdGhhdCBpcywgYWxsIGRpdmlzb3JzIG9mIG4gb3RoZXIgdGhhbiBuIGl0c2VsZi5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJqYXZhXCJcbiAgICB9fT57YEphdmFgfTwvaDI+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YC8qKlxuICogSW5wdXQgOiAxMlxuICogT3V0cHV0IDogMTZcbiAqIEV4cGxhbmF0aW9uIDpcbiAqICBQcm9wZXIgZGl2aXNvcnMgb2YgMTIgaXMgMSwgMiwgMywgNCwgNiBcbiAqICBhbmQgc3VtIGlzIDEgKyAyICsgMyArIDQgKyA2ID0gMTZcbiAqL1xucHVibGljIGNsYXNzIEFsaXF1b3RTdW0ge1xuXG4gIC8qKiBEcml2ZXIgQ29kZSAqL1xuICBwdWJsaWMgc3RhdGljIHZvaWQgbWFpbihTdHJpbmdbXSBhcmdzKSB7XG4gICAgU3lzdGVtLm91dC5wcmludGxuKGFsaXF1b3RTdW0xKDEyKSA9PSAxNik7XG4gICAgU3lzdGVtLm91dC5wcmludGxuKGFsaXF1b3RTdW0xKDE1KSA9PSA5KTtcblxuICAgIFN5c3RlbS5vdXQucHJpbnRsbihhbGlxdW90U3VtMigxMikgPT0gMTYpO1xuICAgIFN5c3RlbS5vdXQucHJpbnRsbihhbGlxdW90U3VtMigxNSkgPT0gOSk7XG4gIH1cblxuICAvKipcbiAgICogZmluZCB0aGUgYWxpcXVvdCBzdW0gb2YgYW4gaW50ZWdlciBudW1iZXJcbiAgICpcbiAgICogQHBhcmFtIG4gYSBwb3NpdGl2ZSBpbnRlZ2VyXG4gICAqIEByZXR1cm4gYWxpcXVvdCBzdW0gb2YgZ2l2ZW4ge0Bjb2RlIG59XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGludCBhbGlxdW90U3VtMShpbnQgbikge1xuICAgIGludCBzdW0gPSAwOyBcblxuICAgIGZvciAoaW50IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAobiAlIGkgPT0gMCkge1xuICAgICAgICBzdW0gKz0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VtO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpbmQgdGhlIGFsaXF1b3Qgc3VtIG9mIGFuIGludGVnZXIgbnVtYmVyXG4gICAqXG4gICAqIEBwYXJhbSBuIGEgcG9zaXRpdmUgaW50ZWdlclxuICAgKiBAcmV0dXJuIGFsaXF1b3Qgc3VtIG9mIGdpdmVuIHtAY29kZSBufVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbnQgYWxpcXVvdFN1bTIoaW50IG4pIHtcbiAgICBpbnQgc3VtID0gMDtcblxuICAgIGZvciAoaW50IGkgPSAxLCBsaW1pdCA9IG4gLyAyOyBpIDw9IGxpbWl0OyArK2kpIHtcbiAgICAgIGlmIChuICUgaSA9PSAwKSB7XG4gICAgICAgIHN1bSArPSBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdW07XG4gIH1cbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7XG4gICAgXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgdG9JbmplY3QgPSB7XCJlZGl0VGhpc1BhZ2VQYXRoXCI6XCJwYWdlcy9tYXRocy9hbGlxdW90c3VtLm1keFwifTtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0b0luamVjdCkge1xuICAgICAgICAgICAgd2luZG93W2tdID0gdG9JbmplY3Rba107XG4gICAgICAgIH1cbiAgICB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/maths/aliquotsum.mdx\n");

/***/ })

})