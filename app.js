const express = require("express")
const routes = require("./routes/user")
const { loggingMiddleware } = require('./middleware/loggingMiddleware')
const { rateLimiterMiddleware } = require('./middleware/rateLimiterMiddleware')

const app = express()
const port = 3000

// Middlewares
app.use(express.json())
app.use(loggingMiddleware)
app.use(rateLimiterMiddleware)

app.use('/', routes)

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})