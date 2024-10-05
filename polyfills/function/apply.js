// Normal Implementation using Function.prototype.apply

const su_30_mki = {
  name: "SU 30 MKI",
  made: "Sukhoi",
  hardpoints: 12,
  speed: 2,
  fly: function (target1, target2) {
    return `${this.name} is flying with a speed of ${this.speed} Machs and having ${this.hardpoints} hardpoints to put ${target1} & ${target2} down.`;
  },
};

const rafale = {
  name: "Rafale",
  made: "Dassault Aviation",
  hardpoints: 14,
  speed: 1.5,
};

console.log(su_30_mki.fly("target0", "target1"));
console.log(su_30_mki.fly.apply(rafale, ["target2", "target3"]));

// Implementing polyfill

Function.prototype.myApply = function (thisContext, args) {
  let randomProp = Math.random();
  while (thisContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  thisContext[randomProp] = this;
  const res = thisContext[randomProp](...args);
  delete thisContext[randomProp];
  return res;
};

console.log(su_30_mki.fly.myApply(rafale, ["target4", "target5"]));
