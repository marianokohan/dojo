const Cost = require('./cost.js');
const Profit = require('./profit.js');

function Sell(products, sellingPrice) {
    this._products = products;
    this._sellingPrice = sellingPrice;
}

Sell.prototype.calculateProfit = function( ) {
    //return this._sellingPrice.difference(this._product); //no: comparar monto con products -> distinto dominios - atenta con reutilizacion
    return new Profit(this._sellingPrice.difference(this.calculateTotalCost()));
};

Sell.prototype.calculateTotalCost = function( ) {
    //evitar: sumar entidades - mensaje 'sum' de cost deberia recibir otro objeto cost
    /*return this._products.reduce(function(sumAmount, newProduct) {
       return newProduct.buyAmount() + sumAmount
    }, 0);
    */
    //evitar getter de cost -> llevar a product
    /*
    return this._products.reduce(function(sumCost, newProduct) {
       return newProduct.cost().sum(new Cost(sumCost))
    }, 0);
    */
    return this._products.reduce(function(costSum, newProduct) {
       return newProduct.accumulateCost(new Cost(costSum));
    }, 0);
}

module.exports = Sell;
