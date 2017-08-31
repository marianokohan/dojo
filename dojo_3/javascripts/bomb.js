const Explotion = require('./explotion');

function Bomb() {

}

Bomb.prototype.tick = function() {
  return new Explotion(); //TODO: retornar solo 1 vez
}

module.exports = Bomb;
