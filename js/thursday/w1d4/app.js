// const str = "hello, \"Lynxes\""
// const lynx = 'Lynxes'
// const str2 = `Hello, ${lynx}`
// const str3 = 'Welcome to \tElbrus'

// console.log(str3[2]);

// console.log(lynx);
// lynx[0] = 'l'
// console.log(lynx);


// console.log(lynx);
// const bla = lynx.toUpperCase()
// console.log(bla);

// const str3 = 'Welcome to Elbrus'
// console.log(str3.indexOf('l'));
// console.log(str3.lastIndexOf('l'));

// function unique(str, char) {
//    return (str.indexOf(char)===str.lastIndexOf(char))  
// }

// console.log(unique(str3,'e'))

// const str3 = 'Elbrus Welcome to Elbrus'
// console.log(str3.replace('Elbrus', 'hell'));
// console.log(str3.replaceAll('Elbrus', 'hell'));
// console.log(str3);

// const date = "date: 22.05.19";
// const myReg = /(\w*:\s)(\d{2})\.(\d{2})\.(\d{2})/gmi

// const dateCopy = date.replace(myReg, "$4-$3-20$2")
// console.log(dateCopy);

const str = 'table football';
const globalRegex = new RegExp('foo*', 'g');
console.log(globalRegex.test(str));