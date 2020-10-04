const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.get('/user/', authent, userController.read);

router.get('/user/:id', authent, userController.findById);

router.post('/user/', authent, authori, userController.create);

router.delete('/user/:id', authent, authori, userController.delete);

router.put('/user/:id', authent, authori, userController.update);

router.post('/user/login', userController.login);

module.exports = router;

