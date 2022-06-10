import Player from "./player";
import * as Dom from "./dom";
import { aiPlayerArray } from "./random";

let playerOne;
let ai;
let randomBoard;

function startGame() {
  // Initialize players
  playerOne = new Player();

  randomBoard = Math.floor(Math.random() * 5);
  refreshAIBoard(randomBoard);
  ai = aiPlayerArray[randomBoard];

  // setup gameboard ship locations fetch locations from dom module
  playerOne.gameboard.carrier.location = Dom.playerCarrierLocation;
  playerOne.gameboard.carrier.horizontal = Dom.carrierHorizontal;
  playerOne.gameboard.battleship.location = Dom.playerBattleshipLocation;
  playerOne.gameboard.battleship.horizontal = Dom.battleshipHorizontal;
  playerOne.gameboard.cruiser.location = Dom.playerCruiserLocation;
  playerOne.gameboard.cruiser.horizontal = Dom.cruiserHorizontal;
  playerOne.gameboard.submarine.location = Dom.playerSubmarineLocation;
  playerOne.gameboard.submarine.horizontal = Dom.submarineHorizontal;
  playerOne.gameboard.destroyer.location = Dom.playerDestroyerLocation;
  playerOne.gameboard.destroyer.horizontal = Dom.destroyerHorizontal;

  //insert ships into gameboard
  playerOne.gameboard.insertShip(playerOne.gameboard.carrier);
  playerOne.gameboard.insertShip(playerOne.gameboard.battleship);
  playerOne.gameboard.insertShip(playerOne.gameboard.cruiser);
  playerOne.gameboard.insertShip(playerOne.gameboard.submarine);
  playerOne.gameboard.insertShip(playerOne.gameboard.destroyer);

  //render boards
  playerOne.gameboard.render(Dom.playerboardContainer, "unit", true);
  ai.gameboard.render(Dom.aiBoardContainer, "enemyUnit", false);

  // give all units in gameboard grid event listener
  Dom.giveUnitsEventListener(ai.gameboard, playerOne.gameboard);
}

function refreshAIBoard(index) {
  aiPlayerArray[index].gameboard.carrier.hits = [];
  aiPlayerArray[index].gameboard.battleship.hits = [];
  aiPlayerArray[index].gameboard.cruiser.hits = [];
  aiPlayerArray[index].gameboard.submarine.hits = [];
  aiPlayerArray[index].gameboard.destroyer.hits = [];

  aiPlayerArray[index].gameboard.gameboard.forEach(function (
    item,
    index,
    array
  ) {
    if (item == "carrierx") {
      array[index] = "carrier";
    } else if (item == "battleshipx") {
      array[index] = "battleship";
    } else if (item == "cruiserx") {
      array[index] = "cruiser";
    } else if (item == "submarinex") {
      array[index] = "submarine";
    } else if (item == "destroyerx") {
      array[index] = "destroyer";
    } else if (item == "x") {
      array[index] = "o";
    }
  });
}

function checkForWinner(playerboard, aiboard) {
  if (playerboard.allShipsSunk() == true) {
    Dom.header.innerText = "You Lost!";
    //remove gameboard click listeners
    Dom.removeListeners();
  } else if (aiboard.allShipsSunk() == true) {
    Dom.header.innerText = "You Won!";
    //remove gameboard click listeners
    Dom.removeListeners();
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
    element.removeAttribute("id");
  }
  console.log(playerOne.gameboard.gameboard[coordinate]);
  console.log(Dom.playerboardContainer.children[coordinate]);
  console.log(ai.movearray);
  return coordinate;
}

export { startGame, checkForWinner, enemyMove };
