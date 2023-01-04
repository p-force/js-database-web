//  1  -  5     8  -  2      -  -  - 
//  -  9  -     -  7  6      4  -  5 
//  2  -  -     4  -  -      8  1  9 

//  -  1  9     -  -  7      3  -  6
//  7  6  2     -  8  3      -  9  -
//  -  -  -     -  6  1      -  5  -

//  -  -  7     6  -  -      -  3  -
//  4  3  -     -  2  -      5  -  1
//  6  -  -     3  -  8      9  -  -

const {
  rowColumnParser,
} = require('./rowColumnParser');

const {
  squareParser,
} = require('./squareParser');

function runSudoku(massSudoku) {
  let isEnd = true;
  while (isEnd) {
    let massEmpties = [];
    for (let i = 0, k = 0; i < massSudoku.length; i++) {
      for (let j = 0; j < massSudoku[i].length; j++) {
        if (!(massSudoku[i][j] >= '0' && massEmpties[i][j] <= '9')) {
          massEmpties[k] = [i, j];
          k++;
        }
      }
    }
    if (massEmpties.length < 1) {
      isEnd = false;
      continue;
    }
    for (let i = 0; i < massEmpties.length; i++) {
      massSudoku = rowColumnParser(massEmpties[i], massSudoku);
      massSudoku = squareParser(massEmpties[i], massSudoku);
    }
  }
  return (massSudoku);
}

runSudoku([
  [
    '1', '-', '5',
    '8', '-', '2',
    '-', '-', '-',
  ],
  [
    '-', '9', '-',
    '-', '7', '6',
    '4', '-', '5',
  ],
  [
    '2', '-', '-',
    '4', '-', '-',
    '8', '1', '9',
  ],
]);

module.exports = { runSudoku };
