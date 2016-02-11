(function () {
  if (typeof Kaykay === "undefined") {
    window.Kaykay = {};
  }

  var GameView = Kaykay.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
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
    var kay = new Image();
    kay.src = this.kay.image;
    kay.onload = function () {
      this.ctx.drawImage(kay, 0, 0);
    }.bind(this);
    this.kay.bindMovement();
  };
})();
