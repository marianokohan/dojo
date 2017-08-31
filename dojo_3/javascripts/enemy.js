
function Enemy() {
}

Enemy.prototype.bumpsInto = function(reclaimer) {
  reclaimer.kill();
  //TODO: mensaje vuelta (sino reclaimer termina ocupando cell) ?
}

module.exports = Enemy;
