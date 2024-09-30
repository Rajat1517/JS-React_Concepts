// Normal Implementation using String.prototype.startsWith

const str= "Hello! This is a test string."

console.log("startsWith",str.startsWith("Hel",100));


// Implementing polyfill using Prototypical Inheritence

String.prototype.myStartsWith= function (prefix,from=0){

    if(prefix instanceof RegExp){
        throw new TypeError("Can not pass regex");
    }
    //Coercing prefix to string
    if( typeof prefix !== "string")
        prefix= String(prefix);

    
    from = from>=0? from: Math.max(this.length+from,0);

    if(from>this.length) return false;

    let i=from;
    for(;i<Math.min(this.length,prefix.length);i++){
        if(this.charAt(i)!== prefix.charAt(i))return false;
    }
    if(i==prefix.length) return true;
    return false;
}

console.log("myStartsWith",str.myStartsWith("Hel",100));


 