const FoodLog = require('../../models/FoodLog')

// Find all food
const index = async (req, res) => {
    try {
        const foodLog = await FoodLog.find({})
        res.status(200).json(foodLog)
    } catch (e) {
        res.status(400).json({msg: e.message})
    }
}

// Create a food
const create = async (req, res) => {
    try {
        const createdFood = await FoodLog.create(req.body)
        res.status(200).json(createdFood)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Update a food
const update = async (req, res) => {
    try {
        const updatedFood = await FoodLog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedFood)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Delete a food
const remove = async (req, res) => {
    try {
        const deletedFood = await FoodLog.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedFood)
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