const User = require('../models/user.model');
const { 
    signupValidation, 
    loginValidation, 
    emailVerifyValidation, 
    forgotPasswordValidation 
} = require('../validation/user.validation');
const {sendTestEmail} = require('../services/email.service')

exports.signup = async (req,res) => {
    try {
        //Validate Response Body
        const validatedResponse = await signupValidation.validateAsync(req.body);

        const {username, email, password} = validatedResponse;

        //Check whether username is already taken
        const userExists = await User.findOne({username});
        if(userExists){
            return res.status(422).json({error: "Username already exists."});
        }

        //Check whether email is already taken and verified
        const verifiedEmailExists = await User.findOne({email, email_verified: true});
        if(verifiedEmailExists){
            return res.status(422).json({error: "Email already used by another user."});
        }

        //Save the User in the database, Password is hashed as middleware
        const user = new User({
            username,
            email,
            password_hash: password
        });
        await user.save();

        sendTestEmail(user)

        res.status(201).json({message: "User successfully registered"});
    }catch(error){
        //API Validation Failed Error
        if(error.isJoi){
            //Todo("Create helper method to create response object")
            res.status(422).send(error);
            return;
        }
        console.log(error);
        res.sendStatus(500);
    }
}

exports.login = async (req,res) => {
    try {
        //Validate Response Body
        const validatedResponse = await loginValidation.validateAsync(req.body);
        console.log(validatedResponse);
        res.json(validatedResponse);
    }catch(error){
        //API Validation Failed Error
        if(error.isJoi){
            //Todo("Create helper method to create response object")
            res.send(error);
            return;
        }
        console.log(error);
        res.sendStatus(500);
    }
}

exports.emailVerify = async (req,res) => {
    try {
        //Validate Response Body
        const validatedResponse = await emailVerifyValidation.validateAsync(req.body);
        console.log(validatedResponse);
        res.json(validatedResponse);
    }catch(error){
        console.log(error)
    }
}

exports.forgotPassword =  async (req,res) => {
    try {
        //Validate Response Body
        const validatedResponse = await forgotPasswordValidation.validateAsync(req.body);
        console.log(validatedResponse);
        //Verify OTP

        //Generate new password save in DB and return as response
        res.json(validatedResponse);
    }catch(error){
        console.log(error)
    }
}

exports.getUser = (req, res) => {}

exports.updateUser = (req, res) => {}

exports.deleteUser = (req, res) => {}

exports.getUsersList = (req,res) => {
    res.send("Working /");
}