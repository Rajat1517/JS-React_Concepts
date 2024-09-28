// Normal implementation using Array.prototype.flat

const arr=[1,2,[3,[4,5]]];

const flatArr= arr.flat();

console.log("flat",flatArr);

// Implementing polyfill using prototypical inheritence and recursion

Array.prototype.myFlat= function (depth=1){
    if(depth==0) return this;
    let res=[];
    for(let i=0;i<this.length;i++){
        if(Array.isArray(this[i])){
            //concatinating the flattened array into the parent array to flatten insie of the parent
            res= res.concat(this[i].myFlat(depth-1));  
        }
        else res.push(this[i]);
    }
    return res;
}


const flatArr2= arr.myFlat();
console.log( "my flat",flatArr2);
