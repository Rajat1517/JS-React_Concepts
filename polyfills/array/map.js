// Normal Implementation of Array.prototype.map
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = arr.map((item, index, array) => {
  return item * index;
});

console.log("map", newArr);

// Polyfill implementation using Protoypical Inheritance

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

const newArr2 = arr.myMap((item, index, array) => {
  return item * index;
});

console.log("myMap", newArr2);
