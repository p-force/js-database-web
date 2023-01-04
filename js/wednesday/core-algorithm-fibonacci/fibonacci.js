function febIter(num) {
  let next = 1;
  let prev = 0;
  if (!num)
    return(num)
  for (let i = 1; i < num; i++) {
    next = prev + next;
    prev = next - prev;
  }
  return (next);
}

function febRecur(num) {
  if (num <=1) return num;
  return (febRecur(num - 1) + febRecur(num - 2));
}

function fibMemo(num, memo={}) {
  if (num <=1) return num;
  if (!memo[num-1]) memo[num-1] = fibMemo(num-1,memo)
  if (!memo[num-2]) memo[num-2] = fibMemo(num-2, memo)
  return memo[num-1]+memo[num-2]
}

module.exports = {
  febIter,
  febRecur,
  fibMemo,
}