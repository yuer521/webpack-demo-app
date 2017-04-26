/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n// import tpl from './layer.html';\n\nfunction layer() {\n    return {\n        name: 'layer',\n        tpl: tpl\n    };\n}\n\nexports.default = layer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXllci9sYXllci5qcz83Nzc5Il0sIm5hbWVzIjpbImxheWVyIiwibmFtZSIsInRwbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSEMsY0FBSyxPQURGO0FBRUhDLGFBQUlBO0FBRkQsS0FBUDtBQUlIOztrQkFFY0YsSyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQgdHBsIGZyb20gJy4vbGF5ZXIuaHRtbCc7XG5cbmZ1bmN0aW9uIGxheWVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6J2xheWVyJyxcbiAgICAgICAgdHBsOnRwbFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGF5ZXIvbGF5ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./css/common.css\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _layer = __webpack_require__(0);\n\nvar _layer2 = _interopRequireDefault(_layer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n    var NUM = 1;\n    alert(NUM);\n    console.log(_layer2.default);\n};\nnew App();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiQXBwIiwiTlVNIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxNQUFJLFNBQUpBLEdBQUksR0FBWTtBQUNsQixRQUFNQyxNQUFNLENBQVo7QUFDQUMsVUFBTUQsR0FBTjtBQUNBRSxZQUFRQyxHQUFSO0FBQ0gsQ0FKRDtBQUtBLElBQUlKLEdBQUoiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuL2Nzcy9jb21tb24uY3NzJztcbmltcG9ydCBsYXllciBmcm9tICcuL2NvbXBvbmVudHMvbGF5ZXIvbGF5ZXInO1xuXG5cbmNvbnN0IEFwcD1mdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgTlVNID0gMTtcbiAgICBhbGVydChOVU0pO1xuICAgIGNvbnNvbGUubG9nKGxheWVyKTtcbn1cbm5ldyBBcHAoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);