// Normal Implementation using Object.assign

const obj1 = {
    a:2,
    b:{
        c:1,
        d:4
    }
};

let obj2= Object.assign({},obj1);
console.log("assign",obj2);

// Implementing polyfill using Prototypical Inheritence
/**
 * A few attributes os Object.assign to consider
 * - Shallow copy
 * - In-place object merger
 * - Only enumerable properties are assigned
 * - Only own properties (non-inherited) properties of source are assigned
 * - 
 */

Object.myAssign= function(target,...sources){
    if(target===null){
        throw new TypeError("Invalid target object");
    }

    //Coercing to object type
    let res= Object(target);

    sources.forEach(source=>{
        if(source !==null){

            // for...in loop to ensure enumerable properties are accessed
            for(let key in source){
                if(Object.prototype.hasOwnProperty.call(source,key)){
                    res[key]=source[key];
                }
            }
        }
    });

    return res;
}


let ob3= Object.myAssign({},obj1);

console.log("myAssign", ob3);

