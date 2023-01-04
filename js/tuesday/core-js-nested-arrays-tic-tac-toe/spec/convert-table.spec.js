const {convertTable} = require('../convert-table')

describe("Board", function () {

  let board;

  let tableData = [
      ["firstName", "lastName", "city", "state"],
      ["Elisabeth", "Gardenar", "Toledo", "OH"],
      ["Jamaal", "Du", "Sylvania", "OH"],
      ["Kathlyn", "Lavoie", "Maumee", "OH"]
    ]
  beforeEach(function () {
        board = convertTable(tableData);
  });

  describe("convert", function () {
    it("test", function () {
      expect(Array.isArray(board)).toEqual(true);
      expect(board[0]).toEqual({
        firstName: 'Elisabeth',
        lastName: 'Gardenar',
        city: 'Toledo',
        state: 'OH'
      });
      expect(board[0]["city"]).toEqual('Toledo');
      let mass = []
      for (let i = 0; i < board.length; i++) {
          expect(board[i]["city"]).toEqual(tableData[i + 1][2]);
      }
    });
  });
});