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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aiBoardContainer\": () => (/* binding */ aiBoardContainer),\n/* harmony export */   \"giveUnitsEventListener\": () => (/* binding */ giveUnitsEventListener),\n/* harmony export */   \"playerboardContainer\": () => (/* binding */ playerboardContainer),\n/* harmony export */   \"startGameButton\": () => (/* binding */ startGameButton)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./game.js\");\n\n\nconst playerboardContainer = document.getElementById(\"playerBoard\");\nconst aiBoardContainer = document.getElementById(\"aiBoard\");\nconst startGameButton = document.getElementById(\"start\");\n\nfunction giveUnitsEventListener() {\n  const units = document.querySelectorAll(\"#enemyUnit\");\n  units.forEach((item) => {\n    item.addEventListener(\n      \"click\",\n      (e) => {\n        console.log(e);\n        if (e.target.className == \"o\") {\n          e.target.className = \"x\";\n        } else if (\n          e.target.className == \"carrier\" ||\n          e.target.className == \"battleship\" ||\n          e.target.className == \"cruiser\" ||\n          e.target.className == \"submarine\" ||\n          e.target.className == \"destroyer\"\n        ) {\n          e.target.className = `${e.target.className}x`;\n        }\n      },\n      { once: true }\n    );\n  });\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./dom.js?");

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./dom.js\");\n\r\n\r\n\r\nfunction game(player) {\r\n   \r\n    const playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    console.log(playerOne.gameboard)\r\n    playerOne.gameboard.insertShip(playerOne.gameboard.carrier)\r\n    playerOne.gameboard.insertShip(playerOne.gameboard.battleship)\r\n    playerOne.gameboard.insertShip(playerOne.gameboard.cruiser)\r\n    playerOne.gameboard.insertShip(playerOne.gameboard.submarine)\r\n    playerOne.gameboard.insertShip(playerOne.gameboard.destroyer)\r\n    playerOne.gameboard.render(_dom__WEBPACK_IMPORTED_MODULE_1__.playerboardContainer, 'unit')\r\n\r\n    const ai = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    console.log(ai.gameboard)\r\n    ai.gameboard.insertShip(ai.gameboard.carrier)\r\n    ai.gameboard.insertShip(ai.gameboard.battleship)\r\n    ai.gameboard.insertShip(ai.gameboard.cruiser)\r\n    ai.gameboard.insertShip(ai.gameboard.submarine)\r\n    ai.gameboard.insertShip(ai.gameboard.destroyer)\r\n    ai.gameboard.render(_dom__WEBPACK_IMPORTED_MODULE_1__.aiBoardContainer, 'enemyUnit')\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.giveUnitsEventListener()\r\n   \r\n   \r\n   \r\n   \r\n   \r\n    // return {\r\n    //     startNewGame: async function(player) {\r\n    //         /* Player places all ships on gameboard -> AI board get randomly generated -> player sends attack on AI board\r\n    //         -> AI sends attack on player board -> when either gameboard ships all sunk is true the game ends\r\n    //         */\r\n           \r\n    //     },\r\n    //     gameOver: false,\r\n    // }\r\n}\r\n\r\n// export default Game\r\n\r\n\n\n//# sourceURL=webpack://battleship/./game.js?");

/***/ }),

/***/ "./gameboard.js":
/*!**********************!*\
  !*** ./gameboard.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./dom.js\");\n// import Dom from \"./dom\";\r\n\r\n\r\n\r\n\r\n\r\nfunction Gameboard() {\r\n  return {\r\n    gameboard: new Array(100).fill(\"o\"),\r\n    carrier: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 42, false, \"carrier\"),\r\n    battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 26, false, \"battleship\"),\r\n    cruiser: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 94, true, \"cruiser\"),\r\n    submarine: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 76, true, \"submarine\"),\r\n    destroyer: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 12, false, \"destroyer\"),\r\n    recieveAttack: function (coordinates) {\r\n      if (coordinates < 0 || coordinates > 100) {\r\n        throw \"Invalid coordinate!\";\r\n      } else if (this.gameboard[coordinates] == \"carrier\") {\r\n        this.gameboard.splice(coordinates, 1, \"carrierx\");\r\n        this.carrier.hit(coordinates - this.carrier.location);\r\n      } else if (this.gameboard[coordinates] == \"battleship\") {\r\n        this.gameboard.splice(coordinates, 1, \"battleshipx\");\r\n        this.battleship.hit(coordinates - this.battleship.location);\r\n      } else if (this.gameboard[coordinates] == \"cruiser\") {\r\n        this.gameboard.splice(coordinates, 1, \"cruiserx\");\r\n        this.cruiser.hit(coordinates - this.cruiser.location);\r\n      } else if (this.gameboard[coordinates] == \"submarine\") {\r\n        this.gameboard.splice(coordinates, 1, \"submarinex\");\r\n        this.submarine.hit(coordinates - this.submarine.location);\r\n      } else if (this.gameboard[coordinates] == \"destroyer\") {\r\n        this.gameboard.splice(coordinates, 1, \"destroyerx\");\r\n        this.destroyer.hit(coordinates - this.destroyer.location);\r\n      } else if (this.gameboard[coordinates] == \"o\") {\r\n        this.gameboard.splice(coordinates, 1, \"x\");\r\n      }\r\n    },\r\n    insertShip: function (ship) {\r\n      let coordinates = ship.location;\r\n      let unitsToRemove = ship.length.length;\r\n      let unitsToAdd = ship.length;\r\n      \r\n      if (!ship.horizontal) {\r\n        let skip = 10\r\n        // Place ship in gameboard array vertically\r\n        for (let i = 0; i < ship.length.length; i++) {\r\n          this.gameboard.splice(coordinates, 1, ship.name)\r\n          coordinates = coordinates + skip\r\n        }\r\n      } else {\r\n        this.gameboard.splice(coordinates, unitsToRemove, ...unitsToAdd);\r\n      }\r\n    },\r\n    allShipsSunk: function () {\r\n      if (\r\n        this.carrier.isSunk() == true &&\r\n        this.battleship.isSunk() == true &&\r\n        this.cruiser.isSunk() == true &&\r\n        this.submarine.isSunk() == true &&\r\n        this.destroyer.isSunk() == true\r\n      ) {\r\n        return true;\r\n      } else {\r\n        return false;\r\n      }\r\n    },\r\n    render: function(board, id) {\r\n      // render gameboard\r\n      this.clearUnitsForBoard(board)\r\n\r\n      for (let i = 0; i < this.gameboard.length; i++) {\r\n        const unit = document.createElement('div')\r\n        unit.className = `${this.gameboard[i]}`\r\n        unit.id = `${id}`\r\n        board.appendChild(unit)\r\n        // console.log(this.gameboard[i])\r\n      }\r\n    },\r\n    clearUnitsForBoard: function(board) {\r\n      while (board.firstChild) {\r\n        board.removeChild(board.firstChild)\r\n      }\r\n    }\r\n  };\r\n}\r\n\r\n// Gameboard should have specific ships as properties? like destroyer = new Ship(2)\r\n// Ship sizes: Carrier - 5/ Battleship - 4/ Cruiser - 3/ Submarine - 3/ Destroyer - 2\r\n\r\n/*\r\n    ***** GAMEBOARD DOCS *****\r\no - default/available tile\r\nx - attacked tile/no ship\r\n(shipname) - ship tile\r\n(shipname)x - ship tile that has been attacked\r\n*/\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://battleship/./gameboard.js?");

/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./gameboard.js\");\n\r\n\r\nfunction Player() {\r\n  return {\r\n    gameboard: new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n    aiMove: function () {\r\n      let coordinate = Math.floor(Math.random() * 101);\r\n      let moveArray = [];\r\n      if (moveArray.includes(coordinate)) {\r\n        while (moveArray.includes(coordinate)) {\r\n          coordinate = Math.floor(Math.random() * 101);\r\n        }\r\n        moveArray.push(coordinate);\r\n      } else {\r\n        moveArray.push(coordinate);\r\n      }\r\n      return coordinate;\r\n    },\r\n\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleship/./player.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(lengthOfShip, coordinates, isHorizontal, typeOfShip) {\r\n    return {\r\n        name: typeOfShip,\r\n        length: new Array(lengthOfShip).fill(typeOfShip),\r\n        hits: new Array(lengthOfShip).fill(0),\r\n        location: coordinates,\r\n        horizontal: isHorizontal,\r\n        isSunk: function() {\r\n            let sunk \r\n            this.hits.every(x => x == 1) ? sunk = true : sunk = false\r\n            return sunk\r\n        },\r\n        hit: function(number) {\r\n            this.hits[number] = 1\r\n        },\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard */ \"./gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship */ \"./ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game */ \"./game.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom */ \"./dom.js\");\n\r\n\r\n// import Dom from \"../dom\";\r\n// import Game from \"../game\";\r\n\r\n\r\n\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_4__.startGameButton.addEventListener('click', () => {\r\n\r\n    // Start the game loop from the Game module\r\n    // const playerOne = new Player()\r\n    // console.log(playerOne.gameboard)\r\n    // playerOne.gameboard.insertShip(playerOne.gameboard.carrier)\r\n    // playerOne.gameboard.insertShip(playerOne.gameboard.battleship)\r\n    // playerOne.gameboard.insertShip(playerOne.gameboard.cruiser)\r\n    // playerOne.gameboard.insertShip(playerOne.gameboard.submarine)\r\n    // playerOne.gameboard.insertShip(playerOne.gameboard.destroyer)\r\n    // playerOne.gameboard.render(Dom.playerboardContainer, 'unit')\r\n\r\n    // const ai = new Player()\r\n    // console.log(ai.gameboard)\r\n    // ai.gameboard.insertShip(ai.gameboard.carrier)\r\n    // ai.gameboard.insertShip(ai.gameboard.battleship)\r\n    // ai.gameboard.insertShip(ai.gameboard.cruiser)\r\n    // ai.gameboard.insertShip(ai.gameboard.submarine)\r\n    // ai.gameboard.insertShip(ai.gameboard.destroyer)\r\n    // ai.gameboard.render(Dom.aiBoardContainer, 'enemyUnit')\r\n\r\n    // Dom.giveUnitsEventListener()\r\n    _game__WEBPACK_IMPORTED_MODULE_2__.game()\r\n})\r\n\r\n// Dom.giveUnitsEventListener()\r\n// console.log(Dom.units)\r\n\r\n\r\n// const start = document.getElementById('start')\r\n// start.addEventListener('click', () => {\r\n//     console.log('start button')\r\n//     console.log(playerOne.gameboard.render())\r\n// })\r\n\r\n\r\n\r\n\r\n// const shipOne = Ship(4)\r\n\r\n// console.log(shipOne.hits)\r\n// shipOne.hit(2)\r\n// console.log(shipOne.hits)\r\n// shipOne.hit(3)\r\n// console.log(shipOne.hits)\r\n// shipOne.hit(1)\r\n// console.log(shipOne.hits)\r\n\r\n// shipOne.hit(0)\r\n// console.log(`Ship one hits array: ${shipOne.hits}`)\r\n// console.log(`Ship one length array: ${shipOne.length}`)\r\n// console.log(`Ship one is sunk? : ${shipOne.isSunk()}`)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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