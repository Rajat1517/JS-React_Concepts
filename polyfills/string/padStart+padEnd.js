// Normal Implementation using String.prototype.padStart and String.prototype.padEnd

const str = "xyz";

console.log("padStart", str.padStart(10, "12345"));
console.log("padEnd", str.padEnd(10, "12345"));

// Implementing polyfill using Prototypical Inheritence

String.prototype.myPadStart = function (target, str = " ") {
  let len = this.length;
  if (target <= len) return `${this}`;
  let lenStr = str.length;
  let count = Math.ceil((target - len) / lenStr);
  let rem = (target - len) % lenStr;
  let pad = "";
  while (count--) {
    pad += str;
  }
  if (rem) pad = pad.slice(0, -1 * (lenStr - rem));
  return pad + this;
};

console.log("myPadStart", str.myPadStart(10, "12345"));

String.prototype.myPadEnd = function (target, str = " ") {
  let len = this.length;
  if (target <= len) return `${this}`;
  let lenStr = str.length;
  let count = Math.ceil((target - len) / lenStr);
  let rem = (target - len) % lenStr;
  let pad = "";
  while (count--) {
    pad += str;
  }
  if (rem) pad = pad.slice(0, -1 * (lenStr - rem));
  return this + pad;
};

console.log("myPadEnd", str.myPadEnd(10, "12345"));
