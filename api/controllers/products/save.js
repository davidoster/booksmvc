// 1. SAVE PRODUCT
// 2. SHOW SUCCESS OR ERROR

module.exports = {
    inputs: {
        name:{type: 'string', required: true}, category:{type: 'string'}
    },

    exits: {
        success: {
            viewTemplatePath: 'pages/products/saved'
        }
    },

    fn: async function(inputs) {
        var message = inputs.name + " " + inputs.category
        await Product.create({name: inputs.name, category: inputs.category})
        return { message }
    }
}