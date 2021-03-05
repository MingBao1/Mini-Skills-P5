/********************************************************/
//
/********************************************************/
var canvas

function setup() {
  canvas = createCanvas(400, 400);
  background(100,  200, 255);
}

function draw() {
  canvas.mouseOver(backgroundChange);
  canvas.mouseOut(backgroundChange);
  canvas.mousePressed(backgroundChange);
}

function backgroundChange() {
  background(random(0, 255), random(0, 255), random(0, 255));
}