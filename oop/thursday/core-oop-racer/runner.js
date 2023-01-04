// Игральная кость (единственное число).
class Die {
  constructor(sides = 6) {
    this.sides = sides;
  }
  roll() {
    return Math.floor(Math.random() * this.sides) + 1
  }
}

class Game {
  // Тут твой код.
}

class Racer {
  // Тут твой код.
}


// Проверка игральной кости.
const die = new Die();
console.log(`Мне повезёт!!! ${die.roll()}`)

// Старт игры.
const game = new Game();
game.start();