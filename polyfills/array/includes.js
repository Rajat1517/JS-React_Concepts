// Normal implementation using Array.prototype.includes

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const exist = arr.includes(9, -2);

console.log("includes", exist);

// Implementing polyfill using Prototypical inheritence

Array.prototype.myIncludes = function (target, from=0) {
  let start;
  if (from >= this.length) return false;
  else if (from < this.length * -1) start = 0;
  else if (from >= 0) start = from;
  else start = this.length + from;

  for (let i = start; i < this.length; i++) {
    if (this[i] === target) return true;
  }
  return false;
};

const exist2 = arr.myIncludes(9, -2);

console.log("myIncludes", exist2);
