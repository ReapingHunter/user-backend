const express = require("express")
const { register, login, getProfile } = require("../controllers/userController")
const { authenticate } = require("../middleware/authMiddleware")

const router = express.Router()

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to User and Profile management API!');
})

// Register and login routes
router.post("/register", register)
router.post("/login", login)

// User profile route
router.get("/profile", authenticate, getProfile)

module.exports = router