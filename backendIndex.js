const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URL = process.env.MONGODB_URL;
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

// Mongoose Model
const Collection = mongoose.model(
  "datas",
  {
    name: String,
    password: Number,
  },
  "data"
);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "frontend", "build")));

// Serve 'index.html' for all routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// Login Route
app.get("/login", async (req, res) => {
  try {
    const data = await Collection.find();
    res.send(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Signup Route
app.post("/signup", async (req, res) => {
  const { uname: newUsername, passw: newPassword } = req.body;

  try {
    const existingUser = await Collection.findOne({ name: newUsername });
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    const userData = new Collection({
      name: newUsername,
      password: newPassword,
    });
    await userData.save();
    console.log("New user registered");
    res.send("User registered successfully");
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
