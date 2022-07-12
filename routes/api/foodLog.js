const express = require('express')
const router = express.Router()
const foodLogCtrl = require('../../controllers/api/foodLog')

// GET /api/v1/foodlog
router.get('/', foodLogCtrl.index)
// POST /api/v1/foodlog
router.post('/', foodLogCtrl.create)
// PUT /api/v1/foodlog/:id
router.put('/:id', foodLogCtrl.update)
// Delete /api/v1/foodlog/:id
router.delete('/:id', foodLogCtrl.remove)

module.exports = router