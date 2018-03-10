var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  _.extend(list, doublyLinkedListMethods);
  return list;
};

var doublyLinkedListMethods = {
  addToHead: function() {},
  removeHead: function() {},
  addToTail: function() {},
  removeTail: function() {},
  contains: function() {}
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};