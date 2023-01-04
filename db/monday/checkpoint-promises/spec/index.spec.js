const {
  createPromise,
  createFailedPromise,
  waitFor,
  waitForAll,
  waitForFirstOne,
} = require('../index');

describe('Чекпоинт Promises', () => {
  it('createPromise создаёт промис, который резолвит поданное на вход значение', (done) => {
    const promise = createPromise(42);
    promise.then((val) => {
      expect(val).toBe(42);
      done();
    });
  });
  it('createFailedPromise создаёт промис который реджектится', (done) => {
    const promise = createFailedPromise();
    promise.catch((err) => {
      expect(err).toEqual(new Error('fail'));
      done();
    });
  });
  it('waitFor дожидается входящего промиса, умножает его значение на 2 и возвращает новый промис', (done) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(7), 10);
    });
    waitFor(promise).then((val) => {
      expect(val).toBe(14);
      done();
    });
  });
  it('waitForAll дожидается всех промисов, умножает их значения на 3 и возвращает новый промис', (done) => {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve(1), 15)),
      new Promise((resolve) => setTimeout(() => resolve(2), 10)),
      new Promise((resolve) => setTimeout(() => resolve(3), 20)),
    ];
    waitForAll(promises).then((vals) => {
      expect(vals).toEqual([3, 6, 9]);
      done();
    });
  });
  xit('waitForFirstOne дожидается самого быстрого промиса, умножает его значение на 4 и возвращает новый промис', (done) => {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve(11), 30)),
      new Promise((resolve) => setTimeout(() => resolve(22), 4)),
      new Promise((resolve) => setTimeout(() => resolve(33), 50)),
    ];
    waitForFirstOne(promises).then((val) => {
      expect(val).toBe(88);
      done();
    });
  });
});
