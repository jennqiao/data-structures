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

      
      if (value < this.value) {
        
        // if (this.left) {
        //   this.left.insert(value);
        // } else {
        //   this.left = node;
        // }
        this.left ? this.left.insert(value) : this.left = node;
      } else if (value > this.value) {
        this.right ? this.right.insert(value) : this.right = node;
      }
      
  },

  contains: function(value) {

    
    //if it's greater than and this.right !==null, call contains on this.right
    //  if it is null, then return false
    //if it's less than, call contains on this.left 
    //if it's equal, return true;

    if (value < this.value)  {
      if (this.left) {
        return this.left.contains(value);  
      } else {
        return false;
      }

    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;  
      }
    } else if (value === this.value) {
      return true;
    }
    
  },

  depthFirstLog: function(cb) {

    //call cb on current node
    //if left exists,
    //  recurse function on left property
    //if right exists
    //recurse on right

    cb.call(this, this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
    

    
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
