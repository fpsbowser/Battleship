import { playerboardContainer, header, boardContainer, drag } from "./dom";

const startMenu = () => {
  header.innerText = "Place your ships!";
  for (let index = 0; index < 100; index++) {
    const unit = document.createElement("div");
    unit.className = "o startboard";
    unit.setAttribute("id", "unit");
    playerboardContainer.appendChild(unit);
  }
  console.log(playerboardContainer);
  createShipContainer();
};

function createShipContainer() {
  const shipContainer = document.createElement("div");
  shipContainer.className = "draggableShips";
  // shipContainer.setAttribute('id', 'draggableShips')
  boardContainer.appendChild(shipContainer);

  const carrierContainer = document.createElement("div");
  carrierContainer.className = "carrier-container";
  carrierContainer.setAttribute("draggable", "true");
  carrierContainer.ondragstart = drag;
  carrierContainer.addEventListener("dragend", function (e) {
    if (e.dataTransfer.dropEffect !== "none") {
      carrierContainer.remove();
    }
  });

  const battleshipContainer = document.createElement("div");
  battleshipContainer.className = "battleship-container";
  battleshipContainer.setAttribute("draggable", "true");
  battleshipContainer.ondragstart = drag;
  battleshipContainer.addEventListener("dragend", function (e) {
    if (e.dataTransfer.dropEffect !== "none") {
      battleshipContainer.remove();
    }
  });

  const cruiserContainer = document.createElement("div");
  cruiserContainer.className = "cruiser-container";
  cruiserContainer.setAttribute("draggable", "true");
  cruiserContainer.ondragstart = drag;
  cruiserContainer.addEventListener("dragend", function (e) {
    if (e.dataTransfer.dropEffect !== "none") {
      cruiserContainer.remove();
    }
  });

  const submarineContainer = document.createElement("div");
  submarineContainer.className = "submarine-container";
  submarineContainer.setAttribute("draggable", "true");
  submarineContainer.ondragstart = drag;
  submarineContainer.addEventListener("dragend", function (e) {
    if (e.dataTransfer.dropEffect !== "none") {
      submarineContainer.remove();
    }
  });

  const destroyerContainer = document.createElement("div");
  destroyerContainer.className = "destroyer-container";
  destroyerContainer.setAttribute("draggable", "true");
  destroyerContainer.ondragstart = drag;
  destroyerContainer.addEventListener("dragend", function (e) {
    if (e.dataTransfer.dropEffect !== "none") {
      destroyerContainer.remove();
    }
  });

  for (let index = 0; index < 5; index++) {
    const carrierShip = document.createElement("div");
    carrierShip.className = "starter-carrier";
    carrierContainer.appendChild(carrierShip);
  }
  for (let index = 0; index < 4; index++) {
    const battleship = document.createElement("div");
    battleship.className = "starter-battleship";
    battleshipContainer.appendChild(battleship);
  }
  for (let index = 0; index < 3; index++) {
    const cruiser = document.createElement("div");
    const submarine = document.createElement("div");
    cruiser.className = "starter-cruiser";
    submarine.className = "starter-submarine";
    cruiserContainer.appendChild(cruiser);
    submarineContainer.appendChild(submarine);
  }
  for (let index = 0; index < 2; index++) {
    const destroyer = document.createElement("div");
    destroyer.className = "starter-destroyer";
    destroyerContainer.appendChild(destroyer);
  }

  shipContainer.appendChild(carrierContainer);
  shipContainer.appendChild(battleshipContainer);
  shipContainer.appendChild(cruiserContainer);
  shipContainer.appendChild(submarineContainer);
  shipContainer.appendChild(destroyerContainer);

  const toggleDirectionBtn = document.createElement("button");
  toggleDirectionBtn.innerText = "Rotate";
  toggleDirectionBtn.className = "rotate-btn";
  toggleDirectionBtn.addEventListener("click", () => {
    shipContainer.classList.toggle("horizontalContainer");
    carrierContainer.classList.toggle("horizontal");
    battleshipContainer.classList.toggle("horizontal");
    cruiserContainer.classList.toggle("horizontal");
    submarineContainer.classList.toggle("horizontal");
    destroyerContainer.classList.toggle("horizontal");
  });
  shipContainer.appendChild(toggleDirectionBtn);
}

// function removeShipContainer() {
//     document.getElementById('draggableShips').remove()
//     enemyHeader.innerText = 'Enemy Gameboard'
// }

export { startMenu };
