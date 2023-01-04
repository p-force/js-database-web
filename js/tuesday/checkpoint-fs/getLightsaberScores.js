const fs = require('fs');
let scores = fs.readFileSync('./data/scores.txt', 'utf-8').toString().split('\n');

function getLightsaberScores() {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].length < 1) {
      scores.pop(i);
    }
    scores[i] = Number(scores[i]);
  }
  return (scores);
}

module.exports.scores = scores;
module.exports.getLightsaberScores = getLightsaberScores;
