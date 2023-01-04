const { generateRoster } = require('../roster');
describe("Board", function() {
    let board;
    beforeEach(function() {
      board = generateRoster();
    });

  describe("place header", function() {
    it("nums of mass", function () {
      expect((board[0].length)).toEqual(4);
    });
    it ('first element is "Number"', function () {
      expect((board[0][0])).toEqual('Number');
    }); 
  });

  describe("init board", function() {
    it('Кол-во элементов внутри массива',()=>{
      expect(board.length).toEqual(6);
      for (let i = 0; i < board.length; i++) {
        expect(board[i].length).toEqual(4);
      }
    });
    it("should have an emoji (third element is `Harvey Kay`)", () => {
      expect(board[3][1]).toEqual('Harvey Kay');
    });
    it("should have an emoji (third element is `Power Forward`)", () => {
      expect(board[4][2]).toEqual('Power Forward');
    });
    })
});
