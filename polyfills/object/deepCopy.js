// Implementing a custom function to perform deep copy of an object

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

// Shallow copy

const obj2 = Object.assign({}, obj);

obj2.b.c = 10;
obj2.b.d.e = 100;

console.log("obj", obj);
console.log("obj2", obj2);

// Deep copy

Object.myDeep = function (obj) {
  if (obj === null || obj === undefined) {
    throw new TypeError("Null Argument");
  }

  if (["number", "boolean", "string"].includes(typeof obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => Object.myDeep(item));
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (obj instanceof Map) {
    let res = new Map();
    obj.forEach((key, val) => {
      res.set(key, Object.myDeep(val));
    });
    return res;
  }

  if (obj instanceof Set) {
    let res = new Set();

    obj.forEach((val) => {
      res.add(Object.myDeep(val));
    });

    return res;
  }

  let res = {};

  for (let key in obj) {
    res[key] = Object.myDeep(obj[key]);
  }
  return res;
};

const obj3 = Object.myDeep(obj);

obj3.b.c = 23;
obj3.b.d.e = 54;
console.log("obj3", obj3);
