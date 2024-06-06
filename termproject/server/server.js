const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./database");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 회원 가입 라우트
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;

  db.run(query, [username, hashedPassword], function (err) {
    if (err) {
      return res.status(500).send("Error registering new user");
    }
    res.status(201).send({ id: this.lastID, username });
  });
});

// 로그인 라우트
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const query = `SELECT * FROM users WHERE username = ?`;
  db.get(query, [username], async (err, row) => {
    if (err) {
      return res.status(500).send("Error retrieving user");
    }
    if (!row) {
      return res.status(401).send("Invalid username or password");
    }

    const isPasswordValid = await bcrypt.compare(password, row.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid username or password");
    }

    res.status(200).send({ message: "Login successful" });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
