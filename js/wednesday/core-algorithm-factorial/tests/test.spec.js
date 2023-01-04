const {
    countItter,
    recursiveIter,
    hashIter,
  } = require('../factorial');

  describe("factorial", function() {

  describe("first", function() {
    it("return", function () {
      expect((countItter(5))).toEqual(120);
      expect((countItter(0))).toEqual(1);
      expect((countItter(1))).toEqual(1);
    });
  });

  describe("second", function() {
    it('return',()=>{
      expect(recursiveIter(6)).toEqual(720);
      expect(recursiveIter(0)).toEqual(1);
      expect(recursiveIter(2)).toEqual(2);

      }
    );
    });
    
  describe("second", function() {
      it('return',()=>{
        expect(hashIter(6)).toEqual(720);
        expect(hashIter(0)).toEqual(1);
        expect(hashIter(2)).toEqual(2);
        }
      );
    });
});
