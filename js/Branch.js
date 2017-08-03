var Branch = function(nodes, radius) {
  this.nodes = nodes;
  this.radius = radius;
}

Branch.prototype.move = function() {
  this.nodes.forEach(function(node) {
    node.move()
  });
};

Branch.prototype.draw = function() {
  beginShape();
  this.nodes.forEach(function(node) {
    vertex(node.position.x, node.position.y);  
  })
  endShape(CLOSE);
};