class Gameboard {
  gameboardArray = new Array(10).fill([]);
  missedShots = [];

  createGameboard() {
    for (let i = 0; i < 10; i++) {
      this.gameboardArray[i] = new Array(10);
    }
    return this.gameboardArray;
  }

  placeShip(ship, coordinates) {
    let x;
    let y;
    coordinates.forEach((element) => {
      x = element[0];
      y = element[1];
      this.gameboardArray[x][y] = ship;
    });
    ship.coordinates = coordinates;
  }

  receiveAttack(x, y) {
    if (this.gameboardArray[x][y] === undefined) {
      this.gameboardArray[x][y] = "x";
      this.missedShots.push([x, y]);
    } else if (typeof this.gameboardArray[x][y] === "object") {
      this.gameboardArray[x][y].isHit();
    }
  }

  allShipsSunk() {
    let allSunk = false;

    for (let i = 0; i < this.gameboardArray.length; i++) {
      if (this.gameboardArray[i].every((ship) => ship.isSunk === true)) {
        allSunk = true;
      }
    }
    return allSunk;
  }
}

export default Gameboard;
