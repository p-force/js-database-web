const fs = require('fs');

let crewFile = fs.readFileSync('./src/crew.txt', 'utf-8').toString().split("\n");//обращаемся из корневой папки
let equipmentFile = fs.readFileSync('./src/equipment.txt', 'utf-8').toString().split("\n");
let rocketFile = fs.readFileSync('./src/rockets.txt', 'utf-8').toString().split("\n");




function getRightCaptain() {
  let mass = [];
  let max = 0;
  let ind = 0;
  for (let i = 0, j = 1; i < crewFile.length, j < crewFile.length; i++, j++) {
    mass[i] = [];
    mass[i] = crewFile[j].split(',');
    if (Number(mass[i][3]) >= max) {
      max = Number(mass[i][3]);
      ind = i;
    }
  }
  return (mass[ind].join());
}

function getRightDoc() {
  let mass = [];
  let max;
  let ind = 0;
  for (let i = 0, j = 1; i < crewFile.length, j < crewFile.length; i++, j++) {
    mass[i] = [];
    mass[i] = crewFile[j].split(',');
    if (mass[i][1].toString() === ' ж' && mass[i][2].toString() === ' Врач') {
      if (max === undefined)
        max = Number(mass[i][3]);
      if (Number(mass[i][3]) >= max) {
        max = Number(mass[i][3]);
        ind = i;
      }
    }
  }
  return (mass[ind].join());
}

function getAllEngineer() {
  let mass = [];
  let max = -1;
  let ind = [];
  let k = 0;
  for (let i = 0, j = 1; i < crewFile.length, j < crewFile.length; i++, j++) {
    mass[i] = [];
    mass[i] = crewFile[j].split(',');
    console.log(mass[i][1]);
    if (mass[i][2].toString() === ' Бортмеханик') {
      ind[k] = i;
      k++;
    }
  }
  let ret = [];
  for (let i = 0; i < ind.length; i++)
    ret[i] = crewFile[ind[i] + 1];
  return (ret);
}


function getAllRover() {
  let mass = [];
  let ind = [];
  let k = 0;
  for (let i = 0, j = 1; i < equipmentFile.length, j < equipmentFile.length; i++, j++) {
    if (equipmentFile[j].length > 1) {
      mass[i] = [];
      mass[i] = equipmentFile[j].split(',');
      console.log(mass[i]);
    }
  }
  for (let i = 0; i < mass.length; i++) {
    if (mass[i][1].toString() === ' марсоход') {
      ind[k] = i;
      k++;
    }
  }
  let ret = [];
  for (let i = 0; i < ind.length; i++)
    ret[i] = equipmentFile[ind[i] + 1];
  return (ret);
}

function getRightRovers() {
  let mass = [];
  let ind = [];
  let k = 0;
  for (let i = 0, j = 1; i < equipmentFile.length, j < equipmentFile.length; i++, j++) {
    if (equipmentFile[j].length > 1) {
      mass[i] = [];
      mass[i] = equipmentFile[j].split(',');
      console.log(mass[i]);
    }
  }
  for (let i = 0; i < mass.length; i++) {
    if (mass[i][1].toString() === ' марсоход' && Number(mass[i][2]) > 3) {
      ind[k] = i;
      k++;
    }
  }
  let ret = [];
  for (let i = 0; i < ind.length; i++)
    ret[i] = equipmentFile[ind[i] + 1];
  return (ret);
}

function getRightRocket() {
  let mass = [];
  let max = [0,0];
  let ind = 0;
  for (let i = 0, j = 1; i < rocketFile.length, j < rocketFile.length; i++, j++) {
    if (rocketFile[j].length > 1) {
      mass[i] = [];
      mass[i] = rocketFile[j].split(', ');
    }
  }
  for (let i = 0; i < mass.length; i++) {
    if (Number(mass[i][2]) >= max[0])
      max = [Number(mass[i][2]), i];
  }
return ([mass[max[1]][0], mass[max[1]][1], Number(mass[max[1]][2])]);
}
console.log(getRightRocket());
module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
