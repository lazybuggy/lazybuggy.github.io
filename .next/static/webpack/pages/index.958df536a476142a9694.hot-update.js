webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WordSwitcher.tsx":
/*!*************************************!*\
  !*** ./components/WordSwitcher.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/luciaokeh/Documents/Github Repos/lazybuggy.github.io/components/WordSwitcher.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // type Props = {\n//     data: WordSwitcherType\n// }\n// const upArrowClick = () => {\n//   console.log(\"up clicked\");\n// };\n// const downArrowClick = () => {\n//   console.log(\"down clicked\");\n// };\n\nvar WordSwitcher = function WordSwitcher(_ref) {\n  _s();\n\n  var words = _ref.words,\n      colour = _ref.colour;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(words.length),\n      optionCount = _useState2[0],\n      setOptionCount = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(words[0]),\n      word = _useState3[0],\n      setWord = _useState3[1]; //   console.log(\"workingn \", words, colour);\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (index > 0 && index < optionCount) {\n      console.log(\"op1 \", index);\n      setWord(words[index]);\n    } else if (index === optionCount) {\n      console.log(\"iop2\", index);\n      setWord(words[0]);\n      setIndex(0);\n    } else if (index <= 0) {\n      console.log(\"im in idex <= 0 \", index);\n      setWord(words[optionCount - 1]);\n      setIndex(optionCount - 1);\n    } // else {\n    //   console.log(\"wnhats hapengin \", index);\n    // }\n\n\n    console.log(\"woooo \", index);\n  }, [index, optionCount]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"uparrow\",\n      onClick: function onClick() {\n        return setIndex(function (index) {\n          return index - 1;\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), word, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"darrow\",\n      onClick: function onClick() {\n        return setIndex(function (index) {\n          return index + 1;\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WordSwitcher, \"xx0b4huC5dBI3F3TeWulr85+7fo=\");\n\n_c = WordSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordSwitcher);\n\nvar _c;\n\n$RefreshReg$(_c, \"WordSwitcher\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3JkU3dpdGNoZXIudHN4P2IzOWMiXSwibmFtZXMiOlsiV29yZFN3aXRjaGVyIiwid29yZHMiLCJjb2xvdXIiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJsZW5ndGgiLCJvcHRpb25Db3VudCIsInNldE9wdGlvbkNvdW50Iiwid29yZCIsInNldFdvcmQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFpRCxHQUFHLFNBQXBEQSxZQUFvRCxPQUdwRDtBQUFBOztBQUFBLE1BRkpDLEtBRUksUUFGSkEsS0FFSTtBQUFBLE1BREpDLE1BQ0ksUUFESkEsTUFDSTs7QUFBQSxrQkFDc0JDLHNEQUFRLENBQUMsQ0FBRCxDQUQ5QjtBQUFBLE1BQ0dDLEtBREg7QUFBQSxNQUNVQyxRQURWOztBQUFBLG1CQUVrQ0Ysc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDSyxNQUFQLENBRjFDO0FBQUEsTUFFR0MsV0FGSDtBQUFBLE1BRWdCQyxjQUZoQjs7QUFBQSxtQkFHb0JMLHNEQUFRLENBQUNGLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FINUI7QUFBQSxNQUdHUSxJQUhIO0FBQUEsTUFHU0MsT0FIVCxrQkFLSjs7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlQLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBR0csV0FBekIsRUFBc0M7QUFDcENLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JULEtBQXBCO0FBQ0FNLGFBQU8sQ0FBQ1QsS0FBSyxDQUFDRyxLQUFELENBQU4sQ0FBUDtBQUNELEtBSEQsTUFHTyxJQUFJQSxLQUFLLEtBQUtHLFdBQWQsRUFBMkI7QUFDaENLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JULEtBQXBCO0FBQ0FNLGFBQU8sQ0FBQ1QsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFQO0FBQ0FJLGNBQVEsQ0FBQyxDQUFELENBQVI7QUFDRCxLQUpNLE1BSUEsSUFBSUQsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDckJRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDVCxLQUFoQztBQUVBTSxhQUFPLENBQUNULEtBQUssQ0FBQ00sV0FBVyxHQUFHLENBQWYsQ0FBTixDQUFQO0FBQ0FGLGNBQVEsQ0FBQ0UsV0FBVyxHQUFHLENBQWYsQ0FBUjtBQUNELEtBYmEsQ0FjZDtBQUNBO0FBQ0E7OztBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCVCxLQUF0QjtBQUNELEdBbEJRLEVBa0JOLENBQUNBLEtBQUQsRUFBUUcsV0FBUixDQWxCTSxDQUFUO0FBb0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUUsU0FEYjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1GLFFBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsaUJBQVdBLEtBQUssR0FBRyxDQUFuQjtBQUFBLFNBQUQsQ0FBZDtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBS0dLLElBTEgsZUFNRTtBQUNFLGVBQVMsRUFBRSxRQURiO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUosUUFBUSxDQUFDLFVBQUNELEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxHQUFHLENBQW5CO0FBQUEsU0FBRCxDQUFkO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQTNDRDs7R0FBTUosWTs7S0FBQUEsWTtBQTZDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmRTd2l0Y2hlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JkU3dpdGNoZXJUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2luZGV4XCI7XG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdHlwZSBQcm9wcyA9IHtcbi8vICAgICBkYXRhOiBXb3JkU3dpdGNoZXJUeXBlXG4vLyB9XG5cbi8vIGNvbnN0IHVwQXJyb3dDbGljayA9ICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJ1cCBjbGlja2VkXCIpO1xuLy8gfTtcblxuLy8gY29uc3QgZG93bkFycm93Q2xpY2sgPSAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiZG93biBjbGlja2VkXCIpO1xuLy8gfTtcblxuY29uc3QgV29yZFN3aXRjaGVyOiBGdW5jdGlvbkNvbXBvbmVudDxXb3JkU3dpdGNoZXJUeXBlPiA9ICh7XG4gIHdvcmRzLFxuICBjb2xvdXIsXG59KSA9PiB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtvcHRpb25Db3VudCwgc2V0T3B0aW9uQ291bnRdID0gdXNlU3RhdGUod29yZHMubGVuZ3RoKTtcbiAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUod29yZHNbMF0pO1xuXG4gIC8vICAgY29uc29sZS5sb2coXCJ3b3JraW5nbiBcIiwgd29yZHMsIGNvbG91cik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgb3B0aW9uQ291bnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib3AxIFwiLCBpbmRleCk7XG4gICAgICBzZXRXb3JkKHdvcmRzW2luZGV4XSk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gb3B0aW9uQ291bnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW9wMlwiLCBpbmRleCk7XG4gICAgICBzZXRXb3JkKHdvcmRzWzBdKTtcbiAgICAgIHNldEluZGV4KDApO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJpbSBpbiBpZGV4IDw9IDAgXCIsIGluZGV4KTtcblxuICAgICAgc2V0V29yZCh3b3Jkc1tvcHRpb25Db3VudCAtIDFdKTtcbiAgICAgIHNldEluZGV4KG9wdGlvbkNvdW50IC0gMSk7XG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJ3bmhhdHMgaGFwZW5naW4gXCIsIGluZGV4KTtcbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2coXCJ3b29vbyBcIiwgaW5kZXgpO1xuICB9LCBbaW5kZXgsIG9wdGlvbkNvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e1widXBhcnJvd1wifVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbmRleCgoaW5kZXgpID0+IGluZGV4IC0gMSl9XG4gICAgICAvPlxuICAgICAge3dvcmR9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17XCJkYXJyb3dcIn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW5kZXgoKGluZGV4KSA9PiBpbmRleCArIDEpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRTd2l0Y2hlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WordSwitcher.tsx\n");

/***/ })

})