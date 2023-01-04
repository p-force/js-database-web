const randomNames = require('random-profile-generator');
const fs = require('fs');

function generateNames(num) {
  const path = './results/file.txt';

  for (let i = 0; i < num; i++) {
    fs.appendFileSync(path, randomNames.name());
    fs.appendFileSync(path, '\n');
  }
}

module.exports = { generateNames };
