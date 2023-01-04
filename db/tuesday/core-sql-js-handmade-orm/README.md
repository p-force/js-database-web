# Создание ORM

## Введение

| JavaScript | SQL |
| :--- | :--- |
| a class named `Student` | a table named `students` |
| instances of the `Student` class | records/rows in the `students` table |
| attributes of `Student` objects | fields/columns on the `students` table |

*Таблица 1.* Отображение объектов JavaScript для таблиц базы данных.

Мы потратили некоторое время на работу с базами данных с использованием  “сырого” SQL для создания таблиц, а также для создания, извлечения, обновления и удаления записей. Теперь мы начнем использовать JavaScript для взаимодействия с базой данных. В конце этой задачи мы построим класс `Student`, который подкрепляется таблицей `students` в нашей базе данных (см. Рис. 1, чтобы увидеть, как объекты JavaScript сопоставляются с таблицами базы данных).

| JavaScript Method | SQL Query |
| :--- | :--- |
| `Student.all` | `SELECT * FROM students;` |
| `Student.find(5)` | `SELECT * FROM students WHERE id = 5;` |
| `Student.where({ first_name: 'bob' })` | `SELECT * FROM students WHERE first_name = 'bob';` |
| `new_student_instance.save` | `INSERT INTO students (first_name, ...) VALUES ('Jane', ...);` |

*Таблица 2.* Примеры методов JavaScript и сопоставимых SQL-запросов.

По мере того, как мы продвигаемся в Bootcamp, мы, в конечном итоге, будем полагаться на ORM Sequelize, чтобы обеспечить нашим классам функционирование, необходимое для взаимодействия с базой данных. После изучения некоторых аспектов в SQL, можно сказать, что эта задача является еще одним шагом для продвижения в этом направлении.

Мы собираемся определить класс `Student`. Мы будем писать методы, имитирующие поведение, предоставляемое Sequelize; другими словами, мы воссоздаем ограниченную версию интерфейса, который предоставляет Sequelize, - мы не будем воссоздавать все методы, просто посмотрим образец.

Так как классы JavaScript и таблицы базы данных коррелируют, методы, которые мы собираемся записать в этом вызове, - это JavaScript-двойники обычных SQL-запросов, которые мы будем запускать (см. Таблицу 2).

### Методы классов
Некоторые из методов, которые мы пишем, будут методами класса. Обычно методы класса берут на себя ответственность за извлечение записей из базы данных и создание объектов-учеников на основе данных. Мы уже видели, что класс отвечает за создание экземпляров самого себя с помощью метода класса `new()` (например, `new Array()`). Методы класса, которые мы будем писать в нашем классе `Student`, предоставят расширенный интерфейс для создания экземпляров учащихся.

### Методы экземпляра
Мы также напишем два метода экземпляра: `# save` для сохранения записей (вставка или обновление) и` # delete` для удаления записей. Кроме того, нам нужно будет предоставить некоторые методы доступа для атрибутов объектов.


## Releases
### Release 0: Убедитесь, что установлены необходимые пакеты

```
npm install
```

*Рисунок 1*. Установка пакета.

Мы будем использовать npm пакет pg для подключения к нашей базе данных и взаимодействия с ней. В командной строке запустите код на Рисунке 1.
```javascript
{
    "user": "postgres",
    "password": "postgres",
    "host": "localhost",
    "database": "students"
}
```
*Рисунок 2*. Код в config.json настраивает соединение с базой данных.

Файл `./src/the-pool-of-clients.js` устанавливает соединение с нашей базой данных и настраивает способ возврата записей (см. Рис. 2). В этом файле мы создаем переменную `pool`. Взаимодействие с базой данных будет осуществляться этим объектом пула соеденений с базой данных.

Нам нужно создать таблицу в  базе данных для хранения наших данных. Код для этого предоставляется в файле `src/student-db-setup.js`. Файл предоставляет модуль с методом `.createStudentTable`. В рамках этого метода мы вызываем метод pool.query передавая строку SQL, которая создает таблицу; мы будем использовать этот метод `pool.query`, когда нам нужно выполнить SQL-запрос.

После выполнения этого кода у нас должна быть база данных с таблицей `students`. Чтобы проверить это, откройте из командной строки консоль psql с базой данных `students` и посмотрите на схему. Соответствует ли это нашим ожиданиям на основе SQL-запроса в методе `.create_students_table`?

### Release 1: Создание студенческого класса
Теперь пришло время создать наш класс. Мы начнем с создания обычного класса JavaScript. Мы хотим иметь возможность создавать новые объекты `Student`  и устанавливать значения их атрибутов: имя, фамилия, пол, день рождения, адрес электронной почты и номер телефона - обратите внимание, что они совпадают с столбцами таблицы `students`.

```
npm run test
```
*Рисунок 3*. Выполнение тестов.

Тесты для этих атрибутов были написаны в группе примеров с меткой `"изменяемые аттрибуты студента"`. Проведите эти тесты перед переходом к следующей версии (см. Рис. 4).


### Release 2: Атрибуты, связанные с сохранением
В *Release 0* мы создали класс `Student`, чьи атрибуты соответствовали некоторым столбцам в нашей таблице `students`. Но в нашей таблице есть несколько дополнительных столбцов, которые мы не рассматривали: `id`,` created_at` и `updated_at`. Мы добавим эти атрибуты в наш `Student`.

Когда мы вытаскиваем строку данных из нашей таблицы `students`, мы будем использовать ее для создания объекта `Student`, и мы хотим иметь возможность запросить у объекта его идентификатор, время, которое было сначала сохранено в базе данных (`created_at`), и время последнего обновления базы данных (` updated_at`).

Однако мы не хотим присваивать сами атрибуты. Значения этих атрибутов должны основываться на данных в базе. Например, идентификаторы устанавливаются базой данных автоматически, когда мы вставляем новую запись; мы не хотим устанавливать сам идентификатор. Аналогично, когда мы вставляем новую запись в нашу базу данных, мы говорим базе о том, чтобы она использовала текущее время (`DATETIME ('now')`) для определения того, когда объект был создан и обновлен. Когда мы обновляем запись в нашей базе данных, мы также будем сообщать ей об изменении обновленного времени для того, чтобы отразить текущее время.

Давайте убедимся, что мы можем создавать экземпляры `Student` с идентификаторами, и время, когда они были созданы в базе данных, и время, которое они в последний раз обновляли в базе данных. Тесты для этого поведения были написаны в группе примеров, помеченной `"attributes related to persistence"` (атрибутами, связанными с постоянством).

### Release 3: Создайте коллекцию студентов из данных  в базе

```
Student.all()
// Array of Student
```
*Рисунок 5*. Возврат коллекции всех студентов в базе данных с использованием метода `.all`.

До сих пор наш класс `Student` не имел никакого отношения к базе данных. В этом выпуске мы добавим некоторые поведения в наш класс, которые позволят нам создавать объекты `Student` на основе данных в нашей базе данных (см. Рис. 5).

Во *Введении* мы упоминали, что сам класс `Student` будет отвечать за создание новых экземпляров самого себя. Теперь мы начнем добавлять поведение, которое позволит ему это сделать. В этом выпуске мы будем писать методы класса, возвращающие коллекции объектов `Student`:

- `.all` возвращает коллекцию всех студентов в базе данных.
- `.where` возвращает коллекцию студентов из базы данных, которая соответствует заданному условию.
- `.allByBirthday` возвращает коллекцию всех студентов в базе данных, отсортированную по дням рождения.

Тесты были представлены в группе примеров с надписью `"returning multiple students"`. («Возвращение «множественных» студентов»).


### Release 4: Создание «единичного» студента из данных в базе

```JavaScript
Student.find(5)
// Student Object
```
*Рисунок 6*. Возвращение «единичного»  студента, найденного по id.

В предыдущем выпуске мы писали методы, которые возвращали коллекции студентов. В этом выпуске мы собираемся написать пару методов, которые возвращают единичный объект `Student` (см. Рисунок 6 в качестве примера использования метода):

- `.find` возвращает студента, найденного в базе данных по его идентификатору.
- `.findByFirstName` возвращает студента, найденного в базе данных по имени.

Тесты были представлены в группе примеров с надписью  `"returning a single student"` («Возвращение единичного ученика»).

### Release 5:  Удалите студента из базы

```JavaScript
const student = Student.find(5)
student.delete();

# ...

Student.find(5)
// undefined
```
*Рисунок 7*. Удаление данных из базы.

Мы можем создавать объекты `Student` на основе данных в нашей базе, но мы не рассматривали использование JavaScript для создания и удаления записей. В этом выпуске мы приводим примеры нашего класса `Student`  для удаления данных из базы.

На Рисунке 7 мы создаем объект `Student` на основе данных в таблице `students`  - в строке, где идентификатор равен пяти. Мы хотим удалить эти данные, поэтому мы вызываем `# delete` на объект` Student`. В результате данные, в которых `id = 5` были удалены из базы данных, и мы больше не можем найти студента с идентификатором 5.

Тесты были представлены в группе примеров, помеченной как `"removing data from the database"` («удаление данных из базы данных»).


### Release 6: Оставьте студента в базе данных

```JavaScript
const student = Student.new(hash_of_student_data)
// 
student.id
// undefined
student.save
student.id
// 16
```
*Рисунок 8*. Сохранение данных объекта `Student` в базе данных.

Последнее действие, которое мы добавим к нашему классу `Student`, - это запись данных в базу. Если мы создадим объект `Student` в JavaScript, мы захотим сохранить данные этого объекта в базе данных. Кроме того, если мы обновляем имя ученика или день рождения, мы также хотим сохранить эти изменения.

Нам нужно будет вставить или обновить данные в базе при сохранении, но нам также нужно будет обновить наши объекты JavaScript. Нам нужно обработать настройки атрибутов, связанных с сохранением, о которых мы говорили в *Release 2*.

Тесты были представлены в группе примеров, помеченной `"writing to the database"` («записывающей в базу данных»).

### Release 7: Используйте класс учеников

Мы просто создали класс, который взаимодействует с базой данных. Давайте начнем использовать его (см. Рис. 9). Используйте методы, которые мы только что создали, чтобы создавать новые записи в базе данных, извлекать записи из базы данных и удалять записи из базы данных.

*Примечание:* Если мы хотим загрузить несколько записей в базу данных, мы можем использовать модуль `StudentDBSetup` для того, чтобы заполнить базу данных некоторой информацией о студентах, подобно тому, как мы задавали команду о создании таблицы `students` для нас в *Release 0*.


## Заключение
В этой задаче мы начали отходить от написания SQL. Мы будем работать с базами данных в Dev Bootcamp, но мы будем все меньше и меньше сталкиваться с SQL. Конечно, запросы SQL все равно будут выполняться, и нам нужно понять, что они делают, но они будут скрыты за JavaScript.

Мы можем полностью работать в JavaScript уже с нашим классом `Student`, но при этом SQL продолжает выполнять свою работу в фоновом режиме. Мы по-прежнему взаимодействуем с базой данных, и в конечном итоге запросы SQL выполняются, однако единственное, что нам нужно только знать – это какие методы JavaScript нам нужно использовать.


### Почитать 
- https://node-postgres.com
- https://postgrespro.ru/