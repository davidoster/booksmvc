module.exports = {
    tableName: 'orders',
    attributes: {
        customerId: {
            model: 'Customer'
        }
    }
}