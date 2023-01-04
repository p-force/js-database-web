
Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};


Array.prototype.myMap = function (fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr[i] = fn(this[i], i, this);
  }
  return arr;
};

Array.prototype.myFilter = function (fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

Array.prototype.myFind = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) return this[i];
  }
  return undefined;
};

Array.prototype.myEvery = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i], i, this)) return false;
  }
  return true;
};

Array.prototype.mySome = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) return true;
  }
  return false;
};

Array.prototype.myReduce = function (fn, acc) {
  let start = 0;
  if (acc === undefined) {
    start = 1;
    acc = this[0];
  }
  for (let i = start; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};
