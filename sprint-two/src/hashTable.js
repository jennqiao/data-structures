

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(index)){
    this._storage.set(index, []);
  } 
  var hasKey = false;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
      hasKey = true; // Alt: use return instead of flag
    }
  }
  if(!hasKey){ // And then you could delete the if here
    this._storage.get(index).push([k, v]);
    this._counter++;
    if(this._counter > this._limit*.75) {
      this.resizeHash(2);
    }

  
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    for(var i = 0; i < this._storage.get(index).length; i++){
      if(this._storage.get(index)[i][0] === k){
        return this._storage.get(index)[i][1];
      }
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)){
    for(var i = 0; i < this._storage.get(index).length; i++){
      if(this._storage.get(index)[i][0] === k){
        this._storage.get(index).splice(i, 1);
        this._counter--;
      }
    }
  }
  if(this._counter < this._limit*.25 && this._counter !== 0) {
    this.resizeHash(0.5);
  }

};

HashTable.prototype.resizeHash = function(num) {
  
  this._limit = this._limit*num;
  var oldHashStorage = this._storage;
  var newHashTable = new HashTable(this._limit);

  var rehash = function(bucket, bucketIndex) {
    if (bucket) {
      for (var i=0; i<bucket.length; i++) {
        var key = bucket[i][0];
        var value = bucket[i][1];
        newHashTable.insert(key, value);
      }
    }
  };

  oldHashStorage.each(rehash);
  this._storage = newHashTable._storage;
  this._counter = newHashTable._counter;

};
/*
 * Complexity: What is the time complexity of the above functions?
 */


