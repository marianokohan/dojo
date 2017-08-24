function Bomber(bornPlace) {
    this._location = bornPlace;
}

Bomber.prototype.stepsIn = function(cell) {
  if (cell.isEmpty()) { //TODO: evitar if --> no pedir a objeto info de estado, sino mandar mensaje (*1)
    this._location = cell
  } else {
    throw new Error("busy cell");
  }
  /* idea (*1):
      "cell.reclaimedBy(this);"
      + (*1.1) en Cell
      (lo de "this._location" queda)
  */
};

Bomber.prototype.isIn = function(cell) {
  return this._location == cell
};

module.exports = Bomber;
