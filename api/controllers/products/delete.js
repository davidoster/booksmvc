module.exports = {
    inputs: {
        id: {type: 'number'}
    },

    exits: {
        success: {
            viewTemplatePath: 'productnotfound'
        }
    },

    fn: async function({id}) {
        if(await Product.findOne({id})) {
            await Product.destroy({id});
            this.res.redirect('/products');
        } else {
            return {message: `This product with id: ${id} was not found!`};
        }
    }
}