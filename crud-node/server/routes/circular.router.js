const router = require('express').Router();
const circularController = require('../controllers/circular.controller');
const authent = require('../middleware/authentication');

router.get('/', authent, circularController.read);

router.get('/:id', authent, circularController.findById);

router.post('/', authent, circularController.create);

router.delete('/:id', authent, circularController.delete);

// router.put('/:id', circularController.update);

module.exports = router;