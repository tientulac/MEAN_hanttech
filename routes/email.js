const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const auth = require('../middlewares/auth');

router.post('/send-email', auth, emailController.SendEmail);

module.exports = router;