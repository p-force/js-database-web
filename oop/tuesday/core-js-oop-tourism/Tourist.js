class Tourist {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.tours = [];
  }

  buy(countryName, agency) {
    const tour = agency.tours.find(el => el.country === countryName);
    if (tour !== undefined) {
      this.tours.push(tour);
      agency.money += tour.price;
      agency.tours.filter(el => el.country !== tour.country)
      return (true);
    }
    return (false);
  }
}

module.exports = Tourist;
