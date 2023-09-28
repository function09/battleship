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
    expect(newGameboard.gameboard[0][0]).toContain("X");
    expect(newGameboard.gameboard[0][1]).toContain("X");
    expect(newGameboard.gameboard[0][2]).toContain("X");
  });
});
