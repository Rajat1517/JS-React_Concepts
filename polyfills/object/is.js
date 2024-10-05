// Normal implementation using Object.is

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
  },
};

const obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
  },
};

const obj3 = Object.assign({}, obj1);

console.log("is", Object.is(obj1, obj2));
console.log("is", Object.is(obj1.c, obj3.c));

// Implementing Polyfill

Object.myIs = function (a, b) {
  // NaN !== NaN => true
  // Object.is(NaN,NaN) => true
  if (a !== a && b !== b) return true;

  // 0 === +0 && 0 === -0 && -0 === +0 => true
  // Object.is(0,+0) || Object.is(0,-0) || Object.is(+0,-0) => false
  if (a === 0 && b === 0) {
    // +Infinity !== -Infinity
    return 1 / a === 1 / b;
  }

  return a === b;
};

console.log("myIs", Object.myIs(obj1, obj2));
console.log("myIs", Object.myIs(obj1.c, obj3.c));
