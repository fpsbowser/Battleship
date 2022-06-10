import Gameboard from "./gameboard";

function Player() {
  return {
    gameboard: new Gameboard(),
    movearray: [],
    aiMove: function () {
      let coordinate = Math.floor(Math.random() * 100);
      if (this.movearray.includes(coordinate)) {
        while (this.movearray.includes(coordinate)) {
          coordinate = Math.floor(Math.random() * 100);
        }
        this.movearray.push(coordinate);
      } else {
        this.movearray.push(coordinate);
      }
      return coordinate;
    },
  };
}

export default Player;
