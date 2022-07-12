const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Create a user
const create = async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(200).json(createJWT(createdUser))
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Login
const login = async (req, res) => {
    try {
        // Find user by email
        const user = await User.findOne({
            email: req.body.email
        })

        console.log(user)

        // Throw error if user is not found
        if(!user) throw new Error()

        const match = await bcrypt.compare(req.body.password, user.password)

        // If the pws don't match throw error
        if(!match) throw new Error()

        res.status(200).json(createJWT(user))
    } catch(e) {
        res.status(401).json({
            msg: e.message,
            reason: 'Bad Credentials'
        })
    }
}

// Find a user
const show = async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Update a user
const update = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Helper Function
const createJWT = user => {
    return jwt.sign(
        // payload
        {user},
        // secret
        process.env.SECRET,
        // options
        {expiresIn: '48h'}
    )
}

module.exports = {
    create,
    login,
    show,
    update
}