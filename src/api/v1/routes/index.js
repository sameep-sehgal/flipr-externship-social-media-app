const express = require('express');
const userRoutes = require('./user.route');

const router = express.Router();

/**
 * GET v1/ping
 */
router.get('/ping', (req, res) => res.send('OK'));

router.use('/users', userRoutes);

module.exports = router;