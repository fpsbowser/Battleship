import Player from "./player";
import * as Dom from "./dom"

function game(player) {
   
    const playerOne = new Player()
    console.log(playerOne.gameboard)
    playerOne.gameboard.insertShip(playerOne.gameboard.carrier)
    playerOne.gameboard.insertShip(playerOne.gameboard.battleship)
    playerOne.gameboard.insertShip(playerOne.gameboard.cruiser)
    playerOne.gameboard.insertShip(playerOne.gameboard.submarine)
    playerOne.gameboard.insertShip(playerOne.gameboard.destroyer)
    playerOne.gameboard.render(Dom.playerboardContainer, 'unit')

    const ai = new Player()
    console.log(ai.gameboard)
    ai.gameboard.insertShip(ai.gameboard.carrier)
    ai.gameboard.insertShip(ai.gameboard.battleship)
    ai.gameboard.insertShip(ai.gameboard.cruiser)
    ai.gameboard.insertShip(ai.gameboard.submarine)
    ai.gameboard.insertShip(ai.gameboard.destroyer)
    ai.gameboard.render(Dom.aiBoardContainer, 'enemyUnit')

    Dom.giveUnitsEventListener()
   
   
   
   
   
    // return {
    //     startNewGame: async function(player) {
    //         /* Player places all ships on gameboard -> AI board get randomly generated -> player sends attack on AI board
    //         -> AI sends attack on player board -> when either gameboard ships all sunk is true the game ends
    //         */
           
    //     },
    //     gameOver: false,
    // }
}

// export default Game

export {
    game,
  };