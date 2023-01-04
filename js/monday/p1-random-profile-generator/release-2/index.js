function generateNames(num) {
    let mass = [];

    for (let i = 0; i < num[2]; i++) {
        mass.push(randomNames.name());
    }
    return (mass);
}

console.log(generateNames(process.argv));