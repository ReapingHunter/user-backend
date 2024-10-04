const { createUser, findUserByUsername, findUserById } = require("../models/userModel")
const jwt = require("jsonwebtoken")
const Joi = require("joi")

// Validate user registration
const validateRegister = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
})

// Validate login registration
const validateLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
})

// CREATE a new user
const register = (req, res) => {
  const { error } = validateRegister.validate(req.body)
  if(error){
    return res.status(400).json({ message: error.details[0].message })
  }
  const { username, password, email } = req.body
  if(findUserByUsername(username)){
    return res.status(401).json({message: "Username already exists."})
  }
  createUser({ id: Number, username, password, email })
  res.status(201).json({ message: 'User registered successfully' })

}

// Login a user and make a token
const login = (req, res) => {
  const { error } = validateLogin.validate(req.body)
  if(error){
    return res.status(400).json({ message: error.details[0].message })
  }

  const { username, password } = req.body
  const user = findUserByUsername(username)
  if(!user || password !== user.password){
    return res.status(402).json({message: "Invalid username or password."})
  }
  const token = jwt.sign({id: user.id}, "secretKey", {expiresIn: "1h"})
  return res.json({token})
}

// GET user profile
const getProfile = (req, res) => {
  const userID = req.user.id
  const user = findUserById(userID)
  if(!user){
    return res.status(404).json({ message: 'User not found' })
  }
  res.json({ username: user.username, email: user.email })
}

module.exports = { register, login, getProfile }