
function Empty() {
}

//TODO: herencia + implementacion default en padre ?
Empty.prototype.bumpsInto = function(reclaimer) {
}

Empty.prototype.destroy = function(fragment) {
  return this;
}

module.exports = Empty
