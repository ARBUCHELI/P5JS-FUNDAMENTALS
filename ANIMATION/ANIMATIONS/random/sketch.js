let circleX;
let circleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(60);
}

function draw(){
  // TODO: Set the elliipse's x position to be a random position
  circleX = random(0, width);

  // TODO: Set the elliipse's y position to be a random position
  circleY = random(0, height);

  // TODO: Set the fill to be a random value between white and black
  fill(random(256), random(256), random(256)); 

  // TODO: Create an ellipse with defined variables passed in
  ellipse(circleX, circleY, 50, 50);
}