const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    judul: String,
    pengarang: String,
    penerbit: String,
    thTerbit: String
},
    {
        timestamps: true
    });

const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;