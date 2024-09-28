// Normal implementation using Array.prototype.reduce for some of even elements

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// if initialvalue is not provided to the reducer, the adder will take first element in the accumulator irrespective of its polarity
const adder = function (acc, item, index, array) {
  if (item % 2 === 0) return acc + item;
  return acc;
};

const sum = arr.reduce(adder, 0);

console.log("reduce", sum);

// Implementing polyfill using Prototypicalinheritence

Array.prototype.myReduce = function (cb, initialValue) {
  if (this.length == 0 && initialValue === undefined) {
    throw new TypeError("array not iterable with no intialvalue");
  }
  let acc;
  acc = initialValue === undefined ? this[0] : initialValue;
  let i = initialValue === undefined ? 0 : 1;
  for (; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

const sum2 = arr.myReduce(adder, 0);

console.log("myReduce", sum2);
