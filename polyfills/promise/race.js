// Normal Implementation

const p1 = new Promise((res, rej) => setTimeout(() => rej("p1"), 10));
const p2 = new Promise((res, rej) => setTimeout(() => res("p2"), 1000));
const p3 = new Promise((res, rej) => setTimeout(() => res("p3"), 400));

Promise.race([p1, p2, p3])
  .then((results) => {
    console.log("race", results);
  })
  .catch((error) => console.error("race", error));

// Implementing polyfill

Promise.myRace = function (promises) {
  return new Promise((res, rej) => {
    if (!(promises instanceof Array)) {
      return rej(new TypeError("Non-interable argument"));
    }

    promises = [...promises];

    if (promises.length === 0) return res();

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => {
          return res(val);
        })
        .catch((err) => {
          return rej(err);
        });
    });
  });
};

const p4 = new Promise((res, rej) => setTimeout(() => rej("p4"), 10));
const p5 = new Promise((res, rej) => setTimeout(() => rej("p5"), 100));
const p6 = new Promise((res, rej) => setTimeout(() => res("p6"), 400));

Promise.myRace([p4,p5,p6])
  .then((values) => {
    console.log("myRace", values);
  })
  .catch((error) => {
    console.log("myRace", error);
  });
