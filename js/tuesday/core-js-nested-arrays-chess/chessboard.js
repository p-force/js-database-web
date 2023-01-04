function generateChessboard() {
  const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
  const pawns = new Array(8).fill('Пешка');

  let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    switch (i) {
      case 0: {
        for (let j = 0; j < 8; j++)
          board[i][j] = `Ч ${figures[j]}`;
        break;
      }
      case 7: {
        for (let j = 0; j < 8; j++)
          board[i][j] = `Б ${figures[j]}`;
        break;
      }
      case 1: {
        for (let j = 0; j < 8; j++)
          board[i][j] = `Ч ${pawns[j]}`;
        break;
      }
      case 6: {
        for (let j = 0; j < 8; j++)
          board[i][j] = `Б ${pawns[j]}`;
        break;
      }
      default: {
        for (let j = 0; j < 8; j++)
          board[i][j] = null;
      }
    };
  }
  return (board);
}

function renderChessboard() {
  const emojis = {
    'Б Ферзь': '♕',
    'Б Король': '♔',
    'Б Слон': '♗',
    'Б Конь': '♘',
    'Б Ладья': '♖',
    'Б Пешка': '♙',
    'Ч Ферзь': '♛',
    'Ч Король': '♚',
    'Ч Слон': '♝',
    'Ч Конь': '♞',
    'Ч Ладья': '♜',
    'Ч Пешка': '♟'
  }
  let board = generateChessboard();
  for (let i = 0; i < board.length; i++) {
    if (i < 2 || i > 5)
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = emojis[board[i][j]];
      }
  }
  let str = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      str += board[i][j];
    }
    str += "\n";
  }
  return (str);
}
module.exports = { generateChessboard, renderChessboard };
