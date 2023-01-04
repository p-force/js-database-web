//Реализуй функции линейного поиска. Проверь результат тестами.

function linearSearch(item, mass) {
  for (let i = 0; i < mass.length; i++)
    if (mass[i] === item)
      return (i);
  return (-1);
}

function globalLinearSearch(item, mass) {
  let retMass = [];
  let j = 0;
  for (let i = 0; i < mass.length; i++)
    if (mass[i] === item) {
      retMass[j] = i;
      j++;
    }
    return (retMass);
}

module.exports = {
  linearSearch,
  globalLinearSearch
}
