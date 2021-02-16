/********************************************************/
//
/********************************************************/
var ball1 = {
  dia : 30,
  rad : 0,
  x : 15,
  y : 15,
  speedX : 3,
  speedY : 4
}


var ball2 = {
  dia : 30,
  rad : 0,
  x : 15,
  y : 15, 
  speedX : 3,
  speedY : 4
}

function setup() {
  createCanvas(400, 400);
  ball1.rad = ball1.dia/2;
  ball2.rad = ball2.dia/2;
}

function draw() {
  background(220);

/******************First ball**********************************/
  ellipse (ball1.x, ball1.y, ball1.dia, ball1.dia);

  ball1.x = ball1.x + ball1.speedX;
  ball1.y = ball1.y + ball1.speedY;

  if (ball1.x >= width - ball1.rad || ball1.y >= height - ball1.rad) {
    ball1.speedX = -random (6);
    ball1.speedY = -random (6); 
  }
  else if (ball1.x <= 0 + ball1.rad|| ball1.y <= 0 + ball1.rad) {
    ball1.speedX = random (6); 
    ball1.speedY = random (6);
  } 
/************************Second Ball************************************/
  ellipse (ball2.x, ball2.y, ball2.dia, ball2.dia);

  ball2.x = ball2.x + ball2.speedX;
  ball2.y = ball2.y + ball2.speedY;

  if (ball2.x >= width - ball2.rad|| ball2.y >= height - ball2.rad) {
    ball2.speedX = -random (6);
    ball2.speedY = -random (6); 
  }
  else if (ball2.x <= 0 + ball2.rad|| ball2.y <= 0 + ball2.rad) {
    ball2.speedX = random (6); 
    ball2.speedY = random (6);
  } 

}