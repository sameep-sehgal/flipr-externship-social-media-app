const Joi = require('joi');
const User = require('../models/user.model');

module.exports = {
    // POST /api/v1/users
    createUser: {
        body: {
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(128).required(),
        },
    },

    //GET /api/v1/users/:userid
    getUser: {
        
    }
}