var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var hasFound = false;
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      hasFound = this.children[i].contains(target);
      if (hasFound) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
  // Set flag = false
  // Initial node is the tree with this method ('this')
  // If the node has the target value
  //  return true
  // If it has children
  //  loop over children
  //    flag = recurse on child
  //    if true, return
  //  return false
  //                reduce
  //                  if true
  //                    return true
  //                  memo = recurse on each child
  //                  accumulator: false
  // Else if it doesn't have target value
  //  return false
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
