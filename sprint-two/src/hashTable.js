

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
  var bucket = this._storage.get(index);
  var hasKey = false;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      hasKey = true; // Alt: use return instead of flag
    }
  }
  if(!hasKey){ // And then you could delete the if here
    bucket.push([k, v]);
    this._counter++;
    if(this._counter > this._limit*.75) {
      this.resizeHash(2);
    }

  
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for(var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      if(tuple[0] === k){
        return tuple[1];
      }
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket){
    for(var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      if(tuple[0] === k){
        bucket.splice(i, 1);
        this._counter--;
        if(this._counter < this._limit*.25 && this._counter !== 0) {
          this.resizeHash(0.5);
        }
        return tuple[1];
      }
    }
  }
 

};

HashTable.prototype.resizeHash = function(num) {
  
  var oldHashStorage = this._storage;

  this._limit = this._limit*num;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;

  var rehash = function(bucket) {
    if (bucket) {
      for (var i=0; i<bucket.length; i++) {
        var tuple = bucket[i];
        var key = tuple[0];
        var value = tuple[1];
        this.insert(key, value);
      }
    }
  };

  oldHashStorage.each(rehash.bind(this));

};
/*
 * Complexity: What is the time complexity of the above functions?
 */


