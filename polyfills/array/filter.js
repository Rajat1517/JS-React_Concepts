// Normal Implementation of Array.prototype.filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const even = arr.filter((item, index, array) => {
  return item % 2 == 0;
});

console.log("filter", even);

// Implementing polyfill using Prototypical Inheritance

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) res.push(this[i]);
  }
  return res;
};

const even2 = arr.myFilter((item, index, array) => {
  return item % 2 == 0;
});

console.log("myFilter", even2);
