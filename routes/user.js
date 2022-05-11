const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/', auth, userController.Load_List);
router.post('/login',userController.Login);
router.post('/register', userController.Register);
router.put('/:id', auth, userController.Update);
router.delete('/:id', auth, userController.Delete);

module.exports = router;