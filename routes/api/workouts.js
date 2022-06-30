const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../../controllers/api/workouts')

// GET /api/v1/workouts
router.get('/', workoutsCtrl.index)
// POST /api/v1/workouts
router.post('/', workoutsCtrl.create)
// PUT /api/v1/workouts/:id
router.put('/:id', workoutsCtrl.update)
// Delete /api/v1/workouts/:id
router.delete('/:id', workoutsCtrl.remove)

module.exports = router