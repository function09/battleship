class Gameboard {
  gameboard = new Array(10);
  missedShots = [];

  createGameboard() {
    for (let i = 0; i < this.gameboard.length; i++) {
      this.gameboard[i] = new Array(10);
      return this.gameboard;
    }
  }

  placeShip(ship, coordinates) {
    let x;
    let y;
    coordinates.forEach((element) => {
      x = element[0];
      y = element[1];
      this.gameboard[x][y] = ship;
    });

    ship.coordinates = coordinates;
  }

  receiveAttack(x, y) {
    if (this.gameboard[x][y] === undefined) {
      this.gameboard[x][y] = "x";
      this.missedShots.push([x, y]);
    } else if (typeof this.gameboard[x][y] === "object") {
      return this.gameboard[x][y].hit++;
    }
  }
}

export default Gameboard;
