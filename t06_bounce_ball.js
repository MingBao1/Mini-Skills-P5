/********************************************************/
//
/********************************************************/
var x = 0;
var y = 0;
var speedX = 3;
var speedY = 4;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse (x, y, 30, 30);

  x = x + speedX;
  y = y + speedY;

  if (x >= width || y >= height) {
    speedX = -random(6);
    speedY = -random(6);
  }

  if ( x <= 0 || y <= 0) {
    speedX = random(6);
    speedY = random(6);
  }

}