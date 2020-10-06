const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CircularSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    books: [{
            type: Schema.Types.ObjectId,
            ref: 'Books',
            required: true
        
    }],
    tglPinjam: {
        type: Date,
        setDefaultsOnInsert: true,
        default: Date.now
    },
    tglKembali: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    });

const Circulars = mongoose.model('Circulars', CircularSchema);

module.exports = Circulars;