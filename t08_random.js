/********************************************************/
//
/********************************************************/
var ball1 = {
  dia : 30,
  rad : 0,
  x : false,
  y : false,
  speedX : 3,
  speedY : 4,
  colR : 0,
  colG : 0,
  colB : 0
}


var ball2 = {
  dia : 30,
  rad : 0,
  x : false,
  y : false, 
  speedX : 3,
  speedY : 4,
  colR : 0,
  colG : 0,
  colB : 0
}

function setup() {
  createCanvas(400, 400);
  //frameRate(1);

  ball1.rad = ball1.dia/2;
  ball2.rad = ball2.dia/2;

  ball1.x = random (ball1.rad, 400);
  ball1.y = random (ball1.rad, 400);
  ball2.x = random (ball2.rad, 400);
  ball2.y = random (ball2.rad, 400);
}

function draw() {
  //background(220);

/******************First ball**********************************/
  fill (ball1.colR, ball1.colG, ball1.colB);
  noStroke();
  ellipse (ball1.x, ball1.y, ball1.dia, ball1.dia);

  ball1.x = ball1.x + ball1.speedX;
  ball1.y = ball1.y + ball1.speedY;

  if (ball1.x >= width - ball1.rad) {
    ball1.speedX = -random (6); 
    ball1.speedY = random (-6, 6);

    ball1.x = width - ball1.rad;

    ball1.colR = random (0, 255);
    ball1.colG = random (0, 255);
    ball1.colB = random (0, 255);
  }
  else if (ball1.x <= 0 + ball1.rad) {
    ball1.speedX = random (6); 
    ball1.speedY = random (-6, 6);

    ball1.x = ball1.rad;

    ball1.colR = random (0, 255);
    ball1.colG = random (0, 255);
    ball1.colB = random (0, 255);
  } 
    else if (ball1.y >= height - ball1.rad) {
    ball1.speedY = -random (6); 
    ball1.speedX = random (-6, 6);

    ball1.y = height - ball1.rad;

    ball1.colR = random (0, 255);
    ball1.colG = random (0, 255);
    ball1.colB = random (0, 255);
  }
  else if(ball1.y <= 0 + ball1.rad) {
    ball1.speedY = random (6);
    ball1.speedX = random (-6, 6);

    ball1.y = ball1.rad;

    ball1.colR = random (0, 255);
    ball1.colG = random (0, 255);
    ball1.colB = random (0, 255);
  }

/************************Second Ball************************************/
  fill (ball2.colR, ball2.colG, ball2.colB);
  noStroke();
  ellipse (ball2.x, ball2.y, ball2.dia, ball2.dia);

  ball2.x = ball2.x + ball2.speedX;
  ball2.y = ball2.y + ball2.speedY;

  if (ball2.x >= width - ball2.rad) {
    ball2.speedX = -random (6);
    ball2.speedY = random (-6, 6);

    ball2.x = width - ball2.rad;

    ball2.colR = random (0, 255);
    ball2.colG = random (0, 255);
    ball2.colB = random (0, 255);
  }
  else if (ball2.x <= 0 + ball2.rad) {
    ball2.speedX = random (6); 
    ball2.speedY = random (-6, 6);

    ball2.x = ball2.rad;

    ball2.colR = random (0, 255);
    ball2.colG = random (0, 255);
    ball2.colB = random (0, 255);
  } 
  else if (ball2.y >= height - ball2.rad) {
    ball2.speedY = -random (6); 
    ball2.speedX = random (-6, 6);

    ball2.y = height - ball2.rad;

    ball2.colR = random (0, 255);
    ball2.colG = random (0, 255);
    ball2.colB = random (0, 255);
  }
  else if(ball2.y <= 0 + ball2.rad) {
    ball2.speedY = random (6);
    ball2.speedX = random (-6, 6);

    ball2.y = ball2.rad;

    ball2.colR = random (0, 255);
    ball2.colG = random (0, 255);
    ball2.colB = random (0, 255);
  }

}