const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.Load_List);
router.post('/login',userController.Login);
router.post('/register', userController.Register);
router.put('/:id', userController.Update);
router.delete('/:id', userController.Delete);

module.exports = router;