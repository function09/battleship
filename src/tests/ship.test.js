import Ship from "../modules/logic/ship";

// Clean all of this up
describe("ship functions", () => {
  let destroyer;
  beforeEach(() => {
    destroyer = new Ship(3);
  });

  test("ship takes a single hit", () => {
    expect(destroyer.isHit()).toBe(1);
  });

  describe("additional hits", () => {
    beforeEach(() => {
      destroyer.isHit();
    });
    test("ship takes multiple hits", () => {
      expect(destroyer.isHit()).toBe(2);
    });
  });

  describe("additional hits greater than ship", () => {
    beforeEach(() => {
      destroyer.isHit();
      destroyer.isHit();
      destroyer.isHit();
    });
    test("ship does not take hits greater than length", () => {
      expect(destroyer.isHit()).toBe(3);
    });
  });

  describe("ship sinking", () => {
    beforeEach(() => {
      destroyer.isHit();
      destroyer.isHit();
      destroyer.isHit();
    });
    test("ship is sunk", () => {
      expect(destroyer.sink()).toBe(true);
    });
  });
});
