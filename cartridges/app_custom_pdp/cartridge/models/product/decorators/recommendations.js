'use strict'

module.exports = function (object, product) {
    Object.defineProperties(object, {
        recommendations: {
            enumerable: true,
            value: product.recommendations
        }
    });
};