function Product(cost) {
    this._cost = cost;
}

/*
Product.prototype.buyAmount = function( anotherInstance ) {
    return this._cost.getAmount();
};
*/

/*
Product.prototype.cost = function( anotherInstance ) {
    return this._cost;
};
*/

Product.prototype.accumulateCost = function( cost ) {
    return this._cost.sum(cost);
};

module.exports = Product;
