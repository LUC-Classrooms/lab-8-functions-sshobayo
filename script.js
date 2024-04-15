function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width/2, height/2, 50, 50);

myShape(100, 200, 60, 80);
myShape(400, 200, 70, 100); 
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, w, h) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  //scale(s);
  fill(100, 100, 200);
  ellipse(0, 0, w, h); // simple ellipse at the translated origin (0,0)
  rectMode(CENTER);
  fill(0)
  rect(x, y - h/2, w, h)
  pop(); // dispose of the layer
}
