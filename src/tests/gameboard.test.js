import Gameboard from "../modules/logic/gameboard";
import Ship from "../modules/logic/ship";

describe("gameboard functions", () => {
  const newGameboard = new Gameboard();
  const newShip = new Ship(3);
  beforeAll(() => {
    newGameboard.createGameboard();
    newGameboard.placeShip(newShip, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
  });

  test("places a ship at the specified coordinates", () => {
    expect(newGameboard.gameboard[0][0]).toMatchObject(newShip);
    expect(newGameboard.gameboard[0][1]).toMatchObject(newShip);
    expect(newGameboard.gameboard[0][2]).toMatchObject(newShip);
  });

  test("returns a ships coordinates", () => {
    expect(newShip.coordinates).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
  });

  test("gameboard receives attack in a coordinate not occupied by a ship and records the missed shot", () => {
    newGameboard.receiveAttack(0, 3);
    expect(newGameboard.gameboard[0][3]).toContain("x");
    expect(newGameboard.missedShots).toContainEqual([0, 3]);
  });

  test("gameboard receives attack in coordinate occupied by a ship", () => {
    newGameboard.receiveAttack(0, 0);
    expect(newGameboard.receiveAttack(0, 0)).toBe(1);
  });
});
