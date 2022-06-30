const Workouts = require('../../models/Workouts')

// Find all workouts
const index = async (req, res) => {
    try {
        const workouts = await Workouts.find({})
        res.status(200).json(workouts)
    } catch (e) {
        res.status(400).json({msg: e.message})
    }
}

// Create a workout
const create = async (req, res) => {
    try {
        const createdWorkout = await Workouts.create(req.body)
        res.status(200).json(createdWorkout)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Update a workout
const update = async (req, res) => {
    try {
        const updatedWorkout = await Workouts.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedWorkout)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Delete a workout
const remove = async (req, res) => {
    try {
        const deletedWorkout = await Workouts.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedWorkout)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index,
    create,
    update,
    remove
}