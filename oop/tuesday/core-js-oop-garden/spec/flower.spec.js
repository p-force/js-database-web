const Flower = require('../src/flower');
const Plant = require('../src/plant');

describe('a flower', () => {
  let flower;

  beforeEach(() => {
    flower = new Flower('daffodil', 'yellow');
  });

  test('has a name', () => {
    // Тут твой код.
  });

  test('has a color', () => {
    // Тут твой код.
  });

  test('flower is a plant', () => {
    // Цветок является объектом.
    expect(flower).toBeInstanceOf(Object);
    // Цветок является растением.
    expect(flower).toBeInstanceOf(Plant);
    // Цветок является цветком.
    expect(flower).toBeInstanceOf(Flower);
  });
});
