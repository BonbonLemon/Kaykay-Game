/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	(function () {
	  if (typeof Kaykay === "undefined") {
	    window.Kaykay = {};
	  }
	
	  var Game = Kaykay.Game = function () {
	    this.cards = [];
	    this.weapons = [];
	
	    // this.addCards();
	    // this.addWeapons();
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map