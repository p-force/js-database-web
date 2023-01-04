const Bike = require('../src/bike');
const Station = require('../src/station');

describe('a bike station', function () {
  let station;
  let newerBike;
  let olderBike;

  beforeEach(function () {
    newerBike = new Bike('12345', 'red', 2016);
    olderBike = new Bike('67890', 'blue', 2015);

    station = new Station('Divvy', 'Wood & Division', [newerBike, olderBike]);
  });
``
  test('has a name', function () {
    expect(station.name).toEqual('Divvy');
  });

  test('has a location', function () {
    expect(station.location).toEqual('Wood & Division');
  });

  test('has bikes', function () {
    expect(station.bikes).toEqual([newerBike, olderBike]);
  });

  test('is empty if it has no bikes', function () {
    station.bikes = [];
    expect(station.empty()).toBe(true);
  });

  test('has a newest bike determined by model year', function () {
    expect(station.newestBike()).toEqual(newerBike);
  });

  describe('adding bikes', function () {
    test('takes bikes one at a time', function () {
      station.bikes = [];
      station.take(newerBike);
      expect(station.bikes).toEqual([newerBike]);
    });

    test('takes multiple bikes at the same time', function () {
      bike = { id: '4567', color: 'red', modelYear: 2010 };
      station.bikes = [bike];

      station.takeMultiple([newerBike, olderBike]);
      expect(station.bikes).toEqual([bike, newerBike, olderBike]);
    });
  });

  describe('releasing bikes', function () {
    test('releases its newest bike', function () {
      expect(station.release()).toEqual(newerBike);
    });

    test('does not keep released bikes', function () {
      expect(station.bikes).toContain(newerBike);
      station.release();
      expect(station.bikes).not.toContain(newerBike);
    });

    describe('when the station is empty', function () {
      test('releases nothing', function () {
        station.bikes = [];
        expect(station.release()).toBeUndefined();
      });
    });
  });
});
