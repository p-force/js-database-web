// Код для первого задания напиши в этой функции
// Для правильного прохождения тестов рекурсивно вызывайте эту функцию так: functions.crawlTree
// В функции crawlTree() можно использовать и рекурсию и циклы одновременно
// Так же в crawlTree нельзя использовать метод flat()

const anotherTree = [
  ["П", "и"],
  ["с", ["т", ["о"]]],
  "л",
  [["е", "т"], [["и", "к"]]],
  "и",
];
function crawlTree(node) {
  let str = "";
  for (let i = 0; i < node.length; i++)
    if (Array.isArray(node[i]))
      str += functions.crawlTree(node[i]);
    else
      str += node[i];
  return (str);
}
// const word = crawlTree(anotherTree);
// Код для второго задания напиши в этой функции
function twoSum(arr, item) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === item)
        ret = [i, j];
    }
  }
  return (ret);
}
const arr = [10, 2, 5, 7, 16, 11, 18, 3, 12];
const target = 8;
console.log(twoSum(arr, target))//).toEqual([2, 7]);

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
