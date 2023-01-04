function generateTicTacToe() {
  let mass = [];
  let count = 0;
  for (let i = 0; i < 3; i++) {
    mass[i] = [];
    for (let j = 0; j < 3; j++) {
      if (Math.round(Math.random()) === 0) {
        count++;
        count <= 4 ? mass[i].push('0') : mass[i].push('X');
        continue;
      }
      mass[i].push('X');
    }
  }
  return (mass);
}

module.exports = { generateTicTacToe };