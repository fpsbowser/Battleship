import { checkForWinner, enemyMove, startGame } from "./game";
import Gameboard from "./gameboard";

const playerboardContainer = document.getElementById("playerBoard");
const aiBoardContainer = document.getElementById("aiBoard");
const startGameButton = document.getElementById("start");

startGameButton.addEventListener("click", () => {
  startGame();
});

function giveUnitsEventListener(enemyBoard, playerboard) {
  const units = document.querySelectorAll("#enemyUnit");
  units.forEach((item) => {
    item.addEventListener(
      "click",
      function (e) {
        console.log(enemyBoard, playerboard);
        // console.log(e);
        let parent = e.target.parentElement;
        let index = Array.prototype.indexOf.call(parent.children, e.target);
        if (e.target.className == "o") {
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
          enemyBoard.recieveAttack(index);
          playerboard.recieveAttack(enemyMove());
          console.log(enemyBoard);
          e.target.className = `${e.target.className}x`;
        }
        checkForWinner(playerboard, enemyBoard);
      },
      { once: true }
    );
  });
}

export {
  playerboardContainer,
  startGameButton,
  aiBoardContainer,
  giveUnitsEventListener,
};
