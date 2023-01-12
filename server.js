// Imports
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')

// MIDDLEWARES
app.use(express.json())
app.use(cors())

// Check if token and create req.user
app.use(require('./config/checkToken'))

// Routes
// Users
app.use('/api/v1/users', require('./routes/api/users'))

// Protect API routes below from unauthorized users
const ensureLoggedIn = require('./config/ensureLoggedIn')

// Workouts
app.use('/api/v1/workouts', ensureLoggedIn, require('./routes/api/workouts'))

// Food Log
app.use('/api/v1/foodlog', ensureLoggedIn, require('./routes/api/foodLog'))

// Exercises
app.use('/api/v1/home', ensureLoggedIn)

// ===== PORT =====
app.listen(process.env.PORT || 8080);