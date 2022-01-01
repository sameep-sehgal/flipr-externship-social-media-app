const express = require('express');
const controller = require('../controllers/user.controller');


const router = express.Router();

// router.param('userId', controller.load);

router.get("/", controller.getUsersList);

router.post('/signup', controller.signup);

router.post('/login', controller.login);

router.post('/email_verify', controller.emailVerify);

router.post('/forgot_password', controller.forgotPassword);

router.get('/:userId', controller.getUser);

router.put('/:userId', controller.updateUser);

router.delete('/:userId', controller.deleteUser);

module.exports = router;