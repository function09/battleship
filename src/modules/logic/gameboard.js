class Gameboard {
  gameboard = new Array(10);

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
      this.gameboard[x][y] = "X";
    });

    ship.position = coordinates;
  }
}

export default Gameboard;
