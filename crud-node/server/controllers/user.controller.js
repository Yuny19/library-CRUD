const Users = require('../model/user.model');

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

    static login(req, res){
        
    }
}

module.exports = UserController;
