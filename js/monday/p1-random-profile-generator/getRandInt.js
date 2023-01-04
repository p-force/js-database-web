const { generateNames } = require('./generateName');

function getRandomInteger() {
  generateNames(Math.floor(Math.random() * 20));
}

module.exports = { getRandomInteger };
