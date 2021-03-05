/********************************************************/
/*                                                      */
/********************************************************/
var slider
var ballAmount = 2;
var balls = [];
var flag = false;

var hit = 0;
var miss = 0;

var missTxt;
var hitTxt;



function setup() {
  createCanvas(400, 400);
  //frameRate(1);
  slider = createSlider(30, 200, 50);
  slider.position(0, 0);

  makeTheDamnBall();
  missTxt = createP('miss: ' + miss);
  hitTxt = createP('hit: ' + hit);
}

function draw() {
  background(200, 100, 20);

  for (var i = 0; i < ballAmount; i++) {
    balls[i].sliderUpdate();
    balls[i].move();
    balls[i].bounce();
    balls[i].disp();
  }
  missTxt.html('miss: ' + miss);
  hitTxt.html('hit: ' + hit);
}

function mouseClicked() {
  var dist2Ball
  for (i = 0; i < ballAmount; i++) {
    dist2Ball = dist(balls[i].x, balls[i].y, mouseX, mouseY);
    if (dist2Ball <= balls[i].rad) {
      flag = true
      hit++
    }
  }

  if (flag != true) {
    miss++
  }
  if (flag = true) {
    flag = false
  }
}

function makeTheDamnBall() {
  for (var i = 0; i < ballAmount; i++) {
    balls[i] = {
      dia: 0,
      rad: 0,
      x: 0,
      y: 0,
      velX: 0,
      velY: 0,
      r: 0,
      g: 0,
      b: 0,
      dist2Ball: false,

      init: function () {
        this.x = 1 / 2 * width;
        this.y = 1 / 2 * height;

        this.velX = random(-5, 5);
        this.velY = random(-5, 5);
      },

      sliderUpdate: function () {
        this.dia = slider.value();
        this.rad = this.dia / 2;
      },

      move: function () {
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
      },

      bounce: function () {
        if (this.x >= width - this.rad) {
          this.velX = this.velX * -1;
          this.x = width - this.rad;
        }

        else if (this.x <= 0 + this.rad) {
          this.velX = this.velX * -1;
          this.x = this.rad;
        }

        else if (this.y >= width - this.rad) {
          this.velY = this.velY * -1;
          this.y = width - this.rad;
        }

        else if (this.y <= 0 + this.rad) {
          this.velY = this.velY * -1;
          this.y = this.rad;
        }
      },

      disp: function () {
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.dia);
      },
    }
    balls[i].init();
  }
}