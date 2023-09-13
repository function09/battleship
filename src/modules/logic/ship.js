class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.isSunk = false;
  }

  isHit() {
    if (this.hit >= 0 && this.hit < this.length) {
      this.hit += 1;
    } else if (this.hit === this.length) {
      this.hit = this.length;
    }
    return this.hit;
  }

  sink() {
    if (this.hit === this.length) {
      this.isSunk = true;
    } else {
      this.isSunk = false;
    }
    return this.isSunk;
  }
}

export default Ship;
