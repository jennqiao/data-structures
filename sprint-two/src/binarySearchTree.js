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
    

    
  },

  breadthFirstLog: function(cb) {

  //previous binary number solution:
  //while any nodes' children is greater than 0 (counter) aka not null
  //increment by 1
  //2^ increment = how many binary numbers we need
  //for each digit until the 2^ increment hits
    
    
    //helper function: count up by binary number
    //helper function: translate binary code to directions
      //  create [] with length of at least the increment, and add 0s to front if necessary
      //var node name
      //loop through each elem in array
      //if 0, node name += .left, if right node name += 
      //this.left.left.right
    //read array, if 0, go left, if right, go right


  //queue solution!

  //create a queue
  //add first node to queue
  //dequeue, and call function on that result
  //add that node's children to the queue
  //repeat dequeue until the queue is empty

    var queue = [];
    queue.push(this); //0 is front, last is back
    
    while (queue.length > 0) {
      var result = queue.shift();
      if (result.left){
        queue.push(result.left);
      } 
      if (result.right) {
        queue.push(result.right);
      }
      cb.call(result, result.value);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
