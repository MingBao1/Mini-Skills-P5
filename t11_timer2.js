/********************************************************/
//
/********************************************************/
var timer = 0;
var counter;
var counterAdd = 1;
var counterDisp = 0;
var counterText;
var buttonStart;
var buttonEnd;

const intervalAmount = 500;

function setup() {
  //createCanvas(400, 400);
  noCanvas();
  background(random(0, 255), random(0, 255), random(0, 255));

  counterText = createP("Counter");

  buttonStart = createButton("start timer");
  buttonStart.mousePressed(startTimer);

  buttonEnd = createButton("stop timer")
  buttonEnd.mousePressed(stopTimer)
}

function draw() {

}

function stopTimer() {
  clearInterval(counter);
}

function startTimer(){
  counter = setInterval(count, intervalAmount);
}

function count() {
  if (counterDisp <= 0) {
    counterAdd = 1;
    background(random(0, 255), random(0, 255), random(0, 255));
  }
  if (counterDisp >= 5) {
    counterAdd = -1;
    background(random(0, 255), random(0, 255), random(0, 255));
  }

  counterDisp = counterDisp + counterAdd;
  counterText.html(counterDisp);
}