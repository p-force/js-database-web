const fs = require("fs");

// sync

// const text = fs.readFileSync("./data/bla.txt", "utf-8");
// console.log(text);

// try async like sync

// console.log("Hello");
// const text = fs.readFileSync(
//   "./largeData/2021-05-26 10-22-20 copy.mkv",
//   "utf-8"
// );
// console.log("Would you like some tea?");
// console.log(`Large data beggins with ${text.slice(0, 10)}`);

// async

// console.log("Hello");
// fs.readFile(
//   "./largeData/2021-05-26 10-22-20 copy.mkv",
//   "utf-8",
//   (err, data) => {
//     if (err) console.log(err);
//     console.log(`Large data beggins with ${data.slice(0, 10)}`);
//   }
// );
// console.log("Please enjoy the wait");

// setTimeout и его очистка

// console.log("Hello");

// const timerId = setTimeout(() => {
//   console.log("Our async operation");
// }, 3000);

// console.log("Please enjoy the wait");
// clearTimeout(timerId);

// // arguments
// function args() {
//   console.log(arguments);
//   console.log(arguments.length);
// }

// args(1, 2, 3);
// args("BlaBla");

const arrArgs = () => {
  console.log(arguments);
};

arrArgs(1, 2, 3);
arrArgs("BlaBla");
