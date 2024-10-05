// Normal Implementation

const p1 = new Promise((res, rej) => setTimeout(() => rej("p1"), 2000));
const p2 = new Promise((res, rej) => setTimeout(() => res("p2"), 1000));
const p3 = new Promise((res, rej) => setTimeout(() => res("p3"), 400));

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("all",results);
  })
  .catch((error) => console.error("all", error));

// Implementing polyfill

Promise.myAll = function (promises) {
  return new Promise((res, rej) => {
    if (!(promises instanceof Array)) {
      return rej(new TypeError("Non-interable argument"));
    }

    promises = [...promises];

    const len = promises.length;
    let values = [];
    let countResolved = 0;

    if (len === 0) return res([]);

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          values[index] = val;
          countResolved++;
          if (countResolved === len) return res(values);
        })
        .catch((err) => {
          return rej(err);
        });
    });
  });
};


const p4 = new Promise((res, rej) => setTimeout(() => res("p4"), 2000));
const p5 = new Promise((res, rej) => setTimeout(() => res("p5"), 1000));
const p6 = new Promise((res, rej) => setTimeout(() => res("p6"), 400));


Promise.myAll([p4,p5,p6])
  .then((values) => {
    console.log("myAll",values);
  })
  .catch((error) => {
    console.log("myAll",error);
  });
