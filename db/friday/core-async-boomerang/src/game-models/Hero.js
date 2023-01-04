// Наш герой.

// const { col } = require("sequelize/types");
const Boomerang = require('./Boomerang');

class Hero {
  constructor(row, column) {
    this.skin = '💃'; // можете использовать любые emoji '🤠'
    this.coinSkin = '💰';
    this.coin = 0;
    this.row = row;
    this.column = column;
    this.coinX = Math.round(Math.random() * (this.column - 2)) + 0;
    this.coinY = Math.round(Math.random() * (this.row - 2)) + 0;
    this.x = 0; //column
    this.y = 0; //row
    this.score = 0;
    this.boomerang = new Boomerang(this.x);
    this.attackFl = false;
    // this.boomerang = new Boomerang(this.row, this.column, this.hero);
    // this.position = [x, y];
  }

  // Идём влево.
  moveLeft() {
    if (this.x > 0)
      this.x -= 1;
  }

  moveRight() {
    if (this.x < this.column - 1)
      this.x += 1;
  }

  moveUp() {
    if (this.y > 0)
      this.y -= 1;
  }

  moveDown() {
    if (this.y < this.row - 1)
      this.y += 1;
  }

  getCoin() {
    if (this.y === this.coinY && this.x === this.coinX) {
      this.coinX = Math.round(Math.random() * (this.column - 2));
      this.coinY = Math.round(Math.random() * (this.row - 2));
      this.coin += 1;
    }
  }

  attack() {
    // Атакуем.
    this.attackFl = true;
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
