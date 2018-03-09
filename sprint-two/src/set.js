var Set = function() {
  var set = Object.create(setPrototype);
  set._limit = 8;
  set._storage = LimitedArray(set._limit); 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  if(!this[index]){
    this[index] = {};
  }
  this[index][item] = true;
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  return Boolean(this[index][item]);
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  delete this[index][item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
