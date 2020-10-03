const router = require('express').Router();
const circularController = require('../controllers/circular.controller');

router.get('/', circularController.read);

router.get('/:id', circularController.findById);

router.post('/', circularController.create);

router.delete('/:id', circularController.delete);

// router.put('/:id', circularController.update);

module.exports = router;