webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WordSwitcher.tsx":
/*!*************************************!*\
  !*** ./components/WordSwitcher.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/luciaokeh/Documents/Github Repos/lazybuggy.github.io/components/WordSwitcher.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // type Props = {\n//     data: WordSwitcherType\n// }\n// const upArrowClick = () => {\n//   console.log(\"up clicked\");\n// };\n// const downArrowClick = () => {\n//   console.log(\"down clicked\");\n// };\n\nvar WordSwitcher = function WordSwitcher(_ref) {\n  _s();\n\n  var words = _ref.words,\n      colour = _ref.colour;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(words.length),\n      optionCount = _useState2[0],\n      setOptionCount = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(words[0]),\n      word = _useState3[0],\n      setWord = _useState3[1]; //   console.log(\"workingn \", words, colour);\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (index >= 0 && index < optionCount) {\n      setWord(words[index]);\n    } else if (index === optionCount) {\n      setWord(words[0]);\n      setIndex(0);\n    } else if (index < 0) {\n      setWord(words[optionCount - 1]);\n      setIndex(optionCount - 1);\n    }\n  }, [index, optionCount]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"uparrow\",\n      onClick: function onClick() {\n        return setIndex(function (index) {\n          return index - 1;\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), word, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"darrow\",\n      onClick: function onClick() {\n        return setIndex(function (index) {\n          return index + 1;\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WordSwitcher, \"xx0b4huC5dBI3F3TeWulr85+7fo=\");\n\n_c = WordSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordSwitcher);\n\nvar _c;\n\n$RefreshReg$(_c, \"WordSwitcher\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3JkU3dpdGNoZXIudHN4P2IzOWMiXSwibmFtZXMiOlsiV29yZFN3aXRjaGVyIiwid29yZHMiLCJjb2xvdXIiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJsZW5ndGgiLCJvcHRpb25Db3VudCIsInNldE9wdGlvbkNvdW50Iiwid29yZCIsInNldFdvcmQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQWlELEdBQUcsU0FBcERBLFlBQW9ELE9BR3BEO0FBQUE7O0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJOztBQUFBLGtCQUNzQkMsc0RBQVEsQ0FBQyxDQUFELENBRDlCO0FBQUEsTUFDR0MsS0FESDtBQUFBLE1BQ1VDLFFBRFY7O0FBQUEsbUJBRWtDRixzREFBUSxDQUFDRixLQUFLLENBQUNLLE1BQVAsQ0FGMUM7QUFBQSxNQUVHQyxXQUZIO0FBQUEsTUFFZ0JDLGNBRmhCOztBQUFBLG1CQUdvQkwsc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUg1QjtBQUFBLE1BR0dRLElBSEg7QUFBQSxNQUdTQyxPQUhULGtCQUtKOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVAsS0FBSyxJQUFJLENBQVQsSUFBY0EsS0FBSyxHQUFHRyxXQUExQixFQUF1QztBQUNyQ0csYUFBTyxDQUFDVCxLQUFLLENBQUNHLEtBQUQsQ0FBTixDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUlBLEtBQUssS0FBS0csV0FBZCxFQUEyQjtBQUNoQ0csYUFBTyxDQUFDVCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQVA7QUFDQUksY0FBUSxDQUFDLENBQUQsQ0FBUjtBQUNELEtBSE0sTUFHQSxJQUFJRCxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ3BCTSxhQUFPLENBQUNULEtBQUssQ0FBQ00sV0FBVyxHQUFHLENBQWYsQ0FBTixDQUFQO0FBQ0FGLGNBQVEsQ0FBQ0UsV0FBVyxHQUFHLENBQWYsQ0FBUjtBQUNEO0FBQ0YsR0FWUSxFQVVOLENBQUNILEtBQUQsRUFBUUcsV0FBUixDQVZNLENBQVQ7QUFZQSxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFLFNBRGI7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNRixRQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLGlCQUFXQSxLQUFLLEdBQUcsQ0FBbkI7QUFBQSxTQUFELENBQWQ7QUFBQTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUtHSyxJQUxILGVBTUU7QUFDRSxlQUFTLEVBQUUsUUFEYjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1KLFFBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsaUJBQVdBLEtBQUssR0FBRyxDQUFuQjtBQUFBLFNBQUQsQ0FBZDtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FuQ0Q7O0dBQU1KLFk7O0tBQUFBLFk7QUFxQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Xb3JkU3dpdGNoZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29yZFN3aXRjaGVyVHlwZSB9IGZyb20gXCIuLi90eXBlcy9pbmRleFwiO1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIHR5cGUgUHJvcHMgPSB7XG4vLyAgICAgZGF0YTogV29yZFN3aXRjaGVyVHlwZVxuLy8gfVxuXG4vLyBjb25zdCB1cEFycm93Q2xpY2sgPSAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwidXAgY2xpY2tlZFwiKTtcbi8vIH07XG5cbi8vIGNvbnN0IGRvd25BcnJvd0NsaWNrID0gKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImRvd24gY2xpY2tlZFwiKTtcbi8vIH07XG5cbmNvbnN0IFdvcmRTd2l0Y2hlcjogRnVuY3Rpb25Db21wb25lbnQ8V29yZFN3aXRjaGVyVHlwZT4gPSAoe1xuICB3b3JkcyxcbiAgY29sb3VyLFxufSkgPT4ge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb3B0aW9uQ291bnQsIHNldE9wdGlvbkNvdW50XSA9IHVzZVN0YXRlKHdvcmRzLmxlbmd0aCk7XG4gIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKHdvcmRzWzBdKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKFwid29ya2luZ24gXCIsIHdvcmRzLCBjb2xvdXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBvcHRpb25Db3VudCkge1xuICAgICAgc2V0V29yZCh3b3Jkc1tpbmRleF0pO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IG9wdGlvbkNvdW50KSB7XG4gICAgICBzZXRXb3JkKHdvcmRzWzBdKTtcbiAgICAgIHNldEluZGV4KDApO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBzZXRXb3JkKHdvcmRzW29wdGlvbkNvdW50IC0gMV0pO1xuICAgICAgc2V0SW5kZXgob3B0aW9uQ291bnQgLSAxKTtcbiAgICB9XG4gIH0sIFtpbmRleCwgb3B0aW9uQ291bnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17XCJ1cGFycm93XCJ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KChpbmRleCkgPT4gaW5kZXggLSAxKX1cbiAgICAgIC8+XG4gICAgICB7d29yZH1cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtcImRhcnJvd1wifVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbmRleCgoaW5kZXgpID0+IGluZGV4ICsgMSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZFN3aXRjaGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WordSwitcher.tsx\n");

/***/ })

})