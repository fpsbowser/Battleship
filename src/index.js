import Gameboard from "../gameboard";
import Ship from "../ship";

const shipOne = Ship(4)

console.log(shipOne.hits)
shipOne.hit(2)
console.log(shipOne.hits)
shipOne.hit(3)
console.log(shipOne.hits)
shipOne.hit(1)
console.log(shipOne.hits)

shipOne.hit(0)
console.log(`Ship one hits array: ${shipOne.hits}`)
console.log(`Ship one length array: ${shipOne.length}`)
console.log(`Ship one is sunk? : ${shipOne.isSunk()}`)