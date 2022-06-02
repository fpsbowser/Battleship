import Gameboard from "./gameboard";

let testboard = Gameboard()
const carrierUnit = 42
const destroyerUnit = 12
testboard.recieveAttack(32)
testboard.insertShip(testboard.carrier)
testboard.insertShip(testboard.destroyer)
testboard.insertShip(testboard.cruiser)
testboard.insertShip(testboard.submarine)
testboard.insertShip(testboard.battleship)
// carrier
testboard.recieveAttack(42)
testboard.recieveAttack(43)
testboard.recieveAttack(44)
testboard.recieveAttack(45)
testboard.recieveAttack(46)
//destroyer
testboard.recieveAttack(12)
testboard.recieveAttack(13)
//cruiser
testboard.recieveAttack(90)
testboard.recieveAttack(91)
testboard.recieveAttack(92)
// submarine
testboard.recieveAttack(82)
testboard.recieveAttack(83)
testboard.recieveAttack(84)
// battleship
testboard.recieveAttack(22)
testboard.recieveAttack(23)
testboard.recieveAttack(24)
testboard.recieveAttack(25)

test('gameboard has 100 units', () => {
    expect(testboard.gameboard.length).toBe(100)
})

test('gameboard filled with o strings', () => {
    expect(testboard.gameboard).toContain('o')
})

test('unit selected doesnt contain ship', () => {
    expect(testboard.gameboard[32]).toContain('x')
})

test('gameboard has carrier with a length of 5 units', () => {
    expect(testboard.carrier.length).toEqual(Array(5).fill('carrier'))
})

test('gameboard has battleship with a length of 4 units', () => {
    expect(testboard.battleship.length).toEqual(Array(4).fill('battleship'))
})

test('gameboard has cruiser with a length of 3 units', () => {
    expect(testboard.cruiser.length).toEqual(Array(3).fill('cruiser'))
})

test('gameboard has submarine with a length of 3 units', () => {
    expect(testboard.submarine.length).toEqual(Array(3).fill('submarine'))
})

test('gameboard has destroyer with a length of 2 units', () => {
    expect(testboard.destroyer.length).toEqual(Array(2).fill('destroyer'))
})

test('display missed attacks', () => {
    expect(testboard.gameboard).toContain('x')
})

test.skip('gameboard has ships', () => {
    expect(testboard.gameboard).toContain('cruiser')
})

test('unit selected contains part of a destroyer ship', () => {
    expect(testboard.gameboard[destroyerUnit]).toContain('destroyer')
})

test('gameboard unit has been updated to show ship was hit', () => {
    expect(testboard.gameboard[carrierUnit]).toBe('carrierx')
})

test('carrier has updated hits array', () => {
    expect(testboard.carrier.hits).toContain(1)
})

test('carrier is sunk', () => {
    expect(testboard.carrier.isSunk()).toBeTruthy()
})

test('all ships for gameboard are sunk?', () => {

    expect(testboard.allShipsSunk()).toBeTruthy()
    // expect(testboard.carrier.isSunk()).toBeTruthy()
    // expect(testboard.destroyer.isSunk()).toBeTruthy()
})

// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.