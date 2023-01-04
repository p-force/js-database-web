const RocketEngine = require('./rocket-engine');

class SolidPropellantRocketEngine extends RocketEngine {
  constructor(name, specificImpulse, rocketPropellant) {
    super(specificImpulse, rocketPropellant);
    this.name = name;
  }
}

module.exports = SolidPropellantRocketEngine;
