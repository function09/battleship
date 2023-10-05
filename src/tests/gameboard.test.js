import Gameboard from "../modules/logic/gameboard";
import Ship from "../modules/logic/ship";

describe("gameboard functions", () => {
  const newGameboard = new Gameboard();
  const newShip = new Ship(3);
  const newShip2 = new Ship(4);
  beforeAll(() => {
    newGameboard.createGameboard();
    newGameboard.placeShip(newShip, [
      [3, 3],
      [3, 4],
      [3, 5],
    ]);
    newGameboard.placeShip(newShip2, [
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
    ]);
  });

  test("places a ship at the specified coordinates", () => {
    expect(newGameboard.gameboardArray[3][3]).toMatchObject(newShip);
    expect(newGameboard.gameboardArray[3][4]).toMatchObject(newShip);
    expect(newGameboard.gameboardArray[3][5]).toMatchObject(newShip);
  });

  test("gameboard receives attack in a coordinate not occupied by a ship and records the missed shot", () => {
    newGameboard.receiveAttack(0, 3);
    expect(newGameboard.gameboardArray[0][3]).toContain("x");
  });

  test("gameboard receives attack in coordinate occupied by a ship", () => {
    newGameboard.receiveAttack(3, 3);
    expect(newShip.hit).toBe(1);
  });

  test("if all ships are sunk return true", () => {
    newGameboard.receiveAttack(3, 4);
    newGameboard.receiveAttack(3, 5);
    newShip.sink();
    expect(newGameboard.allShipsSunk()).toBe(true);
  });
});
