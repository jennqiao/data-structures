var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  _.extend(list, doublyLinkedListMethods);
  return list;
};

var doublyLinkedListMethods = {
  addToHead: function(value) {
    var node = Node(value);
    var oldHead = this.head;
    this.head = node;
    if(oldHead){
      oldHead.previous = node;
      node.next = oldHead;
    } else {
      this.tail = node;
    }
  },
  removeHead: function() {
    if(!this.head){ // No nodes in list
      return null;
    } else if (!this.head.next){ // One node in list
      var value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    } else { // 2+ nodes
      var oldHead = this.head;
      this.head = oldHead.next;
      this.head.previous = null;
      return oldHead.value;
    }
  },
  addToTail: function(value) {
    var node = Node(value);
    var oldTail = this.tail;
    this.tail = node;
    if(oldTail){
      oldTail.next = node;
      node.previous = oldTail;
    } else {
      this.head = node;
    }
  },
  removeTail: function() {
    if(this.tail){
      var oldTail = this.tail;
      this.tail = oldTail.previous; // Previous, or null if only one
      if(this.tail){ // If there's nodes left
        this.tail.next = null;
      }
      return oldTail.value;
    }
  },
  contains: function(target) {
    node = arguments[1] || this.head;
    if(node.value === target){
      return true;
    } else if (!node.next){
      return false;
    } else {
      return this.contains(target, node.next);
    }
  }
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};