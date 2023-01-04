/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
  for (let i of str)
  {
    console.log(i);
  }
}

module.exports = logEachLetter
