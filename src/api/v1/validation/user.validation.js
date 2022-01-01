const Joi = require('joi');

module.exports = {
    // POST /api/v1/users/signup
    signupValidation: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(128).required(),
    }),

    //POST /api/v1/users/login
    loginValidation: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).max(128).required()
    }),

    //POST /api/v1/users/email_verify
    emailVerifyValidation: Joi.object({
        username: Joi.string().required(),
        otp: Joi.number().min(6).max(6).required()
    }),

    //POST /api/v1/users/forgot_password
    forgotPasswordValidation: Joi.object({
        username: Joi.string().required(),
        otp: Joi.number().min(6).max(6).required()
    }),

    //POST /api/v1/users/reset_password
    forgotPasswordValidation: Joi.object({
        username: Joi.string().required(),
        oldPassword: Joi.string().min(6).max(128).required(),
        newPassword: Joi.string().min(6).max(128).required()
    }),
}
