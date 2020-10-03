const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.read);

router.get('/:id', userController.findById);

router.post('/', userController.create);

router.delete('/:id', userController.delete);

router.put('/:id', userController.update);

router.post('/login', userController.login);

module.exports = router;

