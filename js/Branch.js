var Branch = function(nodes) {
  this.nodes = nodes;
}

Branch.prototype.move = function() {
  this.nodes.forEach(function(node) {
    node.move()
  });
};

Branch.prototype.draw = function() {
  noFill();
  ellipse(0, 0, height, height);
  beginShape();
  this.nodes.forEach(function(node) {
    vertex(node.position.x, node.position.y);
    
  })
  endShape(CLOSE);
};