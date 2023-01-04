const array = ['hello', 'qwerty', 'que pasa amigo', 'elbrus', 'elbrus'];

// .find() — находит первый элемент в массиве
// Вернёт undefined, если не найдется ничего подходящего
const foundValue = array.find((el) => el === 'elbrus');
const nonExistingValue = array.find(el => el === 90);
console.log({ nonExistingValue, foundValue });

// .findIndex() — возвращает индекс первого элемента, удовлетворяющего условию в callback-функции
// Вернёт -1, если не найдется ничего подходящего
const foundIndex = array.findIndex((el) => el === 'elbrus');
const nonExistingIndex = array.findIndex(el => el === 90);
console.log({ nonExistingIndex, foundIndex });
