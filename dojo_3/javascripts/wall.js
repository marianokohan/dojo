
const Empty = require('./empty');

function Wall() {
}

Wall.prototype.bumpsInto = function(reclaimer) {
  throw new Error("not empty content!");
}

Wall.prototype.destroy = function(fragment) {
  return new Empty();
}

module.exports = Wall;
