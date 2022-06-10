import Player from "./player";

const ai = new Player();
ai.gameboard.carrier.location = 2;
ai.gameboard.carrier.horizontal = false;
ai.gameboard.insertShip(ai.gameboard.carrier);

ai.gameboard.battleship.location = 4;
ai.gameboard.battleship.horizontal = false;
ai.gameboard.insertShip(ai.gameboard.battleship);

ai.gameboard.cruiser.location = 71;
ai.gameboard.cruiser.horizontal = true;
ai.gameboard.insertShip(ai.gameboard.cruiser);

ai.gameboard.submarine.location = 53;
ai.gameboard.carrier.horizontal = true;
ai.gameboard.insertShip(ai.gameboard.submarine);

ai.gameboard.destroyer.location = 9;
ai.gameboard.destroyer.horizontal = false;
ai.gameboard.insertShip(ai.gameboard.destroyer);

const aiTwo = new Player();
aiTwo.gameboard.carrier.location = 74;
aiTwo.gameboard.carrier.horizontal = true;
aiTwo.gameboard.insertShip(aiTwo.gameboard.carrier);

aiTwo.gameboard.battleship.location = 91;
aiTwo.gameboard.battleship.horizontal = true;
aiTwo.gameboard.insertShip(aiTwo.gameboard.battleship);

aiTwo.gameboard.cruiser.location = 18;
aiTwo.gameboard.cruiser.horizontal = false;
aiTwo.gameboard.insertShip(aiTwo.gameboard.cruiser);

aiTwo.gameboard.submarine.location = 30;
aiTwo.gameboard.carrier.horizontal = false;
aiTwo.gameboard.insertShip(aiTwo.gameboard.submarine);

aiTwo.gameboard.destroyer.location = 43;
aiTwo.gameboard.destroyer.horizontal = false;
aiTwo.gameboard.insertShip(aiTwo.gameboard.destroyer);

const aiThree = new Player();
aiThree.gameboard.carrier.location = 49;
aiThree.gameboard.carrier.horizontal = false;
aiThree.gameboard.insertShip(aiThree.gameboard.carrier);

aiThree.gameboard.battleship.location = 90;
aiThree.gameboard.battleship.horizontal = true;
aiThree.gameboard.insertShip(aiThree.gameboard.battleship);

aiThree.gameboard.cruiser.location = 15;
aiThree.gameboard.cruiser.horizontal = false;
aiThree.gameboard.insertShip(aiThree.gameboard.cruiser);

aiThree.gameboard.submarine.location = 62;
aiThree.gameboard.carrier.horizontal = true;
aiThree.gameboard.insertShip(aiThree.gameboard.submarine);

aiThree.gameboard.destroyer.location = 70;
aiThree.gameboard.destroyer.horizontal = false;
aiThree.gameboard.insertShip(aiThree.gameboard.destroyer);

const aiFour = new Player();
aiFour.gameboard.carrier.location = 51;
aiFour.gameboard.carrier.horizontal = false;
aiFour.gameboard.insertShip(aiFour.gameboard.carrier);

aiFour.gameboard.battleship.location = 38;
aiFour.gameboard.battleship.horizontal = false;
aiFour.gameboard.insertShip(aiFour.gameboard.battleship);

aiFour.gameboard.cruiser.location = 63;
aiFour.gameboard.cruiser.horizontal = true;
aiFour.gameboard.insertShip(aiFour.gameboard.cruiser);

aiFour.gameboard.submarine.location = 84;
aiFour.gameboard.carrier.horizontal = true;
aiFour.gameboard.insertShip(aiFour.gameboard.submarine);

aiFour.gameboard.destroyer.location = 12;
aiFour.gameboard.destroyer.horizontal = false;
aiFour.gameboard.insertShip(aiFour.gameboard.destroyer);

const aiFive = new Player();
aiFive.gameboard.carrier.location = 0;
aiFive.gameboard.carrier.horizontal = true;
aiFive.gameboard.insertShip(aiFive.gameboard.carrier);

aiFive.gameboard.battleship.location = 22;
aiFive.gameboard.battleship.horizontal = false;
aiFive.gameboard.insertShip(aiFive.gameboard.battleship);

aiFive.gameboard.cruiser.location = 36;
aiFive.gameboard.cruiser.horizontal = false;
aiFive.gameboard.insertShip(aiFive.gameboard.cruiser);

aiFive.gameboard.submarine.location = 70;
aiFive.gameboard.carrier.horizontal = true;
aiFive.gameboard.insertShip(aiFive.gameboard.submarine);

aiFive.gameboard.destroyer.location = 96;
aiFive.gameboard.destroyer.horizontal = true;
aiFive.gameboard.insertShip(aiFive.gameboard.destroyer);

const aiPlayerArray = [ai, aiTwo, aiThree, aiFour, aiFive];
// carrier 5 - battleship 4 - cruiser 3 - submarine 3 - destroyer 2

export { aiPlayerArray };
