module.exports = {
    inputs: {id: {type: 'number', required: true}},
    exits: {
        success: {
            viewTemplatePath: 'pages/products/edit'
        }
    },
    fn: async function({id}) {
        // {id: 1, name:'sdfsdf'}
        // console.log(inputs.id);
        var product = await Product.findOne({id});
        // console.log({id});
        return {product};
    }

}