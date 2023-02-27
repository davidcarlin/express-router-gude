const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

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

// Create a new user
router.post(
  "/",
  [
    check("name", "Name field is required and cannot be empty")
      .trim()
      .notEmpty(),
    check("age", "Age field is required and must be a positive number").isInt({
      min: 1,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age } = req.body;
    const newUser = { name, age };
    users.push(newUser);
    res.status(201).json(newUser);
  }
);

// Update an existing user
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;

  if (id < 1 || id > users.length) {
    res.status(404).send("User not found");
  } else if (!name || !age) {
    res.status(400).send("Please provide a name and age for the user");
  } else {
    const updatedUser = { name, age };
    users[id - 1] = updatedUser;
    res.json(updatedUser);
  }
});

// Remove an existing user
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id < 1 || id > users.length) {
    res.status(404).send("User not found");
  } else {
    users.splice(id - 1, 1);
    res.sendStatus(204);
  }
});

module.exports = router;
