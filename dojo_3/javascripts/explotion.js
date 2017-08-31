const Fragment = require('./fragment');

function Explotion() {

}

//TODO: retornar collection ?
Explotion.prototype.getFragment = function() {
  return new Fragment();
}

module.exports = Explotion;
