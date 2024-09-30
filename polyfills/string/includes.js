// Normal implementation using String.prototype.includes

const str= "Hello! This is Rajat Mishra"

console.log("includes",str.includes("Hello",100));

// Implementing polyfill using Prototypical Inheritence

String.prototype.myIncludes= function(substr,start=0){
    if(substr===undefined) return false;
    start= start<0? 0 : Math.min(this.length,start);
    if(substr instanceof RegExp){
        throw new TypeError("Invalid string parameter");
    }
    if(substr.length==0) return true;
    let j;
    for(let i=start;i<this.length;i++){
        if(this.charAt(i)==substr.charAt(0)){
            for(j=0;j<substr.length;j++){
                if(this.charAt(i+j)!=substr.charAt(j))break;
            }
            if(j==substr.length) return true;
        }
    }
    return false;
}

console.log("myIncludes",str.myIncludes("Hello",100))