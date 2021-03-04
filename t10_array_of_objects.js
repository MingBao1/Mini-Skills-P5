/********************************************************/
/*                                                      */
/********************************************************/
var slider
var ballAmount = 50;
var balls = [];



function setup() {
  createCanvas(400, 400);
  //frameRate(1);
  slider = createSlider(30, 200, 50);
  slider.position(0, 0);

  makeTheDamnBall();
}

function draw() {
  background(200, 100, 20, 20);

  for (var i = 0; i < ballAmount; i++) {
    balls[i].sliderUpdate();
    balls[i].move();
    balls[i].bounce();
    balls[i].disp();
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

      init: function () {
        this.x = 1 / 2 * width;
        this.y = 1 / 2 * height;

        this.velX = random(-10, 10);
        this.velY = random(-10, 10);
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
      }
    }
    balls[i].init();
  }
}