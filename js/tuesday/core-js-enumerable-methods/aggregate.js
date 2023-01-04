function sum(arrayNumbers, sum = 0) {
  return arrayNumbers.reduce((acc, cur) => (acc += cur), sum);
}
