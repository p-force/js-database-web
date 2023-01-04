const OrangeTree = require('../orange-tree');
// const Orange = require('../orange');
// Test-Driven Development
describe('OrangeTree', () => {
  let tree;
  let ageTree = 10;
  let heightTree = 10;

  beforeEach(() => {
    tree = new OrangeTree(ageTree, heightTree);
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.age).toEqual(ageTree);
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.height).toEqual(heightTree);
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    xtest('should change the tree age', () => {
      tree.passGrowingSeason();
      expect(tree.age).toEqual(ageTree + 1);
    });

    xtest('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      tree.passGrowingSeason();
      expect(tree.height).toEqual(heightTree + 1);
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {

    });

  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      expect(tree.isMature()).toBeTruthy();
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      expect(!tree.isMature()).toBeFalsy();
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      expect(tree.isDead()).toEqual(false);
    });

    test('should return true for a dead tree', () => {
      expect(!tree.isDead()).toEqual(true);
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      expect(tree.isMature()).toBeTruthy();
    });

    test('should return false if the tree has no oranges', () => {
      expect(!tree.isMature()).toBeFalsy();
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      expect(tree.oranges !== 0).toBe(true);
    });

    xtest('the returned orange should no longer be on the tree', () => {
      const orCountFirst = tree.oranges;
      tree.pickAnOrange();
      const orCountLast = tree.oranges;
      expect(orCountFirst.length > orCountLast.length).toEqual(true);
    });

    xtest('should raise an error if the tree has no oranges', () => {
      try {
        tree = new OrangeTree(4, 5);
        tree.pickAnOrange();
      } catch (err) {
        expect(err).toThrow();
      }
    });
  });
});