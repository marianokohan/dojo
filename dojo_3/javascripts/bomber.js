const Bomb = require('./bomb');
const Trajectory = require('./trajectory');
const Empty = require('./empty');

function Bomber(bornPlace) {
    this._location = bornPlace;
    bornPlace._content = this; //TODO: esto deberia ser de otra manera
}

Bomber.prototype.stepsIn = function(cell) {
  cell.reclaimedBy(this);
  this._location = cell
};

Bomber.prototype.isIn = function(cell) {
  return this._location == cell
};

Bomber.prototype.kill = function() {
  this._dead = true;
}

Bomber.prototype.isAlive = function() {
  return !this._dead;
}

Bomber.prototype.isDead = function() {
  return this._dead;
}

Bomber.prototype.leavesBomb = function() {
  return new Bomb();
}

Bomber.prototype.throwsBomb = function (cell) {
  return new Trajectory(this._location, cell);
}

Bomber.prototype.destroy = function(fragment) {
  this.kill();
  return new Empty();
}

module.exports = Bomber;
