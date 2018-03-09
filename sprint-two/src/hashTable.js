

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this[index]){
    this[index] = [];
  } 
  var hasKey = false;
  for (var i = 0; i < this[index].length; i++) {
    if (this[index][i][0] === k) {
      this[index][i][1] = v;
      hasKey = true; // Alt: use return instead of flag
    }
  }
  if(!hasKey){ // And then you could delete the if here
    this[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this[index].length; i++){
    if(this[index][i][0] === k){
      return this[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this[index].length; i++){
    if(this[index][i][0] === k){
      this[index].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


