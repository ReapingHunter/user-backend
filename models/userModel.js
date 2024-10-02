const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "..", "data", "users.json")

// GET users from json
const getUsers = () => {
  const users = fs.readFileSync(usersPath, "utf8")
  return JSON.parse(users)
}

// Write updated users back to JSON
const saveUsers = (users) => {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

module.exports = { getUsers, saveUsers }