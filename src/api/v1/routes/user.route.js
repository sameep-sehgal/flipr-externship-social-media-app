const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/user.controller');

const router = express.Router();

// router.param('userId', controller.load);

router
    .route('/')
    .get();

router
    .route('/signup')
    .post();

router
    .route('/login')
    .post();

router
    .route('/email_verify')
    .post();

router
    .route('/forgot_password')
    .post();

router
    .route('/:userId')
    .get()
    .put()
    .delete();

module.exports = router;