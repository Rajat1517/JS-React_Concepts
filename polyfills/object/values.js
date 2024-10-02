// Normal Implementation using Object.values

const obj = {
  one: 1,
  two: 2,
  four: 4,
  five:{
    value:5,
    square: 25,
  }
};

Object.defineProperty(obj, "three", {
  value: 3,
  enumerable: false,
});

console.log("values", Object.values(obj));

// Implementing polyfill

Object.myValues = function (obj) {
  if (obj === null || obj === undefined) {
    throw new TypeError("Object parameter can not be null or undefined");
  }
  // Coering in case of primitives
  obj = Object(obj);

  let res = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push(obj[key]);
    }
  }
  return res;
};

console.log("myValues", Object.myValues(obj));
