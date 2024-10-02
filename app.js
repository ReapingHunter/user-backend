const express = require("express")
const routes = require("./routes/user")

const app = express()
const port = 3000

// Middleware to parse JSON
app.use(express.json())

app.use('/', routes)

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})