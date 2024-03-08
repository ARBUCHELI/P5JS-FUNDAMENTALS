function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    // Background color is black with opacity of 15
    background(0, 15);
    noStroke();
    fill('#b7d7e8');
    // Oscillate size using sin()
    // sizeOne ranges between 0 and width / 2
    let sizeOne = sin(frameCount * 0.01) * width / 4 + width / 4;
    ellipse(width / 4, height / 2, sizeOne, sizeOne);
    
    // Oscillate size using cos()
    // sizeTwo ranges between 0 and width / 2
    let sizeTwo = cos(frameCount * 0.01) * width / 4 + width / 4;
    ellipse(width / 4 * 3, height / 2, sizeTwo, sizeTwo);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }