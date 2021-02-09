module.exports = {
    exits: {
        success: {
            viewTemplatePath: 'pages/products/list'
        }
    },

    fn: async function() {
        var listOfProducts = await Product.find(); 
        // console.log(listOfProducts);
        return {products: listOfProducts}
    }
}