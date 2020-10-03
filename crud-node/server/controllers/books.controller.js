const Books = require('../models/books.model');


class BooksController {
    static create(req, res) {
        Books.create(req.body)
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
        Books.findByIdAndUpdate({ _id: req.params.id }, {
            $set:
            {
                judul: req.body.judul,
                pengarang: req.body.pengarang,
                penerbit: req.body.penerbit,
                thTerbit: req.body.thTerbit
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
        Books.findByIdAndRemove({ _id: req.params.id })
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
        Books.find()
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
        Books.findById({ _id: req.params.id })
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

module.exports = BooksController;
