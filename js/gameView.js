(function () {
  if (typeof Kaykay === "undefined") {
    window.Kaykay = {};
  }

  var GameView = Kaykay.GameView = function (ctx) {
    this.canvas = document.getElementById("canvas");
    this.ctx = ctx;
    this.position = [10, 10];
    this.kay = new Kaykay.Kay(this);
  };

  NOBOUNDS = -1000;

  GameView.prototype.bindStart = function () {
    document.onkeydown = function (e) {
      if (e.which === 32) {
        document.onkeydown = null;
        var h2 = document.getElementsByTagName('h2')[0];
        h2.remove();
        this.start();
      }
    }.bind(this);
  };

  GameView.prototype.start = function () {
    // var background = new Image();
    // background.src = "./images/start.png"
    // background.onload = function () {
    //   this.ctx.drawImage(background, 0, 0);
    // }.bind(this);
    this.canvas.style.background = "url(./images/start.png)";

    // var kay = new Image();
    // kay.src = this.kay.image;
    // kay.onload = function () {
    //   this.ctx.drawImage(kay, this.kay.pos[0], this.kay.pos[1]);
    // }.bind(this);

    this.kay.bindMovement();

    setInterval(function () {
      // this.ctx.drawImage(background, 0, 0);
      this.kay.move();
    }.bind(this), 10);
  };

  GameView.prototype.updateBackground = function () {
    // this.canvas.style.background;
    switch (this.position.toString()) {
      case "10,10":
        this.kay.topBound = 260;
        this.kay.bottomBound = 450;
        this.kay.leftBound = 300;
        this.canvas.style.background = "url(./images/start.png)";
        break;
      case "11,10": // NOTE: CCross road
        this.kay.resetBounds();
        this.canvas.style.background = "url(./images/11_10.png)";
        break;
      case "11,9":
        this.kay.leftBound = 0;
        this.kay.rightBound = 680;
        this.canvas.style.background = "url(./images/11_9.png)";
        break;
      case "11,8":
        this.kay.leftBound = 250;
        this.kay.rightBound = 400;
        this.canvas.style.background = "url(./images/11_8.png)";
        break;
      case "11,7":
        this.kay.resetBounds();
        this.kay.leftBound = 200;
        this.kay.topBound = 0;
        this.canvas.style.background = "url(./images/11_7.png)";
        break;
      case "12,7":
        this.kay.resetBounds();
        this.kay.bottomBound = 360;
        this.kay.rightBound = 550;
        this.canvas.style.background = "url(./images/12_7.png)";
        break;
      case "12,6":
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.rightBound = 350;
        this.canvas.style.background = "url(./images/12_6.png)";
        break;
      case "11,6":
        this.kay.resetBounds();
        this.kay.bottomBound = 430;
        this.kay.leftBound = 0;
        this.canvas.style.background = "url(./images/11_6.png)";
        break;
      case "11,5":
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.leftBound = 0;
        this.kay.rightBound = 290;
        this.canvas.style.background = "url(./images/11_5.png)";
        break;
      case "11,11": // NOTE: Park start
        this.kay.resetBounds();
        this.kay.leftBound = 0;
        this.kay.rightBound = 390;
        this.canvas.style.background = "url(./images/11_11.png)";
        break;
      case "11,12":
        this.kay.resetBounds();
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/11_12.png)";
        break;
      case "10,12": // NOTE: Left park
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/10_12.png)";
        break;
      case "9,12":
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/9_12.png)";
        break;
      case "8,12":
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/8_12.png)";
        break;
      case "7,12":
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.bottomBound = 430;
        this.kay.leftBound = 0;
        this.canvas.style.background = "url(./images/7_12.png)";
        break;
      case "12,12": // NOTE: Right park
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/12_12.png)";
        break;
      case "13,12":
        this.kay.resetBounds();
        this.kay.topBound = 180;
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/13_12.png)";
        break;
      case "14,12":
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/14_12.png)";
        break;
      case "15,12":
        this.kay.resetBounds();
        this.kay.topBound = 80;
        this.kay.bottomBound = 430;
        this.kay.rightBound = 630;
        this.canvas.style.background = "url(./images/15_12.png)";
        break;
      case "12,10": // NOTE: Lunch
        this.kay.resetBounds();
        this.kay.topBound = 0;
        this.kay.bottomBound = 430;
        this.canvas.style.background = "url(./images/12_10.png)";
        break;
      case "13,10":
        this.kay.resetBounds();
        this.kay.topBound = 220;
        this.kay.bottomBound = 430;
        this.kay.rightBound = 600;
        this.canvas.style.background = "url(./images/13_10.png)";
        break;
      default:

    }
  };
})();
