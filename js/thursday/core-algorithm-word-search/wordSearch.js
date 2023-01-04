function searchColumn(puzzle, countI, word) {
  for (let k = 1; k < word.length; k++) {
    for (let i = countI[0]; i < puzzle.length; i++) {
      if (word[k] !== puzzle[i][countI[1]])
        return (false);
      if () {
         
      }
    }
    break;
  }
  return (true);
}

function searchRow(puzzle, countI, word) {
  for (let k = 1; k < word.length; k++) {
    for (let j = countI[1]; j < puzzle.length; j++)
      if (!word[k] === puzzle[countI[0]][j])
        return (false);
    return (true);
  }
    return(true);
}

function searchDiagonal(puzzle, countI, word) {
  let i = countI[0];
    for (j = countI[1], k = 0; i < puzzle.length, j < puzzle[i].length, k < word.length; i++, j++)
    {
      if (word[k] !== puzzle[i][j])
        return (false);
      k++;
    }

    return (true);
}

function searchStraightLineInclude(word, puzzle) {
    let count = [];
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0, k = 0; j < puzzle[i].length; j++) {
            if (puzzle[i][j] === word[0]) {
                count[k] = [];
                count[k].push(i);
                count[k].push(j);
                k++;
            }
        }
    }
    for (let i = 0; i < count.length; i++) {
        if (searchColumn(puzzle, count[i], word))
            return (true);
        if (searchRow(puzzle, count[i], word))
            return (true);
        if (searchDiagonal(puzzle, count[i], word))
            return (true);
    }
    return (false);
}

function searchSnakingInclude(word, puzzle) {

}

console.log(searchStraightLineInclude("res",
[
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"]
]));

module.exports = { searchStraightLineInclude };