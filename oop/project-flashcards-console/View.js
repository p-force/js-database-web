
const { readlink } = require('fs');

const readline = require('readline-promise').default;

// const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

class View {
  constructor() {

  }

  async printMenu(topicsMenu) {
      let answer;
      answer = await rl.questionAsync('Какую тему хотите?' + '\n\n1.' + topicsMenu[0] + '\n2.' + topicsMenu[1] + '\n3.' + topicsMenu[2] + '\n\n', (answer))
      return (answer)
    }

    async getTopic(queAns) {
      let answer;
      let i = 0;
      while (i < queAns.length) {
        answer = await rl.questionAsync("\n\x1b[33m"+queAns[i]+"\x1b[0m" + '\n' , answer)
        if (answer === queAns[i+1]) {
          console.log("\x1b[32mgood👍\x1b[0m" + '\n'); 
        } else {
          console.log("\x1b[31mbad👎\x1b[0m" + '\n'); 
        }
        i += 2;
      }
      answer = await rl.questionAsync('Do you want to continue?' + '\n' , (answer))
      return(answer === 'да' ? 1 : 0);
      }
      async exit() {
        rl.close();
      }
}

// const a = new View(1);
// a.getTopic();




module.exports = View
