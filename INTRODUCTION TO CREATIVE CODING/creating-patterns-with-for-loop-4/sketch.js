function setup() {
  createCanvas(400, 400);
}

function draw() {
  for(let posX = 0; posX < 4; posX++)  {
    for(let posY = 0; posY < 4; posY++)  {
      circle(posX * 25, posY * 25, 50);
    }
  }
}