const router = require('express').Router();
const booksController = require('../controllers/books.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');


router.get('/', authent, booksController.read);

router.get('/:id', authent, authori, booksController.findById);

router.post('/', authent, authori, booksController.create);

router.delete('/:id', authent, authori, booksController.delete);

router.put('/:id', authent, authori, booksController.update);

module.exports = router;

