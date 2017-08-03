var branch;

function setup() {
  var canvasSize = min(windowWidth, windowHeight) * 0.8;
  createCanvas(windowWidth, windowHeight);
  background(color("#333333"));
  strokeWeight(4);
  stroke(255);
  strokeJoin(ROUND);

  var randomPosition = function() {
    var position = createVector(random(height/2), random(height/2));
    if (position.mag() > height/2) return randomPosition();
    return position;
  }
  
  var numNodes = 6;
  var nodes = [];
  for (var i = 0; i < numNodes; i++) {
    nodes.push(new BranchNode(randomPosition(), 0.25));
  }
  branch = new Branch(nodes);
}

function draw() {
  background(51, 32);
  translate(width/2, height/2);
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