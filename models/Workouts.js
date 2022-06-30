const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutsSchema = new Schema({
    workout: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    calories: {
        type: Number,
        required: true
    },
    avgHeartRate: {
        type: Number
    },
    experience: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('Workouts', workoutsSchema)