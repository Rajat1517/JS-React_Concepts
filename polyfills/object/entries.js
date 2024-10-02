// Normal Implementation using Object.entries

const obj = {
  one: 1,
  two: 2,
  four: 4,
};

Object.defineProperty(obj, "three", {
  value: 3,
  enumerable: false,
});

console.log("entries", Object.entries(obj));

// Implementing polyfill

Object.myEntries = function (obj) {
  if (obj === null || obj === undefined) {
    throw new TypeError("Object parameter can not be null or undefined");
  }
  // Coering in case of primitives
  obj = Object(obj);

  let res = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push([key, obj[key]]);
    }
  }
  return res;
};

console.log("myEntries", Object.myEntries(obj));
