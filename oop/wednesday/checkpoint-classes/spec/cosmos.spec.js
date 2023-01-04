const RocketEngine = require('../rocket-engine');
const SolidPropellantRocketEngine = require('../solid-propellant-rocket-engine');
const CarrierRocket = require('../carrier-rocket');

describe('Система запуска космических ракет', () => {
  describe('Класс Ракетный двигатель', () => {
    it('позволяет задать удельный импульс тяги', () => {
      const specificImpulse = 4100;
      const engine = new RocketEngine(specificImpulse);
      expect(engine.specificImpulse).toBe(specificImpulse);
    });
    it('позволяет задать тип ракетного топлива', () => {
      const rocketPropellant = 'жидкий кислород';
      const engine = new RocketEngine(4100, rocketPropellant);
      expect(engine.rocketPropellant).toBe(rocketPropellant);
    });
  });
  describe('Класс Твердотопливный ракетный двигатель', () => {
    it('позволяет задать название двигателя', () => {
      const name = 'Наро-1';
      const engine = new SolidPropellantRocketEngine(name);
      expect(engine.name).toBe(name);
    });
    it('позволяет задать удельный импульс тяги и тип топлива', () => {
      const specificImpulse = 2000;
      const rocketPropellant = 'полиуретан';
      const engine = new SolidPropellantRocketEngine('Наро-1', specificImpulse, rocketPropellant);
      expect(engine.specificImpulse).toBe(specificImpulse);
      expect(engine.rocketPropellant).toBe(rocketPropellant);
    });
    it('наследуется от Ракетного двигателя', () => {
      const engine = new SolidPropellantRocketEngine();
      expect(engine).toBeInstanceOf(RocketEngine);
    });
    it('не задает удельный импульс внутри своего конструктора', () => {
      expect(SolidPropellantRocketEngine.constructor.toString()).not.toContain('this.specificImpulse');
    });
  });
  describe('Класс Ракета-носитель', () => {
    const stages = [
      new SolidPropellantRocketEngine('Антарес-1', 3000, 'каучук'),
      new RocketEngine(8000, 'жидкий водород'),
    ];
    it('позволяет задать ступени', () => {
      const rocket = new CarrierRocket(stages);
      // Заметьте, что мы не хотим использовать пришедший массив
      expect(rocket.stages).not.toBe(stages);
      expect(rocket.stages).toEqual(stages);
    });
    it('позволяет отсоединить ступень', () => {
      const rocket = new CarrierRocket(stages);
      // Первая ступень находится внизу ракеты и отсоединяется первой
      rocket.detachStage();
      expect(rocket.stages).toEqual(stages.slice(1));
    });
  });
});
