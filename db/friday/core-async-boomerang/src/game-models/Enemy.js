// Враг.

// const { col } = require("sequelize/types");

class Enemy {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.x = column - 1;
    this.y = 0;
    this.generateSkin();
  }

  generateSkin() {
    const skins = ['👾', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    if (this.x > 0) { this.x -= 1; }
  }

  moveRight() {
    if (this.x < this.column - 1) { this.x += 1; }
  }

  moveUp() {
    if (this.y > 0) { this.y -= 1; }
  }

  moveDown() {
    if (this.y < this.row - 1) { this.y += 1; }
  }

  die() {
    console.log('Enemy is dead!');
    this.x = this.column - 1;
    this.y = Math.round(Math.random() * (this.row - 2));
    this.generateSkin();
  }
}

module.exports = Enemy;
