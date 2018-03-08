var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //set previous tail's pointer to new node created

    //create a new node with value passed in
    //set the tail to this one
    //if it's the first node ever, also set this node as head
    //else, set the previous node's next to point to this one



    var newNode = Node(value);
    var previousTail = list.tail;
    
    list.tail = newNode;

    if (!list.head) {
      list.head = list.tail;
    } else {
      previousTail.next = newNode;
    }
    
  };

  list.removeHead = function() {
 
    //set removed node to existing head
    //find the node after the existing head.next (could be null)
    //set head to that node 
    //if this was the last node, make sure list.tail is set to null
    //remove the removed head

    var removedNode = list.head.value;
    list.head = list.head.next;
    if (!list.head) {
      list.tail = null;
    }
    return removedNode;
  };

  list.contains = function(target) {
    //if no extra parameter, start with list.head
    //base case, if this obj is list.tail
    //return false if it doesn't have the target


    //start with list.head
    //check .value
    //if it's === target, return true
    //otherwise, call it with target and value of .next

    var node = arguments[1] || list.head;
    
    if (node.value === target) {
      return true;
    } else if (node === list.tail) {
      return false;
    } else {
      return list.contains(target, node.next);
    }


    //while you haven't found target, and this obj != list.tail

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
