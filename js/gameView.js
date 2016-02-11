(function () {
  if (typeof Kaykay === "undefined") {
    window.Kaykay = {};
  }

  var GameView = Kaykay.GameView = function (game, ctx) {
    this.canvas = document.getElementById("canvas");
    this.ctx = ctx;
    this.game = game;
    this.position = [0, 0];
    this.kay = game.kay;
  };

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
    this.canvas.style.backgroundImage = "url(./images/start.png)"

    var kay = new Image();
    kay.src = this.kay.image;
    kay.onload = function () {
      this.ctx.drawImage(kay, this.kay.pos[0], this.kay.pos[1]);
    }.bind(this);

    this.kay.bindMovement();

    setInterval(function () {
      // this.ctx.drawImage(background, 0, 0);
      this.kay.move();
    }.bind(this), 30);
  };
})();
