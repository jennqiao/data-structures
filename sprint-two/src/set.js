var Set = function() {
  var set = new HashTable();
  set.add = function(item){
    set.insert(JSON.stringify(item), true);
  };
  set.contains = function(item){
    return Boolean(set.retrieve(JSON.stringify(item)));
  };
  var remove = set.remove;
  set.remove = function(item){
    remove.call(set, JSON.stringify(item));
  };
  return set;
};

/*var Set = function() {
  var set = Object.create(setPrototype);
  set._limit = 8;
  set._storage = LimitedArray(set._limit); 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  if(!this._storage.get(index)){
    this._storage.set(index, []);
  }
  if(!this.contains(item)){
    this._storage.get(index).push(item);
  }
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var bucket = this._storage.get(index);
  var hasFound = false;
  if(bucket) {
    for(var i = 0; i < bucket.length; i++) {
      if(!hasFound){

      }
    }
  }
  return Boolean([item]);
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  delete this._storage(index)[item];
};
*/
/*
 * Complexity: What is the time complexity of the above functions?
 */
