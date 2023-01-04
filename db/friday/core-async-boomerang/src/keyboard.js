const keypress = require('keypress');

function runInteractiveConsole(hero, enemy) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    const keyboard = {
      left: () => hero.moveLeft(),
      right: () => hero.moveRight(),
      up: () => hero.moveUp(),
      down: () => hero.moveDown(),
      c: () => hero.getCoin(),
      space: () => hero.attack(),
      w: () => enemy.moveUp(),
      s: () => enemy.moveDown(),
      a: () => enemy.moveLeft(),
      d: () => enemy.moveRight(),
    };
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// runInteractiveConsole();
module.exports = runInteractiveConsole;
