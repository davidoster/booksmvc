module.exports = {
    exits: {
        success: { 
            viewTemplatePath: 'books'
        }
    },

    fn: async function() {
        return {'id': 1, 'title': "AAAAA"};
    }
}