/********************************************************/
//
/********************************************************/
var slider
var ballXY = {
  X:0,
  Y:0,
}

function setup() {
  createCanvas(400, 400);
  //frameRate(100);
  createSliderFunc();
}

function draw() {
  background(200, 100, 20);
  ballDia = slider.value();
  ballMove(ballXY.X, ballXY.Y, 3, 4);
  ballCreate(ballXY.X, ballXY.Y, ballDia);
}

function createSliderFunc() {
  slider = createSlider(30, 200, 50);
  slider.position (0, 200);
}

function ballCreate(x, y, ballDia) {
  ellipse(x, y, ballDia);
}

function ballMove(x, y, speedX, speedY, dia) {
  if (x >= width - dia/2) {
    speedX = speedX * -1;
    x = width - dia/2;
  }

  else if (x <= 0 + dia/2) {
    speedX = speedX * -1;
    x = dia/2;
  }

  else if (y  >= width - dia/2) {
    speedY = speedY * -1;
    y = width - dia/2;
  }

  else if (y <= 0 + dia/2) {
    speedY = speedY * -1;
    y = dia/2
  }

  ballXY.X = x + speedX;
  ballXY.Y = y + speedY;

}