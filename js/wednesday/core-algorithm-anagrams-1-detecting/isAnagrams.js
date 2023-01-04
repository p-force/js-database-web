// function isAnagrams(word1, word2) {
//   // return (!word1.split('').reverse().map((el, i) => el === word2[i]).includes(false)); палиндром
//   return (!word1.toLowerCase().split('').map(el => {
//     if (word2.includes(el)) {
//       let w2 = word2.split('');
//       w2.splice(word2.indexOf(el), 1);
//       word2 = w2.join('');
//     }
//     else return (false);
//   }).includes(false) && word1.length !== word2.length);
// }

function isAnagrams(w1, w2) {
  return (w1.split('').sort().join('') === w2.split('').sort().join(''));
}

console.log(isAnagrams('lemon', 'llmno'));

module.exports = { isAnagrams };