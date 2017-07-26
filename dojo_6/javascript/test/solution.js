const chai = require('chai');
const Sell = require('../src/sell.js');
const Product = require('../src/product.js');
const Cost = require('../src/cost.js');
const SellingPrice = require('../src/sellingPrice.js');
const Profit = require('../src/profit.js');

describe("checkout", () => {
    describe("dummy", function() {
        it("should calculate profit for buy and sell 1 product", () => {
            var sell = new Sell([new Product(new Cost(10))], new SellingPrice(15));
            chai.assert.isTrue(sell.calculateProfit().equals(new Profit(5)));
        });

        //compro por 2 => vendo en conjunto
        it("should calculate profit for buying 2 and selling together", () => {
            var product = new Product(new Cost(10));
            var products = [product, product];
            var sell = new Sell(products, new SellingPrice(25));
            chai.assert.isTrue(sell.calculateProfit().equals(new Profit(5)));
        });

    });
});
