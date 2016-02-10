(function () {
  if (typeof Kaykay === "undefined") {
    window.Kaykay = {};
  }

  var Game = Kaykay.Game = function () {
    this.cards = [];
    this.weapons = [];

    this.addCards();
    this.addWeapons();
  };

  Game.prototype.add = function (object, posId) {
    if (object instanceof Kaykay.Card) {
      this.cards.push(object);
    } else if (object instanceof Kaykay.Weapon) {
      this.weapons[posId] = object;
    } else {
      throw "wtf?";
    }
  };

  Game.prototype.addCards = function () {
    var x = 0;
    var intervalID = setInterval(function () {
      this.add(new Kaykay.Card(this));

      if (++x === 10) {
        window.clearInterval(intervalID);
      }
    }.bind(this), 200);
  };

  Game.prototype.addWeapons = function () {
    this.addWeapon([100, 700], 0);
    this.addWeapon([450, 700], 1);
    this.addWeapon([800, 700], 2);
  };

  Game.prototype.addWeapon = function (pos, posId) {
    this.add(new Kaykay.Weapon(pos, this, posId), posId);
  };

  Game.prototype.remove = function (object) {
    if (object instanceof Kaykay.Card) {
      this.cards.splice(this.cards.indexOf(object), 1);
    } else if (object instanceof Kaykay.Weapon) {
      this.weapons[this.weapons.indexOf(object)] = null;
    } else {
      throw "wtf?";
    }
  };
})();
