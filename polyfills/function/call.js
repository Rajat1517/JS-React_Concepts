// Normal Implementation using Function.prototype.call

const su_30_mki = {
  name: "SU 30 MKI",
  made: "Sukhoi",
  hardpoints: 12,
  speed: 2,
  fly: function (target) {
    return `${this.name} is flying with a speed of ${this.speed} Machs and having ${this.hardpoints} hardpoints to put ${target} down.`;
  },
};

const rafale = {
  name: "Rafale",
  made: "Dassault Aviation",
  hardpoints: 14,
  speed: 1.5,
};

console.log(su_30_mki.fly("target1"));
console.log(su_30_mki.fly.call(rafale, "target2"));

// Implementing polyfill

Function.prototype.myCall = function (thisContext, ...args) {
  if (thisContext === null) return {};
  // trying to find out a key that is not assigned some value. As we will assign the "this", that is the function over which the myCall will be invoked. By doing this, that method will be added inside the borrowing method(thisContext)
  /**
   * if will look like this:
   * thisContext= {
   * a:b,
   * randomKey: this,
   * }
   */
  let randomKey = Math.random();
  while (thisContext[randomKey] !== undefined) {
    randomKey = Math.random();
  }

  thisContext[randomKey]= this;
  // calling the borrowed function via thisContext object
  const res= thisContext[randomKey](...args);
  delete thisContext[randomKey];
  return res;
};

console.log(su_30_mki.fly.myCall(rafale, "target3"));


/**
 * - "this" in an arrow function points to the lexical scope. Usually window.
 * - "this" inside a class points to the class instance.
 * - "this" inside the a regular fucntion points to either of 2 things based on how the method is called:
 *     - If the function is a part of an object and is called by it or any other object after borrowing, the this points to the calling object.
 *     - if the it is called regularly, then this points to the function scope or you can say fucntion constructor.
 * - Method Borrowing: When a method from object A is called by the method B with the help of call/apply/bond.
 */
