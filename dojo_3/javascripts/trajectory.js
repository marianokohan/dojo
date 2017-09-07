const Explotion = require('./explotion.js');

function Trajectory() {
  var args = Array.prototype.slice.call(arguments,0);
  this._cells = args;
}

Trajectory.prototype.swish = function() {
  return new Explotion();
}

module.exports = Trajectory;
