// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(heroX) {
    this.skin = '🌀';
    this.direction = true;
    this.x = heroX;
  }

  fly() {
    if (this.direction) { this.moveRight(); } else { this.moveLeft(); }
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }
}

module.exports = Boomerang;
