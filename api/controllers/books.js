var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host:'ra1.anystream.eu',
    user:'cb12ptjs',
    password:'cb12ptjs',
    database:'cb12ptjs',
    port:5420
});

connection.connect(function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log("Connected!");
    }
});

var books;
const query = "SELECT * FROM books";
connection.query(query, function(err, rows) {
    books = rows;
});

var myBooksClassObject = class Books {
    constructor() {
        this.id =  '11111';
        this.title = 'aaaaaa';
    }
}

var xxx = new myBooksClassObject();


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