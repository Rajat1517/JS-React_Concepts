// Normal Implementation using Array.prototype.forEach

const arr=[1,2,3,4,5,6,7,8];

arr.forEach((item,index,array)=>{
    console.log("forEach",index,"->",item);
});

// Implementing polyfill using Prototypical Inheritence

Array.prototype.myForEach= function (cb){
    for(let i=0;i<this.length;i++){
        cb(this[i],i,this);
    }
}

arr.myForEach((item,index,array)=>{
    console.log("myForEach",index,"->",item);
})
