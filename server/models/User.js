const mongoose = require('mongoose');
const { Schema } = mongoose;
const Order = require('./Order');

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

const User = mongoose.model('User', userSchema);