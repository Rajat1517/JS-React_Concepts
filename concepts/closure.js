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

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const printX = debounce((x) => console.log(x), 200);

for (let i = 0; i < 5; i++) {
  printX(i);
}

// this will only print 4, as the printX function is debounced and on every iteration when it is called, the timeout of the debouncing funciton resets. Hence we get the output of the last call.
// This is different than the let and var code snippet output, as this resembles with the twisted use of var to print the viable output. In that another fucntion is called inside the loop giving var a newer scope, here alse the printX funcion works the same.

// Another common application of closure in UI performace is "Throttling". It lets the funitnality to be executed in a fixed interval even if called multiple times within the interval.
//  lets UI to not break if the user spam the functionality creting a load on the browser.

const throttle = (fn, interval) => {
  let last;
  return (...args) => {
    const now = Date.now();
    if (!last || now - last >= interval) {
      last = now;
      fn(...args);
    }
  };
};



const printY= throttle((y)=>console.log(y),200);

for(let i=100;i<1000;i+=100){
  setTimeout(()=>{
    printY(i);
  },i)
}


