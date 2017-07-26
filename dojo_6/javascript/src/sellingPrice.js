
function SellingPrice(amount) {
    this._amount = amount;
}

SellingPrice.prototype.difference = function( totalCost ) {
    return this._amount - totalCost;
};

module.exports = SellingPrice;
