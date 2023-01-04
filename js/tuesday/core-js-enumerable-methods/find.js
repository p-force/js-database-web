function firstUnder(numbers, limit) {
  return numbers.find((el) => el <= limit);
}

function startsWith(strings, letter) {
  return strings.find((el) => el[0] === letter);
}
