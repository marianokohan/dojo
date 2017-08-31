
function Wall() {
}

Wall.prototype.bumpsInto = function(reclaimer) {
  throw new Error("not empty content!");
}

//TODO: accion + validación en mismo metodo?
Wall.prototype.destroyed = function(fragment) {
  return true;
}

module.exports = Wall;
