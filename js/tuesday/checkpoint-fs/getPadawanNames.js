const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').toString().split('\n');

function getPadawanNames() {
  for (let i = 0; i < padawans.length; i++) {
    if (padawans[i].length < 1) {
      padawans.pop(i);
    }
  }
  return (padawans);
}

module.exports.padawans = padawans;
module.exports.getPadawanNames = getPadawanNames;
