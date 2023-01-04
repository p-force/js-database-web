const fs = require('fs');

const { getPadawanNames } = require('./getPadawanNames');
const { getLightsaberScores } = require('./getLightsaberScores');
const { getStats } = require('./getStats');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
