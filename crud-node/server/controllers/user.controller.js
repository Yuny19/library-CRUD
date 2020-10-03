const Users = require('../models/user.model');
const jwt = require('jsonwebtoken');


class UserController {
    static create(req, res) {
        Users.create(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({
                    message: 'please check your entry data'
                })
            })
    }

    static update(req, res) {
        Users.findByIdAndUpdate({ _id: req.params.id }, {
            $set:
            {
                name: req.body.name,
                email: req.body.email,
            }
        })
            .then(data => {
                res.status(201).json(data);
            })
            .catch((err) => {
                res.status(400).json({
                    message: 'check data'
                });
            })
    }

    static delete(req, res) {
        Users.findByIdAndRemove({ _id: req.params.id })
            .then(data => {
                res.status(200).json('delete success')
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    }

    static read(req, res) {
        Users.find()
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }

    static findById(req, res) {
        Users.findById({ _id: req.params.id })
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json(err);
            })
    }

    static login(req, res) {
        Users.findOne({email: req.body.email}).then((user) => {
            const pass = req.body.password;
            if (pass == user.password) {
                var token = jwt.sign({ id: user.email, role: user.role }, process.env.SECRET_KEY);

                res.status(200).json({
                    data: user,
                    token: token
                });

            } else {
                res.status(403).json({
                    message: "Forbidden",
                });
            }
        }).catch((err) => {
            res.status(401).json({
                message: err.message,
            });
        });
    }
}

module.exports = UserController;
