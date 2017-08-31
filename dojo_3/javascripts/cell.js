
const Empty = require('./empty');

function Cell(content) {
  this._content = content || new Empty()
}

Cell.prototype.reclaimedBy = function(reclaimer) {
  this._content.bumpsInto(reclaimer);
  this._content = reclaimer;
}

Cell.prototype.emptyContent = function () {
  return (this._content instanceof Empty);
}

Cell.prototype.damaged = function(fragment) {
  if (this._content.destroyed(fragment)) {
    this._content = new Empty();
  }
}

module.exports = Cell;
