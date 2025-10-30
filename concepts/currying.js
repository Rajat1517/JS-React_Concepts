/**
 * currying is a smart play of fucntional programming and closure concept in js
 * It is used to breakdown a function with multiple arguments into a series of functions taking single argument at a time and returning the output accordingly.
 * Its real use case is discussed later
 */

const sum = (a, b, c) => {
  return a + b + c;
};

const sumcurried = (a) => {
  let sum = a;
  return (b) => {
    sum += b;
    return (c) => {
      return sum + c;
    };
  };
};

console.log("normal sum", sum(1, 2, 3));
console.log("curried sum", sumcurried(1)(2)(3));

/**
 * Currying means: Keep collecting arguments until we have enough to call the original function.
 * fn.length = no of formal arguments of a funciton object
 * arguments.length= no of actual arguments of the function call
 * This is extended illustration is to understand the general currying method
 */

function curry(fn) {
  return function curried(...args) {
    if (fn.length <= args.length) return fn(...args);
    else return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

// this function accepts the arguments until the actual arguments meet the least count of the formal arguments of the fn
// there is a limitation to this implementation that it relies on fn.length. But it considers arguments only before the first default argument, or it does not take the count of rest arguments.

const curriedSum2 = curry(sum);

console.log("curried generally", curriedSum2(2)(3)(4));
console.log("curried generally", curriedSum2(2, 3)(4));
console.log("curried generally", curriedSum2(2)(3, 4));
console.log("curried generally", curriedSum2(2, 3, 4));
console.log("curried generally", curriedSum2(2, 3, 4, 10));

/**
 * Infinite Currying
 * - Until now we were currying for function for which we knew how many formal arguments are accepted.
 * - For usecases where we do not know the number of arguments or the count is dynamically changed based on runtime requirement.
 * - This extension adds more value to the currying concept
 *
 * Implementation
 * - New idea of currying: Keep accepting arguments until an empty argument list is passed.
 */

function infiniteSum(a) {
  let sum = a;

  return function next(b) {
    if (b === undefined) return sum;
    sum += b;
    return next;
  };
}

console.log("infinite sum", infiniteSum(2)(3)(5)());

/**
 * - Here, we still have an inconvinience. We always have to call the method an extra time to specify the end of sequence
 * - We would use valueOf and toString method of objects for attaining something like this: sum(2)(3) === 5 => true
 * - valueOf and toString are covered in other part. They are methods involved in the implicit type coersion of objects to primitives/strings.
 *
 *
 * $$$ this technique will only work if apply some operation on the function call. For example comparing it with some number or converting it into a string. Like I mentioned, the methods work for type coersion.
 */

function infiniteSum2(a) {
  function next(b) {
    a += b;
    return next;
  }

  next.valueOf = () => {
    return a;
  };

  next.toString = () => {
    return a;
  };

  return next;
}

console.log("infinite sum optimised", infiniteSum2(2)(3) == 5);
console.log("infinite sum optimised", infiniteSum2(2)(3) === 5); // this would still show false as === does not allow type coersion for comparison

/**
 * Real Use Case
 * - The real use case of currying can vastly seen in Partial Implementation. I have provided the example below.
 * - Also currying funcitons are widely used in the immer library which is inherently used in Redux Toolkit (RTK) for making the states look mutable in reducers.
 */

const logger = (type) => {
  return (category) => {
    return (message) => console.log(`${type}: ${category}/${message}`);
  };
};

const errorLogger = logger("Error");
const successLogger = logger("Success")(201);

errorLogger(404)("Resoruce not found");
errorLogger(503)("There is some issue in the server");
successLogger("The resource has successfully been added to the database");
