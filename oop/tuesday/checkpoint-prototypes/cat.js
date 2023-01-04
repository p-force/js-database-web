const Parent = require('./parent');

function Cat(name, age = 1) {
  Parent.call(this, name, age);
}

Cat.prototype.say = function () {
  return ('мяу!');
};

Object.setPrototypeOf(Cat.prototype, Parent.prototype);

module.exports = Cat;
