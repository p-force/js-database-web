const fs = require('fs');
// Раскомментируй только для релиза 4.
// const runInteractiveConsole = require('./interactive');
// runInteractiveConsole();

// Асинхронная загрузка.
function loadFiles() {
  const path = '/Users/diana/Desktop/phase-1/week2/wednesday/fs-files-progressbar/files/';
  // console.log(fs.readdir(path))
  const filesArr = fs.readdirSync(path);
  let mass = []
  const filesArrSize = fs.readdirSync(path)
    .map((el) => Math.round(fs.statSync(path + el).size / 1024));
  const minMass = filesArrSize.sort((a, b) => a - b);
  minMass.map(el => filesArr.map((el1, i) => {
    if (Math.round(fs.statSync(path + el1).size / 1024) === el){
      mass.push(el1);
      filesArr.splice(i, 1);
      return (mass);
    }
  }))
}
loadFiles();