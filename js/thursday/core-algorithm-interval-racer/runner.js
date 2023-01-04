// метод для случайного броска кубика
const dice = {
  roll:function rollDice() {
    return Math.floor(Math.random() * 6) + 1
  }
}

console.log(`мне повезет!!! ${dice.roll()}`)

function game() {
  // тут твой код
}

function whoWon() {
}


// вызывает игру
game();
