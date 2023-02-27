const express = require("express");
const router = express.Router();

// List of Users
let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

// Get all users
router.get("/", (req, res) => {
  res.json(users);
});

// Get a particular user by their index in the array
router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (id < 1 || id > users.length) {
    res.status(404).send("User not found");
  } else {
    res.json(users[id - 1]);
  }
});

module.exports = router;
