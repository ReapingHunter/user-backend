const rateLimit = require("express-rate-limit")

const rateLimiterMiddleware = rateLimit({
  windowMs: 30 * 1000, // 30 secs
  max: 5, // 5 reqs
  message: {
    status: 429,
    message: "Too many requests. Please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
})

module.exports = { rateLimiterMiddleware }