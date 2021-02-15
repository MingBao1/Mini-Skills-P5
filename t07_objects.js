/********************************************************/
//
/********************************************************/
var ball1 = {
  x : 0,
  y : 0
}
var ball1SpeedX = 3;
var ball1SpeedY = 4;

var ball2 = {
  x : 0,
  y : 0 
}
var ball2SpeedX = 3;
var ball2SpeedY = 4;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

/******************First ball**********************************/
  ellipse (ball1.x, ball1.y, 30, 30);

  ball1.x = ball1.x + ball1SpeedX;
  ball1.y = ball1.y + ball1SpeedY;

  if (ball1.x >= width || ball1.y >= height) {
    ball1SpeedX = -random (6);
    ball1SpeedY = -random (6); 
  }
  else if (ball1.x <= 0 || ball1.y <= 0) {
    ball1SpeedX = random (6); 
    ball1SpeedY = random (6);
  } 
/************************Second Ball************************************/
  ellipse (ball2.x, ball2.y, 30, 30);

  ball2.x = ball2.x + ball2SpeedX;
  ball2.y = ball2.y + ball2SpeedY;

  if (ball2.x >= width || ball2.y >= height) {
    ball2SpeedX = -random (6);
    ball2SpeedY = -random (6); 
  }
  else if (ball2.x <= 0 || ball2.y <= 0) {
    ball2SpeedX = random (6); 
    ball2SpeedY = random (6);
  } 

}