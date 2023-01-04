const {
    febIter,
    febRecur,
    fibMemo,
  } = require('../fibonacci');

  describe("factorial", function() {

  describe("first", function() {
    it("return", function () {
      expect((febIter(5))).toEqual(5);
      expect((febIter(0))).toEqual(0);
      expect((febIter(1))).toEqual(1);
    });
  });

  describe("second", function() {
    it('return',()=>{
      expect(febRecur(6)).toEqual(8);
      expect(febRecur(0)).toEqual(0);
      expect(febRecur(2)).toEqual(1);

      }
    );
    });
    
  describe("third", function() {
      it('return',()=>{
        expect(fibMemo(9)).toEqual(34);
        expect(fibMemo(0)).toEqual(0);
        expect(fibMemo(12)).toEqual(144);
        }
      );
    });
});
