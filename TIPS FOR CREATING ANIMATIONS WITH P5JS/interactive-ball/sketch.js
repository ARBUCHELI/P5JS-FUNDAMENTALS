function setup() {
    createCanvas(windowWidth, windowHeight);
    // Set color mode to HSB
    // Hue ranges between 0 - 360
    // Saturation ranges between 0 - 100
    // Brightness ranges between 0 - 100
    colorMode(HSB, 360, 100, 100);
  }
  
  function draw() {
    background(0, 15);
    
    // Map mouseX with initial range of 0 and width to a new range of 0 and 360
    let hue = map(mouseX, 0, width, 0, 360);
    // Map mouseX with initial range of 0 and width to a new range of 50 and width / 2
    let size = map(mouseX, 0, width, 50, width / 2);
    
    noStroke();
    fill(hue, 100, 100);
    ellipse(width / 2, height / 2, size, size);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }