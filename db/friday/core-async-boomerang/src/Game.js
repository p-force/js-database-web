// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const runInteractiveConsole = require('./keyboard');
const View = require('./View');
// const { col } = require('sequelize/types');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ row, column }) {
    this.row = row;
    this.column = column;
    this.hero = new Hero(this.row, this.column); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(this.row, this.column);
    this.view = new View();
    this.track = [];
    // this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (Array.from(Array(this.row), () => new Array(this.column).fill(' _')));

    this.track[this.enemy.y][this.enemy.x] = this.enemy.skin;
    this.track[this.hero.y][this.hero.x] = this.hero.skin;
    this.track[this.hero.coinY][this.hero.coinX] = this.hero.coinSkin;
    if (this.hero.attackFl) {
      while (this.hero.boomerang.x !== this.enemy.x || this.hero.boomerang.x !== this.column - 1) {
        // setTimeout(this.hero.boomerang.moveRight, 10);
        this.hero.boomerang.moveRight();
        this.track[this.hero.y][this.hero.boomerang.x] = this.hero.boomerang.skin;
        if (this.hero.boomerang.x === this.enemy.x && this.hero.y === this.enemy.y) {
          this.enemy.die();
          this.hero.score += 1;
        }
      }
      // if ()
      while (this.hero.boomerang.x !== this.hero.x) {
        this.hero.boomerang.moveLeft();
        // const a = setInterval(() => {
        //   clearInterval(a);
        // }, 500);
        // this.track[this.hero.y][this.hero.boomerang.x] = this.hero.boomerang.skin;
      }
      this.hero.attackFl = false;
    }
    // console.log(this.track);
  }

  check() {
    if (this.hero.x === this.enemy.x && this.hero.y === this.enemy.y) {
      this.hero.die();
    }
    if (this.hero.x === this.hero.coinX && this.hero.y === this.hero.coinY) {
      this.regenerateTrack();
    }
  }

  play() {
    runInteractiveConsole(this.hero, this.enemy);
    setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this);
    }, 50);
  }
}

module.exports = Game;
