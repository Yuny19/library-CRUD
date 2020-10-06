const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        unique: true,
        required: 'email is required',
        validate: [validateEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: 'password is required'
    },
    role: {
        type: String,
        required: 'role is required'
    }
},
    {
        timestamps: true
    });

UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.path('email').validate(
    (value) =>
        mongoose
            .model('Users')
            .collection.countDocuments({ email: value })
            .then((count) => {
                if (count > 0) {
                    return false;
                }
                return true;
            })
            .catch((err) => {
                throw err;
            }),
    'Email already exists!!',
);


const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
