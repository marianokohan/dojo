
function Cell(content) {
  this._content = content //TODO: no validar con vacio
                //usar Empty -> "content || new Empty()"
}

Cell.prototype.isEmpty = function(cell) {
  return !this._content
};

/* idea (*1.1): sacar "isEmpty" +
    "this._content = reclaimer
    ---
    CU2: decisión de Content => mensaje:
    "this._content.bumpsInto(reclaimer)"
      - para Wall lanzar exception
      - necesario implementar en Empty para CU1 (no seria nec. herencia para js)
*/

module.exports = Cell;
