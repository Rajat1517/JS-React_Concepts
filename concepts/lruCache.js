export default class LRUCache{
    constructor(limit=5){
        this.limit=limit;
        this.cache= new Map();
    }

    get(key){
        if(!this.cache.has(key)) return null;
        const val= this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,val);
        return val;
    }

    set(key,val){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        this.cache.set(key,val);
        if(this.cache.size>this.limit){
            const oldKey= this.cache.keys().next().value;
            this.cache.delete(oldKey);
        }
        return;
    }
}


// This uses the fact that Map inserts keys in order. Otherwise there is a longer but effecient doubly linked list way