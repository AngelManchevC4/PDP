'use strict'

module.exports = function (object, product) {

    // var ProductFactory = require('*/cartridge/scripts/factories/product');
    // var productRecommendations = product.recommendations;
    // var recommendations = [];

    // for (let i = 0; i < productRecommendations.length; i++) {
    //     recommendations.push(ProductFactory.get({ pid: productRecommendations[i].recommendedItemID, pview: 'tile' }))
    // }

    // productRecommendations.map(product => {
    //     recommendations.push(ProductFactory.get({ pid: product.recommendedItemID, pview: 'tile' }))
    // })

    Object.defineProperties(object, {
        recommendations: {
            enumerable: true,
            value: product.recommendations
        }
    });
};