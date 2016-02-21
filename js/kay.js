(function () {
  if (typeof window.Kaykay === "undefined" ) {
    window.Kaykay = {};
  }

  var Kay = Kaykay.Kay = function (gameView) {
    this.pos = [300, 350];
    this.dir = [0, 0];
    this.gameView = gameView;
    this.image = "./images/kay_.png"

    this.topBound = 260;
    this.bottomBound = 450;
    this.leftBound = 300;
    this.rightBound = 1000;

    var canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }

  Kay.prototype.resetBounds = function () {
    this.topBound = -1000;
    this.bottomBound = 1000;
    this.leftBound = -1000;
    this.rightBound = 1000;
  };

  Kay.prototype.bindMovement = function () {
    document.onkeydown = function (e) {
      switch (e.which) {
        case 37: // Left
          this.dir[0] = -3;
          break;
        case 38: // Up
          this.dir[1] = -2;
          break;
        case 39: // Right
          this.dir[0] = 3;
          break;
        case 40: // Down
          this.dir[1] = 2;
          break;
        case 32: // Space
          console.log(this.pos);
        default:

      }
    }.bind(this);

    document.onkeyup = function (e) {
      switch (e.which) {
        case 37:
        case 39:
          this.dir[0] = 0
          break;
        case 38:
        case 40:
          this.dir[1] = 0
          break;
        default:

      }
    }.bind(this);
  };

  Kay.prototype.move = function () {
    this.ctx.clearRect(this.pos[0], this.pos[1], 120, 150);
    if (!(this.dir[0] < 0 && this.pos[0] < this.leftBound ||
          this.dir[0] > 0 && this.pos[0] > this.rightBound)) {
      this.pos[0] += this.dir[0];
    }
    if (!(this.dir[1] < 0 && this.pos[1] < this.topBound ||
        this.dir[1] > 0 && this.pos[1] > this.bottomBound)) {
      this.pos[1] += this.dir[1];
    }

    if (this.pos[0] < -25) {
      this.pos[0] = 680;
      this.gameView.position[0]--;
      this.gameView.updateBackground();
    } else if (this.pos[0] > 710) {
      this.pos[0] = 10;
      this.gameView.position[0]++;
      this.gameView.updateBackground();
    }

    if (this.pos[1] < -35) {
      this.pos[1] = 450;
      this.gameView.position[1]--;
      this.gameView.updateBackground();
    } else if (this.pos[1] > 490) {
      this.pos[1] = 10
      this.gameView.position[1]++;
      this.gameView.updateBackground();
    }

    this.render();
  };

  Kay.prototype.render = function () {
    var imageObj = new Image();
    imageObj.src = this.image;
    this.ctx.drawImage(imageObj, this.pos[0], this.pos[1], 120, 150);
  };
})();
