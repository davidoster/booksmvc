module.exports = {
    inputs: {
        id: {type: 'number'},
        name: {type: 'string' },
        category: {type: 'string'}
    },
    // exits: { success: { viewTemplatePath: 'pages/products/list'}},
    fn: async function({id, name, category}) {
        // console.log(this.req.body.id);
        // console.log(this.req.body.name);
        // console.log(this.req.body.category);
        // console.log({id} + " " + {name} + " " + {category})
        await Product.updateOne({id}).set({name: name, category: category});
        this.res.redirect("/products");
        // return {};
    }


}