const { searchStraightLineInclude } = require("../wordSearch");

describe("", () => {
  let mass1 = [
    ["z", "f", "u", "b"],
    ["c", "o", "c", "n"],
    ["x", "x", "q", "x"],
  ];
  let mass = [
    ["a", "k", "f", "o", "x", "e", "s"],
    ["s", "o", "a", "w", "a", "h", "p"],
    ["i", "t", "c", "k", "e", "t", "n"],
    ["o", "t", "s", "d", "h", "o", "h"],
    ["s", "e", "x", "g", "s", "t", "a"],
    ["u", "r", "p", "i", "w", "e", "u"],
    ["z", "s", "b", "n", "u", "i", "r"],
  ];

  describe("searchStraightLineInclude COLUMN", () => {
    it("testColumn", () => {
      expect(searchStraightLineInclude("cq", mass1)).toEqual(true);
    });
    it("testColumn1", () => {
      expect(searchStraightLineInclude("fox", mass1)).toEqual(true);
    });
    it("testColumn2", () => {
      expect(searchStraightLineInclude("dgin", mass)).toEqual(true);
    });
    it("testColumn3", () => {
      expect(searchStraightLineInclude("totei", mass)).toEqual(true);
    });
    it("testColumn4", () => {
      expect(searchStraightLineInclude("aehswu", mass)).toEqual(true);
    });
    it("testColumn5", () => {
      expect(searchStraightLineInclude("swu", mass)).toEqual(true);
    });
    it("testColumnREVERSE", () => {
      expect(searchStraightLineInclude("cq".split("").reverse().join(""), mass1)).toEqual(true);
    });
    it("testColumn1REVERSE", () => {
      expect(searchStraightLineInclude("fox".split("").reverse().join(""), mass1)).toEqual(true);
    });
    it("testColumn2REVERSE", () => {
      expect(searchStraightLineInclude("dgin".split("").reverse().join(""), mass)).toEqual(true);
    });
    it("testColumn3REVERSE", () => {
      expect(searchStraightLineInclude("totei".split("").reverse().join(""), mass)).toEqual(true);
    });
    it("testColumn4REVERSE", () => {
      expect(searchStraightLineInclude("aehswu".split("").reverse().join(""), mass)).toEqual(true);
    });
    it("testColumn5REVERSE", () => {
      expect(searchStraightLineInclude("swu".split("").reverse().join(""), mass)).toEqual(true);
    });
  });

  describe("searchStraightLineInclude ROW", () => {
    it("testRow", () => {
      expect(searchStraightLineInclude("cocn", mass1)).toEqual(true);
    });
    it("testRow1", () => {
      expect(searchStraightLineInclude("oc", mass1)).toEqual(true);
    });
    it("testRow2", () => {
      expect(searchStraightLineInclude("foxes", mass)).toEqual(true);
    });
    it("testRow3", () => {
      expect(searchStraightLineInclude("itcketn", mass)).toEqual(true);
    });
    it("testRow4", () => {
      expect(searchStraightLineInclude("gst", mass)).toEqual(true);
    });
    it("testRow5", () => {
      expect(searchStraightLineInclude("iweu", mass)).toEqual(true);
    });
    it("testRow Reverse", () => {
      expect(searchStraightLineInclude("cocn".split("").reverse().join(""), mass1)).toEqual(true);
    });
    it("testRow1 Reverse", () => {
      expect(searchStraightLineInclude("oc".split("").reverse().join(""), mass1)).toEqual(true);
    });
    it("testRow2 Reverse", () => {
      expect(searchStraightLineInclude("foxes".split("").reverse().join(""), mass)).toEqual(true);
    });
    it("testRow3 Reverse", () => {
      expect(searchStraightLineInclude("itcketn".split("").reverse().join(""), mass)).toEqual(true);
    });
    it("testRow4 Reverse", () => {
      expect(searchStraightLineInclude("gst".split("").reverse().join(""), mass)).toEqual(true);
    });
    it("testRow5 Reverse", () => {
      expect(searchStraightLineInclude("iweu".split("").reverse().join(""), mass)).toEqual(true);
    });
  });
});

// xdescribe ('searchSnakingInclude', () => {
//   it('', () => {
//     expect()
//   })

//   it('', () => {
//     expect()
//   })
// })
