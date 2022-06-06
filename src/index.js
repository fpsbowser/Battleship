import Gameboard from "../gameboard";
import Ship from "../ship";
// import Dom from "../dom";
import Game from "../game";
import Player from "../player";
import * as Dom from "../dom";

Dom.startGameButton.addEventListener('click', () => {

    // Start the game loop from the Game module
    const playerOne = new Player()
    console.log(playerOne.gameboard)
    playerOne.gameboard.insertShip(playerOne.gameboard.carrier)
    playerOne.gameboard.insertShip(playerOne.gameboard.battleship)
    playerOne.gameboard.insertShip(playerOne.gameboard.cruiser)
    playerOne.gameboard.insertShip(playerOne.gameboard.submarine)
    playerOne.gameboard.insertShip(playerOne.gameboard.destroyer)
    playerOne.gameboard.render(Dom.playerboardContainer)

    const ai = new Player()
    console.log(ai.gameboard)
    ai.gameboard.insertShip(ai.gameboard.carrier)
    ai.gameboard.insertShip(ai.gameboard.battleship)
    ai.gameboard.insertShip(ai.gameboard.cruiser)
    ai.gameboard.insertShip(ai.gameboard.submarine)
    ai.gameboard.insertShip(ai.gameboard.destroyer)
    ai.gameboard.render(Dom.aiBoardContainer)
})



// const start = document.getElementById('start')
// start.addEventListener('click', () => {
//     console.log('start button')
//     console.log(playerOne.gameboard.render())
// })




// const shipOne = Ship(4)

// console.log(shipOne.hits)
// shipOne.hit(2)
// console.log(shipOne.hits)
// shipOne.hit(3)
// console.log(shipOne.hits)
// shipOne.hit(1)
// console.log(shipOne.hits)

// shipOne.hit(0)
// console.log(`Ship one hits array: ${shipOne.hits}`)
// console.log(`Ship one length array: ${shipOne.length}`)
// console.log(`Ship one is sunk? : ${shipOne.isSunk()}`)