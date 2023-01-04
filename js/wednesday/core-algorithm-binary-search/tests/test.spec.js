const {
    binarySearch
} = require('../binarySearch');

describe("binarySearch", function() {
    it ("test", function() {
    expect(binarySearch(5, [1, 2, 3, 4, 5])).toEqual(4);
    expect(binarySearch(3, [1, 7, 3, 5, 0])).toEqual(2);
    expect(binarySearch(101, [1, 2, 3, 4, 5, 7, 8, 9, 5, 66, 55, 6, 33, 44, 56, 3, 90, 101])).toEqual(17);
    expect(binarySearch(2, [1, 2, 3])).toEqual(1);
    expect(binarySearch(1, [1, 2])).toEqual(0);
    expect(binarySearch(1, [1, 2, 3, 4, 5])).toEqual(0);
    })
})