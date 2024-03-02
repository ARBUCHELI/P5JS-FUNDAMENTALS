function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let i = 0; i < 255; i++){
    fill(i);
    circle(width/2, height/2, 255-i);
  }
}