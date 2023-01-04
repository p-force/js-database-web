// const arr = [1,2,3,4,5,6]
// debugger
// const res = arr.reduce((acc,val,i)=> {
//     const tmp = Math.floor(i/2) // 0,0,1,1,2,2
//     if (!Array.isArray(acc[tmp])){
//         acc[tmp]=[val]
//     } else {
//         acc[tmp].push(val)
//     }
//     return acc
// }, [])

// console.log(res);




// let i = 0

// function infinityRecursion() {
//   console.log(i += 1)
//   infinityRecursion()
// }


// infinityRecursion()


// РЕКУРСИЯ
// function countdown(num) {
//   console.log(`Осталось: ${num} секунд`);

//   if (num <= 0) {
//     return console.log(num); // базовый случай
//   } else {
//     countdown(num - 1); // рекурсивный случай
//   }
// }

// countdown(5)

// ИТЕРАЦИЯ

// function countDownIter (num) {
// for (let i = num; i >= 0; i--) {
//   console.log(`Осталось: ${i} секунд`);
// }
// }
// countDownIter(5)



// 0            1       1      2 3 5 8 13 21
// fib(0) +  fib(1)  fib(2)


// fib(7) = fib(6) + fib(5)
// fib(6) = fib(5) + fib(4)
// fib(5) = fib(4) + fib(3)


function fib(num) {
// базовый случай
   if (num <=1) return num 
// рекурсивный случай
   return fib(num-1) + fib(num-2)
}

console.time('fib')
console.log(fib(42))
console.timeEnd('fib')

function fibMemo(num, memo={}) {
    if (num <=1) return num;
    if (!memo[num-1]) memo[num-1] = fibMemo(num-1,memo)
    if (!memo[num-2]) memo[num-2] = fibMemo(num-2, memo)
    return memo[num-1]+memo[num-2]
}

console.time('fibMemo')
console.log(fibMemo(42))
console.timeEnd('fibMemo')