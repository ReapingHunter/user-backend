const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "..", "data", "users.json")

// GET users from json
const getUsers = () => {
  return JSON.parse(fs.readFileSync(usersPath, "utf8"))
}

// Write updated users back to JSON
const saveUsers = (users) => {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

// Register a new user
const createUser = (user) => {
  const users = getUsers()
  user.id = users.length // Assign ID based on array length
  users.push(user)
  saveUsers(users)
}

// Find user by username
const findUserByUsername = (username) => {
  return getUsers().find((user) => user.username === username)
}

// Find user by id
const findUserById = (id) => {
  return getUsers().find((user) => user.id === id)
}
module.exports = { getUsers, createUser, findUserByUsername, findUserById }