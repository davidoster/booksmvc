module.exports = {
    tableName: 'customers',
    attributes: {
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        email: {type: 'string'},
        orders: {
            collection: 'Order',
            via:        'customerId'
        }
    }
}