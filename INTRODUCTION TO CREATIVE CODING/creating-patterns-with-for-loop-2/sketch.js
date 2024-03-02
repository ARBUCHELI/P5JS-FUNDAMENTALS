function setup() {
  createCanvas(400, 400);
}

function draw() {
  for(let lineX = 0; lineX < 99; lineX++){
    line(4 + lineX * 4, 0, 4 + lineX * 4, height);
  }
}