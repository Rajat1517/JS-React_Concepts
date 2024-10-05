// Normal Implementation using Function.prototype.call

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

const rafale_fly = su_30_mki.fly.bind(rafale);

console.log(rafale_fly("target2", "target3"));

// Implementing polyfill

Function.prototype.myBind = function (...args) {
  const cb = this,
    arguments = args.splice(1);

  return function (...extraArgs) {
    return cb.call(args[0], ...[...arguments, ...extraArgs]);
  };
};

const rafale_fly2 = su_30_mki.fly.myBind(rafale);

console.log(rafale_fly2("target4", "target5"));
