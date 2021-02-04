var myBooksClassObject = class Books {
    constructor() {
        this.id =  '11111';
        this.title = 'aaaaaa';
    }
}

var xxx = new myBooksClassObject();
var books;

module.exports = {
    exits: {
        success: { 
            viewTemplatePath: 'books'
        }
    },

    fn: async function() {
        return {books, xxx, zzz: 10}
    }
}