const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
},
    {
        timestamps: true
    });

const Users = mongoose.model('Users', UserSchema);


module.exports = Users;
