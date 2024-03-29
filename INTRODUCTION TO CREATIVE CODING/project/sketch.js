// TODO: Create setup() function
function setup() {
  // Inside the setup() function:
  // TODO: Create canvas 500px wide and 500px high

  createCanvas(500, 500);
  background(225);
}
// TODO: Draw horizontal and vertical guidelines
function draw() {
  // TODO: Create wall drawing inside draw() function

  // Inside the draw() function:
  // Draw parallel lines:
  // TODO: Set stroke color and weight
  stroke('#87bdd8');
  strokeWeight(10);
  for (let posX = 0; posX < 10; posX++) {
    line(posX * 25, 0, posX * 25, height / 2);
  }

  // TODO: Use a for loop to draw 10 vertical lines

  // Draw polka dots:
  // TODO: Set no stroke and fill color
  noStroke();
  fill('#feb236');

  // TODO: Use nested for loops to draw a grid of circles
  // TODO: Offset y positions of every other column by 10 pixels
  for (let posX = 0; posX < 10; posX++) {
    for (let posY = 0; posY < 10; posY++) {
      if (posX % 2 === 0) {
        circle(posX * 25 + width / 2, posY * 25 + 10, 10);
      } else {
        circle(posX * 25 + width / 2, posY * 25, 10);
      }
    }
  }

  fill('#c94c4c');
  for (let posX = 0; posX < 10; posX++) {
    for (let posY = 0; posY < 5; posY++) {
      if (posX % 2 === 0) {
        square(posX * 25, posY * 50 + height / 2 + 25, 25);
      } else {
        square(posX * 25, posY * 50 + height / 2, 25);
      }
    }
  }

  // Draw checkered squares:
  // TODO: Set fill color

  // TODO: Use nested for loops to draw rows of squares
  // TODO: Offset y positions of every other column by 25 pixels

  // Draw parallel diagonal lines:
  // TODO: Set stroke color and weight
  stroke('#034f84');
  strokeWeight(10);

  // TODO: Use a for loop to draw diagonal lines
  for (let i = 0; i < 10; i++) {
    line(width / 2, height - i * 25, width / 2 + i * 25, height);
    line(width / 2 + i * 25, height / 2, width, height - i * 25);
  }

  // Draw borders:
  // TODO: Set stroke color

  // TODO: Draw horizontal and vertical guidelines
  stroke('#deeaee');
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  // TODO: Draw borders around canvas
  line(0, 0, width, 0);
  line(0, height, width, height);
  line(0, 0, 0, height);
  line(width, 0, width, height);
}
