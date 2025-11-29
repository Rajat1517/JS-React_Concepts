// Normal Implementation using Object.assign

const obj1 = {
  a: 2,
  b: {
    c: 1,
    d: 4,
  },
};

let obj2 = Object.assign({}, obj1);
console.log("assign", obj2);

// Implementing polyfill


Object.myAssign = function (target, ...sources) {
  if (target === null) {
    throw new TypeError("Invalid target object");
  }

  //Coercing to object type
  let res = Object(target);

  sources.forEach((source) => {
    if (source !== null) {
      // for...in loop to ensure enumerable properties are accessed
      for (let key in source) {
        // Used has own property to make sure that properties from prototypical chaining are not considered
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          res[key] = source[key];
        }
      }
    }
  });

  return res;
};

let ob3 = Object.myAssign({}, obj1);

console.log("myAssign", ob3);

Object.myAssign2 = function (target, ...sources) {
  if (!target) return new TypeError("Inalid argument");

  let res = Object(target);

  sources.forEach((source) => {
    if (source !== null)
      for (let key in source) {
        if (source.hasOwnProperty(key)) res[key] = source[key];
      }
  });
  return res;
};

/**
 * A few attributes of Object.assign to consider
 * - Shallow copy
 * - In-place object merger
 * - Only enumerable properties are assigned
 * - Only own properties (non-inherited) properties of source are assigned
 */

/**
 * - Object.assign is a classic example of shallow copy
 * - What other techniques are there to do shallow copy:
 *   - obj1= {...obj2} [Object spreading]
 * - Shallow copy means, only the object properties will be copied till first level, all nested referential props will share reference.
 * - Deep Copy, follows all the levels while copy.
 */