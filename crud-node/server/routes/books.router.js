const router = require('express').Router();
const booksController = require('../controllers/books.controller');
const authent = require('../middleware/authentication');


router.get('/', authent, booksController.read);

router.get('/:id', authent, booksController.findById);

router.post('/', authent, booksController.create);

router.delete('/:id', authent, booksController.delete);

router.put('/:id', authent, booksController.update);

module.exports = router;

