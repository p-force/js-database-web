const numberForFactorial = 6
function factorial(num) {
  if (num === 1) { return num }
  return num * factorial(num - 1)
}

console.log(`Factorial of ${numberForFactorial} is ${factorial(numberForFactorial)}`)
console.log(`
==============
`)

const numberForFibonacci = 5
function fibonacci(num) {
  if (num === 2) return 1
  if (num === 1) return 0
  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(`${numberForFibonacci} term in the sequence is ${fibonacci(numberForFibonacci)}`)
