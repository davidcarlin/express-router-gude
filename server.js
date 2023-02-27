const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const usersRouter = require("./routes/users");
const fruitsRouter = require("./routes/fruits");

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

// Express Routes

app.use(bodyParser.json());

app.use("/users", usersRouter);

app.use("/fruits", fruitsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
