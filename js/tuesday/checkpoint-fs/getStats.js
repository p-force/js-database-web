const getPadawanNames = require('./getPadawanNames');
const getLightsaberScores = require('./getLightsaberScores');

function getStats() {
  let mass = [];
  for (let i = 0; i < getPadawanNames.padawans.length; i++) {
    if (getPadawanNames.padawans[i].length > 1 && getLightsaberScores.scores[i].length > 1) {
    mass[i] = [];
    
    mass[i][0] = getPadawanNames.padawans[i];
    mass[i][1] = Number(getLightsaberScores.scores[i]);
    }
  }
  return (mass);
}

module.exports.getStats = getStats;
