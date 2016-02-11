(function () {
  if (typeof window.Kaykay === "undefined" ) {
    window.Kaykay = {};
  }

  var Kay = Kaykay.Kay = function (game) {
    this.pos = [300, 350];
    this.dir = [0, 0];
    this.game = game;
    this.image = "./images/kay.png"

    var canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }

  Kay.prototype.bindMovement = function () {
    document.onkeydown = function (e) {
      switch (e.which) {
        case 37:
          this.dir[0] = -6;
          break;
        case 38:
          this.dir[1] = -4;
          break;
        case 39:
          this.dir[0] = 6;
          break;
        case 40:
          this.dir[1] = 4;
          break;
        case 32:
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
    this.ctx.clearRect(this.pos[0], this.pos[1], 75, 140);
    this.pos[0] += this.dir[0];
    this.pos[1] += this.dir[1];

    if (this.pos[0] < -25) {
      this.pos[0] = 710;
    } else if (this.pos[0] > 750) {
      this.pos[0] = 10;
    }

    if (this.pos[1] < -35) {
      this.pos[1] = 450;
    } else if (this.pos[1] > 490) {
      this.pos[1] = 10
    }

    this.render();
  };

  Kay.prototype.render = function () {
    var imageObj = new Image();
    imageObj.src = this.image;
    this.ctx.drawImage(imageObj, this.pos[0], this.pos[1]);
  };
})();
