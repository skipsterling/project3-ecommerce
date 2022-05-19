const mongoose = require('mongoose');
const { Schema } = mongoose;
const Order = require('./Order');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    firstName: { 
        type: String,
        required: true,
        trim: true
    },
    lastName: { 
        type: String,
        requried: true,
        trim: true
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        requrired: true,
        minLength: 8
    },
    orders: [Order.schema]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
};
const User = mongoose.model('User', userSchema);

module.exports = User;