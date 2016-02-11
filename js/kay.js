(function () {
  if (typeof window.Kaykay === "undefined" ) {
    window.Kaykay = {};
  }

  var Kay = Kaykay.Kay = function (game) {
    this.pos = [0, 0];
    this.dir = [0, 0];
    this.game = game;
    var canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.image = "./images/kay.png"
  }

  Kay.prototype.bindMovement = function () {
    document.onkeydown = function (e) {
      console.log(e.which);
    };

    document.onkeyup = function (e) {
      console.log("up");
    };

    setInterval(function () {
      this.move();
    }.bind(this), 200)
  };

  Kay.prototype.move = function () {
    this.ctx.clearRect(0, 0, 75, 140);
    this.pos[0] += this.dir[0];
    this.pos[1] += this.dir[1];
    this.render();
  };

  Kay.prototype.render = function () {

  };
})();
