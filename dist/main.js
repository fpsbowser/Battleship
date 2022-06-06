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

/***/ "./dom.js":
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aiBoardContainer\": () => (/* binding */ aiBoardContainer),\n/* harmony export */   \"playerboardContainer\": () => (/* binding */ playerboardContainer),\n/* harmony export */   \"startGameButton\": () => (/* binding */ startGameButton)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./game.js\");\n\n\n\n// const start = document.getElementById('start')\n// start.addEventListener('click', () => {\n//     console.log('start button')\n    \n// })\n\n\n// function Dom() {\n//     return {\n//         playerGameboardContainer: document.getElementById('playerBoard'),\n//         test: console.log()\n//     }\n// }\n\n// export default Dom\n\n\nconst playerboardContainer = document.getElementById('playerBoard')\nconst aiBoardContainer = document.getElementById('aiBoard')\nconst startGameButton = document.getElementById('start')\n\n\n\n\n\n//# sourceURL=webpack://battleship/./dom.js?");

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./player.js\");\n\n\n\nfunction Game(player) {\n    return {\n        startNewGame: async function(player) {\n            /* Player places all ships on gameboard -> AI board get randomly generated -> player sends attack on AI board\n            -> AI sends attack on player board -> when either gameboard ships all sunk is true the game ends\n            */\n        },\n        gameOver: false,\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship/./game.js?");

/***/ }),

/***/ "./gameboard.js":
/*!**********************!*\
  !*** ./gameboard.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./dom.js\");\n// import Dom from \"./dom\";\n\n\n\n\nfunction Gameboard() {\n  return {\n    gameboard: new Array(100).fill(\"o\"),\n    carrier: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 42, false, \"carrier\"),\n    battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 26, false, \"battleship\"),\n    cruiser: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 94, true, \"cruiser\"),\n    submarine: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 76, true, \"submarine\"),\n    destroyer: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 12, false, \"destroyer\"),\n    recieveAttack: function (coordinates) {\n      if (coordinates < 0 || coordinates > 100) {\n        throw \"Invalid coordinate!\";\n      } else if (this.gameboard[coordinates] == \"carrier\") {\n        this.gameboard.splice(coordinates, 1, \"carrierx\");\n        this.carrier.hit(coordinates - this.carrier.location);\n      } else if (this.gameboard[coordinates] == \"battleship\") {\n        this.gameboard.splice(coordinates, 1, \"battleshipx\");\n        this.battleship.hit(coordinates - this.battleship.location);\n      } else if (this.gameboard[coordinates] == \"cruiser\") {\n        this.gameboard.splice(coordinates, 1, \"cruiserx\");\n        this.cruiser.hit(coordinates - this.cruiser.location);\n      } else if (this.gameboard[coordinates] == \"submarine\") {\n        this.gameboard.splice(coordinates, 1, \"submarinex\");\n        this.submarine.hit(coordinates - this.submarine.location);\n      } else if (this.gameboard[coordinates] == \"destroyer\") {\n        this.gameboard.splice(coordinates, 1, \"destroyerx\");\n        this.destroyer.hit(coordinates - this.destroyer.location);\n      } else if (this.gameboard[coordinates] == \"o\") {\n        this.gameboard.splice(coordinates, 1, \"x\");\n      }\n    },\n    insertShip: function (ship) {\n      let coordinates = ship.location;\n      let unitsToRemove = ship.length.length;\n      let unitsToAdd = ship.length;\n      \n      if (!ship.horizontal) {\n        // console.log('ship is vertical')\n        let skip = 10\n        // Place ship in gameboard array vertically\n        for (let i = 0; i < ship.length.length; i++) {\n          this.gameboard.splice(coordinates, 1, ship.name)\n          coordinates = coordinates + skip\n        }\n      } else {\n        this.gameboard.splice(coordinates, unitsToRemove, ...unitsToAdd);\n      }\n      \n    },\n    allShipsSunk: function () {\n      if (\n        this.carrier.isSunk() == true &&\n        this.battleship.isSunk() == true &&\n        this.cruiser.isSunk() == true &&\n        this.submarine.isSunk() == true &&\n        this.destroyer.isSunk() == true\n      ) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    render: function(board) {\n      // render gameboard\n      this.clearUnitsForBoard(board)\n      for (let i = 0; i < this.gameboard.length; i++) {\n        const unit = document.createElement('div')\n        unit.className = `${this.gameboard[i]}`\n        board.appendChild(unit)\n        // console.log(this.gameboard[i])\n      }\n    },\n    clearUnitsForBoard: function(board) {\n      while (board.firstChild) {\n        board.removeChild(board.firstChild)\n      }\n    }\n  };\n}\n\n// Gameboard should have specific ships as properties? like destroyer = new Ship(2)\n// Ship sizes: Carrier - 5/ Battleship - 4/ Cruiser - 3/ Submarine - 3/ Destroyer - 2\n\n/*\n    ***** GAMEBOARD DOCS *****\no - default/available tile\nx - attacked tile/no ship\n(shipname) - ship tile\n(shipname)x - ship tile that has been attacked\n*/\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./gameboard.js?");

/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./gameboard.js\");\n\n\nfunction Player() {\n  return {\n    gameboard: new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n    aiMove: function () {\n      let coordinate = Math.floor(Math.random() * 101);\n      let moveArray = [];\n      if (moveArray.includes(coordinate)) {\n        while (moveArray.includes(coordinate)) {\n          coordinate = Math.floor(Math.random() * 101);\n        }\n        moveArray.push(coordinate);\n      } else {\n        moveArray.push(coordinate);\n      }\n      return coordinate;\n    },\n\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./player.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(lengthOfShip, coordinates, isHorizontal, typeOfShip) {\n    return {\n        name: typeOfShip,\n        length: new Array(lengthOfShip).fill(typeOfShip),\n        hits: new Array(lengthOfShip).fill(0),\n        location: coordinates,\n        horizontal: isHorizontal,\n        isSunk: function() {\n            let sunk \n            this.hits.every(x => x == 1) ? sunk = true : sunk = false\n            return sunk\n        },\n        hit: function(number) {\n            this.hits[number] = 1\n        },\n    }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard */ \"./gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship */ \"./ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game */ \"./game.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom */ \"./dom.js\");\n\n\n// import Dom from \"../dom\";\n\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_4__.startGameButton.addEventListener('click', () => {\n\n    // Start the game loop from the Game module\n    const playerOne = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\n    console.log(playerOne.gameboard)\n    playerOne.gameboard.insertShip(playerOne.gameboard.carrier)\n    playerOne.gameboard.insertShip(playerOne.gameboard.battleship)\n    playerOne.gameboard.insertShip(playerOne.gameboard.cruiser)\n    playerOne.gameboard.insertShip(playerOne.gameboard.submarine)\n    playerOne.gameboard.insertShip(playerOne.gameboard.destroyer)\n    playerOne.gameboard.render(_dom__WEBPACK_IMPORTED_MODULE_4__.playerboardContainer)\n\n    const ai = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\n    console.log(ai.gameboard)\n    ai.gameboard.insertShip(ai.gameboard.carrier)\n    ai.gameboard.insertShip(ai.gameboard.battleship)\n    ai.gameboard.insertShip(ai.gameboard.cruiser)\n    ai.gameboard.insertShip(ai.gameboard.submarine)\n    ai.gameboard.insertShip(ai.gameboard.destroyer)\n    ai.gameboard.render(_dom__WEBPACK_IMPORTED_MODULE_4__.aiBoardContainer)\n})\n\n\n\n// const start = document.getElementById('start')\n// start.addEventListener('click', () => {\n//     console.log('start button')\n//     console.log(playerOne.gameboard.render())\n// })\n\n\n\n\n// const shipOne = Ship(4)\n\n// console.log(shipOne.hits)\n// shipOne.hit(2)\n// console.log(shipOne.hits)\n// shipOne.hit(3)\n// console.log(shipOne.hits)\n// shipOne.hit(1)\n// console.log(shipOne.hits)\n\n// shipOne.hit(0)\n// console.log(`Ship one hits array: ${shipOne.hits}`)\n// console.log(`Ship one length array: ${shipOne.length}`)\n// console.log(`Ship one is sunk? : ${shipOne.isSunk()}`)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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