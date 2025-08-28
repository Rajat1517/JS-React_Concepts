//  One core statement to understand closure: Inner function keeps a reference to a variable of outer function and can access it even after the outer function has been executed

const outer = () => {
  const x = "My funciton has been executed!";
  return (inner = () => {
    console.log(x);
  });
};

const closureFn = outer();

closureFn();

//  The outer funciton is done being executed, but still the closureFn has the access to "x"

// One of applictions of closure: Keeping a variable encapsulated

const createCalculator = () => {
  let val = 0;
  return {
    increment: function (x) {
      val += x;
      return val;
    },
    decrement: function (x) {
      val -= x;
      return val;
    },
  };
};

const { increment, decrement } = createCalculator();

console.log("increment by 2:", increment(2));
console.log("decrement by 2:", decrement(2));
console.log("decrement by 5:", decrement(5));
console.log("increment by 19:", increment(19));

//  One other very common application of closure is debouncing of function. It is added under the performance section.
