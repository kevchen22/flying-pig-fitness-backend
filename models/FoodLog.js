const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodLogSchema = new Schema({
    food: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number
    },
    carbs: {
        type: Number
    },
    fiber: {
        type: Number
    },
    fat: {
        type: Number
    },
    sugar: {
        type: Number
    },
    date: {
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('FoodLog', foodLogSchema)