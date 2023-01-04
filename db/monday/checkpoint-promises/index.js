function createPromise (num) {
  return (new Promise((res, rej) => {
      return res(num);
  }))
}

function createFailedPromise () {
  return (new Promise((res, rej) => {
    return rej(new Error('fail'));
}))
}

function waitFor(promis) {
  return promis.then(data => {
    return new Promise((res, rej) => {
      return res(data * 2);
    })
  })
}

function waitForAll(promisArr) {
return (new Promise((res, rej) => {
//   const newArr = [];
//   for(let i = 0; i < promisArr.length; i++) {
//     promisArr[i].then(d => {
//       newArr[i] = d * 3; 
//     })
//   }
  return res(promisArr.map(el => el.then(d => {return d * 3})));
  // return res(newArr);
}))
}

let i = createPromise(6);
let f = createPromise(2);
let r = createPromise(3);
// console.log();
console.log(waitForAll([i, f, r]).then(d => console.log(d)))
module.exports = {
  createPromise,
  createFailedPromise,
  waitFor,
  waitForAll,
  // waitForFirstOne,
};
