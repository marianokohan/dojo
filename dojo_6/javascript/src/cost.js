function Cost(amount) {
    this._amount = amount;
}

/*
Cost.prototype.getAmount = function( anotherInstance ) {
    return this._amount;
};
*/

//TODO: esto devuelve amount para poder usar 'reduce' - ver mejorar para retornar Cost
Cost.prototype.sum = function( anotherCost ) {
    return this._amount + anotherCost._amount;
};

module.exports = Cost;
