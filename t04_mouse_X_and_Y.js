/********************************************************/
//
/********************************************************/
function setup() {
  createCanvas(400, 400);
  frameRate (600)
  strokeWeight (20);
}

function draw() {

  //ellipse (mouseX, mouseY, pmouseX, pmouseY);
  //mouseMoved (line(mouseX, mouseY, mouseX, mouseY));

  if (mouseIsPressed) {
    stroke (0, 100, 0, 100)
    line(mouseX, mouseY, mouseX, mouseY);
  }
}