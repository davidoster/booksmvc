module.exports = {
    inputs: {id: {type: 'number', required: true}},
    exits: {
        success: {
            viewTemplatePath: 'pages/products/edit'
        }
    },
    fn: async function(inputs,{id}) {
        console.log(inputs.id);
        console.log({id});
    }

}