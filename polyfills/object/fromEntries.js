// Normal Implemenation using Object.fromEntries

const arr = [
  ["number", 4],
  ["string", "Hello"],
  [
    "object",
    {
      a: 1,
      b: 2,
    },
  ],
];
const map = new Map(arr);

const obj1 = Object.fromEntries(arr);
const obj2 = Object.fromEntries(map);

console.log("fromEntries", obj1);
console.log("fromEntries", obj2);

// Implementing polyfill

Object.myFromEntries = function (arr) {
  if (!(arr instanceof Array) && !(arr instanceof Map)) {
    throw new TypeError("Invalid argument: Non-iterable argument");
  }

  let res = {};

  for (let item of arr) {
    if (item instanceof Array && item.length == 2) {
      const [key, value] = item;
      if (key !== undefined) res[key] = value;
    } else {
      throw new TypeError(
        "Invalid argument: Each element in the argument should be of [key,value] form"
      );
    }
  }

  return res;
};

const obj3 = Object.myFromEntries(arr);
const obj4 = Object.myFromEntries(map);

console.log("myFromEntries", obj3);
console.log("myFromEntries", obj4);
