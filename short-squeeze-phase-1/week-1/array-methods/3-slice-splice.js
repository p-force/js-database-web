// .slice() — возвращает новый массив (косок массива)

// const darthVader = ['luke', 'i', 'am', 'your', 'father'];
// const slicedDarthVader = darthVader.slice(2, 4);
// console.log({ darthVader, slicedDarthVader });

// Также часто используется для поверхностного копирования массива
// const copiedDarthVader = darthVader.slice();
// console.log({ darthVader, copiedDarthVader });
// console.log('РЕЗУЛЬТАТ СРАВНЕНИЯ:', copiedDarthVader === darthVader); // false

// .splice() — возвращает массив удаленных элементов. Мутирует. Вставляет элементы при необходимости

const jackSparrow = ['good', 'morning', 'mister', 'jack', 'sparrow'];
const deletedWords = jackSparrow.splice(1, 2, 'day', 'captain', 'jacky');
console.log({ jackSparrow, deletedWords });
