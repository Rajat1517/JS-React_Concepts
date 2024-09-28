// Normal implementation using Array.propotype.findIndex for the same problem that was taken in find method
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

let n = 89;
const finder = function (item, index, array) {
  return item + array[index + 1] > n;
};

const res = arr.findIndex(finder);

console.log("findIndex", res);

// Implementing polyfill using prototypical inheritance

Array.prototype.myFindIndex = function (cb, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg,this[i], i, this)) return i;
  }
  return -1;
};

const res2 = arr.myFindIndex(finder);

console.log("myFindIndex", res2);
