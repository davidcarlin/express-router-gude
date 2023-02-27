const express = require("express");
const router = express.Router();

// List of Fruits
let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];

// Get all fruits
router.get("/", (req, res) => {
  res.json(fruits);
});

// Get a particular fruit by its index in the array
router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (id < 1 || id > fruits.length) {
    res.status(404).send("Fruit not found");
  } else {
    res.json(fruits[id - 1]);
  }
});

// Create a new fruit
router.post("/", (req, res) => {
  const { name, color } = req.body;

  if (!name || !color) {
    res.status(400).send("Please provide a name and color for the fruit");
  } else {
    const newFruit = { name, color };
    fruits.push(newFruit);
    res.status(201).json(newFruit);
  }
});

// Update a fruit
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, color } = req.body;

  if (id < 1 || id > fruits.length) {
    res.status(404).send("Fruit not found");
  } else if (!name || !color) {
    res.status(400).send("Please provide a name and color for the fruit");
  } else {
    const updatedFruit = { name, color };
    fruits[id - 1] = updatedFruit;
    res.json(updatedFruit);
  }
});

// Remove an existing fruit
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id < 1 || id > fruits.length) {
    res.status(404).send("Fruit not found");
  } else {
    fruits.splice(id - 1, 1);
    res.sendStatus(204);
  }
});

module.exports = router;
