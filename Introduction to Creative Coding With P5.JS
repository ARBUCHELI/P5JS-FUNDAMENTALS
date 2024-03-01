# INTRODUCTION TO CREATIVE CODING WITH P5.JS
--------------------------------------------

* What is p5.js?
----------------
1 min
Welcome to the wonderful world of p5.js!

p5.js is a JavaScript library that makes it incredibly simple to get started with creative coding by providing a suite of pre-written functions to quickly develop interactive visual 
programs. With only a few lines of code, you can dynamically create visualizations with shapes and even manipulate media elements like images and videos!

Using the metaphor of a sketchbook, p5.js encourages an approach to programming called sketching as code, where it is easy to add, remove, and change lines of code to create generative 
programs. We refer to programs made with p5.js as sketches. However, you’re not limited to your drawing canvas—you can think about the whole browser as your sketch. p5.js makes it easy to 
interact with HTML objects and the world wide web!

An open-source community actively develops the p5.js library, and you can contribute to its development at p5js.org and get involved with Codecademy’s forum to share creative coding 
sketches and experiments.

If you are new to creative coding, then this course is for you! No prior creative coding knowledge is expected. We will start at the very beginning and move slowly.

If you are new to JavaScript, consider taking our Learn JavaScript course and then returning to p5.js.

* Instructions
--------------
Take a look at the p5.js sketch on the right. Mouse click changes the color, and the horizontal position of the mouse sets the range of motion. Throughout this course, we will learn how 
to create visualizations like this and more!

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Anatomy of a p5.js Sketch
---------------------------
1 min
Before diving into code, let’s take a look at the web technologies that p5.js uses. If you are relatively new to web programming, remember that web applications typically require three 
types of files: HTML, CSS, and JavaScript. The same applies to a p5.js program! Here are lists of roles that each of these components plays to render a p5.js sketch.

* HTML:
-------
	. HTML is used for the content of a web page.

	. The HTML file is where you can view the output of your p5.js program in the browser.

	. You’ll also have to link your p5.js sketch file and the p5.js library as <script> tags. For more information about how you can download and include the p5.js library in your 
	HTML document, refer to the Creating a Local p5.js Project article. During your p5.js learning journey on the Codecademy platform, you don’t need to worry about this. We will 
	focus on learning about the library itself.

* CSS:
------
	. CSS stylesheets are used to style HTML elements.

	. p5.js will create an HTML <canvas> element that you can style using CSS. We will talk more about the <canvas> element in the next exercise.

* JavaScript:
-------------

	. JavaScript is used for adding functionality to a web application.

	. A JavaScript file, typically named sketch.js, will contain the code for your p5.js application.

	. p5.js is a JavaScript library that contains built-in variables and functions to help you develop visual programs.

* Instructions
--------------
Take a look at the diagram on the right to explore the anatomy of a p5.js Sketch!

------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Canvas
--------
4 min
Programming graphics with p5.js is a lot like drawing on graph paper, except the HTML <canvas> element is your paper! The <canvas> element is an HTML element that renders graphics created 
with JavaScript’s Canvas API. As you can see in the diagram below, the <canvas> element can be used alongside other HTML elements on the web page.

A gif displaying a canvas embedded in a webpage

Utilizing the Canvas API behind the scenes, the p5.js library provides many built-in drawing functions that simplify drawing to the HTML <canvas> on the fly using JavaScript. The p5.js 
library removes pesky nuances such as rendering context and introduces more familiar function names when drawing to the <canvas>.

The p5.js library’s built-in createCanvas() function dynamically creates an empty HTML <canvas> element to the web page. The function takes two arguments: the width and height of the 
canvas element in pixels.

// Creates a canvas with the width of canvasWidth and the height of canvasHeight
createCanvas(canvasWidth, canvasHeight);

Once the createCanvas() function has been called, the canvas can be styled further using CSS to, for example, position the canvas at the center of the web page.

If the createCanvas() function is not explicitly called, p5.js will automatically create an HTML <canvas> element that is 100 pixels wide and 100 pixels tall. If, for some reason, your 
p5.js sketch does not require a canvas, explicitly call the noCanvas() function to stop p5.js from creating a canvas at the start of the program.

* Instructions
--------------
Checkpoint 1 Passed
1.
Call the createCanvas() function with a width of 400 pixels and a height of 400 pixels within the setup() function to create an empty HTML <canvas> element. We will learn about what the 
setup() function does in the next exercise.

Don’t worry if you don’t see anything. Your canvas is there—it’s just blank!


Hint
The createCanvas() function takes the width and height of the canvas in pixels as arguments. If you were to create a canvas with a width of 300 pixels and a height of 500 pixels, your 
code would look something like below:

createCanvas(300, 500);

sketch.js
---------
unction setup(){
  // Setup code goes here
  // TODO: Create a canvas that is 400px wide and 400px tall
  createCanvas(400, 400)
}

function draw(){
  // Drawing code goes here
  
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Function
----------
8 min
Great! You just called your first p5.js function! You might not be able to see anything in the browser yet because the canvas is empty, but it’s there!

Let’s break down the code from the last exercise. Remember the setup() function where we called the createCanvas() function?

function setup() {
  // Setup code goes here
  createCanvas(400, 400);
}

The setup() function is a built-in p5.js function used to set the sketch’s initial state when the sketch begins. It is typically used to create the canvas, set the framerate, or set 
initial styles (such as stroke and fill color) for the shapes to be drawn in the sketch. It runs only once at the start of the sketch.

You might have noticed that the setup() function is never explicitly called in the sketch. That is because the p5.js library automatically executes a sequence of functions, like setup(), 
which should be called by the library, not the programmer.

Let’s take a look at the order of events when an HTML page that includes the p5.js library and a p5.js sketch file is loaded:

	1. Scripts in the <head> element of the HTML page are loaded.

	2. The <body> element of the HTML page loads, and an onload event fires, which triggers the next step.

	3. The p5.js library is started, and all built-in p5.js functions can be used in your sketch file.

	4. The p5.js library will automatically call the setup() function and create an HTML <canvas> element.

At this point, the canvas is made, but we can’t see it because it is empty. To view the created canvas, we’ll introduce a new function to fill the canvas with a solid color, the 
background() function. We’ll go into more detail about this function in the Drawing and Coloring Shapes lesson but know for now that background() takes an integer value between 0 and 255 
as an argument, representing a gray color value where 0 is pure black, and 255 is pure white.

function setup(){
  createCanvas(640, 640); // Creates a 640px x 640px canvas
  background(200); // Sets canvas background to light gray
}

We can call the background() function after the canvas is created to set a solid color for the background. The background() function is only executed one time, because it is called in the setup() function.

* Instructions
--------------
Checkpoint 1 Passed
1.
Below the createCanvas() function, using the background() function, set the canvas’s background color to be a gray value of any number between 0 and 255.


Hint
Use the background() function after the canvas is created and provide an integer between 0 and 255 as the argument.

Checkpoint 2 Passed
2.
Instead of the static gray value you chose in the previous checkpoint, set the background color to be a random integer between 0 and 255. Use JavaScript’s Math.random() function to 
generate a decimal number between 0 and 255 and the Math.floor() function to convert the generated decimal number to an integer.


Hint
Remember that the Math.random() function generates a random decimal number between 0 and 1. To generate a random number between 0 and 255, you will need to multiply the function by 256 to 
get a decimal number that goes up to but not including 256. To convert the randomly generated decimal number to an integer, encase your code for random number generation with the 
Math.floor() function which will return an integer up to and including 255.

All of this can be done inside the background() function to pass the resulting random integer between 0 and 255 to be used as the canvas background color like below:

background(Math.floor(Math.random() * 256));

Checkpoint 3 Passed
3.
Run the p5.js sketch again to see the background color change!


Hint
Click on the “Run” button to see the background color change to a new gray color each time the p5.js sketch runs.

sketch.js
---------
function setup(){
  // Setup code goes here
  createCanvas(400, 400);
  // TODO: Set the background color of the canvas
  background(Math.floor(Math.random() * 256));
}

function draw(){
  // Drawing code goes here

}

------------------------------------------------------------------------------------------------------------------------------------------------------------------








































































































