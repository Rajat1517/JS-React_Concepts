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
  const cb = this;
  const params = args.splice(1);
  // we do this cb trick, because in case of regular functions as nested function declaration the implicit this binding is lost and default binding applies. To captutre and explicitly hold the implicit from outer fn, we keep it in cb
  // we can work without it as well, covered in myBind2
  return function (...extraArgs) {
    return cb.call(args[0], ...[...params, ...extraArgs]);
  };
};


Function.prototype.myBind2= function (thisContext, ...args){

  // As we return an arrow function, now the implicit this binding is kept entact. Because the arrow fuction depends on lexical binding and the closest this binding in its lexical scope is the outer regular function is implicitly bound to the caller fn. Hence that is passed in the nested fn as this.

  return (...extraArgs)=>{
    return this.call(thisContext,...args, ...extraArgs );
  }
}


// 

const rafale_fly2 = su_30_mki.fly.myBind(rafale);

console.log(rafale_fly2("target4", "target5"));
