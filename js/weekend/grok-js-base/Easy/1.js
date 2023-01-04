/*

Создайте функцию, которая принимает в качестве аргументов массив из слов, а возвращает созданное из этих слов предложение.  

Пример: ['I', 'am', 'groot'] => 'I am groot'

*/


const toSentence = (arr) => {
  let str = "";

  for (let i of arr) {
    str = str.concat(i);
    if (i !== arr[arr.length - 1])
      str = str.concat(" ");
  }
  return (str);
}

// console.log(toSentence(["Hello", " ", "World", "!"]));

module.exports = toSentence
