function Ship(lengthOfShip, coordinates, isHorizontal, typeOfShip) {
    return {
        length: new Array(lengthOfShip).fill(typeOfShip),
        hits: new Array(lengthOfShip).fill(0),
        location: coordinates,
        horizontal: isHorizontal,
        isSunk: function() {
            let sunk 
            this.hits.every(x => x == 1) ? sunk = true : sunk = false
            return sunk
        },
        hit: function(number) {
            this.hits[number] = 1
        },
    }
}



export default Ship