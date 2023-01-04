const Bike = require('../src/bike');

describe('a bike', function () {
  let bike;

  beforeEach(function () {
    bike = new Bike(12847390, 'red', 2016);
  });

  test('has an id number', function () {
    expect(bike.id).toEqual(12847390);
  });

  test('has a color', function () {
    expect(bike.color).toEqual('red');
  });

  test('has a model year', function () {
    expect(bike.modelYear).toEqual(2016);
  });
});
