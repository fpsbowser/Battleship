import Game from "./game"


// const start = document.getElementById('start')
// start.addEventListener('click', () => {
//     console.log('start button')
    
// })


// function Dom() {
//     return {
//         playerGameboardContainer: document.getElementById('playerBoard'),
//         test: console.log()
//     }
// }

// export default Dom


const playerboardContainer = document.getElementById('playerBoard')
const aiBoardContainer = document.getElementById('aiBoard')
const startGameButton = document.getElementById('start')



export {
    playerboardContainer,
    startGameButton,
    aiBoardContainer,
}