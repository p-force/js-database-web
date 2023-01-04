class Station {
  constructor(name, location, bikes) {
    this.name = name;
    this.location = location;
    this.bikes = bikes;
  }

empty(bikes) {
  if (!this.bikes.length) { return true; }
}

newestBike() {
  if (this.bikes[0].modelYear > this.bikes[1].modelYear) { return this.bikes[0]; }
}

take(bikes) {
  this.bikes.push(bikes);
  return this.bikes;
}

takeMultiple(bikes) {
  this.bikes.push(bikes[0]);
  this.bikes.push(bikes[1]);
  return this.bikes;
}

release() {
  if (!this.bikes.length) { return undefined; }
  return this.bikes.shift();
}
}
module.exports = Station;
