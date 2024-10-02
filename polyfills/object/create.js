// Using Object.create to create SU-30 MKI using aircraft's prototype

const aircraft = {
  speed: 1,
  fly: function () {
    console.log(`${this.name} is flying with a speed of ${this.speed} Mach`);
  },
};

const su_30_mki = Object.create(aircraft, {
  name: {
    value: "SU-30 MKI",
    enumerable: true,
    writable: false,
    configurable: false,
  },
  speed: {
    value: 2,
    enumerable: true,
    writable: true,
    configurable: false,
  },
  made: {
    value: "Sukhoi",
    enumerable: true,
    configurable: true,
    writable: false,
  },
});

su_30_mki.fly();

//Implementing polyfill

Object.myCreate = function (proto, propertiesObject) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError("Invalid prototype parameter");
  }

  function tempConstructor() {}

  tempConstructor.prototype= proto;

  const res= new tempConstructor();

  if(propertiesObject !== null){
    Object.defineProperties(res,propertiesObject);
  }

  return res;
};

const rafale= Object.myCreate(aircraft,{
    name:{
        value: "Rafale",
        enumerable: true,
        configurable: false,
        writable: true,
    },
    speed:{
        value: 1.5,
        enumerable: true,
        writable: true,
        configurable: false,
    },
    make:{
        value: "Dassault Aviation",
        enumerable: true,
        writable: false,
        configurable: false,
    }
})

rafale.fly();