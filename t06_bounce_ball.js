/********************************************************/
//
/********************************************************/
var ballDia = 30;
var ballRad = ballDia/2;
var x = 0 + ballRad;
var y = 0 + ballRad;
var speedX = 3;
var speedY = 4;

function setup() {
  createCanvas(400, 400);
  //frameRate(1);
}

function draw() {
  background(220);

  ellipse (x, y, ballDia, ballDia);

  x = x + speedX;
  y = y + speedY;

  if (x >= width - ballRad) {
    speedX = -3;
    x = width - ballRad;
  } 
  else if (y >= height - ballRad) {
    speedY = -4;
    y = height - ballRad;
  }
  else if (x <= 0 + ballRad) {
    speedX = 3;
    x = 0 + ballRad;
  }
  else if (y <= 0 + ballRad){
    speedY = 4;
    y = 0 + ballRad;
  }
  
  /*if (x >= width || y >= height) {
    speedX = -random (6);
    speedY = -random (6); 
  }
  else if (x <= 0 || y <= 0) {
    speedX = random (6); 
    speedY = random (6);
  } */

}