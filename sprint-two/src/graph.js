

// Instantiate a new graph
var Graph = function() {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add property with node as key to object, and set value to empty array
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //if obj's key(node) exists, return true
  return !!this[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    //delete key from obj
    //for each node in obj, remove edge
    this.forEachNode(this.removeEdge, node)
    delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //from Node: add toNode to their array
  //toNode: add fromNode to their array
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    //find indexof toNode in fromNode
    //then splice to delete that ele
    //if fromNode has toNode in its array 
    if (this[fromNode].indexOf(toNode) > -1) {
      this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
      this[toNode].splice(this[toNode].indexOf(fromNode), 1);
    }
    

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  //iterate over obj
  //for each node, perform cb with that node as the argument
  //callback.apply(arguments.slice(1))
  
  for (var key in this) {
    if (Array.isArray(this[key])) {
      var args = Array.from(arguments);
      args[0] = key; //assumes key is first parameter
      cb.apply(this, args);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


