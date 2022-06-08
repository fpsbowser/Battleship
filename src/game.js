import Player from "./player";
import * as Dom from "./dom";
import { aiPlayerArray } from "./random";

let playerOne;
let ai;
let randomBoard = Math.floor(Math.random() * 5);

function startGame() {
  // Initialize players
  playerOne = new Player();
  ai = aiPlayerArray[randomBoard];
  console.log(randomBoard);

  // setup gameboard ship locations fetch locations from dom module
  playerOne.gameboard.insertShip(playerOne.gameboard.carrier);
  playerOne.gameboard.insertShip(playerOne.gameboard.battleship);
  playerOne.gameboard.insertShip(playerOne.gameboard.cruiser);
  playerOne.gameboard.insertShip(playerOne.gameboard.submarine);
  playerOne.gameboard.insertShip(playerOne.gameboard.destroyer);
  playerOne.gameboard.render(Dom.playerboardContainer, "unit");

  ai.gameboard.render(Dom.aiBoardContainer, "enemyUnit");

  // give all units in gameboard grid event listener
  Dom.giveUnitsEventListener(ai.gameboard, playerOne.gameboard);
}

function checkForWinner(playerboard, aiboard) {
  if (playerboard.allShipsSunk() == true || aiboard.allShipsSunk() == true) {
    alert("All ships sunk");
  }
}

function enemyMove() {
  const coordinate = ai.aiMove();
  const element = Dom.playerboardContainer.children[coordinate];

  if (element.className == "o") {
    element.className = "x";
  } else if (
    element.className == "carrier" ||
    element.className == "battleship" ||
    element.className == "cruiser" ||
    element.className == "submarine" ||
    element.className == "destroyer"
  ) {
    element.className = `${playerOne.gameboard.gameboard[coordinate]}x`;
  }
  console.log(playerOne.gameboard.gameboard[coordinate]);
  console.log(Dom.playerboardContainer.children[coordinate]);
  console.log(ai.movearray);
  return coordinate;
}

export { startGame, checkForWinner, enemyMove };
