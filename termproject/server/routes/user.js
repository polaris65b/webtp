const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.run(sql, [username, hashedPassword], (err) => {
    if (err) {
      return res.status(500).send("Error registering new user.");
    }
    res.status(200).send("User registered successfully.");
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.get(sql, [username], async (err, row) => {
    if (err) {
      return res.status(500).send("Error logging in.");
    }
    if (!row) {
      return res.status(400).send("User not found.");
    }

    const match = await bcrypt.compare(password, row.password);
    if (match) {
      res.status(200).send("Login successful.");
    } else {
      res.status(400).send("Invalid password.");
    }
  });
});

module.exports = router;
