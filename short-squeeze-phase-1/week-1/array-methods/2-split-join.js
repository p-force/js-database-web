// .split() — разбивает строку на массив. Аргументом принимает разделитель (delimiter)
// .join() — склеивает элементы массива в строку. Аргументом принимает separator

const helloString = 'hello world bye world';
const afterSplit = helloString.split(' ');
const afterJoin = afterSplit.join('*');
console.log({ helloString, afterSplit, afterJoin });

//====
//
// const anotherStr = 'hello world! bye world';
// const afterAnotherSplit = anotherStr.split('!');
// // // В массиве оказываются все символы исходной строки, кроме разделителя
// // // Например, в этом примере во втором элементе остается пробел в начале
// console.log({ afterAnotherSplit });
