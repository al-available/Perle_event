/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/about.css"
/*!***************************!*\
  !*** ./src/css/about.css ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL2Fib3V0LmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QZXJsZSBFdmVudCAmIG1vcmUgLy4vc3JjL2Nzcy9hYm91dC5jc3M/NTVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/about.css\n\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/about.css */ \"./src/css/about.css\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n\n\n\n// navigation bar \n\n(0,_navBar__WEBPACK_IMPORTED_MODULE_1__.navBar)()\n\n\nconst counters = document.querySelectorAll('[data-target]');\nconst speed = 200;\n\nconst animate = (counter) => {\n  const target = +counter.getAttribute('data-target');\n  const update = () => {\n    const current = +counter.innerText;\n    const increment = target / speed;\n\n    if (current < target) {\n      counter.innerText = Math.ceil(current + increment);\n      requestAnimationFrame(update);\n    } else {\n      counter.innerText = target;\n    }\n  };\n  update();\n};\n\nconst observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      counters.forEach(counter => animate(counter));\n      observer.disconnect();\n    }\n  });\n}, { threshold: 0.5 });\n\nobserver.observe(document.querySelector('.editorial'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdCOzs7QUFHeEI7QUFDaUM7QUFDakMsK0NBQU07OztBQUdOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxJQUFJLGdCQUFnQjs7QUFFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QZXJsZSBFdmVudCAmIG1vcmUgLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Nzcy9hYm91dC5jc3MnXG5cblxuLy8gbmF2aWdhdGlvbiBiYXIgXG5pbXBvcnQgeyBuYXZCYXIgfSBmcm9tICcuL25hdkJhcidcbm5hdkJhcigpXG5cblxuY29uc3QgY291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YXJnZXRdJyk7XG5jb25zdCBzcGVlZCA9IDIwMDtcblxuY29uc3QgYW5pbWF0ZSA9IChjb3VudGVyKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9ICtjb3VudGVyLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSArY291bnRlci5pbm5lclRleHQ7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gdGFyZ2V0IC8gc3BlZWQ7XG5cbiAgICBpZiAoY3VycmVudCA8IHRhcmdldCkge1xuICAgICAgY291bnRlci5pbm5lclRleHQgPSBNYXRoLmNlaWwoY3VycmVudCArIGluY3JlbWVudCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnRlci5pbm5lclRleHQgPSB0YXJnZXQ7XG4gICAgfVxuICB9O1xuICB1cGRhdGUoKTtcbn07XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgY291bnRlcnMuZm9yRWFjaChjb3VudGVyID0+IGFuaW1hdGUoY291bnRlcikpO1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSk7XG59LCB7IHRocmVzaG9sZDogMC41IH0pO1xuXG5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JpYWwnKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/about.js\n\n}");

/***/ },

/***/ "./src/navBar.js"
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navBar: () => (/* binding */ navBar)\n/* harmony export */ });\n\nfunction navBar (){\nconst openMenu = document.getElementById(\"openMenu\");\nconst closeMenu = document.getElementById(\"closeMenu\");\nconst mobileMenu = document.getElementById(\"mobileMenu\");\n\nopenMenu.addEventListener(\"click\", () => {\n  mobileMenu.classList.add(\"active\");\n});\n\ncloseMenu.addEventListener(\"click\", () => {\n  mobileMenu.classList.remove(\"active\");\n});\n\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmF2QmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QZXJsZSBFdmVudCAmIG1vcmUgLy4vc3JjL25hdkJhci5qcz8yOGIwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gbmF2QmFyICgpe1xuY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5NZW51XCIpO1xuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1lbnVcIik7XG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVNZW51XCIpO1xuXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcblxuY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn0pO1xuXG59XG5leHBvcnR7bmF2QmFyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/navBar.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/about.js");
/******/ 	
/******/ })()
;