# ANIMATION WITH P5.JS
----------------------

* Introduction
--------------
1 min
Now that you know how to draw a static sketch in p5.js, it is natural to wonder, “How can I make it move?”

In this lesson, you will learn how to make a p5.js drawing that changes with time, also known as an animation. An animation is really just an illusion. Any time we see an animation, we 
are actually seeing a sequence of frames that give us the illusion of movement. Frames are individual pictures in a sequence of images. When multiple frames are shown at a fast enough 
rate, our eyes translate and blend them into a single moving image. A classic example is Eadweard Muybridge’s Horse in Motion, in which the photographer took 12 photos of a galloping 
horse in rapid succession.

Eadweard Muybridge horse frames

When you show the pictures one after the other, it creates a motion-picture!

Eadweard Muybridge horse animated

In p5.js, this illusion of creating a moving image can be easily achieved by utilizing essential principles and functions such as the draw() loop, frames, and frame rates. In order to 
have control over your animation’s speed and states, it will be important to understand how to increment or decrement values, change variables, create your own functions, and use 
conditional statements.

By the end of this lesson, you will be able to make your p5.js drawings come to life!

* Instructions
--------------
Explore the p5.js sketch of this spaceship scene. Pay attention to the frameRate() function, the random() function, incrementing or decrementing values, creating custom functions, and 
writing conditional statements.

Click “Next” when you are ready to get started making p5.js animations!

sketch.js
---------
let x = 0; // Starting position for x
let y = 300; // Starting position for y
let size = 85; 
let speed = 5; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(32); // Slower frame rate
  noStroke();
}

function draw() {
  background(0);
  drawMoon(); 
  spaceship(x, y, size);

  if (x > width + 100) {
    x = -50; // Reset x position 
    y = random(0, height); // Reset at a random y position
  }
  x = x + speed; // Increment x position
}

// Custom function to draw the moon
function drawMoon() {
  // Moon
  fill(80);
  ellipse(width / 2, height / 2, width / 1.145);

  // Crater
  fill(0, 30);
  ellipse(width / 2 + width / 4, height / 2 - width / 4, width / 2);

  // Crater
  fill(0, 30);
  ellipse(width / 2 - width / 4, height / 2 + width / 10, width / 6);

  // Crater
  fill(0, 30);
  ellipse(width / 2, height / 2 + width / 3, width / 3);
}

// Custom function to draw spaceship
function spaceship(x, y, size) {
  fill(255);
  
  // Wings
  triangle(x + 25, y - size / 4, x + size, y + size / 4, x + 25, y + size * 3 / 4);
  
  // Body
  rect(x, y, size, size / 2, 5);
  ellipse(x + size, y + size / 4, size, size / 2);
  
  // Windows
  fill(0);
  ellipse(x + size / 3, y + size / 4, size / 4);
  ellipse(x + size * 2 / 3, y + size / 4, size / 4);
  ellipse(x + size, y + size / 4, size / 4);
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------

