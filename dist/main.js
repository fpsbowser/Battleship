/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gameboard.js":
/*!**********************!*\
  !*** ./gameboard.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./ship.js\");\n\r\n\r\nfunction Gameboard() {\r\n    return {\r\n        gameboard: new Array(100).fill('o'),\r\n        carrier: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 42, true, 'carrier'),\r\n        battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 22, true, 'battleship'),\r\n        cruiser: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 90, true, 'cruiser'),\r\n        submarine: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 82, true, 'submarine'),\r\n        destroyer: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 12, true, 'destroyer'),\r\n        recieveAttack: function(coordinates) {\r\n            if (coordinates < 0 || coordinates > 100) {\r\n                throw 'Invalid coordinate!'\r\n            } else if (this.gameboard[coordinates] == 'carrier') {\r\n                this.gameboard.splice(coordinates, 1, 'carrierx')\r\n                this.carrier.hit(coordinates - this.carrier.location)\r\n            } else if (this.gameboard[coordinates] == 'battleship') {\r\n                this.gameboard.splice(coordinates, 1, 'battleshipx')\r\n                this.battleship.hit(coordinates - this.battleship.location)\r\n            } else if (this.gameboard[coordinates] == 'cruiser') {\r\n                this.gameboard.splice(coordinates, 1, 'cruiserx')\r\n                this.cruiser.hit(coordinates - this.cruiser.location)\r\n            } else if (this.gameboard[coordinates] == 'submarine') {\r\n                this.gameboard.splice(coordinates, 1, 'submarinex')\r\n                this.submarine.hit(coordinates - this.submarine.location)\r\n            } else if (this.gameboard[coordinates] == 'destroyer') {\r\n                this.gameboard.splice(coordinates, 1, 'destroyerx')\r\n                this.destroyer.hit(coordinates - this.destroyer.location)\r\n            } else if (this.gameboard[coordinates] == 'o') {\r\n                this.gameboard.splice(coordinates, 1, 'x')\r\n            }\r\n        },\r\n        insertShip: function(ship) {\r\n            let coordinates = ship.location\r\n            let unitsToRemove = ship.length.length\r\n            let unitsToAdd = ship.length\r\n            this.gameboard.splice(coordinates, unitsToRemove, ...unitsToAdd)\r\n        },\r\n        allShipsSunk: function() {\r\n            if (this.carrier.isSunk() == true &&\r\n                this.battleship.isSunk() == true &&\r\n                this.cruiser.isSunk() == true &&\r\n                this.submarine.isSunk() == true &&\r\n                this.destroyer.isSunk() == true) {\r\n                return true\r\n            } else {\r\n                return false\r\n            }\r\n        },\r\n    }\r\n}\r\n\r\n// Gameboard should have specific ships as properties? like destroyer = new Ship(2)\r\n// Ship sizes: Carrier - 5/ Battleship - 4/ Cruiser - 3/ Submarine - 3/ Destroyer - 2\r\n\r\n/*\r\n    ***** GAMEBOARD DOCS *****\r\no - default/available tile\r\nx - attacked tile/no ship\r\n(shipname) - ship tile\r\n(shipname)x - ship tile that has been attacked\r\n*/\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./gameboard.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(lengthOfShip, coordinates, isHorizontal, typeOfShip) {\r\n    return {\r\n        length: new Array(lengthOfShip).fill(typeOfShip),\r\n        hits: new Array(lengthOfShip).fill(0),\r\n        location: coordinates,\r\n        horizontal: isHorizontal,\r\n        isSunk: function() {\r\n            let sunk \r\n            this.hits.every(x => x == 1) ? sunk = true : sunk = false\r\n            return sunk\r\n        },\r\n        hit: function(number) {\r\n            this.hits[number] = 1\r\n        },\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard */ \"./gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship */ \"./ship.js\");\n\r\n\r\n\r\nconst shipOne = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4)\r\n\r\nconsole.log(shipOne.hits)\r\nshipOne.hit(2)\r\nconsole.log(shipOne.hits)\r\nshipOne.hit(3)\r\nconsole.log(shipOne.hits)\r\nshipOne.hit(1)\r\nconsole.log(shipOne.hits)\r\n\r\nshipOne.hit(0)\r\nconsole.log(`Ship one hits array: ${shipOne.hits}`)\r\nconsole.log(`Ship one length array: ${shipOne.length}`)\r\nconsole.log(`Ship one is sunk? : ${shipOne.isSunk()}`)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;