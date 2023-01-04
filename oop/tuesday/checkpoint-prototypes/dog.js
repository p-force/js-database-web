const Parent = require('./parent');

function Dog(name, age = 2) {
  Parent.call(this, name, age);
}

Dog.prototype.say = function () {
  return ('гав!');
};

Object.setPrototypeOf(Dog.prototype, Parent.prototype);
module.exports = Dog;
