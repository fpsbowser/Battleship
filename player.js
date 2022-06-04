import Gameboard from "./gameboard";

function Player() {
  return {
    gameboard: new Gameboard(),
    aiMove: function () {
      let coordinate = Math.floor(Math.random() * 101);
      let moveArray = [];
      if (moveArray.includes(coordinate)) {
        while (moveArray.includes(coordinate)) {
          coordinate = Math.floor(Math.random() * 101);
        }
        moveArray.push(coordinate);
      } else {
        moveArray.push(coordinate);
      }
      return coordinate;
    },

  };
}

export default Player;
