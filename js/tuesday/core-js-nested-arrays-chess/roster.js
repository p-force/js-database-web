const numbers = [12, 9, 31, 18, 22]
const names = ['Joe Schmo', 'Ms. Buckets', 'Harvey Kay', 'Sally Talls', 'MK DiBoux']
const positions = ['Center', 'Point Guard', 'Shooting Guard', 'Power Forward', 'Small Forward']
const points = {
	12: [14, 32, 7, 0, 23],
	9: [19, 0, 11, 22, 0],
	31: [0, 30, 16, 0, 25],
	18: [18, 29, 26, 31, 19],
	22: [11, 0, 23, 17, 0]
}

function generateRoster() {
	let mass = [];
	for (let i = 0; i < numbers.length; i++) {
		mass[i] = [];
	}
	mass.map((el, i)=> {
		el.push(numbers[i]);
		el.push(names[i]);
		el.push(positions[i]);
		el.push(points[numbers[i]]);
	});
	mass.unshift(['Number', 'Name', 'Position', 'Points per Game']);
	return(mass);
}

module.exports = {generateRoster};
