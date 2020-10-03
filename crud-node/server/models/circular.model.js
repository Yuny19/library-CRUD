const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Users = require('./user.model');
// const Books = require('./books.model');

const CircularSchema = new Schema({
    user: String,
    book: String,
    tglPinjam: Date,
    tglKembali: Date
},
    {
        timestamps: true
    });

const Circulars = mongoose.model('Circulars', CircularSchema);

module.exports = Circulars;