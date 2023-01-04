const randomNames = require('random-profile-generator');
const fs = require('fs');
const path = require('path');

function generateNames(num) {
    let mass = [];
    // let path2 = "../results/file.txt";
    
    let path2 = path.join(__dirname, "../results/file.txt");

    for (let i = 0; i < num[2]; i++) {
        fs.appendFileSync(path2, randomNames.name());
        fs.appendFileSync(path2, "\n");
    }
    return (mass);
}

generateNames(process.argv); 