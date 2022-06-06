import Player from "./player";


function Game(player) {
    return {
        startNewGame: async function(player) {
            /* Player places all ships on gameboard -> AI board get randomly generated -> player sends attack on AI board
            -> AI sends attack on player board -> when either gameboard ships all sunk is true the game ends
            */
        },
        gameOver: false,
    }
}

export default Game