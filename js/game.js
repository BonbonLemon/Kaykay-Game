(function () {
  if (typeof Kaykay === "undefined") {
    window.Kaykay = {};
  }

  var Game = Kaykay.Game = function () {
    this.kay = new Kaykay.Kay(this);
  };
})();
