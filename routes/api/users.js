const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/v1/users
router.post('/', usersCtrl.create)

// POST /api/v1/users/login
router.post('/login', usersCtrl.login)

// The below routes should not be accessible to unauthorized users

// GET /api/v1/users/:id
router.get('/:id', usersCtrl.show)
// PUT /api/v1/users/:id
router.put('/:id', usersCtrl.update)

module.exports = router