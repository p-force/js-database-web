/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

const randomArr = () => {
  let mass = [];
  for (let i = 0; i < 10; i++)
    mass[i] = parseInt(Math.random() * (10 - 0) + 0);
  return (mass);
}

module.exports = randomArr
