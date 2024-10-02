// Normal Implementation using Object.keys

const obj = {
  one: 1,
  two: 2,
  four: 4,
  five: {
    value: 5,
    square: 25,
  },
};

Object.defineProperty(obj, "three", {
  value: 3,
  enumerable: false,
});

console.log("keys", Object.keys(obj));

// Implementing polyfill

Object.myKeys = function (obj) {
  if (obj === null || obj === undefined) {
    throw new TypeError("Object parameter can not be null or undefined");
  }
  // Coering in case of primitives
  obj = Object(obj);

  let res = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push(key);
    }
  }
  return res;
};

console.log("myKeys", Object.myKeys(obj));
