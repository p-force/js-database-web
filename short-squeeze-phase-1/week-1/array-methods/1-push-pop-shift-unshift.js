// .unshift() — добавляет в начало. Возвращает новую длину. Мутирует массив
// .push() — добавляет в конец. Возвращает новую длину. Мутирует массив
// .pop() — удаляет последний элемент и возвращает его. Мутирует массив
// .shift() — удаляет первый элемент и возвращает его. Мутирует массив

const array = ['qwerty', 'ab', 'xyz'];
const returnedFromPush = array.push(10);
const returnedFromPop = array.pop();

console.log({ array, returnedFromPush, returnedFromPop });
