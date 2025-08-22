// Normal Implementation

const p1 = new Promise((res, rej) => setTimeout(() => res("p1"), 2000));
const p2 = new Promise((res, rej) => setTimeout(() => res("p2"), 1000));
const p3 = new Promise((res, rej) => setTimeout(() => res("p3"), 400));

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("all", results);
  })
  .catch((error) => console.error("all", error));

// Implementing polyfill

Promise.myAll = function (promises) {
  // first return a pending a prmosie as all promise methods return a promise
  return new Promise((res, rej) => {
    if (!(promises instanceof Array)) {
      // here we return after settling the promise for rejection as we do not want execute the promise executor further and reject is an async callback it will wait for the executor to complete if not returned immediately
      return rej(new TypeError("Non-iterable argument"));
    }

    promises = Array.from(promises);

    let results = [],
      count = 0;

    if (promises.length === 0) return res([]);

    promises.forEach((promise, index) => {
      // Try to resolve every promise by pushing an explicit resolve over all of them into the microtask queue. Once the forEach loop is executed. All of them will be executed and hence we did not return before the res/rej inside forEach.
      Promise.resolve(promise)
        .then((val) => {
          count++;
          results[index] = val;
          if (count === promises.length) res(results);
        })
        .catch((err) => rej(err));
    });
  });
};

const p4 = new Promise((res, rej) => setTimeout(() => res("p4"), 2000));
const p5 = new Promise((res, rej) => setTimeout(() => res("p5"), 1000));
const p6 = new Promise((res, rej) => setTimeout(() => rej("p6"), 400));

Promise.myAll([p4, p5, p6])
  .then((values) => {
    console.log("myAll", values);
  })
  .catch((error) => {
    console.log("myAll", error);
  });


  /**
   * - All these methods return a promise only. 
   * - all: Takes iterable promises, reutrns the resolved results of all promises in same order. If one fails then it short-circuits and returns the err of that rejection.
   * - race: Assumes the result of first settled promise be it resolved or rejected and then short circuits.
   * - any: Returns the result of first resolved promise. If no one is resolved then returns an Aggregate error.
   * - allSettled: Waits for the entire list to be settled and then returns the status as fulfilled/rejected and value/reason according for each promise.
   * - Sometimes using all/race/any causes problems if the promises passed are chaning some states or any important workflow element as they all follow first-victory and then short circuit and do not care about the other promises being executed, if they change something essential then there can be unknown bugs.
   * - This race condition can be avoided by responisblly using them and relying more on allSettled or AbortCOntroller.
   * - Resolve, Reject are both async methods.
   * - .then and .catch handlers are async as well.
   * - Promises and callbacks are added in the microtask queue
   * - Other async operations like settimeout are added in macrotask queue
   * - normal sync operations are added in the call stack. 
   */