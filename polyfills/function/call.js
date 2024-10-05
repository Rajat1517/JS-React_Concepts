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
  let randomProp = Math.random();
  while (thisContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }

  thisContext[randomProp] = this;
  const res = thisContext[randomProp](...args);
  delete thisContext[randomProp];
  return res;
};

console.log(su_30_mki.fly.myCall(rafale, "target3"));
