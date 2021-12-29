const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/user.controller');

const router = express.Router();

// router.param('userId', controller.load);

router
    .route('/')
    .get()
    .post();


router
    .route('/profile')
    .get();

router
    .route('/:userId')
    .get()
    .put()
    .delete();

module.exports = router;