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

module.exports = { validateRegister, validateLogin }