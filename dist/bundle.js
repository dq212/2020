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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// $('.trigger, .slider').click(function() {\n//   $('.slider').toggleClass('close');\n// });\n\nconst items = document.getElementsByClassName('img-btn');\nconst sliders = document.getElementsByClassName('slider');\n\n// console.log(typeof items)\nconst overHandler = (e) => {\n  console.log(e);\n  console.log(e.target)\n  console.log(e.currentTarget)\n   //e.target.removeEventListener('mouseover', overHandler, true);\n   // const d = e.target.querySelector('div');\n  // console.log(e.target.nextSibling)\n   const d = e.target.nextSibling.nextSibling;\n    //e.target.stopPropagation();\n    if(d){\n     // console.log(d)\n      // d.classList.add('open');\n      d.classList.add('close');\n      //hideHandler(d);\n    }\n}\n\nconst outHandler = (e) =>{\n  console.log(e.target)\n  //console.log(e.currentTarget)\n  const d = e.target;\n    //e.target.stopPropagation();\n    if(d){\n      //console.log(d)\n    // d.classList.remove('open');\n     d.classList.remove('close');\n      //hideHandler(d);\n    }\n  \n   \n}\n\n\n\nArray.from(items).forEach((item)=> {\n // console.log(item.querySelector('div').className);\n  item.addEventListener('mouseover', overHandler, true);\n  //\n  //item.addEventListener('mouseout', outHandler, true);  \n  // item.stopPropagation(); \n});\n\nArray.from(sliders).forEach((slider)=> {\n  slider.addEventListener('mouseleave', outHandler, false);\n  //slider.stopImmediatePropagation();\n});\n\n// for (var i=0; i<items.length; i++) {\n//   items[i].addEventListener('mouseover', overHandler, false);\n// }\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });