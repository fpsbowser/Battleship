import Player from "./player";
let player1 = new Player();
let computer = new Player();
player1.gameboard.carrier.location = 46;
player1.gameboard.insertShip(player1.gameboard.carrier);
player1.gameboard.recieveAttack(41);
computer.gameboard.insertShip(computer.gameboard.battleship);
let randomNumber = player1.aiMove();

test("player exists", () => {
  expect(player1.gameboard).toBeDefined();
});

test("computer exists", () => {
  expect(computer.gameboard).toBeDefined();
});

test("players board has carrier", () => {
  expect(player1.gameboard.gameboard).toContain("carrier");
});

test("computer board has battleship", () => {
  expect(computer.gameboard.gameboard).toContain("battleship");
});

test("unit contains players carrier", () => {
  expect(player1.gameboard.gameboard[48]).toEqual("carrier");
});

test("player has a gameboard filled with strings", () => {
  expect(player1.gameboard.gameboard).toContain("o");
});

test("player gameboard can recieve attack", () => {
  expect(player1.gameboard.gameboard[41]).toBe("x");
});

test("player can send random attack", () => {
  expect(isNaN(randomNumber)).toBeFalsy();
});
