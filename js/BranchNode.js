var BranchNode = function(position, speed, boundaryRadius) {
  this.position = position;
  this.speed = speed;
  this.boundaryRadius = boundaryRadius;
  this.moveNoise = random();
}

BranchNode.prototype.move = function() {
  this.moveNoise += 0.001;
  var angle = noise(this.moveNoise) * TWO_PI;
  if (this.position.mag() > this.boundaryRadius/2) this.speed *= -1;
  var newPosition = createVector(cos(angle) * this.speed, sin(angle) * this.speed);
  this.position = this.position.add(newPosition);
};