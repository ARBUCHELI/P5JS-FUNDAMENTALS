function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  // TODO: Comment out the below rectangle functions
  // rect(25, 25, 50, 50);
  // rect(100, 25, 50, 50);
  // rect(175, 25, 50, 50);
  // rect(250, 25, 50, 50);
  // rect(325, 25, 50, 50);

  // TODO: Draw a grid of rectangles using for loops 
  for(let posX = 0; posX < 5; posX++){
    for(let posY = 0; posY < 5; posY++){
      rect(posX * 75 + 25, posY * 75 + 25, 50, 50);
    }
  }
}