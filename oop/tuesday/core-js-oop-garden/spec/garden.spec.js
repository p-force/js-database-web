const Garden = require('../src/garden');
const Flower = require('../src/flower');

describe('the garden object', () => {
  let garden;

  beforeEach(() => {
    garden = new Garden('Kula Botanical Garden', 'Makawao', []);
  });

  test('is named Kula Botanical Garden', () => {
    expect(garden.name).toEqual('Kula Botanical Garden');
  });

  test('is located in Makawao', () => {
    expect(garden.location).toEqual('Makawao');
  });

  describe('has a collection of flowers', () => {
    test('has an empty collection of flowers', () => {
      expect(garden.flowers).toEqual([]);
    });

    describe('adding and removing flowers', () => {
      const daffodil = new Flower('daffodil', 'yellow');
      const iris = new Flower('iris', 'purple');
      const aster = new Flower('aster', 'red');

      beforeEach(() => {
        garden.flowers = [daffodil];
      });

      afterAll(() => {
        garden.flowers = [];
      });


      test('can add a flower to its flowers', () => {
        expect(garden.flowers).toEqual([daffodil]);
        garden.addFlower(iris);
        expect(garden.flowers).toEqual([daffodil, iris]);
      });

      test('can plant multiple flowers', () => {
        expect(garden.flowers).toEqual([daffodil]);
        garden.plant([iris, aster]);
        expect(garden.flowers).toContain(daffodil, iris, aster);
      });

      test('can remove a flower', () => {
        expect(garden.flowers).toEqual([daffodil]);
        garden.remove(daffodil);
        expect(garden.flowers).toEqual([]);
      });
    });

    describe('filtering its flowers', () => {
      test('filters flowers by color', () => {
        const yellowDaffodil = new Flower('daffodil', 'yellow');
        const yellowButtercup = new Flower('buttercup', 'yellow');
        const redAster = new Flower('aster', 'red');

        garden.flowers = [yellowDaffodil, redAster, yellowButtercup];

        expect(garden.flowersByColor('yellow'))
          .toEqual([yellowDaffodil, yellowButtercup]);
      });

      test('filters flowers by name', () => {
        const irisLight = new Flower('iris', 'light-purple');
        const irisDark = new Flower('iris', 'dark-purple');
        const lavender = new Flower('lavender', 'purple');

        garden.flowers = [lavender, irisLight, irisDark];
        expect(garden.flowersByName('iris'))
          .toContain(irisLight);
        expect(garden.flowersByName('iris'))
          .toContain(irisDark);
        
      });
    });
  });
});
