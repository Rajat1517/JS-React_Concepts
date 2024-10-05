// Normal Implementation

const p1 = new Promise((res, rej) => setTimeout(() => rej("p1"), 10));
const p2 = new Promise((res, rej) => setTimeout(() => rej("p2"), 1000));
const p3 = new Promise((res, rej) => setTimeout(() => res("p3"), 400));

Promise.any([p1, p2, p3])
  .then((results) => {
    console.log("any", results);
  })
  .catch((error) => console.error("any", error));

// Implementing polyfill

Promise.myAny = function (promises) {
  return new Promise((res, rej) => {
    if (!(promises instanceof Array)) {
      return rej(new TypeError("Non-interable argument"));
    }

    const len= promises.length;
    let countRejected= 0;
    let reasons= [];

    promises = [...promises];

    if (len === 0) return rej(new AggregateError([],"All promises were rejected"));

    promises.forEach((promise,index) => {
      Promise.resolve(promise)
        .then((val) => {
          return res(val);
        })
        .catch((err) => {
          reasons[index]=err;
          countRejected++;
          if(countRejected===len) {
            return rej(new AggregateError(reasons,"All promises were rejected"));
          };
        });
    });
  });
};

const p4 = new Promise((res, rej) => setTimeout(() => rej("p4"), 10));
const p5 = new Promise((res, rej) => setTimeout(() => rej("p5"), 100));
const p6 = new Promise((res, rej) => setTimeout(() => rej("p6"), 400));

Promise.myAny([p4,p5,p6])
  .then((values) => {
    console.log("myAny", values);
  })
  .catch((error) => {
    console.log("myAny", error);
  });
