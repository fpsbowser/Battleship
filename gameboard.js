// import Dom from "./dom";
import Ship from "./ship";
import * as Dom from "./dom"


function Gameboard() {
  return {
    gameboard: new Array(100).fill("o"),
    carrier: new Ship(5, 42, true, "carrier"),
    battleship: new Ship(4, 22, true, "battleship"),
    cruiser: new Ship(3, 90, true, "cruiser"),
    submarine: new Ship(3, 82, true, "submarine"),
    destroyer: new Ship(2, 12, true, "destroyer"),
    recieveAttack: function (coordinates) {
      if (coordinates < 0 || coordinates > 100) {
        throw "Invalid coordinate!";
      } else if (this.gameboard[coordinates] == "carrier") {
        this.gameboard.splice(coordinates, 1, "carrierx");
        this.carrier.hit(coordinates - this.carrier.location);
      } else if (this.gameboard[coordinates] == "battleship") {
        this.gameboard.splice(coordinates, 1, "battleshipx");
        this.battleship.hit(coordinates - this.battleship.location);
      } else if (this.gameboard[coordinates] == "cruiser") {
        this.gameboard.splice(coordinates, 1, "cruiserx");
        this.cruiser.hit(coordinates - this.cruiser.location);
      } else if (this.gameboard[coordinates] == "submarine") {
        this.gameboard.splice(coordinates, 1, "submarinex");
        this.submarine.hit(coordinates - this.submarine.location);
      } else if (this.gameboard[coordinates] == "destroyer") {
        this.gameboard.splice(coordinates, 1, "destroyerx");
        this.destroyer.hit(coordinates - this.destroyer.location);
      } else if (this.gameboard[coordinates] == "o") {
        this.gameboard.splice(coordinates, 1, "x");
      }
    },
    insertShip: function (ship) {
      let coordinates = ship.location;
      let unitsToRemove = ship.length.length;
      let unitsToAdd = ship.length;
      this.gameboard.splice(coordinates, unitsToRemove, ...unitsToAdd);
    },
    allShipsSunk: function () {
      if (
        this.carrier.isSunk() == true &&
        this.battleship.isSunk() == true &&
        this.cruiser.isSunk() == true &&
        this.submarine.isSunk() == true &&
        this.destroyer.isSunk() == true
      ) {
        return true;
      } else {
        return false;
      }
    },
    render: function(board) {
      // render gameboard
      this.clearUnitsForBoard(board)
      for (let i = 0; i < this.gameboard.length; i++) {
        const unit = document.createElement('div')
        unit.className = `${this.gameboard[i]}`
        board.appendChild(unit)
        console.log(this.gameboard[i])
      }
    },
    clearUnitsForBoard: function(board) {
      while (board.firstChild) {
        board.removeChild(board.firstChild)
      }
    }
  };
}

// Gameboard should have specific ships as properties? like destroyer = new Ship(2)
// Ship sizes: Carrier - 5/ Battleship - 4/ Cruiser - 3/ Submarine - 3/ Destroyer - 2

/*
    ***** GAMEBOARD DOCS *****
o - default/available tile
x - attacked tile/no ship
(shipname) - ship tile
(shipname)x - ship tile that has been attacked
*/

export default Gameboard;
