const router = require('express').Router();
const booksController = require('../controllers/books.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');


router.get('/books', authent, booksController.read);

router.get('/books/:id', authent, authori, booksController.findById);

router.post('/books', authent, authori, booksController.create);

router.delete('/books/:id', authent, authori, booksController.delete);

router.put('/books/:id', authent, authori, booksController.update);

module.exports = router;

