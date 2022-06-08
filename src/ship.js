function Ship(lengthOfShip, coordinates, isHorizontal, typeOfShip) {
  return {
    name: typeOfShip,
    length: new Array(lengthOfShip).fill(typeOfShip),
    hits: [],
    location: coordinates,
    horizontal: isHorizontal,
    isSunk: function () {
      let sunk;
      this.hits.length == this.length.length ? (sunk = true) : (sunk = false);
      return sunk;
    },
    hit: function () {
      this.hits.push(1);
    },
  };
}

export default Ship;
