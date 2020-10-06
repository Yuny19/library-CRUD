const router = require('express').Router();
const circularController = require('../controllers/circular.controller');
const authent = require('../middleware/authentication');

router.get('/circular', authent, circularController.read);

router.get('/circular/:id', authent, circularController.findById);

router.post('/circular', authent, circularController.create);

router.delete('/circular/:id', authent, circularController.delete);

router.put('/circular/:id', circularController.update);

module.exports = router;