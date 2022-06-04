import Player from "./player";


function Game(player) {
    return {
        player: player,
        computer: new Player,
        gameOver: false,
    }
}

export default Game