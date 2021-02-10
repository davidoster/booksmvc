module.exports = {
    tableName: 'orderdetails',
    attributes: {
        orderId: {model: 'Order'},
        productId: {model: 'Product'},
        orders: {
            collection: 'Order',
            via:        'products'
        }
    }
}