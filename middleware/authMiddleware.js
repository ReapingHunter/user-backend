const jwt = require("jsonwebtoken")

// Authenticate user
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(!token) {
    return res.status(403).json({ message: 'No token provided' })
  }
  jwt.verify(token, "secretKey", (err, decoded) => {
    if(err){
      return res.status(500).json({ message: 'Failed to authenticate token' })
    }
    req.user = decoded
    next()
  })
}

module.exports = { authenticate }