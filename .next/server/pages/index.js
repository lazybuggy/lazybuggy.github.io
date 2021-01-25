module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/WordSwitcher.tsx":
/*!*************************************!*\
  !*** ./components/WordSwitcher.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/WordSwitcher.module.css */ \"./styles/WordSwitcher.module.css\");\n/* harmony import */ var _styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/luciaokeh/Documents/Github Repos/lazybuggy.github.io/components/WordSwitcher.tsx\";\n // import classnames from 'classnames';\n\n // type Props = {\n//     data: WordSwitcherType\n// }\n// const upArrowClick = () => {\n//   console.log(\"up clicked\");\n// };\n// const downArrowClick = () => {\n//   console.log(\"down clicked\");\n// };\n\nconst WordSwitcher = ({\n  words,\n  colour,\n  autoplay = true,\n  interval = 5000\n}) => {\n  const {\n    0: index,\n    1: setIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0);\n  const {\n    0: optionCount,\n    1: setOptionCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(words.length);\n  const {\n    0: word,\n    1: setWord\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(words[0]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    if (autoplay) {\n      let wordInterval = setInterval(() => setIndex(index => index + 1), interval);\n      return () => clearInterval(wordInterval);\n    }\n  }, []); //   console.log(\"workingn \", words, colour);\n  //   const buttonClass\n  //className={classnames({[styles.previousArrow]:true})}\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    if (index >= 0 && index < optionCount) {\n      setWord(words[index]);\n    } else if (index === optionCount) {\n      setWord(words[0]);\n      setIndex(0);\n    } else if (index < 0) {\n      setWord(words[optionCount - 1]);\n      setIndex(optionCount - 1);\n    }\n  }, [index, optionCount]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: [_styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.previousArrow, _styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow].join(\" \"),\n      style: {\n        color: colour\n      },\n      onClick: () => setIndex(index => index - 1)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textContainer,\n      children: word\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: [_styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nextArrow, _styles_WordSwitcher_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow].join(\" \"),\n      style: {\n        color: colour\n      },\n      onClick: () => setIndex(index => index + 1)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordSwitcher);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmRTd2l0Y2hlci50c3g/YjM5YyJdLCJuYW1lcyI6WyJXb3JkU3dpdGNoZXIiLCJ3b3JkcyIsImNvbG91ciIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJpbmRleCIsInNldEluZGV4IiwidXNlU3RhdGUiLCJvcHRpb25Db3VudCIsInNldE9wdGlvbkNvdW50IiwibGVuZ3RoIiwid29yZCIsInNldFdvcmQiLCJ1c2VFZmZlY3QiLCJ3b3JkSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJwcmV2aW91c0Fycm93IiwiYXJyb3ciLCJqb2luIiwiY29sb3IiLCJ0ZXh0Q29udGFpbmVyIiwibmV4dEFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Q0FDQTs7Q0FHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBaUQsR0FBRyxDQUFDO0FBQ3pEQyxPQUR5RDtBQUV6REMsUUFGeUQ7QUFHekRDLFVBQVEsR0FBRyxJQUg4QztBQUl6REMsVUFBUSxHQUFHO0FBSjhDLENBQUQsS0FLcEQ7QUFDSixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQ04sS0FBSyxDQUFDUyxNQUFQLENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCTCxzREFBUSxDQUFDTixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQWhDO0FBRUFZLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlWLFFBQUosRUFBYztBQUNaLFVBQUlXLFlBQVksR0FBR0MsV0FBVyxDQUM1QixNQUFNVCxRQUFRLENBQUVELEtBQUQsSUFBV0EsS0FBSyxHQUFHLENBQXBCLENBRGMsRUFFNUJELFFBRjRCLENBQTlCO0FBSUEsYUFBTyxNQUFNWSxhQUFhLENBQUNGLFlBQUQsQ0FBMUI7QUFDRDtBQUNGLEdBUlEsRUFRTixFQVJNLENBQVQsQ0FMSSxDQWNKO0FBQ0E7QUFDQTs7QUFDQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSVIsS0FBSyxJQUFJLENBQVQsSUFBY0EsS0FBSyxHQUFHRyxXQUExQixFQUF1QztBQUNyQ0ksYUFBTyxDQUFDWCxLQUFLLENBQUNJLEtBQUQsQ0FBTixDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUlBLEtBQUssS0FBS0csV0FBZCxFQUEyQjtBQUNoQ0ksYUFBTyxDQUFDWCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQVA7QUFDQUssY0FBUSxDQUFDLENBQUQsQ0FBUjtBQUNELEtBSE0sTUFHQSxJQUFJRCxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ3BCTyxhQUFPLENBQUNYLEtBQUssQ0FBQ08sV0FBVyxHQUFHLENBQWYsQ0FBTixDQUFQO0FBQ0FGLGNBQVEsQ0FBQ0UsV0FBVyxHQUFHLENBQWYsQ0FBUjtBQUNEO0FBQ0YsR0FWUSxFQVVOLENBQUNILEtBQUQsRUFBUUcsV0FBUixDQVZNLENBQVQ7QUFZQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVMsc0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRSxDQUFDRCxzRUFBTSxDQUFDRSxhQUFSLEVBQXVCRixzRUFBTSxDQUFDRyxLQUE5QixFQUFxQ0MsSUFBckMsQ0FBMEMsR0FBMUMsQ0FEYjtBQUVFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUVwQjtBQUFULE9BRlQ7QUFHRSxhQUFPLEVBQUUsTUFBTUksUUFBUSxDQUFFRCxLQUFELElBQVdBLEtBQUssR0FBRyxDQUFwQjtBQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxlQUFTLEVBQUVZLHNFQUFNLENBQUNNLGFBQXZCO0FBQUEsZ0JBQXVDWjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0U7QUFDRSxlQUFTLEVBQUUsQ0FBQ00sc0VBQU0sQ0FBQ08sU0FBUixFQUFtQlAsc0VBQU0sQ0FBQ0csS0FBMUIsRUFBaUNDLElBQWpDLENBQXNDLEdBQXRDLENBRGI7QUFFRSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFcEI7QUFBVCxPQUZUO0FBR0UsYUFBTyxFQUFFLE1BQU1JLFFBQVEsQ0FBRUQsS0FBRCxJQUFXQSxLQUFLLEdBQUcsQ0FBcEI7QUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBakREOztBQW1EZUwsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmRTd2l0Y2hlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvV29yZFN3aXRjaGVyLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgV29yZFN3aXRjaGVyVHlwZSB9IGZyb20gXCIuLi90eXBlcy9pbmRleFwiO1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIHR5cGUgUHJvcHMgPSB7XG4vLyAgICAgZGF0YTogV29yZFN3aXRjaGVyVHlwZVxuLy8gfVxuXG4vLyBjb25zdCB1cEFycm93Q2xpY2sgPSAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwidXAgY2xpY2tlZFwiKTtcbi8vIH07XG5cbi8vIGNvbnN0IGRvd25BcnJvd0NsaWNrID0gKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImRvd24gY2xpY2tlZFwiKTtcbi8vIH07XG5cbmNvbnN0IFdvcmRTd2l0Y2hlcjogRnVuY3Rpb25Db21wb25lbnQ8V29yZFN3aXRjaGVyVHlwZT4gPSAoe1xuICB3b3JkcyxcbiAgY29sb3VyLFxuICBhdXRvcGxheSA9IHRydWUsXG4gIGludGVydmFsID0gNTAwMCxcbn0pID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW29wdGlvbkNvdW50LCBzZXRPcHRpb25Db3VudF0gPSB1c2VTdGF0ZSh3b3Jkcy5sZW5ndGgpO1xuICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSh3b3Jkc1swXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgIGxldCB3b3JkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKCkgPT4gc2V0SW5kZXgoKGluZGV4KSA9PiBpbmRleCArIDEpLFxuICAgICAgICBpbnRlcnZhbFxuICAgICAgKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHdvcmRJbnRlcnZhbCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIC8vICAgY29uc29sZS5sb2coXCJ3b3JraW5nbiBcIiwgd29yZHMsIGNvbG91cik7XG4gIC8vICAgY29uc3QgYnV0dG9uQ2xhc3NcbiAgLy9jbGFzc05hbWU9e2NsYXNzbmFtZXMoe1tzdHlsZXMucHJldmlvdXNBcnJvd106dHJ1ZX0pfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgb3B0aW9uQ291bnQpIHtcbiAgICAgIHNldFdvcmQod29yZHNbaW5kZXhdKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBvcHRpb25Db3VudCkge1xuICAgICAgc2V0V29yZCh3b3Jkc1swXSk7XG4gICAgICBzZXRJbmRleCgwKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgc2V0V29yZCh3b3Jkc1tvcHRpb25Db3VudCAtIDFdKTtcbiAgICAgIHNldEluZGV4KG9wdGlvbkNvdW50IC0gMSk7XG4gICAgfVxuICB9LCBbaW5kZXgsIG9wdGlvbkNvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5wcmV2aW91c0Fycm93LCBzdHlsZXMuYXJyb3ddLmpvaW4oXCIgXCIpfVxuICAgICAgICBzdHlsZT17eyBjb2xvcjogY29sb3VyIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KChpbmRleCkgPT4gaW5kZXggLSAxKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRDb250YWluZXJ9Pnt3b3JkfTwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMubmV4dEFycm93LCBzdHlsZXMuYXJyb3ddLmpvaW4oXCIgXCIpfVxuICAgICAgICBzdHlsZT17eyBjb2xvcjogY29sb3VyIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEluZGV4KChpbmRleCkgPT4gaW5kZXggKyAxKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkU3dpdGNoZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WordSwitcher.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_WordSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WordSwitcher */ \"./components/WordSwitcher.tsx\");\n\nvar _jsxFileName = \"/Users/luciaokeh/Documents/Github Repos/lazybuggy.github.io/pages/index.tsx\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nfunction Home(_ref) {\n  let {\n    title,\n    description\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"title\", \"description\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/static/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Montserrat&family=Cormorant+Upright:wght@400;500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.twinklingStars\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cloud\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,\n        children: \"LUCIA OKEH\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_WordSwitcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        words: [\"red\", \"blue\", \"gray\"],\n        colour: \"#9ecbd9\",\n        autoplay: false\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticProps = async () => {\n  const configData = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../siteconfig.json */ \"./siteconfig.json\", 3));\n  return {\n    props: {\n      title: configData.default.title,\n      description: configData.default.description\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwidHdpbmtsaW5nU3RhcnMiLCJjbG91ZCIsIm1haW4iLCJuYW1lIiwiZ2V0U3RhdGljUHJvcHMiLCJjb25maWdEYXRhIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULE9BQWdEO0FBQUEsTUFBbEM7QUFBRUMsU0FBRjtBQUFTQztBQUFULEdBQWtDO0FBQUEsTUFBVEMsS0FBUzs7QUFDN0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRSjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUNFLFlBQUksRUFBQyx3R0FEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFO0FBQUssZUFBUyxFQUFFRSw4REFBTSxDQUFDRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRTtBQUFLLGVBQVMsRUFBRUYsOERBQU0sQ0FBQ0c7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBYUU7QUFBTSxlQUFTLEVBQUVILDhEQUFNLENBQUNJLElBQXhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFSiw4REFBTSxDQUFDSyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0VBQUQ7QUFDRSxhQUFLLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixNQUFoQixDQURUO0FBRUUsY0FBTSxFQUFDLFNBRlQ7QUFHRSxnQkFBUSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEO0FBRU0sTUFBTUMsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1DLFVBQVUsR0FBRyxNQUFNLGlJQUF6QjtBQUVBLFNBQU87QUFDTFIsU0FBSyxFQUFFO0FBQ0xGLFdBQUssRUFBRVUsVUFBVSxDQUFDQyxPQUFYLENBQW1CWCxLQURyQjtBQUVMQyxpQkFBVyxFQUFFUyxVQUFVLENBQUNDLE9BQVgsQ0FBbUJWO0FBRjNCO0FBREYsR0FBUDtBQU1ELENBVE0iLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgV29yZFN3aXRjaGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1dvcmRTd2l0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9Q29ybW9yYW50K1VwcmlnaHQ6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3aW5rbGluZ1N0YXJzfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG91ZH0gLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5MVUNJQSBPS0VIPC9oMT5cbiAgICAgICAgPFdvcmRTd2l0Y2hlclxuICAgICAgICAgIHdvcmRzPXtbXCJyZWRcIiwgXCJibHVlXCIsIFwiZ3JheVwiXX1cbiAgICAgICAgICBjb2xvdXI9XCIjOWVjYmQ5XCJcbiAgICAgICAgICBhdXRvcGxheT17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb25maWdEYXRhID0gYXdhaXQgaW1wb3J0KFwiLi4vc2l0ZWNvbmZpZy5qc29uXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiBjb25maWdEYXRhLmRlZmF1bHQudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogY29uZmlnRGF0YS5kZWZhdWx0LmRlc2NyaXB0aW9uLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"twinklingStars\": \"Home_twinklingStars__2U1pT\",\n\t\"move-twink-back\": \"Home_move-twink-back__2BOI1\",\n\t\"cloud\": \"Home_cloud__HOybP\",\n\t\"move-cloud-back\": \"Home_move-cloud-back__I5o0h\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"name\": \"Home_name__3fbfx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwidHdpbmtsaW5nU3RhcnNcIjogXCJIb21lX3R3aW5rbGluZ1N0YXJzX18yVTFwVFwiLFxuXHRcIm1vdmUtdHdpbmstYmFja1wiOiBcIkhvbWVfbW92ZS10d2luay1iYWNrX18yQk9JMVwiLFxuXHRcImNsb3VkXCI6IFwiSG9tZV9jbG91ZF9fSE95YlBcIixcblx0XCJtb3ZlLWNsb3VkLWJhY2tcIjogXCJIb21lX21vdmUtY2xvdWQtYmFja19fSTVvMGhcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcIm5hbWVcIjogXCJIb21lX25hbWVfXzNmYmZ4XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./styles/WordSwitcher.module.css":
/*!****************************************!*\
  !*** ./styles/WordSwitcher.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"arrow\": \"WordSwitcher_arrow__1koTQ\",\n\t\"previousArrow\": \"WordSwitcher_previousArrow__5VMHx\",\n\t\"nextArrow\": \"WordSwitcher_nextArrow__1n46E\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvV29yZFN3aXRjaGVyLm1vZHVsZS5jc3M/Y2UyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvV29yZFN3aXRjaGVyLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd1wiOiBcIldvcmRTd2l0Y2hlcl9hcnJvd19fMWtvVFFcIixcblx0XCJwcmV2aW91c0Fycm93XCI6IFwiV29yZFN3aXRjaGVyX3ByZXZpb3VzQXJyb3dfXzVWTUh4XCIsXG5cdFwibmV4dEFycm93XCI6IFwiV29yZFN3aXRjaGVyX25leHRBcnJvd19fMW40NkVcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/WordSwitcher.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });