const fs = require('fs');

//CallBack Hell

// fs.readFile('1.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   fs.writeFile('1-copy.txt', data, (err) => {
//     if (err) throw err;
//     fs.readFile('1-copy.txt', 'utf8', (err, data) => {
//       if (err) throw err;
//       fs.writeFile('2.txt', `${data} \nBlaBlaBla`, (err) => {
//         if (err) throw err;
//       });
//     });
//   });
// });

// const longFoo = () => {
//   setTimeout(() => {
//     console.log('Huge data from outside');
//   }, 3000);
// };

// console.log('Hello');
// longFoo();
// console.log('delivered');

// const promise = new Promise((resolve, reject) => {
//   console.log('in executor');
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve('Huge data from outside'); // resolve и reject отдаёт только один параметр
//     } else {
//       reject('ERROR in promise');
//     }
//   }, 3000);
// });

// console.log(promise); // синхронный, поэтому выполнится раньше
// promise
//   .then((data) => {
//     console.log(data);
//     return 'Was successfully';
//   })
//   .then((data) => console.log(`${data} delivered`))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('all done')); // then и catch возвращает promise, чтобы можно было делать цепочку

// // Async/await

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Huge data from outside');
      } else {
        reject('ERROR in promise');
      }
    }, 2000);
  });
}

// foo().then(()=> console.log('Finished')).catch((e)=> console.log(e)).finally(()=> console.log('Finish'))

async function main() {
  try {
    await foo();
    console.log('Finished');
  } catch (error) {
    console.log(error);
  }
  console.log('Finish');
}
// main();

// Async before function

main().then(() => console.log('after main'));
