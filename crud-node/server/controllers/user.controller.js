const Users = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


class UserController {
    static create(req, res) {
        Users.create(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({
                    message: err.message
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
                    message: err.message
                });
            })
    }

    static delete(req, res) {
        Users.findByIdAndRemove({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    message: 'delete success'
                })
            })
            .catch((err) => {
                res.status(400).json({
                    message: err.message
                });
            })
    }

    static read(req, res) {
        Users.find({})
            .then(data => {
                res.status(200).json({
                    data: data
                });
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static findById(req, res) {
        Users.findById({ _id: req.params.id })
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static login(req, res) {
        Users.findOne({ email: req.body.email }).then((user) => {
            // const pass = req.body.password;

            const checkLogin = bcrypt.compareSync(req.body.password,user.password);
            if (checkLogin) {
                var token = jwt.sign({ id: user.email, role: user.role }, process.env.SECRET_KEY);

                res.status(200).json({
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
