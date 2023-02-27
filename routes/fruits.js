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

module.exports = router;
