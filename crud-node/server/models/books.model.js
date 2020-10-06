const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    judul: {
        type: String,
        required: true
    },
    pengarang: {
        type: String,
        required: true
    },
    penerbit: String,
    thTerbit: String
},
    {
        timestamps: true
    });

const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;