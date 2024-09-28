// Normal Implementation using Array.prototype.some for checking even

const arr=[1,2,3,4,5,6,7];

function checker(item,index,array){
    return !(item%2);
}

console.log("some",arr.some(checker));

// Implementing polyfill using prototypical inheritence

Array.prototype.mySome= function (cb,thisArg){
    for(let i=0;i<this.length;i++){
        if(cb.call(thisArg,this[i],i,this))
            return true;
    }
    return false;
}

console.log("mySome",arr.mySome(checker));

