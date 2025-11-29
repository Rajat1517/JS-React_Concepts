

const arr = [10, 20, 30]; // Object(or Array) Literal 

console.log(arr.__proto__ === Array.prototype);  // => true
console.log(arr.__proto__.__proto__ === Object.prototype); // => true
console.log(arr.__proto__.__proto__.__proto__ === null); // =>



const obj = {
    name: "Rajat",
    greet: "Hello",
    getDetails: function () {
        console.log(`${this.name} says ${this.greet}`);
    }
}

obj.getDetails(); // => Rajat says Hello


const obj2 = Object.create(obj);
// using this we specify a proto for our object instead of the default proto chain
// now the chain is: obj2 -> obj -> Object.prototype -> null
// otherwise it would have been: obj2 -> Object.prototype -> null
// hence we have access to obj's properties as well in obj2

obj2.getDetails(); // => Rajat says Hello

obj2.name = "Rajat's Friend";

obj2.getDetails(); // => Rajat's Friend says Hello
// Why? Because this context has access to all the properties of the object, and due to chaining, the inherited properties are also part of the object. $$ But only those properties are inherited which are not own properties of the obj2 $$. Here obj2.hasOwnProperty(name) => true, hence name from obj is not inherited and this points to own name. 



