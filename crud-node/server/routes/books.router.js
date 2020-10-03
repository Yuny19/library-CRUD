const router = require('express').Router();
const booksController = require('../controllers/books.controller');

router.get('/', booksController.read);

router.get('/:id', booksController.findById);

router.post('/', booksController.create);

router.delete('/:id', booksController.delete);

router.put('/:id', booksController.update);

module.exports = router;

