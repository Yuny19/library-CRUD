const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authent = require('../middleware/authentication');

router.get('/', authent, userController.read);

router.get('/:id', authent, userController.findById);

router.post('/', authent, userController.create);

router.delete('/:id', authent, userController.delete);

router.put('/:id', authent, userController.update);

router.post('/login', userController.login);

module.exports = router;

