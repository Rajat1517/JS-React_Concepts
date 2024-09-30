// Normal Implementation using String.prototype.repeat

const str= "Hello!";

console.log("repeat",str.repeat(2));


// Implementing polyfill using Prototypical Inheritence

String.prototype.myRepeat= function(count=0){

    if(count<0 || count > 2**26) {
        throw new RangeError("Invalid count value");
    }
    let res="";
    while(count--){
        res+=this;
    }
    return res;
}


console.log("myRepeat",str.myRepeat(2));

