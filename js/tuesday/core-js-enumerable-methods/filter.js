function oddNumbers(nums) {
  return nums.filter((el) => el % 2 === 1);
}

function longStrings(strings, minimumLength = 0) {
  return strings.filter((el) => el.length >= minimumLength);
}
