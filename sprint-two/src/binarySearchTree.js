var BinarySearchTree = function(value) {

  //create an obj
  var tree = {};
  
  tree.value = value;

  tree.left = null;
  tree.right = null;
  //create property value = value
  //create left property, return children on left
  //create right property, return children on right (if it exists)
  //extend obj with methods
  //return an obj

  _.extend(tree, methods);
  return tree;
};

var methods = {

  insert: function (value) {
    
      //call function constructor
      //if this.value (root node) > value, make this.left equal a new tree with the value
      //else if, make this.right...

      //base case, if left/right is null, set it
      //otherwise, this.left.insert(value)

      

      var node = BinarySearchTree(value);

      
      if (this.value > value) {
        
        if (this.left) {
          this.left.insert(value);
        } else {
          this.left = node;
        }
        //this.left ? this.left.insert(value) : this.left = node;
      } else {
        this.right = this.right ? this.right.insert(value) : node;
      }
      
      return this
  },

  contains: function() {
  },

  depthFirstLog: function() {
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
