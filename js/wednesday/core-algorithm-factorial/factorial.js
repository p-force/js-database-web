function countItter(num) {
  let count = 1;
  for (let i = num; i >= 0; i--) {
    if (i < 2)
      return (count);
    count *= i;
  }
}

function recursiveIter(num) {
  if (num < 2)
    return (1);
  return (num * recursiveIter(--num));
}

function hashIter(num, memo={}) {
  let ret = num;
  if (num < 2) return (1);
  if (!memo[num]) 
    memo[num] = num * hashIter(--num, memo);
  return (memo[ret]);
}

module.exports = {
  countItter,
  recursiveIter,
  hashIter,
};