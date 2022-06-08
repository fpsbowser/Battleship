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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aiBoardContainer\": () => (/* binding */ aiBoardContainer),\n/* harmony export */   \"giveUnitsEventListener\": () => (/* binding */ giveUnitsEventListener),\n/* harmony export */   \"playerboardContainer\": () => (/* binding */ playerboardContainer),\n/* harmony export */   \"startGameButton\": () => (/* binding */ startGameButton)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\nconst playerboardContainer = document.getElementById(\"playerBoard\");\nconst aiBoardContainer = document.getElementById(\"aiBoard\");\nconst startGameButton = document.getElementById(\"start\");\n\nstartGameButton.addEventListener(\"click\", () => {\n  (0,_game__WEBPACK_IMPORTED_MODULE_0__.startGame)();\n});\n\nfunction giveUnitsEventListener(enemyBoard, playerboard) {\n  const units = document.querySelectorAll(\"#enemyUnit\");\n  units.forEach((item) => {\n    item.addEventListener(\n      \"click\",\n      function (e) {\n        console.log(enemyBoard, playerboard);\n        // console.log(e);\n        let parent = e.target.parentElement;\n        let index = Array.prototype.indexOf.call(parent.children, e.target);\n        if (e.target.className == \"o\") {\n          e.target.className = \"x\";\n          enemyBoard.recieveAttack(index);\n          playerboard.recieveAttack((0,_game__WEBPACK_IMPORTED_MODULE_0__.enemyMove)());\n        } else if (\n          e.target.className == \"carrier\" ||\n          e.target.className == \"battleship\" ||\n          e.target.className == \"cruiser\" ||\n          e.target.className == \"submarine\" ||\n          e.target.className == \"destroyer\"\n        ) {\n          enemyBoard.recieveAttack(index);\n          playerboard.recieveAttack((0,_game__WEBPACK_IMPORTED_MODULE_0__.enemyMove)());\n          console.log(enemyBoard);\n          e.target.className = `${e.target.className}x`;\n        }\n        (0,_game__WEBPACK_IMPORTED_MODULE_0__.checkForWinner)(playerboard, enemyBoard);\n      },\n      { once: true }\n    );\n  });\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkForWinner\": () => (/* binding */ checkForWinner),\n/* harmony export */   \"enemyMove\": () => (/* binding */ enemyMove),\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random */ \"./src/random.js\");\n\n\n\n\nlet playerOne;\nlet ai;\nlet randomBoard = Math.floor(Math.random() * 5);\n\nfunction startGame() {\n  // Initialize players\n  playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  ai = _random__WEBPACK_IMPORTED_MODULE_2__.aiPlayerArray[randomBoard];\n  console.log(randomBoard);\n\n  // setup gameboard ship locations fetch locations from dom module\n  playerOne.gameboard.insertShip(playerOne.gameboard.carrier);\n  playerOne.gameboard.insertShip(playerOne.gameboard.battleship);\n  playerOne.gameboard.insertShip(playerOne.gameboard.cruiser);\n  playerOne.gameboard.insertShip(playerOne.gameboard.submarine);\n  playerOne.gameboard.insertShip(playerOne.gameboard.destroyer);\n  playerOne.gameboard.render(_dom__WEBPACK_IMPORTED_MODULE_1__.playerboardContainer, \"unit\");\n\n  ai.gameboard.render(_dom__WEBPACK_IMPORTED_MODULE_1__.aiBoardContainer, \"enemyUnit\");\n\n  // give all units in gameboard grid event listener\n  _dom__WEBPACK_IMPORTED_MODULE_1__.giveUnitsEventListener(ai.gameboard, playerOne.gameboard);\n}\n\nfunction checkForWinner(playerboard, aiboard) {\n  if (playerboard.allShipsSunk() == true || aiboard.allShipsSunk() == true) {\n    alert(\"All ships sunk\");\n  }\n}\n\nfunction enemyMove() {\n  const coordinate = ai.aiMove();\n  const element = _dom__WEBPACK_IMPORTED_MODULE_1__.playerboardContainer.children[coordinate];\n\n  if (element.className == \"o\") {\n    element.className = \"x\";\n  } else if (\n    element.className == \"carrier\" ||\n    element.className == \"battleship\" ||\n    element.className == \"cruiser\" ||\n    element.className == \"submarine\" ||\n    element.className == \"destroyer\"\n  ) {\n    element.className = `${playerOne.gameboard.gameboard[coordinate]}x`;\n  }\n  console.log(playerOne.gameboard.gameboard[coordinate]);\n  console.log(_dom__WEBPACK_IMPORTED_MODULE_1__.playerboardContainer.children[coordinate]);\n  console.log(ai.movearray);\n  return coordinate;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nfunction Gameboard() {\n  return {\n    gameboard: new Array(100).fill(\"o\"),\n    carrier: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 42, false, \"carrier\"),\n    battleship: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 26, false, \"battleship\"),\n    cruiser: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 94, true, \"cruiser\"),\n    submarine: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 76, true, \"submarine\"),\n    destroyer: new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 12, false, \"destroyer\"),\n    recieveAttack: function (coordinates) {\n      if (coordinates < 0 || coordinates > 100) {\n        throw \"Invalid coordinate!\";\n      } else if (this.gameboard[coordinates] == \"carrier\") {\n        this.gameboard.splice(coordinates, 1, \"carrierx\");\n        this.carrier.hit(coordinates - this.carrier.location);\n      } else if (this.gameboard[coordinates] == \"battleship\") {\n        this.gameboard.splice(coordinates, 1, \"battleshipx\");\n        this.battleship.hit(coordinates - this.battleship.location);\n      } else if (this.gameboard[coordinates] == \"cruiser\") {\n        this.gameboard.splice(coordinates, 1, \"cruiserx\");\n        this.cruiser.hit(coordinates - this.cruiser.location);\n      } else if (this.gameboard[coordinates] == \"submarine\") {\n        this.gameboard.splice(coordinates, 1, \"submarinex\");\n        this.submarine.hit(coordinates - this.submarine.location);\n      } else if (this.gameboard[coordinates] == \"destroyer\") {\n        this.gameboard.splice(coordinates, 1, \"destroyerx\");\n        this.destroyer.hit(coordinates - this.destroyer.location);\n      } else if (this.gameboard[coordinates] == \"o\") {\n        this.gameboard.splice(coordinates, 1, \"x\");\n      }\n    },\n    insertShip: function (ship) {\n      let coordinates = ship.location;\n      let unitsToRemove = ship.length.length;\n      let unitsToAdd = ship.length;\n\n      if (!ship.horizontal) {\n        let skip = 10;\n        // Place ship in gameboard array vertically\n        for (let i = 0; i < ship.length.length; i++) {\n          this.gameboard.splice(coordinates, 1, ship.name);\n          coordinates = coordinates + skip;\n        }\n      } else {\n        this.gameboard.splice(coordinates, unitsToRemove, ...unitsToAdd);\n      }\n    },\n    allShipsSunk: function () {\n      if (\n        this.carrier.isSunk() == true &&\n        this.battleship.isSunk() == true &&\n        this.cruiser.isSunk() == true &&\n        this.submarine.isSunk() == true &&\n        this.destroyer.isSunk() == true\n      ) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    render: function (board, id) {\n      // render gameboard\n      this.clearUnitsForBoard(board);\n\n      for (let i = 0; i < this.gameboard.length; i++) {\n        const unit = document.createElement(\"div\");\n        unit.className = `${this.gameboard[i]}`;\n        unit.id = `${id}`;\n        board.appendChild(unit);\n        // console.log(this.gameboard[i])\n      }\n    },\n    clearUnitsForBoard: function (board) {\n      while (board.firstChild) {\n        board.removeChild(board.firstChild);\n      }\n    },\n  };\n}\n\n// Gameboard should have specific ships as properties? like destroyer = new Ship(2)\n// Ship sizes: Carrier - 5/ Battleship - 4/ Cruiser - 3/ Submarine - 3/ Destroyer - 2\n\n/*\n    ***** GAMEBOARD DOCS *****\no - default/available tile\nx - attacked tile/no ship\n(shipname) - ship tile\n(shipname)x - ship tile that has been attacked\n*/\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n// import Dom from \"../dom\";\n// import Game from \"../game\";\n\n\n\n\n// Dom.startGameButton.addEventListener('click', () => {\n//     Game.startGame()\n// })\n\n// Dom.giveUnitsEventListener()\n// console.log(Dom.units)\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nfunction Player() {\n  return {\n    gameboard: new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n    movearray: [],\n    aiMove: function () {\n      let coordinate = Math.floor(Math.random() * 100);\n      // let moveArray = [];\n      if (this.movearray.includes(coordinate)) {\n        while (this.movearray.includes(coordinate)) {\n          coordinate = Math.floor(Math.random() * 100);\n        }\n        this.movearray.push(coordinate);\n      } else {\n        this.movearray.push(coordinate);\n      }\n      return coordinate;\n    },\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aiPlayerArray\": () => (/* binding */ aiPlayerArray)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nconst ai = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nai.gameboard.carrier.location = 2;\nai.gameboard.carrier.horizontal = false;\nai.gameboard.insertShip(ai.gameboard.carrier);\n\nai.gameboard.battleship.location = 4;\nai.gameboard.battleship.horizontal = false;\nai.gameboard.insertShip(ai.gameboard.battleship);\n\nai.gameboard.cruiser.location = 71;\nai.gameboard.cruiser.horizontal = true;\nai.gameboard.insertShip(ai.gameboard.cruiser);\n\nai.gameboard.submarine.location = 53;\nai.gameboard.carrier.horizontal = true;\nai.gameboard.insertShip(ai.gameboard.submarine);\n\nai.gameboard.destroyer.location = 9;\nai.gameboard.destroyer.horizontal = false;\nai.gameboard.insertShip(ai.gameboard.destroyer);\n\nconst aiTwo = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\naiTwo.gameboard.carrier.location = 74;\naiTwo.gameboard.carrier.horizontal = true;\naiTwo.gameboard.insertShip(aiTwo.gameboard.carrier);\n\naiTwo.gameboard.battleship.location = 91;\naiTwo.gameboard.battleship.horizontal = true;\naiTwo.gameboard.insertShip(aiTwo.gameboard.battleship);\n\naiTwo.gameboard.cruiser.location = 18;\naiTwo.gameboard.cruiser.horizontal = false;\naiTwo.gameboard.insertShip(aiTwo.gameboard.cruiser);\n\naiTwo.gameboard.submarine.location = 31;\naiTwo.gameboard.carrier.horizontal = false;\naiTwo.gameboard.insertShip(aiTwo.gameboard.submarine);\n\naiTwo.gameboard.destroyer.location = 43;\naiTwo.gameboard.destroyer.horizontal = false;\naiTwo.gameboard.insertShip(aiTwo.gameboard.destroyer);\n\nconst aiThree = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\naiThree.gameboard.carrier.location = 49;\naiThree.gameboard.carrier.horizontal = false;\naiThree.gameboard.insertShip(aiThree.gameboard.carrier);\n\naiThree.gameboard.battleship.location = 90;\naiThree.gameboard.battleship.horizontal = true;\naiThree.gameboard.insertShip(aiThree.gameboard.battleship);\n\naiThree.gameboard.cruiser.location = 15;\naiThree.gameboard.cruiser.horizontal = false;\naiThree.gameboard.insertShip(aiThree.gameboard.cruiser);\n\naiThree.gameboard.submarine.location = 62;\naiThree.gameboard.carrier.horizontal = true;\naiThree.gameboard.insertShip(aiThree.gameboard.submarine);\n\naiThree.gameboard.destroyer.location = 70;\naiThree.gameboard.destroyer.horizontal = false;\naiThree.gameboard.insertShip(aiThree.gameboard.destroyer);\n\nconst aiFour = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\naiFour.gameboard.carrier.location = 51;\naiFour.gameboard.carrier.horizontal = false;\naiFour.gameboard.insertShip(aiFour.gameboard.carrier);\n\naiFour.gameboard.battleship.location = 38;\naiFour.gameboard.battleship.horizontal = false;\naiFour.gameboard.insertShip(aiFour.gameboard.battleship);\n\naiFour.gameboard.cruiser.location = 63;\naiFour.gameboard.cruiser.horizontal = true;\naiFour.gameboard.insertShip(aiFour.gameboard.cruiser);\n\naiFour.gameboard.submarine.location = 84;\naiFour.gameboard.carrier.horizontal = true;\naiFour.gameboard.insertShip(aiFour.gameboard.submarine);\n\naiFour.gameboard.destroyer.location = 12;\naiFour.gameboard.destroyer.horizontal = false;\naiFour.gameboard.insertShip(aiFour.gameboard.destroyer);\n\nconst aiFive = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\naiFive.gameboard.carrier.location = 0;\naiFive.gameboard.carrier.horizontal = true;\naiFive.gameboard.insertShip(aiFive.gameboard.carrier);\n\naiFive.gameboard.battleship.location = 12;\naiFive.gameboard.battleship.horizontal = false;\naiFive.gameboard.insertShip(aiFive.gameboard.battleship);\n\naiFive.gameboard.cruiser.location = 36;\naiFive.gameboard.cruiser.horizontal = false;\naiFive.gameboard.insertShip(aiFive.gameboard.cruiser);\n\naiFive.gameboard.submarine.location = 58;\naiFive.gameboard.carrier.horizontal = true;\naiFive.gameboard.insertShip(aiFive.gameboard.submarine);\n\naiFive.gameboard.destroyer.location = 96;\naiFive.gameboard.destroyer.horizontal = true;\naiFive.gameboard.insertShip(aiFive.gameboard.destroyer);\n\nconst aiPlayerArray = [ai, aiTwo, aiThree, aiFour, aiFive];\n// carrier 5 - battleship 4 - cruiser 3 - submarine 3 - destroyer 2\n\n\n\n\n//# sourceURL=webpack://battleship/./src/random.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(lengthOfShip, coordinates, isHorizontal, typeOfShip) {\n  return {\n    name: typeOfShip,\n    length: new Array(lengthOfShip).fill(typeOfShip),\n    hits: [],\n    location: coordinates,\n    horizontal: isHorizontal,\n    isSunk: function () {\n      let sunk;\n      this.hits.length == this.length.length ? (sunk = true) : (sunk = false);\n      return sunk;\n    },\n    hit: function () {\n      this.hits.push(1);\n    },\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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