class CarrierRocket {
  constructor(stages) {
    this.stages = [...stages]; /* копия */
  }

  detachStage() {
    this.stages.shift();
  }
}

module.exports = CarrierRocket;
