import { checkForWinner, enemyMove, startGame } from "./game";
import { startMenu } from "./setup";

let aiBoardContainer;
let shipContainer;
let units;
let handler;
const playerboardContainer = document.getElementById("playerBoard");
const gameButton = document.getElementById("button");
const boardContainer = document.getElementById("boardContainer");
const header = document.getElementById("header");
const playerHeader = document.getElementById("playerboard-header");
const enemyHeader = document.getElementById("ship-header");

// Ship data
let playerCarrierLocation;
let carrierHorizontal;

let playerBattleshipLocation;
let battleshipHorizontal;

let playerCruiserLocation;
let cruiserHorizontal;

let playerSubmarineLocation;
let submarineHorizontal;

let playerDestroyerLocation;
let destroyerHorizontal;

gameButton.addEventListener("click", () => {
  if (gameButton.innerText == "Start") {
    header.textContent = `You're up first!`;
    removeShipContainer();
    aiBoardContainer = document.createElement("div");
    aiBoardContainer.setAttribute("id", "aiBoard");
    boardContainer.appendChild(aiBoardContainer);
    startGame();
    gameButton.innerText = "New Game";
    gameButton.className = "restart";
  } else if (gameButton.innerText == "New Game") {
    console.log("new game");
    clearBoard(playerboardContainer);
    clearBoard(aiBoardContainer);
    removeAIBoard();
    startMenu();
    enemyHeader.textContent = "Ships";
    gameButton.innerText = "Start";
    gameButton.className = "start";
  }
});

playerboardContainer.ondragover = allowDrop;
playerboardContainer.ondrop = drop;

function createAIBoard() {
  boardContainer.className = "boardContainer";
  aiBoardContainer = document.createElement("div");
  aiBoardContainer.setAttribute("id", "aiBoard");
  boardContainer.appendChild(aiBoardContainer);
  for (let index = 0; index < 100; index++) {
    const unit = document.createElement("div");
    unit.className = "o";
    unit.setAttribute("id", "enemyUnit");
    aiBoardContainer.appendChild(unit);
  }
}

function removeListeners() {
  units.forEach((item) => {
    item.removeEventListener("click", handler);
    console.log(item);
  });
}

function giveUnitsEventListener(enemyBoard, playerboard) {
  handler = function (e) {
    console.log(enemyBoard, playerboard);
    let parent = e.target.parentElement;
    let index = Array.prototype.indexOf.call(parent.children, e.target);
    if (e.target.className == "o") {
      header.textContent = "Miss!";
      e.target.className = "x";
      enemyBoard.recieveAttack(index);
      playerboard.recieveAttack(enemyMove());
    } else if (
      e.target.className == "carrier" ||
      e.target.className == "battleship" ||
      e.target.className == "cruiser" ||
      e.target.className == "submarine" ||
      e.target.className == "destroyer"
    ) {
      header.textContent = "Hit!";
      enemyBoard.recieveAttack(index);
      playerboard.recieveAttack(enemyMove());
      console.log(enemyBoard);
      e.target.className = `${e.target.className}x`;
    }
    checkForWinner(playerboard, enemyBoard);
  };
  units = document.querySelectorAll("#enemyUnit");
  units.forEach((item) => {
    item.addEventListener("click", handler, { once: true });
  });
}

function removeShipContainer() {
  document.querySelector(".draggableShips").remove();
  enemyHeader.innerText = "Enemy Gameboard";
}

function drag(event) {
  shipContainer = document.querySelector(".draggableShips");
  let parent = event.target.parentElement;
  let index = Array.prototype.indexOf.call(parent.children, event.target);
  event.dataTransfer.setData(
    "text",
    parent.children[index].children[0].className
  );
  console.log(event);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let parent = event.target.parentElement;
  let index = Array.prototype.indexOf.call(parent.children, event.target);
  console.log(index);
  let nextUnit = index + 10;
  let data = event.dataTransfer.getData("text");
  if (data == "starter-carrier") {
    playerCarrierLocation = index;
    carrierHorizontal = false;
    event.target.className = `${data}-placed`;
    console.log(`${data}-placed`);
    let unit = event.target.nextSibling;
    for (let index = 0; index < 4; index++) {
      if (shipContainer.classList.contains("horizontalContainer")) {
        carrierHorizontal = true;
        unit.className = `${data}-placed`;
        unit = unit.nextSibling;
      } else {
        parent.children[nextUnit].className = `${data}-placed`;
        nextUnit += 10;
      }
    }
  } else if (data == "starter-battleship") {
    playerBattleshipLocation = index;
    battleshipHorizontal = false;
    event.target.className = `${data}-placed`;
    let unit = event.target.nextSibling;
    for (let index = 0; index < 3; index++) {
      if (shipContainer.classList.contains("horizontalContainer")) {
        battleshipHorizontal = true;
        unit.className = `${data}-placed`;
        unit = unit.nextSibling;
      } else {
        parent.children[nextUnit].className = `${data}-placed`;
        nextUnit += 10;
      }
    }
  } else if (data == "starter-cruiser") {
    playerCruiserLocation = index;
    cruiserHorizontal = false;
    event.target.className = `${data}-placed`;
    let unit = event.target.nextSibling;
    for (let index = 0; index < 2; index++) {
      if (shipContainer.classList.contains("horizontalContainer")) {
        cruiserHorizontal = true;
        unit.className = `${data}-placed`;
        unit = unit.nextSibling;
      } else {
        parent.children[nextUnit].className = `${data}-placed`;
        nextUnit += 10;
      }
    }
  } else if (data == "starter-submarine") {
    playerSubmarineLocation = index;
    submarineHorizontal = false;
    event.target.className = `${data}-placed`;
    let unit = event.target.nextSibling;
    for (let index = 0; index < 2; index++) {
      if (shipContainer.classList.contains("horizontalContainer")) {
        submarineHorizontal = true;
        unit.className = `${data}-placed`;
        unit = unit.nextSibling;
      } else {
        parent.children[nextUnit].className = `${data}-placed`;
        nextUnit += 10;
      }
    }
  } else if (data == "starter-destroyer") {
    playerDestroyerLocation = index;
    destroyerHorizontal = false;
    event.target.className = `${data}-placed`;
    let unit = event.target.nextSibling;
    for (let index = 0; index < 1; index++) {
      if (shipContainer.classList.contains("horizontalContainer")) {
        destroyerHorizontal = true;
        unit.className = `${data}-placed`;
        unit = unit.nextSibling;
      } else {
        parent.children[nextUnit].className = `${data}-placed`;
        nextUnit += 10;
      }
    }
  }
}

function clearBoard(board) {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function removeAIBoard() {
  while (aiBoardContainer.firstChild) {
    aiBoardContainer.firstChild.className = "o";
    aiBoardContainer.removeChild(aiBoardContainer.firstChild);
  }
  boardContainer.removeChild(aiBoardContainer);
}

export {
  playerboardContainer,
  gameButton,
  aiBoardContainer,
  giveUnitsEventListener,
  boardContainer,
  header,
  enemyHeader,
  drag,
  playerCarrierLocation,
  carrierHorizontal,
  playerBattleshipLocation,
  battleshipHorizontal,
  playerCruiserLocation,
  cruiserHorizontal,
  playerSubmarineLocation,
  submarineHorizontal,
  playerDestroyerLocation,
  destroyerHorizontal,
  removeListeners,
  createAIBoard,
};
