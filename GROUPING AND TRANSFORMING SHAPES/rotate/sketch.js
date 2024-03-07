function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
    fill(0);
  
    // TODO: Rotate the ellipse pattern by a quarter pi
    //rotate(QUARTER_PI);
  
    // TODO: Specify the angle mode to be degrees
    angleMode(DEGREES);
  
    // TODO: Rotate by 30 degrees
    //rotate(10);
    
    rotate(radians(frameCount *  -10));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height *2 ; j += 75) {
        fill('#bc5a45');
        ellipse(i, j, 50, 50);
      }
    }

    rotate(radians(frameCount *  11));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height *2 ; j += 75) {
        fill('#6b5b95');
        ellipse(i, j, 50, 50);
      }
    }
      
    rotate(radians(frameCount * -12));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height * 2; j += 75) {
        fill('#feb236');
        rect(i, j, 50, 50);
      }
    }

    rotate(radians(frameCount * 13));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height * 2; j += 75) {
        fill('#a2b9bc');
        rect(i, j, 50, 50);
      }
    }

    rotate(radians(frameCount *  -14));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height *2 ; j += 75) {
        fill('#a96e5b');
        ellipse(i, j, 50, 50);
      }
    }

    rotate(radians(frameCount *  15));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height *2 ; j += 75) {
        fill('#587e76');
        ellipse(i, j, 50, 50);
      }
    }
   
    rotate(radians(frameCount * 16));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height * 2; j += 75) {
        fill('#c1502e');
        rect(i, j, 50, 50);
      }
    }

    rotate(radians(frameCount * 17));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height * 2; j += 75) {
        fill('#686256');
        rect(i, j, 50, 50);
      }
    }
  }