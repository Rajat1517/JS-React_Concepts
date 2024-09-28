// Normal Implementation of Array.prototype.find for finding the first element which gives a sum greater than n
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 10;
const finder = function (item, index, array) {
  return item + array[index + 1] > n;
};

const res = arr.find(finder);

console.log("find", res);

//Implementing polyfill using Prototypical Inheritance

Array.prototype.myFind = function (cb, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg,this[i], i, this) !== undefined) return this[i];
  }
  return undefined;
};

const res2 = arr.find(finder);

console.log("myFind", res2);
