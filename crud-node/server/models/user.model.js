const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: String
},
    {
        timestamps: true
    });

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
