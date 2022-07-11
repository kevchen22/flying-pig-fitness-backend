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

// Exercises
app.use('/api/v1/home', ensureLoggedIn)

// ===== PORT =====
const PORT = 8080

app.listen(PORT, () => console.log(`Express app running on port ${PORT}`))