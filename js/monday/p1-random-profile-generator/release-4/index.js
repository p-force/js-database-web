const randomNames = require('random-profile-generator');
const fs = require('fs');

function generateNames(num) {
    let mass = [];
    // let path = "../results/file.txt";
    let path2 = path.join(__dirname, "../results/file.txt");

    for (let i = 0; i < num; i++) {
        fs.appendFileSync(path2, randomNames.name());
        fs.appendFileSync(path2, "\n");
    }
    return (mass);
}

function getRandomInteger() {
    generateNames(Math.floor(Math.random() * 20));
}

getRandomInteger() 