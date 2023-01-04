const {generateTicTacToe} = require('../tic-tac-toe')

describe("Board", function () {

  let board;

  beforeEach(function () {
    board = generateTicTacToe();
  });

  describe("tic-tac-toe", function () {
    it("test", function () {
      expect(Array.isArray(board)).toEqual(true);
      expect(board.flat(1).includes('X')).toEqual(true);
      expect(board.flat(1).includes('0')).toEqual(true);
    });
  });
});

