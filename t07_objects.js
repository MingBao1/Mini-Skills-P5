/********************************************************/
//
/********************************************************/
var ball1 = {
  x : 0,
  y : 0,
  speedX : 3,
  speedY : 4
}


var ball2 = {
  x : 0,
  y : 0, 
  speedX : 3,
  speedY : 4
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

/******************First ball**********************************/
  ellipse (ball1.x, ball1.y, 30, 30);

  ball1.x = ball1.x + ball1.speedX;
  ball1.y = ball1.y + ball1.speedY;

  if (ball1.x >= width || ball1.y >= height) {
    ball1.speedX = -random (6);
    ball1.speedY = -random (6); 
  }
  else if (ball1.x <= 0 || ball1.y <= 0) {
    ball1.speedX = random (6); 
    ball1.speedY = random (6);
  } 
/************************Second Ball************************************/
  ellipse (ball2.x, ball2.y, 30, 30);

  ball2.x = ball2.x + ball2.speedX;
  ball2.y = ball2.y + ball2.speedY;

  if (ball2.x >= width || ball2.y >= height) {
    ball2.speedX = -random (6);
    ball2.speedY = -random (6); 
  }
  else if (ball2.x <= 0 || ball2.y <= 0) {
    ball2.speedX = random (6); 
    ball2.speedY = random (6);
  } 

}