const randomNames = require('random-profile-generator');

function generateNames(num) {
    let mass = [];

    for (let i = 0; i < num; i++) {
        mass.push(randomNames.name());
    }
    return (mass);
}

console.log(generateNames(4)); 