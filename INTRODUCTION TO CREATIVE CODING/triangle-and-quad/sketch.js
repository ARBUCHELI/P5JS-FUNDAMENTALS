function setup(){
  createCanvas(400, 400);
  background(200);
}

function draw(){
  // Your drawing code goes here
  // TODO: Draw a triangle
  triangle(100, 50, 200, 100, 100, 100);
  // TODO: Draw a triangle that shares one vertex with the one above
  triangle(200, 100, 300, 150, 200, 150);
  // TODO: Draw a quadrilateral
  quad(100, 400, 200, 450, 200, 500, 50, 500);
  // TODO: Draw a quadrilateral that shares one vertex with the one above
  quad(50, 500, 250, 550, 250, 600, 50, 600);
}