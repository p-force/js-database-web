// Немного кода за тебя уже написано.
const fs = require('fs');

// Аргументы командной строки.
const args = process.argv.slice(2);
console.log(`You've passed arguments: [${args.length ? args : 'no args :('}]`);
console.log('---------------------------');

// Достаём todos из файла.
const filePath = 'todo-list-data.csv';
fs.readFile(filePath, 'utf-8', (err, data) => {
    const todos = data.split('\n').slice(1);
    console.log('Here is your todos:', todos);
});
