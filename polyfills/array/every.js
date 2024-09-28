// Normal Implementation using Array.prototype.every for checking even

const arr=[2,2,2,2,2,2];

function checker(item,index,array){
    return !(item%2);
}

console.log("every",arr.every(checker));

// Implementing polyfill using prototypical inheritence

Array.prototype.myEvery= function (cb,thisArg){
    let count=0;
    for(let i=0;i<this.length;i++){
        if(cb.call(thisArg,this[i],i,this))
            count++;
    }
    return count===this.length;
}

console.log("myEvery",arr.myEvery(checker));

