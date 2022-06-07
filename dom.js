import Game from "./game";

const playerboardContainer = document.getElementById("playerBoard");
const aiBoardContainer = document.getElementById("aiBoard");
const startGameButton = document.getElementById("start");

function giveUnitsEventListener() {
  const units = document.querySelectorAll("#enemyUnit");
  units.forEach((item) => {
    item.addEventListener(
      "click",
      (e) => {
        console.log(e);
        if (e.target.className == "o") {
          e.target.className = "x";
        } else if (
          e.target.className == "carrier" ||
          e.target.className == "battleship" ||
          e.target.className == "cruiser" ||
          e.target.className == "submarine" ||
          e.target.className == "destroyer"
        ) {
          e.target.className = `${e.target.className}x`;
        }
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
