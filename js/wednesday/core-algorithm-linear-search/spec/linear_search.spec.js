const { linearSearch, globalLinearSearch } = require('../linear_search');

describe("linearSearch()", function() {
  it("returns first index of item in array", function() {
    let item = 3;
    let arr = [1,2,3,4,5];
    expect(linearSearch(item, arr)).toEqual(2);
  });
});

describe("globalLinearSearch()", function() {
  it("returns array indxes of items in array", function() {
    let item = 'a';
    let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
  });
});
