function Profit(amount) {
    this._amount = amount;
}

Profit.prototype.equals = function( anotherProfit ) {
    return this._amount == anotherProfit._amount;
};

module.exports = Profit;
