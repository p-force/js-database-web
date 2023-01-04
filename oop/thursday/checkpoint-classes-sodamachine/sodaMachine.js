class SodaMachine {
  constructor(args = {}) {
    this.sodas = args.sodas;
    this.cash = args.cash;
  }

  currentInventoryCount() {
    return (this.sodas.length);
  }

  findSoda(sodaBrand) {
    return (this.sodas.find(el => el.brand === sodaBrand))
  }

  sell(sodaBrand) {
    // let tobe = this.sodas.find(el => el.brand === sodaBrand)
    let tobe = this.findSoda(sodaBrand);
    if (tobe) {
      this.cash += tobe.price;
      this.sodas = this.sodas.filter(el => el.brand !== sodaBrand);
    }
    else
      return(tobe);
  }
}

module.exports = { SodaMachine };
