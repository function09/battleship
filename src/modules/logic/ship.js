class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.isSunk = false;
  }

  hit = () => {};

  isSunk = () => {};
}

export default Ship;
