// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  row: 10,
  column: 10,
});

// Запуск игры.
game.play();
