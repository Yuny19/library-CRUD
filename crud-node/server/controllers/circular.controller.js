const Circular = require('../models/circular.model');


class CircularController {
    static create(req, res) {
        Circular.create(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({
                    message: err.message
                })
            })
    }

    // static update(req, res) {
    //     Circular.findByIdAndUpdate({ _id: req.params.id }, {
    //         $set:
    //         {
    //             name: req.body.name,
    //             email: req.body.email,
    //         }
    //     })
    //         .then(data => {
    //             res.status(201).json(data);
    //         })
    //         .catch((err) => {
    //             res.status(400).json({
    //                 message: err.message
    //             });
    //         })
    // }

    static delete(req, res) {
        Circular.findByIdAndRemove({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    message: 'delete success'
                });
            })
            .catch((err) => {
                res.status(400).json({
                    message: err.message
                });
            })
    }

    static read(req, res) {
        Circular.find()
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static findById(req, res) {
        Circular.findById({ _id: req.params.id })
            .then(data => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }
}

module.exports = CircularController;
