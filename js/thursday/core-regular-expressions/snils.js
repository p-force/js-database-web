// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
  return (/(\d{3})-(\d{3})-(\d{3})\s(\d{2})/g.test(string) > 0);
}


// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
  return ((/(\d{3})\-(\d{3})\-(\d{3})\s(\d{2})/g).exec(string)[0]);
}


// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
  return string.match(/(\d{3})-(\d{3})-(\d{3})\s(\d{2})/g)
}


// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
  return (string.replace(/(\d{3})-(\d{3})-(\d{3})/g, "XXX-XXX-XXX"))
}



// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
  return (string.replace(/(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})/g, "$1-$2-$3 $4"));
}

module.exports = {
  hasSNILS,
  grabSNILS,
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS
};
