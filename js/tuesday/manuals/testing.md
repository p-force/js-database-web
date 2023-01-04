# Jest

<details>
 
<summary>Работа с тестами в консоли</summary>

## Работа с тестами в консоли

### Перед установкой
Командой `npx -v` убедись, что у тебя установлен `npx`. Если нет, то установи его командой `npm install -g npx` или `sudo npm install -g npx`.
<!-- изучи [мануал по npx](how-to-use-npx.md) -->


### Установка

- Если проект новый, то инициализируй файл `package.json` командой `npm init -y`
- Установи jest в devDependencies: `npm install -D jest`
- В корне проекта создай папку `spec`.
- Добавьте следующий раздел в `package.json`:

  ```
  "scripts": {
    "test": "jest -i"
  }
  ``` 
  Пример файла [package.json](../../../manuals-jasmine-node-example/blob/master/package.json)   
- О расширенной настройке Jest можно почитать [здесь](https://jestjs.io/docs/en/getting-started#additional-configuration)

Готово.


### Запуск тестов

Для запуска тестов достаточно выполнить команду `npm test` или `npx jest` в терминале, находясь в корне своего проекта.



</details>

----------------------------------------

<details>

<summary>Как писать тесты?</summary>

### Написание тестов

Чтобы начать писать тесты, создай файл в папке `spec`. Название файла должно заканчиваться на `.spec.js`. Пиши тесты внутри этого файла.

Основные методы Jest:
- *describe(description, specDefinitions)* - 
Создаёт группу тестов. Вызовы метода `describe` могут вкладываться друг в друга, что позволяет создавать подгруппы тестов.
-  *beforeEach(functionopt, timeoutopt)* - 
Метод, код внутри которого будет запускаться перед запуском каждого теста(`test` или `it`). Таким образом, тут можно задавать значения переменных, необходимые для тестов, подготавливать БД, и тд.
- *test(description, testFunctionopt, timeoutopt)*
Определяет тест(или spec). Тест должен содержать 1 или более вызовов метода `expect` (ожидания от работы вашего кода). Если все вызовы `expect` внутри `test` успешны - тесты пройдут, иначе выдадут ошибку.
- *expect(actual) → {matchers}*
Создаёт ожидание для теста. Например: `expect(sum(2,3)).toEqual(5)` - ожидается, что результат вызова метода `sum` с аргументами `2` и `3` будет равен `5`. То есть `2+3=5`.
*matchers* - то что ожидается (`toEqual(5)`, `toBeFalsy()`, `toBeUndefined()`, `toContain(2)` и тд). Больше [тут](https://jestjs.io/docs/en/using-matchers).

 Материалы: 
 * Для старта может быть полезна [эта хабр статья](https://habr.com/ru/post/502302/).
 * Советуем также ознакомиться с JEST [на YouTube](https://www.youtube.com/watch?v=9g4tsfIJz50).
 * Ближе познакомиться с методами можно в [тут](https://jestjs.io/docs/en/api#describename-fn).
 * Документация [Jest](https://jestjs.io/docs/en/getting-started).


</details>

----------------------------------------

<details>

  <summary>Примеры</summary>

## Примеры

Более подробный пример можно посмотреть, и даже склонировать к себе [ТУТ](../../../manuals-jasmine-node-example).

Файл `operations.js`
```
function sum(a, b) {
  return a + b;
}

module.exports = { sum };
```

Пример файла с тестами (`spec/operations.spec.js`):
```
const {sum} = require('../operations.js');

describe('My operations testing', function() {
  describe('Simple operations', function() {
    test('sum', function() {
      expect(sum(3, 2)).toEqual(5);
    });
  });
});

describe('Math object testing', function() {
  let someVariable;

  beforeEach(function() {
    someVariable = 'initial value needed for each test';
  });

  describe('Math constants', function() {
    test('PI', function() {
      expect(Math.PI).toBeGreaterThan(3.14);
      expect(Math.PI).toBeLessThan(3.15);
    });
    test('E', function() {
      expect(Math.E).toBeCloseTo(2.718, 2);
    });
  });

  describe('Math methods', function() {
    test('pow(возведение в степень)', function() {
      expect(Math.pow(3, 2)).toEqual(9);
    });
  });
});
```

</details>
