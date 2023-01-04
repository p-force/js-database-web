## Boggle. Генерация игрового поля

Почитай про игру [Boggle](http://en.wikipedia.org/wiki/Boggle). Тебе нужно реализовать ее на JS. 

Сначала смоделируй первую часть игры - генерацию игры. Кубики складываются в коробку, коробку встряхивают, в результате чего образуется игровое поле. Представь табличку 4x4 и кнопку рядом с ней. По нажатии на эту кнопку, поле заполняется буквами. После чего можно играть в Boggle. Примерно это и нужно реализовать.

Реализуем 2 версии. Первая будет упрощенной, вторая - реалистичной.

### Release 0. Простая версия Boggle

Создай метод `shake()`. Он будет отвечать за перемешивание кубиков в коробке. `shake()` должен модифицировать игровое поле, заполнять случайными буквами в диапазоне `A-Z`.

Пока других ограничений не будет. Буквы могут повторяться. Просто вставь в каждую клетку случайную букву. Так же, если ты читал(а) правила игры, то знаешь, что `Q` в игре всегда выступает и в качестве `Qu`. Но не сейчас. Пусть `Q` будет просто `Q` в данном релизе.

Наше приложение должно делать следующее:

* Когда поле создается, оно должно выглядеть следующим образом (если сделать `console.log(board)`):

  ```JavaScript
   ____
   ____
   ____
   ____
  ```

* Когда мы встряхнем коробку, то поле будет выглядеть примерно так (если сделать `console.log(board)`): 

  ```JavaScript
   DUMV
   KSPD
   HCDA
   ZOHG
  ```

* Если встряхнуть коробку еще раз, то поле будет выглядеть иначе. Например:

  ```JavaScript
   QIRZ
   EEBY
   OEJE
   MHCU
  ```

### Release 1. Умная версия Boggle

Настало время моделировать кубики. Внимательно разберись что происходит с кубиками в настоящей игре во время встряхивания коробки. Каждый кубик оказывается в определенной клетке, одной из своих сторон к игрокам. Тебе не нужно тщательно продумывать траектории каждого кубика, чтобы решить задачу. У тебя есть исходное поле, и ты должен(на) получить результат, который мог бы получиться в реальной игре. Возможно тебе надо будет использовать еще один массив, чтобы хранить все стороны кубика. Либо можешь пойти другим путем.

Список некоторых возможных комбинаций, где "Q" представляет собой "Qu":

```text
AAEEGN
ELRTTY
AOOTTW
ABBJOO
EHRTVW
CIMOTU
DISTTY
EIOSST
DELRVY
ACHOPS
HIMNQU
EEINSU
EEGHNW
AFFKPS
HLNNRZ
DEILRX
```

### Release 2. Разберемся с `Q`

> Буква Q — одна из самых редких букв латинского алфавита, а существование её в словах возможно только благодаря наличию соседней буквы U. Поэтому при игре в Боггл Q считается как QU, а длина составленного слова увеличивается на 1.

> Например: `square` (площадь) можно составить всего из 5 букв: S, Q, A, R, E — хотя длина слова будет оценена в 6 символов.

Теперь тебе надо выводить `Qu` вместо `Q`. Как это сделать? Есть много способов. Не забывай, что то, как игровое поле выглядит на самом деле и то, как оно представляется в программе - не всегда одно и то же.

Когда реализуешь замену `Q`, надо будет адаптировать вывод поля на экран, так как скорее всего твои кубики будут смещаться из-за `Qu`, а это не очень правильно.

Например, можешь выводить в таком формате:

```text
U  N  O  T
S  E  W  G
S  V  L  T
L  Qu C  F
```

## Дополнительные источники

* [Boggle on Wikipedia](http://en.wikipedia.org/wiki/Boggle)
* [Play Boggle online](http://www.wordplays.com/boggle)