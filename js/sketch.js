var branch, size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(24);
  background(color("#333333"));
  strokeWeight(4);
  stroke(255);
  strokeJoin(ROUND);
  noFill();
  size = min(windowWidth, windowHeight) * 0.9;

  var randomPosition = function() {
    var position = createVector(random(size/2), random(size/2));
    if (position.mag() > size/2) return randomPosition();
    return position;
  }

  var numNodes = 6;
  var nodes = [];
  
  for (var i = 0; i < numNodes; i++) {
    nodes.push(new BranchNode(randomPosition(), 1/3, size));
  }
  branch = new Branch(nodes, size);
}

function draw() {
  background(51, 16);
  translate(width/2, height/2);
  ellipse(0, 0, size, size);
  var numSpokes = 8;
  rotate(TWO_PI / numSpokes/2)
  for (var i = 0; i < numSpokes; i++) {    
    rotate(TWO_PI / numSpokes);
    push();
    if (i % 2) scale(-1, 1);
    branch.move();
    branch.draw();
    pop();
  } 
}