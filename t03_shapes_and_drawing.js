/********************************************************/
//
/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (255, 0, 0);

  fill (0, 255, 0, 100);
  stroke (255, 255, 0);
  strokeWeight (6);
  rect (50, 50, 300, 300, 50, 50, 50, 50);

  stroke (200, 0, 0);
  strokeWeight (3);
  line (70, 70, 100, 100);

  fill (0, 0, 255);
  stroke (255, 0, 0);
  strokeWeight (5);
  ellipse (200, 200, 30, 80);
}