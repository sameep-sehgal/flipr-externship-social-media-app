const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        trim: true,
        lowercase: true,
    },
    email_verified: {
        type: Boolean,
        default: false,
        required: true
    },
    password_hash: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
    },
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }  
});

const User = mongoose.model("user", userSchema);
module.exports = User;