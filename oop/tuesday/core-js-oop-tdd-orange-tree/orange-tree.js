class OrangeTree {
  constructor(age = 1, height = 2.5) {
    this.age = age;
    this.height = height;
    this.oranges = [];
  }

  passGrowingSeason() {
    if (!this.isDead()) {
      this.age += 1;
      if (!this.oranges.length && this.age >= 6) {
        this.oranges = new Array(Math.round(Math.random() * (300 - 100) + 100)).fill(new Orange());
      }
      if (this.height < 25) {
        this.height += 2.5;
      }
    }
  }

  isDead() {
    if (this.age > 99) {
      return true;
    }
    return false;
  }

  isMature() {
    if (this.age >= 6) {
      return true;
    }
    return false;
    //  Returns true if the tree is old enough to bear fruit, false otherwise
  }

  hasOranges() {
    if (this.oranges.length) {
      return (true);
    }
    return false;
    //  Returns true if there are any oranges on the tree, false otherwise
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    } else
      return (this.oranges.pop());
    //  orange-picking logic goes here
  }
}

module.exports = OrangeTree;
