'use strict';

var recommendationsDecorator = require("~/cartridge/models/product/decorators/recommendations")

var base = module.superModule;

module.exports = function fullProduct(product, apiProduct, options) {

    base.call(this,product,apiProduct,options);

    recommendationsDecorator(product,apiProduct)

    return product;
};
