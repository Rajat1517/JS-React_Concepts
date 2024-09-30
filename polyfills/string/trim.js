// Normal implementation using String.prototype.trim

const str = "    abc   ";

console.log("trim", str.trim());

// Implementing polyfill using Prototypical inheritence

String.prototype.myTrim = function () {
  let res = this;

  while (res.length > 0 && res.charAt(0) === " ") {
    res = res.slice(1);
  }

  while (res.length > 0 && res.charAt(-1) === " ") {
    res = res.slice(0, -1);
  }
  return res;
};

console.log("myTrim", str.myTrim());
