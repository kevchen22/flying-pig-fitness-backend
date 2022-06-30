const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    phone: String,
    picture: String,
    active: Boolean,
}, {
    timestamps: true,
    toJSON: {
        // ret is the JSON'ed user object
        transform: function (doc, ret) {
            // We don't want to return the password back to the client
            delete ret.password
            return ret
        }
    }
})

module.exports = mongoose.model('User', userSchema)