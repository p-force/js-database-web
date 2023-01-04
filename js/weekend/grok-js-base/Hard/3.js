/*

  Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной

  Для начала пропиши аргументы функции.  

  Пример: 'elbrus_bootcamp' => 'elbrusBootcamp'

*/

const camelCase = (str) => {
  let ret = "";
  
  for (let i = 0; i < str.length; i++)
  {
    if (str[i] === '_') {
      ret +=  str.substr(i + 1, 1).toUpperCase();
      i++;
    }
    else
      ret += str[i];
  }
  return(ret);
}
console.log(camelCase('elbrus_bootcamp'));
module.exports = camelCase
