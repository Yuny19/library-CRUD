const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.get('/', authent, userController.read);

router.get('/:id', authent, userController.findById);

router.post('/', authent, authori, userController.create);

router.delete('/:id', authent, authori, userController.delete);

router.put('/:id', authent, authori, userController.update);

router.post('/login', userController.login);

module.exports = router;

