// .filter() — возвращает новый массив, элементы которого удовлетворяют условию в callback функции

// const unfiltered = [1, 'hello', 3, 'world', 5, 'elbrus', 7, 8, 'bootcamp', 10];
//
// console.log('======== FILTER STARTED ========');
//
// const filtered = unfiltered.filter((el, index, initialArray) => {
//   console.log({ el, index, initialArray });
//   return typeof el === 'number';
// });
//
// console.log('======== FILTER ENDED ========');
//
// console.log({ unfiltered, filtered });

// .map() — возвращает новый массив. Запускает для каждого элемента callback функцию, которая может
// как-то изменять текущий элемент

// const people = [
//   { id: 1, name: 'Иван Петров' },
//   { id: 2, name: 'Сергей Иванов' },
//   { id: 3, name: 'Алексей Узенюк' },
// ];
//
// const getNames = (el) => {
//   return el.name;
// }
//
// const names = people.map(getNames);
// console.log({ names });
