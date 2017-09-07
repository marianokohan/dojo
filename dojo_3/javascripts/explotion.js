const Fragment = require('./fragment');

function Explotion() {

}

//TODO: retornar collection ?
Explotion.prototype.getFragment = function() {
  return new Fragment();
}

Explotion.prototype.damage = function(cells) {
  //TODO: para evitar declarar siempre array - ¿alternativa?
  if (!Array.isArray(cells)) {
    cells = Array.of(cells);
  }
  var fragment = this.getFragment();
  cells.forEach(function(cell) {
    cell.damaged(fragment);
  });
}

module.exports = Explotion;
