/********************************************************/
//
/********************************************************/
var counterNum = 0;
var counterText
var counterAdd = 1

function setup() {
  createCanvas(400, 400);
  counterText = createP(counterNum)
  setTimeout(counter, 1000);
}

function draw() {
}

function counter() {
  if (counterNum <= 0) {
    counterAdd = 1;
    background (random(0, 255), random(0, 255), random(0, 255));
  }
  if (counterNum >= 5) {
    counterAdd = -1;
    background (random(0, 255), random(0, 255), random(0, 255));
  }

  counterNum = counterNum + counterAdd;
  counterText.html(counterNum);
  setTimeout(counter, 1000);
}
