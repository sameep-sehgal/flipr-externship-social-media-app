const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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

//Password hashing middleware runs before saving in database
userSchema.pre('save', async function (next){
    this.password_hash = await bcrypt.hash(this.password_hash,12)
    next()
});

const User = mongoose.model("user", userSchema);
module.exports = User;

