# Disney 🧚 


![screenshot](readme-assets/349186.jpg)


### Release 0

В папке `src` у тебя есть два файла `cartoon` и `person`. В первую очередь ознакомься с этими файлами и изучи содержимое.

```js
function Cartoon(title, year, forChildren = true, beginning = 'Long, long ago...') {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}
```

Функция-конструктор `Сartoon` является общей для `DisneyCartoon` и `DreamWorksCartoon`. Тебе надо сделать наследование. Определись что должно быть в `prototype` и каким должен быть `constuctor`.

> p.s. загляни в тесты

### Release 1

А что со свойствами? В прошлом релизе мы сделали наследование, но свойства так и остались не тронутыми.

Сейчас у `DisneyCartoon` есть свойства:

```js
  this.title = title;
  this.year = year;
  this.beginning = beginning;
  this.studio = 'Walt Disney';
```

А у `DreamWorksCartoon` :

```js
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.studio = 'DreamWorks';
```

Получается, что мы повторяем сами себя и дублируем свойства родительской функции-конструктора `Cartoon`. Давай организуем код так, чтобы код не дублировался, а из дочерних функций были доступны родительские.

> Подсказка: Ознакомьтесь с методами call, apply, bind. Они могут помочь избавиться от дублирования свойств.

### Release 2

Мультики созданы для того чтобы их смотреть.

В файле `person` есть функция-конструктор `Person`.
У неё должно быть имя( свойство `name` ) и список просмотренных фильмов( свойство `watchedMovies` ). А также метод просмотра фильма `watchMovie`. 

`watchMovie` должен запускать метод `play` у мультика и добавлять новые мультики в список просмотренных. Не забудь сделать проверку, вдруг наш персонаж уже смотрел этот мультик. 

### Release 3

Если ты заглянешь в тесты `person-spec` то в последнем тестовом кейсе ты увидишь следующий код.

```js
 let prettyString = 'The movies which Emma has watched:\n' + emma.watchedMovies;
```

Как ты думаешь что тут происходит ?
Для начала поэкспериментируй с [конкатенацией][конкатенация] строки и массива. Со строкой все понятно, а что с [массивом][arr.toString]?

В данном примере у массива вызывается метод `toString`, который нам и надо переопределить. Но будь внимателен тебе нужно изменить метод конкретного массива, а не глобального объекта Array.


[конкатенация]: https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%BA%D0%B0%D1%82%D0%B5%D0%BD%D0%B0%D1%86%D0%B8%D1%8F
[arr.toString]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/toString