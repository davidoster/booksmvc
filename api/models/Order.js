module.exports = {
    tableName: 'orders',
    attributes: {
        customerId: {
            model: 'Customer'
        },
        products: {
            collection: 'OrderDetails',
            via:        'orders'
        }
    }
}